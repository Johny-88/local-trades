import type { Metadata } from "next";
import { LocalTradeLandingPage, type LocalCityPageContent } from "../../../components/LocalTradeLandingPage";
import { createPageMetadata } from "../../../lib/seo";

const title = "Plumber Birmingham | Find Local Plumbers Near You";
const description = "Need a plumber in Birmingham? Post your plumbing job once and up to 3 interested local plumbers can get in touch. Compare profiles, verified reviews and quotes before you decide.";
const canonicalPath = "/plumber/birmingham/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Looking for a plumber in Birmingham? Post the job once, hear from interested local plumbers and compare profiles, verified reviews and quotes before choosing.",
  twitterDescription: "Find local plumbers in Birmingham for leaks, repairs, bathrooms, pipework, radiators and other plumbing jobs.",
});

const content: LocalCityPageContent = {
  trade: "plumber",
  tradeName: "Plumber",
  tradePlural: "Plumbers",
  breadcrumbLabel: "Plumber",
  article: "a",
  city: "Birmingham",
  region: "West Midlands",
  locationKey: "birmingham",
  canonicalPath,
  title,
  webPageDescription: "Find local plumbers in Birmingham for leaks, repairs, bathrooms, pipework, radiators and other plumbing jobs.",
  serviceType: "Local plumber matching service",
  heroCopy: "Whether it is a leaking pipe, a faulty tap, bathroom plumbing, radiator work or a larger pipework job, describe what needs doing once and suitable Birmingham plumbers can express interest. You can then see who responds and compare the options before deciding who to hire.",
  workLabel: "plumbing work",
  localContextHeading: "Plumbing jobs can look very different across Birmingham homes",
  localContextParagraphs: [
    "Birmingham’s mix of semi-detached homes, terraces and purpose-built flats means the same plumbing symptom can involve very different layouts and access. A leak in a house may be straightforward to isolate from the property stop tap, while a flat may involve shared service routes, communal areas or more restricted access to pipework.",
    "When you post the job, say whether the property is a house or flat, which floor the problem is on, where the leak or fitting is located and whether you know where the water can be isolated. Those details help a plumber judge urgency, access and the likely first visit more accurately.",
  ],
  areaIntro: "From Selly Oak and Harborne to Erdington, Hall Green, Yardley and Sutton Coldfield, plumbing availability can vary across Birmingham. Add the exact property postcode so the request reaches plumbers who cover that area and are interested in the type of job you have.",
  areaNoteHeading: "Location details are especially useful for leaks and urgent work",
  areaNote: "If the problem is active, mention whether water is still running, whether it affects one room or several, and whether access is through a flat, shared entrance or occupied part of the property. For flats, say if you know whether the issue is inside your home or appears to involve a shared area, without guessing at the cause.",
  jobsHeading: "What can a Birmingham plumber help with?",
  jobsIntro: "From small leaks to larger bathroom and pipework jobs, the right plumber can assess the problem, explain the likely work and provide a quote for the actual scope.",
  jobs: [
    { title: "Leaks & dripping taps", text: "Leaking pipes, dripping taps, faulty valves and other water leaks that need tracing, isolating and repairing." },
    { title: "Toilets, sinks & taps", text: "Repairs and replacements for toilets, basins, taps, wastes, traps and the plumbing that serves them." },
    { title: "Radiators & heating pipework", text: "Radiator changes, valves, leaks and water-side heating pipework. Gas appliance work must be done by an appropriately qualified Gas Safe registered engineer." },
    { title: "Bathroom plumbing", text: "Connecting or replacing baths, showers, toilets and basins, plus associated pipework and plumbing repairs." },
    { title: "Kitchen & appliance plumbing", text: "Kitchen sinks, taps and suitable appliance connections, including alterations to nearby water and waste pipework." },
    { title: "Burst pipes & urgent repairs", text: "Urgent plumbing faults such as burst or badly leaking pipes where prompt isolation and repair are needed." },
  ],
  costHeading: "How much does a plumber cost?",
  costIntro: "Plumbing prices vary with the type of work, urgency, materials, access and whether the job is priced hourly, daily or as a fixed repair. Current UK guidance commonly gives these broad benchmarks:",
  prices: [
    { value: "£35–£55", label: "typical plumber hourly range" },
    { value: "£200–£350", label: "typical plumber day-rate range" },
  ],
  sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Emergency, out-of-hours and material-heavy jobs can cost more, so compare quotes for the same scope of work.",
  quoteHeading: "Give plumbers enough detail to price the same job",
  quoteIntro: "A clear description helps different plumbers assess the same problem. Explain what is happening, where it is, how urgent it is and anything you already know about access or materials.",
  quoteTips: [
    "Describe the leak, fault or installation as clearly as you can.",
    "Mention whether the water can be isolated and whether the issue is urgent.",
    "Say if parts, sanitaryware or fittings have already been purchased.",
    "Ask whether labour, materials, VAT and any call-out charge are included.",
  ],
  benefits: [
    { title: "Relevant plumbing experience", text: "Ask whether they regularly handle your type of job, whether that is leak diagnosis, bathroom plumbing, radiators, pipework or a larger installation." },
    { title: "Checks and qualifications", text: "Review the profile and any insurance or qualifications shown. For gas work, use a Gas Safe registered engineer qualified for the specific work required." },
    { title: "A clear written quote", text: "Confirm the scope, labour, materials, call-out charges and exclusions before work begins, especially for larger or less predictable repairs." },
  ],
  specialists: [
    { href: "/electrician/birmingham/", label: "Find electricians in Birmingham" },
    { href: "/handyman/birmingham/", label: "Find handymen in Birmingham" },
    { href: "/builder/birmingham/", label: "Find builders in Birmingham" },
    { href: "/flooring-fitter/birmingham/", label: "Find flooring fitters in Birmingham" },
  ],
  faqIntro: "Quick answers to common questions before posting a plumbing job in Birmingham.",
  faqs: [
    { question: "How do I find a plumber near me in Birmingham?", answer: "Post the plumbing job with the Birmingham postcode and explain what needs doing. Relevant local plumbers can review it, and up to three who are interested can get in touch. Once they do, compare profiles, verified reviews and quotes before deciding." },
    { question: "How much does a plumber charge in Birmingham?", answer: "There is no single Birmingham rate. Current UK guidance commonly puts standard plumber rates around £35–£55 per hour and roughly £200–£350 per day. Emergency and material-heavy jobs can cost more." },
    { question: "Can a plumber repair a leaking pipe or dripping tap?", answer: "Yes. Leaks, dripping taps, faulty valves, toilet problems and pipe repairs are common plumbing jobs. Give as much detail as possible about where the leak is and whether the water can be isolated." },
    { question: "Do I need a Gas Safe engineer for boiler or gas work?", answer: "Yes for gas work. Gas businesses and engineers must be on the Gas Safe Register to carry out gas work, and the engineer should be qualified for the specific work required." },
    { question: "Do I have to accept a plumbing quote?", answer: "No. Posting a job does not oblige you to hire anyone. Compare the options that come back and choose only if you are comfortable with the plumber, proposed work and price." },
  ],
};

export default function PlumberBirminghamPage() {
  return <LocalTradeLandingPage content={content} />;
}
