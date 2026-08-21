import type { LocalCityPageContent } from "../components/LocalTradeLandingPage";
import { getLocalAreaProfile } from "./localAreaRegistry";
import {
  LOCAL_LOCATIONS,
  LOCAL_TRADES,
  PUBLISHED_LOCAL_PAGES,
  localPagePath,
  type LocalCityKey,
  type LocalTradeKey,
} from "./localPages";

type TradeTemplate = {
  article: "a" | "an";
  breadcrumbLabel: string;
  workLabel: string;
  serviceType: string;
  heroAction: string;
  jobsIntro: string;
  jobs: ReadonlyArray<{ title: string; text: string }>;
  costHeading: string;
  costIntro: string;
  prices: ReadonlyArray<{ value: string; label: string }>;
  sourceNote: string;
  quoteHeading: string;
  quoteIntro: string;
  quoteTips: ReadonlyArray<string>;
  benefits: ReadonlyArray<{ title: string; text: string }>;
  faqIntro: string;
  sharedFaqs: ReadonlyArray<{ question: string; answer: string }>;
};

const TRADE_TEMPLATES: Record<LocalTradeKey, TradeTemplate> = {
  handyman: {
    article: "a",
    breadcrumbLabel: "Handyman",
    workLabel: "handyman work",
    serviceType: "Handyman matching service",
    heroAction: "repairs, fitting, furniture assembly and everyday property maintenance",
    jobsIntro: "Handymen are useful for practical household jobs that are too small for a larger contractor but still need the right tools, experience and attention to detail.",
    jobs: [
      { title: "Everyday home repairs", text: "Loose fittings, sticking doors, damaged trim, small patch repairs and general fixes that tend to accumulate around a property." },
      { title: "Furniture & flat-pack assembly", text: "Beds, wardrobes, desks, cabinets and shelving assembled correctly and positioned where you need them." },
      { title: "Wall mounting & hanging", text: "TVs, mirrors, curtain poles, pictures and shelves fitted securely where the wall and fixing method are suitable." },
      { title: "Doors, handles & simple fittings", text: "Minor door adjustments, replacement handles, basic hardware fitting and small carpentry-style maintenance." },
      { title: "Landlord & property maintenance", text: "Several smaller repairs completed in one visit where multiple minor issues need attention." },
      { title: "Odd jobs & finishing touches", text: "Fresh sealant, small touch-ups, fitting accessories and awkward little tasks that do not justify a large contractor." },
    ],
    costHeading: "How much does a handyman cost?",
    costIntro: "Handyman prices vary with the task, time required, materials, access and any minimum call-out. These broad UK guide figures are useful only as a starting point:",
    prices: [
      { value: "£20–£60", label: "broad UK hourly guide range" },
      { value: "Job-specific", label: "fixed prices are common for defined tasks" },
    ],
    sourceNote: "Indicative UK guidance only. The local quote can be above or below guide figures depending on travel, materials, access and the actual time required.",
    quoteHeading: "A complete task list makes handyman quotes easier to compare",
    quoteIntro: "Small jobs are often priced around whether everything can be completed efficiently in one visit. Give each tradesperson the same complete scope before comparing prices.",
    quoteTips: ["Put all the small jobs into the same request.", "Mention stairs, parking, communal access or awkward carrying routes.", "Say whether fittings, furniture or materials are already on site.", "Check whether labour, materials and any minimum call-out are included."],
    benefits: [
      { title: "Relevant experience", text: "Ask whether they regularly do the type of repair, fitting or assembly work you are posting." },
      { title: "Profile and feedback", text: "Review the tradesperson's profile and verified customer feedback once they respond." },
      { title: "A clear written scope", text: "For anything beyond a very small task, make sure the agreed jobs, materials and exclusions are clear." },
    ],
    faqIntro: "Quick answers to common questions before posting a local handyman job.",
    sharedFaqs: [
      { question: "What jobs does a handyman normally do?", answer: "Handymen commonly handle small household repairs, flat-pack assembly, shelves and wall mounting, door adjustments, minor maintenance, sealant work and other practical odd jobs. Skills vary, so describe the job clearly before hiring." },
      { question: "Can I post several small jobs together?", answer: "Yes. Include the full list in one description. It gives the tradesperson a better picture of the likely time and can be more efficient than arranging separate visits." },
      { question: "Do I have to accept a handyman quote?", answer: "No. Posting a job does not oblige you to hire anyone. Compare the people who respond and choose only if you are comfortable with the scope and price." },
    ],
  },
  plumber: {
    article: "a",
    breadcrumbLabel: "Plumber",
    workLabel: "plumbing work",
    serviceType: "Local plumber matching service",
    heroAction: "leaks, taps, toilets, bathroom plumbing, radiators and pipework",
    jobsIntro: "From small leaks to larger bathroom and pipework jobs, a plumber can assess the problem, explain the likely work and quote for the actual scope.",
    jobs: [
      { title: "Leaks & dripping taps", text: "Leaking pipes, dripping taps, faulty valves and other water leaks that need tracing, isolating and repairing." },
      { title: "Toilets, sinks & taps", text: "Repairs and replacements for toilets, basins, taps, wastes, traps and the plumbing that serves them." },
      { title: "Radiators & heating pipework", text: "Radiator changes, valves, leaks and water-side heating pipework. Gas work requires an appropriately qualified Gas Safe registered engineer." },
      { title: "Bathroom plumbing", text: "Connecting or replacing baths, showers, toilets and basins, plus associated pipework and repairs." },
      { title: "Kitchen & appliance plumbing", text: "Kitchen sinks, taps and suitable appliance connections, including nearby water and waste alterations." },
      { title: "Burst pipes & urgent repairs", text: "Urgent plumbing faults such as burst or badly leaking pipes where prompt isolation and repair are needed." },
    ],
    costHeading: "How much does a plumber cost?",
    costIntro: "Plumbing prices vary with urgency, materials, access and whether the work is hourly, daily or fixed-price. Broad UK guide ranges can help set expectations:",
    prices: [
      { value: "£35–£55", label: "broad standard hourly guide range" },
      { value: "£200–£350", label: "broad standard day-rate guide range" },
    ],
    sourceNote: "Indicative UK guidance only. Emergency, out-of-hours and material-heavy jobs can cost more, so compare quotes for the same scope.",
    quoteHeading: "Give plumbers enough detail to assess the same problem",
    quoteIntro: "Explain what is happening, where it is, how urgent it is and anything you know about isolation, property access or materials.",
    quoteTips: ["Describe the leak, fault or installation as clearly as you can.", "Mention whether water can be isolated and whether the issue is active.", "Say if sanitaryware, taps or other fittings have already been purchased.", "Ask whether labour, materials, VAT and any call-out are included."],
    benefits: [
      { title: "Relevant plumbing experience", text: "Ask whether they regularly handle your type of job, from leak diagnosis to bathroom or pipework work." },
      { title: "Appropriate qualifications", text: "Review qualifications shown on the profile. Gas work must be carried out by a suitably qualified Gas Safe registered engineer." },
      { title: "A clear written quote", text: "Confirm labour, materials, call-out charges, exclusions and the proposed scope before larger work begins." },
    ],
    faqIntro: "Quick answers to common questions before posting a local plumbing job.",
    sharedFaqs: [
      { question: "Can a plumber repair a leaking pipe or dripping tap?", answer: "Yes. Leaks, dripping taps, faulty valves, toilet problems and pipe repairs are common plumbing jobs. Give as much detail as possible about where the problem appears and whether water can be isolated." },
      { question: "Do I need a Gas Safe engineer for gas work?", answer: "Yes. Gas businesses and engineers must be on the Gas Safe Register to carry out gas work, and the engineer should be qualified for the specific work required." },
      { question: "Do I have to accept a plumbing quote?", answer: "No. Posting a job does not oblige you to hire anyone. Compare the responses and proceed only if you are comfortable with the plumber, proposed work and price." },
    ],
  },
  electrician: {
    article: "an",
    breadcrumbLabel: "Electrician",
    workLabel: "electrical work",
    serviceType: "Local electrician matching service",
    heroAction: "fault finding, lighting, sockets, consumer-unit work and electrical installations",
    jobsIntro: "Electrical work should be described precisely so the electrician can understand whether the request is a repair, investigation, alteration, inspection or new installation.",
    jobs: [
      { title: "Fault finding & tripping", text: "Investigation of circuits that trip, lose power or show other signs of an electrical fault." },
      { title: "Sockets & switches", text: "Replacement, repair or suitable additions to sockets, switches and related accessories." },
      { title: "Lighting", text: "Light fittings, switches, interior and exterior lighting, plus investigation of lighting faults." },
      { title: "Consumer units & circuits", text: "Assessment and suitable work involving consumer units, circuit protection and existing circuits." },
      { title: "Electrical inspections", text: "Inspection and testing where an electrical condition report or other appropriate assessment is required." },
      { title: "New installations & alterations", text: "Electrical work associated with extensions, refurbishments, kitchens, outbuildings and other planned projects." },
    ],
    costHeading: "How much does an electrician cost?",
    costIntro: "Electrical prices depend on diagnosis time, certification, materials, access and the scale of the installation. Use guide prices only as context and compare the actual scope:",
    prices: [
      { value: "Job-specific", label: "faults and small installations vary by scope" },
      { value: "Quote-based", label: "larger work should be compared like for like" },
    ],
    sourceNote: "Electrical work can vary substantially in complexity. Ask each electrician to state what testing, labour, materials and certification are included.",
    quoteHeading: "Describe the symptoms, not a guessed electrical diagnosis",
    quoteIntro: "A factual description of what happens and which rooms or circuits are affected is more useful than opening equipment or trying to identify the fault yourself.",
    quoteTips: ["Describe tripping, loss of power, flickering, heat, smells or other symptoms.", "Say which rooms, circuits or fittings appear affected.", "Share relevant inspection or remedial-report information if you already have it.", "Ask what testing, certification, labour and materials are included."],
    benefits: [
      { title: "Appropriate competence", text: "Check the electrician's relevant registrations or qualifications for the type of work you need." },
      { title: "Testing and certification", text: "For work that requires testing or certification, confirm what documentation will be provided." },
      { title: "A defined electrical scope", text: "Make sure fault finding, remedial work, materials and any making-good are clearly separated in the quote." },
    ],
    faqIntro: "Practical answers before posting a local electrical job.",
    sharedFaqs: [
      { question: "What information should I give an electrician?", answer: "Describe the symptoms, which rooms or circuits are affected, when the problem started and any recent electrical work. Do not remove covers or investigate live parts yourself." },
      { question: "Can I post remedial work from an electrical report?", answer: "Yes. State that the work follows an existing report and share the relevant observations or codes so electricians can understand the same scope." },
      { question: "Do I have to hire an electrician who responds?", answer: "No. Compare profiles, relevant experience and the proposed scope, then decide only if one of the options is right for you." },
    ],
  },
  roofer: {
    article: "a",
    breadcrumbLabel: "Roofer",
    workLabel: "roofing work",
    serviceType: "Local roofer matching service",
    heroAction: "roof leaks, damaged tiles or slates, flat roofing, gutters and replacement roof work",
    jobsIntro: "Roofing jobs range from localised repairs to complete replacements. The roof type, access and any planning constraints should be clear before quotes are compared.",
    jobs: [
      { title: "Roof leak repairs", text: "Investigation and repair of leaks around roof coverings, flashings, valleys, penetrations and other vulnerable details." },
      { title: "Tiles & slates", text: "Replacement or repair of damaged, slipped or missing tiles and slates where appropriate." },
      { title: "Flat roofing", text: "Repairs, overlays or replacement systems for suitable flat roofs, extensions, garages and outbuildings." },
      { title: "Chimneys & flashing", text: "Repairs around chimney stacks, leadwork, flashings and associated roof junctions." },
      { title: "Gutters & roofline", text: "Guttering, downpipes, fascias, soffits and roof-edge problems that affect water management." },
      { title: "Roof replacement", text: "Larger re-roofing projects where the covering, underlay, battens or other elements need substantial renewal." },
    ],
    costHeading: "How much does roofing work cost?",
    costIntro: "Roofing prices are highly dependent on the roof area, material, access, scaffolding and whether the job is a repair or replacement. A site-specific quote is more useful than a city-wide average:",
    prices: [
      { value: "Quote-based", label: "repairs depend on defect and access" },
      { value: "Project-based", label: "re-roofing depends on area and materials" },
    ],
    sourceNote: "Ask roofers to separate access or scaffolding, labour, materials, waste removal and any provisional repair items so quotes are comparable.",
    quoteHeading: "Show roofers exactly which part of the building is affected",
    quoteIntro: "Photos from a safe position, the roof type and details about access can help responders understand the likely scope before arranging a visit.",
    quoteTips: ["Describe where the leak or damage appears inside and outside the property.", "Mention roof type, extension roofs, valleys, chimneys and shared roof lines.", "Explain scaffold, front, side and rear access.", "Check whether access, materials and waste removal are included in each quote."],
    benefits: [
      { title: "Relevant roof-system experience", text: "Ask whether the roofer regularly works with your type of pitched, flat, tiled or slated roof." },
      { title: "Access and safety plan", text: "Understand what access equipment or scaffolding is included and how the work area will be managed." },
      { title: "A clear repair or replacement scope", text: "Make sure quotes distinguish the visible repair from any wider renewal that is being recommended." },
    ],
    faqIntro: "Useful answers before posting a local roofing job.",
    sharedFaqs: [
      { question: "What should I include in a roofing request?", answer: "Describe where the problem appears, the roof type if known, any recent storm or leak history, safe-to-take photos and the access available around the building." },
      { question: "Should I compare roofing quotes only on price?", answer: "No. Compare the proposed repair, materials, access or scaffolding, waste removal, warranties where offered and what happens if additional defects are uncovered." },
      { question: "Do I have to accept a roofing quote?", answer: "No. Posting the job does not oblige you to hire. Compare the proposed scope and proceed only if an option suits the property and your budget." },
    ],
  },
  "painter-decorator": {
    article: "a",
    breadcrumbLabel: "Painter & Decorator",
    workLabel: "painting and decorating work",
    serviceType: "Painter and decorator matching service",
    heroAction: "interior painting, exterior decorating, wallpapering and preparation work",
    jobsIntro: "Good decorating depends as much on preparation as the final coat. Describe the existing surfaces, the finish you want and whether the property will be occupied during the work.",
    jobs: [
      { title: "Interior painting", text: "Walls, ceilings, woodwork and other interior surfaces prepared and decorated to the agreed finish." },
      { title: "Exterior decorating", text: "Suitable preparation and coating of exterior masonry, timber and other paintable surfaces." },
      { title: "Wallpapering", text: "Wallpaper removal, preparation and hanging where the wall condition and chosen covering are suitable." },
      { title: "Woodwork & trim", text: "Doors, frames, skirting, architraves and other interior or exterior painted woodwork." },
      { title: "Rental & sale refreshes", text: "Planned refreshes where several rooms need preparing and redecorating before a tenancy, sale or move." },
      { title: "Preparation & making good", text: "Filling, sanding and minor surface preparation needed before the decorative finish can be applied." },
    ],
    costHeading: "How much does painting and decorating cost?",
    costIntro: "Decorating prices depend on preparation, room size, access, number of coats, products and whether the property is occupied. Compare the full preparation and finish rather than only the total:",
    prices: [
      { value: "Quote-based", label: "rooms differ greatly in preparation" },
      { value: "Scope matters", label: "materials and finish should be explicit" },
    ],
    sourceNote: "Ask whether preparation, paint or wallpaper materials, protection, access equipment and making-good are included before comparing prices.",
    quoteHeading: "Preparation should be part of the decorating quote",
    quoteIntro: "Two quotes can look very different if one includes proper preparation and another assumes the surfaces are ready to paint.",
    quoteTips: ["Describe peeling paint, staining, cracks, damaged plaster or wallpaper removal.", "Say whether the property is empty, furnished or occupied.", "Specify which surfaces, rooms and woodwork are included.", "Ask which materials, coats and preparation are included."],
    benefits: [
      { title: "Preparation detail", text: "Look for a quote that explains how surfaces will be repaired, cleaned, sanded or primed before finishing." },
      { title: "Relevant finish experience", text: "Ask about experience with the type of paint, wallpaper, exterior surface or character detail involved." },
      { title: "A room-by-room scope", text: "Confirm exactly which walls, ceilings, woodwork and exterior elements are included in the price." },
    ],
    faqIntro: "Useful answers before posting a local painting and decorating job.",
    sharedFaqs: [
      { question: "What should I include in a decorating request?", answer: "List the rooms or exterior surfaces, current condition, preparation needed, desired finish and whether the property will be occupied during the work." },
      { question: "Does preparation affect the price?", answer: "Yes. Filling, sanding, wallpaper removal, stain treatment, damaged plaster and difficult access can add considerably more labour than applying the final coats." },
      { question: "Do I have to accept a decorator's quote?", answer: "No. Compare preparation, materials, finish and timing as well as price, then proceed only if the scope is right for you." },
    ],
  },
  "flooring-fitter": {
    article: "a",
    breadcrumbLabel: "Flooring Fitter",
    workLabel: "flooring work",
    serviceType: "Flooring fitter matching service",
    heroAction: "laminate, vinyl, wood and other fitted flooring plus preparation and uplift",
    jobsIntro: "Floor fitting depends on the new finish, the condition of the existing floor and how materials reach the rooms. Make uplift and preparation explicit before comparing installation prices.",
    jobs: [
      { title: "Laminate flooring", text: "Laminate installation with suitable underlay, trims and preparation where the subfloor is appropriate." },
      { title: "Vinyl & LVT", text: "Vinyl and luxury vinyl tile fitting where the base is sufficiently smooth, stable and prepared." },
      { title: "Wood flooring", text: "Suitable engineered or other wood flooring systems installed to the agreed specification." },
      { title: "Carpet fitting", text: "Carpet, underlay, gripper and threshold work where included in the fitter's service." },
      { title: "Uplift & disposal", text: "Removal of existing coverings and underlay where agreed, with disposal clearly stated in the quote." },
      { title: "Subfloor preparation", text: "Levelling, repairs or other preparation needed before the selected floor finish can be installed correctly." },
    ],
    costHeading: "How much does floor fitting cost?",
    costIntro: "Flooring prices depend on the material, area, room shape, uplift, subfloor preparation and access. Compare the installation scope rather than relying on one headline rate:",
    prices: [
      { value: "m² + prep", label: "installation often depends on floor area" },
      { value: "Job-specific", label: "uplift and subfloor work vary widely" },
    ],
    sourceNote: "Make sure each quote states whether uplift, disposal, underlay, trims, door adjustments, levelling and materials are included.",
    quoteHeading: "Separate the new floor from the preparation underneath it",
    quoteIntro: "The same flooring can have a very different installation cost depending on what needs to happen before the first plank, tile or roll is fitted.",
    quoteTips: ["Give room dimensions and the flooring product if already chosen.", "State the existing covering and whether it needs uplift and disposal.", "Mention uneven areas, extensions or known subfloor issues.", "Explain stairs, lifts, parking and the material delivery route."],
    benefits: [
      { title: "Experience with your floor type", text: "Ask whether the fitter regularly installs the material and system you have selected." },
      { title: "Subfloor assessment", text: "Make sure preparation requirements are identified rather than hidden inside a vague installation price." },
      { title: "Complete fitting scope", text: "Check underlay, trims, thresholds, door adjustments, uplift and disposal before comparing totals." },
    ],
    faqIntro: "Practical answers before posting a local flooring job.",
    sharedFaqs: [
      { question: "What information does a flooring fitter need?", answer: "Provide the room sizes, chosen flooring if known, existing covering, subfloor information, furniture situation and whether uplift, disposal or preparation is required." },
      { question: "Can subfloor preparation change the price?", answer: "Yes. Levelling, repairs, moisture issues and removal of old coverings can add significant work before the new floor can be fitted." },
      { question: "Do I have to accept a flooring quote?", answer: "No. Compare the material assumptions, preparation and complete fitting scope before deciding whether to hire." },
    ],
  },
  builder: {
    article: "a",
    breadcrumbLabel: "Builder",
    workLabel: "building work",
    serviceType: "Local builder matching service",
    heroAction: "renovations, alterations, extensions, structural work and general building projects",
    jobsIntro: "Building projects vary enormously in scope. Describe the proposed outcome, property constraints, drawings or permissions already obtained and who is supplying materials or specialist trades.",
    jobs: [
      { title: "Renovations & refurbishments", text: "Planned renovation work involving multiple building elements, rooms or stages." },
      { title: "Extensions", text: "House extensions and associated structural, envelope and finishing work where the project has an appropriate design and permissions." },
      { title: "Structural alterations", text: "Openings, structural changes and related building work based on the necessary design and professional input." },
      { title: "Brickwork & masonry", text: "Repairs, rebuilding and new masonry elements appropriate to the property and project." },
      { title: "Conversions", text: "Loft, garage or internal conversion work where planning, building regulations and design requirements have been considered." },
      { title: "General building repairs", text: "Larger repair work that goes beyond a single specialist trade and needs coordination of several tasks." },
    ],
    costHeading: "How much does building work cost?",
    costIntro: "Building costs depend on design, structure, specification, access, professional fees, permissions, materials and the number of trades involved. A detailed project quote is more useful than a generic city average:",
    prices: [
      { value: "Project-based", label: "scope and specification drive the price" },
      { value: "Compare detail", label: "allowances and exclusions should be explicit" },
    ],
    sourceNote: "For larger work, compare the same drawings, specification and assumptions. Confirm provisional sums, exclusions, waste, access and payment stages before choosing.",
    quoteHeading: "A building quote is only useful when the scope is defined",
    quoteIntro: "The larger the project, the more important it is that every builder is pricing the same drawings, specification, access and responsibilities.",
    quoteTips: ["Share drawings, structural information and planning status where available.", "State which materials, finishes and specialist trades are included.", "Describe access for deliveries, skips, scaffolding and storage.", "Ask for exclusions, provisional allowances and payment stages in writing."],
    benefits: [
      { title: "Comparable project experience", text: "Ask for experience with projects similar in size, construction and complexity to yours." },
      { title: "Clear responsibilities", text: "Understand who coordinates subcontractors, inspections, materials and day-to-day site decisions." },
      { title: "A detailed written quote", text: "For larger work, the specification, allowances, exclusions, timing and payment stages should be clear before work starts." },
    ],
    faqIntro: "Practical answers before posting a local building project.",
    sharedFaqs: [
      { question: "What should I give builders before asking for a quote?", answer: "Provide the clearest scope you have, including drawings or measurements, structural information, planning status, desired specification, access constraints and what you expect the builder to supply." },
      { question: "Should I compare building quotes only on the final total?", answer: "No. Compare the specification, provisional sums, exclusions, materials, waste, access, programme and payment stages so you know whether the quotes cover the same project." },
      { question: "Do I have to accept a builder's quote?", answer: "No. Posting a project does not oblige you to hire. Compare relevant experience and the full written scope before deciding." },
    ],
  },
  gardener: {
    article: "a",
    breadcrumbLabel: "Gardener",
    workLabel: "gardening work",
    serviceType: "Local gardener matching service",
    heroAction: "garden maintenance, hedge work, planting, clearances and landscaping",
    jobsIntro: "Garden jobs range from regular maintenance to heavy clearance and landscaping. Access, waste removal and any protected trees should be described before prices are compared.",
    jobs: [
      { title: "Garden maintenance", text: "Regular or one-off mowing, weeding, edging, pruning and general garden care." },
      { title: "Hedges & shrubs", text: "Hedge cutting, shrub pruning and reduction work where the plants and access are suitable." },
      { title: "Garden clearances", text: "Overgrown-garden tidy-ups and removal of agreed green waste and unwanted vegetation." },
      { title: "Planting", text: "Planting beds, shrubs and other garden plants according to the agreed design or maintenance plan." },
      { title: "Fencing & simple outdoor work", text: "Garden fencing and related outdoor jobs where they fall within the tradesperson's service." },
      { title: "Landscaping", text: "Larger garden changes involving preparation, levels, planting, paths or other agreed landscape elements." },
    ],
    costHeading: "How much does gardening work cost?",
    costIntro: "Gardening prices vary with the size of the garden, machinery, access, waste removal and whether the job is routine maintenance or heavier landscaping:",
    prices: [
      { value: "Job-specific", label: "maintenance depends on time and garden size" },
      { value: "Project-based", label: "clearance and landscaping vary by scope" },
    ],
    sourceNote: "Ask whether green-waste removal, machinery, materials and disposal are included. Tree work may also require protection checks or a specialist arborist.",
    quoteHeading: "Access and green-waste removal can change a garden quote",
    quoteIntro: "A garden that looks similar in photos can be a very different job if machinery cannot reach it or all cuttings must be carried through the house.",
    quoteTips: ["Describe garden size, current condition and the result you want.", "Give gate widths and say whether access is through the house or a shared route.", "State whether green waste should be removed.", "Check protected-tree status before significant pruning or removal."],
    benefits: [
      { title: "Experience with the actual task", text: "Routine maintenance, hedge work, tree work and landscaping require different equipment and experience." },
      { title: "Waste and access plan", text: "Confirm how machinery gets in and how cuttings, soil or other waste will leave the property." },
      { title: "Tree-protection awareness", text: "For significant tree work, make sure protection and permission requirements are checked before work begins." },
    ],
    faqIntro: "Useful answers before posting a local garden job.",
    sharedFaqs: [
      { question: "What should I include in a gardening request?", answer: "Describe the garden size and condition, the work you want, access for machinery, whether waste should be removed and any trees that may be protected." },
      { question: "Can access affect a gardening quote?", answer: "Yes. Narrow gates, steps, shared passages or a route through the house can limit machinery and add time to removing green waste." },
      { question: "Do I have to accept a gardener's quote?", answer: "No. Compare the work included, waste removal, materials and timing before deciding whether to hire." },
    ],
  },
};

