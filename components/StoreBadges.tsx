import Image from "next/image";
import { FaApple } from "react-icons/fa";

interface StoreBadgesProps {
	variant?: "dark" | "onPrimary";
	className?: string;
}

export default function StoreBadges({
	variant = "dark",
	className = "",
}: StoreBadgesProps) {
	const bg =
		variant === "onPrimary"
			? "bg-primary-foreground hover:bg-primary-foreground/90"
			: "bg-foreground hover:opacity-80";
	const textPrimary =
		variant === "onPrimary" ? "text-primary" : "text-background";
	const textMuted =
		variant === "onPrimary" ? "text-primary/60" : "text-background/70";

	return (
		<div className={`flex flex-wrap justify-center gap-3 ${className}`}>
			{/* Google Play */}
			<a
				href="https://play.google.com/apps/testing/com.afooinc.applydhub"
				target="_blank"
				rel="noopener noreferrer"
				title="Get it on Google Play"
				className={`flex w-44 items-center gap-3 rounded-xl px-5 py-2.5 transition-opacity active:scale-95 ${bg}`}
			>
				<Image
					src="/images/googleplay.png"
					alt=""
					width={24}
					height={24}
					className="h-6 w-6 shrink-0"
				/>
				<div className="flex flex-col items-start">
					<span className={`text-[10px] leading-none ${textMuted}`}>
						Get it on
					</span>
					<span className={`text-base font-semibold leading-tight ${textPrimary}`}>
						Google Play
					</span>
				</div>
			</a>

			{/* App Store */}
			<a
				href="https://apps.apple.com/fr/app/applydhub/id6670575109"
				target="_blank"
				rel="noopener noreferrer"
				title="Download on the App Store"
				className={`flex w-44 items-center gap-3 rounded-xl px-5 py-2.5 transition-opacity active:scale-95 ${bg}`}
			>
				<FaApple size={28} className={`shrink-0 ${textPrimary}`} />
				<div className="flex flex-col items-start">
					<span className={`text-[10px] leading-none ${textMuted}`}>
						Download on the
					</span>
					<span className={`text-base font-semibold leading-tight ${textPrimary}`}>
						App Store
					</span>
				</div>
			</a>
		</div>
	);
}
