"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ month: "Monday", desktop: 186 },
	{ month: "Tuesday", desktop: 305 },
	{ month: "Wednesday", desktop: 237 },
	{ month: "Thursday", desktop: 73 },
	{ month: "Saturday", desktop: 209 },
	{ month: "Sunday", desktop: 214 },
];

const chartConfig = {
	desktop: {
		label: "Views",
		color: "purple",
	},
} satisfies ChartConfig;

export function Chart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Profile Views in the last 7 days</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className="aspect-auto h-[250px] w-full"
					config={chartConfig}
				>
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
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
							fill="var(--color-desktop)"
							fillOpacity={0.4}
							stroke="var(--color-desktop)"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
