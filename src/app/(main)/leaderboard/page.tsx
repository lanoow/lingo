import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { UserProgress } from "@/components/user-progress";
import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

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
						src="/images/leaderboard.svg"
						alt="Leaderboard"
						width={90}
						height={90}
					/>
					<h1 className="my-6 text-2xl font-bold text-center text-neutral-800">
						Leaderboard
					</h1>
					<p className="mb-6 text-lg text-center text-muted-foreground">
						See where you stand among other learners in the community.
					</p>
					<Separator
						orientation="horizontal"
						className="w-full mb-4 h-0.5 rounded-full"
					/>
					{leaderboard.map((user, idx) => (
						<div
							key={user.userId}
							className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50 transition"
						>
							<p className="font-bold text-lime-700 mr-4">{idx + 1}</p>
							<Avatar className="border bg-green-500 size-12 mx-3">
								<AvatarImage
									src={user.userImageSrc}
									className="object-cover"
								/>
							</Avatar>
							<p className="font-bold text-neutral-800 flex-1">
								{user.userName}
							</p>
							<p className="text-muted-foreground">
								{user.points} XP
							</p>
						</div>
					))}
				</div>
			</FeedWrapper>
		</div>
	);
}