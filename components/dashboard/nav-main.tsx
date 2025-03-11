"use client";

import { ChartNoAxesCombined, House, Link, Settings } from "lucide-react";

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const links = [
	{
		title: "Dashboard",
		url: "#",
		icon: House,
	},
	{
		title: "My Links",
		url: "#",
		icon: Link,
	},
	{
		title: "Analytics",
		url: "#",
		icon: ChartNoAxesCombined,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

export function NavMain({}) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Navigation</SidebarGroupLabel>
			<SidebarMenu>
				{links.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton tooltip={item.title}>
							{item.icon && <item.icon />}
							<span>{item.title}</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
