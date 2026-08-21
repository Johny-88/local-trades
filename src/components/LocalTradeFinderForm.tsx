"use client";

import { useState } from "react";
import type { TradeSlug } from "../lib/affiliateLinks";
import { TradeFinderForm } from "./TradeFinderForm";
import { QuoteModal } from "./QuoteModal";

type LegacyProps = {
  tradeSlug: TradeSlug;
};

type LocalCtaProps = {
  trade: TradeSlug;
  containerId: string;
  title: string;
  intro: string;
  buttonLabel: string;
  microcopy: string;
  tradeName?: string;
};

export function LocalTradeFinderForm(props: LegacyProps | LocalCtaProps) {
  if ("tradeSlug" in props) {
    return <TradeFinderForm initialTradeSlug={props.tradeSlug} />;
  }

  return <LocalQuoteCta {...props} />;
}

function LocalQuoteCta({
  trade,
  containerId,
  title,
  intro,
  buttonLabel,
  microcopy,
  tradeName,
}: LocalCtaProps) {
  const [open, setOpen] = useState(false);
  const actionLabel = buttonLabel === "Start your job request" ? "Post your job now" : buttonLabel;

  return (
    <>
      <aside className="find-card local-quote-card" id={containerId} aria-labelledby={`${containerId}-title`}>
        <span className="find-card-kicker">Handyman already selected</span>
        <h2 id={`${containerId}-title`}>{title}</h2>

        <button className="primary-button" type="button" onClick={() => setOpen(true)}>
          {actionLabel}
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

        <p className="microcopy">{microcopy}</p>

        <div className="local-quote-points" aria-label="Quote request benefits">
          <span>✓ Free for homeowners</span>
          <span>✓ Up to 3 interested local trades can get in touch</span>
          <span>✓ No obligation to hire</span>
        </div>

        <p className="local-quote-explainer">{intro}</p>
      </aside>

      <QuoteModal
        open={open}
        onClose={() => setOpen(false)}
        tradeSlug={trade}
        tradeName={tradeName}
      />
    </>
  );
}
