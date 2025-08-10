// src/components/petronyx/Footer.tsx
// Palantir-style footer: clean grid with multiple columns, slim type, and social links (X, LinkedIn).
// All links are placeholders ("#") for now.

import React from "react";

const nav = {
  offerings: [
    { label: "Bulk Fuel Supply", href: "#" },
    { label: "Spot Market Sales", href: "#" },
    { label: "ULSD EN590 (10ppm)", href: "#" },
    { label: "Jet A1", href: "#" },
    { label: "Marine Fuels", href: "#" },
    { label: "Gasoline RON95/98", href: "#" },
  ],
  impact: [
    { label: "Government Supply", href: "#" },
    { label: "Industrial Clients", href: "#" },
    { label: "Distributors", href: "#" },
    { label: "Maritime & Ports", href: "#" },
    { label: "Aviation Hubs", href: "#" },
  ],
  capabilities: [
    { label: "CIF / FOB Delivery", href: "#" },
    { label: "Storage & Terminal Access", href: "#" },
    { label: "Platts-Linked Pricing", href: "#" },
    { label: "Trade Compliance", href: "#" },
    { label: "Risk Management", href: "#" },
    { label: "Quality Assurance", href: "#" },
  ],
  documents: [
    { label: "Trust & Compliance", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.146 3H21l-7.5 8.57L22 21h-5.98l-4.67-5.51L6.02 21H3l7.98-9.12L2.5 3h6.08l4.23 5.09L18.146 3z"
      />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.447 20.452H17.21v-5.569c0-1.329-.027-3.039-1.852-3.039-1.853 0-2.136 1.447-2.136 2.944v5.664H9.086V8.999h3.111v1.563h.045c.435-.824 1.498-1.694 3.084-1.694 3.297 0 3.905 2.171 3.905 4.994v6.59zM5.337 7.433a1.807 1.807 0 110-3.614 1.807 1.807 0 010 3.614zM6.956 20.452H3.714V8.999h3.242v11.453z"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Column: legal + social */}
          <div className="text-sm text-zinc-600">
            <p className="text-zinc-900 font-medium">
              © {year} Petronyx Global. All rights reserved.
            </p>
            <div className="mt-4 space-y-2">
              <a href="#" className="underline-offset-2 hover:underline">
                Cookie Settings
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Petronyx on X"
                className="text-zinc-600 hover:text-zinc-900">
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Petronyx on LinkedIn"
                className="text-zinc-600 hover:text-zinc-900">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column groups */}
          <nav
            className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3"
            aria-label="Footer">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Offerings
              </h3>
              <ul className="space-y-2 text-sm">
                {nav.offerings.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-zinc-700 hover:text-zinc-900">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Impact Studies
              </h3>
              <ul className="space-y-2 text-sm">
                {nav.impact.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-zinc-700 hover:text-zinc-900">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Capabilities
              </h3>
              <ul className="space-y-2 text-sm">
                {nav.capabilities.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-zinc-700 hover:text-zinc-900">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Documents
              </h3>
              <ul className="space-y-2 text-sm">
                {nav.documents.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-zinc-700 hover:text-zinc-900">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
