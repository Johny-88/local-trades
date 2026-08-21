import type { Metadata } from "next";
import { LocalTradeLandingPage, type LocalCityPageContent } from "../../../components/LocalTradeLandingPage";
import { createPageMetadata } from "../../../lib/seo";

const title = "Electrician Birmingham | Find Local Electricians Near You";
const description = "Need an electrician in Birmingham? Post your electrical job once and up to 3 interested local electricians can get in touch. Compare profiles, verified reviews and quotes before you decide.";
const canonicalPath = "/electrician/birmingham/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Looking for an electrician in Birmingham? Post the job once, hear from interested local electricians and compare profiles, verified reviews and quotes before choosing.",
  twitterDescription: "Find local electricians in Birmingham for faults, sockets, lighting, consumer units, rewires, testing and other electrical work.",
});

const content: LocalCityPageContent = {
  trade: "electrician",
  tradeName: "Electrician",
  tradePlural: "Electricians",
  breadcrumbLabel: "Electrician",
  article: "an",
  city: "Birmingham",
  region: "West Midlands",
  canonicalPath,
  title,
  webPageDescription: "Find local electricians in Birmingham for faults, sockets, lighting, consumer units, rewires, testing and other electrical work.",
  serviceType: "Local electrician matching service",
  heroCopy: "From a faulty socket or lighting problem to an EICR, consumer-unit upgrade, new circuit or rewire, describe the electrical work once and suitable Birmingham electricians can express interest. You can then see who responds and compare the options before choosing who to hire.",
  workLabel: "electrical work",
  jobsHeading: "What can a Birmingham electrician help with?",
  jobsIntro: "Electrical work ranges from small faults and upgrades to testing, new circuits and larger rewires. Describe the symptoms or planned installation clearly so electricians can judge whether the job fits their experience.",
  jobs: [
    { title: "Fault finding & repairs", text: "Investigating tripping circuits, loss of power, faulty accessories and other electrical problems before carrying out the appropriate repair." },
    { title: "Sockets, switches & lighting", text: "Replacing or adding sockets, switches, indoor and outdoor lighting and related wiring where the installation allows." },
    { title: "Consumer units & upgrades", text: "Consumer-unit replacements and upgrades where inspection shows the existing equipment is unsuitable, damaged or no longer appropriate for the installation." },
    { title: "New circuits & installations", text: "New circuits for kitchens, extensions, appliances, garden supplies and other planned electrical work that needs appropriate design and protection." },
    { title: "Rewires & alterations", text: "Full or partial rewires and electrical alterations during renovations, extensions and larger property improvement projects." },
    { title: "EICRs & electrical testing", text: "Inspection, testing and Electrical Installation Condition Reports to identify deterioration, defects or potentially dangerous conditions." },
  ],
  costHeading: "How much does an electrician cost in Birmingham?",
  costIntro: "Electrical prices depend on the type of work, access, testing required, materials and whether the job is charged hourly, daily or as a fixed project. Current Birmingham guidance gives a useful local benchmark:",
  prices: [
    { value: "£43", label: "reported Birmingham hourly rate" },
    { value: "£310–£380", label: "reported Birmingham day-rate range" },
  ],
  sourceNote: "Indicative Birmingham guidance checked August 2026 from MyJobQuote. Rewires, consumer-unit work, emergency call-outs, testing and material-heavy jobs may be priced differently.",
  quoteHeading: "Give electricians enough detail to assess the same job",
  quoteIntro: "A good description helps an electrician understand the likely scope before attending. Explain the symptoms or installation you need, where it is in the property and anything you already know about the electrics.",
  quoteTips: [
    "Describe the fault or planned work clearly, including which rooms or circuits are affected.",
    "Mention tripping, flickering, loss of power, unusual heat or smells without touching live equipment.",
    "For planned work, say whether you need new circuits, extra sockets, lighting, testing or certification.",
    "Ask whether labour, materials, testing, certification, VAT and any call-out charge are included.",
  ],
  benefits: [
    { title: "Relevant electrical experience", text: "Ask whether they regularly carry out your type of work, such as fault finding, consumer units, EICRs, rewires, new circuits or lighting installations." },
    { title: "Registration and qualifications", text: "Review the qualifications shown on the profile and ask about competent-person scheme registration where that is relevant to the work being carried out." },
    { title: "Testing and certification", text: "Ask what inspection, testing and certificates will be provided when the work is complete and how Building Regulations compliance will be handled where applicable." },
  ],
  specialists: [
    { href: "/handyman/birmingham/", label: "Find handymen in Birmingham" },
    { href: "/plumber/birmingham/", label: "Find plumbers in Birmingham" },
    { href: "/builder/birmingham/", label: "Find builders in Birmingham" },
    { href: "/flooring-fitter/birmingham/", label: "Find flooring fitters in Birmingham" },
  ],
  faqIntro: "Useful answers before posting an electrical job in Birmingham.",
  faqs: [
    { question: "How do I find an electrician near me in Birmingham?", answer: "Post the electrical job with the Birmingham postcode and describe the fault, test or installation. Relevant local electricians can review it, and up to three who are interested can get in touch. You can then compare profiles, verified reviews and quotes before deciding." },
    { question: "How much does an electrician charge in Birmingham?", answer: "Current MyJobQuote Birmingham guidance gives about £43 per hour and roughly £310–£380 per day as local benchmarks. Larger projects, emergency work, testing and materials can change the final price." },
    { question: "Can an electrician add sockets or lighting?", answer: "Yes. Adding or replacing sockets, switches and lighting is common electrical work, although the existing installation may need inspection before the electrician confirms what can be done safely." },
    { question: "What is an EICR?", answer: "An Electrical Installation Condition Report records the condition of an electrical installation following inspection and testing. It can identify defects, deterioration and issues that may require remedial work." },
    { question: "Do I have to accept an electrical quote?", answer: "No. Posting a job does not oblige you to hire anyone. Compare the electricians who respond and choose only if you are comfortable with their experience, proposed work and price." },
  ],
};

export default function ElectricianBirminghamPage() {
  return <LocalTradeLandingPage content={content} />;
}
