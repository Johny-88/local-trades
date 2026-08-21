import type { LocalServicePageContent } from "./localServiceContent";
import type { ServiceSlug } from "./serviceIframe";

const HOUSE = ["M4 20h16", "M6 20V9l6-5 6 5v11", "M9 14h6"] as const;
const GRID = ["M4 4h7v7H4z", "M13 4h7v7h-7z", "M4 13h7v7H4z", "M13 13h7v7h-7z"] as const;
const CLOCK = ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18", "M12 7v5l3 2"] as const;
const SHIELD = ["M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z", "M9 12l2 2 4-4"] as const;
const DOC = ["M6 3h9l3 3v15H6z", "M15 3v4h4", "M9 11h6", "M9 15h6"] as const;
const WATER = ["M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"] as const;
const LEAF = ["M19 4C10 4 5 9 5 17c8 0 13-5 14-13Z", "M5 19c3-5 7-8 12-11"] as const;
const LOCK = ["M7 11V8a5 5 0 0 1 10 0v3", "M5 11h14v10H5z", "M12 15v2"] as const;
const BUG = ["M12 7a5 5 0 0 1 5 5v5a5 5 0 0 1-10 0v-5a5 5 0 0 1 5-5z", "M12 7V3", "M7 10 3 7", "M17 10l4-3", "M7 16H3", "M17 16h4"] as const;
const TREE = ["M12 20V11", "M12 12c-6 0-8-4-8-7 5 0 8 2 8 5", "M12 11c0-5 3-8 8-8 0 5-3 8-8 8", "M8 21h8"] as const;
const WINDOW = ["M4 4h16v16H4z", "M12 4v16", "M4 12h16"] as const;
const TOOLS = ["M14 6l4 4", "M5 19l8-8", "M13 5a5 5 0 0 0 6 6l-3 3-6-6z"] as const;
const CHECK = ["M20 6 9 17l-5-5"] as const;
const STAR = ["M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"] as const;
const BOX = ["M4 7h16v13H4z", "M4 7l8 5 8-5", "M12 12v8"] as const;

const MANCHESTER_AREAS = [
  "Didsbury",
  "Chorlton",
  "Withington",
  "Fallowfield",
  "Rusholme",
  "Levenshulme",
  "Gorton",
  "Ancoats",
] as const;

