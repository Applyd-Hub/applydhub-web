import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { LayoutList, FileText, Sparkles, CalendarClock } from "lucide-react";

const FEATURES = [
  {
    icon: LayoutList,
    title: "Track Applications",
    description:
      "Never lose track of a role. Log every application, set deadlines, and follow up at the right time.",
  },
  {
    icon: FileText,
    title: "Build Resumes",
    description:
      "Create tailored resumes for each role with AI-powered suggestions that help you stand out.",
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    description:
      "Understand your strengths and gaps. Get recommendations to improve your profile for each role.",
  },
  {
    icon: CalendarClock,
    title: "Stay Organised",
    description:
      "Reminders for deadlines, interviews, and follow-ups — so nothing slips through the cracks.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-28 text-center">
        <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Land your next role.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Track applications, build tailored resumes, and stay on top of every
          deadline — all in one place.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex cursor-not-allowed items-center gap-3 rounded-xl bg-foreground px-5 py-3 opacity-40">
            <span className="text-sm font-medium text-background">
              App Store
            </span>
            <span className="rounded-full bg-background/20 px-2 py-0.5 text-xs text-background">
              Coming Soon
            </span>
          </div>
          <div className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-border px-5 py-3 opacity-40">
            <span className="text-sm font-medium text-foreground">
              Google Play
            </span>
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="flex flex-col gap-3 p-6">
                <Icon
                  className="h-5 w-5 text-foreground"
                  strokeWidth={1.5}
                />
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
