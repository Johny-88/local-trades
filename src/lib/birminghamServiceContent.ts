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

const BIRMINGHAM_AREAS = [
  "Edgbaston",
  "Harborne",
  "Selly Oak",
  "Kings Heath",
  "Hall Green",
  "Erdington",
  "Yardley",
  "Sutton Coldfield",
] as const;

type BirminghamProfileInput = {
  serviceSlug: ServiceSlug;
  serviceName: string;
  servicePlural: string;
  postcodeExample?: string;
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

function makeBirminghamProfile(input: BirminghamProfileInput): LocalServicePageContent {
  return {
    serviceSlug: input.serviceSlug,
    serviceName: input.serviceName,
    servicePlural: input.servicePlural,
    locationSlug: "birmingham",
    locationName: "Birmingham",
    region: "West Midlands",
    postcodeExample: input.postcodeExample ?? "B15 2TT",
    hero: {
      eyebrow: `${input.servicePlural} Birmingham`,
      title: `Find ${input.servicePlural.toLowerCase()} in Birmingham`,
      copy: input.heroCopy,
      points: ["Free for homeowners", "Up to 3 local responses", "No obligation to hire"],
    },
    answer: input.answer,
    jobs: input.jobs,
    costs: input.costs,
    localContext: input.localContext,
    areas: {
      title: `${input.servicePlural} covering Birmingham`,
      items: BIRMINGHAM_AREAS,
      ...input.areas,
    },
    how: input.how,
    choose: input.choose,
    faq: input.faq,
    cta: input.cta,
  };
}

const cleanersBirmingham = makeBirminghamProfile({
  serviceSlug: "cleaners",
  serviceName: "Cleaner",
  servicePlural: "Cleaners",
  heroCopy: "Need regular domestic cleaning, a one-off deep clean or help before a tenancy handover? Describe the property and cleaning job once, then compare Birmingham cleaners who are interested in the work.",
  answer: {
    title: "Looking for a cleaner near you in Birmingham?",
    copy: "Enter the postcode, explain the size of the property and say whether the clean is regular, one-off or specialist. Suitable cleaners who cover that part of Birmingham can then decide whether the job fits their availability and experience.",
  },
  jobs: [
    { title: "Regular domestic cleaning", text: "Recurring cleaning for kitchens, bathrooms, bedrooms and shared living areas, with the frequency agreed before work starts.", paths: HOUSE },
    { title: "Deep cleaning", text: "More detailed one-off cleaning where a property needs extra time, attention and a clearly agreed room-by-room scope.", paths: CHECK },
    { title: "End-of-tenancy cleaning", text: "Cleaning before a tenancy handover, move-in or move-out where timing and the expected standard should be clear in advance.", paths: DOC },
    { title: "Carpet & upholstery cleaning", text: "Specialist cleaning for carpets, rugs and upholstery using equipment and products suited to the material.", paths: WATER },
    { title: "Window cleaning", text: "Internal or external window cleaning where access, height and the number of panes affect the job.", paths: WINDOW },
    { title: "Office & commercial cleaning", text: "Cleaning for smaller workplaces and premises, including recurring schedules or one-off cleans around business hours.", paths: GRID },
  ],
  costs: {
    title: "How much does cleaning cost?",
    intro: "Cleaning prices vary with property size, frequency, condition and whether specialist equipment is required. Current 2026 UK guides provide these useful benchmarks:",
    prices: [
      { value: "£20–£40/hr", label: "Typical cleaner hourly rate" },
      { value: "£100–£350", label: "End-of-tenancy clean" },
      { value: "£140–£175", label: "2-bed carpet clean" },
      { value: "£210–£260", label: "3-bed semi carpet clean" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Actual Birmingham prices depend on property size, condition, access, parking, frequency and whether products or specialist equipment are included.",
    quoteTitle: "Make cleaning quotes easier to compare",
    quoteIntro: "A cleaning quote only makes sense when each cleaner is pricing the same rooms, tasks and level of cleaning.",
    quoteTips: [
      "List the rooms and approximate property size.",
      "Say whether the job is regular, deep, end-of-tenancy or specialist cleaning.",
      "Mention carpets, ovens, windows, heavy build-up or other extras separately.",
      "Confirm whether products, equipment and any waste removal are included.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham cleaning context",
    title: "Two Birmingham details that can affect a cleaning job",
    intro: "Cleaning work can be shaped by the type of property and by what happens to waste removed during paid work. These Birmingham-specific points are worth agreeing before the visit.",
    items: [
      {
        title: "A large part of Birmingham has selective private-rental licensing",
        text: "Birmingham City Council's current selective licensing scheme covers 25 of the city's 69 wards and has applied since June 2023. The licence itself is not a cleaning requirement, but it is a useful reminder that Birmingham has a substantial private-rental market where end-of-tenancy, move-in and handover cleans often work to fixed dates.",
        source: { label: "Birmingham City Council — selective licensing", url: "https://www.birmingham.gov.uk/info/20175/private_housing/2649/" },
      },
      {
        title: "Paid work can change how removed waste must be handled",
        text: "Birmingham City Council treats business and trade waste separately from ordinary resident household recycling-centre use. If a cleaning job also includes taking away rubbish, bulky items or waste generated as part of the paid service, agree who is responsible for disposal and whether extra charges apply.",
        source: { label: "Birmingham City Council — household recycling centre FAQs", url: "https://www.birmingham.gov.uk/info/50277/household_recycling_centres/2585/" },
      },
    ],
  },
  areas: {
    intro: "Enter the postcode for the property so the request can be matched with cleaners who cover that part of Birmingham. Examples of areas include:",
    sideTitle: "Property type changes the cleaning brief",
    sideCopy: "A compact flat, a student house, a family semi and a larger detached home can all need very different amounts of time. Give the cleaner the actual room count and any priority areas rather than relying only on the postcode.",
    noteLead: "Be specific about extras.",
    noteText: "Ovens, carpets, windows, appliances and heavy build-up are often priced differently from a standard clean.",
  },
  how: {
    title: "Post the cleaning job once, then compare interested cleaners",
    intro: "Give enough detail for cleaners to understand the property and expected standard before they decide whether to respond.",
    steps: [
      { title: "Describe the clean", text: "Add the postcode, property size, rooms, cleaning type, preferred date and any specialist tasks." },
      { title: "Hear from interested cleaners", text: "Suitable Birmingham cleaners can review the job and up to three interested professionals can respond." },
      { title: "Compare the details", text: "Check profiles, verified reviews, what each quote includes and the proposed timing before choosing." },
    ],
  },
  choose: {
    title: "What should you check before hiring a cleaner?",
    intro: "The lowest price is not useful if the scope is different. Agree what will actually be cleaned and what the cleaner is bringing with them.",
    benefits: [
      { title: "Agree the checklist", text: "Confirm rooms, surfaces and any deep-clean tasks so both sides understand what completion means.", paths: CHECK },
      { title: "Confirm products and equipment", text: "Ask whether the cleaner supplies products, vacuuming equipment and specialist machinery where needed.", paths: TOOLS },
      { title: "Clarify disposal and access", text: "If rubbish is being removed, agree the disposal arrangement; also mention keys, parking and building access before the visit.", paths: SHIELD },
    ],
  },
  faq: [
    ["How much does a cleaner cost in Birmingham?", "There is no single Birmingham rate. MyJobQuote currently shows a broad cleaner rate of about £20–£40 per hour, while end-of-tenancy work commonly falls around £100–£350 depending on property size and condition."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Give the property size, handover date and any specific checklist or landlord/agent requirements so interested cleaners can price the same scope."],
    ["Does Birmingham selective licensing mean I must book a professional cleaner?", "No. The council's selective licensing scheme applies to designated private-rented properties; it does not itself create a general rule that a professional cleaner must be hired. It is included here as relevant local rental-market context."],
    ["Are the reviews genuine?", "MyJobQuote says reviews on trade profiles come from users who had work completed by a verified trade member through its closed-loop feedback system."],
    ["Do I have to hire a cleaner who responds?", "No. Posting the job is free for homeowners and there is no obligation to hire. Up to three interested local professionals can respond, and you choose whether to proceed."],
  ],
  cta: { title: "Ready to compare cleaners in Birmingham?", copy: "Post the cleaning job once, hear from interested local cleaners and compare their reviews and quotes before deciding who to hire.", buttonLabel: "Get Birmingham cleaning quotes" },
});

const tilersBirmingham = makeBirminghamProfile({
  serviceSlug: "tilers",
  serviceName: "Tiler",
  servicePlural: "Tilers",
  heroCopy: "Planning bathroom tiles, a kitchen splashback, a new tiled floor or repairs? Describe the surfaces, tile type and room once, then compare tilers covering Birmingham.",
  answer: {
    title: "Looking for a tiler near you in Birmingham?",
    copy: "Enter the postcode and explain what needs tiling, the approximate area, tile material and condition of the existing surface. Interested Birmingham tilers can then judge whether the preparation and finish match their experience.",
  },
  jobs: [
    { title: "Bathroom tiling", text: "Wall and floor tiling around baths, showers, basins and wet areas, including preparation and finishing details.", paths: GRID },
    { title: "Kitchen splashbacks", text: "Ceramic, porcelain, mosaic or other wall tiles fitted around worktops, sinks and kitchen units.", paths: HOUSE },
    { title: "Floor tiling", text: "Tiled floors over a suitably prepared, level and stable base in kitchens, hallways and other rooms.", paths: GRID },
    { title: "Wall tiling", text: "Feature walls and practical tiled finishes where layout, cuts, corners and edge trims need to be planned.", paths: CHECK },
    { title: "Repairs & regrouting", text: "Replacing damaged tiles, renewing failed grout or sealant and repairing smaller areas where the substrate remains suitable.", paths: TOOLS },
    { title: "External tiling", text: "Outdoor tiled areas using materials, adhesives and drainage details suitable for external exposure and frost conditions.", paths: WATER },
  ],
  costs: {
    title: "How much does tiling cost?",
    intro: "Tile size, material, pattern and surface preparation all affect labour. Current 2026 UK MyJobQuote guidance gives these useful reference points:",
    prices: [
      { value: "£400–£500", label: "Around 8m² floor tiling" },
      { value: "£500–£600", label: "Around 12m² floor tiling" },
      { value: "£500–£800", label: "Typical bathroom tiling" },
      { value: "£20–£40/m²", label: "Bathroom tiling labour guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham quotes can move significantly with tile material, large-format cuts, old-tile removal, levelling, waterproofing and room geometry.",
    quoteTitle: "Compare the preparation as well as the tile laying",
    quoteIntro: "Two tiling quotes can look very different when one includes removal, levelling and waterproofing and the other assumes the surface is ready to tile.",
    quoteTips: [
      "Give the approximate square metres and tile dimensions.",
      "Say whether old tiles or flooring need removing.",
      "Describe cracks, uneven surfaces, plasterboard, screed or timber floors.",
      "Confirm trims, grout, tanking, adhesive and waste removal in the scope.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham tiling context",
    title: "Two Birmingham property details worth checking before tiling",
    intro: "Birmingham contains a broad mix of terraces, semis and flats, and wet-room finishes can also be affected by moisture problems. Both points can change the preparation required before a tile is laid.",
    items: [
      {
        title: "Birmingham's housing mix means substrates vary widely",
        text: "Birmingham City Observatory's Census 2021 housing briefing reports 35.6% semi-detached homes, 27.8% terraced homes and 21.0% purpose-built flats or tenements. For a tiler, that mix can mean everything from older solid walls and uneven floors to modern boards and apartment access restrictions, so the existing surface matters as much as the tile choice.",
        source: { label: "Birmingham City Observatory — Census 2021 Housing", url: "https://www.cityobservatory.birmingham.gov.uk/explore/dataset/census-2021-factsheets/files/d3acd16ff3a7a90a5882446174cb4d1b/download/" },
      },
      {
        title: "Resolve moisture problems before covering the surface",
        text: "Birmingham City Council's damp and mould guidance highlights leaks, bathing, cooking and inadequate ventilation as common sources of moisture. In bathrooms and kitchens, tiling over an unresolved damp source can hide rather than solve the underlying problem, so leaks and ventilation should be checked first.",
        source: { label: "Birmingham City Council — damp, condensation and mould", url: "https://www.birmingham.gov.uk/info/20006/housing/2661/damp_condensation_and_mould" },
      },
    ],
  },
  areas: {
    intro: "Use the property postcode to find tilers who cover the relevant part of Birmingham. Common areas homeowners may be renovating include:",
    sideTitle: "Photos of the existing surface are useful",
    sideCopy: "A tiler can price much more sensibly when they can see the wall or floor condition, corners, pipe penetrations and the tile format rather than receiving only the room dimensions.",
    noteLead: "Preparation drives the finish.",
    noteText: "If a wall or floor is not flat, stable and dry enough, extra preparation can be necessary before tiling begins.",
  },
  how: {
    title: "Describe the tiling once, then compare interested tilers",
    intro: "Share the tile type and surface condition early so responses are based on a realistic scope.",
    steps: [
      { title: "Describe the area", text: "Add the postcode, room, approximate square metres, tile type and photos of the current surface." },
      { title: "Hear from suitable tilers", text: "Up to three interested professionals covering Birmingham can respond to the job." },
      { title: "Compare preparation and finish", text: "Check verified reviews and whether each quote includes preparation, materials, trims, grout and disposal." },
    ],
  },
  choose: {
    title: "What should you check before hiring a tiler?",
    intro: "Good tiling depends on what happens beneath the finished surface as well as how straight the grout lines look.",
    benefits: [
      { title: "Check substrate preparation", text: "Ask how uneven, cracked, damp or flexible surfaces will be prepared before tiling.", paths: TOOLS },
      { title: "Confirm wet-area protection", text: "For showers and wet areas, clarify the waterproofing or tanking system rather than relying on tiles and grout alone.", paths: WATER },
      { title: "Agree finishing details", text: "Confirm layout, grout colour, trims, silicone joints and how visible cuts or edges will be handled.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does a tiler cost in Birmingham?", "The final price depends on tile size, material and preparation. Current MyJobQuote guidance puts an 8m² floor at roughly £400–£500, a 12m² floor at £500–£600 and many bathroom tiling jobs around £500–£800."],
    ["Should old tiles be removed before I ask for quotes?", "Not necessarily. Show the existing surface in photos and tell the tiler what is there. They can advise whether removal is needed or whether the existing substrate can be prepared safely."],
    ["Can a tiler tile over damp?", "The cause of active damp or leaking should be resolved first. Birmingham City Council's guidance identifies leaks and inadequate ventilation among common moisture sources; covering the symptoms does not remove the cause."],
    ["How many Birmingham tilers can respond?", "Up to three interested local professionals can respond to the same job, giving you a manageable set of options to compare."],
    ["Do I have to hire one of them?", "No. Posting is free for homeowners and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare tilers in Birmingham?", copy: "Describe the surfaces and tiles once, then compare interested Birmingham tilers, verified reviews and quotes before choosing.", buttonLabel: "Get Birmingham tiling quotes" },
});

const heatingEngineersBirmingham = makeBirminghamProfile({
  serviceSlug: "heating-engineers",
  serviceName: "Heating Engineer",
  servicePlural: "Heating Engineers",
  heroCopy: "Boiler problem, cold radiators, heating controls or a larger system upgrade? Describe the symptoms and property once, then compare suitable heating engineers covering Birmingham.",
  answer: {
    title: "Looking for a heating engineer near you in Birmingham?",
    copy: "Enter the postcode and explain the heating system, symptoms, boiler make if known and how urgent the problem is. Suitable heating engineers can then decide whether the job matches their qualifications and availability.",
  },
  jobs: [
    { title: "Boiler servicing & repairs", text: "Routine servicing, fault finding and repair work for boilers, subject to the engineer holding the appropriate registration for regulated gas work.", paths: TOOLS },
    { title: "Radiators", text: "Cold spots, leaks, valve issues, replacements and repositioning where pipework changes are needed.", paths: GRID },
    { title: "Power flushing", text: "System cleaning where sludge or circulation problems are contributing to poor heating performance.", paths: WATER },
    { title: "Heating controls", text: "Thermostats, programmers and smart controls used to manage temperatures and heating schedules more effectively.", paths: CLOCK },
    { title: "Boiler replacement", text: "Assessment and replacement of an existing boiler where repair is uneconomic or the system is being upgraded.", paths: HOUSE },
    { title: "Heat pumps & system upgrades", text: "Larger efficiency projects where emitters, controls, insulation and the overall heat demand need to be considered together.", paths: LEAF },
  ],
  costs: {
    title: "How much does heating work cost?",
    intro: "Heating prices vary from a straightforward service to a full system change. Current 2026 MyJobQuote guidance gives these broad benchmarks:",
    prices: [
      { value: "£85–£110", label: "Midlands boiler service guide" },
      { value: "~£400", label: "Typical power flush" },
      { value: "~£200", label: "New radiator guide" },
      { value: "~£2,750", label: "Typical combi boiler installation" },
    ],
    sourceNote: "Indicative UK and Midlands guidance checked August 2026 from MyJobQuote. Boiler type, system condition, access, controls, radiator count and required pipework can all change a Birmingham quote.",
    quoteTitle: "Compare the diagnosis, not only the headline price",
    quoteIntro: "A heating quote should make clear whether the engineer is repairing a fault, replacing a component or proposing a wider system improvement.",
    quoteTips: [
      "Give the boiler make, model and fuel type if known.",
      "Describe error codes, noises, leaks and which rooms are affected.",
      "Say whether the problem is intermittent or complete loss of heating or hot water.",
      "For gas work, check that the engineer is appropriately Gas Safe registered for the work involved.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham heating context",
    title: "Birmingham is actively pushing whole-home energy upgrades",
    intro: "Current Birmingham programmes show why heating decisions increasingly sit alongside insulation, controls and the overall energy performance of the property.",
    items: [
      {
        title: "The Warm Homes Local Grant uses a fabric-first approach",
        text: "Birmingham City Council's 2025–2028 Warm Homes Local Grant programme targets 625 private homes in priority areas including Balsall Heath, Bromford, Castle Vale, Sparkbrook, Tyseley and Hay Mills. The council describes a fabric-first approach and lists measures such as heat pumps, smart heating controls and insulation, reinforcing the value of looking at the whole home rather than one appliance in isolation.",
        source: { label: "Birmingham City Council — Warm Homes Local Grant 2025 to 2028", url: "https://www.birmingham.gov.uk/info/20006/housing/3168/warm_homes_local_grant_2025_to_2028/" },
      },
      {
        title: "More than 2,000 council homes have already been retrofitted",
        text: "A Birmingham City Council update in July 2025 reported retrofit work across more than 2,000 households, including insulation, windows, doors, storage heaters and smart hot-water measures. For private homeowners, the practical lesson is similar: heating performance can depend on emitters, controls and heat loss as well as the boiler itself.",
        source: { label: "Birmingham City Council — council-home retrofit project", url: "https://www.birmingham.gov.uk/news/article/1597/retrofit_project_that_has_made_council_homes_warmer_and_has_saved_tenants_money_wins_award" },
      },
    ],
  },
  areas: {
    intro: "Heating engineers may cover different parts of the city and emergency availability can be very local. Enter the actual property postcode; examples of Birmingham areas include:",
    sideTitle: "Give the system details before the visit",
    sideCopy: "Boiler make, fuel type, radiator count and the exact symptoms can help an engineer arrive better prepared and distinguish a local repair from a wider system problem.",
    noteLead: "Gas work is regulated.",
    noteText: "If the work involves gas appliances or gas pipework, use an engineer who is appropriately Gas Safe registered for that category of work.",
  },
  how: {
    title: "Describe the heating problem once, then compare suitable engineers",
    intro: "Clear symptoms and system information help qualified professionals decide whether they can take the job.",
    steps: [
      { title: "Explain the system and fault", text: "Add the postcode, boiler/system details, symptoms, error codes and preferred timing." },
      { title: "Hear from interested engineers", text: "Up to three suitable heating professionals covering Birmingham can respond." },
      { title: "Check qualifications and scope", text: "Compare verified reviews, relevant registration, diagnosis and what is included in each quote." },
    ],
  },
  choose: {
    title: "What should you check before hiring a heating engineer?",
    intro: "The correct qualification and a clear diagnosis matter more than choosing the first price you see.",
    benefits: [
      { title: "Verify the right registration", text: "For gas work, check the engineer and the relevant work category on the Gas Safe Register rather than relying only on a logo.", paths: SHIELD },
      { title: "Understand the diagnosis", text: "Ask what has failed, what is being replaced and whether the proposed work treats the cause or only the symptom.", paths: TOOLS },
      { title: "Consider the whole system", text: "For upgrades, discuss controls, radiator sizing, system cleanliness and property heat loss as well as the heat source.", paths: LEAF },
    ],
  },
  faq: [
    ["How much does a boiler service cost in Birmingham?", "MyJobQuote's current Midlands guide is roughly £85–£110 for a boiler service. Repairs or parts are additional and actual prices vary by appliance and access."],
    ["How much is a power flush?", "MyJobQuote's 2026 guide gives an average of around £400, but system size and condition can move the price."],
    ["Does Birmingham have support for heating upgrades?", "Birmingham City Council currently runs the Warm Homes Local Grant 2025–2028 for eligible private homes in priority areas. Eligibility and available measures should be checked directly with the council."],
    ["Do heating engineers need Gas Safe registration?", "Anyone carrying out regulated gas work in the UK must be appropriately Gas Safe registered for that work. Non-gas heating tasks can have different competency requirements."],
    ["Do I have to hire an engineer who responds?", "No. Up to three interested local professionals can respond, and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare heating engineers in Birmingham?", copy: "Describe the system and symptoms once, then compare suitable Birmingham heating engineers, reviews and quotes.", buttonLabel: "Get Birmingham heating quotes" },
});

const locksmithsBirmingham = makeBirminghamProfile({
  serviceSlug: "locksmiths",
  serviceName: "Locksmith",
  servicePlural: "Locksmiths",
  heroCopy: "Locked out, changing locks or improving door security? Describe the door, lock and urgency once, then compare locksmiths who cover Birmingham.",
  answer: {
    title: "Looking for a locksmith near you in Birmingham?",
    copy: "Enter the postcode, say whether the job is urgent and describe the door and lock if you can. Suitable locksmiths can then assess likely access, replacement parts and call-out requirements before responding.",
  },
  jobs: [
    { title: "Emergency lockouts", text: "Urgent help regaining access when keys are lost, broken or locked inside, subject to identity and occupancy checks.", paths: LOCK },
    { title: "Lock replacement", text: "Replacing worn, damaged or unsuitable cylinders, night latches and deadlocks with appropriate alternatives.", paths: TOOLS },
    { title: "uPVC multipoint locks", text: "Diagnosis and repair of handles, gearboxes and multi-point locking mechanisms on uPVC or composite doors.", paths: GRID },
    { title: "Burglary repairs", text: "Making doors and locks secure after forced entry, including temporary or permanent repairs where appropriate.", paths: SHIELD },
    { title: "Door security upgrades", text: "Improving cylinders, locks, keeps and reinforcement after a move or as part of a wider security review.", paths: SHIELD },
    { title: "Window locks", text: "Repairing or replacing accessible window locking hardware where security or operation has deteriorated.", paths: WINDOW },
  ],
  costs: {
    title: "How much does a locksmith cost?",
    intro: "The lock type, urgency and time of attendance can make a large difference. MyJobQuote's current 2026 guidance gives these broad figures:",
    prices: [
      { value: "~£100", label: "Average lock change" },
      { value: "£100–£150", label: "Standard Yale/deadlock replacement" },
      { value: "£50–£150/hr", label: "Typical locksmith labour range" },
      { value: "+£50–£100", label: "Possible emergency call-out premium" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham emergency, evening and specialist multipoint-lock work can cost more, particularly where replacement parts are required.",
    quoteTitle: "Ask for the call-out and parts structure",
    quoteIntro: "For urgent work, a low labour figure can be misleading if the call-out, drilling, replacement cylinder or out-of-hours premium is separate.",
    quoteTips: [
      "Describe the door material and lock type if known.",
      "Send a clear photo of the handle, cylinder and edge of the door where safe to do so.",
      "Ask what the call-out includes before attendance.",
      "Confirm the specification of any replacement lock or cylinder.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham door security",
    title: "West Midlands Police guidance is useful when choosing replacement security",
    intro: "A locksmith job is often about more than opening a door. Local police guidance highlights the door, frame and lock as one security system.",
    items: [
      {
        title: "uPVC security depends on using the multipoint lock correctly",
        text: "West Midlands Police advises that on many uPVC doors the handle should be lifted to engage the multi-point locking system before the key is turned, and the key should then be removed. If a door will not lock properly even when operated correctly, the mechanism or alignment may need professional attention.",
        source: { label: "West Midlands Police — door and window lock advice", url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/" },
      },
      {
        title: "The frame and hardware matter as well as the cylinder",
        text: "West Midlands Police's door-security advice recommends considering the complete door, frame and locking hardware and refers homeowners to recognised standards such as PAS 24. It also specifically mentions frame-reinforcement products such as a Birmingham Bar, so a sensible security upgrade may involve more than simply fitting a new key cylinder.",
        source: { label: "West Midlands Police — door security advice", url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/" },
      },
    ],
  },
  areas: {
    intro: "For a call-out, the exact Birmingham postcode matters because travel time and urgent availability vary. Areas may include:",
    sideTitle: "Urgent jobs need precise information",
    sideCopy: "Tell the locksmith whether you are locked out, the door is insecure, a key has snapped or a multipoint mechanism has failed. That helps them judge tools, parts and urgency before travelling.",
    noteLead: "Expect identity checks.",
    noteText: "A responsible locksmith may ask for evidence that you are entitled to access the property before opening a locked door.",
  },
  how: {
    title: "Describe the lock problem once, then compare available locksmiths",
    intro: "Door type, urgency and photos can make the first response much more useful.",
    steps: [
      { title: "Explain the lock and urgency", text: "Add the postcode, door material, symptoms and whether the property is currently insecure." },
      { title: "Hear from available locksmiths", text: "Suitable professionals covering Birmingham can assess the job and up to three can respond." },
      { title: "Compare call-out and solution", text: "Check verified reviews, attendance timing, parts and the replacement specification before agreeing work." },
    ],
  },
  choose: {
    title: "What should you check before hiring a locksmith?",
    intro: "For both emergency access and planned security work, understand what will be done before the lock is drilled or replaced.",
    benefits: [
      { title: "Confirm the total charging structure", text: "Ask about call-out, hourly labour, out-of-hours premiums and replacement parts before attendance where possible.", paths: DOC },
      { title: "Ask about non-destructive entry", text: "For a lockout, ask whether non-destructive methods are appropriate before drilling or replacing hardware.", paths: LOCK },
      { title: "Check the security standard", text: "For replacement locks, ask what standard or specification is being fitted and whether the frame or door also needs attention.", paths: SHIELD },
    ],
  },
  faq: [
    ["How much does a locksmith cost in Birmingham?", "MyJobQuote's current guide puts an average lock change around £100, with many standard Yale or deadlock replacements around £100–£150. Emergency attendance and specialist mechanisms can cost more."],
    ["Can a locksmith repair a uPVC multipoint lock?", "Yes, depending on the fault. Handles, alignment, gearboxes and other components may be repairable or replaceable without changing the entire door."],
    ["What security standard should I ask for?", "The right specification depends on the door. West Midlands Police recommends considering recognised door and lock standards as part of the complete door-and-frame system."],
    ["How many Birmingham locksmiths can respond?", "Up to three interested local professionals can respond to the job."],
    ["Am I required to hire one?", "No. There is no obligation to hire after posting the job."],
  ],
  cta: { title: "Ready to compare locksmiths in Birmingham?", copy: "Describe the lock, door and urgency once, then compare interested Birmingham locksmiths and their proposed solution.", buttonLabel: "Get Birmingham locksmith quotes" },
});

const pestControllersBirmingham = makeBirminghamProfile({
  serviceSlug: "pest-controllers",
  serviceName: "Pest Controller",
  servicePlural: "Pest Controllers",
  heroCopy: "Rats, mice, wasps, bed bugs or another infestation? Describe what you have seen, where the activity is and who lives in the property, then compare pest controllers covering Birmingham.",
  answer: {
    title: "Looking for pest control near you in Birmingham?",
    copy: "Enter the postcode and describe sightings, droppings, bites, nests, noises or damage. Mention children, pets and any previous treatment so suitable Birmingham pest professionals can judge the likely inspection and treatment needed.",
  },
  jobs: [
    { title: "Rats & mice", text: "Inspection, treatment and practical proofing advice for rodent activity in homes, gardens and outbuildings.", paths: BUG },
    { title: "Wasp nests", text: "Assessment and treatment of active wasp nests where the location and access can be reached safely.", paths: BUG },
    { title: "Bed bugs", text: "Inspection and treatment plans for suspected bed-bug activity, often requiring preparation and follow-up visits.", paths: HOUSE },
    { title: "Cockroaches, ants & fleas", text: "Targeted treatment based on the pest species, extent of activity and affected rooms or surfaces.", paths: BUG },
    { title: "Commercial pest control", text: "Monitoring and treatment plans for shops, offices, hospitality and other premises where ongoing records may be needed.", paths: DOC },
    { title: "Proofing & prevention", text: "Identifying likely entry points and practical changes that reduce the chance of reinfestation after treatment.", paths: SHIELD },
  ],
  costs: {
    title: "How much does pest control cost?",
    intro: "Correct identification matters because treatments differ widely. MyJobQuote's current 2026 guide gives these broad domestic ranges:",
    prices: [
      { value: "£75–£150", label: "Wasp nest treatment" },
      { value: "£120–£240", label: "Rodent treatment" },
      { value: "£100–£280", label: "Standard bed-bug treatment" },
      { value: "£1,000–£1,500", label: "Heat treatment up to 3-bed home" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. The pest species, size of infestation, number of visits, proofing work and preparation requirements can all change Birmingham prices.",
    quoteTitle: "Compare the treatment plan and follow-up",
    quoteIntro: "A single visit is not always the whole solution. Ask what is being treated, how many visits are expected and what you need to do between them.",
    quoteTips: [
      "Describe exactly what you have seen and where.",
      "Mention children, pets, fish tanks and vulnerable occupants.",
      "Ask whether follow-up visits are included in the price.",
      "Clarify whether proofing or entry-point repairs are included or separate.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham pest control",
    title: "Birmingham's council route differs depending on the pest",
    intro: "The city currently provides a specific rat-treatment route, while other infestations may need a different service. Knowing that distinction can save time before you book.",
    items: [
      {
        title: "Birmingham currently offers a council rat-treatment booking route",
        text: "Birmingham City Council's pest page, updated in May 2026, allows eligible Birmingham homeowners and council tenants to book rat treatment and specifically asks for the location of the activity plus details of children, pets and fish. Those same details are useful when briefing any private pest controller because they affect safe treatment planning.",
        source: { label: "Birmingham City Council — report a rat problem", url: "https://www.birmingham.gov.uk/reportpest" },
      },
      {
        title: "Other common pests are handled differently",
        text: "The council's current common-pests information covers ants, bed bugs, cockroaches, fleas, flies, mice and other infestations, while its booking service currently focuses on rats and points residents towards professional pest-control options for other problems. Check the current council route before assuming a particular infestation is covered.",
        source: { label: "Birmingham City Council — dealing with common pests", url: "https://www.birmingham.gov.uk/info/20140/environmental_concerns_and_requests/3130/dealing_with_common_pests" },
      },
    ],
  },
  areas: {
    intro: "Pest controllers may schedule visits by postcode and infestation type. Enter the exact Birmingham property location; example areas include:",
    sideTitle: "Identification comes before treatment",
    sideCopy: "Photos, droppings, where activity occurs and the time of day can help a professional narrow down the pest. Avoid moving infested items between rooms before you understand the treatment plan.",
    noteLead: "Tell the controller about pets and children.",
    noteText: "Treatment products, preparation and re-entry times can depend on who lives in the property.",
  },
  how: {
    title: "Describe the pest signs once, then compare treatment options",
    intro: "Good pest control begins with identifying the species and extent of activity rather than choosing a treatment from a price list.",
    steps: [
      { title: "Describe the evidence", text: "Add the postcode, sightings, damage, rooms affected, photos and any previous treatment." },
      { title: "Hear from suitable controllers", text: "Up to three interested pest professionals covering Birmingham can respond." },
      { title: "Compare treatment and follow-up", text: "Check verified reviews, number of visits, preparation instructions and whether proofing is included." },
    ],
  },
  choose: {
    title: "What should you check before hiring a pest controller?",
    intro: "The correct treatment, safe preparation and enough follow-up matter more than a quick spray-and-leave visit.",
    benefits: [
      { title: "Confirm the pest identification", text: "Ask what evidence supports the diagnosis before committing to a treatment programme.", paths: BUG },
      { title: "Understand safety instructions", text: "Check preparation, re-entry times and precautions for children, pets, food areas and fish tanks.", paths: SHIELD },
      { title: "Ask about follow-up and proofing", text: "Find out whether repeat visits, monitoring and entry-point recommendations are included in the quoted price.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does pest control cost in Birmingham?", "It depends on the pest and number of visits. MyJobQuote currently gives about £75–£150 for a wasp nest and £120–£240 for rodent treatment, while bed-bug work can vary much more widely."],
    ["Does Birmingham City Council treat rats?", "The council currently has a rat-treatment booking route for eligible Birmingham homeowners and council tenants. Check the live council page for eligibility and current charges or conditions."],
    ["What about bed bugs, mice or cockroaches?", "The council's current public information treats these as common pests but its dedicated booking route is focused on rats, so a private pest controller may be appropriate for other infestations."],
    ["How many pest controllers can respond?", "Up to three interested local professionals can respond to your job."],
    ["Do I have to hire one?", "No. There is no obligation to hire after posting the job."],
  ],
  cta: { title: "Ready to compare pest controllers in Birmingham?", copy: "Describe the pest signs and affected areas once, then compare interested Birmingham pest professionals and treatment plans.", buttonLabel: "Get Birmingham pest-control quotes" },
});

const treeSurgeonsBirmingham = makeBirminghamProfile({
  serviceSlug: "tree-surgeons",
  serviceName: "Tree Surgeon",
  servicePlural: "Tree Surgeons",
  heroCopy: "Need a tree pruned, reduced, removed or a stump ground out? Describe the tree, access and nearby buildings once, then compare tree surgeons covering Birmingham.",
  answer: {
    title: "Looking for a tree surgeon near you in Birmingham?",
    copy: "Enter the postcode and include clear photos showing the whole tree, surrounding buildings, boundaries and access. Suitable Birmingham tree surgeons can then judge the likely equipment, crew and permission checks before responding.",
  },
  jobs: [
    { title: "Tree pruning", text: "Selective pruning to manage damaged growth, clearance or shape while retaining an appropriate tree structure.", paths: TREE },
    { title: "Crown reduction", text: "Reducing the overall crown where appropriate, with the extent of reduction agreed before work starts.", paths: TREE },
    { title: "Tree removal", text: "Felling or sectional dismantling where a tree must be removed and nearby property or access affects the method.", paths: TOOLS },
    { title: "Stump grinding", text: "Grinding a remaining stump below ground level after felling so the area can be replanted or resurfaced.", paths: GRID },
    { title: "Deadwood & storm damage", text: "Assessment and removal of unsafe or damaged branches where condition and access need professional judgement.", paths: SHIELD },
    { title: "Hedge & site clearance", text: "Larger hedge reduction and vegetation clearance where green-waste volumes and access need to be planned.", paths: LEAF },
  ],
  costs: {
    title: "How much does tree work cost?",
    intro: "Height, condition, access, rigging and waste volume are major cost drivers. Current 2026 MyJobQuote guidance gives these broad tree-removal benchmarks:",
    prices: [
      { value: "£150–£350", label: "Small tree under about 25ft" },
      { value: "£400–£700", label: "Medium tree around 25–50ft" },
      { value: "£650–£1,200", label: "Large tree around 50–75ft" },
      { value: "~£225", label: "Average stump removal guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham prices can increase with restricted garden access, nearby buildings, traffic management, protected-tree permissions, specialist rigging and timber disposal.",
    quoteTitle: "Compare the method, permissions and waste removal",
    quoteIntro: "Tree quotes should make clear what will be cut, how the work will be carried out and what happens to branches, logs and the stump afterwards.",
    quoteTips: [
      "Send full-tree photos plus access from the street or drive.",
      "Mention nearby buildings, roads, cables, sheds and boundaries.",
      "Check whether the tree is protected or within a conservation area before work starts.",
      "Confirm whether all arisings, logs and stump material are removed.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham tree permissions",
    title: "Protected trees and conservation areas can change the timetable",
    intro: "Before accepting a tree-work date, check whether the tree is protected. Birmingham has both Tree Preservation Orders and conservation-area controls.",
    items: [
      {
        title: "Protected-tree consent can take several weeks",
        text: "Birmingham City Council says consent is required for work to trees protected by a Tree Preservation Order, and its current application guidance says decisions are normally made within about six to eight weeks. A tree surgeon should not simply assume pruning or removal can start immediately because the tree is on private land.",
        source: { label: "Birmingham City Council — apply for tree works consent", url: "https://www.birmingham.gov.uk/info/20184/tree_preservation/898/apply_for_tree_works_consent" },
      },
      {
        title: "Birmingham has 29 conservation areas",
        text: "The council lists 29 conservation areas across Birmingham. Trees in conservation areas receive additional protection, and the council's planning guidance says written notice is generally required before carrying out works to trees that are not already covered by a Tree Preservation Order.",
        source: { label: "Birmingham City Council — Birmingham conservation areas", url: "https://www.birmingham.gov.uk/info/20055/conservation_areas/13/birminghams_conservation_areas/2" },
      },
    ],
  },
  areas: {
    intro: "Tree surgeons need the real postcode and access details because equipment, travel and permissions can vary across Birmingham. Example areas include:",
    sideTitle: "Access can change the whole method",
    sideCopy: "A tree at the front of a property with vehicle access is a different job from a large tree behind a terraced house with only a narrow side passage. Show the access route in photos as well as the tree itself.",
    noteLead: "Permission comes before cutting.",
    noteText: "If a TPO or conservation-area control applies, make sure the correct consent or notice process is completed before work begins.",
  },
  how: {
    title: "Describe the tree once, then compare interested tree surgeons",
    intro: "Good photos and permission information help professionals price the real method rather than guess from tree height alone.",
    steps: [
      { title: "Show the tree and access", text: "Add the postcode, photos, approximate height, desired work and any known protection status." },
      { title: "Hear from suitable tree surgeons", text: "Up to three interested professionals covering Birmingham can respond." },
      { title: "Compare method and disposal", text: "Check reviews, insurance, permission checks, crew/equipment and whether all waste is included." },
    ],
  },
  choose: {
    title: "What should you check before hiring a tree surgeon?",
    intro: "Tree work can involve height, heavy timber and neighbouring property, so competence and planning matter.",
    benefits: [
      { title: "Check protection status", text: "Confirm whether a TPO or conservation-area notice applies and who is handling the application or notice.", paths: DOC },
      { title: "Ask about insurance and method", text: "For larger work, understand the planned access, lowering or rigging method and suitable insurance cover.", paths: SHIELD },
      { title: "Confirm what leaves the site", text: "Agree whether branches, logs, chips and stump material will be removed or left for you.", paths: TREE },
    ],
  },
  faq: [
    ["How much does tree removal cost in Birmingham?", "MyJobQuote's 2026 guide ranges from roughly £150–£350 for smaller trees to £650–£1,200 for many large 50–75ft trees. Access, rigging and protection status can move the price substantially."],
    ["Do I need permission to cut down a tree in Birmingham?", "Possibly. Trees protected by a TPO require consent, and trees in conservation areas are also subject to controls. Check Birmingham City Council's current rules before work starts."],
    ["How long can TPO consent take?", "Birmingham City Council currently says tree-work consent decisions are normally made within about six to eight weeks."],
    ["Can stump grinding be included?", "Yes, but it should be stated separately in the quote because felling and stump removal are often different operations."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare tree surgeons in Birmingham?", copy: "Show the tree, access and required work once, then compare interested Birmingham tree surgeons and their quotes.", buttonLabel: "Get Birmingham tree quotes" },
});

const architectsBirmingham = makeBirminghamProfile({
  serviceSlug: "architects",
  serviceName: "Architect",
  servicePlural: "Architects",
  heroCopy: "Planning an extension, renovation, conversion or new project? Explain what you want to achieve, the property and project stage once, then compare architects working in Birmingham.",
  answer: {
    title: "Looking for an architect near you in Birmingham?",
    copy: "Enter the postcode and describe the property, project, budget range and whether you need concept design, planning drawings, technical information or a fuller service. Suitable architects can then judge whether the scope matches their experience.",
  },
  jobs: [
    { title: "Home extensions", text: "Concept design and drawings for rear, side, wraparound or multi-storey extensions, subject to the relevant planning route.", paths: HOUSE },
    { title: "Renovations & remodelling", text: "Reworking layouts, circulation and rooms within existing homes, including coordination with structural advice where needed.", paths: GRID },
    { title: "Planning applications", text: "Drawings and supporting design information for projects that require planning permission or prior approval.", paths: DOC },
    { title: "Building Regulations design", text: "More detailed drawings and specifications used to support Building Regulations compliance and construction pricing.", paths: CHECK },
    { title: "Conversions", text: "Design work for loft, garage and other conversions where structure, fire safety, insulation and layout need to be coordinated.", paths: HOUSE },
    { title: "New-build design", text: "Concept, planning and technical design for new homes and other buildings where a wider consultant team may also be required.", paths: TOOLS },
  ],
  costs: {
    title: "How much does an architect cost?",
    intro: "Architect fees depend heavily on the stage of service and project value. Current 2026 MyJobQuote guidance provides these broad examples:",
    prices: [
      { value: "£3,000–£5,000", label: "Extension planning drawings" },
      { value: "£5,000–£8,000", label: "Building regs / tender stage guide" },
      { value: "£2,000–£7,500+", label: "Renovation design guide" },
      { value: "£5,000–£12,000", label: "Full extension service guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham architect fees vary with project value, survey information, planning complexity, conservation constraints, structural input and how far the architect remains involved after approval.",
    quoteTitle: "Compare the same design stages",
    quoteIntro: "An architect quoting only for planning drawings is not offering the same service as one including technical design, tender support and construction-stage involvement.",
    quoteTips: [
      "State whether you need feasibility, planning, Building Regulations or a full service.",
      "Share existing drawings or surveys if you have them.",
      "Mention conservation-area or listed-building status early.",
      "Ask which consultant fees, surveys and application charges are excluded.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham planning context",
    title: "Planning and heritage checks can shape Birmingham design work early",
    intro: "An architect should establish the planning route and site constraints before spending time developing a scheme that cannot follow the assumed route.",
    items: [
      {
        title: "Planning permission and Building Regulations are separate checks",
        text: "Birmingham City Council's current planning guidance explains that some works require planning permission while others may fall within permitted development, and that Building Regulations can still apply separately. For larger rear extensions, prior-approval thresholds can also matter. Clarifying the route early helps define what drawings and submissions the architect actually needs to produce.",
        source: { label: "Birmingham City Council — check if you need planning permission", url: "https://www.birmingham.gov.uk/planningpermissiondoineed" },
      },
      {
        title: "Birmingham has 29 conservation areas plus listed buildings",
        text: "Birmingham City Council lists 29 conservation areas, and heritage controls can affect materials, elevations, windows and extension design. Listed buildings require a separate listed-building-consent check for alterations that affect their character, including many internal changes as well as external work.",
        source: { label: "Birmingham City Council — Birmingham conservation areas", url: "https://www.birmingham.gov.uk/info/20055/conservation_areas/13/birminghams_conservation_areas/2" },
      },
    ],
  },
  areas: {
    intro: "Architects may work citywide, but local planning context and property type differ across Birmingham. Example areas include:",
    sideTitle: "The project stage matters more than the postcode alone",
    sideCopy: "Say whether you are exploring feasibility, preparing a planning application or already have permission and need technical drawings. That lets architects price a comparable stage of work.",
    noteLead: "Check heritage status early.",
    noteText: "A conservation area, listed building or estate-specific control can materially change the design and approval route.",
  },
  how: {
    title: "Describe the project once, then compare architects suited to the brief",
    intro: "The clearer the project stage and desired service, the easier it is to compare architects on a like-for-like basis.",
    steps: [
      { title: "Explain the property and goal", text: "Add the postcode, existing property, desired changes, budget range and current planning stage." },
      { title: "Hear from relevant architects", text: "Up to three interested professionals with suitable project experience can respond." },
      { title: "Compare scope and experience", text: "Review previous work, verified feedback, fee stages, exclusions and who handles submissions and consultants." },
    ],
  },
  choose: {
    title: "What should you check before appointing an architect?",
    intro: "The best comparison is not simply the lowest fee; it is whether the architect is pricing the design stages and support you actually need.",
    benefits: [
      { title: "Define the service stages", text: "Confirm exactly what is included from survey and concept work through planning, technical design and construction support.", paths: DOC },
      { title: "Look for relevant local experience", text: "Experience with similar Birmingham property types, planning constraints and heritage contexts can reduce avoidable redesign.", paths: HOUSE },
      { title: "Clarify consultant responsibilities", text: "Ask who coordinates structural engineers, party-wall advice, energy calculations, surveys and other specialist inputs where needed.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does an architect cost in Birmingham?", "Fees depend on the service stage. MyJobQuote's 2026 guide gives around £3,000–£5,000 for extension planning drawings and about £5,000–£12,000 for a fuller extension service as broad UK guidance."],
    ["Do I always need planning permission for an extension?", "No. Some works can be permitted development, while larger extensions may use a prior-approval route. Building Regulations are a separate consideration. Check the specific Birmingham property and proposal before relying on a general rule."],
    ["Does a conservation area affect my design?", "It can. Birmingham has 29 conservation areas, and local heritage controls may influence materials, windows, elevations and the acceptability of extensions."],
    ["Can I ask only for planning drawings?", "Yes, if that is the service you need, but make sure you understand what additional technical drawings or consultants may be required later for Building Regulations and construction."],
    ["Do I have to appoint an architect who responds?", "No. Up to three interested professionals can respond and there is no obligation to appoint one."],
  ],
  cta: { title: "Ready to compare architects in Birmingham?", copy: "Describe the property, project and design stage once, then compare Birmingham architects whose experience fits the brief.", buttonLabel: "Get Birmingham architect quotes" },
});

const plasterersBirmingham = makeBirminghamProfile({
  serviceSlug: "plasterers",
  serviceName: "Plasterer",
  servicePlural: "Plasterers",
  heroCopy: "Need walls skimmed, a ceiling repaired, old plaster replaced or rendering work? Describe the surfaces and their condition once, then compare plasterers covering Birmingham.",
  answer: {
    title: "Looking for a plasterer near you in Birmingham?",
    copy: "Enter the postcode and explain which walls or ceilings need work, what finish is currently there and whether there are cracks, blown areas or damp. Suitable Birmingham plasterers can then judge the preparation before responding.",
  },
  jobs: [
    { title: "Wall skimming", text: "Creating a smooth finish over suitable existing plaster, boards or prepared backgrounds ready for decoration.", paths: TOOLS },
    { title: "Full replastering", text: "Removing or stabilising failed finishes and building up a new plaster system where a simple skim is not enough.", paths: HOUSE },
    { title: "Ceiling plastering", text: "Skimming repaired or newly boarded ceilings and dealing with joints, edges and existing textured finishes where appropriate.", paths: GRID },
    { title: "Patch repairs", text: "Repairing damaged areas after leaks, rewiring, plumbing alterations or local impact damage once the underlying cause is resolved.", paths: TOOLS },
    { title: "Rendering", text: "Internal or external render systems where the substrate, exposure and chosen finish are suitable for the property.", paths: WATER },
    { title: "Dry lining & boarding", text: "Plasterboard installation and preparation before skimming, including small boxing and making-good work where agreed.", paths: GRID },
  ],
  costs: {
    title: "How much does plastering cost?",
    intro: "Room size and substrate condition matter more than floor area alone. MyJobQuote's current 2026 guidance gives these broad examples:",
    prices: [
      { value: "£450–£650", label: "Single bedroom" },
      { value: "£600–£850", label: "Double bedroom" },
      { value: "£850–£1,150", label: "Living room" },
      { value: "£15–£25/m²", label: "Typical skim guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham prices vary with removal of old plaster, boarding, high ceilings, access, drying conditions and whether cracks or damp need separate investigation first.",
    quoteTitle: "Compare the preparation and number of coats",
    quoteIntro: "A skim over a sound surface is a different job from removing loose plaster, boarding, bonding and then applying a finish coat.",
    quoteTips: [
      "Describe whether the existing surface is plaster, board, brick, render or a textured finish.",
      "Mention cracks, hollow areas, previous leaks or visible damp.",
      "Confirm whether furniture protection and floor covering are included.",
      "Ask about boarding, beads, bonding, waste and drying time before decorating.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham plastering context",
    title: "Property age, wall construction and moisture can change the plastering method",
    intro: "Birmingham's varied housing stock means a plasterer may be working on very different backgrounds from one street to another.",
    items: [
      {
        title: "Terraces, semis and flats create very different backgrounds",
        text: "Birmingham City Observatory's Census 2021 briefing reports 35.6% semi-detached homes, 27.8% terraced homes and 21.0% purpose-built flats or tenements. Older terraces can present solid walls and historic plaster, while later homes and flats may use different boards and finishes. The correct preparation depends on what is actually behind the surface.",
        source: { label: "Birmingham City Observatory — Census 2021 Housing", url: "https://www.cityobservatory.birmingham.gov.uk/explore/dataset/census-2021-factsheets/files/d3acd16ff3a7a90a5882446174cb4d1b/download/" },
      },
      {
        title: "Do not skim over an unresolved moisture source",
        text: "Birmingham City Council's damp and mould guidance identifies leaks, condensation and inadequate ventilation among common moisture causes. If plaster is stained, soft or repeatedly failing, the underlying water or ventilation issue should be investigated before a new cosmetic finish is applied.",
        source: { label: "Birmingham City Council — damp, condensation and mould", url: "https://www.birmingham.gov.uk/info/20006/housing/2661/damp_condensation_and_mould" },
      },
    ],
  },
  areas: {
    intro: "Enter the actual Birmingham postcode and describe the room or exterior area. Plasterers may cover areas including:",
    sideTitle: "A photo can reveal whether it is really a skim-only job",
    sideCopy: "Show the whole wall or ceiling plus close-ups of cracks, exposed substrate and damaged edges. That makes it easier to distinguish cosmetic skimming from more substantial preparation.",
    noteLead: "Fix active damp first.",
    noteText: "Fresh plaster will not solve an ongoing leak, condensation problem or structural movement on its own.",
  },
  how: {
    title: "Describe the surfaces once, then compare interested plasterers",
    intro: "Share enough information for plasterers to price the preparation as well as the visible finish.",
    steps: [
      { title: "Show the walls or ceilings", text: "Add the postcode, dimensions or room count, current finish, photos and any known damage or damp." },
      { title: "Hear from suitable plasterers", text: "Up to three interested Birmingham plasterers can respond to the job." },
      { title: "Compare preparation and finish", text: "Check verified reviews and whether each quote includes removal, boarding, beads, plaster and clean-up." },
    ],
  },
  choose: {
    title: "What should you check before hiring a plasterer?",
    intro: "A smooth finish depends on the background being stable and prepared correctly before the final skim goes on.",
    benefits: [
      { title: "Agree the preparation", text: "Ask whether loose plaster is being removed, cracks repaired, boards fitted or bonding coats used before skimming.", paths: TOOLS },
      { title: "Check the cause of damage", text: "If there is damp, staining or movement, establish whether a separate repair is needed before plastering.", paths: WATER },
      { title: "Plan decoration timing", text: "Ask how long the new plaster should dry before mist coating, painting or applying other finishes.", paths: CLOCK },
    ],
  },
  faq: [
    ["How much does plastering cost in Birmingham?", "MyJobQuote's current guide gives roughly £450–£650 for a single bedroom, £600–£850 for a double bedroom and £850–£1,150 for a living room as broad UK examples."],
    ["Can a plasterer skim over old plaster?", "Sometimes, if the existing surface is sound, dry and properly prepared. Loose, hollow, damp or unstable plaster may need repair or removal first."],
    ["Should damp be fixed before plastering?", "Yes. Birmingham City Council's guidance highlights several moisture causes. New plaster is a finish, not a cure for an active leak or condensation problem."],
    ["How many Birmingham plasterers can respond?", "Up to three interested local professionals can respond."],
    ["Do I have to hire one?", "No. Posting the job is free and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare plasterers in Birmingham?", copy: "Show the surfaces and required finish once, then compare interested Birmingham plasterers, reviews and quotes.", buttonLabel: "Get Birmingham plastering quotes" },
});

const kitchenFittersBirmingham = makeBirminghamProfile({
  serviceSlug: "kitchen-fitters",
  serviceName: "Kitchen Fitter",
  servicePlural: "Kitchen Fitters",
  heroCopy: "Installing a new kitchen or replacing units, worktops and fittings? Share the plan, room and scope once, then compare kitchen fitters covering Birmingham.",
  answer: {
    title: "Looking for a kitchen fitter near you in Birmingham?",
    copy: "Enter the postcode and explain whether the kitchen is supply-and-fit, labour-only or a partial refurbishment. Include plans, unit list and photos if available so suitable Birmingham fitters can price the same scope.",
  },
  jobs: [
    { title: "Full kitchen installation", text: "Setting out and fitting cabinets, panels, doors, plinths and the main kitchen layout from an agreed plan.", paths: GRID },
    { title: "Kitchen units", text: "Replacing or adding base and wall units, end panels, fillers and associated cabinetry.", paths: HOUSE },
    { title: "Worktops", text: "Measuring, cutting and fitting suitable worktop materials, including joints and openings where appropriate.", paths: TOOLS },
    { title: "Sinks & appliance housings", text: "Fitting cabinets and openings around sinks and appliances, with regulated connections handled by suitable specialists where required.", paths: WATER },
    { title: "Kitchen refurbishments", text: "Refreshing selected parts of an existing kitchen without replacing every unit or changing the complete layout.", paths: CHECK },
    { title: "Splashbacks & finishing", text: "Coordinating panels, tiling, trims and making-good work around the completed installation where included in the scope.", paths: GRID },
  ],
  costs: {
    title: "How much does kitchen fitting cost?",
    intro: "Kitchen price comparisons only work when supply, fitting and other trades are separated clearly. Current 2026 MyJobQuote guidance gives these examples:",
    prices: [
      { value: "£1,700–£3,000", label: "Standard labour-only fitting guide" },
      { value: "£6,000–£15,000+", label: "Typical full supply & install range" },
      { value: "£300–£800", label: "Worktop guide" },
      { value: "£150–£300", label: "Sink & taps guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham quotes vary with kitchen size, cabinet system, worktop material, removal, plumbing, electrical or gas alterations, tiling and making good.",
    quoteTitle: "Separate fitting from the other trades",
    quoteIntro: "A kitchen fitter may coordinate a full project or may price only the cabinetry. Make sure plumbing, electrics, gas, tiling and decorating are clearly included or excluded.",
    quoteTips: [
      "Share the final kitchen plan and product list.",
      "Say whether the old kitchen must be removed and disposed of.",
      "Confirm worktop cuts, appliance housings, sinks and finishing panels.",
      "Identify plumbing, electrical, gas, plastering and tiling work separately.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham kitchen planning",
    title: "Property layout and regulated alterations can affect a kitchen project",
    intro: "A straightforward cabinet swap is different from a kitchen project that changes walls, ventilation or regulated services.",
    items: [
      {
        title: "Birmingham's housing mix creates very different kitchen layouts",
        text: "Birmingham City Observatory's Census 2021 housing briefing records a large mix of semi-detached, terraced and purpose-built flat accommodation. That matters for kitchen fitting because room proportions, external access, stair/lift constraints and the route for carrying long worktops can vary significantly between property types.",
        source: { label: "Birmingham City Observatory — Census 2021 Housing", url: "https://www.cityobservatory.birmingham.gov.uk/explore/dataset/census-2021-factsheets/files/d3acd16ff3a7a90a5882446174cb4d1b/download/" },
      },
      {
        title: "Planning permission and Building Regulations are different questions",
        text: "Birmingham City Council's planning guidance notes that Building Regulations can apply even where planning permission is not required. A routine like-for-like kitchen replacement may be simple, but structural alterations, new openings, ventilation or regulated electrical and gas work can bring additional requirements and suitably qualified trades into the project.",
        source: { label: "Birmingham City Council — check if you need planning permission", url: "https://www.birmingham.gov.uk/planningpermissiondoineed" },
      },
    ],
  },
  areas: {
    intro: "Kitchen fitters can cover different parts of Birmingham; enter the actual property postcode. Example areas include:",
    sideTitle: "The kitchen plan is the best starting point",
    sideCopy: "Plans, cabinet sizes and appliance specifications remove guesswork and help fitters identify difficult corners, worktop joins, service positions and missing panels before the installation starts.",
    noteLead: "Check who coordinates specialist trades.",
    noteText: "Electrical and gas work in particular may require appropriately qualified or registered professionals rather than being absorbed informally into a general fitting quote.",
  },
  how: {
    title: "Share the kitchen plan once, then compare interested fitters",
    intro: "A clear product list and scope make labour quotes much easier to compare.",
    steps: [
      { title: "Upload the plan and scope", text: "Add the postcode, kitchen plan, unit list, worktop type, removal needs and any other trades required." },
      { title: "Hear from suitable fitters", text: "Up to three interested Birmingham kitchen fitters can respond." },
      { title: "Compare inclusions", text: "Check reviews and whether removal, cabinetry, worktops, appliances, service alterations and finishing are included." },
    ],
  },
  choose: {
    title: "What should you check before hiring a kitchen fitter?",
    intro: "The most common quote confusion comes from different assumptions about removal, worktops, appliances and other trades.",
    benefits: [
      { title: "Use the same kitchen plan", text: "Make sure every fitter is pricing the same cabinet list, worktop and appliance layout.", paths: DOC },
      { title: "Confirm trade coordination", text: "Identify who is responsible for plumbing, electrics, gas, plastering, tiling and decorating and when each trade attends.", paths: TOOLS },
      { title: "Agree finishing details", text: "Ask about end panels, fillers, plinths, cornice, sealants, waste and making good before accepting the quote.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does kitchen fitting cost in Birmingham?", "MyJobQuote's 2026 guide puts standard labour-only kitchen fitting around £1,700–£3,000, while a full supplied and installed kitchen can commonly run from about £6,000 to £15,000 or more."],
    ["Can a kitchen fitter arrange plumbers and electricians?", "Some fitters coordinate other trades and some price cabinetry only. Ask explicitly who is responsible and check that regulated work is completed by suitably qualified professionals."],
    ["Do I need planning permission for a new kitchen?", "A normal internal like-for-like kitchen replacement generally is not a planning application in itself, but structural changes and other work can trigger separate planning or Building Regulations considerations. Check the actual project."],
    ["How many Birmingham kitchen fitters can respond?", "Up to three interested local professionals can respond."],
    ["Do I have to hire one?", "No. There is no obligation to hire after posting."],
  ],
  cta: { title: "Ready to compare kitchen fitters in Birmingham?", copy: "Share the kitchen plan and scope once, then compare interested Birmingham fitters and their quotes.", buttonLabel: "Get Birmingham kitchen quotes" },
});

const bathroomSpecialistsBirmingham = makeBirminghamProfile({
  serviceSlug: "bathroom-specialists",
  serviceName: "Bathroom Specialist",
  servicePlural: "Bathroom Specialists",
  heroCopy: "Planning a full bathroom, shower replacement, wet-room work or a partial refurbishment? Describe the room, products and finish once, then compare bathroom specialists covering Birmingham.",
  answer: {
    title: "Looking for a bathroom specialist near you in Birmingham?",
    copy: "Enter the postcode and explain whether you are changing the layout or replacing items in their existing positions. Include room measurements, product details and photos so interested Birmingham specialists can understand the plumbing, tiling and finishing scope.",
  },
  jobs: [
    { title: "Full bathroom fitting", text: "Strip-out and installation of baths, basins, toilets, furniture and finishes as part of an agreed refurbishment scope.", paths: WATER },
    { title: "Shower installation", text: "Shower trays, enclosures, valves and associated wall finishes, with plumbing and regulated electrical work handled appropriately.", paths: WATER },
    { title: "Wet rooms", text: "Level-access shower areas where falls, tanking, drainage and floor construction need careful design and installation.", paths: GRID },
    { title: "Suite replacement", text: "Replacing selected sanitaryware while keeping much of the existing layout and finishes where practical.", paths: HOUSE },
    { title: "Tiling & waterproofing", text: "Wall and floor finishes with suitable preparation, tanking and sealed movement joints in wet areas.", paths: GRID },
    { title: "Accessible bathrooms", text: "Practical adaptations such as level-access showers, grab rails and revised layouts where mobility needs shape the design.", paths: SHIELD },
  ],
  costs: {
    title: "How much does a bathroom cost?",
    intro: "Bathroom costs depend on room size, product choice and how much plumbing, tiling and electrical work moves. MyJobQuote's current 2026 guide gives these broad benchmarks:",
    prices: [
      { value: "~£3,500", label: "Basic bathroom guide" },
      { value: "~£6,300", label: "Mid-range Midlands example" },
      { value: "~£7,000", label: "National average new bathroom" },
      { value: "£2,200–£5,500", label: "Small bathroom guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham quotes vary with sanitaryware, layout changes, waterproofing, tiling, ventilation, electrical work, strip-out and access.",
    quoteTitle: "Compare the entire bathroom scope",
    quoteIntro: "A bathroom quote can exclude tiles, sanitaryware, electrics, waste or decorating. Put every stage on the same checklist before comparing totals.",
    quoteTips: [
      "List the sanitaryware and furniture being supplied and by whom.",
      "Say whether the layout or pipe positions are changing.",
      "Confirm tanking, tiling, flooring, ventilation and sealants.",
      "Identify electrical work, waste removal and final decorating separately.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham bathroom planning",
    title: "Moisture control and regulated alterations matter in bathroom work",
    intro: "A bathroom is one of the highest-moisture rooms in a home, so waterproofing and ventilation should be considered alongside the visible suite and tiles.",
    items: [
      {
        title: "Birmingham's damp guidance puts ventilation at the centre",
        text: "Birmingham City Council's current damp and mould guidance explains that bathing adds moisture to the home and recommends using extraction or opening windows and keeping moisture from spreading through the property. For a bathroom refurbishment, that makes ventilation and leak control part of the practical brief rather than an afterthought after the tiles are installed.",
        source: { label: "Birmingham City Council — damp, condensation and mould", url: "https://www.birmingham.gov.uk/info/20006/housing/2661/damp_condensation_and_mould" },
      },
      {
        title: "Building Regulations can apply even without a planning application",
        text: "Birmingham City Council's planning guidance notes that Building Regulations are a separate regime from planning permission. Routine bathroom replacement can be straightforward, but structural changes, ventilation alterations and electrical work in bathrooms can have additional compliance requirements that should be allowed for in the scope.",
        source: { label: "Birmingham City Council — check if you need planning permission", url: "https://www.birmingham.gov.uk/planningpermissiondoineed" },
      },
    ],
  },
  areas: {
    intro: "Use the property postcode to find bathroom specialists who cover the relevant Birmingham area. Examples include:",
    sideTitle: "Layout changes drive cost quickly",
    sideCopy: "Keeping a toilet, basin and shower close to existing services is a different project from moving drainage, creating a wet room or rebuilding walls. Be explicit about which layout changes are essential.",
    noteLead: "Waterproofing is not the same as tiling.",
    noteText: "In wet areas, ask what tanking or waterproofing system sits behind the final surface and how corners, penetrations and joints are detailed.",
  },
  how: {
    title: "Describe the bathroom once, then compare interested specialists",
    intro: "Room dimensions, product choices and layout changes make bathroom quotes far easier to compare.",
    steps: [
      { title: "Explain the room and products", text: "Add the postcode, dimensions, desired layout, sanitaryware, photos and whether you are supplying materials." },
      { title: "Hear from suitable specialists", text: "Up to three interested Birmingham bathroom professionals can respond." },
      { title: "Compare the full scope", text: "Check reviews and whether strip-out, plumbing, tiling, waterproofing, electrics, ventilation and waste are included." },
    ],
  },
  choose: {
    title: "What should you check before hiring a bathroom specialist?",
    intro: "A bathroom needs to work behind the tiles as well as look finished on the day the job ends.",
    benefits: [
      { title: "Ask about waterproofing", text: "Confirm the tanking or wet-area preparation and how shower corners and penetrations are sealed.", paths: WATER },
      { title: "Check specialist electrical work", text: "Bathroom electrical work has specific safety requirements, so make sure it is handled by an appropriately competent professional.", paths: SHIELD },
      { title: "Compare identical inclusions", text: "Put sanitaryware, tiles, adhesives, waste, ventilation, decorating and accessories on one checklist for every quote.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does a new bathroom cost in Birmingham?", "MyJobQuote's 2026 guide gives a national average around £7,000 and a Midlands mid-range example around £6,300, while small bathrooms can be around £2,200–£5,500 depending on specification."],
    ["Do I need to improve ventilation during a bathroom refit?", "It depends on the existing setup, but moisture control is important. Birmingham City Council's damp guidance specifically recommends extraction or ventilation when bathing and showering."],
    ["Does every bathroom refit need planning permission?", "No. Ordinary internal replacement usually is not a planning application by itself, but Building Regulations and other requirements can apply to particular alterations. Check the actual scope."],
    ["How many Birmingham bathroom specialists can respond?", "Up to three interested local professionals can respond."],
    ["Do I have to hire one?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare bathroom specialists in Birmingham?", copy: "Describe the room, layout and products once, then compare interested Birmingham bathroom specialists and their quotes.", buttonLabel: "Get Birmingham bathroom quotes" },
});

const drainageSpecialistsBirmingham = makeBirminghamProfile({
  serviceSlug: "drainage-specialists",
  serviceName: "Drainage Specialist",
  servicePlural: "Drainage Specialists",
  heroCopy: "Blocked drain, recurring smell, slow drainage or a suspected damaged pipe? Describe where the problem appears and what has already been tried, then compare drainage specialists covering Birmingham.",
  answer: {
    title: "Looking for a drainage specialist near you in Birmingham?",
    copy: "Enter the postcode and explain which fixtures or external drains are affected, whether the issue is constant or intermittent and whether neighbouring properties are affected. Suitable Birmingham drainage specialists can then judge the likely investigation and equipment needed.",
  },
  jobs: [
    { title: "Blocked drains", text: "Clearing internal or external drainage blockages using suitable access points and methods for the obstruction.", paths: WATER },
    { title: "Drain jetting", text: "High-pressure water jetting used where appropriate to clear deposits and restore flow through accessible pipework.", paths: WATER },
    { title: "CCTV drain surveys", text: "Camera inspection to identify damage, roots, displaced joints or recurring obstructions before deciding on repair work.", paths: WINDOW },
    { title: "Drain repairs", text: "Repairing damaged pipe sections or defects once the location and ownership responsibility are understood.", paths: TOOLS },
    { title: "Surface-water drainage", text: "Investigation of gullies, soakaways and private surface-water drainage where standing water or runoff is a problem.", paths: WATER },
    { title: "Emergency drainage", text: "Urgent attendance for severe backups or overflowing private drainage where immediate containment and clearance are needed.", paths: CLOCK },
  ],
  costs: {
    title: "How much does drainage work cost?",
    intro: "The first cost is often diagnosis and clearance; repair is separate if damage is found. MyJobQuote's current 2026 guidance gives these examples:",
    prices: [
      { value: "£80–£100", label: "Drain cleaning guide" },
      { value: "£80–£145", label: "Drain rodding" },
      { value: "£70–£175", label: "Drain jetting" },
      { value: "~£250", label: "Average drain survey guide" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham prices vary with access, emergency timing, camera/report requirements, pipe depth, excavation and whether the affected pipe is actually the homeowner's responsibility.",
    quoteTitle: "Separate diagnosis, clearance and repair",
    quoteIntro: "A blocked drain can be a simple obstruction or a symptom of damaged pipework. Avoid authorising a major repair before the cause and responsibility are clear.",
    quoteTips: [
      "Say which drains or fixtures are affected and when the problem started.",
      "Mention recurring blockages and previous jetting or repairs.",
      "Ask how call-out, CCTV, jetting and reports are charged.",
      "Check whether the pipe is private, shared or part of the public sewer before major repairs.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham drainage responsibility",
    title: "First establish whether the drainage problem is actually yours to repair",
    intro: "Birmingham City Council distinguishes between private property drainage, shared sewer infrastructure and highway drainage. That distinction matters before paying for excavation or replacement.",
    items: [
      {
        title: "Homeowners are responsible for their own private piped drainage",
        text: "Birmingham City Council's flood-risk responsibilities guidance says individual property owners are responsible for piped drainage serving their own property, while drainage that becomes part of shared sewer infrastructure is generally the responsibility of Severn Trent Water. A drainage specialist can help identify where a private defect ends and a wider network issue begins.",
        source: { label: "Birmingham City Council — flood-risk management responsibilities", url: "https://www.birmingham.gov.uk/info/20159/flooding/536/flood_risk_management_responsibilities/4" },
      },
      {
        title: "Road gullies are not the same as a private house drain",
        text: "Birmingham City Council maintains highway drainage and reports carrying out around 114,500 gully-cleansing operations each year, while the sewer network is maintained separately by the water company. If flooding is in the road rather than inside your private drainage system, the correct reporting route may be different from booking a domestic drain repair.",
        source: { label: "Birmingham City Council — road flooding and drainage", url: "https://www.birmingham.gov.uk/info/20110/report_road_and_pavement_issues/538/report_flooding_and_drainage_on_pavements_and_roads" },
      },
    ],
  },
  areas: {
    intro: "Drainage firms may cover the city by postcode and emergency rota. Enter the exact Birmingham property location; example areas include:",
    sideTitle: "Tell the specialist whether neighbours are affected",
    sideCopy: "If several properties are backing up at the same time, that can point to a shared or public network problem rather than a blockage entirely within your own private pipework.",
    noteLead: "Diagnose before excavating.",
    noteText: "A CCTV survey or clear evidence of the defect can prevent unnecessary repair work and help establish where responsibility sits.",
  },
  how: {
    title: "Describe the drainage symptoms once, then compare interested specialists",
    intro: "Good information about where water backs up and whether the problem recurs helps narrow down the likely cause.",
    steps: [
      { title: "Explain the symptoms", text: "Add the postcode, affected drains, timing, smells or overflows and any previous clearance attempts." },
      { title: "Hear from suitable specialists", text: "Up to three interested Birmingham drainage professionals can respond." },
      { title: "Compare diagnosis and next step", text: "Check reviews, call-out structure and whether the quote is for clearance, CCTV, reporting or actual repair." },
    ],
  },
  choose: {
    title: "What should you check before hiring a drainage specialist?",
    intro: "The key question is not only 'can you clear it?' but also 'why did it block and who owns the damaged section?'.",
    benefits: [
      { title: "Ask for the diagnosis", text: "For recurring problems, ask what evidence shows the location and cause rather than repeatedly paying for temporary clearance.", paths: WINDOW },
      { title: "Clarify charging stages", text: "Separate call-out, rodding, jetting, CCTV, reports and repairs so additional work is not authorised accidentally.", paths: DOC },
      { title: "Check ownership responsibility", text: "Before major work, establish whether the affected pipe is private, shared or part of the public sewer network.", paths: CHECK },
    ],
  },
  faq: [
    ["How much does it cost to unblock a drain in Birmingham?", "MyJobQuote's current guide gives roughly £80–£100 for drain cleaning, £80–£145 for rodding and £70–£175 for jetting as broad UK figures. Emergency attendance can cost more."],
    ["Who is responsible for a shared sewer in Birmingham?", "Birmingham City Council says individual owners are responsible for their own private piped drainage, while drainage that forms part of shared sewer infrastructure is generally handled by Severn Trent Water. The exact boundary should be confirmed for the property."],
    ["When is a CCTV survey useful?", "It is particularly useful for recurring blockages, suspected damage, roots or when you need evidence before authorising a repair. MyJobQuote's current average drain-survey guide is around £250."],
    ["How many drainage specialists can respond?", "Up to three interested local professionals can respond."],
    ["Do I have to hire one?", "No. Posting is free for homeowners and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare drainage specialists in Birmingham?", copy: "Describe the blockage or drainage symptoms once, then compare interested Birmingham drainage specialists and their proposed next steps.", buttonLabel: "Get Birmingham drainage quotes" },
});

const drivewaySpecialistsBirmingham = makeBirminghamProfile({
  serviceSlug: "driveway-specialists",
  serviceName: "Driveway Specialist",
  servicePlural: "Driveway Specialists",
  heroCopy: "Planning block paving, resin, tarmac, gravel or a new hardstanding? Describe the area, access and preferred finish once, then compare driveway specialists covering Birmingham.",
  answer: {
    title: "Looking for a driveway specialist near you in Birmingham?",
    copy: "Enter the postcode, approximate driveway area and preferred surface. Say whether a dropped kerb already exists and include photos of levels, drainage and the pavement edge so suitable Birmingham specialists can understand the full job.",
  },
  jobs: [
    { title: "Block paving", text: "Excavation, sub-base preparation and block-paved driveways or paths with edge restraints and suitable drainage.", paths: GRID },
    { title: "Resin driveways", text: "Resin-bound surfacing where the underlying base, permeability and drainage arrangement are suitable.", paths: WATER },
    { title: "Tarmac & asphalt", text: "Hard-wearing driveway surfacing over a properly prepared base with falls and edges designed for the site.", paths: HOUSE },
    { title: "Gravel driveways", text: "Gravel surfacing with suitable sub-base, membranes and edge restraint to keep loose material on the property.", paths: GRID },
    { title: "Concrete driveways", text: "Concrete hardstanding where base preparation, joints, falls and surface-water management are planned correctly.", paths: TOOLS },
    { title: "Repairs & resurfacing", text: "Repairing failed areas or resurfacing an existing drive where the underlying base remains suitable for reuse.", paths: TOOLS },
  ],
  costs: {
    title: "How much does a new driveway cost?",
    intro: "Surface type and excavation depth make a major difference. MyJobQuote's current 2026 guide gives these approximate prices for a 30m² one-car driveway:",
    prices: [
      { value: "£1,000–£2,500", label: "30m² gravel driveway" },
      { value: "£1,200–£2,000", label: "30m² resin driveway" },
      { value: "£1,300–£3,200", label: "30m² tarmac driveway" },
      { value: "£1,200–£4,000", label: "30m² block paving" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham quotes vary with excavation, sub-base depth, drainage, waste disposal, access, edging, levels and whether a separate dropped-kerb application or works are required.",
    quoteTitle: "Compare what is underneath the finished surface",
    quoteIntro: "A cheap surface over an inadequate base can fail early. Make sure excavation, sub-base, drainage and edge restraints are described, not just the final material.",
    quoteTips: [
      "Give the approximate square metres and current ground surface.",
      "Ask for excavation depth and sub-base specification.",
      "Confirm how surface water will drain without running onto the highway.",
      "Clarify whether dropped-kerb permissions and works are separate from the driveway quote.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham driveway rules",
    title: "Dropped-kerb and drainage rules need checking before the driveway is built",
    intro: "A driveway inside the boundary and permission to drive across the pavement are related but separate pieces of the project.",
    items: [
      {
        title: "Birmingham sets minimum space requirements for a dropped kerb",
        text: "Birmingham City Council's current dropped-kerb guidance says the parking area generally needs a minimum depth of 4.75 metres so a vehicle can stand clear of the footway. The council also explains that planning permission can be required in certain circumstances, including some classified-road locations and hardstanding arrangements.",
        source: { label: "Birmingham City Council — apply for a dropped kerb", url: "https://www.birmingham.gov.uk/dkapp" },
      },
      {
        title: "The hardstanding needs a compliant drainage approach",
        text: "The council's dropped-kerb requirements say the driveway or hardstanding should be permeable before kerb works are carried out, loose gravel must be retained within the property and excessive gradients are restricted. Those details should be designed into the driveway before the finished surface is laid.",
        source: { label: "Birmingham City Council — dropped-kerb requirements", url: "https://www.birmingham.gov.uk/info/20109/parking/660/apply_for_a_dropped_kerb/3" },
      },
    ],
  },
  areas: {
    intro: "Driveway specialists need the property postcode and frontage dimensions. Birmingham areas may include:",
    sideTitle: "Measure the parking area before choosing a surface",
    sideCopy: "Give the width, depth and approximate square metres plus photos from the road. That helps identify drainage falls, retaining edges and whether the frontage can physically accommodate the intended parking layout.",
    noteLead: "Do not assume the driveway quote includes a dropped kerb.",
    noteText: "Crossing the public footway is controlled separately by the council and may require its own application, approval and contractor process.",
  },
  how: {
    title: "Describe the frontage once, then compare interested driveway specialists",
    intro: "Photos, dimensions and a clear surface preference make sub-base and drainage quotes much more comparable.",
    steps: [
      { title: "Show the existing frontage", text: "Add the postcode, dimensions, photos, current surface, desired material and dropped-kerb status." },
      { title: "Hear from suitable specialists", text: "Up to three interested Birmingham driveway professionals can respond." },
      { title: "Compare base and drainage", text: "Check reviews and compare excavation, sub-base, drainage, edging, surface thickness and disposal." },
    ],
  },
  choose: {
    title: "What should you check before hiring a driveway specialist?",
    intro: "The finished colour is the visible part; drainage and the base are what determine whether the driveway lasts.",
    benefits: [
      { title: "Ask for the sub-base specification", text: "Confirm excavation depth, sub-base material and compaction rather than accepting a quote that names only the surface.", paths: GRID },
      { title: "Plan surface-water drainage", text: "Make sure falls and permeability keep runoff within the property or an approved drainage arrangement.", paths: WATER },
      { title: "Separate dropped-kerb permissions", text: "Check what the driveway contractor can do within the boundary and what must go through Birmingham City Council separately.", paths: DOC },
    ],
  },
  faq: [
    ["How much does a driveway cost in Birmingham?", "For a 30m² one-car driveway, MyJobQuote's 2026 guide gives broad ranges of about £1,000–£2,500 for gravel, £1,200–£2,000 for resin, £1,300–£3,200 for tarmac and £1,200–£4,000 for block paving."],
    ["Do I need a dropped kerb in Birmingham?", "If you need to drive across the public pavement to reach a new parking area, a properly authorised vehicle crossing is normally required. Check Birmingham City Council's current application rules for the property."],
    ["How deep does my driveway need to be for a Birmingham dropped kerb?", "The council's current guidance states a general minimum parking-area depth of 4.75 metres so vehicles can stand clear of the footway, subject to the full policy and site conditions."],
    ["How many driveway specialists can respond?", "Up to three interested local professionals can respond."],
    ["Do I have to hire one?", "No. There is no obligation to hire."],
  ],
  cta: { title: "Ready to compare driveway specialists in Birmingham?", copy: "Share the frontage, dimensions and preferred surface once, then compare interested Birmingham driveway specialists and quotes.", buttonLabel: "Get Birmingham driveway quotes" },
});

const windowSpecialistsBirmingham = makeBirminghamProfile({
  serviceSlug: "window-specialists",
  serviceName: "Window Specialist",
  servicePlural: "Window Specialists",
  heroCopy: "Replacing windows, repairing failed double glazing or planning new sash, bay or uPVC units? Describe the property and openings once, then compare window specialists covering Birmingham.",
  answer: {
    title: "Looking for a window specialist near you in Birmingham?",
    copy: "Enter the postcode, number and approximate type of windows and whether you need full frames or only failed sealed units replaced. Mention listed-building or conservation-area status if known so suitable Birmingham specialists can respond accurately.",
  },
  jobs: [
    { title: "uPVC replacement windows", text: "Survey and replacement of existing frames with appropriately specified uPVC windows, including opening style and glazing options.", paths: WINDOW },
    { title: "Sash windows", text: "Repair, upgrading or replacement of sash-style windows where proportions, operation and heritage appearance may matter.", paths: WINDOW },
    { title: "Bay windows", text: "Replacement or repair of multi-section bay windows where structure, angles and external access need careful survey.", paths: HOUSE },
    { title: "Blown double glazing", text: "Replacing failed sealed glass units where condensation appears between panes while the existing frame remains serviceable.", paths: WATER },
    { title: "Timber & aluminium windows", text: "Repair or replacement using alternative frame materials where appearance, maintenance and thermal performance shape the choice.", paths: GRID },
    { title: "Doors, rooflights & related glazing", text: "Associated glazed doors, rooflights and specialist openings where survey, safety glazing and access need to be considered.", paths: WINDOW },
  ],
  costs: {
    title: "How much do replacement windows cost?",
    intro: "Frame material, opening style, size and installation access all affect price. MyJobQuote's current 2026 guidance gives these useful examples:",
    prices: [
      { value: "£350–£600", label: "Standard uPVC casement" },
      { value: "£600–£1,100", label: "uPVC sash window" },
      { value: "£1,200–£2,800", label: "Bay window guide" },
      { value: "£55–£145", label: "Replacement sealed double-glazed unit" },
    ],
    sourceNote: "Indicative UK guidance checked August 2026 from MyJobQuote. Birmingham quotes vary with frame material, glazing specification, floor level, access, making good and any conservation or listed-building constraints.",
    quoteTitle: "Compare the frame, glazing and installation specification",
    quoteIntro: "Two windows that look similar online can have different profiles, glass, hardware, ventilation and certification. Compare the full product and fitting specification.",
    quoteTips: [
      "List the number, rough size and opening style of the windows.",
      "Say whether the frames are being replaced or only sealed glass units.",
      "Mention conservation-area or listed-building status before ordering.",
      "Confirm making good, trims, disposal, ventilation and certification in the quote.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham window permissions",
    title: "Heritage controls can change what replacement window is acceptable",
    intro: "Birmingham has many ordinary replacement-window projects, but conservation areas and listed buildings need extra checks before frames are ordered.",
    items: [
      {
        title: "Birmingham has 29 conservation areas",
        text: "Birmingham City Council lists 29 conservation areas. In some areas, additional Article 4 controls remove normal permitted-development rights for features such as windows and doors. The council's Moor Pool guidance, for example, specifically controls replacement windows and encourages repair or historically appropriate replacement rather than an automatic switch to a standard modern frame.",
        source: { label: "Birmingham City Council — conservation areas and Article 4 guidance", url: "https://www.birmingham.gov.uk/info/20055/conservation_areas/13/birminghams_conservation_areas/3" },
      },
      {
        title: "Listed-building windows need a consent check",
        text: "Birmingham City Council's guidance for listed buildings says removal and replacement of windows in a listed building requires listed-building consent and that original windows should generally be retained and repaired where possible. If replacement is justified, matching the historic character can be critical to the proposal.",
        source: { label: "Birmingham City Council — windows in listed buildings", url: "https://www.birmingham.gov.uk/info/20042/listed_buildings/942/managing_windows_in_listed_buildings" },
      },
    ],
  },
  areas: {
    intro: "Window firms may cover Birmingham by survey area. Enter the real property postcode; example areas include:",
    sideTitle: "Do not order before checking heritage status",
    sideCopy: "If the home is listed or subject to conservation-area controls, the acceptable frame material, glazing pattern, colour or sightlines may differ from a standard replacement-window package.",
    noteLead: "A failed glass unit does not always mean a whole new frame.",
    noteText: "Where the frame is sound, replacing only a blown sealed unit can be a much smaller job than replacing the complete window.",
  },
  how: {
    title: "Describe the windows once, then compare interested specialists",
    intro: "Window count, style, access and heritage status help installers decide whether the job suits their products and experience.",
    steps: [
      { title: "List the openings", text: "Add the postcode, number and type of windows, photos, floor levels and whether frames or glass units are being replaced." },
      { title: "Hear from suitable specialists", text: "Up to three interested Birmingham window professionals can respond." },
      { title: "Compare product and fitting", text: "Check reviews, frame/glass specification, warranty, installation details, making good and any required consent." },
    ],
  },
  choose: {
    title: "What should you check before hiring a window specialist?",
    intro: "The cheapest unit is not automatically the best match for the building, especially where appearance or heritage controls matter.",
    benefits: [
      { title: "Confirm the full specification", text: "Compare frame profile, opening style, glass, hardware, ventilation and colour rather than only the number of windows.", paths: WINDOW },
      { title: "Check permissions before ordering", text: "For listed buildings or controlled conservation areas, confirm the consent position before a non-returnable window is manufactured.", paths: DOC },
      { title: "Agree making good and certification", text: "Ask who removes old units, makes good reveals and provides the relevant installation or compliance documentation.", paths: CHECK },
    ],
  },
  faq: [
    ["How much do replacement windows cost in Birmingham?", "MyJobQuote's current guide gives about £350–£600 for a standard uPVC casement, £600–£1,100 for a uPVC sash and £1,200–£2,800 for a bay window as broad UK examples."],
    ["Can I replace only a blown double-glazed unit?", "Often yes if the frame and hardware are still serviceable. MyJobQuote's current guide puts a standard replacement sealed unit around £55–£145, depending on size and specification."],
    ["Can I put standard uPVC windows in a Birmingham conservation area?", "Do not assume so. Birmingham has 29 conservation areas and some locations have additional Article 4 controls. Check the specific property and area before ordering replacement frames."],
    ["What about a listed building?", "Birmingham City Council says removal and replacement of windows in a listed building requires listed-building consent. Repair and retention of historic windows is often preferred where feasible."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare window specialists in Birmingham?", copy: "Describe the windows and property once, then compare interested Birmingham window specialists and their product and fitting quotes.", buttonLabel: "Get Birmingham window quotes" },
});

export const BIRMINGHAM_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  cleanersBirmingham,
  tilersBirmingham,
  heatingEngineersBirmingham,
  locksmithsBirmingham,
  pestControllersBirmingham,
  treeSurgeonsBirmingham,
  architectsBirmingham,
  plasterersBirmingham,
  kitchenFittersBirmingham,
  bathroomSpecialistsBirmingham,
  drainageSpecialistsBirmingham,
  drivewaySpecialistsBirmingham,
  windowSpecialistsBirmingham,
];

export function getBirminghamServiceContent(service: string, city: string) {
  return BIRMINGHAM_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
