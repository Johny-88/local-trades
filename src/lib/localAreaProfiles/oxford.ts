import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "Oxford City Council — Census 2021 housing tenure briefing",
  url: "https://www.oxford.gov.uk/downloads/file/1353/census-2021-tenure-accomodation-central-heating-and-car-availability",
};

const CONSERVATION: LocalResearchSource = {
  label: "Oxford City Council — conservation areas",
  url: "https://www.oxford.gov.uk/conservation-areas",
};

const ARTICLE4: LocalResearchSource = {
  label: "Oxford City Council — planning permission and Article 4 directions",
  url: "https://www.oxford.gov.uk/planningpermission",
};

const TREES: LocalResearchSource = {
  label: "Oxford City Council — trees in conservation areas",
  url: "https://www.oxford.gov.uk/trees-hedges/trees-conservation-areas",
};

const TPOS: LocalResearchSource = {
  label: "Oxford City Council — Tree Preservation Orders",
  url: "https://www.oxford.gov.uk/trees-hedges/tree-preservation-orders-tpos",
};

export const OXFORD_PROFILE: LocalAreaProfile = {
  city: "Oxford",
  housingSummary:
    "Oxford has an unusually large rented sector for a city of its size. Census 2021 data published by Oxford City Council shows 32.2% of households were privately rented, 20.9% socially rented and 45.3% owner occupied. The city also has 18 conservation areas, so property management, tenancy access and heritage constraints frequently matter when describing trade work.",
  housingFacts: [
    { value: "32.2%", label: "households privately rented" },
    { value: "45.3%", label: "households owner occupied" },
    { value: "20.9%", label: "households socially rented" },
    { value: "55,239", label: "households recorded in Census 2021" },
  ],
  areas: ["Headington", "Cowley", "Summertown", "Jericho", "Iffley", "Marston", "Wolvercote", "Rose Hill"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Oxford City Council — conservation areas and neighbourhood records",
  areaSourceUrl: CONSERVATION.url,
  tradeContent: {
    handyman: {
      eyebrow: "Oxford handyman context",
      heading: "Rental access and older properties can shape an Oxford handyman visit",
      intro: "Nearly a third of Oxford households rent privately, so short maintenance jobs are often arranged around tenants, landlords or agents as well as owner-occupiers.",
      points: [
        { title: "Rental jobs need a clear access plan", text: "For a rented home, identify who will be present, who holds keys and who can approve additional work if a small repair uncovers a wider problem." },
        { title: "Older homes may need more than standard fixings", text: "Oxford includes historic terraces, converted buildings and newer housing. Mention unusual walls, older joinery or previous alterations rather than assuming every shelf, curtain pole or fitting is a straightforward modern fixing." },
        { title: "Group small tasks into one visit", text: "List furniture assembly, doors, sealant, fittings and minor repairs together so a handyman can judge travel, setup and likely time from the complete scope." },
      ],
      checklistHeading: "What to include in an Oxford handyman request",
      checklistIntro: "Make tenancy, property type and the full task list clear before comparing responses.",
      checklist: ["State whether the home is owner-occupied or rented and who provides access.", "List all small jobs for the same visit.", "Mention floor level, parking, communal access and unusual wall or fitting conditions where relevant."],
      sources: [HOUSING],
    },
    plumber: {
      eyebrow: "Oxford plumbing context",
      heading: "Rental management and older building layouts can change an Oxford plumbing visit",
      intro: "Oxford's large rented sector means plumbing faults often need coordination between occupier and property owner, while older and converted buildings can make pipe routes less obvious.",
      points: [
        { title: "Identify the person who can approve further work", text: "For rented homes, state whether a tenant, landlord or managing agent will provide access and who can authorise additional repair if the plumber discovers a wider problem." },
        { title: "Converted buildings may involve shared routes", text: "For flats or converted properties, include the floor, isolation point if known and whether the affected pipework appears to pass through a communal or building-managed area." },
        { title: "Describe the symptom rather than guessing the cause", text: "Say where water appears, when it happens, whether it is active and whether adjacent rooms or properties seem affected. That gives plumbers useful evidence without an uncertain diagnosis." },
      ],
      checklistHeading: "Details that help Oxford plumbers assess the visit",
      checklistIntro: "A precise symptom and clear access arrangement make the first visit easier to judge.",
      checklist: ["Give property type, floor level and exact location of the fault.", "Say whether water can be isolated and whether the problem is active.", "For rented or managed homes, identify who provides access and approval."],
      sources: [HOUSING],
    },
    electrician: {
      eyebrow: "Oxford electrical context",
      heading: "Oxford's rented housing makes inspection and remedial context especially useful",
      intro: "With more than half of households renting privately or socially, electricians benefit from knowing whether a request is an ordinary fault, planned installation or work arising from an inspection report.",
      points: [
        { title: "Say when the work follows an existing report", text: "If an EICR or other inspection has already identified remedial work, share the relevant observations or codes so responders understand the same scope." },
        { title: "Managed flats need private and communal systems separated", text: "Identify whether the affected fitting or circuit is inside the home or appears to be part of a shared hallway, landlord supply or building-managed area." },
        { title: "Older properties may contain several generations of alterations", text: "Describe what you can see safely and mention known previous work, but leave testing, circuit identification and live investigation to the electrician." },
      ],
      checklistHeading: "What Oxford electricians need before responding",
      checklistIntro: "Keep the electrical brief factual and include tenancy or report context.",
      checklist: ["Say whether the property is rented and whether an EICR or remedial report exists.", "Describe tripping, flickering, heat, smells or loss of power without opening live equipment.", "For flats or shared buildings, explain whether the issue is private or communal."],
      sources: [HOUSING],
    },
    roofer: {
      eyebrow: "Oxford roofing context",
      heading: "Historic fabric and conservation areas can materially change Oxford roofing work",
      intro: "Oxford has 18 conservation areas, ranging from the Central City and University area to Jericho, Headington, Iffley and Wolvercote. Visible roof work therefore deserves an address-specific heritage check before a replacement specification is agreed.",
      points: [
        { title: "Conservation status should be checked before visible roof changes", text: "The council uses conservation areas to protect distinctive historic character. A roof alteration or change of materials can have different planning implications depending on the exact property and designation." },
        { title: "Listed buildings need a different consent mindset", text: "Oxford City Council advises that listed-building consent is likely to be required for works affecting listed buildings even where similar work on an ordinary home might otherwise be permitted." },
        { title: "Shared and historic roof details should be photographed safely", text: "Describe chimneys, valleys, parapets, adjoining roof lines and extension roofs so a roofer can distinguish a local defect from work involving wider historic fabric." },
      ],
      checklistHeading: "Checks before posting Oxford roofing work",
      checklistIntro: "Confirm heritage status and show the exact roof element before comparing specifications.",
      checklist: ["Check conservation-area and listed-building status before major visible roof work.", "Describe roof materials, chimneys, valleys, parapets and shared lines.", "Explain scaffold access and any freeholder or managing-agent involvement."],
      sources: [CONSERVATION, ARTICLE4],
    },
    "painter-decorator": {
      eyebrow: "Oxford decorating context",
      heading: "Historic interiors, protected exteriors and rental turnover need different Oxford scopes",
      intro: "Oxford combines a large rented market with internationally recognised historic streets and buildings. A between-tenancy repaint and exterior work in a conservation area should not be scoped the same way.",
      points: [
        { title: "Historic exterior changes deserve an early planning check", text: "In conservation areas or listed buildings, exterior finishes, details and preparation methods can affect character. Identify the designation before agreeing a visible change." },
        { title: "Rental refreshes need occupancy and handover dates", text: "With 32.2% of households privately rented, say whether a property is empty, furnished or occupied and whether the work must fit between tenancies." },
        { title: "Older surfaces may need specialist preparation", text: "Describe lime or old plaster where known, previous coatings, staining, wallpaper and damaged timber so the quote reflects preparation rather than only final paint." },
      ],
      checklistHeading: "What to add to an Oxford decorating request",
      checklistIntro: "Clarify heritage status, surface condition and occupancy before comparing quotes.",
      checklist: ["Check conservation or listed status for exterior work.", "Say whether the home is empty, occupied or rented and who provides access.", "Describe existing finishes, damaged plaster, wallpaper and timber condition."],
      sources: [CONSERVATION, HOUSING],
    },
    "flooring-fitter": {
      eyebrow: "Oxford flooring context",
      heading: "Rental turnover and shared buildings can change an Oxford flooring job",
      intro: "Oxford's large rented sector means flooring is often fitted between tenancies or in occupied shared buildings, where delivery, furniture and lease conditions can matter as much as the finish itself.",
      points: [
        { title: "Empty and occupied properties need different sequencing", text: "Say whether rooms are vacant, furnished or occupied and whether work must be phased so part of the home remains usable." },
        { title: "Managed flats may have acoustic or access requirements", text: "Check lease or managing-agent rules around hard flooring, underlay, working hours and protection of communal areas before materials are ordered." },
        { title: "Older subfloors should not be assumed level", text: "If boards, screed or previous coverings are uneven or damaged, mention this so uplift and preparation are separated from the fitting price." },
      ],
      checklistHeading: "What Oxford floor fitters need to know first",
      checklistIntro: "Separate access, occupancy and subfloor preparation from the new floor finish.",
      checklist: ["State whether the property is empty or occupied and whether furniture moving is included.", "For flats, check lease or managing-agent flooring requirements.", "Describe existing covering and known subfloor issues, including uplift, disposal or levelling."],
      sources: [HOUSING],
    },
    builder: {
      eyebrow: "Oxford building context",
      heading: "Conservation areas and citywide planning controls can change an Oxford building project",
      intro: "Oxford has 18 conservation areas and three Article 4 directions, including a citywide restriction on changing a C3 dwelling to a small HMO plus specific controls in Jericho and Osney.",
      points: [
        { title: "Heritage status should be checked before design assumptions are fixed", text: "Extensions, external alterations and structural work near historic fabric should be checked against conservation and listed-building status before a builder prices a final specification." },
        { title: "Oxford has specific Article 4 controls", text: "The council currently lists three Article 4 directions: a citywide HMO change-of-use restriction and area-specific directions in Jericho and Osney. The exact address and proposal therefore matter." },
        { title: "Tight sites need delivery and waste logistics priced early", text: "For terraces and central properties, explain parking, delivery windows, scaffold position, skip alternatives and where materials can be stored." },
      ],
      checklistHeading: "Before comparing Oxford builder quotes",
      checklistIntro: "Planning status and site logistics should be part of the initial scope rather than discovered after pricing.",
      checklist: ["Check conservation, listed-building and Article 4 status where relevant.", "Share drawings, approvals and structural information already available.", "Explain access for deliveries, waste, scaffolding and material storage."],
      sources: [CONSERVATION, ARTICLE4],
    },
    gardener: {
      eyebrow: "Oxford garden context",
      heading: "Conservation areas and protected trees make the exact Oxford address important",
      intro: "Oxford City Council oversees more than 250 Tree Preservation Orders and 18 conservation areas. Tree work should therefore be separated from ordinary garden maintenance before a quote is requested.",
      points: [
        { title: "Trees in conservation areas receive automatic protection above the size threshold", text: "The council says trees over 75mm stem diameter measured at 1.5 metres are protected within conservation areas." },
        { title: "Six weeks' written notice is required for qualifying conservation-area tree work", text: "Oxford City Council requires six weeks' written notice before work to protected conservation-area trees, allowing time to consider whether a TPO is needed." },
        { title: "Access still matters for routine garden work", text: "For mowing, hedge cutting or clearance, state gate widths, steps and whether tools and green waste must pass through the house or a narrow shared route." },
      ],
      checklistHeading: "What to check before posting Oxford garden work",
      checklistIntro: "Confirm tree protection and make the physical garden access clear.",
      checklist: ["Check TPO and conservation-area status before significant tree work.", "Allow for the council's notice or consent process where protection applies.", "Give gate widths, steps and the route for machinery and green waste."],
      sources: [TREES, TPOS, CONSERVATION],
    },
  },
};
