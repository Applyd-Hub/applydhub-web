import { X, Zap } from "lucide-react";

const painPoints = [
	"Rewriting your resume for every single job",
	"Generic applications that never get a callback",
	"Losing track of what you applied to and when",
];

export default function ProblemStrip() {
	return (
		<section id="why" className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
					{/* Left — headline + bullets */}
					<div className="flex flex-1 flex-col gap-6">
						<p className="text-sm font-semibold uppercase tracking-widest text-primary">
							The Problem
						</p>
						<h2 className="text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
							The Modern Job Search is a{" "}
							<span className="text-primary">Numbers Game.</span>
						</h2>
						<p className="max-w-md text-base leading-relaxed text-muted-foreground">
							To land one offer, you need to apply to dozens of roles — each
							with different requirements. The math is brutal if you&apos;re
							doing it manually.
						</p>

						<ul className="flex flex-col gap-3">
							{painPoints.map((point) => (
								<li key={point} className="flex items-start gap-3">
									<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
										<X className="h-3 w-3 text-destructive" strokeWidth={3} />
									</span>
									<span className="text-sm text-muted-foreground">{point}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Right — comparison cards */}
					<div className="flex flex-1 flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
						{/* Old Way */}
						<div className="flex flex-1 flex-col gap-4 rounded-2xl bg-muted p-6 ring-1 ring-border">
							<p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
								The Old Way
							</p>
							<div>
								<p className="text-5xl font-black text-foreground">4 hrs</p>
								<p className="mt-1 text-sm font-semibold text-muted-foreground">
									per application
								</p>
							</div>
							<div className="mt-auto flex flex-wrap gap-2">
								<span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
									Low Volume
								</span>
								<span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
									Burnout Risk
								</span>
							</div>
						</div>

						{/* Applyd Way */}
						<div className="flex flex-1 flex-col gap-4 rounded-2xl bg-primary/5 p-6 ring-2 ring-primary">
							<div className="flex items-center justify-between">
								<p className="text-[10px] font-bold uppercase tracking-widest text-primary">
									The Applyd Way
								</p>
								<Zap className="h-4 w-4 fill-primary text-primary" />
							</div>
							<div>
								<p className="text-5xl font-black text-foreground">90 sec</p>
								<p className="mt-1 text-sm font-semibold text-muted-foreground">
									per application
								</p>
							</div>
							<div className="mt-auto flex flex-wrap gap-2">
								<span className="rounded-full bg-tertiary/10 px-3 py-1 text-xs font-semibold text-tertiary">
									High Volume
								</span>
								<span className="rounded-full bg-tertiary/10 px-3 py-1 text-xs font-semibold text-tertiary">
									Quality Guaranteed
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
