// src/components/petronyx/sections/Services.tsx
// Bauhaus-simple services grid: no shadows, no rounded corners.
// Inline SVG pictograms, concise labels and descriptions.

import React from "react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function BoxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}>
      <path d="M3 7l9 5 9-5" />
      <path d="M3 7v10l9 5 9-5V7" />
    </svg>
  );
}

function ShipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}>
      <path d="M3 18l9 3 9-3-2-7H5l-2 7z" />
      <path d="M6 11l6-7 6 7" />
    </svg>
  );
}

function BankIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 10h14v8H5z" />
      <path d="M7 18v-4M12 18v-4M17 18v-4" />
    </svg>
  );
}

function DocIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}>
      <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}>
      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const SERVICES: Service[] = [
  {
    title: "Bulk Supply Contracts",
    description:
      "Structured term agreements for continuous deliveries aligned to client demand and storage capacity.",
    icon: <BoxIcon className="h-5 w-5" />,
  },
  {
    title: "Spot Market Sales",
    description:
      "Rapid execution on confirmed availability with clear laycans and documentation.",
    icon: <BoxIcon className="h-5 w-5" />,
  },
  {
    title: "CIF / FOB Logistics",
    description:
      "End‑to‑end coordination with maritime partners and terminals for global routes.",
    icon: <ShipIcon className="h-5 w-5" />,
  },
  {
    title: "Storage & Terminal Access",
    description:
      "Strategic storage options and throughput capacity at key ports.",
    icon: <ShipIcon className="h-5 w-5" />,
  },
  {
    title: "Documentation & Compliance",
    description:
      "KYC/AML alignment, customs, CoO, and specification certificates handled precisely.",
    icon: <DocIcon className="h-5 w-5" />,
  },
  {
    title: "Quality & Certification",
    description:
      "Independent inspection, CoA, batch QA/QC and traceability per contract.",
    icon: <ShieldIcon className="h-5 w-5" />,
  },
  {
    title: "Risk & Instruments",
    description:
      "SBLC structures with performance guarantees; transparent pricing indexed to Platts.",
    icon: <BankIcon className="h-5 w-5" />,
  },
  {
    title: "Government & Tenders",
    description:
      "Compliance‑ready submissions and delivery performance for public sector demand.",
    icon: <DocIcon className="h-5 w-5" />,
  },
];

export default function Services() {
  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2
            id="services-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Services
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Practical trading services engineered for reliability, documentation
            accuracy, and on-time delivery.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-300">
          {SERVICES.map((s) => (
            <article key={s.title} className="bg-white p-4">
              <div className="flex items-start gap-2 text-zinc-900">
                <span className="text-zinc-700" aria-hidden>
                  {s.icon}
                </span>
                <h3 className="text-lg font-semibold leading-tight">
                  {s.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-zinc-600 leading-tight">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
