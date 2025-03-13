"use client";

import * as React from "react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { NavFooter } from "./nav-footer";
import Copy from "../copy-url";
import Link from "next/link";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, MessageSquareShare } from "lucide-react";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			{/* Sidebar Header */}
			<SidebarHeader>
				<NavUser />

				{/* Preview & Share Buttons */}
				<div className="flex items-center justify-center gap-2 mt-1">
					{/* Preview Button */}
					<Link href="/demo" target="_blank" aria-label="Preview your profile">
						<Button className="w-28">
							<Eye className="-ms-1 opacity-60" size={16} aria-hidden="true" />
							Preview
						</Button>
					</Link>

					{/* Share Button */}
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant="secondary"
								className="w-28"
								aria-label="Share your profile link"
							>
								<MessageSquareShare
									className="-ms-1 opacity-60"
									size={16}
									aria-hidden="true"
								/>
								Share
							</Button>
						</DialogTrigger>

						<DialogContent>
							<DialogHeader>
								<DialogTitle>Share your profile</DialogTitle>
								<DialogDescription>
									Get more views by sharing your b1o.me link across all
									platforms.
								</DialogDescription>
							</DialogHeader>

							<div className="flex items-center justify-center gap-2 mt-4">
								<Copy />
								<Link href="/demo" target="_blank" aria-label="Open your page">
									<Button>
										<ExternalLink
											className="-ms-1 opacity-60"
											size={16}
											aria-hidden="true"
										/>
										Open my Page
									</Button>
								</Link>
							</div>
						</DialogContent>
					</Dialog>
				</div>
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
