import Waitlist from "@/components/waitlist";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col xl:flex-row gap-24 items-center xl:justify-between h-screen py-12 xl:py-0 px-10 xl:px-20 2xl:px-42">
			<Waitlist />

			<div className="mx-auto w-full max-w-5xl px-4 relative">
				<div className="relative items-center justify-center rounded-xl bg-transparent p-1.5 md:flex">
					<Image
						src="/demo2.png"
						alt="hero"
						width={1920}
						height={1440}
						className="h-full w-full rounded-xl invert dark:invert-0 md:rounded-lg"
						priority
						unoptimized
					/>
				</div>
			</div>
		</main>
	);
}
