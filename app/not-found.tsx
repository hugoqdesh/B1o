"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();

	return (
		<div
			className="flex w-full items-center justify-center text-center h-screen"
			role="alert"
			aria-label="404 - Page Not Found"
		>
			<div className="flex-col items-center justify-center md:flex">
				{/* 404 Number */}
				<h1 className="select-none text-[150px] font-bold text-muted-foreground/20">
					404
				</h1>

				{/* Error Message */}
				<div className="space-y-2">
					<h2 className="text-2xl font-semibold">Page Not Found</h2>
					<p className="text-muted-foreground">
						Oops! The page you&apos;re looking for doesn&apos;t exist or has
						been moved.
					</p>
				</div>

				{/* Go Back Button */}
				<div className="mt-2 flex gap-2">
					<Button
						variant="outline"
						onClick={() => router.back()}
						className="gap-2 text-muted-foreground cursor-pointer"
						aria-label="Go back to the previous page"
					>
						<ArrowLeft className="h-4 w-4" />
						Go Back
					</Button>
				</div>
			</div>
		</div>
	);
}
