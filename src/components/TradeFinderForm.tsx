"use client";

import { useState } from "react";
import type { TradeSlug } from "../lib/affiliateLinks";
import { tradeCategories } from "../lib/tradeCategoryContent";
import { QuoteModal } from "./QuoteModal";

function TradeIcon({ slug }: { slug?: TradeSlug }) {
  const common = {
    viewBox: "0 0 64 64",
    "aria-hidden": true,
  } as const;

  if (!slug) {
    return (
      <svg {...common}>
        <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="32" r="9" />
          <path d="M32 10v7M32 47v7M10 32h7M47 32h7M16.4 16.4l5 5M42.6 42.6l5 5M47.6 16.4l-5 5M21.4 42.6l-5 5" />
        </g>
      </svg>
    );
  }

  switch (slug) {
    case "handyman":
      return <svg {...common}><g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M18 17l8 8-9 9-8-8z"/><path d="M24 23l12-12 5 5-12 12"/><path d="M36 35l15 15"/><path d="M44 31l4-4c4-4 9-5 13-4-1 4-2 9-6 13l-4 4"/><path d="M31 44l-8 8"/></g></svg>;
    case "plumber":
      return <svg {...common}><g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14h10v8h4a8 8 0 0 1 8 8v8"/><path d="M42 38v12a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6V36a6 6 0 0 1 6-6h14"/><path d="M39 13c3 0 5 2 5 5v6h-8v-6c0-3 2-5 5-5z"/><path d="M24 43h12"/></g></svg>;
    case "electrician":
      return <svg {...common}><g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M28 9L16 35h12l-4 20 24-31H34l6-15z"/><circle cx="32" cy="32" r="24" opacity=".34"/></g></svg>;
    case "roofer":
      return <svg {...common}><g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M10 31L32 13l22 18"/><path d="M17 27v24h30V27"/><path d="M27 51V37h10v14"/><path d="M44 18h7v9"/></g></svg>;
    case "painter-decorator":
      return <svg {...common}><g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22h28a4 4 0 0 1 4 4v8H16a4 4 0 0 1-4-4z"/><path d="M44 26h8v8h-8z"/><path d="M52 30v10c0 5-4 9-9 9h-4"/><path d="M28 43l12 12"/></g></svg>;
    case "flooring-fitter":
      return <svg {...common}><g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="12" y="12" width="16" height="16" rx="2"/><rect x="30" y="12" width="22" height="10" rx="2"/><rect x="12" y="30" width="22" height="22" rx="2"/><rect x="36" y="24" width="16" height="28" rx="2"/></g></svg>;
    case "builder":
      return <svg {...common}><g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 28h40v24H12z"/><path d="M18 20h10v8H18zM36 20h10v8H36z"/><path d="M24 40h16"/><path d="M12 36h40"/><path d="M22 20v-6h20v6"/></g></svg>;
    case "gardener":
      return <svg {...common}><g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M31 52V30"/><path d="M31 33c-10 0-17-7-17-17 10 0 17 7 17 17z"/><path d="M33 29c0-10 7-17 17-17 0 10-7 17-17 17z"/><path d="M23 52h18"/></g></svg>;
  }
}

export function TradeFinderForm({ initialTradeSlug }: { initialTradeSlug?: TradeSlug }) {
  const initial = initialTradeSlug ? tradeCategories.find((trade) => trade.slug === initialTradeSlug) : undefined;
  const [selected, setSelected] = useState(initial);
  const [open, setOpen] = useState(false);

  const start = (slug?: TradeSlug) => {
    setSelected(slug ? tradeCategories.find((trade) => trade.slug === slug) : undefined);
    setOpen(true);
  };

  return (
    <>
      <div className="cards">
        {tradeCategories.map((trade) => (
          <button className="card" key={trade.slug} type="button" onClick={() => start(trade.slug)}>
            <div className="card-icon"><TradeIcon slug={trade.slug} /></div>
            <h3>{trade.name} <span>↗</span></h3>
            <p>{trade.description}</p>
          </button>
        ))}
        <button className="card other" type="button" onClick={() => start()}>
          <div className="card-icon"><TradeIcon /></div>
          <h3>Other <span>↗</span></h3>
          <p>Not sure which trade you need? Start here</p>
        </button>
      </div>
      <QuoteModal open={open} onClose={() => setOpen(false)} tradeSlug={selected?.slug} tradeName={selected?.name} />
    </>
  );
}
