"use client";

import { useState } from "react";

type MenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  dietary: string | null;
};

const CATEGORIES = ["Entrées", "Plats", "Desserts", "Boissons"] as const;

export function MenuCategoryTabs({ items }: { items: MenuItem[] }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Entrées");

  const visible = items.filter((item) => item.category === active);

  return (
    <section className="max-w-3xl mx-auto px-8 pb-24">

      <div className="flex justify-center gap-8 mb-10 border-b border-panel">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`pb-3 text-sm transition-colors relative ${
              active === cat ? "text-brass font-medium" : "text-sage hover:text-parchment"
            }`}
          >
            {cat}
            {active === cat && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brass" />
            )}
          </button>
        ))}
      </div>

      <div>
        {visible.map((item, i) => (
          <div
            key={item.id}
            className={`flex items-start gap-5 py-5 ${i === 0 ? "" : "border-t border-panel"}`}
          >
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base">{item.name}</p>
                <span className="font-serif text-base text-parchment whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-sage mt-1">{item.description}</p>
              {item.dietary && (
                <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-sm border border-sage text-sage">
                  {item.dietary}
                </span>
              )}
            </div>
          </div>
        ))}

        {visible.length === 0 && (
          <p className="text-sage text-sm text-center py-12">
            Aucun plat dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}