import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
	return (
		<footer className="hidden w-full h-20 p-2 border-t-2 lg:block border-slate-200">
			<div className="flex items-center w-full h-full max-w-screen-lg mx-auto justify-evenly">
				<Button size="lg" variant="ghost">
					<Image
						src="/images/flags/hr.svg"
						alt="Croatian"
						height={32}
						width={40}
						className="rounded-md"
					/>
					Croatian
				</Button>

				<Button size="lg" variant="ghost">
					<Image
						src="/images/flags/es.svg"
						alt="Spanish"
						height={32}
						width={40}
						className="rounded-md"
					/>
					Spanish
				</Button>

				<Button size="lg" variant="ghost">
					<Image
						src="/images/flags/fr.svg"
						alt="French"
						height={32}
						width={40}
						className="rounded-md"
					/>
					French
				</Button>

				<Button size="lg" variant="ghost">
					<Image
						src="/images/flags/it.svg"
						alt="Italian"
						height={32}
						width={40}
						className="rounded-md"
					/>
					Italian
				</Button>

				<Button size="lg" variant="ghost">
					<Image
						src="/images/flags/jp.svg"
						alt="Japanese"
						height={32}
						width={40}
						className="rounded-md"
					/>
					Japanese
				</Button>
			</div>
		</footer>
	);
}