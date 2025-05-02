import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Items } from "./_components/items";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

export default async function Shop() {
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
				<Quests points={userProgress.points} />
			</StickyWrapper>
			<FeedWrapper>
				<div className="flex flex-col items-center w-full">
					<Image
						src="/images/shop.svg"
						alt="Shop"
						width={90}
						height={90}
					/>
					<h1 className="my-6 text-2xl font-bold text-center text-neutral-800">
						Shop
					</h1>
					<p className="mb-6 text-lg text-center text-muted-foreground">
						Spend your hard-earned points on cool stuff!
					</p>
					<Items
						hearts={userProgress.hearts}
						points={userProgress.points}
						hasActiveSubscription={!!userSubscription?.isActive}
					/>
				</div>
			</FeedWrapper>
		</div>
	);
}