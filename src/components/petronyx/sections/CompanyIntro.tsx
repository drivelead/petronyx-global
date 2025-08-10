// src/components/petronyx/sections/CompanyIntro.tsx
// Authoritative company introduction for Petronyx Global.
// Mature tone, concise proof points, accessible structure.

import Link from "next/link";
import React from "react";

export default function CompanyIntro() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Copy */}
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Independent Energy Trading, Built for Reliability
            </h2>
            <p className="mt-4 text-zinc-600 text-base leading-relaxed">
              Petronyx Global is an independent energy trading company supplying
              refined petroleum products to governments, distributors, and
              industrial buyers worldwide. From our strategic base in the UAE,
              we coordinate sourcing, maritime logistics, and contract execution
              with an uncompromising focus on compliance and delivery
              performance.
            </p>
            <p className="mt-4 text-zinc-600 text-base leading-relaxed">
              We trade physical barrels with clear documentation standards and
              pricing referenced to respected market benchmarks. Deliveries are
              executed under standard Incoterms® (CIF/FOB) through a network of
              terminals, storage providers, and shipping partners.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#products"
                className="inline-flex items-center justify-center bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800">
                View Products
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50">
                Contact Trading Desk
              </Link>
            </div>
          </div>

          {/* Proof points */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="border border-zinc-200 p-5">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Primary Products
                </p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                  <li>ULSD EN590 (10ppm)</li>
                  <li>Jet A1</li>
                  <li>Marine Fuels (MGO/IFO)</li>
                  <li>Gasoline (RON95/98)</li>
                </ul>
              </div>

              <div className="border border-zinc-200 p-5">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Operating Model
                </p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                  <li>Spot & term supply contracts</li>
                  <li>CIF / FOB deliveries</li>
                  <li>Global maritime & terminal access</li>
                  <li>Benchmark‑linked pricing</li>
                </ul>
              </div>

              <div className="border border-zinc-200 p-5 col-span-2">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Who We Serve
                </p>
                <p className="mt-2 text-sm text-zinc-700">
                  National agencies, fuel distributors, maritime operators,
                  aviation hubs, and large industrial buyers requiring
                  dependable bulk supply and transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
