import Header from "@/components/landing-page/header";
import Waitlist from "@/components/landing-page/waitlist";
import Image from "next/image";

export default function Home() {
	return (
		<main className="max-w-7xl mx-auto">
			<header>
				<Header />
			</header>

			<section className="flex flex-col items-center justify-center text-center mt-12 md:mt-32 lg:mt-44 gap-4 md:gap-6 px-4">
				<h1 className="text-4xl md:text-7xl font-semibold">
					Minimal Links. Maximum Impact.
				</h1>
				<p className="max-w-2xl text-sm md:text-base">
					B1o is an open-source, privacy-first link in bio app designed for
					minimalism
				</p>

				<Waitlist />
				<p className="text-sm -mt-2 md:-mt-4 text-muted-foreground">
					sign up now to get early benefits
				</p>

				<div>
					<Image
						src="/demo.png"
						alt="demo design"
						width={1080}
						height={1920}
						className="w-full h-full select-none"
						quality={100}
						unoptimized
						priority
					/>
					<p className="-mt-12 lg:-mt-32 text-sm text-muted-foreground">
						( current demo design )
					</p>
				</div>
			</section>
		</main>
	);
}
