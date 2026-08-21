"use client";

import { useState } from "react";
import type { ServiceSlug } from "../lib/serviceIframe";
import { ServiceQuoteModal } from "./ServiceQuoteModal";

type ServiceCategoryLeadCardProps = {
  serviceSlug: ServiceSlug;
  serviceName: string;
  servicePlural: string;
  buttonLabel: string;
  compact?: boolean;
};

export function ServiceCategoryLeadCard({
  serviceSlug,
  serviceName,
  servicePlural,
  buttonLabel,
  compact = false,
}: ServiceCategoryLeadCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {compact ? (
        <button className="cta-button" type="button" onClick={() => setOpen(true)}>
          {buttonLabel}
        </button>
      ) : (
        <aside className="find-card" aria-label={`Find ${servicePlural.toLowerCase()} near you`}>
          <span className="find-card-kicker">Free quote request</span>
          <h2>Find {servicePlural.toLowerCase()} near you</h2>
          <p>
            Open the quote form with {servicePlural} already selected, add your postcode and describe what you need.
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
