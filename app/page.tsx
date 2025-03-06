import Waitlist from "@/components/waitlist";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col xl:flex-row gap-12 items-center xl:justify-between h-screen py-12 xl:py-0 px-10 xl:px-20 2xl:px-42">
			<Waitlist />

			<div>
				<Image
					src="/demo.png"
					alt=""
					width={1920}
					height={1440}
					priority
					unoptimized
				/>
			</div>
		</main>
	);
}
