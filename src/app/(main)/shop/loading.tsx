import { Loader } from "lucide-react";

export default function Loading() {
	return (
		<div className="flex items-center justify-center h-full w-full">
			<Loader className="size-8 text-muted-foreground animate-spin" />
		</div>
	);
}