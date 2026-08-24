# AlemDev Portfolio

A modern portfolio for Alem, a Content Creator and Developer. Built with
Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Deployed to GitHub
Pages.

![CI](https://github.com/MagiqueDeveloper/alemdev/actions/workflows/ci.yml/badge.svg)
![Translation Checks](https://github.com/MagiqueDeveloper/alemdev/actions/workflows/lang.yml/badge.svg)
![Deploy](https://github.com/MagiqueDeveloper/alemdev/actions/workflows/deploy.yml/badge.svg)

## Sections

- Hero with bio
- Game Development
- Video Editing (embedded YouTube videos)
- Reviews & Comments
- Footer

## Features

- **i18n**: English, Spanish, French, German, Portuguese, and Japanese
  (`/en`, `/es`, `/fr`, `/de`, `/pt`, `/ja`) with a floating language
  switcher in the bottom-right corner
- Responsive, keyboard-accessible, statically exported

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
bun run lint              # ESLint
bun run build             # TypeScript + static export
bun run check:translations  # Validate all locales have complete translations
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the code and translation
contribution guides.

## Branches

- `main` — the 2026 rewrite (this codebase)
- `legacy` — the original 2023 NuxtJS version
