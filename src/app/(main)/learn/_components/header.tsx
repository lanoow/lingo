import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
	title: string;
}

export const Header = ({ title }: Props) => {
	return (
		<div className="sticky top-0 bg-white pb-3 lg:pt-7 lg:-mt-7 flex items-center justify-between border-b-2 text-neutral-400 lg:z-50">
			<Link href="/courses">
				<Button variant="ghost" size="sm">
					<ArrowLeft className="size-5 stroke-2 text-neutral-2" />
				</Button>
			</Link>
			<h1 className="font-bold text-lg">
				{title}
			</h1>
			<div />
		</div>
	);
};
