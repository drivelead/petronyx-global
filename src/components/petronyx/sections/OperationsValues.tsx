"use client";

export default function OperationsValues() {
  const ops = [
    "Physical trade of refined products (spot & term)",
    "Benchmark‑linked pricing; clear documentation standards",
    "Deliveries under Incoterms® CIF / FOB",
    "Tight coordination with terminals and inspection agencies",
  ];
  const vals = [
    "Integrity in Trade — transparent and auditable",
    "Reliability — delivery performance before promises",
    "Compliance — KYC/AML and international regulations",
    "Client‑Centric — solutions tailored to demand and constraints",
  ];

  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="operations-values-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2
            id="operations-values-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            How We Operate & Our Values
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-600">
            Clear methods, consistent standards, and a client‑focused mindset.
          </p>
        </header>

        <div className="grid gap-px bg-zinc-200 border border-zinc-300 sm:grid-cols-2">
          <div className="bg-white p-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Operating Model
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              {ops.map((line) => (
                <li key={line} className="flex gap-2">
                  <span
                    className="mt-[6px] h-[3px] w-4 bg-zinc-900"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6">
            <h3 className="text-base font-semibold text-zinc-900">Values</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              {vals.map((line) => (
                <li key={line} className="flex gap-2">
                  <span
                    className="mt-[6px] h-[3px] w-4 bg-zinc-900"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
