import StoreBadges from "@/components/StoreBadges";

export default function HeroLeft() {
	return (
		<div className="flex flex-1 flex-col gap-8 text-center lg:text-left">
			<h1 className="text-5xl font-extrabold tracking-tight text-foreground lg:text-6xl">
				Apply Smarter.
				<span className="mt-2 block text-primary">Get Hired Faster.</span>
			</h1>
			<p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
				One profile. Every opportunity. The AI handles the tailoring — you
				handle the interviews.
			</p>
			<StoreBadges className="lg:justify-start" />
		</div>
	);
}
