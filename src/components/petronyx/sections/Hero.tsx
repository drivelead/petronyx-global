"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@awesome.me/kit-d76275fcc0/icons/sharp/solid";

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
              Global Energy Supply
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
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-white animate-bounce"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
