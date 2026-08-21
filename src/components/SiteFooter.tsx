export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <a href="/" className="logo footer-logo" aria-label="Local Trades home">
            <span className="brand-word">Local <strong>Trades</strong></span>
          </a>
          <p>Helping UK homeowners describe a job once and compare local trade options.</p>
        </div>

        <div className="footer-links" aria-label="Information">
          <strong>Information</strong>
          <a href="/">Home</a>
          <a href="/about/">About</a>
          <a href="/contact/">Contact</a>
          <a href="/removal-companies/birmingham/">Removal companies Birmingham</a>
        </div>

        <div className="footer-links" aria-label="Legal">
          <strong>Legal</strong>
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
