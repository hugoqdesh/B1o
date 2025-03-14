import React from "react";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { AlertDialogHeader } from "../ui/alert-dialog";
import Waitlist from "./waitlist";

const Ready = () => {
	return (
		<Card className="text-center items-center justify-center">
			<CardHeader>
				<CardTitle className="text-xl">
					Ready to create your B1o.me page?
				</CardTitle>
				<CardDescription>Open Source | Minimal | Privacy First</CardDescription>
			</CardHeader>
			<CardContent>
				<Dialog>
					<DialogTrigger asChild>
						<Button
							variant="secondary"
							className="hover:scale-110 transition duration-300"
						>
							Yessss :D
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<AlertDialogHeader>
							<DialogTitle>We are working on the first release</DialogTitle>
							<DialogDescription>
								Sign up now to get early benefits!
							</DialogDescription>
						</AlertDialogHeader>
						<div className="flex items-center justify-center">
							<Waitlist />
						</div>
						<DialogFooter></DialogFooter>
					</DialogContent>
				</Dialog>
			</CardContent>
		</Card>
	);
};

export default Ready;
