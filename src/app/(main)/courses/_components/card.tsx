import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

type Props = {
	course: {
		id: number;
		title: string;
		imageSrc: string;
	};
	onClick: (id: number) => void;
	disabled?: boolean;
	active?: boolean;
}

export const Card = ({
	course,
	onClick,
	disabled,
	active
}: Props) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: It's a card, so it should be clickable
		<div
			onClick={() => onClick(course.id)}
			className={cn(
				"h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px] transition",
				disabled && "cursor-not-allowed pointer-events-none opacity-50",
			)}
		>
			<div className="min-h-6 w-full flex items-center justify-end">
				{active && (
					<div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
						<CheckIcon className="text-white stroke-[4] size-4" />
					</div>
				)}
			</div>
			<Image
				src={course.imageSrc}
				alt={course.title}
				width={93.33}
				height={70}
				className="rounded-lg drop-shadow-md border object-cover"
			/>
			<p className="text-neutral-700 text-center font-bold mt-3">
				{course.title} 
			</p>
		</div>
	)
}
// 17:04