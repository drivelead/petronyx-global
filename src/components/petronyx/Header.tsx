"use client";

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
      className="sticky top-0 z-50 transition-colors duration-200 p-6"
      role="banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white text-black">
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
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>

            {/* Menu button */}
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
