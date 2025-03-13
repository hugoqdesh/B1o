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
	{ title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function NavFooter() {
	return (
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

			<div className="flex items-center justify-between mt-2">
				<Link href="#" className="w-full" aria-label="Help & Support">
					<SidebarMenuButton className="cursor-pointer w-full">
						<HeartHandshake size={18} aria-hidden="true" />
						<span>Help & Support</span>
					</SidebarMenuButton>
				</Link>

				<ModeToggle />
			</div>
		</SidebarMenu>
	);
}
