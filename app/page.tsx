import Header from "@/components/landing-page/header";
import Waitlist from "@/components/landing-page/waitlist";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
	return (
		<main className="max-w-7xl mx-auto">
			{/* Header Section */}
			<header>
				<Header />
			</header>

			{/* Hero Section */}
			<section
				className="flex flex-col items-center justify-center text-center mt-12 md:mt-32 lg:mt-44 gap-4 md:gap-6 px-4"
				aria-labelledby="hero-heading"
			>
				<h1 id="hero-heading" className="text-4xl md:text-7xl font-semibold">
					Minimal Links. Maximum Impact.
				</h1>

				<p className="max-w-2xl text-sm md:text-base text-muted-foreground">
					B1o is an open-source, privacy-first link in bio app designed for
					minimalism.
				</p>

				{/* Waitlist Sign-up */}
				<Waitlist />

				<p className="text-sm -mt-2 md:-mt-4 text-muted-foreground">
					Sign up now to get early benefits.
				</p>
			</section>
		</main>
	);
}
