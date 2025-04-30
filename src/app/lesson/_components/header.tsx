import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
	hearts: number;
	percentage: number;
	hasActiveSubscription: boolean;
}

export const Header = ({
	hearts,
	percentage,
	hasActiveSubscription,
}: Props) => {
	const { open } = useExitModal();

	return (
		<header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
			<X
				onClick={open}
				className="transition cursor-pointer text-neutral-500 hover:opacity-75"
			/>

			<Progress value={percentage} />

			<div className="flex items-center font-bold text-rose-500">
				<Image
					src="/images/heart.svg"
					width={28}
					height={28}
					alt="Heart"
					className="mr-2"
				/>

				{hasActiveSubscription ? (
					<InfinityIcon className="stroke-3 size-6" />
				) : hearts}
			</div>
		</header>
	)
}