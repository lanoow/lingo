import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";


export default function ButtonsPage() {
	return (
		<div className="flex flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Buttons</h1>

			<div className="flex flex-col gap-4 w-fit">
				<h2 className="text-xl font-semibold">Default</h2>
				<div className="flex items-center gap-2">
					<Button variant="default">Default</Button>
					<Button variant="default" size="lg">
						Default Large
					</Button>
					<Button variant="default" size="sm">
						Default Small
					</Button>
					<Button variant="default" size="icon">
						<Home />
					</Button>
					<Button variant="default">
						<Home />
						With Icon
					</Button>
					<Button variant="default" size="rounded">
						Default Rounded
					</Button>
					<Button variant="default" disabled>
						Default Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Ghost</h2>
				<div className="flex items-center gap-2">
					<Button variant="ghost">Ghost</Button>
					<Button variant="ghost" size="lg">
						Ghost Large
					</Button>
					<Button variant="ghost" size="sm">
						Ghost Small
					</Button>
					<Button variant="ghost" size="icon">
						<Home />
					</Button>
					<Button variant="ghost">
						<Home />
						With Icon
					</Button>
					<Button variant="ghost" size="rounded">
						Ghost Rounded
					</Button>
					<Button variant="ghost" disabled>
						Ghost Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Primary</h2>
				<div className="flex items-center gap-2">
					<Button variant="primary">Primary</Button>
					<Button variant="primary" size="lg">
						Primary Large
					</Button>
					<Button variant="primary" size="sm">
						Primary Small
					</Button>
					<Button variant="primary" size="icon">
						<Home />
					</Button>
					<Button variant="primary">
						<Home />
						With Icon
					</Button>
					<Button variant="primary" size="rounded">
						Primary Rounded
					</Button>
					<Button variant="primary" disabled>
						Primary Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Primary Ghost</h2>
				<div className="flex items-center gap-2">
					<Button variant="primaryGhost">Primary Ghost</Button>
					<Button variant="primaryGhost" size="lg">
						Primary Ghost Large
					</Button>
					<Button variant="primaryGhost" size="sm">
						Primary Ghost Small
					</Button>
					<Button variant="primaryGhost" size="icon">
						<Home />
					</Button>
					<Button variant="primaryGhost">
						<Home />
						With Icon
					</Button>
					<Button variant="primaryGhost" size="rounded">
						Primary Ghost Rounded
					</Button>
					<Button variant="primaryGhost" disabled>
						Primary Ghost Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Secondary</h2>
				<div className="flex items-center gap-2">
					<Button variant="secondary">Secondary</Button>
					<Button variant="secondary" size="lg">
						Secondary Large
					</Button>
					<Button variant="secondary" size="sm">
						Secondary Small
					</Button>
					<Button variant="secondary" size="icon">
						<Home />
					</Button>
					<Button variant="secondary">
						<Home />
						With Icon
					</Button>
					<Button variant="secondary" size="rounded">
						Secondary Rounded
					</Button>
					<Button variant="secondary" disabled>
						Secondary Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Secondary Ghost</h2>
				<div className="flex items-center gap-2">
					<Button variant="secondaryGhost">Secondary Ghost</Button>
					<Button variant="secondaryGhost" size="lg">
						Secondary Ghost Large
					</Button>
					<Button variant="secondaryGhost" size="sm">
						Secondary Ghost Small
					</Button>
					<Button variant="secondaryGhost" size="icon">
						<Home />
					</Button>
					<Button variant="secondaryGhost">
						<Home />
						With Icon
					</Button>
					<Button variant="secondaryGhost" size="rounded">
						Secondary Ghost Rounded
					</Button>
					<Button variant="secondaryGhost" disabled>
						Secondary Ghost Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Danger</h2>
				<div className="flex items-center gap-2">
					<Button variant="danger">Danger</Button>
					<Button variant="danger" size="lg">
						Danger Large
					</Button>
					<Button variant="danger" size="sm">
						Danger Small
					</Button>
					<Button variant="danger" size="icon">
						<Home />
					</Button>
					<Button variant="danger">
						<Home />
						With Icon
					</Button>
					<Button variant="danger" size="rounded">
						Danger Rounded
					</Button>
					<Button variant="danger" disabled>
						Danger Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Danger Ghost</h2>
				<div className="flex items-center gap-2">
					<Button variant="dangerGhost">Danger Ghost</Button>
					<Button variant="dangerGhost" size="lg">
						Danger Ghost Large
					</Button>
					<Button variant="dangerGhost" size="sm">
						Danger Ghost Small
					</Button>
					<Button variant="dangerGhost" size="icon">
						<Home />
					</Button>
					<Button variant="dangerGhost">
						<Home />
						With Icon
					</Button>
					<Button variant="dangerGhost" size="rounded">
						Danger Ghost Rounded
					</Button>
					<Button variant="dangerGhost" disabled>
						Danger Ghost Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Super</h2>
				<div className="flex items-center gap-2">
					<Button variant="super">Super</Button>
					<Button variant="super" size="lg">
						Super Large
					</Button>
					<Button variant="super" size="sm">
						Super Small
					</Button>
					<Button variant="super" size="icon">
						<Home />
					</Button>
					<Button variant="super">
						<Home />
						With Icon
					</Button>
					<Button variant="super" size="rounded">
						Super Rounded
					</Button>
					<Button variant="super" disabled>
						Super Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Super Ghost</h2>
				<div className="flex items-center gap-2">
					<Button variant="superGhost">Super Ghost</Button>
					<Button variant="superGhost" size="lg">
						Super Ghost Large
					</Button>
					<Button variant="superGhost" size="sm">
						Super Ghost Small
					</Button>
					<Button variant="superGhost" size="icon">
						<Home />
					</Button>
					<Button variant="superGhost">
						<Home />
						With Icon
					</Button>
					<Button variant="superGhost" size="rounded">
						Super Ghost Rounded
					</Button>
					<Button variant="superGhost" disabled>
						Super Ghost Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Sidebar</h2>
				<div className="flex items-center gap-2">
					<Button variant="sidebar">Sidebar</Button>
					<Button variant="sidebar" size="lg">
						Sidebar Large
					</Button>
					<Button variant="sidebar" size="sm">
						Sidebar Small
					</Button>
					<Button variant="sidebar" size="icon">
						<Home />
					</Button>
					<Button variant="sidebar">
						<Home />
						With Icon
					</Button>
					<Button variant="sidebar" size="rounded">
						Sidebar Rounded
					</Button>
					<Button variant="sidebar" disabled>
						Sidebar Disabled
					</Button>
				</div>

				<h2 className="text-xl font-semibold">Sidebar Active</h2>
				<div className="flex items-center gap-2">
					<Button variant="sidebarActive">Sidebar Active</Button>
					<Button variant="sidebarActive" size="lg">
						Sidebar Active Large
					</Button>
					<Button variant="sidebarActive" size="sm">
						Sidebar Active Small
					</Button>
					<Button variant="sidebarActive" size="icon">
						<Home />
					</Button>
					<Button variant="sidebarActive">
						<Home />
						With Icon
					</Button>
					<Button variant="sidebarActive" size="rounded">
						Sidebar Active Rounded
					</Button>
					<Button variant="sidebarActive" disabled>
						Sidebar Active Disabled
					</Button>
				</div>
			</div>
		</div>
	);
}