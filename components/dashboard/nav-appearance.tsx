"use client";

import { Image, SquareRoundCorner, Type, Wallpaper } from "lucide-react";

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const links = [
	{
		title: "Profile Picture",
		url: "#",
		icon: Image,
	},
	{
		title: "Background",
		url: "#",
		icon: Wallpaper,
	},
	{
		title: "Button Style",
		url: "#",
		icon: SquareRoundCorner,
	},
	{
		title: "Typography",
		url: "#",
		icon: Type,
	},
];

export function NavAppearance({}) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Appearance</SidebarGroupLabel>
			<SidebarMenu>
				{links.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton className="cursor-pointer">
							<item.icon />
							<span>{item.title}</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
