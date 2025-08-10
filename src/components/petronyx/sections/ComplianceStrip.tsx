"use client";

import React from "react";

function Badge({
  icon,
  label,
  href = "#",
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50">
      <span className="inline-flex h-4 w-4 items-center justify-center text-zinc-600 group-hover:text-zinc-900">
        {icon}
      </span>
      <span>{label}</span>
    </a>
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

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
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
      <path d="M7 18v-4M17 18v-4M12 18v-4" />
    </svg>
  );
}

export default function ComplianceStrip() {
  return (
    <div className="border-t border-b border-zinc-200 bg-white/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-3 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none]"
          aria-label="Compliance and credibility badges">
          {/* hide scrollbar Chrome */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <Badge
            icon={<GlobeIcon className="h-4 w-4" />}
            label="Global CIF / FOB Deliveries"
          />
          <Badge
            icon={<DocIcon className="h-4 w-4" />}
            label="Platts‑Linked Pricing"
          />
          <Badge
            icon={<ShieldIcon className="h-4 w-4" />}
            label="KYC / AML Compliance"
          />
          <Badge icon={<BankIcon className="h-4 w-4" />} label="SBLC + 2% PB" />
          <Badge
            icon={<ShieldIcon className="h-4 w-4" />}
            label="IMO / MARPOL Compliance"
          />
          <Badge
            icon={<DocIcon className="h-4 w-4" />}
            label="Independent Inspection (CoA)"
          />
        </div>
      </div>
    </div>
  );
}
