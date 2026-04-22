const STEPS = [
	{
		number: "1",
		title: "Build",
		description:
			"Build your master profile once. Import and merge all your existing CVs — the AI extracts every skill, role, and achievement into one complete profile you apply from.",
	},
	{
		number: "2",
		title: "Generate",
		description:
			"Paste any job description. Instantly get a tailored, ATS-ready resume and cover letter.",
	},
	{
		number: "3",
		title: "Track",
		description:
			"Log every application. Get reminders for interviews and follow-ups so nothing slips through.",
	},
];

export default function HowItWorksSection() {
	return (
		<section id="how-it-works" className="bg-muted/50 px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<div className="mb-16 text-center">
					<h2 className="text-4xl font-bold tracking-tight text-foreground">
						How it Works
					</h2>
					<p className="mt-4 text-muted-foreground">
						Your path to more interviews, simplified into three steps.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{STEPS.map((step) => (
						<div
							key={step.number}
							className="flex flex-col gap-5 rounded-xl bg-card p-8 shadow-sm ring-1 ring-border"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
								{step.number}
							</div>
							<h3 className="text-xl font-bold text-foreground">{step.title}</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
