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
import type {
  Topology,
  Objects,
  GeometryObject,
} from "topojson-specification";

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
  { name: "Ceyhan", coordinates: [35.817, 36.817], labelOffset: [4, 0] },

  // Americas
  { name: "Houston", coordinates: [-95.265, 29.73], labelOffset: [4, -2] },
  { name: "Cartagena", coordinates: [-75.5144, 10.391], labelOffset: [4, 0] },
  { name: "Freeport", coordinates: [-78.6956, 26.5333], labelOffset: [4, 6] },
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

// Type guard so we don’t use `any`
function isTopology(x: unknown): x is Topology {
  return typeof x === "object" && x !== null && "objects" in (x as Record<string, unknown>);
}

export default function GlobalPresenceMapSimple() {
  const [countries, setCountries] = useState<
    Feature<Geometry, GeoJsonProperties>[]
  >([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://cdn.jsdelivr.net/npm/visionscarto-world-atlas@1/world/110m.json"
      );
      const data: unknown = await res.json();
      if (!isTopology(data)) {
        setCountries([]);
        return;
      }

      // `Topology.objects` is already a string-keyed map of GeometryObjects
      const objects = data.objects as Objects<GeoJsonProperties>;

      // Prefer a "countries" object if present; otherwise fall back to the first object
      const countriesObject: GeometryObject<GeoJsonProperties> | undefined =
        (objects["countries"] as GeometryObject<GeoJsonProperties> | undefined) ??
        (Object.values(objects)[0] as GeometryObject<GeoJsonProperties> | undefined);

      if (!countriesObject) {
        setCountries([]);
        return;
      }

      const result =
        topojson.feature(
          data,
          countriesObject
        ) as
          | FeatureCollection<Geometry, GeoJsonProperties>
          | Feature<Geometry, GeoJsonProperties>;

      const all = "features" in result ? result.features : [result];

      // Robust Antarctica removal: drop anything with centroid latitude < −60°
      const trimmed = all.filter((f) => {
        const [, lat] = d3.geoCentroid(f);
        return lat >= -60;
      });

      setCountries(trimmed);
    })();
  }, []);

  const width = 480;
  const height = 240;

  // Rotate to your chosen framing (−34) and fit without `any`
  const sphere: d3.GeoSphere = { type: "Sphere" };
  const projection = d3.geoNaturalEarth1().rotate([-34, 0]).fitSize([width, height], sphere);
  const path = d3.geoPath(projection);

  return (
    <section className="py-16 sm:py-24" aria-labelledby="presence-map-heading">
      <div>
        <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <h2
            id="presence-map-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Global Presence
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-600">
            Key trading and logistics hubs we operate through. Additional ports available on request.
          </p>
        </header>

        <svg
          viewBox="0 0 480 240"
          className="w-full h-auto"
          role="img"
          aria-label="World map with key Petronyx ports"
        >
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
                    fontSize={8}
                  >
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
