import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function LegalPage({ title, children }: Props) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back
      </Link>
      <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      <article className="whitespace-pre-line text-sm leading-7 text-muted-foreground">
        {children}
      </article>
    </main>
  );
}
