"use client";

import { useState } from "react";
import type { ServiceSlug } from "../lib/serviceIframe";
import { ServiceQuoteModal } from "./ServiceQuoteModal";

type LocalServiceLeadCardProps = {
  serviceSlug: ServiceSlug;
  serviceName: string;
  servicePlural: string;
  locationName: string;
  buttonLabel: string;
  compact?: boolean;
};

export function LocalServiceLeadCard({
  serviceSlug,
  serviceName,
  servicePlural,
  locationName,
  buttonLabel,
  compact = false,
}: LocalServiceLeadCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {compact ? (
        <button
          className="cta-button"
          type="button"
          style={{ border: 0, cursor: "pointer", font: "inherit" }}
          onClick={() => setOpen(true)}
        >
          {buttonLabel}
        </button>
      ) : (
        <aside className="find-card" aria-label={`Find ${servicePlural.toLowerCase()} in ${locationName}`}>
          <span className="find-card-kicker">Free quote request</span>
          <h2>Find {servicePlural.toLowerCase()} in {locationName}</h2>
          <p>
            Open the quote form with {servicePlural} already selected, then add the postcode and practical details for the job.
          </p>
          <div className="local-quote-points">
            <span>✓ Post the job once</span>
            <span>✓ Up to 3 interested local responses</span>
            <span>✓ Check genuine verified reviews before you hire</span>
          </div>
          <button className="primary-button" type="button" onClick={() => setOpen(true)}>
            {buttonLabel} →
          </button>
          <p className="microcopy">Free for homeowners · No obligation to hire</p>
        </aside>
      )}

      <ServiceQuoteModal
        open={open}
        onClose={() => setOpen(false)}
        serviceSlug={serviceSlug}
        serviceName={serviceName}
      />
    </>
  );
}
