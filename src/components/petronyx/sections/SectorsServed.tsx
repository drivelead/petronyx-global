import React from "react";

export default function SectorsServed() {
  const sectors = [
    "Government & Public Agencies",
    "Fuel Distributors & Traders",
    "Maritime & Ports",
    "Aviation & Airports",
    "Power Generation & Utilities",
    "Heavy Industry & Mining",
  ];

  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="sectors-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2
            id="sectors-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Sectors Served
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-600">
            We support organisations where continuity of fuel supply is critical
            to operations.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-300">
          {sectors.map((s) => (
            <div key={s} className="bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-900">{s}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
