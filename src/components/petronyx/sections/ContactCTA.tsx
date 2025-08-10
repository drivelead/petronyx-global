import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@awesome.me/kit-d76275fcc0/icons/sharp/solid";

export default function ContactCTA() {
  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <p className="text-balance my-auto text-2xl">
          Tell us about your product, volume, and delivery window. We&apos;ll
          respond quickly with terms.
        </p>
        <Link
          href="#contact"
          className="group w-full h-full flex items-center justify-center bg-black px-5 text-3xl font-medium text-white py-6 rounded-sm">
          Contact Trading Desk
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-4xl ms-auto group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
          />
        </Link>
      </div>
    </section>
  );
}
