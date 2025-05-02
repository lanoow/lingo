"use client";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { POINTS_TO_REFILL } from "@/constants";
import Image from "next/image";
import { useTransition } from "react";

type Props = {
	hearts: number;
	points: number;
	hasActiveSubscription: boolean;
}

export const Items = ({
	hearts,
	points,
	hasActiveSubscription,
}: Props) => {
	const [isPending, startTransition] = useTransition();

	const onRefillHearts = () => {
		if (isPending || hearts === 5 || points < POINTS_TO_REFILL) {
			return;
		}

		startTransition(() => {
			refillHearts();
		});
	}

	const onUpgrade = () => {
		if (isPending) {
			return;
		}

		startTransition(() => {
			createStripeUrl()
				.then((response) => {
					if (response.data) {
						window.location.href = response.data;
					}
				});
		});
	}

	return (
		<ul className="w-full">
			<div className="flex items-center w-full p-4 border-t-2 gap-x-4">
				<Image
					src="/images/heart.svg"
					alt="Heart"
					width={60}
					height={60}
				/>
				<div className="flex-1">
					<p className="text-base font-bold text-neutral-700 lg:text-xl">
						Refill hearts
					</p>
				</div>

				<Button
					onClick={onRefillHearts}
					disabled={
						isPending
						|| hearts === 5
						|| points < POINTS_TO_REFILL
					}
				>
					{hearts === 5
						? "full"
						: (
							<div className="flex items-center">
								<Image
									src="/images/points.svg"
									alt="Points"
									width={20}
									height={20}
								/>
								<p>
									{POINTS_TO_REFILL}
								</p>
							</div>
						)}
				</Button>
			</div>

			<div className="flex items-center w-full p-4 border-t-2 gap-x-4">
				<Image
					src="/images/unlimited.svg"
					alt="Unlimited"
					width={60}
					height={60}
				/>
				<div className="flex-1">
					<p className="text-base font-bold text-neutral-700 lg:text-xl">
						Unlimited hearts
					</p>
				</div>

				<Button
					onClick={onUpgrade}
					disabled={isPending}
				>
					{hasActiveSubscription
						? "settings" : "upgrade"}
				</Button>
			</div>
		</ul>
	)
}