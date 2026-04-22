# Applyd Hub — Web

The marketing landing page for Applyd Hub — a job application management platform. Built with Next.js 15, React 19, and Tailwind CSS v4.

---

## Table of Contents

- [Stack](#stack)
- [Setup](#setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

---

## Stack

| Layer           | Technology                                            |
| --------------- | ----------------------------------------------------- |
| Framework       | Next.js 15 (App Router)                               |
| Language        | TypeScript 5 (strict mode)                            |
| Styling         | Tailwind CSS v4 + shadcn/ui                           |
| Fonts           | Inter (body), Comfortaa (logo) via `next/font/google` |
| Theme           | next-themes (light / dark / system)                   |
| Icons           | lucide-react, react-icons                             |
| Package manager | Yarn (only)                                           |

---

## Setup

### 1. Clone the repository

```bash
git clone <repo-url>
cd applyd-hub/applydhub-web
```

### 2. Install dependencies

```bash
yarn install
```

> Never use `npm` or `pnpm`. Yarn is the only supported package manager.

---

## Usage

Run all commands from within the `applydhub-web/` directory.

### Development

| Command      | Description                                             |
| ------------ | ------------------------------------------------------- |
| `yarn dev`   | Start the Next.js dev server at `http://localhost:3000` |
| `yarn build` | Build for production                                    |
| `yarn start` | Run the production build locally                        |

### Code quality

| Command     | Description                   |
| ----------- | ----------------------------- |
| `yarn lint` | Run ESLint across the project |

---

## Folder Structure

```
applydhub-web/
├── app/                        # Next.js App Router
│   ├── globals.css             #   Global styles, CSS variables, animations
│   ├── layout.tsx              #   Root layout — fonts, metadata, ThemeProvider
│   ├── page.tsx                #   Home page — composes all landing sections
│   ├── terms/                  #   Terms of Service page
│   └── privacy/                #   Privacy Policy page
│
├── components/
│   ├── sections/               # Landing page sections (one file per section)
│   │   ├── HeroSection/        #   Hero — two-column layout with animated phone mockup
│   │   │   ├── index.tsx
│   │   │   ├── HeroLeft.tsx
│   │   │   └── HeroPhone.tsx
│   │   ├── ProblemStrip.tsx    #   Pain point — Numbers Game comparison cards
│   │   ├── FeaturesSection.tsx #   Feature rows with illustrations (alternating layout)
│   │   ├── HowItWorksSection.tsx
│   │   ├── LanguagesSection.tsx
│   │   └── DownloadCTA.tsx     #   Full-width CTA with store badges
│   │
│   ├── Header.tsx              # Sticky header — logo, nav, theme toggle, CTA
│   ├── Footer.tsx              # Dark footer — logo, links, copyright
│   ├── Logo.tsx                # Logo icon + LogoText component (light/dark aware)
│   ├── StoreBadges.tsx         # Reusable App Store + Google Play badges
│   ├── LegalPage.tsx           # Shared layout for Terms and Privacy pages
│   ├── ThemeProvider.tsx       # next-themes provider wrapper (client)
│   ├── ThemeToggle.tsx         # Sun/moon icon button (client)
│   └── FadeIn.tsx              # Scroll-reveal wrapper using IntersectionObserver
│
├── public/
│   └── images/                 # Static assets (icons, screenshots, headshot)
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Contributing

### Branching

Use the format `<type>/<short-description>`, e.g. `feat/dark-mode` or `fix/hero-animation`.

### Commit messages

Follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(hero): add floating cards to phone mockup
fix(legal): replace anchor tags with Next.js Link
chore: upgrade next-themes to 0.4.6
```

| Type       | When to use                               |
| ---------- | ----------------------------------------- |
| `feat`     | New section, component, or visible change |
| `fix`      | Bug fix                                   |
| `style`    | Tailwind/CSS only — no logic change       |
| `refactor` | Code restructure without behaviour change |
| `chore`    | Dependencies, config, tooling             |
| `docs`     | README or comment updates                 |
