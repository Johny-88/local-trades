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
              Choose the service you need and post your job once. We connect your request with suitable local professionals in your area, and those who are interested can respond. You can then check their profiles, genuine verified reviews and quotes before deciding who, if anyone, you want to hire.
            </p>
            <div className="actions">
              <a className="btn" href="#services">Choose a service →</a>
              <a className="btn ghost" href="#why">How it works</a>
            </div>
            <div className="hero-trust">
              <span><b>Free</b> for homeowners</span>
              <span><b>100% verified</b> reviews</span>
              <span><b>No obligation</b> to hire</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="wrap">
          <div className="service-heading-card">
            <div className="intro">
              <span className="smallcap">Start with the job</span>
              <h2>What kind of specialist do you need?</h2>
              <p>Choose the closest match below. The correct service category is already selected when the quote form opens.</p>
            </div>
          </div>

          <ServiceFinderForm />

          <div className="reassure">
            <span><b>✓ 100% genuine, verified reviews</b></span>
            <span><b>✓ Other</b> opens the full service finder</span>
            <span><b>✓ One job request</b> to get started</span>
          </div>
        </div>
      </section>

      <section className="story" id="why">
        <div className="wrap story-grid">
          <div>
            <span className="smallcap">A simpler first step</span>
            <h2>Post the job once. Let interested local specialists come to you.</h2>
            <p className="lead">
              Tell us what you need and where the job is. Your request is matched with suitable local professionals, and those who want the work can express interest and get in touch. You stay in control throughout — there is no obligation to hire anyone who responds.
            </p>
            <div className="verified-box">
              <span className="verified-badge">✓ 100% genuine, verified reviews</span>
              <h3>See who is interested before you choose.</h3>
              <p>
                <strong>Once a professional expresses interest, you can check their profile and verified customer reviews before making a decision.</strong> Compare experience, feedback and quotes, ask any questions you need, and choose the person you feel most comfortable hiring.
              </p>
            </div>
          </div>

          <div className="notes">
            <div className="note">
              <i>1</i>
              <div>
                <b>Post your job</b>
                <span>Choose the right service, add your postcode and describe what you need done.</span>
              </div>
            </div>
            <div className="note review-note">
              <i>2</i>
              <div>
                <b>Hear from interested local professionals</b>
                <span>Suitable professionals in your area can review the job and express interest in doing the work.</span>
              </div>
            </div>
            <div className="note">
              <i>3</i>
              <div>
                <b>Check reviews, compare and choose</b>
                <span>Review their profiles, genuine verified feedback and quotes, then decide who you want to hire.</span>
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
              <h3>Post your job</h3>
              <p>Choose the service, enter your postcode and tell us clearly what you need done.</p>
            </div>
            <div className="how-card">
              <small>TWO</small>
              <h3>Connect with trusted local professionals</h3>
              <p>Your job can be shown to suitable professionals in your area. Those who are interested can respond and get in touch.</p>
            </div>
            <div className="how-card">
              <small>THREE</small>
              <h3>Check verified reviews and choose</h3>
              <p>See their profiles, 100% genuine verified reviews and quotes, then choose who you want to hire. There is no obligation to proceed.</p>
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
              <summary>What happens after I post my job?</summary>
              <div className="answer">Your request can be matched with suitable local professionals. Those who are interested can respond, after which you can review their profile, verified customer feedback and quote before deciding whether you want to hire.</div>
            </details>
            <details>
              <summary>Are the reviews genuine?</summary>
              <div className="answer">Yes. The customer reviews shown for responding professionals are genuine and verified, so you can use real feedback alongside their profile and quote when making your decision.</div>
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
              <div className="answer">No. There is no obligation to hire. Check their profile, verified reviews and quote, discuss the job, and decide only if one of the options feels right.</div>
            </details>
          </div>
        </div>
      </section>

      <HomepageExtraContent />
    </main>
  );
}
