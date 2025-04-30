import { MobileSidebar } from "@/components/mobile-sidebar";

export const MobileHeader = () => {
	return (
		<nav className="fixed top-0 z-50 flex items-center w-full h-12 px-6 bg-green-500 border-b lg:hidden">
			<MobileSidebar />
		</nav>
	)
}