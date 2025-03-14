import Link from "next/link";

const links = [
	{
		title: "Terms",
		href: "#",
	},
	{
		title: "Privacy",
		href: "#",
	},
];

export default function Footer() {
	return (
		<footer className="pb-12 pt-32">
			<div className="mx-auto max-w-5xl">
				<div className="flex flex-wrap justify-between gap-6">
					<span className="text-muted-foreground order-last block text-center text-sm md:order-first">
						© {new Date().getFullYear()} B1o.me, All rights reserved
					</span>
					<div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
						{links.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="text-muted-foreground hover:text-primary block duration-150"
							>
								<span>{link.title}</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
