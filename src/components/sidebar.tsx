import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

interface Props {
	className?: string;
}

export const Sidebar = ({ className }: Props) => {
	return (
		<div className={cn("top-0 left-0 flex flex-col h-full px-4 border-r-2 lg:fixed lg:w-64", className)}>
			<Link href="/learn">
				<div className="flex items-center pt-8 pl-4 pb-7 gap-x-3">
					<Image
						src="/images/mascot.svg"
						alt="Lingo mascot"
						width={128}
						height={128}
						className="object-cover size-10"
					/>

					<h1 className="text-2xl font-extrabold tracking-wide text-green-600">Lingo</h1>
				</div>
			</Link>
			<div className="flex flex-col gap-y-2 flex-1">
				<SidebarItem
					label="Learn"
					href="/learn"
					iconSrc="/images/learn.svg"
				/>

				<SidebarItem
					label="Leaderboard"
					href="/leaderboard"
					iconSrc="/images/leaderboard.svg"
				/>

				<SidebarItem
					label="Quests"
					href="/quests"
					iconSrc="/images/quests.svg"
				/>

				<SidebarItem
					label="Shop"
					href="/shop"
					iconSrc="/images/shop.svg"
				/>

				<SidebarItem
					label="Dictionary"
					href="/dictionary"
					iconSrc="/images/dictionary.png"
				/>
			</div>

			<div className="p-4">
				<ClerkLoading>
					<Loader className="size-5 text-muted-foreground animate-spin" />
				</ClerkLoading>
				<ClerkLoaded>
					<UserButton />
				</ClerkLoaded>
			</div>
		</div>
	);
}