import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	Facebook,
	Github,
	Globe,
	Instagram,
	Linkedin,
	PlusIcon,
	Twitch,
	Twitter,
	Youtube,
} from "lucide-react";

// Mapping of social platform names to their icon components
const socialIcons = {
	Youtube,
	Instagram,
	Twitter,
	Github,
	Twitch,
	Linkedin,
	Facebook,
	Globe,
};

// Renders an interactive social media icon that opens a dialog allowing the user to paste and link their social media profile
function SocialIconDialog({
	name,
	Icon,
}: {
	name: string;
	Icon: React.ComponentType<{ className?: string }>;
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className="bg- flex items-center justify-center rounded-2xl w-max p-2 mx-auto cursor-pointer transition duration-200">
									<Icon className="w-8 h-8" />
								</div>
							</TooltipTrigger>
							<TooltipContent>{name}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{name} Social</DialogTitle>
				</DialogHeader>
				<Input placeholder="Paste your link" />
				<Button variant="outline" className="max-sm:p-0">
					<PlusIcon
						className="opacity-60 sm:-ms-1"
						size={16}
						aria-hidden="true"
					/>
					<span className="max-sm:sr-only">Add</span>
				</Button>
			</DialogContent>
		</Dialog>
	);
}

// Displays a grid of social media icons
export default function LinksPage() {
	return (
		<main className="max-w-7xl mx-auto px-6">
			<Card>
				<CardHeader>
					<CardTitle>Link your social media profiles</CardTitle>
					<CardDescription>
						Pick a social media to add to your profile.
					</CardDescription>
				</CardHeader>
				<div className="grid grid-cols-3 md:grid-cols-8 items-center gap-y-12">
					{Object.entries(socialIcons).map(([name, Icon]) => (
						<SocialIconDialog key={name} name={name} Icon={Icon} />
					))}
				</div>
			</Card>
		</main>
	);
}
