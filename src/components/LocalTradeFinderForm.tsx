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

        <style>{`
          .local-trade-page .local-quote-card .primary-button {
            margin-top: 18px;
          }
          .local-trade-page .local-quote-card > .microcopy {
            margin: 10px 0 0;
          }
          .local-trade-page .local-quote-card .local-quote-points {
            margin: 16px 0 0;
          }
          .local-trade-page .local-quote-card > .local-quote-explainer {
            margin: 14px 0 0;
            color: var(--lt-muted);
            font-size: .88rem;
            line-height: 1.5;
          }
          @media (max-width: 700px) {
            .local-trade-page .hero-grid {
              grid-template-columns: 1fr;
              row-gap: 14px;
            }
            .local-trade-page .hero-grid > div:first-child {
              display: contents;
            }
            .local-trade-page .hero-grid > div:first-child > .eyebrow {
              order: 1;
              margin-bottom: 0;
            }
            .local-trade-page .hero-grid > div:first-child > h1 {
              order: 2;
            }
            .local-trade-page .hero-grid > .local-quote-card {
              order: 3;
              margin-top: 4px;
            }
            .local-trade-page .hero-grid > div:first-child > .hero-copy {
              order: 4;
              margin-top: 8px;
            }
            .local-trade-page .hero-grid > div:first-child > .hero-points {
              order: 5;
              margin-top: 10px;
            }
          }
        `}</style>
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
