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
  buttonLabel: string;
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
  buttonLabel,
  tradeName,
}: LocalCtaProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="find-card local-quote-card" id={containerId} aria-label="Post your job">
        <button className="primary-button" type="button" onClick={() => setOpen(true)}>
          {buttonLabel}
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

        <style>{`
          .local-trade-page .local-quote-card {
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
          }
          .local-trade-page .local-quote-card .primary-button {
            min-height: 60px;
            margin: 0;
            font-size: 1.02rem;
          }
          @media (max-width: 700px) {
            .local-trade-page .hero-grid {
              grid-template-columns: 1fr;
              row-gap: 16px;
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
              margin-top: 2px;
            }
            .local-trade-page .hero-grid > div:first-child > .hero-copy {
              order: 4;
              margin-top: 8px;
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
