"use client";

import * as React from "react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenuButton,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../mode-toggle";
import { NavAppearance } from "./nav-appearance";
import { Eye, HeartHandshake, MessageSquareShare } from "lucide-react";
import { Button } from "../ui/button";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<NavUser />

				<div className="flex items-center justify-center gap-2 mt-1">
					<Button className="w-28">
						<Eye className="h-4 w-4" />
						Preview
					</Button>
					<Button variant="secondary" className="w-28">
						<MessageSquareShare className="h-4 w-4" />
						Share
					</Button>
				</div>
			</SidebarHeader>

			<SidebarContent>
				<NavMain />
				<NavAppearance />
			</SidebarContent>

			<SidebarFooter>
				<div className="flex">
					<SidebarMenuButton className="cursor-pointer">
						<HeartHandshake />
						<span>Help & Support</span>
					</SidebarMenuButton>
					<ModeToggle />
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
