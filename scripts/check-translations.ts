/**
 * Validates the translation files.
 *
 * Checks:
 *   1. Every locale in `config.ts` has a translations entry.
 *   2. Every locale defines exactly the same (nested) key paths as the
 *      default locale.
 *   3. No translation value is empty.
 *
 * Run with: bun run check:translations
 */

import { defaultLocale, locales } from "../src/i18n/config";
import { translations } from "../src/i18n/translations";

let failed = false;

function fail(message: string) {
  console.error(`✗ ${message}`);
  failed = true;
}

/** Flattens a nested object/array into a map of "path" -> leaf value. */
function flatten(
  value: unknown,
  prefix = "",
  out: Record<string, unknown> = {}
): Record<string, unknown> {
  if (value !== null && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const path = prefix ? `${prefix}.${key}` : key;
      flatten(child, path, out);
    }
  } else {
    out[prefix] = value;
  }
  return out;
}

// 1. Every locale in config must have a translations entry.
for (const locale of locales) {
  if (!translations[locale]) {
    fail(`Missing translations entry for locale "${locale}"`);
  }
}

// 2. Every locale must have exactly the same key paths as the default.
const baselineKeys = Object.keys(flatten(translations[defaultLocale])).sort();
for (const locale of locales) {
  const keys = Object.keys(flatten(translations[locale])).sort();
  const missing = baselineKeys.filter((key) => !keys.includes(key));
  const extra = keys.filter((key) => !baselineKeys.includes(key));

  if (missing.length > 0) {
    fail(`"${locale}" is missing keys: ${missing.join(", ")}`);
  }
  if (extra.length > 0) {
    fail(`"${locale}" has extra keys: ${extra.join(", ")}`);
  }
}

// 3. No empty values.
for (const locale of locales) {
  for (const [key, value] of Object.entries(flatten(translations[locale]))) {
    if (typeof value === "string" && value.trim().length === 0) {
      fail(`"${locale}.${key}" is empty`);
    }
  }
}

if (failed) {
  console.error("\nTranslation checks failed.");
  process.exit(1);
}

console.log("✓ All translation checks passed.");
