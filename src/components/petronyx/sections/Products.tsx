// src/components/petronyx/sections/Products.tsx
"use client";

import React from "react";

type Product = {
  title: string;
  description: string;
  bullets?: string[];
};

const PRODUCTS: Product[] = [
  {
    title: "ULSD EN590 (10ppm)",
    description:
      "Ultra-low sulphur diesel to EN590 (10ppm sulphur) from established refineries.",
    bullets: ["Benchmarked to Platts/Argus", "Independent inspection on load"],
  },
  {
    title: "Jet A-1",
    description:
      "Aviation turbine fuel meeting international Jet A-1 specifications.",
    bullets: ["DefStan/ASTM aligned", "Delivered under CIF/FOB terms"],
  },
  {
    title: "Marine Fuels (MGO / IFO)",
    description:
      "Marine gas oil and intermediate fuel oil compliant with IMO/MARPOL requirements.",
    bullets: ["ISO 8217 grades", "Bunkering coordination available"],
  },
  {
    title: "Gasoline (RON95 / RON98)",
    description:
      "Automotive gasoline blends supplied to EN228 or equivalent market specifications.",
    bullets: ["Additive packages as contracted", "Batch CoA and traceability"],
  },
];

export default function Products() {
  return (
    <section className="bg-white py-16 sm:py-24" id="products" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h2
            id="products-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Products
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-300">
          {PRODUCTS.map((p) => (
            <article key={p.title} className="bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {p.description}
              </p>
              {p.bullets && (
                <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-4 bg-zinc-900" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
