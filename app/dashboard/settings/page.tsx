import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
	return (
		<main className="flex flex-col items-center justify-center max-w-2xl mx-auto gap-10 px-6 md:px-0">
			{/* Edit username */}
			<Card className="flex flex-col w-full">
				<CardHeader>
					<CardTitle>Change username</CardTitle>
				</CardHeader>

				<CardContent>
					<div className="flex flex-row gap-2">
						<div className="relative w-full">
							<Input className="peer ps-16" defaultValue="hugoqdesh" />
							<span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
								b1o.me/
							</span>
						</div>
						<Button variant="secondary">Update</Button>
					</div>
				</CardContent>
			</Card>

			{/* SEO settings */}
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
						Save
					</Button>
				</CardContent>
			</Card>

			{/* Account deletion */}
			<Card className="flex flex-col w-full">
				<CardHeader>
					<CardTitle>Delete your account</CardTitle>
					<CardDescription>
						Deleting your account will result in the permanent loss of
						everything - which cannot be recovered!
					</CardDescription>
				</CardHeader>

				<CardContent>
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="destructive">Delete Account</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>Delete your account</DialogTitle>
								<DialogDescription>
									Are you absolutely sure? Once deleted you will no longer be
									able to have access on this account.
								</DialogDescription>
							</DialogHeader>

							<Button variant="destructive">Delete Account</Button>
						</DialogContent>
					</Dialog>
				</CardContent>
			</Card>
		</main>
	);
}
