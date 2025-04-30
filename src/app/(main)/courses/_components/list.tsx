"use client";

import type { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";

type Props = {
	courses: typeof courses.$inferSelect[];
	activeCourseId?: typeof userProgress.$inferSelect["activeCourseId"] | null;
}

export const List = ({ courses, activeCourseId }: Props) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const onClick = (courseId: number) => {
		if (isPending) return;

		if (activeCourseId === courseId) {
			return router.push("/learn");
		};

		startTransition(() => {
			upsertUserProgress(courseId);
		});
	}

	return (
		<div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
			{courses.map((course) => (
				<Card
					key={course.id}
					course={course}
					onClick={onClick}
					disabled={isPending}
					active={course.id === activeCourseId}
				/>
			))}
		</div>
	)
};