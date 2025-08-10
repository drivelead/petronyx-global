import React from "react";

export default function GlobalPresence() {
  const hubs = [
    {
      region: "Arabian Gulf",
      notes:
        "Refinery and export hubs; primary origin for refined product lanes.",
    },
    {
      region: "Europe",
      notes:
        "Alternate sourcing and storage; inspection and certification partners.",
    },
    {
      region: "Africa",
      notes:
        "Rapidly growing demand corridors; port delivery across multiple markets.",
    },
    {
      region: "South Asia",
      notes: "Trading counterparties and logistics routes as required.",
    },
  ];

  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="presence-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2
            id="presence-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Global Presence
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-600">
            We deliver where demand is — coordinating sourcing, storage, and
            shipping across key regions.
          </p>
        </header>

        <div className="grid gap-px bg-zinc-200 border border-zinc-300 sm:grid-cols-2">
          {hubs.map((h) => (
            <div key={h.region} className="bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-900">
                {h.region}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{h.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
