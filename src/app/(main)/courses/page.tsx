import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./_components/list";

export default async function CoursesPage() {
	const coursesPromise = getCourses();
	const userProgressPromise = getUserProgress();

	const [
		courses,
		userProgress,
	] = await Promise.all([
		coursesPromise,
		userProgressPromise,
	]);

	return (
		<div className="h-full max-w-[912px] px-3 mx-auto">
			<div>
				<h1 className="text-2xl font-bold text-neutral-700">
					Language Courses
				</h1>
				<p className="text-neutral-500">
					Explore our language courses and track your progress. Select a course to start learning or continue where you left off.
				</p>
			</div>

			<List
				courses={courses}
				activeCourseId={userProgress?.activeCourseId}
			/>
		</div>
	);
};