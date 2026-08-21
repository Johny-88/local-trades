"use client";

import { usePathname } from "next/navigation";
import {
  LOCAL_LOCATIONS,
  LOCAL_TRADES,
  PUBLISHED_LOCAL_PAGES,
  localPagePath,
  type LocalCityKey,
} from "../lib/localPages";

export function SiteFooter() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const segments = pathname.split("/").filter(Boolean);
  const cityKey = segments[1] as LocalCityKey | undefined;
  const city = cityKey ? LOCAL_LOCATIONS[cityKey] : undefined;
  const cityPages = cityKey && city
    ? PUBLISHED_LOCAL_PAGES.filter((page) => page.city === cityKey)
    : [];

  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <a href="/" className="logo footer-logo" aria-label="Local Trades home">
            <span className="brand-word">Local <strong>Trades</strong></span>
          </a>
          <p>Helping UK homeowners describe a job once and compare local trade options.</p>
        </div>

        <div className="footer-links" aria-label={city ? `${city.name} trades` : "Find a trade"}>
          <strong>{city ? `${city.name} trades` : "Find a trade"}</strong>
          {city && cityKey ? (
            cityPages.map((page) => (
              <a href={localPagePath(page.trade, page.city)} key={`${page.trade}-${page.city}`}>
                {LOCAL_TRADES[page.trade].footerLabel}
              </a>
            ))
          ) : (
            <>
              <a href="/handyman/">Handymen</a>
              <a href="/plumber/">Plumbers</a>
              <a href="/electrician/">Electricians</a>
              <a href="/roofer/">Roofers</a>
              <a href="/painter-decorator/">Painters &amp; Decorators</a>
              <a href="/flooring-fitter/">Flooring Fitters</a>
              <a href="/builder/">Builders</a>
              <a href="/gardener/">Gardeners</a>
            </>
          )}
        </div>

        <div className="footer-links" aria-label="Information">
          <strong>Information</strong>
          <a href="/about/">About</a>
          <a href="/contact/">Contact</a>
          <a href="/privacy/">Privacy</a>
          <a href="/cookies/">Cookies</a>
          <a href="/terms/">Terms</a>
        </div>
      </div>

      <div className="wrap footer-disclosure">
        <span>© {year} Local Trades. </span>
        Local Trades is an independent referral website. We may earn a commission from qualifying partner referrals. Tradespeople, quotes and work are provided or arranged by third parties.
      </div>
    </footer>
  );
}
