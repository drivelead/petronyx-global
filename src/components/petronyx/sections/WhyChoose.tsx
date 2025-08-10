import React from "react";

export default function WhyChoose() {
  const points = [
    {
      title: "Proven Supply Paths",
      body: "Multiple refinery sources and lanes to de‑risk availability.",
    },
    {
      title: "Operational Discipline",
      body: "Documentation, inspection, and schedules managed tightly.",
    },
    {
      title: "Transparent Pricing",
      body: "Benchmarks and clear economics — no surprises.",
    },
    {
      title: "Responsive Execution",
      body: "Lean team, direct decision‑making, rapid turnarounds.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2
            id="why-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Why Choose Petronyx
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-600">
            A practical partner for high‑stakes, time‑sensitive energy supply.
          </p>
        </header>

        <div className="grid gap-px bg-zinc-200 border border-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <article key={p.title} className="bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
