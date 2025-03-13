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
	DialogDescription,
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

export default function Page() {
	const icons = {
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

	return (
		<div className="px-6 md:px-0">
			<Card className="max-w-7xl mx-auto">
				<CardHeader>
					<CardTitle>Link your social media profiles</CardTitle>
					<CardDescription>
						Pick a social media to add to your profile.
					</CardDescription>
				</CardHeader>
				<div className="grid grid-cols-3 md:grid-cols-9 items-center gap-y-12">
					{Object.entries(icons).map(([name, Icon]) => (
						<Dialog key={name}>
							<DialogTrigger asChild>
								<div>
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger asChild>
												<div className="bg-primary/10 hover:bg-primary/15 flex items-center justify-center rounded-2xl w-max p-2 border-border border mx-auto cursor-pointer hover:-translate-y-1 transition duration-200">
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
								<Input placeholder="Add your link" />
								<Button>Add</Button>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</Card>
		</div>
	);
}
