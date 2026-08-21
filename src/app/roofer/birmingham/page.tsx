import type { Metadata } from "next";
import { LocalTradeLandingPage, type LocalCityPageContent } from "../../../components/LocalTradeLandingPage";
import { createPageMetadata } from "../../../lib/seo";

const title = "Roofer Birmingham | Find Local Roofers Near You";
const description = "Need a roofer in Birmingham? Post your roofing job once and up to 3 interested local roofers can get in touch. Compare profiles, verified reviews and quotes before you decide.";
const canonicalPath = "/roofer/birmingham/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Looking for a roofer in Birmingham? Post the job once, hear from interested local roofers and compare profiles, verified reviews and quotes before choosing.",
  twitterDescription: "Find local roofers in Birmingham for leaks, tile and slate repairs, flat roofs, leadwork, chimneys, gutters and roof replacements.",
});

const content: LocalCityPageContent = {
  trade: "roofer",
  tradeName: "Roofer",
  tradePlural: "Roofers",
  breadcrumbLabel: "Roofer",
  article: "a",
  city: "Birmingham",
  region: "West Midlands",
  locationKey: "birmingham",
  canonicalPath,
  title,
  webPageDescription: "Find local roofers in Birmingham for leaks, tile and slate repairs, flat roofs, leadwork, chimneys, gutters and roof replacements.",
  serviceType: "Local roofer matching service",
  heroCopy: "Whether you have a leaking roof, storm-damaged tiles, a flat-roof problem, chimney or flashing repairs, guttering issues or a larger roof replacement, describe the work once and suitable Birmingham roofers can express interest. You can then compare who responds before deciding who to hire.",
  workLabel: "roofing work",
  localContextHeading: "Roofing work changes with the type of Birmingham property",
  localContextParagraphs: [
    "Birmingham has a large mix of semi-detached homes, terraces and purpose-built flats, and those property types create very different roofing situations. Terraced and semi-detached houses can involve shared roof lines, chimneys, valleys or adjoining gutters, while flats may have communal roof areas or managed external maintenance.",
    "When posting a roofing job, describe the property type, where the problem is visible, whether the roof is pitched or flat if you know, and how easy the building is to access. For flats or managed buildings, it is also useful to check who is responsible for the roof before arranging private work.",
  ],
  areaIntro: "Roofers covering Birmingham may travel across a broad area, but availability can still depend on the job, access and current workload. Use the exact postcode whether the property is in Edgbaston, Harborne, Erdington, Yardley, Sutton Coldfield or another part of the city.",
  areaNoteHeading: "Access and the exact roof position can change the quote",
  areaNote: "Tell roofers whether the issue is at the front, rear, side, chimney, extension, garage or flat roof, and mention any obvious access restrictions. If scaffolding, a tower or specialist access may be needed, knowing the property layout and surrounding space helps tradespeople assess the job more realistically.",
  jobsHeading: "What can a Birmingham roofer help with?",
  jobsIntro: "From tracing a leak to replacing damaged coverings or planning a larger re-roof, a roofing contractor can inspect the problem, explain the options and quote for the work needed to keep the property weatherproof.",
  jobs: [
    { title: "Roof leaks & storm damage", text: "Finding the source of water ingress, replacing damaged coverings and repairing areas affected by wind, heavy rain or general deterioration." },
    { title: "Tiles, slates & ridge repairs", text: "Replacing slipped, cracked or missing tiles and slates, repairing ridge details and dealing with localised defects before they develop into larger leaks." },
    { title: "Flat roof repair & replacement", text: "Repairs and replacement systems for garages, extensions, porches and other flat roofs, including felt, EPDM and GRP where suitable." },
    { title: "Chimneys, flashing & leadwork", text: "Repairing roof junctions, lead flashing and chimney-related defects where failed details or damaged materials are allowing water in." },
    { title: "Gutters, fascias & soffits", text: "Repairing or replacing rainwater goods and roof-edge components where leaks, overflowing gutters or damaged fittings are causing problems." },
    { title: "Re-roofing & new coverings", text: "Larger projects involving replacement roof coverings, underlay, battens and associated details where repair alone is no longer the sensible option." },
  ],
  costHeading: "How much does a roofer cost in Birmingham?",
  costIntro: "Roofing prices vary widely because a small tile repair and a full replacement are completely different jobs. Access, scaffolding, roof pitch, materials and the extent of hidden damage can all affect the quote.",
  prices: [
    { value: "£34–£42", label: "reported Birmingham hourly rate" },
    { value: "£240–£330", label: "reported Birmingham day-rate range" },
  ],
  sourceNote: "Indicative Birmingham guidance checked August 2026 from MyJobQuote. Actual roofing prices can differ substantially by size, material, access and scope, so compare written quotes for the same work.",
  quoteHeading: "Give roofers enough detail to assess the same problem",
  quoteIntro: "Roof problems can look similar from inside a property while having very different causes. Explain what you can see safely and give enough context for each roofer to understand the same issue.",
  quoteTips: [
    "Explain where you see the problem, such as a ceiling stain, missing tile, chimney leak or overflowing gutter.",
    "Say when the issue appears, for example during heavy rain or wind, and whether it has recently become worse.",
    "Mention the roof type if you know it and any previous repairs or approximate age of the covering.",
    "Ask whether access, scaffolding, materials, waste removal, VAT and any guarantee are included.",
  ],
  benefits: [
    { title: "Relevant roofing experience", text: "Ask whether they regularly work on your type of roof and problem, and look at recent comparable work where possible." },
    { title: "Insurance and a clear scope", text: "Ask about public liability insurance and get the proposed work in writing, including materials, access, waste removal, price and payment terms." },
    { title: "Safety, regulations and guarantees", text: "For larger re-roofing or structural work, ask whether Building Regulations or other permissions apply and confirm what workmanship or product guarantee will be provided." },
  ],
  specialists: [
    { href: "/handyman/birmingham/", label: "Find handymen in Birmingham" },
    { href: "/plumber/birmingham/", label: "Find plumbers in Birmingham" },
    { href: "/electrician/birmingham/", label: "Find electricians in Birmingham" },
    { href: "/builder/birmingham/", label: "Find builders in Birmingham" },
  ],
  faqIntro: "Quick answers to common questions before posting a roofing job in Birmingham.",
  faqs: [
    { question: "How do I find a roofer near me in Birmingham?", answer: "Post the roofing job with the Birmingham postcode and describe the problem or project. Relevant local roofers can review it, and up to three who are interested can get in touch. You can then compare profiles, verified reviews and quotes before deciding." },
    { question: "How much does a roofer charge in Birmingham?", answer: "There is no single roofing price because small repairs, flat roofs and full replacements vary enormously. Current Birmingham guidance gives roughly £34–£42 per hour or £240–£330 per day as labour benchmarks." },
    { question: "What should a roofing quote include?", answer: "For anything beyond a very small repair, ask for a written scope stating what will be repaired or replaced, proposed materials, labour, access or scaffolding, waste removal, VAT where applicable and any guarantee." },
    { question: "Do roofing jobs need Building Regulations approval?", answer: "Some roof work can require Building Regulations approval, particularly larger re-roofing or work that changes regulated parts of the roof. Confirm the position for your project before work starts." },
    { question: "Do I have to accept a roofing quote?", answer: "No. Posting a job does not oblige you to hire anyone. Compare the roofers who respond and choose only if you are comfortable with the proposed solution, scope and price." },
  ],
};

export default function RooferBirminghamPage() {
  return <LocalTradeLandingPage content={content} />;
}
