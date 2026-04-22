import HeroSection from "@/components/sections/HeroSection";
import ProblemStrip from "@/components/sections/ProblemStrip";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import DownloadCTA from "@/components/sections/DownloadCTA";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
	return (
		<div className="flex flex-1 flex-col overflow-x-hidden">
			<HeroSection />
			<FadeIn>
				<ProblemStrip />
			</FadeIn>
			<FadeIn>
				<FeaturesSection />
			</FadeIn>
			<FadeIn>
				<HowItWorksSection />
			</FadeIn>
			<FadeIn>
				<LanguagesSection />
			</FadeIn>
			<FadeIn>
				<DownloadCTA />
			</FadeIn>
			<FadeIn>
				<Footer />
			</FadeIn>
		</div>
	);
}
