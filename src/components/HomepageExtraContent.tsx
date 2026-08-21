import styles from "./HomepageExtraContent.module.css";
import {
  FEATURED_HOME_LOCATIONS,
  LOCAL_LOCATIONS,
  LOCAL_TRADES,
  PUBLISHED_LOCAL_PAGES,
  localPagePath,
} from "../lib/localPages";
import { tradeCategories } from "../lib/tradeCategoryContent";

export function HomepageExtraContent() {
  return (
    <aside>
      <section className="guide">
        <div className="wrap">
          <div className="guide-head">
            <span className="smallcap">Get better responses</span>
            <h2>A clearer job usually gets better quotes.</h2>
            <p>You do not need to write an essay. A few useful details help tradespeople understand the job properly before they respond.</p>
          </div>
          <div className="guide-grid">
            <article className="guide-card"><div className="guide-icon">01</div><h3>Explain what needs doing</h3><p>Say what is wrong, what you want changed, and roughly how much work is involved.</p></article>
            <article className="guide-card"><div className="guide-icon">02</div><h3>Add useful photos</h3><p>For many jobs, a clear photo can answer questions that would otherwise take several messages.</p></article>
            <article className="guide-card"><div className="guide-icon">03</div><h3>Mention timing</h3><p>Say whether the job is urgent, flexible, or needs to happen before a particular date.</p></article>
            <article className="guide-card"><div className="guide-icon">04</div><h3>Include practical details</h3><p>Access, parking, measurements, existing materials or anything unusual can help make quotes more accurate.</p></article>
          </div>
        </div>
      </section>

      <section className="hire-smart">
        <div className="wrap hire-layout">
          <div className="hire-copy">
            <span className="smallcap">Before you hire</span>
            <h2>Five quick checks before you say yes.</h2>
            <p>A good quote is not just the cheapest number. Make sure you understand what is included and that you are comfortable with the person doing the work.</p>
            <div className="hire-tip"><b>Compare like for like.</b><span>If one quote looks much cheaper, check whether labour, materials, waste removal, VAT or finishing work has been left out before assuming it is the better deal.</span></div>
          </div>
          <div className="hire-list">
            <div className="hire-row"><i>1</i><div><b>Confirm exactly what is included</b><span>Agree the scope of work, materials and any exclusions so both sides know what the quote covers.</span></div></div>
            <div className="hire-row"><i>2</i><div><b>Check relevant qualifications</b><span>For regulated or specialist work, confirm the registrations or qualifications that apply to that particular job.</span></div></div>
            <div className="hire-row"><i>3</i><div><b>Ask about timing</b><span>Confirm when they can start, roughly how long the work should take, and whether anything could delay it.</span></div></div>
            <div className="hire-row"><i>4</i><div><b>Agree how payment works</b><span>Understand deposits, staged payments and when the final balance is due before the work begins.</span></div></div>
            <div className="hire-row"><i>5</i><div><b>Keep the important details in writing</b><span>For larger jobs especially, keep the agreed price, scope and key changes somewhere both sides can refer back to.</span></div></div>
          </div>
        </div>
      </section>

      <section className="seo-section soft">
        <div className="wrap narrow">
          <span className="smallcap">Explore by trade</span>
          <h2>Find the right specialist</h2>
          <div className={styles.links}>
            {tradeCategories.map((trade) => (
              <a href={`/${trade.slug}/`} key={trade.slug}>
                <strong>{trade.plural}</strong><br />
                <small>{trade.description}</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section" aria-labelledby="popular-location-guides">
        <div className="wrap">
          <div className="guide-head">
            <span className="smallcap">Explore by location</span>
            <h2 id="popular-location-guides">Popular local trade guides</h2>
            <p>Choose a location, then open the specialist guide that best matches the work you need done.</p>
          </div>

          <div className={styles.locations}>
            {FEATURED_HOME_LOCATIONS.map((city) => {
              const location = LOCAL_LOCATIONS[city];
              const cityPages = PUBLISHED_LOCAL_PAGES.filter((page) => page.city === city);

              return (
                <article className={styles.locationCard} key={city}>
                  <h3>{location.name}</h3>
                  <p>{location.region}</p>
                  <div className={styles.locationLinks} aria-label={`${location.name} trade guides`}>
                    {cityPages.map((page) => (
                      <a href={localPagePath(page.trade, page.city)} key={`${page.trade}-${page.city}`}>
                        {LOCAL_TRADES[page.trade].footerLabel}
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </aside>
  );
}
