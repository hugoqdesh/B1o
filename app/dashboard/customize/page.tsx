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

// Reusable component for an input field with a label and a left-side icon
interface LabeledInputWithIconProps {
	label: string;
	placeholder?: string;
	defaultValue?: string;
	type?: string;
	Icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
}

function LabeledInputWithIcon({
	label,
	placeholder,
	defaultValue,
	type = "text",
	Icon,
}: LabeledInputWithIconProps) {
	return (
		<div className="w-full flex flex-col gap-1">
			<Label>{label}</Label>
			<div className="relative">
				<Input
					className="peer ps-9"
					placeholder={placeholder}
					defaultValue={defaultValue}
					type={type}
				/>
				<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
					<Icon size={16} aria-hidden={true} />
				</div>
			</div>
		</div>
	);
}

// Handles file uploads for the background and profile avatar
function AssetsUploaderCard() {
	return (
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
	);
}

// Provides fields for editing a description, location, and font style
function GeneralCustomizationCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>General Customization</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row gap-6">
				<LabeledInputWithIcon
					label="Description"
					placeholder="This is my description"
					Icon={Podcast}
				/>
				{/* Font selection uses a Select instead of a simple input */}
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
	);
}

// Provides fields for setting background, text, and icon colors
function ColorCustomizationCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Color Customization</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row gap-6">
				<LabeledInputWithIcon
					label="Background Color"
					defaultValue="#080808"
					Icon={Pipette}
				/>
				<LabeledInputWithIcon
					label="Text Color"
					defaultValue="#FFFFFF"
					Icon={Pipette}
				/>
				<LabeledInputWithIcon
					label="Icon Color"
					defaultValue="#FFFFFF"
					Icon={Pipette}
				/>
			</CardContent>
		</Card>
	);
}

// Composes the three customization cards into a single page layout
export default function CustomizePage() {
	return (
		<main className="flex flex-col max-w-7xl mx-auto gap-12 px-6">
			<AssetsUploaderCard />
			<GeneralCustomizationCard />
			<ColorCustomizationCard />
		</main>
	);
}
