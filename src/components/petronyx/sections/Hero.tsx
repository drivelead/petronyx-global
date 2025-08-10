"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate">
      <div className="relative min-h-[100svh] min-h-dvh w-full">
        {/* Background image */}
        <Image
          src="/photos/hero.jpg"
          alt="Petronyx global energy operations"
          fill
          priority
          sizes="100vw"
          className="pointer-events-none select-none object-cover"
        />

        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

        {/* Centered copy */}
        <div className="absolute inset-0 grid place-items-center px-6">
          <div className="max-w-5xl text-center">
            <h1 className="text-white text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl font-semibold">
              Global Energy Supply. Unmatched Reliability.
            </h1>
            <p className="mt-4 text-white/90 text-base sm:text-lg">
              Refined petroleum products delivered worldwide — ULSD EN590, Jet
              A1, Marine fuels.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow hover:bg-zinc-100">
                Contact Trading Desk
              </a>
            </div>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6 animate-bounce text-white/80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
