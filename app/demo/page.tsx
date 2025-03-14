import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	Gem,
	Github,
	Globe,
	HelpCircle,
	Instagram,
	Verified,
} from "lucide-react";
import { JSX } from "react";

// Define an array of badge objects for the user.
const userBadges = [
	{ title: "Verified", icon: <Verified className="w-4 h-4" /> },
	{ title: "Premium", icon: <Gem className="w-4 h-4" /> },
];

// Define an array of social link objects.
const socialLinks = [
	{ title: "Website", url: "#", icon: <Globe /> },
	{ title: "GitHub", url: "#", icon: <Github /> },
	{ title: "Instagram", url: "#", icon: <Instagram /> },
];

// A separate component to render a social link with tooltip.
function SocialLink({
	title,
	url,
	icon,
}: {
	title: string;
	url: string;
	icon: JSX.Element;
}) {
	return (
		<Link
			href={url}
			className="text-muted-foreground hover:text-primary transition duration-200"
		>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>{icon}</TooltipTrigger>
					<TooltipContent>
						<p>{title}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Link>
	);
}

// Main profile card component.
export default function Page() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen px-6">
			<Card className="max-w-2xl w-full">
				{/* Card header: User info and social links */}
				<CardHeader className="flex flex-col md:flex-row items-center justify-between w-full">
					<CardTitle className="flex flex-col md:flex-row gap-6 items-center">
						{/* User Avatar */}
						<Avatar className="h-18 w-18 md:h-22 md:w-22 rounded-full">
							<AvatarImage src="/cat.jpg" alt="User profile image" />
							<AvatarFallback className="rounded-lg">B</AvatarFallback>
						</Avatar>

						{/* User Name and Badges */}
						<div className="flex flex-col gap-2">
							<div className="flex gap-2 items-center">
								<h2 className="text-2xl">hugoqdesh</h2>
								<Badge variant="outline" className="rounded-full">
									{userBadges.map((badge) => (
										<span key={badge.title}>{badge.icon}</span>
									))}
								</Badge>
							</div>
							<p className="text-muted-foreground font-medium text-sm text-center md:text-start">
								My IP is 127.0.0.1
							</p>
						</div>
					</CardTitle>

					{/* Social links rendered with tooltips */}
					<div className="flex items-center gap-3 mt-4 md:mt-0">
						{socialLinks.map((link) => (
							<SocialLink
								key={link.title}
								title={link.title}
								url={link.url}
								icon={link.icon}
							/>
						))}
					</div>
				</CardHeader>

				{/* Card content: Tips card */}
				<CardContent>
					<Link href="#">
						<Card className="flex flex-row items-center justify-between px-4">
							<HelpCircle />
							<CardTitle>Tips</CardTitle>
						</Card>
					</Link>
				</CardContent>
			</Card>
		</main>
	);
}
