"use client";

import { HeartHandshake, Settings, Share2 } from "lucide-react";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import Copy from "../copy-url";

const links = [
	{ title: "Settings", url: "/dashboard/settings", icon: Settings },
	{ title: "Help & Support", url: "#", icon: HeartHandshake },
];

export function NavFooter() {
	return (
		<SidebarMenu>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="secondary" aria-label="Share your profile">
						<Share2 className="-ms-1 opacity-60" size={16} aria-hidden="true" />
						Share Your Profile
					</Button>
				</DialogTrigger>

				<DialogContent>
					<AlertDialogHeader>
						<DialogTitle>Share your profile</DialogTitle>
						<DialogDescription>
							Get more views by sharing your b1o.me link across all platforms.
						</DialogDescription>
					</AlertDialogHeader>

					<div className="flex items-center justify-center gap-2 mt-4">
						<Copy />
						<Link
							href="/demo"
							target="_blank"
							aria-label="Open your page"
						></Link>
					</div>
				</DialogContent>
			</Dialog>

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
	);
}
