import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Header = () => {
	return (
		<nav className="flex items-center justify-between mt-5 px-6 py-2 text-lg border rounded-full">
			<Link href="/" className="flex items-center gap-1 font-bold">
				<span className="text-xl">B1o.me</span>
			</Link>

			<div className="flex items-center gap-3">
				<Link href="https://github.com/hugoqdesh/b1o" target="_blank">
					<Button variant="ghost" className="flex items-center gap-1">
						GitHub
					</Button>
				</Link>

				<Link href="/demo" target="_blank">
					<Button className="flex items-center gap-1.5 rounded-full">
						Check Demo
						<ArrowRight />
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
