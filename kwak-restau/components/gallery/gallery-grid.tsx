"use client";

import { useState } from "react";
import { Lightbox } from "@/components/gallery/lightbox";

type GalleryImage = {
  id: string;
  category: string;
  alt: string;
  src: string;
  tall?: boolean;
};

const CATEGORIES = ["Tous", "Plats", "Intérieur", "Terrasse"] as const;

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Tous");

  const visible =
    active === "Tous" ? images : images.filter((img) => img.category === active);

  return (
    <section className="max-w-5xl mx-auto px-8 pb-24">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm px-4 py-1.5 rounded-sm border transition-colors ${
              active === cat
                ? "border-brass text-brass"
                : "border-panel text-sage hover:text-parchment hover:border-sage"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[160px]">
        {visible.map((img) => (
          <Lightbox
            key={img.id}
            src={img.src}
            alt={img.alt}
            className={img.tall ? "row-span-2" : ""}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-sage text-sm text-center py-12">
          Aucune photo dans cette catégorie pour le moment.
        </p>
      )}

      <p className="text-xs text-sage text-center mt-8">
        Cliquez sur une photo pour l&apos;agrandir
      </p>
    </section>
  );
}