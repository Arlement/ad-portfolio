/**
 * i18n configuration.
 *
 * To add a new language:
 *   1. Add its code to `locales` below.
 *   2. Add a matching entry to `translations` in `./translations.ts`.
 *   3. Add its native name to `localeNames` and a short code to
 *      `localeCodes`.
 *
 * A new route (e.g. /es) and a language-switcher entry are generated
 * automatically from these lists.
 */

/** Supported locale codes. The first entry is the default. */
export const locales = ["en", "es", "fr", "de", "pt", "ja"] as const;

/** A supported locale code, e.g. "en". */
export type Locale = (typeof locales)[number];

/** The locale served at the root path and used as a fallback. */
export const defaultLocale: Locale = "en";

/** Native name of each locale, shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  ja: "日本語",
};

/** Short uppercase code of each locale, used for compact labels. */
export const localeCodes: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
  de: "DE",
  pt: "PT",
  ja: "JA",
};

/** Type guard: is this string one of the supported locales? */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
