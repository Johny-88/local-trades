import { HomepageExtraContent } from "../components/HomepageExtraContent";
import { ServiceFinderForm } from "../components/ServiceFinderForm";

export default function HomePageBase() {
  return (
    <main id="top">
      <section className="hero">
        <div className="wrap hero-layout">
          <div className="hero-copy">
            <span className="smallcap">Local specialists, made simpler</span>
            <h1>Find the right local specialist for the job.</h1>
            <p>
              From cleaning and removals to heating, locks, tiling, pest control and specialist property work, choose the service you need and describe the job once. Up to three interested local professionals can get in touch, so you can compare your options before deciding.
            </p>
            <div className="actions">
              <a className="btn" href="#services">Choose a service →</a>
              <a className="btn ghost" href="#why">How it works</a>
            </div>
            <div className="hero-trust">
              <span><b>Free</b> for homeowners</span>
              <span><b>Up to 3</b> local responses</span>
              <span><b>No obligation</b> to hire</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="wrap">
          <div className="intro">
            <span className="smallcap">Start with the job</span>
            <h2>What kind of specialist do you need?</h2>
            <p>Choose the closest match below. The correct service category is already selected when the quote form opens.</p>
          </div>

          <ServiceFinderForm />

          <div className="reassure">
            <span><b>✓ 14 direct service categories</b></span>
            <span><b>✓ Other</b> opens the full service finder</span>
            <span><b>✓ One job request</b> to get started</span>
          </div>
        </div>
      </section>

      <section className="story" id="why">
        <div className="wrap story-grid">
          <div>
            <span className="smallcap">A simpler first step</span>
            <h2>Describe the job once. Let interested local specialists come to you.</h2>
            <p className="lead">
              You do not need to search through endless listings or repeat the same details again and again. Pick the service that matches the job, explain what needs doing, and relevant local professionals can review the request. Up to three who are interested can then get in touch.
            </p>
            <div className="verified-box">
              <span className="verified-badge">✓ Compare before you decide</span>
              <h3>Profiles, customer feedback and quotes in one journey.</h3>
              <p>
                <strong>When an interested professional responds, you can review the information available on their profile before choosing what to do next.</strong> Ask questions, compare the proposed work and price, and only proceed if you are comfortable.
              </p>
            </div>
          </div>

          <div className="notes">
            <div className="note">
              <i>1</i>
              <div>
                <b>Choose the right service</b>
                <span>Start with one of the fourteen specialist categories, or use Other if your job sits outside them.</span>
              </div>
            </div>
            <div className="note review-note">
              <i>2</i>
              <div>
                <b>Describe what needs doing</b>
                <span>Add the job details and location so suitable local professionals can understand the request.</span>
              </div>
            </div>
            <div className="note">
              <i>3</i>
              <div>
                <b>Compare your options</b>
                <span>Up to three interested professionals can respond. Compare the information they provide before deciding whether to hire.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how">
        <div className="wrap">
          <div className="intro">
            <span className="smallcap">How it works</span>
            <h2>Three steps from job to local help.</h2>
          </div>
          <div className="how-grid">
            <div className="how-card">
              <small>ONE</small>
              <h3>Pick the service</h3>
              <p>Choose the category that best matches the work you need done.</p>
            </div>
            <div className="how-card">
              <small>TWO</small>
              <h3>Tell us about the job</h3>
              <p>Add your postcode and the practical details a local specialist needs to understand the work.</p>
            </div>
            <div className="how-card">
              <small>THREE</small>
              <h3>Hear from interested professionals</h3>
              <p>Up to three can get in touch. Compare profiles, feedback and quotes before choosing what happens next.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faqsec" id="faq">
        <div className="wrap faqgrid">
          <div>
            <span className="smallcap">Questions</span>
            <h2>What homeowners usually want to know.</h2>
            <p>A few clear answers before you send a job request.</p>
          </div>
          <div>
            <details open>
              <summary>Which services can I choose directly?</summary>
              <div className="answer">Local Trades currently gives direct access to removal companies, cleaners, tilers, heating engineers, locksmiths, pest controllers, tree surgeons, architects, plasterers, kitchen fitters, bathroom specialists, drainage specialists, driveway specialists and window specialists.</div>
            </details>
            <details>
              <summary>What if my job does not fit one of those categories?</summary>
              <div className="answer">Choose Other. It opens the full service finder so you can select the type of work that best matches your job.</div>
            </details>
            <details>
              <summary>Is it free to request quotes?</summary>
              <div className="answer">Yes. It is free for homeowners to submit a job request and receive responses.</div>
            </details>
            <details>
              <summary>How many professionals can contact me?</summary>
              <div className="answer">Up to three interested local professionals can get in touch about the same job.</div>
            </details>
            <details>
              <summary>Do I have to hire someone who responds?</summary>
              <div className="answer">No. There is no obligation to hire. Review the available information, discuss the job and decide only if one of the options feels right.</div>
            </details>
          </div>
        </div>
      </section>

      <HomepageExtraContent />
    </main>
  );
}
