import type { Metadata } from "next";
import { LocalTradeLandingPage, type LocalCityPageContent } from "../../../components/LocalTradeLandingPage";
import { createPageMetadata } from "../../../lib/seo";

const title = "Painter & Decorator Birmingham | Find Local Decorators Near You";
const description = "Need a painter and decorator in Birmingham? Post your decorating job once and up to 3 interested local tradespeople can get in touch. Compare profiles, verified reviews and quotes before you decide.";
const canonicalPath = "/painter-decorator/birmingham/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Looking for a painter and decorator in Birmingham? Post the job once, hear from interested local tradespeople and compare profiles, verified reviews and quotes before choosing.",
  twitterDescription: "Find painters and decorators in Birmingham for interior painting, wallpapering, woodwork, exterior decorating and preparation work.",
});

const content: LocalCityPageContent = {
  trade: "painter-decorator",
  tradeName: "Painter & Decorator",
  tradePlural: "Painters & Decorators",
  breadcrumbLabel: "Painter & Decorator",
  article: "a",
  city: "Birmingham",
  region: "West Midlands",
  locationKey: "birmingham",
  canonicalPath,
  title,
  webPageDescription: "Find painters and decorators in Birmingham for interior painting, wallpapering, woodwork, exterior decorating and preparation work.",
  serviceType: "Local painter and decorator matching service",
  heroCopy: "From refreshing one room to decorating a whole property, hanging wallpaper, finishing woodwork or painting suitable exterior surfaces, describe the job once and suitable Birmingham painters and decorators can express interest. You can then compare who responds before deciding who to hire.",
  workLabel: "decorating work",
  localContextHeading: "Birmingham’s housing mix creates very different decorating scopes",
  localContextParagraphs: [
    "With semi-detached homes, terraces and purpose-built flats all making up large parts of Birmingham’s housing stock, decorating jobs can range from a single flat or rental refresh to staircases, woodwork and several rooms in a family house. The amount of preparation, access and protection needed can vary as much as the number of square metres being painted.",
    "When you post the job, describe the property type, rooms and surfaces, whether the home is occupied, and any access issues such as upper floors, narrow stairs or limited parking. If wallpaper, damaged plaster, stained ceilings or extensive woodwork are involved, mention them early so decorators are pricing the same finish.",
  ],
  areaIntro: "Painters and decorators may cover broad parts of Birmingham, but travel and access still affect which jobs they take. Use the exact postcode for properties in Edgbaston, Harborne, Selly Oak, Kings Heath, Yardley, Sutton Coldfield and elsewhere in the city.",
  areaNoteHeading: "Room layout and access can matter as much as distance",
  areaNote: "A decorator may need to move ladders, dust sheets, tools and materials through the property. Mention stairs, communal entrances, parking restrictions, occupied rooms and whether furniture can be moved before work starts. For exterior work, describe which elevations need painting and how accessible they are from ground level.",
  jobsHeading: "What can a Birmingham painter and decorator help with?",
  jobsIntro: "The finish depends heavily on preparation as well as paint or wallpaper. A clear description of the rooms, surfaces and condition helps decorators understand what is really involved.",
  jobs: [
    { title: "Interior painting", text: "Painting walls and ceilings in bedrooms, living rooms, hallways, kitchens and other spaces, including suitable primers or specialist products where required." },
    { title: "Wallpaper hanging & removal", text: "Removing old coverings, preparing walls and hanging patterned or plain wallpaper carefully so joins, corners and repeats are finished neatly." },
    { title: "Woodwork, doors & trim", text: "Preparing and finishing skirting boards, architraves, doors, frames, stair parts and other painted woodwork." },
    { title: "Exterior painting", text: "Painting suitable exterior masonry, render, timber and other prepared surfaces with products designed for weather exposure." },
    { title: "Surface preparation & repairs", text: "Filling small cracks and holes, sanding, caulking, stain blocking and preparing sound surfaces so the decorative finish has a stable base." },
    { title: "Whole-home & rental refreshes", text: "Coordinated decorating across several rooms or an entire property, including freshening tired finishes between tenancies or before sale." },
  ],
  costHeading: "How much does a painter and decorator cost in Birmingham?",
  costIntro: "Decorating costs depend on room size, preparation, repairs, number of coats, wallpaper, materials and access. Current Birmingham guidance gives a useful broad benchmark for labour:",
  prices: [
    { value: "£150–£250", label: "rough decorator day-rate estimate" },
    { value: "£400", label: "UK guide average for a typical room" },
  ],
  sourceNote: "Indicative guidance checked August 2026 from MyJobQuote. Actual Birmingham quotes depend on the surfaces, preparation, materials, room size and finish required.",
  quoteHeading: "Make sure every decorator is pricing the same finish",
  quoteIntro: "A quote can look cheaper simply because it includes less preparation or fewer surfaces. Spell out exactly what is included so you can compare the scope before the price.",
  quoteTips: [
    "List the rooms or exterior areas and which surfaces need painting or papering.",
    "Mention peeling paint, stains, cracks, damaged plaster or old wallpaper that may need preparation.",
    "Say whether ceilings, walls, doors, frames, skirting boards or radiators are included.",
    "Confirm who supplies paint or wallpaper, the expected coats and whether furniture protection and clearing up are included.",
  ],
  benefits: [
    { title: "Preparation and finish", text: "Ask how surfaces will be prepared, how many coats are included and what finish will be used. For wallpaper or specialist coatings, check relevant experience." },
    { title: "Reviews and comparable work", text: "Look at verified customer feedback and ask to see examples of similar decorating work, especially where finish quality is important." },
    { title: "A clear written quote", text: "Make sure the quote explains labour, preparation, materials, paint or wallpaper supply, protection, clearing up, VAT where applicable and expected timing." },
  ],
  specialists: [
    { href: "/handyman/birmingham/", label: "Find handymen in Birmingham" },
    { href: "/builder/birmingham/", label: "Find builders in Birmingham" },
    { href: "/electrician/birmingham/", label: "Find electricians in Birmingham" },
    { href: "/plumber/birmingham/", label: "Find plumbers in Birmingham" },
  ],
  faqIntro: "Useful answers before posting a painting or decorating job in Birmingham.",
  faqs: [
    { question: "How do I find a painter and decorator near me in Birmingham?", answer: "Post the decorating job with the Birmingham postcode and describe the rooms, surfaces and finish you need. Relevant local tradespeople can review it, and up to three who are interested can get in touch. You can then compare profiles, verified reviews and quotes before deciding." },
    { question: "How much does a painter and decorator charge in Birmingham?", answer: "Current MyJobQuote Birmingham guidance gives a rough day-rate estimate of about £150–£250. The final cost depends heavily on preparation, room size, repairs, wallpaper, materials and access." },
    { question: "Should I buy the paint or let the decorator supply it?", answer: "Either can work. If the decorator supplies materials, ask for the product and finish to be clear in the quote. If you supply paint, confirm quantity and suitability before work starts." },
    { question: "Can a decorator hang wallpaper as well as paint?", answer: "Many painters and decorators also hang wallpaper, but experience varies. Pattern matching and delicate papers need care, so mention the exact product and ask about similar work." },
    { question: "Do I have to accept a decorating quote?", answer: "No. Posting a job does not oblige you to hire anyone. Compare the tradespeople who respond and choose only if you are comfortable with the scope, finish and price." },
  ],
};

export default function PainterDecoratorBirminghamPage() {
  return <LocalTradeLandingPage content={content} />;
}
