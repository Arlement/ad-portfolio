import { Suspense } from "react";
import { notFound } from "next/navigation";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Portfolio from "@/components/Portfolio";
import { isLocale } from "@/i18n/config";
import { getTranslations } from "@/i18n/translations";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getTranslations(locale);

  return (
    <>
      <Portfolio t={t} />
      <Suspense fallback={null}>
        <LanguageSwitcher current={locale} />
      </Suspense>
    </>
  );
}
