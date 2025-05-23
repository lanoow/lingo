import type { lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";

type Props = {
	id: number;
	order: number;
	title: string;
	description: string;
	lessons: (typeof lessons.$inferSelect & {
		completed: boolean;
	})[];
	activeLesson: typeof lessons.$inferSelect & {
		unit: typeof units.$inferSelect;
	} | undefined;
	activeLessonPercentage: number;
}

export const Unit = ({
	id,
	order,
	title,
	description,
	lessons,
	activeLesson,
	activeLessonPercentage,
}: Props) => {
	return (
		<>
			<UnitBanner
				title={title}
				description={description}
			/>

			<div className="relative flex flex-col items-center">
				{lessons.map((lesson, idx) => {
					const isCurrent = lesson.id === activeLesson?.id;
					const isLocked = !lesson.completed && !isCurrent;

					return (
						<LessonButton
							key={lesson.id}
							id={lesson.id}
							index={idx}
							totalCount={lessons.length}
							locked={isLocked}
							current={isCurrent}
							percentage={activeLessonPercentage}
						/>
					)
				})}
			</div>
		</>
	)
}