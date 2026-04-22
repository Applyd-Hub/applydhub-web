import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
	title: string;
	effectiveDate?: string;
	children: ReactNode;
};

function parseSection(text: string) {
	const lines = text.trim().split("\n");
	const blocks: Array<{ type: "heading" | "body"; content: string }> = [];

	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed) continue;
		// Matches "1. Title" or "2. Something"
		if (/^\d+\.\s+\S/.test(trimmed)) {
			blocks.push({ type: "heading", content: trimmed });
		} else {
			blocks.push({ type: "body", content: trimmed });
		}
	}
	return blocks;
}

export default function LegalPage({ title, children }: Props) {
	const rawText = typeof children === "string" ? children : null;
	const blocks = rawText ? parseSection(rawText) : null;

	// Extract effective date line if present
	const effectiveLine =
		rawText
			?.split("\n")
			.find((l) => l.trim().toLowerCase().startsWith("effective date")) ?? null;

	return (
		<main className="flex-1 px-6 py-16">
			<div className="mx-auto max-w-2xl">
				{/* Back link */}
				<Link
					href="/"
					className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to home
				</Link>

				{/* Title block */}
				<div className="mb-10 border-b border-border pb-8">
					<span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">
						Legal
					</span>
					<h1 className="text-4xl font-black tracking-tight text-foreground">
						{title}
					</h1>
					{effectiveLine && (
						<p className="mt-3 text-sm text-muted-foreground">{effectiveLine}</p>
					)}
				</div>

				{/* Parsed content */}
				{blocks ? (
					<div className="flex flex-col gap-8">
						{blocks
							.filter((b) => !b.content.toLowerCase().startsWith("effective date"))
							.map((block, i) =>
								block.type === "heading" ? (
									<h2
										key={i}
										className="text-lg font-bold text-foreground"
									>
										{block.content}
									</h2>
								) : (
									<p
										key={i}
										className="-mt-5 text-sm leading-7 text-muted-foreground"
									>
										{block.content}
									</p>
								),
							)}
					</div>
				) : (
					<article className="text-sm leading-7 text-muted-foreground">
						{children}
					</article>
				)}

				{/* Footer contact */}
				<div className="mt-16 border-t border-border pt-8 text-xs text-muted-foreground">
					Questions?{" "}
					<a
						href="mailto:codewithafoo.dev@gmail.com"
						className="font-medium text-primary hover:underline"
					>
						codewithafoo.dev@gmail.com
					</a>
				</div>
			</div>
		</main>
	);
}
