# Contributing

Thanks for your interest in contributing to AlemDev's portfolio! This
guide covers both **code** and **translation** contributions.

## Project layout

```
src/
  app/                  # App Router pages and layouts
    [locale]/           # One route per language (e.g. /es)
  components/          # React components (portfolio, cards, switcher)
  i18n/
    config.ts           # Supported locales, names, default locale
    translations.ts     # All user-facing content, keyed by locale
scripts/
  check-translations.ts # Translation validator (run in CI)
.github/workflows/
  ci.yml                # Lint + build on every push/PR
  lang.yml              # Translation checks when i18n files change
  deploy.yml            # Static export + GitHub Pages deploy
```

## Getting started

```bash
bun install
bun run dev
```

Run the checks before opening a PR:

```bash
bun run lint
bun run build
bun run check:translations
```

## Code contributions

1. **Branch.** Work on a descriptive branch off `main`, e.g.
   `feat/contact-section`. Keep `main` deployable at all times.
2. **Style.** Match the existing conventions: TypeScript everywhere,
   readable multi-line formatting, section comments in larger components,
   and no dead code. The linter (`bun run lint`) must pass.
3. **Behavior.** The site is a static export (`output: "export"`), so
   anything you add must work without a server. Images come from
   `public/` and use `next/image` with unoptimized output.
4. **i18n.** Any new user-facing string must be added to **every** locale
   in `src/i18n/translations.ts` (see below), or the translation CI will
   fail.
5. **PR.** Open a pull request against `main`. CI runs lint + build
   automatically. Once merged, the deploy workflow publishes to GitHub
   Pages.

## Translation contributions

Translations live in `src/i18n/translations.ts`. Every locale must define
the **exact same structure** as the default locale (`en`) — same keys,
same number of review items, same order.

### Updating an existing language

Edit the strings for that locale. Keep the tone natural and idiomatic;
don't translate word-for-word if it reads better differently.

### Adding a new language

1. Add the code to `locales` in `src/i18n/config.ts` (e.g. `"it"`).
2. Add its native name to `localeNames` and a short code to `localeCodes`.
3. Add a full `translations` entry for it, mirroring the `en` structure.
4. Run `bun run check:translations` to confirm the structure matches.
5. Open a PR. The `Translation Checks` workflow validates it.

The new language automatically gets its own route (`/it`) and appears in
the floating language switcher. No other changes are needed.

### Validation

`scripts/check-translations.ts` verifies that:

- every locale in `config.ts` has a translations entry,
- every locale has exactly the same nested key paths as `en` (no missing,
  no extras),
- no translation value is empty.

It runs locally with `bun run check:translations` and in CI via
`.github/workflows/lang.yml` whenever `src/i18n/**` changes.
