"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const scrolled = window.scrollY;
			const total = document.body.scrollHeight - window.innerHeight;
			setVisible(total > 0 && scrolled / total > 0.6);
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<button
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			aria-label="Scroll to top"
			className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:opacity-90 active:scale-95 ${
				visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
			}`}
		>
			<ArrowUp className="h-4 w-4" />
		</button>
	);
}
