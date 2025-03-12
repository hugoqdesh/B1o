"use client";

import { HeartHandshake, Settings } from "lucide-react";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const links = [
	// {
	// 	title: "Whats new",
	// 	url: "/dashboard/whats-new",
	// 	icon: Gift,
	// },
	{
		title: "Settings",
		url: "/dashboard/settings",
		icon: Settings,
	},
];

export function NavFooter({}) {
	return (
		<SidebarMenu>
			{links.map((item) => (
				<SidebarMenuItem key={item.title}>
					<Link href={item.url}>
						<SidebarMenuButton className="cursor-pointer">
							<item.icon />
							<span>{item.title}</span>
						</SidebarMenuButton>
					</Link>
				</SidebarMenuItem>
			))}
			<div className="flex">
				<Link href="/dashboard" className="w-full">
					<SidebarMenuButton className="cursor-pointer">
						<HeartHandshake />
						<span>Help & Support</span>
					</SidebarMenuButton>
				</Link>
				<ModeToggle />
			</div>
		</SidebarMenu>
	);
}
