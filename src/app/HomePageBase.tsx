import { HomepageExtraContent } from "../components/HomepageExtraContent";
import { TradeFinderForm } from "../components/TradeFinderForm";

export default function HomePageBase() {
  return (
    <main id="top">
      <section className="hero">
        <div className="wrap hero-layout">
          <div className="hero-copy">
            <span className="smallcap">A calmer way to hire locally</span>
            <h1>Good local trades, without all the noise.</h1>
            <p>
              Need a local tradesperson for a job at home? Describe the job once and it can be shared with relevant local tradespeople. Up to three who are interested can get in touch with you. You can then view their profiles, check verified customer reviews and compare quotes before you decide.
            </p>
            <div className="actions">
              <a className="btn" href="#services">Find the right trade →</a>
              <a className="btn ghost" href="#why">Why use this?</a>
            </div>
            <div className="hero-trust">
              <span><b>Post once</b></span>
              <span><b>Up to 3 trades</b> can get in touch</span>
              <span><b>100% verified reviews</b></span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="wrap">
          <div className="intro">
            <span className="smallcap">Start here</span>
            <h2>What needs doing?</h2>
            <p>Choose the closest match. You’ll describe the actual job in the next step.</p>
          </div>
          <TradeFinderForm />
          <div className="reassure">
            <span><b>✓ Free</b> for homeowners</span>
            <span><b>✓ Up to 3</b> interested trades can get in touch</span>
            <span><b>✓ No obligation</b> to hire</span>
          </div>
        </div>
      </section>

      <section className="story" id="why">
        <div className="wrap story-grid">
          <div>
            <span className="smallcap">Why this is different</span>
            <h2>Real jobs. Real customers. Reviews you can actually trust.</h2>
            <p className="lead">
              You do not browse a list and choose someone before posting the job. First, you describe what needs doing. Relevant local tradespeople can then review the job, and up to three who are interested can get in touch. Once they do, you can view their profiles and customer reviews before deciding who you want to speak to or hire.
            </p>
            <div className="verified-box">
              <span className="verified-badge">✓ 100% verified customer reviews</span>
              <h3>See the feedback when a trade responds.</h3>
              <p>
                <strong>The reviews sit on the tradesperson’s profile, so you can check them once an interested trade gets in touch about your job.</strong> The quote service uses a closed-loop feedback system: reviews are submitted by homeowners who had work completed through the service by a verified trade member.
              </p>
            </div>
          </div>

          <div className="notes">
            <div className="note">
              <i>1</i>
              <div>
                <b>Describe the job once</b>
                <span>Tell us what needs doing, where the job is and the practical details that matter.</span>
              </div>
            </div>
            <div className="note review-note">
              <i>2</i>
              <div>
                <b>Interested local trades get in touch</b>
                <span>Your job is shared with relevant tradespeople. Up to three who are interested can contact you about it.</span>
              </div>
            </div>
            <div className="note">
              <i>3</i>
              <div>
                <b>Check profiles, reviews and quotes</b>
                <span>See who responded, review their customer feedback and compare your options. If nobody feels right, you do not have to hire.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how">
        <div className="wrap">
          <div className="intro">
            <span className="smallcap">How it works</span>
            <h2>Simple enough to do from the sofa.</h2>
          </div>
          <div className="how-grid">
            <div className="how-card">
              <small>ONE</small>
              <h3>Pick the trade</h3>
              <p>Choose the service that best fits what you need done.</p>
            </div>
            <div className="how-card">
              <small>TWO</small>
              <h3>Tell us the job</h3>
              <p>Add your postcode and the practical details a tradesperson needs.</p>
            </div>
            <div className="how-card">
              <small>THREE</small>
              <h3>Interested trades get in touch</h3>
              <p>Up to three can contact you. You can then view their profiles and verified reviews, discuss the job and compare quotes before choosing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faqsec" id="faq">
        <div className="wrap faqgrid">
          <div>
            <span className="smallcap">Questions</span>
            <h2>What homeowners usually want to know.</h2>
            <p>A few clear answers before you post your job.</p>
          </div>
          <div>
            <details open>
              <summary>Is it free to post my job?</summary>
              <div className="answer">Yes. It is free for homeowners to post a job and receive quotes.</div>
            </details>
            <details>
              <summary>What happens after I describe my job?</summary>
              <div className="answer">Your job is shared with relevant local tradespeople. Up to three who are interested can get in touch with you about the work. Once they do, you can view their profiles and customer reviews before deciding how you want to proceed.</div>
            </details>
            <details>
              <summary>How many quotes can I receive?</summary>
              <div className="answer">Up to three interested local tradespeople can contact you about the same job and provide a quote or arrange to discuss the work.</div>
            </details>
            <details>
              <summary>Do I have to hire one of the tradespeople?</summary>
              <div className="answer">No. There is no obligation to hire anyone who gets in touch.</div>
            </details>
            <details>
              <summary>When can I see the customer reviews?</summary>
              <div className="answer">After a tradesperson expresses interest in your posted job, you can view their profile and reviews. The quote service uses a closed-loop feedback system, with reviews submitted by homeowners who had work completed through the service by a verified trade member.</div>
            </details>
          </div>
        </div>
      </section>

      <HomepageExtraContent />
    </main>
  );
}
