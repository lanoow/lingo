import type { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react";
import { useAudio, useKey } from "react-use";

type Props = {
	id: number;
	text: string;
	imageSrc: string | null;
	shortcut: string;
	selected?: boolean;
	onClick: () => void;
	status: "correct" | "wrong" | "none";
	audioSrc: string | null;
	disabled?: boolean;
	type: typeof challenges.$inferSelect["type"];
}

export const Card = ({
	id,
	text,
	imageSrc,
	shortcut,
	selected = false,
	onClick,
	status = "none",
	audioSrc,
	disabled = false,
	type,
}: Props) => {
	const [audio, _, controls] = useAudio({ src: audioSrc || "", crossOrigin: "anonymous" });

	const handleClick = useCallback(() => {
		if (disabled) return;

		controls.play();
		onClick();
	}, [disabled, onClick, controls]);

	useKey(shortcut, handleClick, {}, [handleClick]);

	return (
		<button
			type="button"
			onClick={handleClick}
			className={cn(
				"h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2 transition",
				selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
				selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
				selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
				disabled && "pointer-events-none hover:bg-white opacity-70",
				type === "ASSIST" && "lg:p-3 w-full"
			)}
		>
			{audio}
			{imageSrc && (
				<div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
					<Image
						src={imageSrc}
						alt={text}
						width={300}
						height={300}
						className="max-h-[80px] lg:max-h-[150px] object-contain "
					/>
				</div>
			)}
			<div className={cn(
				"flex items-center justify-between",
				type === "ASSIST" && "flex-row-reverse",
			)}>
				{type === "ASSIST" && <div />}
				<p className={cn(
					"text-neutral-600 text-sm lg:text-base",
					selected && "text-sky-500",
					selected && status === "correct" && "text-green-500",
					selected && status === "wrong" && "text-rose-500",
				)}>
					{text}
				</p>
				<div className={cn(
					"lg:size-[30px] size-[20px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font-semibold",
					selected && "border-sky-300 text-sky-500",
					selected && status === "correct" && "border-green-500 text-green-500",
					selected && status === "wrong" && "border-rose-500 text-rose-500",
				)}>
					{shortcut}
				</div>
			</div>
		</button>
	);
}