function possessive(city: string) {
  return city.endsWith("s") ? `${city}'` : `${city}'s`;
}

function areaPhrase(areas: ReadonlyArray<string>) {
  const selected = areas.slice(0, 6);
  if (selected.length <= 1) return selected[0] ?? "the local area";
  return `${selected.slice(0, -1).join(", ")} and ${selected[selected.length - 1]}`;
}

export function buildLocalCityPageContent(
  trade: LocalTradeKey,
  city: LocalCityKey,
): LocalCityPageContent {
  const location = LOCAL_LOCATIONS[city];
  const tradeInfo = LOCAL_TRADES[trade];
  const template = TRADE_TEMPLATES[trade];
  const profile = getLocalAreaProfile(city);
  const localTradeContent = profile?.tradeContent[trade];

  if (!profile || !localTradeContent) {
    throw new Error(`Local research profile is incomplete for ${trade}/${city}`);
  }

  const canonicalPath = localPagePath(trade, city);
  const title = `${tradeInfo.singular} ${location.name} | Find Local ${tradeInfo.footerLabel} Near You`;
  const specialists = PUBLISHED_LOCAL_PAGES
    .filter((page) => page.city === city && page.trade !== trade)
    .map((page) => ({
      href: localPagePath(page.trade, page.city),
      label: `Find ${LOCAL_TRADES[page.trade].footerLabel.toLowerCase()} in ${location.name}`,
    }));

  const localQuestion = `What local details should I include for ${tradeInfo.singular.toLowerCase()} work in ${location.name}?`;
  const localAnswer = `${localTradeContent.checklist[0]} ${localTradeContent.checklist[1]} These details help local ${tradeInfo.footerLabel.toLowerCase()} understand the actual property and access rather than pricing from the place name alone.`;

  return {
    trade,
    tradeName: tradeInfo.singular,
    tradePlural: tradeInfo.footerLabel,
    breadcrumbLabel: template.breadcrumbLabel,
    article: template.article,
    city: location.name,
    region: location.region,
    locationKey: city,
    canonicalPath,
    title,
    webPageDescription: `Find local ${tradeInfo.footerLabel.toLowerCase()} in ${location.name} for ${template.heroAction}. Post the job once, compare interested local tradespeople, profiles, verified reviews and quotes before choosing.`,
    serviceType: template.serviceType,
    heroCopy: `Need help with ${template.heroAction} in ${location.name}? Describe the job once and suitable local ${tradeInfo.footerLabel.toLowerCase()} can express interest. You can then compare who responds, review their profiles and decide who you want to speak to or hire.`,
    workLabel: template.workLabel,
    localContextHeading: `What ${possessive(location.name)} property context can mean for ${template.workLabel}`,
    localContextParagraphs: [
      profile.housingSummary,
      `${localTradeContent.intro} When you post the job, include the exact ${location.name} postcode plus the property and access details that are relevant to the work rather than assuming every home in the area has the same layout.`,
    ],
    areaIntro: `${location.name} includes ${areaPhrase(profile.areas)} among the local areas covered by this guide. Availability varies by individual tradesperson, so use the exact job postcode to keep the request relevant to the part of ${location.name} where the work actually is.`,
    areaNoteHeading: `Give ${location.name} tradespeople the address-specific details that matter`,
    areaNote: `${localTradeContent.checklistIntro} Property type, access, local planning constraints and who is arranging the work can all change what a tradesperson needs to allow for before responding.`,
    jobsHeading: `What can ${tradeInfo.footerLabel.toLowerCase()} in ${location.name} help with?`,
    jobsIntro: template.jobsIntro,
    jobs: template.jobs,
    costHeading: template.costHeading,
    costIntro: template.costIntro,
    prices: template.prices,
    sourceNote: template.sourceNote,
    quoteHeading: template.quoteHeading,
    quoteIntro: template.quoteIntro,
    quoteTips: template.quoteTips,
    benefits: template.benefits,
    specialists,
    faqIntro: `${template.faqIntro} The local property and access context can be different across ${location.name}, so include the exact postcode and useful address-specific details.`,
    faqs: [
      {
        question: `How do I find ${template.article} ${tradeInfo.singular.toLowerCase()} near me in ${location.name}?`,
        answer: `Post the job with the ${location.name} postcode and explain what needs doing. Relevant local ${tradeInfo.footerLabel.toLowerCase()} can review it, and up to three who are interested can get in touch. You can then compare profiles, verified reviews and quotes before deciding whether to hire.`,
      },
      { question: localQuestion, answer: localAnswer },
      ...template.sharedFaqs,
    ],
  };
}
