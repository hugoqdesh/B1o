import Image from "next/image";

export default function WhatsNewPage() {
	return (
		<main className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-3 px-6 md:px-0">
			<span className="text-muted-foreground text-sm">March 12, 2025</span>
			<h1 className="font-semibold text-4xl">
				Lorem ipsum dolor sit amet consectetur.
			</h1>
			<Image
				src="/white.jpg"
				alt=""
				width={300}
				height={300}
				className="rounded-xl"
			/>
			<h2 className="font-semibold text-2xl">Lorem ipsum dolor sit.</h2>
			<p className="text-muted-foreground">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
				placeat? Laboriosam enim quae aliquam inventore, ipsam voluptate
				cupiditate adipisci perferendis autem aperiam repudiandae non minima
				aliquid, impedit et? Consequatur reprehenderit, voluptate rerum, saepe
				aliquid omnis maxime assumenda nam similique vero enim a consequuntur
				molestias quod! Iure doloribus suscipit magni facilis illum. Natus ad
				harum, consequatur veritatis blanditiis quia iure quibusdam!
			</p>
		</main>
	);
}
