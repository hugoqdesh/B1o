import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import { Save, Trash2 } from "lucide-react";

// Component for editing the username
function EditUsernameCard() {
	return (
		<Card className="flex flex-col w-full">
			<CardHeader>
				<CardTitle>Change username</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-row gap-2">
					<div className="relative w-full">
						<Input className="peer ps-16" defaultValue="demo" />
						<span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
							b1o.me/
						</span>
					</div>
					<Button variant="secondary">
						<Save className="-ms-1 opacity-60" size={16} aria-hidden="true" />
						Save
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

// Component for the SEO settings
function SEOCard() {
	return (
		<Card className="flex flex-col w-full">
			<CardHeader>
				<CardTitle>SEO</CardTitle>
				<CardDescription>
					Choose the title and description to appear on search engines
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-2">
					<Input placeholder="Title" />
					<Input placeholder="Description (max 160 characters)" />
				</div>
				<Button variant="secondary" className="mt-2">
					<Save className="-ms-1 opacity-60" size={16} aria-hidden="true" />
					Save
				</Button>
			</CardContent>
		</Card>
	);
}

// Component for account deletion, including a confirmation dialog
function AccountDeletionCard() {
	return (
		<Card className="flex flex-col w-full">
			<CardHeader>
				<CardTitle>Delete your account</CardTitle>
				<CardDescription>
					Deleting your account will result in the permanent loss of everything
					- which cannot be recovered!
				</CardDescription>
			</CardHeader>
			<CardContent>
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant="destructive">
							<Trash2
								className="-ms-1 opacity-60"
								size={16}
								aria-hidden="true"
							/>
							Delete Account
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Delete your account</AlertDialogTitle>
							<AlertDialogDescription>
								Are you absolutely sure? Once deleted you will no longer be able
								to access this account.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<Button variant="destructive">
								<Trash2
									className="-ms-1 opacity-60"
									size={16}
									aria-hidden="true"
								/>
								Delete Account
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</CardContent>
		</Card>
	);
}

// Main SettingsPage component that composes the individual cards
export default function SettingsPage() {
	return (
		<main className="flex flex-col items-center justify-center max-w-2xl mx-auto gap-10 px-6 md:px-0">
			<EditUsernameCard />
			<SEOCard />
			<AccountDeletionCard />
		</main>
	);
}
