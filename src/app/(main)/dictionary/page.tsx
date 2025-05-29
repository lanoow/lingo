import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Separator } from "@/components/ui/separator";
import { UserProgress } from "@/components/user-progress";
import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { DictionaryItem, DictionaryTable } from "./_components/table";

export default async function Leaderboard() {
	const userProgressPromise = getUserProgress();
	const userSubscriptionPromise = getUserSubscription();
	const leaderboardPromise = getTopTenUsers();

	const [
		userProgress,
		userSubscription,
		leaderboard,
	] = await Promise.all([
		userProgressPromise,
		userSubscriptionPromise,
		leaderboardPromise,
	]);

	if (!userProgress || !userProgress.activeCourse) {
		redirect("/courses");
	}

	const dictionary = [
		{
			id: 1,
			word: "la mujer",
			translation: "woman",
			soundSrc: "/sounds/es/woman.mp3",
		},
		{
			id: 2,
			word: "el hombre",
			translation: "man",
			soundSrc: "/sounds/es/man.mp3",
		},
		{
			id: 3,
			word: "el chico",
			translation: "boy",
			soundSrc: "/sounds/es/boy.mp3",
		},
		{
			id: 4,
			word: "la nina",
			translation: "girl",
			soundSrc: "/sounds/es/girl.mp3",
		},
		{
			id: 5,
			word: "el robot",
			translation: "robot",
			soundSrc: "/sounds/es/robot.mp3",
		},
	] as DictionaryItem[];

	return (
		<div className="flex flex-row-reverse gap-12 px-6">
			<StickyWrapper>
				<UserProgress
					activeCourse={userProgress.activeCourse}
					points={userProgress.points}
					hearts={userProgress.hearts}
					hasActiveSubscription={!!userSubscription?.isActive}
				/>
				{!!userSubscription?.isActive === false && (
					<Promo />
				)}
				<Quests points={userProgress.points} />
			</StickyWrapper>
			<FeedWrapper>
				<div className="flex flex-col items-center w-full">
					<Image
						src="/images/dictionary.png"
						alt="Dictionary"
						width={90}
						height={90}
					/>
					<h1 className="my-6 text-2xl font-bold text-center text-neutral-800">
						Dictionary
					</h1>
					<p className="mb-6 text-lg text-center text-muted-foreground">
						Master the language with our comprehensive dictionary. Explore words, their meanings, and usage examples to enhance your vocabulary and understanding.
					</p>
					<Separator
						orientation="horizontal"
						className="w-full mb-4 h-0.5 rounded-full"
					/>

					<DictionaryTable dictionary={dictionary} />
				</div>
			</FeedWrapper>
		</div>
	);
}