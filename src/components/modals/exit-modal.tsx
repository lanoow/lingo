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
import { useExitModal } from "@/store/use-exit-modal";

export const ExitModal = () => {
	const router = useRouter();
	const [isClient, setIsClient] = useState<boolean>(false);
	const { isOpen, close } = useExitModal();

	useEffect(() => setIsClient(true), []);

	if (!isClient) {
		return null;
	}

	return (
		<Dialog open={isOpen} onOpenChange={close}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<div className="flex items-center justify-center w-full mb-5">
						<Image
							src="/images/mascot_sad.svg"
							alt="Sad mascot"
							width={80}
							height={80}
						/>
					</div>

					<DialogTitle className="text-2xl font-bold text-center">
						Wait, don&apos;t go!
					</DialogTitle>
					<DialogDescription className="text-base text-center">
						You&apos;re about to leave the lesson. Are you sure you want to exit?
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="mb-4">
					<div className="flex flex-col w-full gap-y-4">
						<Button
							size="lg"
							variant="primary"
							className="w-full"
							onClick={close}
						>
							Keep learning
						</Button>

						<Button
							size="lg"
							variant="dangerGhost"
							className="w-full"
							onClick={() => {
								close();
								router.push("/learn");
							}}
						>
							End session
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}