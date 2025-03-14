import React from "react";
import Waitlist from "./waitlist";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextShimmer } from "../ui/text-shimmer";

const Hero = () => {
	return (
		<div
			className="flex flex-col items-center justify-center text-center mt-12 md:mt-32 gap-4 px-4"
			aria-labelledby="hero-heading"
		>
			<div
				className={cn(
					"group rounded-full border text-base transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800"
				)}
			>
				<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
					<TextShimmer className="text-sm" duration={1.5}>
						Introducing B1o.me
					</TextShimmer>
					<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
				</AnimatedShinyText>
			</div>

			<h1 id="hero-heading" className="text-4xl md:text-5xl font-semibold">
				Minimal Links. Maximum Impact.
			</h1>

			<p className="max-w-2xl text-sm md:text-sm text-muted-foreground">
				B1o is an open-source, privacy-first link in bio app designed for
				minimalism.
			</p>

			<Waitlist />

			<p className="text-sm -mt-2 md:-mt-3 text-muted-foreground">
				Sign up now to get early benefits.
			</p>
		</div>
	);
};

export default Hero;
