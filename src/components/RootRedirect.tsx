"use client";

import { useEffect } from "react";

import { defaultLocale } from "@/i18n/config";

/**
 * Redirects the bare origin to the default locale, preserving any query
 * params if present.
 */
export default function RootRedirect() {
  useEffect(() => {
    const { origin, pathname, search } = window.location;
    const base = pathname.replace(/\/+$/, "");
    window.location.replace(`${origin}${base}/${defaultLocale}${search}`);
  }, []);

  return null;
}
