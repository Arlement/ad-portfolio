"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { localeNames, locales, type Locale } from "@/i18n/config";

/**
 * Floating language switcher, pinned to the bottom-right corner of the
 * viewport. Opens a dropdown menu of every supported language.
 *
 * Navigation uses the Next.js router, which handles the GitHub Pages base
 * path automatically, and preserves query params if any.
 */
export default function LanguageSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the menu on outside click or Escape.
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const node = containerRef.current;
      if (node && !node.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const switchTo = (locale: Locale) => {
    setOpen(false);
    if (locale === current) return;

    // usePathname() excludes the base path, so the last segment is always
    // the current locale.
    const trimmed = pathname.replace(/\/+$/, "");
    const segments = trimmed.split("/");
    segments[segments.length - 1] = locale;

    const search = searchParams.toString();
    router.push(`${segments.join("/")}${search ? `?${search}` : ""}`);
  };

  return (
    <div ref={containerRef} className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition-colors hover:bg-white/20"
      >
        <svg
          viewBox="0 0 16 16"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="6" />
          <path d="M2 8h12M8 2c2 2 2 10 0 12M8 2C6 4 6 12 8 14M8 2c2 2 2 10 0 12" />
        </svg>
        {localeNames[current]}
        <svg
          viewBox="0 0 16 16"
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-full right-0 mb-2 w-44 overflow-hidden rounded-2xl border border-white/15 bg-[#151515]/95 shadow-xl backdrop-blur-xl"
        >
          {locales.map((locale) => {
            const active = locale === current;
            return (
              <button
                key={locale}
                type="button"
                role="menuitem"
                onClick={() => switchTo(locale)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-white transition-colors hover:bg-white/10 ${
                  active ? "font-semibold" : ""
                }`}
              >
                <span>{localeNames[locale]}</span>
                {active && (
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8.5 6.5 12 13 4.5" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
