import Content from "@/components/landing-page/content";
import FAQ from "@/components/landing-page/faq";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import ImageSlide from "@/components/landing-page/image-comparison";
import Ready from "@/components/landing-page/ready";

export default function Home() {
	return (
		<main className="max-w-4xl mx-auto px-6">
			{/* Header Section */}
			<header>
				<Header />
			</header>
			{/* Content Section */}
			<section className="flex flex-col gap-32">
				<Hero />

				<ImageSlide />

				<Features />

				<Content />

				<FAQ />

				<Ready />
			</section>
			{/* Footer Section */}
			<footer>
				<Footer />
			</footer>
		</main>
	);
}
