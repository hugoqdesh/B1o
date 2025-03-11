import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Header = () => {
	return (
		<nav className="flex items-center justify-between pt-5 px-6 text-lg">
			<Link href="/" className="flex items-center gap-1 font-bold">
				<span className="text-3xl">B1o.</span>
			</Link>

			{/* <div className="flex items-center gap-6">
				<Link href="/"></Link>
				<Link href="/"></Link>
				<Link href="/"></Link>
			</div> */}

			<div className="flex items-center gap-4">
				<ModeToggle />
				<Link href="https://github.com/hugoqdesh/b1o" target="_blank">
					<Button className="flex items-center gap-1.5">
						GitHub
						<ArrowRight />
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
