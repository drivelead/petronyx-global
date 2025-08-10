"use client";

import React from "react";

export default function Capabilities() {
  const items = [
    {
      title: "Sourcing Network",
      desc: "Established supply relationships across the Arabian Gulf, Europe, and Africa for refined products.",
    },
    {
      title: "Maritime Logistics",
      desc: "End‑to‑end voyage planning, chartering, laycan coordination, and documentation.",
    },
    {
      title: "Terminal & Storage",
      desc: "Throughput and short‑term storage options at strategic ports to smooth schedules and demand spikes.",
    },
    {
      title: "Quality Assurance",
      desc: "Independent inspection, CoA, and batch QA/QC aligned to product specs and contract terms.",
    },
    {
      title: "Documentation",
      desc: "Precision in contracts, certificates, and customs — minimizing friction at every stage.",
    },
    {
      title: "Risk Management",
      desc: "Transparent, benchmark‑linked pricing and secure instruments (e.g., SBLC with performance guarantees).",
    },
  ];

  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="capabilities-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2
            id="capabilities-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Capabilities
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-600">
            Infrastructure and processes built to deliver refined products
            reliably and at scale.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-300">
          {items.map((it) => (
            <article key={it.title} className="bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
