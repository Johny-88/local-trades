import type { Metadata } from "next";
import { LocalTradeLandingPage, type LocalCityPageContent } from "../../../components/LocalTradeLandingPage";
import { createPageMetadata } from "../../../lib/seo";

const title = "Handyman Birmingham | Find Local Handymen Near You";
const description = "Need a handyman in Birmingham? Post your job once and up to 3 interested local handymen can get in touch. Compare profiles, verified reviews and quotes before you decide.";
const canonicalPath = "/handyman/birmingham/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Looking for a handyman in Birmingham? Post the job once, hear from interested local handymen and compare profiles, verified reviews and quotes before you choose.",
  twitterDescription: "Find local handymen in Birmingham for repairs, fitting, maintenance, furniture assembly and everyday jobs around the home.",
});

const content: LocalCityPageContent = {
  trade: "handyman",
  tradeName: "Handyman",
  tradePlural: "Handymen",
  breadcrumbLabel: "Handyman",
  article: "a",
  city: "Birmingham",
  region: "West Midlands",
  canonicalPath,
  title,
  webPageDescription: "Find local handymen in Birmingham for repairs, fitting, maintenance and practical jobs around the home.",
  serviceType: "Handyman matching service",
  heroCopy: "From shelves and flat-pack furniture to small repairs and general property maintenance, a good handyman can clear the jobs that keep sitting on your list. Describe the work once and suitable local handymen can express interest, so you can see who responds before deciding who to hire.",
  workLabel: "handyman work",
  jobsHeading: "What can a Birmingham handyman help with?",
  jobsIntro: "Handymen are useful for practical household jobs that are too small for a larger contractor but still need someone with the right tools, experience and attention to detail.",
  jobs: [
    { title: "Everyday home repairs", text: "Loose fittings, sticking doors, damaged trim, small patch repairs and general fixes that tend to accumulate around a property." },
    { title: "Furniture & flat-pack assembly", text: "Beds, wardrobes, desks, cabinets and shelving assembled correctly and put in position without losing your weekend to the instructions." },
    { title: "Wall mounting & hanging", text: "TVs, mirrors, curtain poles, pictures and shelves fitted securely where the wall construction and fixing method are suitable." },
    { title: "Doors, handles & simple fittings", text: "Minor door adjustments, replacement handles, basic hardware fitting and small carpentry-style maintenance around the home." },
    { title: "Landlord & property maintenance", text: "Several smaller repairs completed in one visit for homeowners, landlords or rental properties where multiple minor issues need attention." },
    { title: "Odd jobs & finishing touches", text: "Fresh sealant, small touch-ups, fitting accessories and awkward little tasks that do not justify bringing in a large contractor." },
  ],
  costHeading: "How much does a handyman cost?",
  costIntro: "The price depends on the type of work, how long it takes, whether materials are needed and whether the tradesperson has a minimum call-out. Current UK guidance commonly puts handyman labour around these levels:",
  prices: [
    { value: "£20–£60", label: "typical hourly range cited by MyJobQuote" },
    { value: "£30", label: "UK hourly average cited by Checkatrade" },
  ],
  sourceNote: "Indicative UK guidance only, checked August 2026. A Birmingham quote may be above or below these figures depending on the actual work, travel, materials and time required.",
  quoteHeading: "A clear job description makes comparison easier",
  quoteIntro: "Small jobs are often priced differently depending on whether everything can be completed in one visit. Give enough detail for each tradesperson to understand the same scope before you compare prices.",
  quoteTips: [
    "Put all the small jobs you want done into the same request.",
    "Mention stairs, difficult access or parking restrictions where relevant.",
    "Say whether you already have the furniture, brackets, fittings or materials.",
    "Check whether labour, materials and any minimum call-out are included.",
  ],
  benefits: [
    { title: "Relevant experience", text: "Ask whether they regularly do the type of job you are posting, especially if it involves a specific material or fitting." },
    { title: "Profile checks", text: "Review the tradesperson's profile, verified customer feedback and any insurance or qualifications shown where relevant to the work." },
    { title: "A clear written quote", text: "For anything beyond a very small job, make sure you understand what is included, what is not and how materials will be charged." },
  ],
  specialists: [
    { href: "/plumber/birmingham/", label: "Find plumbers in Birmingham" },
    { href: "/electrician/birmingham/", label: "Find electricians in Birmingham" },
    { href: "/painter-decorator/birmingham/", label: "Find painters & decorators in Birmingham" },
    { href: "/flooring-fitter/birmingham/", label: "Find flooring fitters in Birmingham" },
  ],
  faqIntro: "Quick answers to questions homeowners commonly have before posting a handyman job.",
  faqs: [
    { question: "How do I find a handyman near me in Birmingham?", answer: "Post the job with the Birmingham postcode and explain what needs doing. Relevant local handymen can review the request, and up to three who are interested can get in touch. You can then compare their profiles, verified reviews and quotes before deciding whether to hire." },
    { question: "What jobs does a handyman normally do?", answer: "Handymen commonly handle small household repairs, flat-pack assembly, shelves and wall mounting, door adjustments, minor maintenance, sealant work and other practical odd jobs. Skills vary, so describe the job clearly before hiring." },
    { question: "How much does a handyman charge in Birmingham?", answer: "There is no single Birmingham rate. Current UK guides commonly show handyman rates around £20–£60 per hour, with minimum call-outs and fixed-job pricing also common. Your actual quote depends on the job, travel, materials and time required." },
    { question: "Can I post several small jobs together?", answer: "Yes. If you have a list of small jobs, include them all in the description. That gives the tradesperson a better idea of the likely time involved and can be more efficient than arranging separate visits." },
    { question: "Do I have to accept a quote?", answer: "No. Posting a job does not oblige you to hire anyone. Compare the people who respond and choose only if you are comfortable with the tradesperson, scope and price." },
  ],
};

export default function HandymanBirminghamPage() {
  return <LocalTradeLandingPage content={content} />;
}
