"use client";

import * as React from "react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { NavFooter } from "./nav-footer";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			{/* Sidebar Header */}
			<SidebarHeader>
				<NavUser />

				<Link href="/demo" target="_blank">
					<Button className="w-full">
						<ExternalLink />
						My Page
					</Button>
				</Link>
			</SidebarHeader>

			{/* Main Sidebar Content */}
			<SidebarContent>
				<NavMain />
			</SidebarContent>

			{/* Sidebar Footer */}
			<SidebarFooter>
				<NavFooter />
			</SidebarFooter>
		</Sidebar>
	);
}
