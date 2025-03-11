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
								<div className="relative">
									<Input
										type="email"
										placeholder="you@example.com"
										className="placeholder:text-sm md:w-80 peer ps-9"
										{...field}
									/>
									<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
										<MailOpen size={16} aria-hidden="true" />
									</div>
								</div>
							</FormControl>
						</FormItem>
					)}
				/>
				<div>
					<Button
						className="flex items-center"
						type="submit"
						disabled={isSubmitting}
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
