"use client";

import { useEffect } from "react";

/**
 * Syncs the <html lang> attribute to the active locale. The root layout
 * can't know the locale, so this runs client-side on each locale page.
 */
export default function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
