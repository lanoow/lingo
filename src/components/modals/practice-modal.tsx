"use client";

import Image from "next/image";
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
import { usePracticeModal } from "@/store/use-practice-modal";

export const PracticeModal = () => {
	const [isClient, setIsClient] = useState<boolean>(false);
	const { isOpen, close } = usePracticeModal();

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
							src="/images/heart.svg"
							alt="Heart"
							width={80}
							height={80}
						/>
					</div>

					<DialogTitle className="text-2xl font-bold text-center">
						Practice lesson
					</DialogTitle>
					<DialogDescription className="text-base text-center">
						Use practice lessons to regain hearts and points. You cannot lose hearts or points in practice mode.
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
							I understand
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}