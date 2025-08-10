"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const products = [
  {
    title: "ULSD EN590 (10ppm)",
    description:
      "Ultra‑low sulphur diesel meeting EN590 specifications, sourced from top‑tier refineries.",
  },
  {
    title: "Jet A1",
    description:
      "Aviation turbine fuel for commercial and cargo operators, delivered under CIF/FOB terms.",
  },
  {
    title: "Marine Fuels",
    description:
      "Marine gas oil (MGO) and intermediate fuel oil (IFO) compliant with IMO/MARPOL standards.",
  },
  {
    title: "Gasoline Blends",
    description:
      "RON95 / RON98 automotive gasoline meeting GCC and African market requirements.",
  },
];

export default function Products() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Products
          </h2>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="h-10 w-10 border border-zinc-300 text-zinc-800 hover:bg-zinc-50">
              <svg
                viewBox="0 0 24 24"
                className="mx-auto h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="h-10 w-10 border border-zinc-300 text-zinc-800 hover:bg-zinc-50">
              <svg
                viewBox="0 0 24 24"
                className="mx-auto h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {products.map((p, idx) => (
              <div
                className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] border border-zinc-200 p-6"
                key={idx}>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-tight">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
