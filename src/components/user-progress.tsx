import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import type { courses } from "@/db/schema";

type Props = {
	activeCourse: typeof courses.$inferSelect;
	hearts: number;
	points: number;
	hasActiveSubscription: boolean;
}

export const UserProgress = ({
	activeCourse,
	hearts,
	points,
	hasActiveSubscription,
}: Props) => {
	return (
		<div className="flex items-center justify-between w-full gap-x-2">
			<Link href="/courses">
				<Button variant="ghost">
					<Image
						src={activeCourse.imageSrc}
						alt={activeCourse.title}
						width={32}
						height={32}
						className="border rounded-md"
					/>
				</Button>
			</Link>
			<Link href="/shop">
				<Button variant="ghost" className="text-orange-500">
					<Image
						src="/images/points.svg"
						alt="Points"
						width={28}
						height={28}
						className="mr-2"
					/>
					{points}
				</Button>
			</Link>
			<Link href="/shop">
				<Button variant="ghost" className="text-rose-500">
					<Image
						src="/images/heart.svg"
						alt="Points"
						width={28}
						height={28}
						className="mr-2"
					/>
					{hasActiveSubscription ?
						<InfinityIcon className="size-4 stroke-3 shrink-0" />
						: hearts
					}
				</Button>
			</Link>
		</div>
	)
}