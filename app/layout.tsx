import type { Metadata } from "next";
import { Inter, Comfortaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
});

const comfortaa = Comfortaa({
	variable: "--font-logo",
	subsets: ["latin"],
	weight: ["700"],
});

export const metadata: Metadata = {
	title: "Applyd Hub — Job Search, Simplified",
	description:
		"One profile. Infinite tailored resumes. Every application tracked.",
	icons: [
		{ rel: "icon", url: "/images/icon-light.png", media: "(prefers-color-scheme: light)" },
		{ rel: "icon", url: "/images/icon-dark.png", media: "(prefers-color-scheme: dark)" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.variable} ${comfortaa.variable} h-full antialiased`} suppressHydrationWarning>
			<body className="flex min-h-full flex-col">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
