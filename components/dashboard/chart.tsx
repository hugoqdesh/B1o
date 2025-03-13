"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

// Define types for chart data and configuration
interface ChartData {
	day: string;
	desktop: number;
}

const chartData: ChartData[] = [
	{ day: "Monday", desktop: 186 },
	{ day: "Tuesday", desktop: 305 },
	{ day: "Wednesday", desktop: 237 },
	{ day: "Thursday", desktop: 73 },
	{ day: "Saturday", desktop: 209 },
	{ day: "Sunday", desktop: 214 },
];

const chartConfig: ChartConfig = {
	desktop: {
		label: "Views",
		color: "var(--color-desktop, purple)", // Allowing CSS variable fallback
	},
};

export function Chart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Profile Views in the Last 7 Days</CardTitle>
			</CardHeader>

			<CardContent>
				<ChartContainer
					className="aspect-auto h-[250px] w-full"
					config={chartConfig}
					aria-label="Profile views area chart"
				>
					<AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
						<CartesianGrid vertical={false} />

						<XAxis
							dataKey="day"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>

						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>

						<Area
							dataKey="desktop"
							type="natural"
							fill={chartConfig.desktop.color}
							fillOpacity={0.4}
							stroke={chartConfig.desktop.color}
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
