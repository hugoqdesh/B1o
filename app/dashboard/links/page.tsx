import {
	Discord,
	Facebook,
	GitHub,
	Instagram,
	Kickstarter,
	Linkedin,
	OnlyFans,
	Pinterest,
	Reddit,
	Roblox,
	Snapchat,
	SoundCloud,
	Spotify,
	Steam,
	TikTok,
	Twitch,
	X,
	YouTube,
} from "@/components/icons/social-icons";
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
import { PlusIcon } from "lucide-react";

// Mapping of social platform names to their icon components
const socialIcons = {
	Snapchat,
	Discord,
	YouTube,
	GitHub,
	Instagram,
	TikTok,
	Spotify,
	SoundCloud,
	Linkedin,
	X,
	Roblox,
	Twitch,
	Reddit,
	OnlyFans,
	Steam,
	Kickstarter,
	Pinterest,
	Facebook,
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
								<div className="bg-secondary hover:bg-primary/10 dark:bg-primary/80 hover:dark:bg-primary/60 flex items-center justify-center rounded-2xl w-max p-2 border-border border mx-auto cursor-pointer hover:-translate-y-1 transition duration-200">
									<Icon className="w-10 h-10" />
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
		<main className="max-w-7xl mx-auto px-6 md:px-0">
			<Card>
				<CardHeader>
					<CardTitle>Link your social media profiles</CardTitle>
					<CardDescription>
						Pick a social media to add to your profile.
					</CardDescription>
				</CardHeader>
				<div className="grid grid-cols-3 md:grid-cols-9 items-center gap-y-12">
					{Object.entries(socialIcons).map(([name, Icon]) => (
						<SocialIconDialog key={name} name={name} Icon={Icon} />
					))}
				</div>
			</Card>
		</main>
	);
}
