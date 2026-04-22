import StoreBadges from "@/components/StoreBadges";

export default function DownloadCTA() {
	return (
		<section id="download" className="px-6 pb-20">
			<div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center">
				<h2 className="mx-auto max-w-2xl text-4xl font-black tracking-tight text-primary-foreground md:text-5xl">
					Take control of your job search. Download free.
				</h2>
				<p className="mt-4 text-base text-primary-foreground/80">
					Join job seekers landing roles with precision.
				</p>
				<StoreBadges variant="onPrimary" className="mt-10" />
				{/* Decorative */}
				<div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
			</div>
		</section>
	);
}
