import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import {
  Sparkles,
  User,
  LayoutList,
  Mail,
  Plus,
  TrendingUp,
  Globe,
} from "lucide-react";

const ALL_SKILLS = [
  { label: "React", color: "primary" },
  { label: "TypeScript", color: "primary" },
  { label: "Node.js", color: "primary" },
  { label: "Figma", color: "secondary" },
  { label: "UX Research", color: "secondary" },
  { label: "Prototyping", color: "secondary" },
  { label: "Leadership", color: "muted" },
  { label: "Agile", color: "muted" },
] as const;

function SmartProfileIllustration() {
  return (
    <div className="flex h-105 w-full items-start justify-center rounded-2xl bg-muted/50 px-6 py-8">
      <div className="flex w-full max-w-[320px] flex-col gap-3">
        {/* Master profile card */}
        <div className="rounded-xl bg-card p-4 shadow-sm ring-1 ring-border">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Alex Chen</p>
              <p className="text-[10px] text-muted-foreground">
                Master Profile · 7 yrs exp
              </p>
            </div>
            <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold text-primary">
              All Skills
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {ALL_SKILLS.map(({ label, color }) => (
              <span
                key={label}
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                  color === "primary"
                    ? "bg-primary/10 text-primary"
                    : color === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-muted-foreground/10 text-muted-foreground"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* AI picks row */}
        <div className="flex items-center justify-center gap-2 py-0.5">
          <div className="h-px flex-1 bg-border" />
          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[9px] font-bold text-primary">
            <Sparkles className="h-2.5 w-2.5" />
            AI picks per role
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Two role outputs */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Engineer output */}
          <div className="rounded-xl bg-card p-3.5 shadow-sm ring-1 ring-border">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-primary">
              Software Eng.
            </p>
            <div className="flex flex-col gap-1.5">
              {["React", "TypeScript", "Node.js"].map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-primary/10 px-2 py-0.5 text-[9px] font-semibold text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Designer output */}
          <div className="rounded-xl bg-card p-3.5 shadow-sm ring-1 ring-border">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-secondary">
              Product Designer
            </p>
            <div className="flex flex-col gap-1.5">
              {["Figma", "UX Research", "Prototyping"].map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-secondary/10 px-2 py-0.5 text-[9px] font-semibold text-secondary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeIllustration() {
  return (
    <div className="flex h-105 w-full items-center justify-center rounded-2xl bg-muted/50 px-6 py-8">
      <div className="w-full max-w-[320px] overflow-hidden rounded-xl bg-card shadow-md ring-1 ring-border">
        {/* Two-column resume layout */}
        <div className="flex">
          {/* Left sidebar */}
          <div className="flex w-24 shrink-0 flex-col items-center gap-3 bg-primary px-3 py-5">
            {/* Photo */}
            <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-white/30">
              <Image
                src="/images/cv_headshot.jpg"
                alt="Resume photo"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-0.5 text-center">
              <p className="text-[9px] font-bold leading-tight text-white">
                Alex Chen
              </p>
              <p className="text-[7.5px] leading-tight text-white/60">
                Sr. Product Designer
              </p>
            </div>

            {/* Skills */}
            <div className="mt-1 w-full">
              <p className="mb-1.5 text-[7px] font-bold uppercase tracking-widest text-white/50">
                Skills
              </p>
              <div className="flex flex-col gap-1">
                {["Figma", "Prototyping", "UX Research", "Leadership"].map(
                  (s) => (
                    <span
                      key={s}
                      className="rounded bg-white/15 px-1.5 py-0.5 text-[7.5px] font-medium text-white"
                    >
                      {s}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-1 flex-col gap-3.5 px-3.5 py-4">
            {/* Experience */}
            <div>
              <p className="mb-1.5 text-[7.5px] font-bold uppercase tracking-widest text-primary/70">
                Experience
              </p>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[8.5px] font-semibold text-foreground">
                    Lead Designer · Spotify
                  </p>
                  <p className="text-[7px] text-muted-foreground">
                    2021 – 2024
                  </p>
                  <div className="mt-1 flex flex-col gap-0.5">
                    <div className="h-1.5 w-full rounded-full bg-muted-foreground/20" />
                    <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/20" />
                  </div>
                </div>
                <div>
                  <p className="text-[8.5px] font-semibold text-foreground">
                    UI Designer · Airbnb
                  </p>
                  <p className="text-[7px] text-muted-foreground">
                    2019 – 2021
                  </p>
                  <div className="mt-1 flex flex-col gap-0.5">
                    <div className="h-1.5 w-full rounded-full bg-muted-foreground/20" />
                    <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="mb-1.5 text-[7.5px] font-bold uppercase tracking-widest text-primary/70">
                Education
              </p>
              <p className="text-[8.5px] font-semibold text-foreground">
                Stanford University
              </p>
              <p className="text-[7px] text-muted-foreground">
                B.Design · 2019
              </p>
            </div>
          </div>
        </div>

        {/* Footer: tailored + language */}
        <div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-tertiary" />
            <span className="text-[9px] font-bold text-tertiary">
              Tailored for Stripe
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="h-2.5 w-2.5 text-muted-foreground" />
            {["EN", "FR", "ES"].map((lang) => (
              <span
                key={lang}
                className={`rounded px-1.5 py-0.5 text-[8px] font-bold ${
                  lang === "EN"
                    ? "bg-primary text-white"
                    : "text-muted-foreground"
                }`}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const TRACKER_APPS = [
  {
    company: "Stripe",
    role: "Sr. Product Designer",
    status: "Interview",
    color: "secondary",
  },
  {
    company: "Linear",
    role: "UI Engineer",
    status: "Applied",
    color: "primary",
  },
  {
    company: "Vercel",
    role: "Design Engineer",
    status: "Offer",
    color: "tertiary",
  },
  {
    company: "Notion",
    role: "Product Designer",
    status: "Applied",
    color: "primary",
  },
] as const;

const STATUS_COLORS: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  tertiary: "bg-tertiary/10 text-tertiary",
};

function TrackerIllustration() {
  return (
    <div className="flex h-105 w-full items-start justify-center rounded-2xl bg-muted/50 px-6 py-8">
      <div className="w-full max-w-[320px] rounded-xl bg-card shadow-sm ring-1 ring-border">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <LayoutList className="h-3.5 w-3.5 text-primary" />
            <p className="text-xs font-bold text-foreground">Applications</p>
          </div>
          <div className="flex gap-2 text-[10px] font-semibold">
            <span className="text-primary">12 Applied</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-secondary">4 Interview</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-tertiary">1 Offer</span>
          </div>
        </div>

        {/* Application rows */}
        <div className="flex flex-col divide-y divide-border">
          {TRACKER_APPS.map(({ company, role, status, color }) => (
            <div
              key={company}
              className="flex items-center justify-between px-4 py-3"
            >
              <div>
                <p className="text-[11px] font-semibold text-foreground">
                  {company}
                </p>
                <p className="text-[9.5px] text-muted-foreground">{role}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold ${STATUS_COLORS[color]}`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>

        {/* Add row */}
        <div className="flex items-center gap-2 border-t border-border px-4 py-3">
          <Plus className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">
            Log new application
          </span>
        </div>
      </div>
    </div>
  );
}

function AIInsightsIllustration() {
  const tips = [
    { text: "Add 'cross-functional' to Experience section", done: false },
    { text: "Mention stakeholder management", done: false },
    { text: "ATS keywords matched: 8 / 12", done: true },
  ];
  return (
    <div className="flex h-105 w-full items-start justify-center rounded-2xl bg-muted/50 px-6 py-8">
      <div className="flex w-full max-w-[320px] flex-col gap-3">
        {/* Match score */}
        <div className="flex items-center gap-4 rounded-xl bg-card px-5 py-4 shadow-sm ring-1 ring-border">
          <div className="relative shrink-0">
            <svg width="56" height="56" viewBox="0 0 36 36">
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
                strokeDasharray="79 88"
                strokeDashoffset="23"
                className="text-tertiary"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-black text-tertiary">
              87%
            </span>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">Job Match Score</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              Strong fit · 3 improvements available
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className="rounded-xl bg-card shadow-sm ring-1 ring-border">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <TrendingUp className="h-3 w-3 text-primary" />
            <p className="text-[10px] font-bold text-foreground">
              Improvement Tips
            </p>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {tips.map(({ text, done }) => (
              <div key={text} className="flex items-start gap-2.5 px-4 py-2.5">
                <span
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] font-black ${done ? "bg-tertiary/10 text-tertiary" : "bg-primary/10 text-primary"}`}
                >
                  {done ? "✓" : "!"}
                </span>
                <p
                  className={`text-[10px] leading-tight ${done ? "text-muted-foreground line-through" : "text-foreground"}`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverLetterIllustration() {
  return (
    <div className="flex h-[340px] w-full items-center justify-center rounded-2xl bg-muted/50 p-8">
      <div className="w-full max-w-[260px] rounded-xl bg-card p-6 shadow-sm ring-1 ring-border">
        <div className="mb-4 flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          <div className="h-2.5 w-20 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <div className="h-2 w-full rounded-full bg-primary/60" />
          <div className="h-2 w-11/12 rounded-full bg-primary/40" />
          <div className="h-2 w-10/12 rounded-full bg-primary/30" />
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-[9px] leading-relaxed text-muted-foreground">
            Dear Hiring Manager, I am writing to express my strong interest in
            the Product Designer position at...
          </p>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    label: "Smart Profile",
    heading: "Build once, apply for anything.",
    description:
      "Add all your skills, roles, and experience once — engineer, designer, founder, whatever you are. When you apply, the AI picks the right subset for that specific role. No editing. No rewriting.",
    illustration: <SmartProfileIllustration />,
  },
  {
    label: "AI Resume Builder",
    heading: "Tailored resumes. Any language.",
    description:
      "Paste a job description and get a resume built for that exact role — right keywords, right tone, ATS-ready. Applying for a French company from an English profile? Generate directly in French. Spanish, German, Portuguese — your call.",
    illustration: <ResumeIllustration />,
  },
  {
    label: "Application Tracker",
    heading: "Every application in one view.",
    description:
      "Stop using spreadsheets. Log every role from first click to signed offer — status, linked resume, company notes, and follow-up reminders all in one place.",
    illustration: <TrackerIllustration />,
  },
  {
    label: "AI Insights",
    heading: "Know exactly how strong your application is.",
    description:
      "Get a match score for every application before you send it. See which keywords are missing, what to add to your experience section, and how your resume compares to what the role is asking for.",
    illustration: <AIInsightsIllustration />,
  },
  {
    label: "AI Cover Letters",
    heading: "Role-specific letters written by AI.",
    description:
      "Write compelling, personalised cover letters and statements of purpose in seconds. Tied to each specific application so every letter fits the company and role.",
    illustration: <CoverLetterIllustration />,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-24">
        {FEATURES.map((feature, i) => {
          const isReversed = i % 2 !== 0;
          const textDir = isReversed ? "right" : "left";
          const illustDir = isReversed ? "left" : "right";
          return (
            <div
              key={feature.label}
              className={`flex flex-col items-center gap-12 md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              <FadeIn direction={textDir} className="flex flex-1 flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {feature.label}
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {feature.heading}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </FadeIn>
              <FadeIn direction={illustDir} delay={100} className="w-full flex-1">
                {feature.illustration}
              </FadeIn>
            </div>
          );
        })}
      </div>
    </section>
  );
}
