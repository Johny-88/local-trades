"use client";

import { useState } from "react";
import type { ServiceSlug } from "../lib/serviceIframe";
import { ServiceQuoteModal } from "./ServiceQuoteModal";

type LocalServiceLeadCardProps = {
  serviceSlug: ServiceSlug;
  serviceName: string;
  locationName: string;
  buttonLabel: string;
};

export function LocalServiceLeadCard({
  serviceSlug,
  serviceName,
  locationName,
  buttonLabel,
}: LocalServiceLeadCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="find-card" aria-label={`Find ${serviceName.toLowerCase()} in ${locationName}`}>
        <span className="find-card-kicker">Free quote request</span>
        <h2>Find removal companies in {locationName}</h2>
        <p>
          Open the quote form with Removal Companies already selected, then add the postcode and details for your move.
        </p>
        <div className="local-quote-points">
          <span>✓ Post the move once</span>
          <span>✓ Up to 3 interested local responses</span>
          <span>✓ Check genuine verified reviews before you hire</span>
        </div>
        <button className="primary-button" type="button" onClick={() => setOpen(true)}>
          {buttonLabel} →
        </button>
        <p className="microcopy">Free for homeowners · No obligation to hire</p>
      </aside>

      <ServiceQuoteModal
        open={open}
        onClose={() => setOpen(false)}
        serviceSlug={serviceSlug}
        serviceName={serviceName}
      />
    </>
  );
}
