import type { challengeOptions, challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import { Card } from "./card";

type Props = {
	options: typeof challengeOptions.$inferSelect[];
	onSelect: (id: number) => void;
	status: "correct" | "wrong" | "none";
	selectedOption?: number;
	disabled?: boolean;
	type: typeof challenges.$inferSelect["type"];
}

export const Challenge = ({
	options,
	onSelect,
	status,
	selectedOption,
	disabled = false,
	type,
}: Props) => {
	return (
		<div className={cn(
			"grid gap-2",
			type === "ASSIST" && "grid-cols-1",
			type === "SELECT" && "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
		)}>
			{options.map((option, idx) => (
				<Card
					key={option.id}
					id={option.id}
					text={option.text}
					imageSrc={option.imageSrc}
					shortcut={`${idx + 1}`}
					selected={selectedOption === option.id}
					onClick={() => onSelect(option.id)}
					status={status}
					audioSrc={option.audioSrc}
					disabled={disabled || status !== "none" && selectedOption !== option.id}
					type={type}
				/>
			))}
		</div>
	);
}