import type { Metadata } from "next";
import { Inter, Comfortaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
});

const comfortaa = Comfortaa({
	variable: "--font-logo",
	subsets: ["latin"],
	weight: ["700"],
});

const BASE_URL = "https://www.applydhub.com";

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: "Applyd Hub — AI Resume Builder & Job Application Tracker",
		template: "%s — Applyd Hub",
	},
	description:
		"Generate tailored, ATS-ready resumes in seconds. Track every job application in one place. One profile, infinite opportunities — available on iOS and Android.",
	keywords: [
		"resume builder",
		"job application tracker",
		"AI resume",
		"ATS resume",
		"job search app",
		"cover letter generator",
		"tailored resume",
		"job tracker",
	],
	authors: [{ name: "Applyd Hub" }],
	creator: "Applyd Hub",
	openGraph: {
		type: "website",
		url: BASE_URL,
		siteName: "Applyd Hub",
		title: "Applyd Hub — AI Resume Builder & Job Application Tracker",
		description:
			"Generate tailored, ATS-ready resumes in seconds. Track every job application in one place. One profile, infinite opportunities.",
		images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Applyd Hub" }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Applyd Hub — AI Resume Builder & Job Application Tracker",
		description:
			"Generate tailored, ATS-ready resumes in seconds. Track every job application in one place.",
		images: ["/images/og-image.png"],
	},
	icons: [
		{ rel: "icon", url: "/images/icon-light.png", media: "(prefers-color-scheme: light)" },
		{ rel: "icon", url: "/images/icon-dark.png", media: "(prefers-color-scheme: dark)" },
	],
	robots: {
		index: true,
		follow: true,
	},
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
					<ScrollToTop />
				</ThemeProvider>
			</body>
		</html>
	);
}
