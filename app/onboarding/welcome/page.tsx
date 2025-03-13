import { Button } from "@/components/ui/button";
import {
	Clover,
	FileHeart,
	Forward,
	Github,
	Instagram,
	Share2,
	Sparkle,
} from "lucide-react";
import Link from "next/link";

// Array configuration for decorative icons
const decorativeIcons = [
	{
		component: <Clover className="h-6 w-6" />,
		style: "absolute top-[15%] left-[20%] text-muted-foreground",
	},
	{
		component: <Sparkle className="h-6 w-6" />,
		style: "absolute top-[45%] left-[25%] text-muted-foreground",
	},
	{
		component: <Instagram className="h-6 w-6" />,
		style: "absolute top-[15%] right-[25%] text-muted-foreground",
	},
	{
		component: <Github className="h-6 w-6" />,
		style: "absolute bottom-[20%] left-[15%] text-muted-foreground",
	},
	{
		component: <FileHeart className="h-6 w-6" />,
		style: "absolute top-[35%] right-[15%] text-muted-foreground",
	},
	{
		component: <Forward className="h-6 w-6" />,
		style: "absolute bottom-[20%] right-[30%] text-muted-foreground",
	},
	{
		component: <Share2 className="h-6 w-6" />,
		style: "absolute bottom-[10%] right-[20%] text-muted-foreground",
	},
];

export default function WelcomePage() {
	return (
		<main className="relative min-h-screen w-full overflow-hidden">
			{/* Decorative Icons Section */}
			<div className="absolute inset-0 overflow-hidden">
				{decorativeIcons.map((icon, index) => (
					<div key={index} className={icon.style}>
						{icon.component}
					</div>
				))}
			</div>

			{/* Main Content Section */}
			<div className="relative flex flex-col items-center justify-center min-h-screen z-99 max-w-sm mx-auto text-center gap-2">
				<h1 className="font-semibold text-4xl">Welcome to B1o</h1>
				<p className="text-muted-foreground">
					Share all your content with a minimal link. Showcases your own
					presence.
				</p>
				<Link href="/dashboard" className="mt-3">
					<Button>Get started</Button>
				</Link>
			</div>
		</main>
	);
}
