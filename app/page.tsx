import { Lens } from "@/components/magicui/lens";
import { GlowEffect } from "@/components/ui/glow-effect";
import Waitlist from "@/components/waitlist";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col xl:flex-row gap-24 items-center xl:justify-between h-screen py-12 xl:py-0 px-10 xl:px-20 2xl:px-42">
			<Waitlist />

			<div className="mx-auto w-full max-w-5xl px-4 relative">
				<div className="relative items-center justify-center rounded-xl border border-muted-foreground/30 bg-muted p-1.5 shadow-xl shadow-black/40 dark:shadow-xl dark:shadow-black/85 md:flex">
					<GlowEffect
						colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
						mode="breathe"
						blur="medium"
					/>
					<Lens
						zoomFactor={2}
						lensSize={150}
						isStatic={false}
						ariaLabel="Zoom Area"
					>
						<Image
							src="/demo.png"
							alt="hero"
							width={1920}
							height={1440}
							className="h-full w-full rounded-xl shadow-md shadow-black invert dark:invert-0 md:rounded-lg"
							priority
							unoptimized
						/>
					</Lens>
				</div>
			</div>
		</main>
	);
}
