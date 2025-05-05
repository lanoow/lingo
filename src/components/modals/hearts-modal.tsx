"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
	const router = useRouter();
	const [isClient, setIsClient] = useState<boolean>(false);
	const { isOpen, close } = useHeartsModal();

	useEffect(() => setIsClient(true), []);

	if (!isClient) {
		return null;
	}

	const onClick = () => {
		close();
		router.push("/shop");
	}

	return (
		<Dialog open={isOpen} onOpenChange={close}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<div className="flex items-center justify-center w-full mb-5">
						<Image
							src="/images/mascot_bad.svg"
							alt="Sad mascot"
							width={80}
							height={80}
						/>
					</div>

					<DialogTitle className="text-2xl font-bold text-center">
						You ran out of hearts!
					</DialogTitle>
					<DialogDescription className="text-base text-center">
						Get Pro for unlimited hearts, or purchase them in the store.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="mb-4">
					<div className="flex flex-col w-full gap-y-4">
						<Button
							size="lg"
							variant="primary"
							className="w-full"
							onClick={onClick}
						>
							Get unlimited hearts
						</Button>

						<Button
							size="lg"
							variant="primaryGhost"
							className="w-full"
							onClick={close}
						>
							No thanks
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}