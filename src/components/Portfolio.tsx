import Image from "next/image";

import ReviewCard from "./ReviewCard";
import VideoEmbed from "./VideoEmbed";
import { basePath } from "@/lib/base-path";
import type { Translation } from "@/i18n/translations";

/** Embedded YouTube videos. Titles are the literal video titles (not translated). */
const VIDEOS = [
  { id: "YjqN4hCjOhs", title: "Hazem's Robux Obby: What went wrong" },
  {
    id: "vMIWS5vYms8",
    title: "ChatGPT decides HOW much I DONATE in Pls Donate (Roblox)",
  },
];

/**
 * The full portfolio page, rendered server-side from the locale's
 * translations. All sections are static content.
 */
export default function Portfolio({ t }: { t: Translation }) {
  return (
    <main className="min-h-dvh bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="flex flex-col items-center px-6 pb-16 pt-20 text-center">
        <Image
          src={`${basePath}/profilepicture.png`}
          alt={`${t.hero.name}'s avatar`}
          width={160}
          height={160}
          priority
          className="rounded-full ring-4 ring-white/10"
        />
        <h1 className="mt-6 text-5xl font-bold tracking-tight">
          {t.hero.name}
        </h1>
        <p className="mt-2 text-lg text-zinc-400">{t.hero.role}</p>
        <p className="mt-6 max-w-2xl leading-relaxed text-zinc-300">
          {t.hero.bio}
        </p>
      </section>

      {/* Game Development */}
      <section className="bg-[#101010] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">{t.gameDev.title}</h2>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {t.gameDev.body}
          </p>
        </div>
      </section>

      {/* Video Editing */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold">
            {t.videoEditing.title}
          </h2>
          <div className="mt-8 flex flex-col gap-8">
            {VIDEOS.map((video) => (
              <VideoEmbed
                key={video.id}
                id={video.id}
                title={video.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Comments */}
      <section className="bg-[#101010] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold">
            {t.reviews.title}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {t.reviews.items.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-zinc-500">
        <a
          href="https://github.com/MagiqueDeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-zinc-300"
        >
          {t.footer}
        </a>
      </footer>
    </main>
  );
}
