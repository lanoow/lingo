import { Button } from "@/components/ui/button";
import { getCourses } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";

export const Footer = async () => {
	const courses = await getCourses();
	const fiveCourses = courses.slice(0, 5);

	return (
		<footer className="hidden w-full h-20 p-2 border-t-2 lg:block border-slate-200">
			<div className="flex items-center w-full h-full max-w-screen-lg mx-auto justify-evenly">
				{fiveCourses.map((course) => (
					<Button
						key={course.id}
						size="lg"
						variant="ghost"
						asChild
					>
						<Link href="/courses">
							<Image
								src={course.imageSrc}
								alt={course.title}
								height={32}
								width={40}
								className="rounded-md"
							/>
							Spanish
						</Link>
					</Button>
				))}
			</div>
		</footer>
	);
}