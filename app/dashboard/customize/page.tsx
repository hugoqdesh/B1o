import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { MapPin, Pipette, Podcast, Type } from "lucide-react";

export default function CustomizePage() {
	return (
		<main className="flex flex-col max-w-7xl mx-auto gap-12 px-6 md:px-0">
			<Card>
				<CardHeader>
					<CardTitle>Assets Uploader</CardTitle>
				</CardHeader>

				<CardContent className="flex flex-col md:flex-row gap-6">
					<div className="w-full flex flex-col gap-1">
						<Label>Background</Label>
						<Input type="file" />
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Profile Avatar</Label>
						<Input type="file" />
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>General Customization</CardTitle>
				</CardHeader>

				<CardContent className="flex flex-col md:flex-row gap-6">
					<div className="w-full flex flex-col gap-1">
						<Label>Description</Label>
						<div className="relative">
							<Input
								className="peer ps-9"
								placeholder="This is my description"
							/>
							<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
								<Podcast size={16} aria-hidden="true" />
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Location</Label>
						<div className="relative">
							<Input className="peer ps-9" placeholder="My Location" />
							<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
								<MapPin size={16} aria-hidden="true" />
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Font</Label>
						<div className="relative">
							<Select defaultValue="default">
								<SelectTrigger className="w-full peer ps-9">
									<SelectValue placeholder="Choose Font Style" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="default">Default</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
								<Type size={16} aria-hidden="true" />
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Color Customization</CardTitle>
				</CardHeader>

				<CardContent className="flex flex-col md:flex-row gap-6">
					<div className="w-full flex flex-col gap-1">
						<Label>Background Color</Label>
						<div className="relative">
							<Input className="peer ps-9" defaultValue="#080808" />
							<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
								<Pipette size={16} aria-hidden="true" />
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Text Color</Label>
						<div className="relative">
							<Input className="peer ps-9" defaultValue="#FFFFFF" />
							<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
								<Pipette size={16} aria-hidden="true" />
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Icon Color</Label>
						<div className="relative">
							<Input className="peer ps-9" defaultValue="#FFFFFF" />
							<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
								<Pipette size={16} aria-hidden="true" />
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
