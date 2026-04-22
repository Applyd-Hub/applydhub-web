import Link from "next/link";
import { Logo } from "./Logo";

export default function Footer() {
	return (
		<footer className="bg-[#161F2A]">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center">
				<div className="flex items-center gap-2.5">
					<Logo variant="onDark" />
				</div>
				<p className="text-xs uppercase tracking-widest text-white/40">
					Built for the serious job seeker.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
					<Link href="/terms" className="transition-colors hover:text-white">
						Terms
					</Link>
					<Link href="/privacy" className="transition-colors hover:text-white">
						Privacy
					</Link>
					<a
						href="mailto:codewithafoo.dev@gmail.com"
						className="transition-colors hover:text-white"
					>
						codewithafoo.dev@gmail.com
					</a>
				</div>
				<p className="text-xs text-white/30">
					© 2026 Applyd Hub. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
