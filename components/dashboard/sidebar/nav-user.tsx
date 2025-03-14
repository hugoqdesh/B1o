"use client";

import { Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

// User type definition for better type safety
interface User {
	name: string;
	site: string;
	avatar?: string;
}

const user: User = {
	name: "demo",
	site: "b1o.me/hugoqdesh",
	avatar: "/cat.jpg", // Path to the user's avatar image
};

export function NavUser() {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton size="lg" aria-label="User Profile">
					<Avatar className="h-8 w-8 rounded-full">
						<AvatarImage
							src={user.avatar}
							alt={user.name}
							onError={(e) => (e.currentTarget.style.display = "none")}
						/>
						<AvatarFallback className="rounded-lg">
							{user.name.charAt(0).toUpperCase()}
						</AvatarFallback>
					</Avatar>

					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold">{user.name}</span>

						<div className="flex items-center gap-0.5 text-muted-foreground truncate text-xs">
							<Globe size={13} aria-hidden="true" />
							<span>{user.site}</span>
						</div>
					</div>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
