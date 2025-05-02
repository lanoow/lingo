
import Image from "next/image";

import { cn } from "@/lib/utils";
import { InfinityIcon } from "lucide-react";

type Props = {
	value: number;
	variant: "points" | "hearts";
	hasActiveSubscription?: boolean;
}

export const ResultCard = ({ value, variant, hasActiveSubscription }: Props) => {
	const imageSrc = variant === "points" ? "/images/points.svg" : "/images/heart.svg";

	return (
		<div className={cn(
			"rounded-2xl border-2 w-full",
			variant === "points" && "bg-orange-400 border-orange-400",
			variant === "hearts" && "bg-rose-400 border-rose-400",
		)}>
			<div className={cn(
				"p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
				variant === "points" && "bg-orange-400",
				variant === "hearts" && "bg-rose-500"
			)}>
				{variant === "points" ? "Total XP" : "Hearts left"}
			</div>
			<div className={cn(
				"rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
				variant === "points" && "text-orange-400",
				variant === "hearts" && "text-rose-400"
			)}>
				<Image
					src={imageSrc}
					alt={variant}
					width={30}
					height={30}
					className="mr-1.5"
				/>

				{variant === "hearts" && hasActiveSubscription ? (
					<InfinityIcon className="stroke-3 size-6 shrink-0" />
				) : value}
			</div>
		</div>
	)
};