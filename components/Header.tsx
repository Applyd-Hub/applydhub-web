import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link href="/" className="flex items-center gap-2.5">
					<Logo />
				</Link>

				<nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
					<Link href="/#why" className="transition-colors hover:text-foreground">
						Why Applyd
					</Link>
					<Link href="/#features" className="transition-colors hover:text-foreground">
						Features
					</Link>
					<Link href="/#how-it-works" className="transition-colors hover:text-foreground">
						How it Works
					</Link>
					<Link href="/#download" className="transition-colors hover:text-foreground">
						Download
					</Link>
				</nav>

				<div className="flex items-center gap-2">
					<ThemeToggle />
					<Link
						href="/#download"
						className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
					>
						Get the App
					</Link>
				</div>
			</div>
		</header>
	);
}
