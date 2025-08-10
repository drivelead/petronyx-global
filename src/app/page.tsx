import React from "react";
import Header from "@/components/petronyx/Header";
import Footer from "@/components/petronyx/Footer";

// Sections
import Hero from "@/components/petronyx/sections/Hero";
import CompanyIntro from "@/components/petronyx/sections/CompanyIntro";
import Products from "@/components/petronyx/sections/Products";
import Services from "@/components/petronyx/sections/Services";
import Capabilities from "@/components/petronyx/sections/Capabilities";
import OperationsValues from "@/components/petronyx/sections/OperationsValues";
import WhyChoose from "@/components/petronyx/sections/WhyChoose";
import GlobalPresence from "@/components/petronyx/sections/GlobalPresence";
import ComplianceStrip from "@/components/petronyx/sections/ComplianceStrip";
import SectorsServed from "@/components/petronyx/sections/SectorsServed";
import ContactCTA from "@/components/petronyx/sections/ContactCTA";

export const metadata = {
  title: "Petronyx Global — Energy Supply. Global Reach.",
  description:
    "Independent energy trading company supplying refined petroleum products worldwide. ULSD EN590, Jet A1, Marine fuels. UAE HQ, global logistics.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div id="content" className="flex flex-col gap-0">
        {/* Hero should visually own the viewport */}
        <section id="hero" aria-label="Hero">
          <Hero />
        </section>

        {/* Thin compliance/credibility bar under hero */}
        <section id="compliance" aria-label="Compliance and Standards">
          <ComplianceStrip />
        </section>

        <section
          id="intro"
          aria-label="Company Introduction"
          className="scroll-mt-24">
          <CompanyIntro />
        </section>

        <section id="products" aria-label="Products" className="scroll-mt-24">
          <Products />
        </section>

        <section id="services" aria-label="Services" className="scroll-mt-24">
          <Services />
        </section>
        {/* 
        <section
          id="capabilities"
          aria-label="Capabilities"
          className="scroll-mt-24">
          <Capabilities />
        </section>

        <section
          id="operations-values"
          aria-label="How We Operate & Our Values"
          className="scroll-mt-24">
          <OperationsValues />
        </section>

        <section
          id="why-choose"
          aria-label="Why Choose Petronyx"
          className="scroll-mt-24">
          <WhyChoose />
        </section>

        <section
          id="global-presence"
          aria-label="Global Presence"
          className="scroll-mt-24">
          <GlobalPresence />
        </section>

        <section
          id="sectors"
          aria-label="Sectors Served"
          className="scroll-mt-24">
          <SectorsServed />
        </section>

        <section
          id="contact"
          aria-label="Contact Trading Desk"
          className="scroll-mt-24">
          <ContactCTA />
        </section> */}
      </div>
    </main>
  );
}
