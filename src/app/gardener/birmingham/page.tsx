import type { Metadata } from "next";
import { LocalTradeLandingPage, type LocalCityPageContent } from "../../../components/LocalTradeLandingPage";
import { createPageMetadata } from "../../../lib/seo";

const title = "Gardener Birmingham | Find Local Gardeners Near You";
const description = "Need a gardener in Birmingham? Post your gardening job once and up to 3 interested local gardeners can get in touch. Compare profiles, verified reviews and quotes before you decide.";
const canonicalPath = "/gardener/birmingham/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Looking for a gardener in Birmingham? Post the job once, hear from interested local gardeners and compare profiles, verified reviews and quotes before choosing.",
  twitterDescription: "Find gardeners in Birmingham for lawn care, hedge trimming, pruning, weeding, garden maintenance, clearances and seasonal tidy-ups.",
});

const content: LocalCityPageContent = {
  trade: "gardener",
  tradeName: "Gardener",
  tradePlural: "Gardeners",
  breadcrumbLabel: "Gardener",
  article: "a",
  city: "Birmingham",
  region: "West Midlands",
  canonicalPath,
  title,
  webPageDescription: "Find gardeners in Birmingham for lawn care, hedge trimming, pruning, weeding, garden maintenance, clearances and seasonal tidy-ups.",
  serviceType: "Local gardener matching service",
  heroCopy: "Whether you need a one-off garden tidy-up, regular maintenance, lawn care, hedge trimming, pruning or help bringing an overgrown space back under control, describe the job once and suitable Birmingham gardeners can express interest. You can then compare who responds before deciding who to hire.",
  workLabel: "gardening work",
  jobsHeading: "What can a Birmingham gardener help with?",
  jobsIntro: "Gardening work can mean anything from regular mowing and weeding to seasonal pruning or a one-off clearance. Give enough detail about the garden and access so gardeners can judge the time, tools and waste involved.",
  jobs: [
    { title: "Regular garden maintenance", text: "Routine visits for mowing, edging, weeding, light pruning, tidying borders and keeping outdoor spaces manageable through the growing season." },
    { title: "Lawn mowing & care", text: "Grass cutting, edging, basic lawn care, reseeding small patches and seasonal attention where the lawn needs more than an occasional cut." },
    { title: "Hedge trimming & pruning", text: "Keeping established hedges, shrubs and suitable smaller plants under control, with timing and technique adjusted to the plant and job." },
    { title: "Weeding, borders & planting", text: "Clearing weeds, tidying beds, planting shrubs or seasonal plants and improving the appearance of borders." },
    { title: "Garden clearance & tidy-ups", text: "One-off help with overgrown gardens, leaves, dead growth, unwanted vegetation and general outdoor clutter before maintenance becomes manageable again." },
    { title: "Turfing & light improvements", text: "Small-scale turfing, bed preparation and other soft-landscaping improvements where the gardener has the right experience." },
  ],
  costHeading: "How much does a gardener cost in Birmingham?",
  costIntro: "Garden prices depend on size, condition, access, machinery, waste removal and whether you need a short maintenance visit or a full-day clearance. Current Birmingham guidance gives these broad benchmarks:",
  prices: [
    { value: "£25", label: "reported Birmingham hourly benchmark" },
    { value: "£180–£220", label: "reported Birmingham day-rate range" },
  ],
  sourceNote: "Indicative Birmingham guidance checked August 2026 from MyJobQuote. Actual quotes vary with garden size, condition, access, machinery, materials and green-waste removal.",
  quoteHeading: "Describe the garden well enough to compare like for like",
  quoteIntro: "A small maintained garden and an overgrown clearance are completely different jobs. Photos, access details and a clear list of tasks help gardeners understand the likely time and equipment required.",
  quoteTips: [
    "Give the approximate garden size and explain how the gardener can access it.",
    "List the main jobs such as mowing, hedge trimming, pruning, weeding, planting or clearance.",
    "Say whether you expect the gardener to bring tools and machinery and whether green waste needs removing.",
    "Share clear photos where possible and say whether you want a one-off visit or regular maintenance.",
  ],
  benefits: [
    { title: "Relevant gardening experience", text: "Look for experience with the specific work you need. Lawn care, hedge work, planting, clearance and soft landscaping can require different tools and knowledge." },
    { title: "What the quote includes", text: "Confirm whether tools, machinery, materials, green-waste removal and travel are included. For regular work, agree which tasks are expected on each visit." },
    { title: "Reliability and communication", text: "For ongoing maintenance, review verified feedback and make sure you are comfortable with access arrangements, timing and how seasonal priorities will be handled." },
  ],
  specialists: [
    { href: "/builder/birmingham/", label: "Find builders in Birmingham" },
    { href: "/handyman/birmingham/", label: "Find handymen in Birmingham" },
    { href: "/electrician/birmingham/", label: "Find electricians in Birmingham" },
    { href: "/plumber/birmingham/", label: "Find plumbers in Birmingham" },
  ],
  faqIntro: "Useful answers before posting a gardening job in Birmingham.",
  faqs: [
    { question: "How do I find a gardener near me in Birmingham?", answer: "Post the gardening job with the Birmingham postcode and describe the garden, current condition and work you want done. Relevant local gardeners can review it, and up to three who are interested can get in touch. You can then compare profiles, verified reviews and quotes before deciding." },
    { question: "How much does a gardener cost in Birmingham?", answer: "Current MyJobQuote Birmingham guidance gives about £25 per hour and roughly £180–£220 per day as local benchmarks. A short maintenance visit may be priced differently from a full-day clearance." },
    { question: "What is the difference between a gardener and a landscape gardener?", answer: "A maintenance gardener commonly focuses on mowing, weeding, pruning, hedge trimming, planting and tidy-ups. Landscape gardeners are more likely to take on larger transformations and hard-landscaping work. There is overlap, so describe the actual job." },
    { question: "Can I hire a gardener for regular maintenance?", answer: "Yes. Many gardeners offer regular visits depending on the garden and season. Agree the priority tasks, likely visit length and whether the schedule changes during slower-growing months." },
    { question: "Do I have to accept a gardening quote?", answer: "No. Posting a job does not oblige you to hire anyone. Compare the gardeners who respond and choose only if you are comfortable with the proposed work and price." },
  ],
};

export default function GardenerBirminghamPage() {
  return <LocalTradeLandingPage content={content} />;
}
