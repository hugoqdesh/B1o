import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "B1o",
	description:
		"Take control of your links with B1o — an open-source, privacy-first link-in-bio app designed for simplicity and customization.",
	icons: {
		icon: "/favicon.ico",
	},
	applicationName: "B1o",
	creator: "@hugoqdesh",
	openGraph: {
		title: "B1o",
		description:
			"Take control of your links with B1o — an open-source, privacy-first link-in-bio app designed for simplicity and customization.",
		images: [
			{
				url: `/og-image.png`,
				width: 1200,
				height: 630,
				alt: "B1o",
			},
		],
	},
	category: "Social Media Tools",
	keywords: [
		"Link in Bio",
		"B1o",
		"Open Source",
		"Minimalist Link in Bio",
		"Minimalistic Link in Bio",
		"Link Manager",
		"Linktree Alternative",
		"Secure Links",
		"Link in Bio Platform",
		"Productivity",
		"Business Links",
		"Personal Links",
		"Link in Bio Software",
		"Link in Bio Service",
		"Web Application",
	],
	// metadataBase: new URL(""),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
