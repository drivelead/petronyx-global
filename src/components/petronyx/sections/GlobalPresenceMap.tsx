// src/components/petronyx/sections/GlobalPresenceMapSimple.tsx
"use client";

import React, { useEffect, useState } from "react";
import * as d3 from "d3-geo";
import * as topojson from "topojson-client";
import type {
  Feature,
  FeatureCollection,
  Geometry,
  GeoJsonProperties,
} from "geojson";

type Port = {
  name: string;
  coordinates: [number, number]; // [lon, lat]
  labelOffset?: [number, number]; // [x, y] in px (optional)
};

const PORTS: Port[] = [
  // UAE
  { name: "Sharjah", coordinates: [55.47, 25.38], labelOffset: [4, 0] },

  // Europe / Asia anchors
  { name: "Rotterdam", coordinates: [4.4792, 51.9225], labelOffset: [4, 0] },
  { name: "Singapore", coordinates: [103.8198, 1.3521], labelOffset: [4, 0] },

  // Americas
  { name: "Houston", coordinates: [-95.265, 29.73], labelOffset: [4, 0] },
  { name: "Cartagena", coordinates: [-75.5144, 10.391], labelOffset: [4, 0] },
  { name: "Santos", coordinates: [-46.328, -23.961], labelOffset: [4, 0] },

  // Africa
  { name: "Lagos", coordinates: [3.3896, 6.4474], labelOffset: [4, 0] },
  { name: "Dakar", coordinates: [-17.454, 14.6928], labelOffset: [2, -2] },
  { name: "Tema", coordinates: [-0.0166, 5.667], labelOffset: [2, 10] },
  { name: "Mombasa", coordinates: [39.6683, -4.0435], labelOffset: [4, 6] },
  { name: "Djibouti", coordinates: [43.145, 11.5721], labelOffset: [6, 6] },
  { name: "Durban", coordinates: [31.0218, -29.8587], labelOffset: [4, 8] },
  { name: "Walvis Bay", coordinates: [14.5053, -22.9576], labelOffset: [4, 2] },
];

export default function GlobalPresenceMapSimple() {
  const [countries, setCountries] = useState<
    Feature<Geometry, GeoJsonProperties>[]
  >([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://cdn.jsdelivr.net/npm/visionscarto-world-atlas@1/world/110m.json"
      );
      const worldData = (await res.json()) as any;

      const result = topojson.feature(
        worldData,
        worldData.objects.countries
      ) as
        | FeatureCollection<Geometry, GeoJsonProperties>
        | Feature<Geometry, GeoJsonProperties>;

      const list =
        "features" in result
          ? result.features
          : ([result] as Feature<Geometry, GeoJsonProperties>[]);

      // Filter out Antarctica by common property keys
      const notAntarctica = list.filter((f) => {
        const p = f.properties || {};
        return !(
          p.ISO_A3 === "ATA" ||
          p.iso_a3 === "ATA" ||
          p.NAME === "Antarctica" ||
          p.name === "Antarctica" ||
          p.name_long === "Antarctica"
        );
      });

      setCountries(notAntarctica);
    })();
  }, []);

  const width = 480;
  const height = 240;

  const projection = d3.geoNaturalEarth1();
  projection.fitSize([width, height], { type: "Sphere" } as any);

  const path = d3.geoPath(projection);

  return (
    <section className="py-16 sm:py-24" aria-labelledby="presence-map-heading">
      <div>
        <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <h2
            id="presence-map-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Global Presence
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-600">
            Key trading and logistics hubs we operate through. Additional ports
            available on request.
          </p>
        </header>

        <svg
          viewBox="0 0 480 240"
          className="w-full h-auto"
          role="img"
          aria-label="World map with key Petronyx ports">
          <g>
            {countries.map((feature, i) => (
              <path
                key={i}
                d={path(feature) || undefined}
                fill="#e5e7eb"
                stroke="#ffffff"
                strokeWidth={0.5}
              />
            ))}
          </g>

          <g>
            {PORTS.map((port) => {
              const projected = projection(port.coordinates);
              if (!projected) return null;
              const [x, y] = projected;

              return (
                <g key={port.name}>
                  <circle
                    cx={x}
                    cy={y}
                    r={2}
                    fill="#0a0a0a"
                    stroke="#ffffff"
                    strokeWidth={0.5}
                  />
                  <text
                    x={x + (port.labelOffset?.[0] ?? 6)}
                    y={y + (port.labelOffset?.[1] ?? 2)}
                    className="hidden sm:block fill-zinc-900"
                    fontSize={8}>
                    {port.name}
                  </text>
                  <title>{port.name}</title>
                </g>
              );
            })}
          </g>
        </svg>

        <ul className="sr-only">
          {PORTS.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
