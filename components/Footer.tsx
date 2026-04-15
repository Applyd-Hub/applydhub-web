import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-6 text-sm text-muted-foreground">
        <span>© 2026 Applyd Hub</span>
        <Link href="/terms" className="transition-colors hover:text-foreground">
          Terms
        </Link>
        <Link
          href="/privacy"
          className="transition-colors hover:text-foreground"
        >
          Privacy
        </Link>
        <a
          href="mailto:codewithafoo.dev@gmail.com"
          className="transition-colors hover:text-foreground"
        >
          codewithafoo.dev@gmail.com
        </a>
      </div>
    </footer>
  );
}
