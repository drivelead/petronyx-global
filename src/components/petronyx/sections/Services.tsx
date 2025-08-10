// src/components/petronyx/sections/Services.tsx
// Bauhaus-simple services grid: no shadows, no rounded corners.
// Inline SVG pictograms, concise labels and descriptions.

import {
  faBoxesStacked,
  faBolt,
  faShip,
  faWarehouse,
  faFileCertificate,
  faClipboardCheck,
  faLandmark,
  faFileShield,
} from "@awesome.me/kit-d76275fcc0/icons/sharp/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Service = {
  title: string;
  description: string;
  icon: IconDefinition;
};

const SERVICES: Service[] = [
  {
    title: "Bulk Supply Contracts",
    description:
      "Structured term agreements for continuous deliveries aligned to client demand and storage capacity.",
    icon: faBoxesStacked,
  },
  {
    title: "Spot Market Sales",
    description:
      "Rapid execution on confirmed availability with clear laycans and documentation.",
    icon: faBolt,
  },
  {
    title: "CIF / FOB Logistics",
    description:
      "End-to-end coordination with maritime partners and terminals for global routes.",
    icon: faShip,
  },
  {
    title: "Storage & Terminal Access",
    description:
      "Strategic storage options and throughput capacity at key ports.",
    icon: faWarehouse,
  },
  {
    title: "Documentation & Compliance",
    description:
      "KYC/AML alignment, customs, CoO, and specification certificates handled precisely.",
    icon: faFileCertificate,
  },
  {
    title: "Quality & Certification",
    description:
      "Independent inspection, CoA, batch QA/QC and traceability per contract.",
    icon: faClipboardCheck,
  },
  {
    title: "Risk & Instruments",
    description:
      "SBLC structures with performance guarantees; transparent pricing indexed to Platts.",
    icon: faFileShield,
  },
  {
    title: "Government & Tenders",
    description:
      "Compliance‑ready submissions and delivery performance for public sector demand.",
    icon: faLandmark,
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
              <div className="flex flex-col items-start gap-2 text-zinc-900">
                <FontAwesomeIcon
                  icon={s.icon}
                  className="text-3xl mb-2 flex items-center justify-center"
                  aria-hidden
                />
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
