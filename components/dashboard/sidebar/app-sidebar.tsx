"use client";

import * as React from "react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";
import { ExternalLink, Eye, MessageSquareShare } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { NavFooter } from "./nav-footer";
import Link from "next/link";
import Copy from "../copy-url";
import { Button } from "@/components/ui/button";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			{/* sidebar header */}
			<SidebarHeader>
				<NavUser />

				<div className="flex items-center justify-center gap-2 mt-1">
					<Link href="/demo" target="_blank">
						<Button className="w-28">
							<Eye className="-ms-1 opacity-60" size={16} aria-hidden="true" />
							Preview
						</Button>
					</Link>

					<Dialog>
						<DialogTrigger asChild>
							<Button variant="secondary" className="w-28">
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
									platforms
								</DialogDescription>
							</DialogHeader>
							<div className="flex items-center justify-center gap-2">
								<Copy />
								<Link href="/demo" target="_blank">
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

			{/* main sidebar content */}
			<SidebarContent>
				<NavMain />
			</SidebarContent>

			{/* sidebar footer */}
			<SidebarFooter>
				<NavFooter />
			</SidebarFooter>
		</Sidebar>
	);
}
