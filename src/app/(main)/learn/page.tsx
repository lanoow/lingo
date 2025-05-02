import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./_components/header";
import { UserProgress } from "@/components/user-progress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./_components/unit";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

export default async function LearnPage() {
	const userProgressPromise = getUserProgress();
	const unitsPromise = getUnits();
	const courseProgressPromise = getCourseProgress();
	const lessonPercentagePromise = getLessonPercentage();
	const userSubscriptionPromise = getUserSubscription();

	const [
		userProgress,
		units,
		courseProgress,
		lessonPercentage,
		userSubscription,
	] = await Promise.all([
		userProgressPromise,
		unitsPromise,
		courseProgressPromise,
		lessonPercentagePromise,
		userSubscriptionPromise,
	]);

	if (!userProgress || !userProgress.activeCourse || !courseProgress) {
		redirect("/courses");
	}

	return (
		<div className="flex flex-row-reverse gap-12 px-6">
			<StickyWrapper>
				<UserProgress
					activeCourse={userProgress.activeCourse}
					hearts={userProgress.hearts}
					points={userProgress.points}
					hasActiveSubscription={!!userSubscription?.isActive}
				/>
				{!!userSubscription?.isActive === false && (
					<Promo />
				)}
				<Quests points={userProgress.points} />
			</StickyWrapper>
			<FeedWrapper>
				<Header title={userProgress.activeCourse.title} />
				{units.map((unit) => (
					<div key={unit.id} className="mb-10">
						<Unit
							id={unit.id}
							order={unit.order}
							title={unit.title}
							description={unit.description}
							lessons={unit.lessons}
							activeLesson={courseProgress?.activeLesson}
							activeLessonPercentage={lessonPercentage}
						/>
					</div>
				))}
			</FeedWrapper>
		</div>
	)
}