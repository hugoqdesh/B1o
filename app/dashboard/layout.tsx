import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export default function MailLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />

				<SidebarInset>
					{/* header for mobile to collapse and expand sidebar */}
					<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
						<SidebarTrigger className="-ml-1 block md:hidden px-4" />
					</header>

					<div>{children}</div>
				</SidebarInset>
			</SidebarProvider>
		</>
	);
}
