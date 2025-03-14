import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

const items = [
	{
		id: "1",
		title: "What is B1o.me?",
		content:
			"B1o.me is a open source platform that provides modern and feature-rich bio links focusing on minimalism.",
	},
	{
		id: "2",
		title: "Is B1o.me safe?",
		content: "Yes! B1o.me is 100% open source",
	},
	{
		id: "3",
		title: "How long does it take setting B1o.me up?",
		content:
			"Setting up your B1o.me profile is quick and easy. Simply create an account and start customizing your profile immediately.",
	},
];

const FAQ = () => {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-bold text-center">
				Frequently Asked Questions
			</h2>
			<Accordion
				type="single"
				collapsible
				className="w-full space-y-2"
				defaultValue="3"
			>
				{items.map((item) => (
					<AccordionItem
						value={item.id}
						key={item.id}
						className="bg-background rounded-md border px-4 py-1 outline-none last:border-b"
					>
						<AccordionTrigger className="py-2 cursor-pointer text-[15px] leading-6 hover:no-underline">
							{item.title}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground pb-2">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default FAQ;
