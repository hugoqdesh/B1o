"use client";

import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BellRing, MailOpen } from "lucide-react";

// Validation schema using Zod
const formSchema = z.object({
	email: z
		.string()
		.email({ message: "Invalid email address" })
		.min(9, { message: "Email must be at least 9 characters" }),
});

const Waitlist: React.FC = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Form initialization with react-hook-form and Zod resolver
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { email: "" },
	});

	// Handle form submission
	const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsSubmitting(true);
		console.log("Submitting form with email:", values.email);

		try {
			const response = await fetch("/api/waitlist", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: values.email }),
			});

			if (!response.ok) {
				const errorData = await response.json();
				toast.error(
					errorData.message || "Something went wrong. Please try again."
				);
				return;
			}

			form.reset();
			console.log("Form submission successful");

			// Confetti animation for successful submission
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
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleFormSubmit)}
				className="flex items-center gap-4"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div className="relative">
									<Input
										type="email"
										placeholder="you@example.com"
										className="placeholder:text-sm md:w-80 peer ps-9"
										{...field}
									/>
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground/80 pointer-events-none peer-disabled:opacity-50">
										<MailOpen size={16} aria-hidden="true" />
									</div>
								</div>
							</FormControl>
						</FormItem>
					)}
				/>

				<div>
					<Button
						type="submit"
						disabled={isSubmitting}
						className="flex items-center"
					>
						<BellRing />
						Join waitlist
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default Waitlist;
