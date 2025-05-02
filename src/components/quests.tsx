import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { quests } from "@/constants";
import { Progress } from "@/components/ui/progress";

type Props = {
	points: number;
}

export const Quests = ({ points }: Props) => {
	// Filter to get only uncompleted quests (where points < quest.value)
	const uncompletedQuests = quests.filter((quest) => points < quest.value);
	// Get only the first 2 uncompleted quests
	const questsToShow = uncompletedQuests.slice(0, 2);

	return (
		<div className="border-2 rounded-xl p-4 space-y-4">
			<div className="flex items-center justify-between w-full space-y-2">
				<h3 className="font-bold text-lg">Quests</h3>
				<Button
					size="lg"
					variant="primaryGhost"
					asChild
				>
					<Link href="/quests">
						View all
					</Link>
				</Button>
			</div>
			<ul className="w-full space-y-4">
				{questsToShow.map((quest) => {
					const progress = (points / quest.value) * 100;

					return (
						<li
							key={quest.title}
							className="flex items-center w-full pb-4 gap-x-3"
						>
							<Image
								src="/images/points.svg"
								alt="Points"
								width={40}
								height={40}
							/>
							<div className="flex flex-col w-full">
								<h4 className="text-sm text-neutral-700 font-bold">{quest.title}</h4>
								<Progress value={progress} className="h-2" />
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}