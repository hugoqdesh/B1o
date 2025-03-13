import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

// Define the props for the DashboardLayout component.
interface DashboardLayoutProps {
	children: React.ReactNode;
}

// DashboardLayout wraps the dashboard content with a sidebar provider,
export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<SidebarProvider>
			{/* Sidebar component */}
			<AppSidebar />

			{/* SidebarInset wraps the main content and the mobile header */}
			<SidebarInset>
				{/* Mobile header with trigger for collapsing/expanding sidebar */}
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<SidebarTrigger className="-ml-1 block md:hidden px-4" />
				</header>

				{/* Main dashboard content */}
				<div>{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
