"use client";

import { ChartNoAxesCombined, House, Link2, UserRoundPen } from "lucide-react";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const links = [
	{ title: "Dashboard", url: "/dashboard", icon: House },
	{ title: "Links", url: "/dashboard/links", icon: Link2 },
	{ title: "Customize", url: "/dashboard/customize", icon: UserRoundPen },
	{
		title: "Analytics",
		url: "/dashboard/analytics",
		icon: ChartNoAxesCombined,
	},
];

export function NavMain() {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Home</SidebarGroupLabel>

			<SidebarMenu>
				{links.map((item) => (
					<SidebarMenuItem key={item.title}>
						<Link href={item.url} aria-label={item.title}>
							<SidebarMenuButton className="cursor-pointer">
								<item.icon size={18} aria-hidden="true" />
								<span>{item.title}</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
