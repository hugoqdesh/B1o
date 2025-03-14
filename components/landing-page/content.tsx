import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function Content() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
					The Open Source Minimalistic Bio
				</h2>
				<div className="relative">
					<div className="relative z-10 space-y-4 md:w-1/2">
						<p className="text-body">
							B1o.me is a entire ecosystem designed to simplify and enhance your
							online presence.
						</p>
						<p>
							B1o.me brings all your content together. It’s designed to showcase
							everything you create — from posts and videos to projects and
							profiles.
						</p>

						<div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
							<div className="space-y-3">
								<div className="flex items-center gap-2">
									<Zap className="size-4" />
									<h3 className="text-sm font-medium">Faaast & lightweight</h3>
								</div>
								<p className="text-muted-foreground text-sm">
									Fast, Smooth interface for making you the star
								</p>
							</div>
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<Cpu className="size-4" />
									<h3 className="text-sm font-medium">User-Friendly</h3>
								</div>
								<p className="text-muted-foreground text-sm">
									Designed with simplicity, making it easy for everyone
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
						<div
							aria-hidden
							className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"
						></div>
						<div className="border-border/50 relative rounded-2xl border border-dotted p-2">
							<Image
								src="/og-image.png"
								className="block rounded-[12px]"
								alt="payments illustration dark"
								width={1207}
								height={929}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
