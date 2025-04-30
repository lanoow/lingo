"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
	label: string;
	iconSrc: string;
	href: string;
}

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Button
			variant={
				isActive ? "sidebarActive" : "sidebar"
			}
			className="justify-start h-13"
			asChild
		>
			<Link href={href}>
				<Image
					src={iconSrc}
					alt={label}
					width={32}
					height={32}
				/>
				{label}
			</Link>
		</Button>
	);
}