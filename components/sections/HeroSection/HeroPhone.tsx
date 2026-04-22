import Image from "next/image";
import { CalendarCheck, CheckCircle, Mail, Sparkles } from "lucide-react";

function ArrowCursorSvg() {
	return (
		<svg width="16" height="20" viewBox="0 0 16 20" className="drop-shadow-sm">
			<path
				d="M0.5 0.5V14.5L4.5 12L7 18L9 17L6.5 11L12 11L0.5 0.5Z"
				fill="#161F2A"
				stroke="white"
				strokeWidth="1"
			/>
		</svg>
	);
}

export default function HeroPhone() {
	return (
		<div className="relative flex flex-1 justify-center">
			{/* Dot grid decoration */}
			<div className="hero-dot-grid pointer-events-none absolute inset-0 -z-10" />

			{/* Soft color blob */}
			<div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
			<div className="pointer-events-none absolute bottom-1/4 left-0 -z-10 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

			{/* Floating card — Interview Scheduled (top-right) */}
			<div className="hero-float-tr absolute right-0 top-10 z-20 hidden items-center gap-2.5 rounded-xl bg-card px-3 py-2.5 shadow-lg ring-1 ring-border lg:flex">
				<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tertiary/10">
					<CalendarCheck className="h-4 w-4 text-tertiary" />
				</div>
				<div>
					<p className="text-[11px] font-bold text-foreground">Interview Scheduled</p>
					<p className="text-[9px] text-muted-foreground">Stripe · Tomorrow 2pm</p>
				</div>
			</div>

			{/* Floating card — Resume Sent (left-middle) */}
			<div className="hero-float-l absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2.5 rounded-xl bg-card px-3 py-2.5 shadow-lg ring-1 ring-border lg:flex">
				<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
					<CheckCircle className="h-4 w-4 text-primary" />
				</div>
				<div>
					<p className="text-[11px] font-bold text-foreground">Resume Sent</p>
					<p className="text-[9px] text-muted-foreground">Product Designer · Stripe</p>
				</div>
			</div>

			{/* Floating card — Job Match (bottom-right) */}
			<div className="hero-float-br absolute bottom-20 right-0 z-20 hidden items-center gap-2.5 rounded-xl bg-card px-3 py-2.5 shadow-lg ring-1 ring-border lg:flex">
				<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tertiary/10">
					<span className="text-[11px] font-black text-tertiary">94%</span>
				</div>
				<div>
					<p className="text-[11px] font-bold text-foreground">Job Match</p>
					<p className="text-[9px] text-muted-foreground">Tailored for Stripe</p>
				</div>
			</div>

			{/* Phone mockup */}
			<div className="hero-phone relative h-145 w-70 rounded-[3rem] border-8 border-foreground/10 bg-foreground/5 shadow-2xl ring-1 ring-border">
				<div className="flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] bg-background">
					{/* Screen header */}
					<div className="relative px-5 pb-3 pt-5">
						<span className="hero-anim-empty text-sm font-bold text-foreground">
							Profile
						</span>
						<span className="hero-anim-jd absolute left-5 top-5 text-sm font-bold text-foreground">
							New Resume
						</span>
					</div>

					{/* Animated content area */}
					<div className="relative flex-1 overflow-hidden">
						{/* PHASE 1 — profile / empty state */}
						<div className="hero-anim-empty absolute inset-0 flex flex-col gap-2.5 px-4 pb-5 pt-1">
							<div className="flex items-center gap-2.5 rounded-xl bg-muted/60 p-3 ring-1 ring-border">
								<Image
									src="/images/cv_headshot.jpg"
									alt="Profile"
									width={36}
									height={36}
									className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/30"
								/>
								<div>
									<p className="text-[10px] font-bold text-foreground">
										Alex Chen
									</p>
									<p className="text-[7.5px] font-medium text-primary">
										Product Designer · AI Researcher · Founder
									</p>
								</div>
							</div>

							<div className="flex gap-2">
								{(
									[
										{ value: "7 yrs", label: "Experience" },
										{ value: "3", label: "Industries" },
										{ value: "14", label: "Applied" },
									] as const
								).map(({ value, label }) => (
									<div
										key={label}
										className="flex flex-1 flex-col items-center rounded-lg bg-muted/60 py-2 ring-1 ring-border"
									>
										<span className="text-[11px] font-bold text-foreground">
											{value}
										</span>
										<span className="text-[6.5px] text-muted-foreground">
											{label}
										</span>
									</div>
								))}
							</div>

							<div className="flex flex-wrap gap-1.5">
								{["Spotify", "Airbnb", "YC W22", "OpenAI"].map((c) => (
									<span
										key={c}
										className="rounded-full bg-muted px-2 py-0.5 text-[7.5px] font-medium text-muted-foreground ring-1 ring-border"
									>
										{c}
									</span>
								))}
							</div>

							<div className="flex flex-wrap gap-1.5">
								{[
									"Figma",
									"UX Research",
									"Prototyping",
									"AI/ML",
									"Leadership",
								].map((s) => (
									<span
										key={s}
										className="rounded-full bg-primary/10 px-2 py-0.5 text-[7.5px] font-medium text-primary"
									>
										{s}
									</span>
								))}
							</div>

							<div className="mt-auto rounded-xl bg-primary px-4 py-3 text-center">
								<span className="text-xs font-bold text-primary-foreground">
									Generate Resume
								</span>
							</div>
						</div>

						{/* Cursor */}
						<div className="hero-anim-cursor pointer-events-none absolute bottom-11 left-29.5 z-20">
							<div className="relative">
								<div className="hero-click-ripple absolute left-0 top-0 h-6 w-6 rounded-full bg-primary/40" />
								<ArrowCursorSvg />
							</div>
						</div>

						{/* PHASE 2 — job description */}
						<div className="hero-anim-jd absolute inset-x-0 top-2 px-4">
							<div className="rounded-xl bg-muted/60 p-3.5 ring-1 ring-border">
								<p className="mb-1.5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
									Job Description
								</p>
								<p className="text-[9px] font-semibold text-foreground">
									Senior Product Designer — Stripe
								</p>
								<p className="mt-1 text-[8px] leading-relaxed text-foreground/60">
									Own end-to-end design for checkout & payments. 5+ yrs exp,
									strong Figma skills, cross-functional collaboration...
								</p>
							</div>
						</div>

						{/* PHASE 2 — generating pill */}
						<div className="hero-anim-gen absolute inset-x-0 top-36 flex items-center gap-2 px-4">
							<div className="h-px flex-1 bg-border" />
							<div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5">
								<Sparkles className="h-3 w-3 text-primary" />
								<span className="text-[9px] font-bold text-primary">
									Generating
								</span>
								<span className="flex gap-0.5">
									<span className="hero-dot-1 inline-block h-1 w-1 rounded-full bg-primary" />
									<span className="hero-dot-2 inline-block h-1 w-1 rounded-full bg-primary" />
									<span className="hero-dot-3 inline-block h-1 w-1 rounded-full bg-primary" />
								</span>
							</div>
							<div className="h-px flex-1 bg-border" />
						</div>

						{/* PHASE 3 — stat widgets */}
						<div className="absolute inset-x-0 top-36 z-10 flex flex-col gap-1.5 px-4">
							{/* Row 1: Track Job pipeline */}
							<div className="hero-anim-stat-1 rounded-xl bg-card px-3 py-2 shadow-sm ring-1 ring-border">
								<p className="mb-1.5 text-[6px] font-semibold uppercase tracking-widest text-muted-foreground">
									Track Job
								</p>
								<div className="flex items-start">
									<div className="flex flex-col items-center">
										<span className="h-2 w-2 rounded-full bg-primary ring-2 ring-primary/30" />
										<p className="mt-0.5 text-[6px] font-semibold text-primary">
											Applied
										</p>
									</div>
									<div className="mt-1 h-px flex-1 bg-primary/40" />
									<div className="flex flex-col items-center">
										<span className="h-2 w-2 rounded-full bg-muted ring-1 ring-border" />
										<p className="mt-0.5 text-[6px] font-semibold text-muted-foreground">
											Interview
										</p>
									</div>
									<div className="mt-1 h-px flex-1 bg-border" />
									<div className="flex flex-col items-center">
										<span className="h-2 w-2 rounded-full bg-muted ring-1 ring-border" />
										<p className="mt-0.5 text-[6px] font-semibold text-muted-foreground">
											Offer
										</p>
									</div>
								</div>
							</div>

							{/* Row 2: Job Match + Cover Letter */}
							<div className="flex gap-1.5">
								<div className="hero-anim-stat-2 flex flex-1 flex-col items-center gap-1 rounded-xl bg-card px-2 py-2 shadow-sm ring-1 ring-border">
									<div className="relative">
										<svg width="30" height="30" viewBox="0 0 36 36">
											<circle
												cx="18"
												cy="18"
												r="14"
												fill="none"
												stroke="currentColor"
												strokeWidth="3.5"
												className="text-muted/50"
											/>
											<circle
												cx="18"
												cy="18"
												r="14"
												fill="none"
												stroke="currentColor"
												strokeWidth="3.5"
												strokeLinecap="round"
												strokeDasharray="87.96 93.08"
												strokeDashoffset="23.27"
												className="text-tertiary"
											/>
										</svg>
										<span className="absolute inset-0 flex items-center justify-center text-[7px] font-black text-tertiary">
											94%
										</span>
									</div>
									<p className="text-[6.5px] font-semibold text-muted-foreground">
										Job Match
									</p>
								</div>

								<div className="hero-anim-stat-3 flex flex-1 flex-col gap-1 rounded-xl bg-card px-2 py-2.5 shadow-sm ring-1 ring-border">
									<div className="flex items-center gap-1">
										<Mail className="h-2.5 w-2.5 shrink-0 text-secondary" />
										<p className="text-[7px] font-bold text-secondary">
											Cover Letter
										</p>
									</div>
									<p className="line-clamp-2 text-[6px] leading-relaxed text-foreground/50">
										Dear Hiring Manager, I am excited to apply for the Sr.
										Designer role at Stripe...
									</p>
								</div>
							</div>
						</div>

						{/* PHASE 3 — resume card */}
						<div className="hero-anim-resume absolute inset-x-0 bottom-3 px-4">
							<div className="flex flex-col gap-2.5 rounded-xl bg-card p-3.5 shadow-sm ring-1 ring-border">
								<div className="flex gap-3">
									<div className="flex w-17 shrink-0 flex-col items-center gap-2 border-r border-border pr-3">
										<Image
											src="/images/cv_headshot.jpg"
											alt="Alex Chen"
											width={36}
											height={36}
											className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/30"
										/>
										<div className="w-full text-center">
											<p className="text-[8px] font-bold leading-tight text-foreground">
												Alex Chen
											</p>
											<p className="text-[6.5px] text-muted-foreground">
												Sr. Product Designer
											</p>
										</div>
										<div className="mt-0.5 flex w-full flex-col gap-1">
											<span className="hero-anim-chip-1 block rounded bg-primary/10 px-1.5 py-0.5 text-center text-[6.5px] font-semibold text-primary">
												Figma
											</span>
											<span className="hero-anim-chip-2 block rounded bg-primary/10 px-1.5 py-0.5 text-center text-[6.5px] font-semibold text-primary">
												Prototyping
											</span>
											<span className="hero-anim-chip-3 block rounded bg-primary/10 px-1.5 py-0.5 text-center text-[6.5px] font-semibold text-primary">
												UX Research
											</span>
										</div>
									</div>

									<div className="flex flex-1 flex-col gap-2">
										<div>
											<p className="mb-1 text-[6.5px] font-bold uppercase tracking-widest text-primary/70">
												Experience
											</p>
											<div className="flex flex-col gap-1.5">
												<div>
													<p className="text-[7.5px] font-semibold text-foreground">
														Lead Designer · Spotify
													</p>
													<p className="text-[6.5px] text-muted-foreground">
														2021 – 2024
													</p>
													<p className="mt-0.5 text-[6.5px] leading-tight text-foreground/70">
														Checkout redesign, ↑23% conversion.
													</p>
												</div>
												<div>
													<p className="text-[7.5px] font-semibold text-foreground">
														UI Designer · Airbnb
													</p>
													<p className="text-[6.5px] text-muted-foreground">
														2019 – 2021
													</p>
													<p className="mt-0.5 text-[6.5px] leading-tight text-foreground/70">
														Host onboarding, ↓31% drop-off.
													</p>
												</div>
											</div>
										</div>
										<div>
											<p className="mb-1 text-[6.5px] font-bold uppercase tracking-widest text-primary/70">
												Education
											</p>
											<p className="text-[7.5px] font-semibold text-foreground">
												Stanford University
											</p>
											<p className="text-[6.5px] text-muted-foreground">
												B.Design · 2019
											</p>
										</div>
									</div>
								</div>

								<div className="hero-anim-badge flex items-center gap-1.5 rounded-lg bg-tertiary/10 px-3 py-2">
									<div className="h-1.5 w-1.5 rounded-full bg-tertiary" />
									<span className="text-[9px] font-bold text-tertiary">
										Tailored for this role
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
