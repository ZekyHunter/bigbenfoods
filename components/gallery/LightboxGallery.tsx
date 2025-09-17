"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Img = { src: string; alt?: string };

export default function LightboxGallery({ images }: { images: Img[] }) {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  const count = images.length;

  const show = useCallback((idx: number) => {
    setI(idx);
    setOpen(true);
  }, []);

  const next = useCallback(() => setI((p) => (p + 1) % count), [count]);
  const prev = useCallback(() => setI((p) => (p - 1 + count) % count), [count]);
  const close = useCallback(() => setOpen(false), []);

  // klávesy: Esc, ←, →
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, next, prev, close]);

  return (
    <>
      {/* náhledy */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, idx) => (
          <button
            key={img.src + idx}
            onClick={() => show(idx)}
            className="group relative aspect-square overflow-hidden border border-neutral-700"
            aria-label="Zvětšit fotografii"
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-0 group-hover:ring-2 group-hover:ring-red-600/60" />
          </button>
        ))}
      </div>

      {/* lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[i].src}
              alt={images[i].alt ?? ""}
              width={1600}
              height={1000}
              className="w-full h-auto max-h-[85vh] object-contain select-none"
              priority
            />

            {/* ovládání */}
            <button
              onClick={close}
              className="absolute top-2 right-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-3 py-1 text-sm hover:bg-neutral-800"
            >
              Close
            </button>

            <button
              onClick={prev}
              aria-label="Předchozí"
              className="absolute left-0 top-1/2 -translate-y-1/2 border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 p-3 md:p-4"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Další"
              className="absolute right-0 top-1/2 -translate-y-1/2 border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 p-3 md:p-4"
            >
              ›
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-neutral-300">
              {i + 1} / {count}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
