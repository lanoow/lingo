import Image from "next/image";

type Props = {
	question: string;
}

export const QuestionBubble = ({ question }: Props) => {
	return (
		<div className="flex items-center mb-6 gap-x-4">
			<Image
				src="/images/mascot.svg"
				alt="Mascot"
				width={60}
				height={60}
				className="hidden lg:block"
			/>
			<Image
				src="/images/mascot.svg"
				alt="Mascot"
				width={40}
				height={40}
				className="block lg:hidden"
			/>
			<div className="relative px-4 py-2 text-sm border-2 rounded-xl lg:text-base">
				{question}	
				<div
					className="absolute transform rotate-90 -translate-y-1/2 border-t-8 -left-3 top-1/2 size-0 border-x-8 border-x-transparent"
				/>
			</div>
		</div>
	)
}
