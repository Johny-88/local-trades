"use client";

import { usePathname } from "next/navigation";
import { serviceCategories } from "../lib/serviceCategoryContent";
import { servicePagePath } from "../lib/servicePages";
import { CONTACT_EMAIL } from "../lib/site";

export function SiteFooter() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const isHome = pathname === "/";

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className={`footer-grid ${isHome ? "footer-grid-home" : "footer-grid-simple"}`}>
          <div className="footer-brand">
            <a href="/" className="logo footer-logo" aria-label="Local Trades home">
              <span className="brand-word">Local <strong>Trades</strong></span>
            </a>
            <p>Helping UK homeowners describe a job once, find the right kind of local specialist and compare their options before hiring.</p>
            <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>

          {isHome ? (
            <div className="footer-col footer-trades">
              <h2>Find a specialist</h2>
              <ul className="footer-links footer-trade-links">
                {serviceCategories.map((service) => (
                  <li key={service.slug}>
                    <a href={servicePagePath(service.slug)}>{service.plural}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="footer-col">
            <h2>Information</h2>
            <ul className="footer-links">
              <li><a href="/about/">About Local Trades</a></li>
              <li><a href="/transparency/">Transparency</a></li>
              <li><a href="/contact/">Contact</a></li>
              <li><a href="/privacy/">Privacy Policy</a></li>
              <li><a href="/cookies/">Cookie Policy</a></li>
              <li><a href="/terms/">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {year} Local Trades</div>
          <div className="affiliate-note">
            Local Trades is an independent information and referral website. We may earn a commission from qualifying partner referrals. Professionals, quotes and work are provided or arranged by third parties.
          </div>
        </div>
      </div>
    </footer>
  );
}
