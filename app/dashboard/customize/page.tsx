import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

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
						<Input placeholder="This is my description" />
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Location</Label>
						<Input placeholder="My Location" />
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Username Effects</Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Choose Username Effect" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="none">None</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Font</Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Choose Font Style" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="default">Default</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
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
						<Input defaultValue="#080808" />
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Text Color</Label>
						<Input defaultValue="#FFFFFF" />
					</div>

					<div className="w-full flex flex-col gap-1">
						<Label>Icon Color</Label>
						<Input defaultValue="#FFFFFF" />
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
