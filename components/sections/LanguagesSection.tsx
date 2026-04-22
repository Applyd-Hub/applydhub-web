const LANGUAGES = [
	{ flag: "🇬🇧", name: "English" },
	{ flag: "🇫🇷", name: "Français" },
	{ flag: "🇪🇸", name: "Español" },
	{ flag: "🇩🇪", name: "Deutsch" },
	{ flag: "🇵🇹", name: "Português" },
];

export default function LanguagesSection() {
	return (
		<section className="px-6 py-20">
			<div className="mx-auto max-w-6xl text-center">
				<h3 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
					Generate documents in your language
				</h3>
				<div className="flex flex-wrap items-center justify-center gap-10">
					{LANGUAGES.map(({ flag, name }) => (
						<div key={name} className="flex flex-col items-center gap-2">
							<span className="text-4xl">{flag}</span>
							<span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
								{name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
