"use client";

import {
  faBars,
  faLightbulbSlash,
  faMagnifyingGlass,
} from "@awesome.me/kit-d76275fcc0/icons/sharp/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function classNames(...cls: (string | boolean | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 p-6"
      role="banner">
      <div className="mx-auto px-6 bg-white text-black rounded-xs border border-zinc-400">
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-2"
            aria-label="Petronyx Global home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="h-10 w-10 text-black"
              fill="currentColor"
              aria-hidden="true">
              <path d="m48 320 226.7 226.7L320 592l272-272L365.3 93.3 320 48 93.3 274.7 48 320zm272 181.5v-363L501.5 320 320 501.5z" />
            </svg>
            <span className="text-2xl font-semibold tracking-tight">
              Petronyx Global
            </span>
          </a>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Contact button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border transition">
              Contact Us
            </a>

            {/* Search button */}
            <button
              type="button"
              aria-label="Search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

            {/* Dark Mode Switcher */}
            <button
              type="button"
              aria-label="Search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition">
              <FontAwesomeIcon icon={faLightbulbSlash} />
            </button>

            {/* Menu button */}
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition">
              <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
