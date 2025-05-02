import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { quests } from "@/constants";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Quests() {
	const userProgressPromise = getUserProgress();
	const userSubscriptionPromise = getUserSubscription();

	const [
		userProgress,
		userSubscription,
	] = await Promise.all([
		userProgressPromise,
		userSubscriptionPromise,
	]);

	if (!userProgress || !userProgress.activeCourse) {
		redirect("/courses");
	}

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
			</StickyWrapper>
			<FeedWrapper>
				<div className="flex flex-col items-center w-full">
					<Image
						src="/images/quests.svg"
						alt="Quests"
						width={90}
						height={90}
					/>
					<h1 className="my-6 text-2xl font-bold text-center text-neutral-800">
						Quests
					</h1>
					<p className="mb-6 text-lg text-center text-muted-foreground">
						Complete quests by earning points.
					</p>
					<ul className="w-full">
						{quests.map((quest) => {
							const progress = (userProgress.points / quest.value) * 100;

							return (
								<li
									key={quest.title}
									className="flex items-center w-full p-4 gap-x-4 border-t-2"
								>
									<Image
										src="/images/points.svg"
										alt="Points"
										width={60}
										height={60}
									/>

									<div className="flex flex-col gap-y-2 w-full">
										<p className="text-neutral-700 text-xl font-bold">
											{quest.title}
										</p>
										<Progress
											value={progress}
											className="h-3"
										/>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</FeedWrapper>
		</div>
	);
}