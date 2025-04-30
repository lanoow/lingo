"use client";

import type { challengeOptions, challenges } from "@/db/schema";
import { useState, useTransition } from "react";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { reduceHearts } from "@/actions/user-progress";
import { useAudio, useWindowSize, useMount } from "react-use";
import Image from "next/image";
import { ResultCard } from "./result-card";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePracticeModal } from "@/store/use-practice-modal";

const DynamicConfetti = dynamic(() => import("react-confetti"), { ssr: false })

type Props = {
	initialLessonId: number;
	initialPercentage: number;
	initialHearts: number;
	initialLessonChallenges: (typeof challenges.$inferSelect & {
		completed: boolean;
		challengeOptions: typeof challengeOptions.$inferSelect[];
	})[];
	// biome-ignore lint/suspicious/noExplicitAny: temporary
	userSubscription: any;
}

export const Quiz = ({
	initialLessonId,
	initialPercentage,
	initialHearts,
	initialLessonChallenges,
	userSubscription,
}: Props) => {
	const { open: openHeartsModal } = useHeartsModal();
	const { open: openPracticeModal } = usePracticeModal();

	useMount(() => {
		if (initialPercentage === 100) {
			openPracticeModal();
		}
	});

	const { width, height } = useWindowSize();
	const router = useRouter();

	const [
		correctAudio, _c, correctControls
	] = useAudio({ src: "/sounds/correct.wav", crossOrigin: "anonymous" });
	const [
		incorrectAudio, _i, incorrectControls
	] = useAudio({ src: "/sounds/incorrect.wav", crossOrigin: "anonymous" });
	const [
		finishAudio
	] = useAudio({ src: "/sounds/finish.mp3", autoPlay: true, crossOrigin: "anonymous" });

	const [isPending, startTransition] = useTransition();

	const [lessonId, _] = useState(initialLessonId);
	const [hearts, setHearts] = useState(initialHearts);
	const [percentage, setPercentage] = useState(() => {
		return initialPercentage === 100 ? 0 : initialPercentage;
	});
	const [challenges] = useState(initialLessonChallenges);
	const [activeIndex, setActiveIndex] = useState(() => {
		const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
		return uncompletedIndex === -1 ? 0 : uncompletedIndex;
	});

	const [selectedOption, setSelectedOption] = useState<number | undefined>(undefined);
	const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

	const challenge = challenges[activeIndex];
	const options = challenge?.challengeOptions ?? [];

	const onNext = () => {
		setActiveIndex((current) => current + 1);
	};

	const onSelect = (id: number) => {
		if (status !== "none") return;

		setSelectedOption(id);
	};

	const onContinue = () => {
		if (!selectedOption) return;

		if (status === "wrong") {
			setStatus("none");
			setSelectedOption(undefined);
			return;
		}

		if (status === "correct") {
			onNext();
			setStatus("none");
			setSelectedOption(undefined);
			return;
		}

		const correctOption = options.find((option) => option.correct);

		if (!correctOption) return;

		if (correctOption && correctOption.id === selectedOption) {
			startTransition(() => {
				upsertChallengeProgress(challenge.id)
					.then((response) => {
						if (response?.error === "hearts") {
							openHeartsModal();
							return;
						}

						correctControls.play();
						setStatus("correct");
						setPercentage((prev) => prev + (100 / challenges.length));

						// Practice mode
						if (initialPercentage === 100) {
							setHearts((prev) => Math.min(prev + 1, 5));
						}
					});
			});
		} else {
			startTransition(() => {
				reduceHearts(challenge.id)
					.then((response) => {
						if (response?.error === "hearts") {
							openHeartsModal();
							return;
						}

						if (response?.error === "practice") {
							console.error("You can't use hearts in practice mode.");
							return;
						}

						incorrectControls.play();
						setStatus("wrong");

						if (!response?.error) {
							setHearts((prev) => Math.max(prev - 1, 0));
							return;
						}
					});
			})
		}
	};

	if (!challenge) {
		return (
			<>
				{finishAudio}
				<DynamicConfetti
					recycle={false}
					numberOfPieces={500}
					tweenDuration={10000}
					width={width}
					height={height}
				/>

				<div className="flex flex-col items-center justify-center h-full max-w-lg mx-auto text-center gap-y-4 lg:gap-y-8">
					<Image
						src="/images/finish.svg"
						alt="Finish"
						width={100}
						height={100}
						className="hidden lg:block"
					/>
					<Image
						src="/images/finish.svg"
						alt="Finish"
						width={50}
						height={50}
						className="block lg:hidden"
					/>

					<h1 className="text-xl font-bold lg:text-3xl text-neutral-700">
						Gread job!
						<br />
						You&apos;ve completed the lesson.
					</h1>
					<div className="flex items-center w-full gap-x-4">
						<ResultCard
							variant="points"
							value={challenges.length * 10}
						/>
						<ResultCard
							variant="hearts"
							value={hearts}
						/>
					</div>
				</div>
				<Footer
					lessonId={lessonId}
					status="completed"
					onCheck={() => router.push("/learn")}
				/>
			</>
		)
	}

	const title = challenge.type === "ASSIST" ? "Select the correct meaning" : challenge.question;

	return (
		<>
			{correctAudio}
			{incorrectAudio}
			<Header
				hearts={hearts}
				percentage={percentage}
				hasActiveSubscription={!!userSubscription?.isActive}
			/>
			<div className="flex-1">
				<div className="flex items-center justify-center h-full">
					<div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
						<h1 className="text-lg font-bold text-center lg:text-3xl lg:text-start text-neutral-700">
							{title}
						</h1>
						<div>
							{challenge.type === "ASSIST" && (
								<QuestionBubble question={challenge.question} />
							)}
							<Challenge
								options={options}
								onSelect={onSelect}
								status={status}
								selectedOption={selectedOption}
								disabled={isPending}
								type={challenge.type}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer
				disabled={isPending || !selectedOption}
				status={status}
				onCheck={onContinue}
			/>
		</>
	)
}