import Image from "next/image";

import type { Review } from "@/i18n/translations";

/** A single customer review card. */
export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <Image
          src={review.avatar}
          alt={`${review.name}'s avatar`}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <figcaption className="font-semibold">{review.name}</figcaption>
          <p className="text-xs text-zinc-400">{review.category}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-zinc-400">{review.rating}</p>
      <blockquote className="mt-3 leading-relaxed text-zinc-200">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
    </figure>
  );
}
