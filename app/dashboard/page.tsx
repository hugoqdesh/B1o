import { Chart } from "@/components/dashboard/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";

// Renders a card displaying the total number of views.
function TotalViewsCard() {
	return (
		<Card className="grid grid-cols-2 items-center justify-center">
			<CardHeader>
				<CardTitle className="flex items-center justify-start gap-1">
					<Eye />
					Total Views
				</CardTitle>
			</CardHeader>
			<CardContent className="flex items-center justify-end">
				<p className="font-semibold">2,853</p>
			</CardContent>
		</Card>
	);
}

// Combines the Chart component and the TotalViewsCard to display analytics
export default function AnalyticsPage() {
	return (
		<main className="flex flex-col gap-6 px-6 md:px-20">
			{/* Basic views chart */}
			<Chart />

			{/* Total views card */}
			<TotalViewsCard />
		</main>
	);
}
