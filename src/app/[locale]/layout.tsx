import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SetLang from "@/components/SetLang";
import { isLocale, locales } from "@/i18n/config";
import { getTranslations } from "@/i18n/translations";

/**
 * Prerender one static page per supported locale (required for static
 * export).
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const t = getTranslations(locale);
  return {
    title: t.appName,
    description: t.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <SetLang lang={locale} />
      {children}
    </>
  );
}
