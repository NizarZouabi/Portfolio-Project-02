"use client";

import { useState } from "react";
import Image from "next/image";

export function Lightbox({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Agrandir : ${alt}`}
        className={`relative bg-panel rounded-sm overflow-hidden hover:opacity-80 transition-opacity ${className}`}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 33vw" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-8"
          onClick={() => setOpen(false)}
        >
          <div className="relative bg-panel rounded-sm max-w-2xl w-full aspect-[4/3]">
            <Image src={src} alt={alt} fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </>
  );
}