import type { Metadata } from "next";
import { LocalTradeLandingPage, type LocalCityPageContent } from "../../../components/LocalTradeLandingPage";
import { createPageMetadata } from "../../../lib/seo";

const title = "Flooring Fitter Birmingham | Find Local Floor Fitters Near You";
const description = "Need a flooring fitter in Birmingham? Post your flooring job once and up to 3 interested local tradespeople can get in touch. Compare profiles, verified reviews and quotes before you decide.";
const canonicalPath = "/flooring-fitter/birmingham/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Looking for a flooring fitter in Birmingham? Post the job once, hear from interested local tradespeople and compare profiles, verified reviews and quotes before choosing.",
  twitterDescription: "Find flooring fitters in Birmingham for laminate, LVT, vinyl, engineered wood, herringbone, floor preparation and more.",
});

const content: LocalCityPageContent = {
  trade: "flooring-fitter",
  tradeName: "Flooring Fitter",
  tradePlural: "Flooring Fitters",
  breadcrumbLabel: "Flooring Fitter",
  article: "a",
  city: "Birmingham",
  region: "West Midlands",
  locationKey: "birmingham",
  canonicalPath,
  title,
  webPageDescription: "Find flooring fitters in Birmingham for laminate, LVT, vinyl, engineered wood, herringbone, floor preparation and other flooring jobs.",
  serviceType: "Local flooring fitter matching service",
  heroCopy: "Whether you are fitting laminate, LVT, vinyl, engineered wood or a patterned floor, the preparation and finishing details matter as much as the boards themselves. Describe the job once and suitable Birmingham flooring fitters can express interest, so you can compare who responds before choosing.",
  workLabel: "flooring work",
  localContextHeading: "Birmingham’s mix of houses and flats changes flooring logistics",
  localContextParagraphs: [
    "Birmingham includes large numbers of semi-detached homes, terraces and purpose-built flats, so the same flooring product can involve very different delivery, access and preparation. Packs of laminate or engineered boards may be simple to bring into a house but much more awkward where a flat has stairs, a small lift or a long communal route.",
    "When you post the job, give the floor level, approximate room size, existing covering and what you know about the subfloor. Say whether the property is occupied, whether furniture needs moving and whether old flooring must be uplifted and removed, because those details can change the labour before fitting even begins.",
  ],
  areaIntro: "Flooring fitters may work across broad parts of Birmingham, from apartments and terraces nearer the centre to larger houses in areas such as Harborne, Hall Green, Yardley and Sutton Coldfield. Use the exact postcode and describe the floor level and access so the fitter can judge the complete job rather than the room size alone.",
  areaNoteHeading: "Material delivery and uplift can matter as much as square metres",
  areaNote: "Tell fitters whether flooring can be delivered directly to the property, carried upstairs or moved through communal areas, and whether parking or loading is restricted. Also say who is responsible for moving furniture, uplifting the old covering and disposing of waste so quotes are based on the same scope.",
  jobsHeading: "What can a Birmingham flooring fitter help with?",
  jobsIntro: "Different flooring products need different fitting methods and preparation. Tell fitters what material you have chosen, the room size and what is currently on the floor so they can assess the scope properly.",
  jobs: [
    { title: "Laminate flooring", text: "Measuring, planning, underlay and fitting of click laminate, including expansion gaps, trims, thresholds and neat finishing around doorways." },
    { title: "LVT & vinyl flooring", text: "Click or glue-down LVT and sheet-vinyl fitting for kitchens, bathrooms, hallways and living spaces, with attention to subfloor condition." },
    { title: "Engineered & solid wood", text: "Installation of engineered boards and suitable solid-wood floors using the fitting method appropriate to the product, substrate and room conditions." },
    { title: "Herringbone & parquet", text: "Patterned installations where layout, centre lines, cuts and alignment matter and relevant pattern-laying experience is particularly useful." },
    { title: "Subfloor preparation & levelling", text: "Uplifting old coverings where agreed, checking the base and using suitable boards or levelling products where a flatter surface is required." },
    { title: "Finishing details", text: "Underlay, thresholds, beading or skirting details, door trimming and transitions between rooms that complete the installation properly." },
  ],
  costHeading: "How much does floor fitting cost in Birmingham?",
  costIntro: "Flooring costs vary significantly by product, room shape and preparation. Laminate may be relatively straightforward while LVT, engineered wood or patterned layouts can require more time and subfloor work.",
  prices: [
    { value: "£15–£40/m²", label: "broad UK laminate fitting labour range" },
    { value: "£250–£547", label: "listed Birmingham laminate-installation range" },
  ],
  sourceNote: "Indicative guidance checked August 2026 from Checkatrade. Actual Birmingham flooring quotes depend on product, room size, subfloor condition, preparation, trims, uplift and disposal.",
  quoteHeading: "Tell fitters exactly what floor they are pricing",
  quoteIntro: "The same room can produce very different quotes if one price includes uplift, levelling and finishing details while another assumes the subfloor is ready. Make the scope clear before comparing totals.",
  quoteTips: [
    "Give approximate room dimensions and say which flooring product you want fitted.",
    "Mention the existing floor covering and whether it needs uplifting and disposing of.",
    "Flag uneven, damaged or damp-looking areas and say what the subfloor is if you know.",
    "Confirm who supplies flooring, underlay, trims or adhesive and whether door trimming, skirting or beading is included.",
  ],
  benefits: [
    { title: "Relevant flooring experience", text: "Laminate, glue-down LVT, engineered wood and herringbone need different skills. Ask for recent examples using the same or a similar flooring system." },
    { title: "Subfloor and compatibility", text: "Ask what checks and preparation are needed before fitting, including flatness, moisture, acclimatisation and compatibility with underfloor heating where relevant." },
    { title: "A complete written quote", text: "Make sure the quote distinguishes fitting from materials and states uplift, disposal, levelling, underlay, adhesive, trims, door work and VAT where applicable." },
  ],
  specialists: [
    { href: "/handyman/birmingham/", label: "Find handymen in Birmingham" },
    { href: "/plumber/birmingham/", label: "Find plumbers in Birmingham" },
    { href: "/electrician/birmingham/", label: "Find electricians in Birmingham" },
    { href: "/painter-decorator/birmingham/", label: "Find painters & decorators in Birmingham" },
  ],
  faqIntro: "Useful answers before posting a flooring job in Birmingham.",
  faqs: [
    { question: "How do I find a flooring fitter near me in Birmingham?", answer: "Post the flooring job with the Birmingham postcode and describe the room, size, flooring product and existing floor. Relevant local fitters can review it, and up to three who are interested can get in touch. You can then compare profiles, verified reviews and quotes before deciding." },
    { question: "Is a floor fitter the same as a flooring fitter?", answer: "The terms overlap heavily in everyday UK searches. The important thing is to describe the flooring material and preparation required because individual skills vary by product." },
    { question: "How much does floor fitting cost in Birmingham?", answer: "Costs vary by product and preparation. Checkatrade currently gives roughly £15–£40 per m² as a broad UK laminate fitting labour range, while its Birmingham laminate-installation listings show typical prices around £250–£547." },
    { question: "Does the subfloor need to be level?", answer: "The base needs to meet the flooring manufacturer's installation requirements. Uneven, loose, damaged or moisture-affected substrates can cause problems, so ask what preparation is required before fitting." },
    { question: "Do I have to accept a flooring quote?", answer: "No. Posting a job does not oblige you to hire anyone. Compare the fitters who respond and choose only if you are comfortable with the preparation, fitting method and price." },
  ],
};

export default function FlooringFitterBirminghamPage() {
  return <LocalTradeLandingPage content={content} />;
}
