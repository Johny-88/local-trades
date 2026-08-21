"use client";

import { useState } from "react";
import type { ServiceSlug } from "../lib/serviceIframe";
import { serviceCategories } from "../lib/serviceCategoryContent";
import { ServiceQuoteModal } from "./ServiceQuoteModal";

function ServiceIcon({ paths }: { paths: readonly string[] }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        {paths.map((path) => <path d={path} key={path} />)}
      </g>
    </svg>
  );
}

const otherIconPaths = [
  "M32 12v7",
  "M32 45v7",
  "M12 32h7",
  "M45 32h7",
  "M18 18l5 5",
  "M41 41l5 5",
  "M46 18l-5 5",
  "M23 41l-5 5",
  "M32 23a9 9 0 1 1 0 18 9 9 0 0 1 0-18z",
];

export function ServiceFinderForm({ initialServiceSlug }: { initialServiceSlug?: ServiceSlug }) {
  const initial = initialServiceSlug
    ? serviceCategories.find((service) => service.slug === initialServiceSlug)
    : undefined;
  const [selected, setSelected] = useState(initial);
  const [open, setOpen] = useState(false);

  const start = (slug?: ServiceSlug) => {
    setSelected(slug ? serviceCategories.find((service) => service.slug === slug) : undefined);
    setOpen(true);
  };

  return (
    <>
      <div className="cards service-cards">
        {serviceCategories.map((service) => (
          <button className="card" key={service.slug} type="button" onClick={() => start(service.slug)}>
            <div className="card-icon"><ServiceIcon paths={service.iconPaths} /></div>
            <h3>{service.name} <span>↗</span></h3>
            <p>{service.description}</p>
          </button>
        ))}

        <button className="card other service-other" type="button" onClick={() => start()}>
          <div className="card-icon"><ServiceIcon paths={otherIconPaths} /></div>
          <h3>Other <span>↗</span></h3>
          <p>Need a different home or property service? Open the full list.</p>
        </button>
      </div>

      <ServiceQuoteModal
        open={open}
        onClose={() => setOpen(false)}
        serviceSlug={selected?.slug}
        serviceName={selected?.name}
      />
    </>
  );
}
