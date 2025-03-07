"use client";

import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
	email: z.string().email().min(9),
});

const Waitlist = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsSubmitting(true);
		try {
			console.log("Starting form submission with email:", values.email);

			const response = await fetch("/api/waitlist", {
				method: "POST",
				body: JSON.stringify({ email: values.email }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				const errorData = await response.json();
				toast.error(errorData.message || "Something went wrong");
				return;
			}

			form.reset();
			console.log("Form submission successful");
			confetti({
				particleCount: 180,
				spread: 120,
				origin: { y: -0.2, x: 0.5 },
				angle: 270,
			});
		} catch (error) {
			console.error("Form submission error:", {
				error,
				message: error instanceof Error ? error.message : "Unknown error",
			});
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
			console.log("Form submission completed");
		}
	};
	return (
		<div className="flex flex-col items-center justify-center text-center xl:items-start xl:justify-start xl:text-start gap-4 max-w-2xl w-full">
			<h1 className="text-4xl md:text-6xl font-semibold">
				Minimal Links. Maximum Impact.
			</h1>
			<p className="text-sm md:text-base">
				B1o is an open-source, privacy-first link-in-bio app designed for
				simplicity and customization.
			</p>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex items-center gap-4"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										type="email"
										placeholder="you@example.com"
										className="placeholder:text-sm md:w-80"
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<div>
						<Button
							className="cursor-pointer"
							type="submit"
							disabled={isSubmitting}
						>
							Join waitlist
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default Waitlist;
