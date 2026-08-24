"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { defaultLocale, isLocale } from "@/i18n/config";
import { getTranslations } from "@/i18n/translations";

/**
 * Localized 404 page. The server can't know which locale a missing route
 * belongs to, so we derive it from the current path at render time (e.g.
 * /es/foo shows the Spanish message). Falls back to the default locale.
 */
export default function NotFoundContent() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const locale = segments.find(isLocale) ?? defaultLocale;
  const t = getTranslations(locale);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-[#0a0a0a] p-6 text-center text-white">
      <p className="font-mono text-6xl font-bold">404</p>
      <p className="text-zinc-400">{t.notFound}</p>
      <Link
        href={`/${locale}`}
        className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
      >
        {t.backToHome}
      </Link>
    </main>
  );
}
