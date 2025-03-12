import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center max-w-lg mx-auto gap-10 px-6 md:px-0">
			<div className="flex flex-col w-full">
				<h2 className="font-semibold">Change username</h2>
				<div className="flex flex-row gap-2 mt-1">
					<div className="relative w-full">
						<Input className="peer ps-16" defaultValue="hugoqdesh" />
						<span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
							b1o.me/
						</span>
					</div>
					<Button variant="outline">Update</Button>
				</div>
			</div>

			<div className="flex flex-col w-full">
				<h2 className="font-semibold">SEO</h2>
				<p className="text-muted-foreground text-sm">
					Choose the title and description to appear on search engines
				</p>
				<div className="flex flex-col gap-2 mt-1">
					<Input placeholder="Title" />
					<Input placeholder="Description (max 160 characters)" />
				</div>
			</div>

			<div className="flex flex-col w-full">
				<h2 className="font-semibold">Delete your account</h2>
				<p className="text-muted-foreground text-sm">
					Beware! Deleting your account will result in the permanent loss of
					everything - which cannot be recovered!
				</p>

				<Dialog>
					<DialogTrigger asChild>
						<Button variant="destructive" className="mt-1">
							Delete
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Delete your account</DialogTitle>
							<DialogDescription>
								Are you absolutely sure? Once deleted you will no longer be able
								to have access on this account.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<Button variant="destructive" className="mt-1">
								Delete
							</Button>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
