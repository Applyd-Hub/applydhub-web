import HeroLeft from "./HeroLeft";
import HeroPhone from "./HeroPhone";

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden px-6 pb-20 pt-16">
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute right-0 top-0 h-150 w-150 rounded-full bg-primary/5 blur-3xl" />
			</div>
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center">
				<HeroLeft />
				<HeroPhone />
			</div>
		</section>
	);
}
