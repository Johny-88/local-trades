import type { Metadata } from "next";
import { LocalTradeLandingPage, type LocalCityPageContent } from "../../../components/LocalTradeLandingPage";
import { createPageMetadata } from "../../../lib/seo";

const title = "Builder Birmingham | Find Local Builders Near You";
const description = "Need a builder in Birmingham? Post your building project once and up to 3 interested local builders can get in touch. Compare profiles, verified reviews and quotes before you decide.";
const canonicalPath = "/builder/birmingham/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Looking for a builder in Birmingham? Post the project once, hear from interested local builders and compare profiles, verified reviews and quotes before choosing.",
  twitterDescription: "Find builders in Birmingham for extensions, renovations, structural alterations, brickwork, conversions and general building projects.",
});

const content: LocalCityPageContent = {
  trade: "builder",
  tradeName: "Builder",
  tradePlural: "Builders",
  breadcrumbLabel: "Builder",
  article: "a",
  city: "Birmingham",
  region: "West Midlands",
  canonicalPath,
  title,
  webPageDescription: "Find builders in Birmingham for extensions, renovations, structural alterations, brickwork, conversions and general building projects.",
  serviceType: "Local builder matching service",
  heroCopy: "Planning an extension, renovation, structural alteration, conversion or general building project? Describe the work once and suitable Birmingham builders can express interest. You can then see who responds, compare profiles, verified reviews and quotes, and decide who feels right for the project.",
  workLabel: "building project",
  jobsHeading: "What can a Birmingham builder help with?",
  jobsIntro: "Building work ranges from smaller masonry repairs to major extensions and refurbishments. The clearer the scope, drawings and responsibilities are, the easier it is to compare builders on the same project.",
  jobs: [
    { title: "Extensions & additions", text: "Single- and two-storey extensions, porches and other additions, including foundations, walls, openings and coordination with the wider project team." },
    { title: "Renovations & refurbishments", text: "Room or whole-property improvement work, from stripping back and making good to reconfiguring spaces and coordinating several trades." },
    { title: "Structural alterations", text: "Opening up rooms, forming new openings, removing or altering walls and installing structural supports where designed and specified appropriately." },
    { title: "Brickwork & masonry", text: "New walls, repairs, repointing, garden walls, steps, blockwork and other masonry work where a builder or brickwork specialist is appropriate." },
    { title: "Conversions & reconfiguration", text: "Garage conversions, internal layout changes and other projects that turn existing space into something more useful, subject to the right approvals." },
    { title: "General building & repairs", text: "Damaged masonry, local structural repairs, making good after alterations, external repairs and other work beyond a typical handyman task." },
  ],
  costHeading: "How much does a builder cost in Birmingham?",
  costIntro: "Builder pricing varies sharply with project size, materials, structural work, specialist trades, access, scaffolding, waste and finish level. Current Birmingham guidance gives these broad labour benchmarks:",
  prices: [
    { value: "£40", label: "reported Birmingham hourly benchmark" },
    { value: "£290–£350", label: "reported Birmingham day-rate range" },
  ],
  sourceNote: "Indicative Birmingham guidance checked August 2026 from MyJobQuote. Larger extensions and renovations are usually priced as projects rather than simple hourly or daily labour.",
  quoteHeading: "Give every builder the same project information",
  quoteIntro: "For larger work, vague descriptions make quotes impossible to compare. Share drawings, dimensions, approvals and the expected finish wherever you have them, and be clear about who supplies major materials and specialist trades.",
  quoteTips: [
    "Share drawings, dimensions and structural information if you already have them.",
    "Explain the expected finish and whether the property will remain occupied during the work.",
    "State who is supplying materials, skips, scaffolding, kitchens, bathrooms or other major items.",
    "Ask for exclusions, VAT where applicable, payment stages, likely start date and programme to be written down.",
  ],
  benefits: [
    { title: "Comparable project experience", text: "Ask for recent examples and references for work similar in scale and complexity to yours. Extensions, structural alterations and full renovations require different experience from small repairs." },
    { title: "Contract, insurance & payment stages", text: "For larger work, agree the scope, responsibilities, insurance, programme, variation process and staged payments in writing." },
    { title: "Permissions and responsibility", text: "Planning permission and Building Regulations are separate. Clarify who is responsible for drawings, structural design, applications, inspections and completion paperwork." },
  ],
  specialists: [
    { href: "/electrician/birmingham/", label: "Find electricians in Birmingham" },
    { href: "/plumber/birmingham/", label: "Find plumbers in Birmingham" },
    { href: "/roofer/birmingham/", label: "Find roofers in Birmingham" },
    { href: "/painter-decorator/birmingham/", label: "Find painters & decorators in Birmingham" },
  ],
  faqIntro: "Useful answers before posting a building project in Birmingham.",
  faqs: [
    { question: "How do I find a builder near me in Birmingham?", answer: "Post the project with the Birmingham postcode and describe the type and scale of work, including drawings or approvals you already have. Relevant local builders can review it, and up to three who are interested can get in touch. You can then compare profiles, verified reviews and quotes before deciding." },
    { question: "How much does a builder cost in Birmingham?", answer: "Current MyJobQuote Birmingham guidance gives about £40 per hour and roughly £290–£350 per day as local labour benchmarks. Larger projects such as extensions and renovations are normally quoted as a project because materials and specialist work dominate the cost." },
    { question: "Do I need planning permission for an extension?", answer: "Not every extension needs a full planning application because some work can fall within permitted development rights, but the rules depend on the property and proposal. Check the position for your exact Birmingham project before work starts." },
    { question: "Do building projects need Building Regulations approval?", answer: "Many extensions and structural alterations do. Planning permission and Building Regulations are separate, so clarify the approval route and who is responsible for inspections and completion paperwork." },
    { question: "Do I have to accept a builder's quote?", answer: "No. Posting a project does not oblige you to hire anyone. Compare the builders who respond and choose only if you are comfortable with their experience, proposed scope, timing and price." },
  ],
};

export default function BuilderBirminghamPage() {
  return <LocalTradeLandingPage content={content} />;
}
