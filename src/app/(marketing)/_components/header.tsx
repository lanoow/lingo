
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export const Header = () => {
	return (
		<header className="w-full h-20 px-4 border-b-2 border-slate-200">
			<div className="flex items-center justify-between h-full mx-auto lg:max-w-screen-lg">
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

				<ClerkLoading>
					<Loader className="size-5 text-muted-foreground animate-spin" />
				</ClerkLoading>

				<ClerkLoaded>
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton
							mode="modal"
							forceRedirectUrl="/learn"
							signUpForceRedirectUrl="/learn"
						>
							<Button size="lg" variant="ghost">
								Sign in
							</Button>
						</SignInButton>
					</SignedOut>
				</ClerkLoaded>
			</div>
		</header>
	);
}