type ManchesterProfileInput = {
  serviceSlug: ServiceSlug;
  serviceName: string;
  servicePlural: string;
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  jobs: LocalServicePageContent["jobs"];
  costs: LocalServicePageContent["costs"];
  localContext: LocalServicePageContent["localContext"];
  areas: Omit<LocalServicePageContent["areas"], "title" | "items">;
  how: LocalServicePageContent["how"];
  choose: LocalServicePageContent["choose"];
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

function makeManchesterProfile(input: ManchesterProfileInput): LocalServicePageContent {
  return {
    serviceSlug: input.serviceSlug,
    serviceName: input.serviceName,
    servicePlural: input.servicePlural,
    locationSlug: "manchester",
    locationName: "Manchester",
    region: "Greater Manchester",
    postcodeExample: "M20 2WD",
    hero: {
      eyebrow: `${input.servicePlural} Manchester`,
      title: `Find ${input.servicePlural.toLowerCase()} in Manchester`,
      copy: input.heroCopy,
      points: ["Free for homeowners", "Up to 3 local responses", "No obligation to hire"],
    },
    answer: input.answer,
    jobs: input.jobs,
    costs: input.costs,
    localContext: input.localContext,
    areas: {
      title: `${input.servicePlural} covering Manchester`,
      items: MANCHESTER_AREAS,
      ...input.areas,
    },
    how: input.how,
    choose: input.choose,
    faq: input.faq,
    cta: input.cta,
  };
}

const removalCompaniesManchester = makeManchesterProfile({
  serviceSlug: "removal-companies",
  serviceName: "Removal Company",
  servicePlural: "Removal Companies",
  heroCopy: "Moving from a terrace, flat, semi-detached house or city-centre apartment? Describe the move once and compare removal companies that cover Manchester, then check reviews and quotes before deciding who to hire.",
  answer: {
    title: "Looking for a removal company near you in Manchester?",
    copy: "Enter the collection postcode, destination and moving date, then describe the property, access and amount being moved. Suitable Manchester removal companies can decide whether the route, vehicle and crew requirements fit their availability.",
  },
  jobs: [
    { title: "House removals", text: "Full household moves with loading, transport and unloading between Manchester properties or to destinations further away.", paths: HOUSE },
    { title: "Flat & apartment moves", text: "Moves where lifts, stairs, concierge rules, loading bays and carrying distance can change the time and crew required.", paths: GRID },
    { title: "Man with a van", text: "Smaller moves, furniture collections and single-room jobs that need transport without a full removal crew.", paths: BOX },
    { title: "Packing services", text: "Packing and unpacking help for household contents, fragile items and belongings that need preparation before transport.", paths: BOX },
    { title: "Storage & staged moves", text: "Temporary storage or multi-stage moves where completion dates, tenancy dates or access do not line up exactly.", paths: DOC },
    { title: "Specialist removals", text: "Moves involving pianos, unusually heavy items, delicate belongings or access that needs specialist equipment and planning.", paths: SHIELD },
  ],
  costs: {
    title: "How much do removals cost?",
    intro: "Removal prices depend on volume, distance, access, crew size and optional packing or storage. Current 2026 UK guidance gives these useful benchmarks for moves of up to around 50 miles:",
    prices: [
      { value: "£320–£420", label: "1-bedroom move" },
      { value: "£520–£640", label: "2-bedroom move" },
      { value: "£800–£950", label: "3-bedroom move" },
      { value: "£1,000–£1,150", label: "4-bedroom move" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Actual Manchester quotes can vary with traffic, parking, floor level, lift access, distance, packing and waiting time.",
    quoteTitle: "Make Manchester removal quotes comparable",
    quoteIntro: "Give every company the same route and access information so a low headline figure is not hiding extra carrying, parking or waiting costs.",
    quoteTips: [
      "Give collection and destination postcodes plus the expected moving date.",
      "Describe stairs, lifts, loading restrictions and carrying distance from the property.",
      "Estimate the amount of furniture, boxes and unusually heavy items.",
      "Say whether packing, dismantling, storage or disposal is required.",
    ],
  },
  localContext: {
    eyebrow: "Manchester move planning",
    title: "Property type and parking can change the moving-day plan",
    intro: "Manchester has a sharp mix of houses and high-density flats, while controlled on-street parking can affect where a removal vehicle can legally wait. Both are worth checking before the quote is finalised.",
    items: [
      {
        title: "Manchester's housing mix changes significantly by area",
        text: "Manchester City Council's Census 2021 housing summary says 32% of households are in semi-detached homes, around 28% in terraced homes and around 28% in purpose-built flats. Ward data shows purpose-built flats dominate in places such as Deansgate, Piccadilly, Hulme and Ancoats & Beswick, while terraces are particularly common in Moss Side and Levenshulme. That changes lifts, stairs, carrying distance and vehicle access from one move to the next.",
        source: { label: "Manchester City Council — Census 2021 housing summary", url: "https://www.manchester.gov.uk/the-council-and-democracy/statistics-and-intelligence/census-2021/census-2021-housing-summary" },
      },
      {
        title: "A parking suspension needs advance notice",
        text: "Manchester City Council says applications to suspend on-street bays or obtain a yellow-line dispensation require at least five working days' notice. Domestic removals are an accepted reason for a bay suspension, and the current charge is £30 per day per bay. If close loading access matters, arrange it early rather than assuming the van can stop outside.",
        source: { label: "Manchester City Council — parking suspensions and dispensations", url: "https://www.manchester.gov.uk/parking/tickets-and-fines/parking-restrictions/suspending-parking-bays-and-getting-permission-to-park-on-yellow-lines" },
      },
    ],
  },
  areas: {
    intro: "Removal firms may cover Manchester by postcode, route and moving date. Example areas include:",
    sideTitle: "Give the exact collection and delivery addresses",
    sideCopy: "A move from a city-centre apartment can have a very different loading plan from a house in Didsbury or Levenshulme. The real postcodes, floor levels and access information help companies estimate crew and vehicle time.",
    noteLead: "Parking access is part of the move, not an afterthought.",
    noteText: "If a suspension or dispensation is needed, Manchester currently asks for at least five working days' notice.",
  },
  how: {
    title: "Post the move once, then compare interested Manchester companies",
    intro: "A clear route, inventory and access description lets suitable companies decide quickly whether the move fits them.",
    steps: [
      { title: "Describe the move", text: "Add both postcodes, date, property type, floor level, access and any packing or storage requirements." },
      { title: "Hear from interested companies", text: "Up to three suitable Manchester removal professionals can respond about the job." },
      { title: "Compare the full scope", text: "Check verified reviews and compare labour, vehicle, packing, waiting and access assumptions before hiring." },
    ],
  },
  choose: {
    title: "What should you check before hiring a removal company?",
    intro: "The most useful quote is the one that reflects the real route and access, not simply the lowest initial number.",
    benefits: [
      { title: "Compare the same inventory", text: "Make sure every company is pricing the same amount of furniture, boxes and specialist items.", paths: BOX },
      { title: "Agree parking and access", text: "Confirm who is responsible for suspensions, loading restrictions, lifts and any long carry from the vehicle.", paths: CHECK },
      { title: "Read verified feedback", text: "Use genuine verified customer reviews alongside the quote and practical answers before deciding who to hire.", paths: STAR },
    ],
  },
  faq: [
    ["How much does a removal company cost in Manchester?", "There is no single Manchester price because property size, distance and access change the job. MyJobQuote's current UK guide gives roughly £320–£420 for a 1-bedroom move up to 50 miles, £520–£640 for 2 bedrooms and £800–£950 for 3 bedrooms."],
    ["Can I find a man with a van in Manchester?", "Yes. Smaller transport jobs and man-with-a-van work sit within the Removal Companies category, alongside full moves, packing and storage."],
    ["Can I reserve parking for a removal van in Manchester?", "Manchester City Council accepts domestic removals as a reason to suspend an on-street pay-and-display bay. It currently requires a minimum of five working days' notice and charges £30 per day per bay."],
    ["Why does the property type matter?", "Manchester includes large numbers of terraces, semis and purpose-built flats. Lifts, stairs, carrying distance and loading access can change the crew time even when two homes have a similar number of bedrooms."],
    ["Do I have to hire a company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare removal companies in Manchester?", copy: "Describe the route and property access once, then compare interested Manchester removal companies, verified reviews and quotes.", buttonLabel: "Get Manchester removal quotes" },
});

const cleanersManchester = makeManchesterProfile({
  serviceSlug: "cleaners",
  serviceName: "Cleaner",
  servicePlural: "Cleaners",
  heroCopy: "Need regular domestic cleaning, an end-of-tenancy clean, a deep clean or specialist help? Describe the Manchester property and required standard once, then compare cleaners interested in the job.",
  answer: {
    title: "Looking for a cleaner near you in Manchester?",
    copy: "Enter the postcode, property size and the type of clean you need. Include any extras such as ovens, carpets or windows so cleaners covering that part of Manchester can judge the time, products and equipment required.",
  },
  jobs: [
    { title: "Regular domestic cleaning", text: "Recurring cleaning for kitchens, bathrooms, bedrooms and living areas at an agreed frequency.", paths: HOUSE },
    { title: "Deep cleaning", text: "One-off detailed cleaning where a property needs more time than a standard maintenance visit.", paths: CHECK },
    { title: "End-of-tenancy cleaning", text: "Cleaning around a tenancy handover with the rooms, appliances and expected finish agreed in advance.", paths: DOC },
    { title: "Carpet & upholstery cleaning", text: "Specialist cleaning for carpets, rugs, sofas and other fabrics using suitable methods and equipment.", paths: WATER },
    { title: "Window cleaning", text: "Internal or external window cleaning where height, access and the number of panes affect the work.", paths: WINDOW },
    { title: "Office & commercial cleaning", text: "Recurring or one-off cleaning for smaller offices and premises, arranged around access and operating hours.", paths: GRID },
  ],
  costs: {
    title: "How much does cleaning cost?",
    intro: "Property size, frequency, condition and specialist extras all affect the price. Current 2026 UK guides provide these broad benchmarks:",
    prices: [
      { value: "£20–£40/hr", label: "Typical cleaner hourly rate" },
      { value: "£100–£350", label: "End-of-tenancy clean" },
      { value: "£140–£175", label: "2-bed carpet clean" },
      { value: "£210–£260", label: "3-bed semi carpet clean" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester quotes vary with property size, condition, parking, frequency, products and specialist equipment.",
    quoteTitle: "Define exactly what the clean includes",
    quoteIntro: "The phrase 'deep clean' can mean different things. List rooms and extras so each cleaner prices the same scope.",
    quoteTips: [
      "Give the number of bedrooms, bathrooms and main living spaces.",
      "Say whether the clean is recurring, one-off, moving-related or specialist.",
      "List ovens, carpets, upholstery, windows and heavy build-up separately.",
      "Confirm whether products and equipment are supplied by the cleaner.",
    ],
  },
  localContext: {
    eyebrow: "Manchester rental cleaning",
    title: "Manchester's rental market makes handover scope especially important",
    intro: "A large private-rented sector and active selective-licensing areas mean many cleaning jobs happen around managed rental properties. Be clear about who is instructing the work and what standard is expected.",
    items: [
      {
        title: "Private renting accounts for about a third of Manchester households",
        text: "Manchester City Council's Census 2021 housing summary records 32% of households as privately rented. For end-of-tenancy or landlord-instructed cleaning, that makes a written room-by-room scope useful: the cleaner should know whether the aim is routine presentation, a tenancy handover or cleaning after repairs.",
        source: { label: "Manchester City Council — Census 2021 housing summary", url: "https://www.manchester.gov.uk/the-council-and-democracy/statistics-and-intelligence/census-2021/census-2021-housing-summary" },
      },
      {
        title: "Selective licensing currently applies in several Manchester neighbourhoods",
        text: "Manchester's current selective-licensing directory includes designated areas in Rusholme, Levenshulme, Moss Side, Longsight, Gorton and other neighbourhoods. Licensing is primarily a landlord-management issue rather than a cleaning rule, but it is a useful reminder to establish whether a cleaning job is homeowner-, tenant- or landlord-instructed before agreeing access and handover expectations.",
        source: { label: "Manchester City Council — current selective licensing schemes", url: "https://www.manchester.gov.uk/online-directories/homes-and-property-directories/private-landlords-information-directories/selective-licensing-directories/areas-where-a-selective-licence-is-required/current-selective-licensing-schemes" },
      },
    ],
  },
  areas: {
    intro: "Cleaners can cover different parts of Manchester depending on travel time and recurring schedules. Example areas include:",
    sideTitle: "Tell the cleaner who will provide access",
    sideCopy: "For rental handovers, apartment buildings and recurring visits, keys, concierge arrangements, parking and the person approving the finished clean should be agreed before the visit.",
    noteLead: "Use a written checklist for one-off cleans.",
    noteText: "It prevents misunderstandings about ovens, cupboards, windows, carpets and other extras that are not always included in a standard clean.",
  },
  how: {
    title: "Describe the cleaning scope once, then compare Manchester cleaners",
    intro: "Room counts, condition and extras help cleaners estimate time more accurately.",
    steps: [
      { title: "List the rooms and tasks", text: "Add the postcode, property size, type of clean and any specialist extras." },
      { title: "Hear from suitable cleaners", text: "Up to three interested Manchester cleaning professionals can respond." },
      { title: "Compare scope and reviews", text: "Check verified feedback and compare hours, products, equipment and what is included before booking." },
    ],
  },
  choose: {
    title: "What should you check before hiring a cleaner?",
    intro: "A clear definition of the finished standard matters more than a vague promise of a certain number of hours.",
    benefits: [
      { title: "Agree the checklist", text: "Specify rooms, appliances, inside cupboards, windows and carpets where they form part of the job.", paths: DOC },
      { title: "Confirm products and equipment", text: "Ask whether the cleaner brings supplies and whether specialist surfaces need particular products.", paths: CHECK },
      { title: "Plan access and parking", text: "For apartments or managed rentals, arrange keys, entry and any parking restrictions before the visit.", paths: HOUSE },
    ],
  },
  faq: [
    ["How much does a cleaner cost in Manchester?", "Current UK guidance commonly puts general cleaning around £20–£40 per hour, while end-of-tenancy and specialist work varies with property size and condition. A Manchester quote should be based on the actual rooms and scope."],
    ["Can I book end-of-tenancy cleaning?", "Yes. Explain the property size, handover date and exactly which rooms, appliances, carpets or windows need cleaning."],
    ["Does selective licensing change which cleaner I can use?", "Selective licensing is a landlord-management scheme rather than a cleaner accreditation scheme. If a landlord or agent is arranging work in a licensed property, agree their required scope and access arrangements."],
    ["Should cleaning products be included in the quote?", "Ask explicitly. Some cleaners supply everything; others may expect certain products or equipment to be available at the property."],
    ["Do I have to hire a cleaner who responds?", "No. Compare the options and proceed only if one suits you."],
  ],
  cta: { title: "Ready to compare cleaners in Manchester?", copy: "Describe the property and cleaning checklist once, then compare interested Manchester cleaners and their quotes.", buttonLabel: "Get Manchester cleaning quotes" },
});

const tilersManchester = makeManchesterProfile({
  serviceSlug: "tilers",
  serviceName: "Tiler",
  servicePlural: "Tilers",
  heroCopy: "Planning bathroom tiles, a kitchen splashback, a tiled floor or repair work? Describe the Manchester property, tile type and existing surface once, then compare tilers suited to the job.",
  answer: {
    title: "Looking for a tiler near you in Manchester?",
    copy: "Enter the postcode, approximate square metres, tile material and what is currently on the wall or floor. Photos of the surface help Manchester tilers judge preparation, cutting and waterproofing requirements before they quote.",
  },
  jobs: [
    { title: "Bathroom tiling", text: "Wall and floor tiling around baths, showers and sanitaryware with preparation suited to wet areas.", paths: WATER },
    { title: "Kitchen tiling", text: "Splashbacks, wall tiles and tiled floors around units, sockets and worktops.", paths: GRID },
    { title: "Floor tiling", text: "Ceramic, porcelain or stone flooring over a stable and properly prepared substrate.", paths: GRID },
    { title: "Large-format tiles", text: "Setting out and cutting larger porcelain or stone tiles where flatness and handling are especially important.", paths: TOOLS },
    { title: "Regrouting & repairs", text: "Replacing damaged tiles, renewing failed grout or sealant and repairing smaller tiled areas.", paths: CHECK },
    { title: "External tiling", text: "Suitable exterior tiles and preparation for steps, patios or other areas exposed to weather and temperature changes.", paths: HOUSE },
  ],
  costs: {
    title: "How much does tiling cost?",
    intro: "Tile material, area, pattern and preparation have a major effect on price. Current 2026 UK guidance gives these useful benchmarks:",
    prices: [
      { value: "£400–£1,000", label: "Typical floor-tiling project" },
      { value: "~£700", label: "Average floor-tiling guide" },
      { value: "£500–£800", label: "Typical bathroom tiling" },
      { value: "£150–£200/day", label: "Typical tiler labour guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester quotes vary with tile choice, removal of old finishes, levelling, boarding, waterproofing, pattern and cutting.",
    quoteTitle: "Separate tile laying from surface preparation",
    quoteIntro: "A quote can look cheap if it assumes the wall or floor is already ready for tiles. Ask what preparation has actually been included.",
    quoteTips: [
      "Give the approximate square metres and tile dimensions.",
      "Say whether old tiles or flooring need removing.",
      "Mention uneven, damp or damaged surfaces before quoting.",
      "Agree trims, grout colour, sealant, pattern and waterproofing details.",
    ],
  },
  localContext: {
    eyebrow: "Manchester wet-area preparation",
    title: "Do not tile over a moisture problem without finding the cause",
    intro: "Bathrooms and kitchens create moisture, but staining can also come from leaks or penetrating damp. The underlying cause should be understood before a new finish hides it.",
    items: [
      {
        title: "Manchester's damp guidance stresses ventilation around bathing and showering",
        text: "Manchester City Council says condensation is made worse by poor ventilation, insulation and heating, and advises using extractor fans or opening windows during and after bathing or showering. For a bathroom tiling job, the tiler should know whether ventilation and wet-area preparation are already adequate rather than treating tiles alone as the moisture solution.",
        source: { label: "Manchester City Council — keep free from damp and mould", url: "https://www.manchester.gov.uk/homes-and-property/repairs-safety-and-maintenance/advice-for-problems-in-your-home/causes-and-types-of-dampness/keep-free-from-damp-and-mould" },
      },
      {
        title: "Bathroom alterations can also involve Building Regulations",
        text: "Manchester City Council lists bathrooms among home improvements that will probably need Building Regulation approval, depending on the work. Tiling itself is only one part of a refurbishment, so identify plumbing, ventilation, electrical or structural changes separately before work starts.",
        source: { label: "Manchester City Council — approval for building work and home improvements", url: "https://www.manchester.gov.uk/planning-and-regeneration/planning/approval-and-permission-for-building-work-and-home-improvements" },
      },
    ],
  },
  areas: {
    intro: "Tilers may cover Manchester by postcode and project size. Example areas include:",
    sideTitle: "Photos of the existing surface are valuable",
    sideCopy: "Show cracked plaster, old tiles, timber floors, uneven screed and any staining. Preparation can cost as much attention as laying the new finish.",
    noteLead: "Tiles are a finish, not a damp repair.",
    noteText: "If there is an active leak or persistent moisture source, address it before covering the surface with new tiles.",
  },
  how: {
    title: "Describe the tiling area once, then compare Manchester tilers",
    intro: "Tile size, substrate and preparation let suitable tilers judge the job properly.",
    steps: [
      { title: "Share the area and tiles", text: "Add the postcode, photos, dimensions, tile material and existing wall or floor finish." },
      { title: "Hear from interested tilers", text: "Up to three suitable Manchester tilers can respond." },
      { title: "Compare preparation and finish", text: "Check reviews and compare removal, levelling, waterproofing, laying, grout, trims and sealant." },
    ],
  },
  choose: {
    title: "What should you check before hiring a tiler?",
    intro: "Good tiling depends on preparation, layout and movement control as much as neat grout lines.",
    benefits: [
      { title: "Check the substrate", text: "Ask how the existing wall or floor will be made flat, stable and suitable for the chosen tile.", paths: GRID },
      { title: "Agree wet-area preparation", text: "For showers and other wet zones, clarify waterproofing and sealing before tiles are installed.", paths: WATER },
      { title: "Confirm the visual details", text: "Set out grout width, pattern, trims, cuts and alignment before the first tile is fixed.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does tiling cost in Manchester?", "MyJobQuote's current UK guidance puts many floor-tiling projects around £400–£1,000 and bathroom tiling around £500–£800, but preparation and tile choice can move the price substantially."],
    ["Can a tiler tile over old tiles?", "Sometimes, but only when the existing tiles are sound, well bonded, sufficiently flat and the added thickness is acceptable. A site assessment is better than assuming it is suitable."],
    ["Should damp be fixed before tiling?", "Yes if the damp comes from a leak, penetration or another active defect. Manchester City Council advises fixing the underlying cause of damp rather than just covering the symptoms."],
    ["Does a bathroom refit need Building Regulations?", "Manchester City Council lists bathrooms among improvements that will probably need Building Regulation approval depending on the scope. Check the actual plumbing, ventilation, electrical and structural work involved."],
    ["Do I have to hire a tiler who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare tilers in Manchester?", copy: "Share the tiles, dimensions and existing surface once, then compare interested Manchester tilers and their preparation and fitting quotes.", buttonLabel: "Get Manchester tiling quotes" },
});

const heatingEngineersManchester = makeManchesterProfile({
  serviceSlug: "heating-engineers",
  serviceName: "Heating Engineer",
  servicePlural: "Heating Engineers",
  heroCopy: "Boiler problem, cold radiators, a power flush or a larger heating upgrade? Describe the Manchester property and system once, then compare heating engineers suited to the work.",
  answer: {
    title: "Looking for a heating engineer near you in Manchester?",
    copy: "Enter the postcode and provide the boiler make, fuel type, property size and symptoms. For upgrades, explain the existing emitters and insulation so Manchester heating engineers can understand whether the job is a repair, system improvement or replacement.",
  },
  jobs: [
    { title: "Boiler servicing & repairs", text: "Routine servicing, fault diagnosis and repairs for heating appliances within the engineer's qualifications and registration.", paths: TOOLS },
    { title: "Radiators & valves", text: "Cold radiators, valve problems, replacements and changes to radiator positions or sizes.", paths: GRID },
    { title: "Power flushing", text: "System cleaning where sludge or circulation problems are contributing to poor heating performance.", paths: WATER },
    { title: "Heating controls", text: "Thermostats, programmers, zoning and control upgrades for existing systems.", paths: CLOCK },
    { title: "Boiler replacement", text: "Survey and replacement of an existing boiler with the system, flue, controls and hot-water needs considered together.", paths: HOUSE },
    { title: "Heat pumps & low-carbon heating", text: "Assessment and installation planning for heat-pump systems where the building and heat emitters are suitable.", paths: LEAF },
  ],
  costs: {
    title: "How much does heating work cost?",
    intro: "A service visit and a full system replacement are very different jobs. Current 2026 UK guidance gives these broad examples:",
    prices: [
      { value: "£85–£120", label: "Typical gas boiler service" },
      { value: "~£400", label: "Typical power-flush guide" },
      { value: "~£2,750", label: "Typical combi boiler installation" },
      { value: "£3,430–£5,050", label: "Full central-heating guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester quotes vary with boiler type, system size, access, controls, pipework, radiators and whether regulated gas or electrical work is involved.",
    quoteTitle: "Compare the whole heating-system scope",
    quoteIntro: "A replacement appliance should not be priced in isolation from controls, emitters, water quality, pipework and the condition of the existing system.",
    quoteTips: [
      "Provide the boiler make, age and any fault code.",
      "Say how many radiators or heating zones are affected.",
      "For replacement work, list hot-water demand and property size.",
      "Confirm registration, controls, flushing, commissioning and certificates in the quote.",
    ],
  },
  localContext: {
    eyebrow: "Manchester heating transition",
    title: "Manchester still has a large gas-heated housing stock, while low-carbon upgrades are growing",
    intro: "The existing system matters. Manchester's housing data shows gas remains dominant, but the city's climate plan is pushing substantial retrofit and heat-pump growth.",
    items: [
      {
        title: "67% of Manchester households reported mains-gas central heating",
        text: "Manchester City Council's Census 2021 housing summary says mains gas was the most common central-heating type at 67%, with electric heating at 18%. For repair and replacement jobs, identifying the existing fuel and emitter setup helps distinguish a straightforward like-for-like repair from a more involved system change.",
        source: { label: "Manchester City Council — Census 2021 housing summary", url: "https://www.manchester.gov.uk/the-council-and-democracy/statistics-and-intelligence/census-2021/census-2021-housing-summary" },
      },
      {
        title: "Manchester's 2030 plan calls for 54,000 heat pumps",
        text: "Manchester City Council's 2025 climate plan says the city needs to retrofit 78,850 homes and install 54,000 heat pumps by 2030 to stay on track for its carbon goals. That does not make a heat pump right for every property, but it makes heat-loss, radiator sizing and whole-house suitability increasingly relevant when homeowners compare larger heating upgrades.",
        source: { label: "Manchester City Council — 2025 climate-change plan", url: "https://www.manchester.gov.uk/news-stories/2025/climate-change-plans-set-out-what-manchester-has-to-do-in-the-next-five-years" },
      },
    ],
  },
  areas: {
    intro: "Heating engineers may cover Manchester by postcode and emergency radius. Example areas include:",
    sideTitle: "Give the engineer system details before the visit",
    sideCopy: "Boiler model, fuel, fault code, radiator count and photos of controls can help distinguish a diagnostic visit from a larger system quote.",
    noteLead: "Regulated work needs the right competence.",
    noteText: "Work on gas systems should be carried out by an appropriately Gas Safe registered engineer, and electrical elements may have separate competence requirements.",
  },
  how: {
    title: "Describe the heating problem once, then compare Manchester engineers",
    intro: "Clear symptoms and system information reduce guesswork before attendance.",
    steps: [
      { title: "Explain the system and symptoms", text: "Add the postcode, boiler details, fault codes, radiator issues and the change you want." },
      { title: "Hear from suitable engineers", text: "Up to three interested Manchester heating professionals can respond." },
      { title: "Compare diagnosis and specification", text: "Check reviews, registration and what parts, controls, flushing and commissioning are included." },
    ],
  },
  choose: {
    title: "What should you check before hiring a heating engineer?",
    intro: "Match the engineer's competence to the fuel and work, and compare the full system specification rather than just appliance price.",
    benefits: [
      { title: "Check registration", text: "For gas work, verify the engineer is appropriately Gas Safe registered for the work being undertaken.", paths: SHIELD },
      { title: "Ask what diagnosis supports the repair", text: "For recurring faults, understand the cause before repeatedly replacing individual parts.", paths: TOOLS },
      { title: "Compare controls and commissioning", text: "For new systems, include controls, balancing, water treatment and commissioning in the agreed scope.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does a boiler service cost in Manchester?", "MyJobQuote's current UK guidance places a typical gas boiler service around £85–£120, with local quotes depending on appliance type and provider."],
    ["Can I compare heat-pump installers through this page?", "Heat-pump-related work sits within the Heating Engineers category. Explain the property, existing system and whether you need an initial suitability assessment or installation quote."],
    ["Does a new boiler need Building Regulations approval?", "Manchester City Council lists a new boiler and radiators among home improvements that will probably need Building Regulation approval. Competent-person schemes may handle notification for qualifying work."],
    ["Why does radiator sizing matter for a heat pump?", "Heat pumps generally operate at lower flow temperatures than many traditional boiler systems, so heat loss and emitter sizing are important parts of system design."],
    ["Do I have to hire an engineer who responds?", "No. Compare the options and proceed only if one suits you."],
  ],
  cta: { title: "Ready to compare heating engineers in Manchester?", copy: "Describe the heating system and problem once, then compare interested Manchester heating engineers and their proposed solution.", buttonLabel: "Get Manchester heating quotes" },
});

const locksmithsManchester = makeManchesterProfile({
  serviceSlug: "locksmiths",
  serviceName: "Locksmith",
  servicePlural: "Locksmiths",
  heroCopy: "Locked out, replacing a failed lock or improving door security? Describe the Manchester property, door and lock once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Manchester?",
    copy: "Enter the postcode and explain whether the job is an emergency, repair or planned security upgrade. Photos of the door edge and lock can help Manchester locksmiths identify the likely mechanism and parts before attending.",
  },
  jobs: [
    { title: "Emergency lockouts", text: "Urgent access where keys are lost, locked inside or a mechanism has failed.", paths: LOCK },
    { title: "Lock replacement", text: "Replacing damaged, worn or unsuitable cylinders, mortice locks and other door locks.", paths: LOCK },
    { title: "uPVC multipoint locks", text: "Diagnosis and repair of multipoint mechanisms, gearboxes, cylinders and alignment issues on uPVC or composite doors.", paths: TOOLS },
    { title: "Door security upgrades", text: "Improving lock, bolt or cylinder security where the existing arrangement is weak or outdated.", paths: SHIELD },
    { title: "Window locks", text: "Repair or replacement of lockable window handles and mechanisms where compatible parts are available.", paths: WINDOW },
    { title: "Garage & outbuilding locks", text: "Locks, bolts and security improvements for sheds, garages and external storage areas.", paths: HOUSE },
  ],
  costs: {
    title: "How much does locksmith work cost?",
    intro: "Lock type, emergency timing and replacement hardware affect the final price. Current 2026 UK guidance gives these examples:",
    prices: [
      { value: "~£100", label: "Average lock-change guide" },
      { value: "~£100", label: "Two Yale barrels" },
      { value: "~£175", label: "uPVC multipoint Eurolock" },
      { value: "~£190", label: "5-lever mortice lock" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester emergency call-outs can vary with time of day, lock type, access method and replacement parts.",
    quoteTitle: "Ask for call-out, labour and parts separately",
    quoteIntro: "For urgent work, clarify the charging structure before attendance and ask what replacement lock is proposed if drilling or replacement becomes necessary.",
    quoteTips: [
      "Send a clear photo of the door and lock where safe to do so.",
      "Ask whether the call-out includes a set amount of labour.",
      "Confirm the specification and price of replacement hardware before fitting.",
      "For rented property, establish who is authorised to approve non-emergency changes.",
    ],
  },
  localContext: {
    eyebrow: "Manchester home security",
    title: "Use recognised door-security principles rather than choosing a lock by price alone",
    intro: "Greater Manchester Police publishes a practical home-security checklist, while Manchester's large rented sector makes authority for planned lock changes worth clarifying.",
    items: [
      {
        title: "Greater Manchester Police recommends robust door and window locking",
        text: "The GMP Home Security Checklist advises that front doors should be secured with a multipoint lock, two British Standard locks or a suitable combination of locks and bolts. It also highlights door chains or restrictors, viewers, letterbox deflectors and key-operated window locks. A locksmith can assess which measures are compatible with the actual door rather than fitting unnecessary hardware.",
        source: { label: "Greater Manchester Police — Home Security Checklist", url: "https://www.gmp.police.uk/SysSiteAssets/media/images/greater-manchester/campaigns/local-advice/dfs-burglary-information-pack.pdf" },
      },
      {
        title: "Manchester has a substantial private-rented sector",
        text: "Manchester City Council's Census 2021 summary records 32% of households as privately rented. If you are a tenant arranging a planned lock upgrade rather than an emergency repair, check the tenancy and obtain the appropriate landlord or agent approval before making a permanent alteration.",
        source: { label: "Manchester City Council — Census 2021 housing summary", url: "https://www.manchester.gov.uk/the-council-and-democracy/statistics-and-intelligence/census-2021/census-2021-housing-summary" },
      },
    ],
  },
  areas: {
    intro: "Locksmith coverage often depends on travel radius and emergency availability. Manchester areas may include:",
    sideTitle: "Photograph the lock before requesting a planned quote",
    sideCopy: "A photo of the faceplate, cylinder and door edge can help a locksmith distinguish a cylinder problem from a multipoint gearbox or alignment issue.",
    noteLead: "Emergency access and security upgrades are different jobs.",
    noteText: "Ask how the locksmith charges for entry first, then separately approve any replacement hardware that is actually needed.",
  },
  how: {
    title: "Describe the lock problem once, then compare Manchester locksmiths",
    intro: "The door type, urgency and symptoms help the right locksmith respond.",
    steps: [
      { title: "Show the lock and explain the problem", text: "Add the postcode, door type, photos and whether you are locked out or planning an upgrade." },
      { title: "Hear from suitable locksmiths", text: "Up to three interested Manchester locksmiths can respond." },
      { title: "Compare charges and hardware", text: "Check reviews and compare call-out, labour, parts and the proposed lock specification." },
    ],
  },
  choose: {
    title: "What should you check before hiring a locksmith?",
    intro: "The aim is secure, proportionate work with a clear price before irreversible drilling or replacement.",
    benefits: [
      { title: "Clarify the call-out", text: "Ask what the attendance charge includes and how out-of-hours pricing works.", paths: CLOCK },
      { title: "Understand the replacement", text: "Ask what lock or cylinder will be fitted and why it suits the door and security requirement.", paths: LOCK },
      { title: "Keep authorisation clear", text: "For rented or managed properties, ensure the person instructing permanent changes has authority to do so.", paths: DOC },
    ],
  },
  faq: [
    ["How much does a locksmith cost in Manchester?", "MyJobQuote's current UK guide puts an average lock change around £100, with specific hardware such as a uPVC multipoint Eurolock around £175. Emergency timing and parts can change the price."],
    ["What information should I send a locksmith?", "The postcode, urgency, door material and clear photos of the lock and door edge are useful where it is safe to take them."],
    ["What door security does Greater Manchester Police recommend?", "GMP's home-security checklist highlights multipoint or British Standard door locks, appropriate bolts, door restrictors/viewers and secure windows, depending on the door and property."],
    ["Can a tenant change the locks?", "Emergency repairs may be necessary, but for a planned permanent alteration you should check the tenancy terms and landlord or agent approval requirements."],
    ["Do I have to hire a locksmith who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare locksmiths in Manchester?", copy: "Describe the door, lock and urgency once, then compare interested Manchester locksmiths and their charges.", buttonLabel: "Get Manchester locksmith quotes" },
});

const pestControllersManchester = makeManchesterProfile({
  serviceSlug: "pest-controllers",
  serviceName: "Pest Controller",
  servicePlural: "Pest Controllers",
  heroCopy: "Seeing rodents, insects or signs of an infestation? Describe what you have found, where it appears and how long it has been happening, then compare pest controllers covering Manchester.",
  answer: {
    title: "Looking for a pest controller near you in Manchester?",
    copy: "Enter the postcode and describe sightings, droppings, bites, noises or nesting activity. Correct identification matters because different pests need different treatment plans, and some problems also need proofing or drainage repairs to prevent a return.",
  },
  jobs: [
    { title: "Rat control", text: "Assessment and treatment for rat activity, including advice on food sources, proofing and possible drainage-related entry routes.", paths: BUG },
    { title: "Mouse control", text: "Treatment and monitoring for mice inside homes, together with practical entry-point and hygiene advice.", paths: BUG },
    { title: "Wasp nests", text: "Treatment of active wasp nests where location and access allow safe identification and treatment.", paths: BUG },
    { title: "Bed bugs", text: "Survey and treatment planning for suspected bed bugs, including preparation requirements and follow-up where needed.", paths: BUG },
    { title: "Cockroaches & ants", text: "Targeted insect treatment based on identification, harbourage and the scale of activity.", paths: BUG },
    { title: "Commercial pest control", text: "Monitoring and treatment for workplaces or managed premises where ongoing records and scheduled visits may be required.", paths: GRID },
  ],
  costs: {
    title: "How much does pest control cost?",
    intro: "The pest, infestation size and number of visits all affect price. Current 2026 UK guidance gives these broad private-treatment benchmarks:",
    prices: [
      { value: "£75–£250", label: "Typical domestic treatment range" },
      { value: "£120–£240", label: "Rodent treatment guide" },
      { value: "£75–£150", label: "Wasp-nest guide" },
      { value: "£100–£280", label: "Standard bed-bug treatment" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester City Council also operates its own chargeable residential pest service with separate published prices, so compare the exact service and number of visits rather than headline figures alone.",
    quoteTitle: "Identify the pest before comparing treatment prices",
    quoteIntro: "A quote for the wrong pest is not useful. Describe evidence carefully and ask whether follow-up visits and proofing are included.",
    quoteTips: [
      "Describe sightings, droppings, damage, bites or sounds and where they occur.",
      "Mention children, pets and sensitive areas before treatment is chosen.",
      "Ask how many visits are included and what happens if activity continues.",
      "For rodents, ask whether drainage defects or entry points need separate repair.",
    ],
  },
  localContext: {
    eyebrow: "Manchester pest-control options",
    title: "Manchester has a council pest service, and correct identification matters",
    intro: "Homeowners can compare private pest controllers while also being aware that Manchester City Council publishes its own residential treatment options and charges.",
    items: [
      {
        title: "Manchester City Council treats a defined list of household pests",
        text: "The council's residential service currently covers rats, mice inside the home, squirrels, wasps, ants, cockroaches, fleas, bed bugs and beetles. It stresses identifying the correct pest before booking. That same principle applies when requesting private quotes: photos and evidence help avoid paying for a treatment that does not match the problem.",
        source: { label: "Manchester City Council — get rid of pests at your home", url: "https://www.manchester.gov.uk/environmental-problems/pest-control/get-rid-of-pests-at-your-home" },
      },
      {
        title: "Council prices provide a useful local comparison point",
        text: "Manchester's published 2026 charges include £58 for a rat treatment course of up to three visits, £101 for mice, £84 per wasp nest and bed-bug treatment from £148 after a survey. Private providers can price differently, especially for proofing, heat treatment or commercial work, so compare what the package actually includes.",
        source: { label: "Manchester City Council — pest treatment charges", url: "https://www.manchester.gov.uk/environmental-problems/pest-control/get-rid-of-pests-at-your-home/our-treatment-charges" },
      },
    ],
  },
  areas: {
    intro: "Pest controllers may cover Manchester by postcode and treatment type. Example areas include:",
    sideTitle: "For rats, investigate repeated entry rather than only baiting",
    sideCopy: "Manchester City Council notes that rats commonly live in drains and sewers and may appear when drainage becomes damaged. If activity repeatedly returns, the underlying access route may need repair as well as treatment.",
    noteLead: "Keep pest treatment and building repairs distinct.",
    noteText: "A pest controller can identify likely entry points, but damaged drains, roofs or fabric may need a separate specialist repair.",
  },
  how: {
    title: "Describe the pest evidence once, then compare Manchester controllers",
    intro: "Identification, access and infestation size determine the treatment plan.",
    steps: [
      { title: "Describe the evidence", text: "Add the postcode, sightings, droppings, bites, noises, affected rooms and photos where useful." },
      { title: "Hear from suitable controllers", text: "Up to three interested Manchester pest professionals can respond." },
      { title: "Compare treatment and follow-up", text: "Check reviews, visit count, preparation, safety advice, proofing and what happens if activity continues." },
    ],
  },
  choose: {
    title: "What should you check before hiring a pest controller?",
    intro: "The best treatment plan explains the pest, the method and what will prevent reinfestation.",
    benefits: [
      { title: "Confirm identification", text: "Ask what evidence supports the pest identification before treatment starts.", paths: BUG },
      { title: "Understand the visit plan", text: "Clarify how many visits, monitoring checks and follow-up treatments are included.", paths: CLOCK },
      { title: "Ask about prevention", text: "Discuss proofing, waste, food sources, drainage or other conditions that could allow the problem to return.", paths: SHIELD },
    ],
  },
  faq: [
    ["How much does pest control cost in Manchester?", "Private treatment varies by pest and infestation. As a local benchmark, Manchester City Council currently charges £58 for a rat treatment course, £101 for mice, £84 per wasp nest and bed-bug treatment from £148 for standard homes."],
    ["Does Manchester City Council provide pest control?", "Yes, it currently offers residential treatment for specified pests including rats, mice, wasps, bed bugs, ants, cockroaches, fleas, squirrels and beetles."],
    ["Can rats be linked to damaged drains?", "Yes. Manchester City Council notes that rats often live in drains and sewers and can become visible when a drainage system is damaged, so repairing the fault can be important."],
    ["How many pest controllers can respond?", "Up to three interested local professionals can respond."],
    ["Do I have to hire one?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare pest controllers in Manchester?", copy: "Describe the signs and affected areas once, then compare interested Manchester pest controllers and their treatment plans.", buttonLabel: "Get Manchester pest-control quotes" },
});

const treeSurgeonsManchester = makeManchesterProfile({
  serviceSlug: "tree-surgeons",
  serviceName: "Tree Surgeon",
  servicePlural: "Tree Surgeons",
  heroCopy: "Need pruning, crown work, stump grinding or a tree removed? Describe the tree, access and intended outcome once, then compare tree surgeons covering Manchester.",
  answer: {
    title: "Looking for a tree surgeon near you in Manchester?",
    copy: "Enter the postcode and include photos showing the full tree, nearby buildings, boundaries and access. Say whether you know of a Tree Preservation Order or conservation-area status so Manchester tree surgeons can assess permissions before quoting work.",
  },
  jobs: [
    { title: "Tree pruning", text: "Selective pruning to manage clearance, damaged branches, growth or shape while respecting the tree's condition.", paths: TREE },
    { title: "Crown reduction", text: "Reducing the size of a tree crown where appropriate while maintaining a balanced structure.", paths: TREE },
    { title: "Tree removal", text: "Sectional dismantling or felling where removal is justified and can be carried out safely.", paths: TOOLS },
    { title: "Stump grinding", text: "Grinding remaining stumps after removal to reclaim space or prepare for landscaping.", paths: TOOLS },
    { title: "Hedge & boundary tree work", text: "Cutting and management where ownership, access and the effect on neighbouring land need to be clear.", paths: LEAF },
    { title: "Emergency tree work", text: "Assessment of storm-damaged or hazardous trees where immediate safety and legal protection must both be considered.", paths: SHIELD },
  ],
  costs: {
    title: "How much does tree work cost?",
    intro: "Height, condition, access, rigging and waste removal can move the price substantially. Current 2026 UK guidance gives these broad tree-removal examples:",
    prices: [
      { value: "£150–£350", label: "Small tree under 25ft" },
      { value: "£400–£700", label: "Medium tree 25–50ft" },
      { value: "£650–£1,200", label: "Large tree 50–75ft" },
      { value: "£1,200–£4,800+", label: "Extra-large tree 75ft+" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester quotes vary with species, condition, climbing or lifting access, proximity to buildings, traffic management, waste and protected-tree requirements.",
    quoteTitle: "Include permissions, access and waste in the quote",
    quoteIntro: "Tree work can change dramatically if the tree is protected, access is poor or branches need controlled lowering over buildings or boundaries.",
    quoteTips: [
      "Send photos from several angles including the base and surrounding access.",
      "Check TPO and conservation-area status before work begins.",
      "Say whether timber, branches, chips and the stump should be removed.",
      "Mention sheds, conservatories, cables, roads and neighbouring property below the crown.",
    ],
  },
  localContext: {
    eyebrow: "Manchester tree permissions",
    title: "Protected trees and conservation areas need checking before cutting starts",
    intro: "Manchester City Council controls work to TPO trees and also protects trees in conservation areas. Permission checks belong at the beginning of the job, not after a crew arrives.",
    items: [
      {
        title: "TPO trees need council consent before pruning or felling",
        text: "Manchester City Council says that once a Tree Preservation Order is made, its consent is required before the protected tree may be pruned or felled. A tree surgeon should identify whether protection applies and make sure the proposed specification matches any consent before starting work.",
        source: { label: "Manchester City Council — Tree Preservation Orders", url: "https://www.manchester.gov.uk/parks-leisure-and-the-arts/parks-playgrounds-allotments-and-open-spaces/tree-preservation-orders/tree-preservation-orders-and-trees-in-conservation-areas" },
      },
      {
        title: "Conservation-area tree work normally requires six weeks' notice",
        text: "The same council guidance says anyone wishing to fell, prune or uproot a tree in a conservation area must normally give six weeks' notice unless an exemption applies, such as an immediate public-safety hazard. Confirm the property's status and the proposed work before booking a date.",
        source: { label: "Manchester City Council — trees in conservation areas", url: "https://www.manchester.gov.uk/parks-leisure-and-the-arts/parks/playgrounds-allotments-and-open-spaces/tree-preservation-orders/tree-preservation-orders-and-trees-in-conservation-areas" },
      },
    ],
  },
  areas: {
    intro: "Tree surgeons may cover Manchester by postcode, equipment access and job size. Example areas include:",
    sideTitle: "Show what is beneath and around the tree",
    sideCopy: "Photos of roads, fences, sheds, extensions, neighbouring gardens and narrow side access help a tree surgeon understand whether material can be dropped, lowered or carried out manually.",
    noteLead: "Do not assume private ownership means unrestricted work.",
    noteText: "A tree in a private garden can still be protected by a TPO or conservation-area controls.",
  },
  how: {
    title: "Describe the tree once, then compare Manchester tree surgeons",
    intro: "Photos, dimensions, access and protection status help arborists assess the method before visiting.",
    steps: [
      { title: "Show the tree and surroundings", text: "Add the postcode, photos, estimated height, intended work and access constraints." },
      { title: "Hear from suitable tree surgeons", text: "Up to three interested Manchester arboricultural professionals can respond." },
      { title: "Compare method and permissions", text: "Check reviews, insurance, protected-tree checks, waste removal and how the work will be carried out safely." },
    ],
  },
  choose: {
    title: "What should you check before hiring a tree surgeon?",
    intro: "The quote should explain not only what will be cut but how the tree, property and legal protections will be managed.",
    benefits: [
      { title: "Check protection status", text: "Establish TPO or conservation-area requirements before agreeing a start date.", paths: DOC },
      { title: "Ask about the work method", text: "Understand whether branches will be climbed, rigged, lowered or require specialist access equipment.", paths: TREE },
      { title: "Agree the waste outcome", text: "State whether logs, chips, branches and the stump stay on site or are removed.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does tree removal cost in Manchester?", "MyJobQuote's current UK guide gives roughly £150–£350 for a small tree, £400–£700 for a medium tree and £650–£1,200 for a large tree, with difficult access or very large trees costing more."],
    ["Can I prune a TPO tree in Manchester?", "Not without the appropriate council consent. Manchester City Council says consent is required before a tree covered by a TPO may be pruned or felled."],
    ["What if the tree is in a Manchester conservation area?", "The council says six weeks' notice is normally required before felling, pruning or uprooting a conservation-area tree unless an exemption applies."],
    ["Should stump grinding be quoted separately?", "Yes if you want the stump removed. Tree felling and stump grinding are often separate operations with different access and equipment requirements."],
    ["Do I have to hire a tree surgeon who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare tree surgeons in Manchester?", copy: "Share photos, access and the work you want once, then compare interested Manchester tree surgeons and their proposed method.", buttonLabel: "Get Manchester tree quotes" },
});

const architectsManchester = makeManchesterProfile({
  serviceSlug: "architects",
  serviceName: "Architect",
  servicePlural: "Architects",
  heroCopy: "Planning an extension, remodel, conversion or new-build project? Describe the Manchester property, budget and design goals once, then compare architects with relevant project experience.",
  answer: {
    title: "Looking for an architect near you in Manchester?",
    copy: "Enter the postcode and explain what you want to change, the approximate budget and whether you need feasibility, planning, Building Regulations drawings or a fuller service. Manchester architects can then judge whether the scale and planning context fit their experience.",
  },
  jobs: [
    { title: "Home extensions", text: "Concept, planning and technical design for rear, side or multi-storey extensions to existing homes.", paths: HOUSE },
    { title: "Renovations & remodelling", text: "Reworking internal layouts, circulation and spaces while coordinating structural and building-services requirements.", paths: GRID },
    { title: "Planning applications", text: "Drawings and design information for projects that require planning permission or specific local assessment.", paths: DOC },
    { title: "Building Regulations design", text: "Technical information and coordination needed to demonstrate compliance with relevant Building Regulations.", paths: CHECK },
    { title: "Listed & heritage buildings", text: "Design work where listed-building consent, conservation context and historic fabric need special attention.", paths: SHIELD },
    { title: "New-build design", text: "Concept through technical design for new homes and other buildings where site, planning and construction constraints are considered together.", paths: HOUSE },
  ],
  costs: {
    title: "How much does an architect cost?",
    intro: "Fees depend on project value, complexity and which RIBA-style stages or services are included. Current 2026 UK guidance gives these broad examples:",
    prices: [
      { value: "£3,000–£5,000", label: "Extension planning drawings" },
      { value: "£2,000–£7,500+", label: "Renovation projects" },
      { value: "£5,000–£8,000", label: "Building regs & tender drawings" },
      { value: "£5,000–£12,000", label: "Full house-extension fee guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester architect fees vary with project value, survey information, planning complexity, heritage, structural coordination and how far the architect remains involved after approval.",
    quoteTitle: "Compare the same design stages",
    quoteIntro: "One fee may cover planning drawings only while another includes technical design, tendering and site support. Compare scope before comparing price.",
    quoteTips: [
      "State the project budget and what you want to achieve, not only the room dimensions.",
      "Ask which design stages, applications and revisions are included.",
      "Clarify structural engineer, surveyor and specialist-consultant costs separately.",
      "For heritage property, mention listing or conservation-area status from the start.",
    ],
  },
  localContext: {
    eyebrow: "Manchester planning context",
    title: "Planning, Building Regulations and heritage are separate design questions",
    intro: "Manchester projects can need planning permission, Building Regulation approval, listed-building consent or a combination. An architect should establish the route before detailed design time is spent.",
    items: [
      {
        title: "Manchester distinguishes planning permission from Building Regulation approval",
        text: "Manchester City Council explains that major changes such as extensions can need planning permission, while Building Regulations address safety and energy standards for work such as extensions, structural alterations and many home improvements. A design appointment should say which approvals the architect is expected to prepare and manage.",
        source: { label: "Manchester City Council — approval and permission for building work", url: "https://www.manchester.gov.uk/planning-and-regeneration/planning/approval-and-permission-for-building-work-and-home-improvements" },
      },
      {
        title: "Listed buildings require an additional heritage check",
        text: "Manchester City Council says listed-building consent is required for works that affect a listed building's special interest, whether internal or external, and warns that carrying out work that needs consent without obtaining it first is a criminal offence. Heritage experience can therefore be a substantive requirement, not a cosmetic preference.",
        source: { label: "Manchester City Council — what is a listed building?", url: "https://www.manchester.gov.uk/planning-and-regeneration/planning/listed-buildings-register/what-is-a-listed-building" },
      },
    ],
  },
  areas: {
    intro: "Architects may work across Manchester, but local planning and heritage context can differ by property. Example areas include:",
    sideTitle: "Tell the architect the approval stage you are actually at",
    sideCopy: "A feasibility conversation, a planning submission and a technical construction package are different scopes. Share any existing survey, planning history and structural information before requesting a fee.",
    noteLead: "Do not assume planning approval covers Building Regulations.",
    noteText: "They are separate control systems, and listed-building consent can be another separate requirement for protected buildings.",
  },
  how: {
    title: "Describe the project once, then compare Manchester architects",
    intro: "Budget, site, design ambition and required stages help architects decide whether the project fits their practice.",
    steps: [
      { title: "Set out the project brief", text: "Add the postcode, property type, intended changes, budget and any known planning or heritage constraints." },
      { title: "Hear from suitable architects", text: "Up to three interested Manchester architects can respond." },
      { title: "Compare service stages", text: "Check relevant experience and compare exactly which surveys, drawings, applications and construction-stage services are included." },
    ],
  },
  choose: {
    title: "What should you check before hiring an architect?",
    intro: "Relevant project experience and a clearly defined service are more useful than comparing headline percentage fees alone.",
    benefits: [
      { title: "Compare similar project experience", text: "Look for work with a similar property type, planning context, budget and technical complexity.", paths: HOUSE },
      { title: "Define the service stages", text: "Agree whether the appointment stops at planning or continues through technical design, tender and construction support.", paths: DOC },
      { title: "Clarify other consultants", text: "Ask who appoints structural, measured-survey, party-wall or specialist consultants and whether their fees are separate.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does an architect cost in Manchester?", "MyJobQuote's current UK guide gives roughly £3,000–£5,000 for extension planning drawings and £5,000–£12,000 for a fuller house-extension service, but Manchester fees depend on complexity and the stages included."],
    ["Do I need an architect for a Manchester extension?", "Not every project legally requires an architect, but design, planning and Building Regulations can be easier to coordinate with an appropriately experienced professional. Choose the service based on project complexity."],
    ["Is planning permission the same as Building Regulations?", "No. Manchester City Council treats them as separate approval systems with different purposes, and a project can require one, both or neither depending on the work."],
    ["What if my property is listed?", "Work affecting a listed building's special interest can require listed-building consent. Mention the listing at the first conversation and choose someone with suitable heritage experience where needed."],
    ["Do I have to hire an architect who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare architects in Manchester?", copy: "Describe the property, project and design stage once, then compare interested Manchester architects and their proposed service.", buttonLabel: "Get Manchester architect quotes" },
});

const plasterersManchester = makeManchesterProfile({
  serviceSlug: "plasterers",
  serviceName: "Plasterer",
  servicePlural: "Plasterers",
  heroCopy: "Need walls skimmed, ceilings repaired, damaged plaster replaced or rendering work? Describe the Manchester property and existing surface once, then compare plasterers interested in the job.",
  answer: {
    title: "Looking for a plasterer near you in Manchester?",
    copy: "Enter the postcode, approximate wall or ceiling area and send photos showing cracks, old finishes or damage. Mention any damp staining so Manchester plasterers can distinguish cosmetic preparation from a defect that needs fixing first.",
  },
  jobs: [
    { title: "Wall skimming", text: "Creating a smooth plaster finish over suitable existing plaster, boards or prepared backgrounds.", paths: GRID },
    { title: "Ceiling plastering", text: "Skimming or repairing ceilings after damage, boarding or other building work.", paths: HOUSE },
    { title: "Patch repairs", text: "Repairing local cracks, holes, blown areas and chases after plumbing or electrical work.", paths: TOOLS },
    { title: "Plasterboarding", text: "Installing boards to suitable walls or ceilings before jointing or plaster finishing.", paths: GRID },
    { title: "Rendering", text: "Internal or external render work where the substrate, exposure and chosen system are appropriate.", paths: HOUSE },
    { title: "Making good after repairs", text: "Restoring wall and ceiling finishes after leaks, rewiring, pipework or other disruptive work has been completed.", paths: CHECK },
  ],
  costs: {
    title: "How much does plastering cost?",
    intro: "Area, ceiling height, substrate condition and preparation affect labour. Current 2026 UK guidance gives these useful benchmarks:",
    prices: [
      { value: "£100–£300", label: "Patch repair" },
      { value: "£250–£400", label: "One wall" },
      { value: "£450–£650", label: "Small room" },
      { value: "£600–£850", label: "Medium room" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester quotes vary with preparation, boarding, damaged backgrounds, ceiling height, protection and whether damp or leaks must be resolved first.",
    quoteTitle: "Find out what is underneath the damaged finish",
    quoteIntro: "Skimming can make a wall look new, but it will not repair an active leak, unstable background or penetrating damp.",
    quoteTips: [
      "Send photos showing the whole wall or ceiling and close-ups of damage.",
      "Say whether wallpaper, loose paint or old plaster needs removing.",
      "Mention damp patches and whether the underlying cause has been repaired.",
      "Confirm boarding, beads, bonding, protection and waste in the quote.",
    ],
  },
  localContext: {
    eyebrow: "Manchester plaster preparation",
    title: "Damp staining needs diagnosis before a fresh plaster finish",
    intro: "Manchester City Council distinguishes condensation, penetrating damp, rising damp and defective plumbing. Those causes need different repairs, and new plaster should not be used to disguise an active defect.",
    items: [
      {
        title: "Manchester lists several different causes of dampness",
        text: "The council's damp guidance distinguishes condensation from penetrating damp, rising damp and defective plumbing. Penetrating damp can come through brickwork, roofs, window frames or doors, while defective plumbing includes leaking water and waste pipes. A plasterer should be told whether the source has been identified and fixed before damaged finishes are renewed.",
        source: { label: "Manchester City Council — causes and types of dampness", url: "https://www.manchester.gov.uk/homes-and-property/repairs-safety-and-maintenance/advice-for-problems-in-your-home/causes-and-types-of-dampness" },
      },
      {
        title: "Penetrating damp can be linked to external building defects",
        text: "Manchester City Council gives examples including missing roof tiles, blocked gutters, badly fitted windows and missing pointing. If staining worsens after rain, repairing the external defect may be the real first job; replastering can follow once the area is drying and stable.",
        source: { label: "Manchester City Council — penetrating dampness", url: "https://www.manchester.gov.uk/homes-and-property/repairs-safety-and-maintenance/advice-for-problems-in-your-home/condensation/penetrating-dampness" },
      },
    ],
  },
  areas: {
    intro: "Plasterers may cover Manchester by postcode and job size. Example areas include:",
    sideTitle: "Explain whether the wall is dry and stable now",
    sideCopy: "If a leak or exterior defect was recently repaired, tell the plasterer when it was fixed and whether the wall has had time to dry. That affects preparation and the timing of a new finish.",
    noteLead: "Do not pay to skim over an unresolved defect.",
    noteText: "The new surface can fail again if moisture, movement or loose background material remains underneath.",
  },
  how: {
    title: "Show the existing finish once, then compare Manchester plasterers",
    intro: "Photos and clear dimensions help distinguish a small repair from whole-room preparation.",
    steps: [
      { title: "Describe the surfaces", text: "Add the postcode, dimensions, photos, current finish and any known damp or structural history." },
      { title: "Hear from suitable plasterers", text: "Up to three interested Manchester plasterers can respond." },
      { title: "Compare preparation and finish", text: "Check reviews and compare removal, boarding, bonding, beads, skimming, protection and waste." },
    ],
  },
  choose: {
    title: "What should you check before hiring a plasterer?",
    intro: "The quality of the finished surface depends on whether the background is sound and correctly prepared.",
    benefits: [
      { title: "Ask what preparation is included", text: "Loose material, old finishes and damaged backgrounds may need removal or stabilisation before skimming.", paths: TOOLS },
      { title: "Resolve moisture first", text: "If the wall is damp, identify and repair the cause before cosmetic plastering.", paths: WATER },
      { title: "Agree the finished condition", text: "Clarify whether the quote includes only plastering or also sanding, priming, decorating and waste removal.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does plastering cost in Manchester?", "MyJobQuote's current UK guide gives roughly £250–£400 for one wall, £450–£650 for a small room and £600–£850 for a medium room, depending on preparation."],
    ["Can a plasterer cover damp stains?", "They can renew damaged plaster after the cause is fixed, but plaster alone should not be used as the repair for an active leak or penetrating damp."],
    ["Why does damp diagnosis matter?", "Manchester City Council distinguishes condensation, penetrating damp, rising damp and defective plumbing, all of which can need different corrective work before replastering."],
    ["Should decorating be included?", "Do not assume so. Ask whether the plastering quote stops at a dry plaster finish or also includes priming and painting."],
    ["Do I have to hire a plasterer who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare plasterers in Manchester?", copy: "Share photos and the condition of the walls or ceilings once, then compare interested Manchester plasterers and their preparation plans.", buttonLabel: "Get Manchester plastering quotes" },
});

const kitchenFittersManchester = makeManchesterProfile({
  serviceSlug: "kitchen-fitters",
  serviceName: "Kitchen Fitter",
  servicePlural: "Kitchen Fitters",
  heroCopy: "Installing a complete kitchen, replacing units or fitting new worktops? Describe the Manchester property, layout and products once, then compare kitchen fitters suited to the project.",
  answer: {
    title: "Looking for a kitchen fitter near you in Manchester?",
    copy: "Enter the postcode and share the kitchen plan, room dimensions and product list if you have them. Say whether plumbing, electrics, gas, tiling or building work is changing so Manchester kitchen fitters can price the real scope rather than only cabinet assembly.",
  },
  jobs: [
    { title: "Full kitchen installation", text: "Fitting cabinets, panels, plinths, doors and the main kitchen layout to the supplied plan.", paths: GRID },
    { title: "Worktop fitting", text: "Measuring, cutting and fitting suitable worktops, joins, cut-outs and upstands.", paths: TOOLS },
    { title: "Kitchen refurbishments", text: "Replacing selected units, doors, worktops or finishes without rebuilding the whole room.", paths: HOUSE },
    { title: "Sink & appliance fitting", text: "Coordinating sinks and appliance housings with appropriately qualified plumbing, gas or electrical work where required.", paths: WATER },
    { title: "Kitchen tiling & splashbacks", text: "Wall and floor finishes coordinated around cabinets, worktops, sockets and wet areas.", paths: GRID },
    { title: "Making good & finishing", text: "Final trims, adjustments and making good after units and service alterations are complete.", paths: CHECK },
  ],
  costs: {
    title: "How much does kitchen fitting cost?",
    intro: "Cabinet count, worktops and service changes drive the price. Current 2026 UK guidance gives these broad examples:",
    prices: [
      { value: "£1,700–£3,000", label: "Typical labour-only fitting" },
      { value: "£5,000–£8,000", label: "Small 8–10m² kitchen" },
      { value: "£8,000–£15,000", label: "Medium 12–16m² kitchen" },
      { value: "£15,000–£25,000+", label: "Large 20m²+ kitchen" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester quotes vary with kitchen brand, cabinet count, worktop material, demolition, plumbing, electrics, gas, flooring, tiling and decorating.",
    quoteTitle: "Separate fitting from specialist service changes",
    quoteIntro: "A kitchen fitter may coordinate the project, but gas, electrical, structural and some plumbing work may need appropriately competent specialists.",
    quoteTips: [
      "Share the supplier plan, product list and room dimensions.",
      "List demolition and waste removal separately from fitting.",
      "Identify plumbing, gas, electrical and ventilation changes.",
      "Confirm worktop templating, appliance connections, tiling and decorating in the scope.",
    ],
  },
  localContext: {
    eyebrow: "Manchester kitchen alterations",
    title: "Kitchen refits can involve more than cabinet fitting",
    intro: "Manchester's Building Control guidance and damp advice both matter when a kitchen project moves services or exposes existing defects.",
    items: [
      {
        title: "Building Regulation approval can apply to associated home-improvement work",
        text: "Manchester City Council says Building Regulation approval will probably be needed for home improvements such as electrical work and structural alterations, and it lists several building-services changes among the work that can require approval. For a kitchen refit, separate simple cabinet fitting from new circuits, structural openings, ventilation and other regulated elements.",
        source: { label: "Manchester City Council — building work approval", url: "https://www.manchester.gov.uk/planning-and-regeneration/building-control/building-work-check-the-approval-you-need" },
      },
      {
        title: "Water and waste-pipe leaks can damage kitchen finishes",
        text: "Manchester City Council's defective-plumbing guidance says leaks from water and waste pipes, especially in bathrooms and kitchens, can create persistent damp patches. If a refit exposes staining or damaged units around plumbing, resolve the leak before new cabinets and finishes conceal the problem.",
        source: { label: "Manchester City Council — defective plumbing", url: "https://www.manchester.gov.uk/homes-and-property/repairs-safety-and-maintenance/advice-for-problems-in-your-home/condensation/defective-plumbing" },
      },
    ],
  },
  areas: {
    intro: "Kitchen fitters can cover Manchester by postcode and project size. Example areas include:",
    sideTitle: "Have the product plan ready before requesting a fixed quote",
    sideCopy: "Cabinet sizes, worktop material, appliances and service positions determine whether a fitter can price accurately without making assumptions.",
    noteLead: "Ask who coordinates specialist trades.",
    noteText: "If gas, electrics, plumbing or structural work is changing, identify who is responsible for each element and its certification.",
  },
  how: {
    title: "Share the kitchen plan once, then compare Manchester fitters",
    intro: "A product schedule and clear scope make kitchen quotes much easier to compare.",
    steps: [
      { title: "Upload the plan and scope", text: "Add the postcode, dimensions, units, worktops, appliances and any service changes." },
      { title: "Hear from suitable fitters", text: "Up to three interested Manchester kitchen fitters can respond." },
      { title: "Compare the complete package", text: "Check reviews and compare demolition, fitting, worktops, specialist trades, waste and making good." },
    ],
  },
  choose: {
    title: "What should you check before hiring a kitchen fitter?",
    intro: "The key is knowing who owns each part of the job when multiple trades and suppliers are involved.",
    benefits: [
      { title: "Use the same product schedule", text: "Make sure each quote is based on the same cabinet count, worktops, appliances and accessories.", paths: DOC },
      { title: "Identify specialist work", text: "Confirm who handles gas, electrical, plumbing and structural elements and whether they are included in the price.", paths: TOOLS },
      { title: "Agree the finish point", text: "Clarify waste, tiling, flooring, decorating, silicone and final adjustments before work starts.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does kitchen fitting cost in Manchester?", "MyJobQuote's current UK guide gives roughly £1,700–£3,000 for labour-only fitting, while a full small kitchen can be around £5,000–£8,000 and larger projects significantly more."],
    ["Will a kitchen fitter do plumbing and electrics?", "Some firms coordinate these trades, but regulated work should be carried out by appropriately competent people. Ask exactly who will do each element and what certification is provided."],
    ["Can kitchen work need Building Regulations?", "Yes, depending on the changes. Manchester City Council lists structural alterations and several home-improvement services as work that can require Building Regulation approval."],
    ["Should I fix a leak before new units are installed?", "Yes. Manchester's damp guidance identifies defective water and waste pipes as a cause of persistent damp, so repair the source before covering it with new cabinetry."],
    ["Do I have to hire a kitchen fitter who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare kitchen fitters in Manchester?", copy: "Share the kitchen plan and full project scope once, then compare interested Manchester kitchen fitters and their quotes.", buttonLabel: "Get Manchester kitchen quotes" },
});

const bathroomSpecialistsManchester = makeManchesterProfile({
  serviceSlug: "bathroom-specialists",
  serviceName: "Bathroom Specialist",
  servicePlural: "Bathroom Specialists",
  heroCopy: "Planning a bathroom refit, new shower, wet-area upgrade or complete layout change? Describe the Manchester room and products once, then compare bathroom specialists interested in the project.",
  answer: {
    title: "Looking for a bathroom specialist near you in Manchester?",
    copy: "Enter the postcode and share room dimensions, photos and the sanitaryware or shower products you want to use. Say whether the layout, plumbing, electrics or ventilation will change so Manchester specialists can price the full refurbishment rather than only the visible fittings.",
  },
  jobs: [
    { title: "Full bathroom fitting", text: "Strip-out and installation of sanitaryware, furniture and finishes as part of a coordinated refurbishment.", paths: WATER },
    { title: "Shower installation", text: "Fitting shower trays, enclosures and related plumbing or wall finishes with suitable wet-area preparation.", paths: WATER },
    { title: "Bathroom tiling", text: "Wall and floor tiling coordinated with waterproofing, sanitaryware and access panels.", paths: GRID },
    { title: "Layout changes", text: "Moving fixtures where drainage, water supplies, ventilation and floor or wall construction allow.", paths: TOOLS },
    { title: "Bathroom furniture", text: "Installing vanity units, storage and fitted furniture around existing or new services.", paths: HOUSE },
    { title: "Repairs & partial refurbishments", text: "Replacing selected fittings, failed seals, damaged finishes or worn components without a full strip-out.", paths: CHECK },
  ],
  costs: {
    title: "How much does a new bathroom cost?",
    intro: "Layout changes, sanitaryware quality and tiling area make a large difference. Current 2026 UK guidance gives these broad project benchmarks:",
    prices: [
      { value: "~£7,000", label: "Average new-bathroom guide" },
      { value: "£4,000–£6,000", label: "Simpler refurbishment range" },
      { value: "£6,000–£10,000", label: "Typical mid-range project" },
      { value: "£10,000+", label: "Higher-spec / major layout change" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester quotes vary with room size, strip-out, plumbing changes, electrical work, ventilation, waterproofing, tile choice and product specification.",
    quoteTitle: "Compare the hidden bathroom work as well as the fittings",
    quoteIntro: "Waterproofing, drainage, ventilation and service changes can determine the quality of the finished room even though they are mostly hidden afterwards.",
    quoteTips: [
      "Share room dimensions and the exact sanitaryware or shower products.",
      "Say whether fixtures stay in the same positions or move.",
      "Confirm waterproofing, ventilation, electrics and access panels.",
      "Agree strip-out, waste, tiling, decorating and final silicone in the quote.",
    ],
  },
  localContext: {
    eyebrow: "Manchester bathroom moisture control",
    title: "Ventilation and Building Regulations belong in the bathroom plan",
    intro: "Manchester's guidance directly links bathing and showering with indoor moisture and also identifies bathrooms among improvements that can require Building Regulation approval.",
    items: [
      {
        title: "Bathing and showering add significant moisture to the home",
        text: "Manchester City Council advises using extractor fans and opening windows during and after showering or bathing because condensation is made worse by poor ventilation, insulation and heating. A bathroom refit is a good time to check whether the room's extraction strategy is adequate rather than relying on new tiles and sealant alone.",
        source: { label: "Manchester City Council — keep free from damp and mould", url: "https://www.manchester.gov.uk/homes-and-property/repairs-safety-and-maintenance/advice-for-problems-in-your-home/causes-and-types-of-dampness/keep-free-from-damp-and-mould" },
      },
      {
        title: "Bathroom work can need Building Regulation approval",
        text: "Manchester City Council includes bathrooms in its list of home improvements that will probably need Building Regulation approval depending on the scope. Layout changes, electrical work, ventilation and structural alterations should therefore be identified before the quote is treated as a simple fitting job.",
        source: { label: "Manchester City Council — approval and permission for building work", url: "https://www.manchester.gov.uk/planning-and-regeneration/planning/approval-and-permission-for-building-work-and-home-improvements" },
      },
    ],
  },
  areas: {
    intro: "Bathroom specialists may cover Manchester by postcode and project size. Example areas include:",
    sideTitle: "Decide whether the layout is staying or changing",
    sideCopy: "Moving a toilet, shower or basin can change drainage routes, floor work, wall opening and the amount of making good. State this before comparing quotes.",
    noteLead: "Moisture control should be designed, not added at the end.",
    noteText: "Discuss extraction, waterproofing and sealant details before finishes are installed.",
  },
  how: {
    title: "Describe the bathroom once, then compare Manchester specialists",
    intro: "Products, layout and hidden service changes make bathroom quotes more reliable.",
    steps: [
      { title: "Share the room and products", text: "Add the postcode, photos, dimensions, sanitaryware, desired layout and any known plumbing or ventilation issues." },
      { title: "Hear from suitable specialists", text: "Up to three interested Manchester bathroom professionals can respond." },
      { title: "Compare the full refurbishment", text: "Check reviews and compare strip-out, plumbing, waterproofing, tiling, electrics, ventilation and finishing." },
    ],
  },
  choose: {
    title: "What should you check before hiring a bathroom specialist?",
    intro: "A durable bathroom depends on the hidden wet-area and service work as much as the visible tiles and fittings.",
    benefits: [
      { title: "Confirm waterproofing", text: "Ask how shower and wet areas are prepared before tiles or panels go on.", paths: WATER },
      { title: "Plan ventilation", text: "Clarify extractor requirements and how moisture will be removed during normal use.", paths: LEAF },
      { title: "Identify regulated work", text: "Ask who handles electrical and other regulated elements and what completion documentation is provided.", paths: DOC },
    ],
  },
  faq: [
    ["How much does a bathroom renovation cost in Manchester?", "MyJobQuote's current UK guide puts an average new bathroom around £7,000, but a simple like-for-like refit can be lower and a major layout or high-spec project can exceed £10,000."],
    ["Should I improve ventilation during a bathroom refit?", "It is worth assessing. Manchester City Council says showering and bathing add moisture and advises extractor fans or open windows to reduce condensation."],
    ["Does a bathroom need Building Regulations?", "Depending on the work, yes. Manchester City Council lists bathrooms among home improvements that will probably need Building Regulation approval."],
    ["Can I keep the same layout to save money?", "Often a like-for-like layout reduces plumbing and drainage changes, but the actual condition of existing services still needs checking."],
    ["Do I have to hire a bathroom specialist who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare bathroom specialists in Manchester?", copy: "Describe the room, products and layout once, then compare interested Manchester bathroom specialists and their full project quotes.", buttonLabel: "Get Manchester bathroom quotes" },
});

const drainageSpecialistsManchester = makeManchesterProfile({
  serviceSlug: "drainage-specialists",
  serviceName: "Drainage Specialist",
  servicePlural: "Drainage Specialists",
  heroCopy: "Blocked drain, recurring backup, slow flow or suspected damaged pipe? Describe the symptoms and affected drains once, then compare drainage specialists covering Manchester.",
  answer: {
    title: "Looking for a drainage specialist near you in Manchester?",
    copy: "Enter the postcode and explain which fixtures or external drains are affected, whether neighbours have the same problem and what has already been tried. Manchester drainage specialists can then judge whether the likely next step is clearance, CCTV inspection or repair.",
  },
  jobs: [
    { title: "Blocked drains", text: "Clearing internal or external drainage blockages through suitable access points.", paths: WATER },
    { title: "Drain jetting", text: "High-pressure water jetting where appropriate to remove deposits and restore flow.", paths: WATER },
    { title: "CCTV drain surveys", text: "Camera inspection to identify roots, displaced joints, damage or recurring obstructions.", paths: WINDOW },
    { title: "Drain repairs", text: "Repair of damaged private pipework once the defect location and ownership responsibility are established.", paths: TOOLS },
    { title: "Surface-water drainage", text: "Investigation of private gullies, soakaways and runoff problems around homes and hard surfaces.", paths: WATER },
    { title: "Emergency drainage", text: "Urgent clearance or containment for serious backups and overflowing private drains.", paths: CLOCK },
  ],
  costs: {
    title: "How much does drainage work cost?",
    intro: "Diagnosis and clearance can be separate from repair. Current 2026 UK guidance gives these broad examples:",
    prices: [
      { value: "£80–£100", label: "Drain-cleaning guide" },
      { value: "£80–£145", label: "Drain rodding" },
      { value: "£70–£175", label: "Drain jetting" },
      { value: "~£250", label: "Average CCTV survey" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester prices vary with emergency timing, access, jetting, camera/report requirements, excavation and whether the affected pipe is private or public.",
    quoteTitle: "Establish cause and ownership before major repair",
    quoteIntro: "A recurring blockage may sit in private drainage or in a public sewer. Do not authorise excavation until the defect and responsibility are reasonably clear.",
    quoteTips: [
      "Say which drains or fixtures back up and whether the problem is intermittent.",
      "Mention neighbours being affected and any previous clearance work.",
      "Ask how call-out, jetting, CCTV and written reports are charged.",
      "Check whether United Utilities or the property owner is responsible before major repair.",
    ],
  },
  localContext: {
    eyebrow: "Manchester drainage responsibility",
    title: "First work out whether the problem is private drainage or a public sewer",
    intro: "Manchester City Council directs public-sewer flooding to United Utilities, while surface-water problems originating on private property remain the owner's responsibility.",
    items: [
      {
        title: "Public sewer flooding is a United Utilities responsibility",
        text: "Manchester City Council says that if flooding to a property is caused by a public sewer, responsibility lies with United Utilities, and it links to the water company's guidance for distinguishing public and private drains. Before paying for major excavation, establish where the affected section sits.",
        source: { label: "Manchester City Council — drainage on private property", url: "https://www.manchester.gov.uk/environmental-problems/flooding/before-a-flood/before-a-flood/problems-with-drainage-on-private-property" },
      },
      {
        title: "Surface water is a significant Manchester flood-risk issue",
        text: "Manchester City Council describes heavy-rainfall surface water as one of the city's main flood risks and highlights sustainable drainage such as permeable paving, rain gardens, swales and soakaways. If the problem is standing water or runoff rather than a foul-drain blockage, the solution may need a drainage design rather than repeated jetting.",
        source: { label: "Manchester City Council — nature and urban flood risk", url: "https://www.manchester.gov.uk/zero-carbon-and-climate-change/introducing-sustainable-design-a-more-liveable-city/nature-as-a-powerful-solution-for-urban-flood-risk2" },
      },
    ],
  },
  areas: {
    intro: "Drainage specialists may cover Manchester by postcode and emergency radius. Example areas include:",
    sideTitle: "Tell the specialist if neighbouring properties are affected",
    sideCopy: "Several homes backing up at the same time can point toward a shared or public-network issue rather than a blockage contained entirely within one private drain.",
    noteLead: "Diagnosis should come before excavation.",
    noteText: "A CCTV survey or other evidence can help locate the defect and establish the right party before repair work begins.",
  },
  how: {
    title: "Describe the drainage symptoms once, then compare Manchester specialists",
    intro: "Where the water appears, when it happens and whether it recurs all help narrow the likely cause.",
    steps: [
      { title: "Explain the symptoms", text: "Add the postcode, affected drains, timing, overflows, smells and previous work." },
      { title: "Hear from suitable specialists", text: "Up to three interested Manchester drainage professionals can respond." },
      { title: "Compare diagnosis and next step", text: "Check reviews and distinguish clearance, CCTV, reporting and repair in each quote." },
    ],
  },
  choose: {
    title: "What should you check before hiring a drainage specialist?",
    intro: "For recurring problems, understanding the cause and ownership is more important than repeatedly clearing the same blockage.",
    benefits: [
      { title: "Ask for the diagnosis", text: "Request evidence of where and why the drain is failing before a major repair is proposed.", paths: WINDOW },
      { title: "Separate charging stages", text: "Clarify call-out, rodding, jetting, CCTV, reports and repairs as separate items.", paths: DOC },
      { title: "Check responsibility", text: "Establish whether the pipe is private or part of the public sewer network before authorising excavation.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does it cost to unblock a drain in Manchester?", "MyJobQuote's current UK guide gives roughly £80–£100 for drain cleaning, £80–£145 for rodding and £70–£175 for jetting, with emergency attendance potentially costing more."],
    ["Who is responsible for a public sewer problem in Manchester?", "Manchester City Council says responsibility for flooding caused by a public sewer lies with United Utilities. Use the water company's public/private drain guidance to establish the boundary."],
    ["When is a CCTV survey useful?", "It is particularly useful for recurring blockages, suspected damage, roots or when evidence is needed before authorising repair work."],
    ["Is surface-water flooding the same as a blocked foul drain?", "No. Manchester identifies surface water as a major local flood risk, and solutions can involve falls, soakaways or sustainable drainage rather than simply clearing a pipe."],
    ["Do I have to hire a drainage specialist who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare drainage specialists in Manchester?", copy: "Describe the blockage or drainage symptoms once, then compare interested Manchester drainage specialists and their proposed next steps.", buttonLabel: "Get Manchester drainage quotes" },
});

const drivewaySpecialistsManchester = makeManchesterProfile({
  serviceSlug: "driveway-specialists",
  serviceName: "Driveway Specialist",
  servicePlural: "Driveway Specialists",
  heroCopy: "Planning block paving, resin, tarmac, gravel or a new hardstanding? Describe the Manchester frontage, dimensions and drainage once, then compare driveway specialists suited to the job.",
  answer: {
    title: "Looking for a driveway specialist near you in Manchester?",
    copy: "Enter the postcode, approximate square metres and preferred surface. Say whether a dropped kerb already exists and include photos of the pavement edge, levels and nearby trees so Manchester driveway specialists can price the whole frontage rather than only the finished surface.",
  },
  jobs: [
    { title: "Block paving", text: "Excavation, sub-base preparation and block-paved driveways with edge restraint and suitable drainage.", paths: GRID },
    { title: "Resin driveways", text: "Resin-bound surfaces where the base and permeability are appropriate for the site.", paths: WATER },
    { title: "Tarmac & asphalt", text: "Hard-wearing surfacing over a prepared base with falls and edges designed for the frontage.", paths: HOUSE },
    { title: "Gravel driveways", text: "Gravel surfaces with suitable sub-base, membrane and edge restraint to retain loose material.", paths: GRID },
    { title: "Concrete driveways", text: "Concrete hardstanding where excavation, joints, falls and surface-water management are properly planned.", paths: TOOLS },
    { title: "Repairs & resurfacing", text: "Repairing failed sections or resurfacing an existing drive where the underlying base can be retained.", paths: CHECK },
  ],
  costs: {
    title: "How much does a new driveway cost?",
    intro: "Surface material and ground preparation are the biggest variables. Current 2026 UK guidance gives these approximate ranges for a 30m² one-car driveway:",
    prices: [
      { value: "£1,000–£2,500", label: "30m² gravel driveway" },
      { value: "£1,200–£2,000", label: "30m² resin driveway" },
      { value: "£1,300–£3,200", label: "30m² tarmac driveway" },
      { value: "£1,200–£4,000", label: "30m² block paving" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester quotes vary with excavation, sub-base, drainage, waste, edging, levels and any separate dropped-kerb work.",
    quoteTitle: "Compare the base and drainage, not only the surface",
    quoteIntro: "A finished driveway is only as durable as the excavation, sub-base and water management underneath it.",
    quoteTips: [
      "Give the square metres, current surface and photos from the road.",
      "Ask for excavation and sub-base depth/specification.",
      "Confirm how rainwater will stay on-site or drain through an approved permeable solution.",
      "Treat dropped-kerb approval and highway works as a separate item unless clearly included.",
    ],
  },
  localContext: {
    eyebrow: "Manchester driveway rules",
    title: "Manchester has specific space, permeability and dropped-kerb requirements",
    intro: "Before choosing a surface, check whether the frontage is large enough, whether a vehicle crossing can be approved and how rainwater will be managed.",
    items: [
      {
        title: "Manchester sets minimum parking-area dimensions for a dropped kerb",
        text: "Manchester City Council's current guidance says standard pull-on parking should generally provide at least 4.8 metres depth by 3.5 metres width, or 3 metres by 6 metres for side-on parking. It also gives a current starting cost of £1,575 for a minimum new crossing of roughly 3 metres. Meeting the dimensions does not guarantee approval because other site factors are assessed.",
        source: { label: "Manchester City Council — dropped kerb requirements", url: "https://www.manchester.gov.uk/parking/parking-at-your-home/dropped-kerbs-definition-and-requirements" },
      },
      {
        title: "Front-garden hard surfaces need a drainage strategy",
        text: "Manchester City Council says traditional impermeable front-garden driveways can require planning permission because of uncontrolled runoff. Permeable surfacing such as gravel, permeable blocks or porous asphalt, or directing water to a lawn or border, can fall within permitted-development rules where other restrictions do not apply.",
        source: { label: "Manchester City Council — permitted development for driveways", url: "https://www.manchester.gov.uk/planning-and-regeneration/planning/details-of-permitted-development" },
      },
    ],
  },
  areas: {
    intro: "Driveway specialists need the exact Manchester frontage and dimensions. Example areas include:",
    sideTitle: "Measure the parking area before selecting the finish",
    sideCopy: "Width, depth, slope, tree position and the pavement edge can determine whether the proposed parking arrangement and dropped kerb are practical before surfacing starts.",
    noteLead: "A driveway quote does not automatically include a dropped kerb.",
    noteText: "The public footway crossing is controlled by Manchester City Council and has its own assessment, cost and possible planning requirements.",
  },
  how: {
    title: "Describe the frontage once, then compare Manchester driveway specialists",
    intro: "Dimensions, photos and drainage information make quotes more meaningful.",
    steps: [
      { title: "Show the existing frontage", text: "Add the postcode, dimensions, photos, current surface, desired material and dropped-kerb status." },
      { title: "Hear from suitable specialists", text: "Up to three interested Manchester driveway professionals can respond." },
      { title: "Compare base and drainage", text: "Check reviews and compare excavation, sub-base, permeability, edging, surface thickness and waste." },
    ],
  },
  choose: {
    title: "What should you check before hiring a driveway specialist?",
    intro: "The visible surface matters, but water management and the compacted base determine whether the drive performs long term.",
    benefits: [
      { title: "Ask for the sub-base specification", text: "Confirm excavation depth, material and compaction rather than accepting a quote that names only the surface.", paths: GRID },
      { title: "Plan surface-water drainage", text: "Use a permeable or properly drained design that does not simply discharge runoff onto the pavement or road.", paths: WATER },
      { title: "Separate the dropped kerb", text: "Confirm what happens within the property boundary and what must be approved and carried out through the council process.", paths: DOC },
    ],
  },
  faq: [
    ["How much does a driveway cost in Manchester?", "For a 30m² one-car driveway, MyJobQuote's current UK guide gives broad ranges of about £1,000–£2,500 for gravel, £1,200–£2,000 for resin, £1,300–£3,200 for tarmac and £1,200–£4,000 for block paving."],
    ["How large does the parking area need to be for a Manchester dropped kerb?", "Manchester City Council's standard guidance gives 4.8m depth by 3.5m width for conventional pull-on parking, or 3m depth by 6m width for side-on parking, subject to the full site assessment."],
    ["How much does a Manchester dropped kerb start from?", "The council currently states a starting cost of £1,575 for a minimum new crossing of roughly 3 metres, with larger or more complicated crossings costing more."],
    ["Does a front driveway need to be permeable?", "Manchester's guidance says impermeable front-garden hard surfaces can require planning permission, while permeable surfaces or designs that drain naturally within the property can avoid that requirement in qualifying cases."],
    ["Do I have to hire a driveway specialist who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare driveway specialists in Manchester?", copy: "Share the frontage, dimensions and preferred surface once, then compare interested Manchester driveway specialists and their full groundwork quotes.", buttonLabel: "Get Manchester driveway quotes" },
});

const windowSpecialistsManchester = makeManchesterProfile({
  serviceSlug: "window-specialists",
  serviceName: "Window Specialist",
  servicePlural: "Window Specialists",
  heroCopy: "Replacing old windows, repairing failed double glazing or planning sash, bay or uPVC units? Describe the Manchester property and openings once, then compare window specialists interested in the job.",
  answer: {
    title: "Looking for a window specialist near you in Manchester?",
    copy: "Enter the postcode, number and approximate style of windows and whether you need full frames or only failed sealed units. Mention listed-building or conservation-area status if known so Manchester specialists can assess product and permission constraints before ordering anything.",
  },
  jobs: [
    { title: "uPVC replacement windows", text: "Survey and replacement of frames with appropriately specified uPVC windows and glazing.", paths: WINDOW },
    { title: "Sash windows", text: "Repair, draught improvement or replacement of sash-style windows where proportions and historic appearance can matter.", paths: WINDOW },
    { title: "Bay windows", text: "Replacement or repair of multi-section bay windows where angles, support and access need careful measurement.", paths: HOUSE },
    { title: "Blown double glazing", text: "Replacing failed sealed glass units where condensation appears between panes but the existing frame remains serviceable.", paths: WATER },
    { title: "Timber & aluminium windows", text: "Alternative frame systems where appearance, maintenance, slim sightlines or heritage context shape the choice.", paths: GRID },
    { title: "Doors, rooflights & glazing", text: "Related glazed doors, rooflights and specialist openings where safety glazing, access and weathering need consideration.", paths: WINDOW },
  ],
  costs: {
    title: "How much do replacement windows cost?",
    intro: "Frame material, size, opening style and access all affect price. Current 2026 UK guidance gives these broad fitted examples:",
    prices: [
      { value: "£350–£600", label: "Standard uPVC casement" },
      { value: "£600–£1,100", label: "uPVC sash window" },
      { value: "£1,200–£2,800", label: "Bay-window guide" },
      { value: "£55–£145", label: "Replacement sealed unit" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Manchester quotes vary with frame material, glass, floor level, access, making good and planning or listed-building constraints.",
    quoteTitle: "Compare the product specification as well as the number of windows",
    quoteIntro: "Frame profile, glazing, ventilation, hardware and installation details can differ substantially even when two quotes list the same number of openings.",
    quoteTips: [
      "List the number, rough size and opening style of each window.",
      "Say whether whole frames or only sealed glass units are being replaced.",
      "Mention listed-building or conservation-area status before manufacturing starts.",
      "Confirm trims, making good, disposal, ventilation and compliance documentation.",
    ],
  },
  localContext: {
    eyebrow: "Manchester window permissions",
    title: "Replacement windows can be controlled in heritage parts of Manchester",
    intro: "Most ordinary replacement projects are straightforward, but listed buildings and conservation areas can change what frame, proportion and approval route is acceptable.",
    items: [
      {
        title: "Even replacement windows can need prior approval in a conservation area",
        text: "Manchester City Council's Shudehill Conservation Area guidance says most development proposals require planning permission and notes that even minor work such as replacing windows may require prior council approval. Do not order non-returnable frames until the property's planning and heritage status has been checked.",
        source: { label: "Manchester City Council — Shudehill Conservation Area control of development", url: "https://www.manchester.gov.uk/parks-leisure-and-the-arts/parks/playgrounds-allotments-and-open-spaces/conservation-areas/introduction20/control-of-development" },
      },
      {
        title: "Historic window proportions and set-back can be part of the character",
        text: "The council's St Peter's Square conservation guidance notes that listed-building windows there are generally vertically proportioned and often sliding sash, and says replacements should be similar to the originals and set in the same plane where historic windows cannot be repaired. The exact requirement varies by building, but it shows why heritage windows cannot be selected only from a standard product catalogue.",
        source: { label: "Manchester City Council — St Peter's Square improvement and enhancement", url: "https://www.manchester.gov.uk/parks-leisure-and-the-arts/parks/playgrounds-allotments-and-open-spaces/conservation-areas/introduction9/improvement-and-enhancement" },
      },
    ],
  },
  areas: {
    intro: "Window firms may survey across Manchester by postcode. Example areas include:",
    sideTitle: "Check heritage status before placing an order",
    sideCopy: "If a property is listed or within a controlled conservation area, frame material, opening style, sightlines and glazing pattern may need a different solution from a standard replacement package.",
    noteLead: "A failed sealed unit does not always require a whole new frame.",
    noteText: "If the frame and hardware remain sound, replacing only the blown double-glazed unit can be a smaller and cheaper repair.",
  },
  how: {
    title: "Describe the windows once, then compare Manchester specialists",
    intro: "Window count, style, access and heritage status help installers judge product fit and survey requirements.",
    steps: [
      { title: "List the openings", text: "Add the postcode, photos, number and style of windows, floor levels and whether frames or glass units are being replaced." },
      { title: "Hear from suitable specialists", text: "Up to three interested Manchester window professionals can respond." },
      { title: "Compare product and fitting", text: "Check reviews, frame and glass specification, warranty, installation, making good and permissions." },
    ],
  },
  choose: {
    title: "What should you check before hiring a window specialist?",
    intro: "The right window has to suit the building, perform properly and comply with any approval requirements that apply.",
    benefits: [
      { title: "Confirm the full specification", text: "Compare frame profile, opening style, glazing, hardware, ventilation and colour rather than only unit count.", paths: WINDOW },
      { title: "Check permissions before ordering", text: "For listed buildings or controlled conservation areas, establish the approval route before frames are manufactured.", paths: DOC },
      { title: "Agree making good and certification", text: "Ask who removes old units, repairs reveals and supplies relevant compliance documentation.", paths: CHECK },
    ],
  },
  faq: [
    ["How much do replacement windows cost in Manchester?", "MyJobQuote's current UK guide gives about £350–£600 for a standard uPVC casement, £600–£1,100 for a uPVC sash and £1,200–£2,800 for a bay-window project as broad examples."],
    ["Can I replace only a blown double-glazed unit?", "Often yes if the existing frame and hardware are sound. MyJobQuote's current guide places a standard replacement sealed unit around £55–£145 depending on size and specification."],
    ["Can replacement windows need planning approval in Manchester?", "Yes in some locations. Manchester City Council's Shudehill conservation guidance specifically notes that even replacement windows may require prior approval."],
    ["What if my Manchester property is listed?", "Work affecting a listed building's special interest can require listed-building consent. Check before ordering and use a specialist with suitable heritage experience where necessary."],
    ["Do I have to hire a window specialist who responds?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare window specialists in Manchester?", copy: "Describe the openings and property once, then compare interested Manchester window specialists and their product and fitting quotes.", buttonLabel: "Get Manchester window quotes" },
});

export const MANCHESTER_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesManchester,
  cleanersManchester,
  tilersManchester,
  heatingEngineersManchester,
  locksmithsManchester,
  pestControllersManchester,
  treeSurgeonsManchester,
  architectsManchester,
  plasterersManchester,
  kitchenFittersManchester,
  bathroomSpecialistsManchester,
  drainageSpecialistsManchester,
  drivewaySpecialistsManchester,
  windowSpecialistsManchester,
];

export function getManchesterServiceContent(service: string, city: string) {
  return MANCHESTER_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
