import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-white" />
			</SheetTrigger>
			<SheetContent className="p-0 z-[100]" side="left">
				<SheetTitle className="sr-only">
					Mobile Sidebar
				</SheetTitle>
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}