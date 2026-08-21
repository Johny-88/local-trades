import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "Brighton & Hove City Council — Census 2021 city profile",
  url: "https://www.brighton-hove.gov.uk/sites/default/files/2024-03/census-2021-briefing-city-profile_Muna%20Mohamed.pdf",
};

const CONSERVATION: LocalResearchSource = {
  label: "Brighton & Hove City Council — conservation areas",
  url: "https://www.brighton-hove.gov.uk/planning/heritage/conservation-areas",
};

const TREES: LocalResearchSource = {
  label: "Brighton & Hove City Council — Tree Preservation Orders",
  url: "https://www.brighton-hove.gov.uk/libraries-leisure-and-arts/parks-and-green-spaces/tree-preservation-orders",
};

const HERITAGE: LocalResearchSource = {
  label: "Brighton & Hove City Council — heritage and sustainability guidance",
  url: "https://www.brighton-hove.gov.uk/planning/heritage/heritage-and-sustainability-issues-conservation-areas",
};

export const BRIGHTON_PROFILE: LocalAreaProfile = {
  city: "Brighton",
  housingSummary:
    "Brighton & Hove has an unusually high share of flats and private renting. Census 2021 material published by the council shows around half of households live in flats and roughly one in three rent privately. That makes floor level, communal access, managing-agent involvement and occupied-property logistics especially relevant when describing trade work.",
  housingFacts: [
    { value: "51.9%", label: "households in flats, maisonettes or apartments" },
    { value: "32.7%", label: "households privately rented" },
    { value: "52.4%", label: "households owner occupied" },
    { value: "121,401", label: "households recorded in Census 2021" },
  ],
  areas: ["Kemptown", "Hanover", "Preston Park", "Patcham", "Hove", "Portslade", "Rottingdean", "Seven Dials"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Brighton & Hove City Council — conservation area and neighbourhood information",
  areaSourceUrl: CONSERVATION.url,
  tradeContent: {
    handyman: {
      eyebrow: "Brighton handyman context",
      heading: "Flats, converted buildings and access can shape a Brighton handyman visit",
      intro: "Brighton's high proportion of flats means small household jobs often come with practical access questions that matter before a handyman arrives.",
      points: [
        { title: "Upper-floor access can be part of the job", text: "With more than half of local households living in flats, include the floor, lift availability, communal entrance details and whether bulky furniture or materials need carrying through shared stairs." },
        { title: "Private renting is a major local use case", text: "Around a third of households rent privately. If a landlord or agent is arranging repairs, state who will provide access and who can approve extra work discovered during the visit." },
        { title: "Older converted properties need a clear task list", text: "Many Brighton homes are flats within older buildings. Group shelves, fittings, doors, sealant and minor repairs together and flag unusual walls, shared corridors or restricted parking rather than treating every visit like a modern house." },
      ],
      checklistHeading: "What to include in a Brighton handyman request",
      checklistIntro: "A short practical brief can prevent wasted time on access and setup.",
      checklist: ["State house or flat, floor level, lift and communal-access arrangements.", "List every small task you want completed in the same visit.", "Mention difficult parking, loading or carrying routes and identify the decision-maker for rented homes."],
      sources: [HOUSING],
    },
    plumber: {
      eyebrow: "Brighton plumbing context",
      heading: "Flat layouts and shared building routes make property details important",
      intro: "A leak in a converted or purpose-built flat can involve a different first visit from the same symptom in a house, so floor level and building management details are useful from the start.",
      points: [
        { title: "Shared buildings can complicate isolation and pipe routes", text: "Brighton's high flat share means it is worth saying which floor the fault is on, where water can be isolated if known and whether pipework appears to enter a communal or building-managed space." },
        { title: "Rental repairs can involve several contacts", text: "For privately rented homes, identify whether the tenant, landlord or agent will provide access and who can authorise additional repair if the plumber finds a wider problem." },
        { title: "Describe what you can observe, not a diagnosis", text: "State where water appears, when it happens and whether neighbouring rooms or flats seem affected. This is more useful than guessing whether the cause is a waste, supply pipe or shared service." },
      ],
      checklistHeading: "Details that help Brighton plumbers assess the visit",
      checklistIntro: "Make the location of the problem and the building access clear.",
      checklist: ["Give the property type and floor level.", "Say whether the water can be isolated and whether the leak is still active.", "For flats or rentals, explain communal access and who can approve follow-on work."],
      sources: [HOUSING],
    },
    electrician: {
      eyebrow: "Brighton electrical context",
      heading: "Rented homes and flats create distinct electrical briefs in Brighton",
      intro: "Brighton's rental and flat-heavy housing market makes it useful to distinguish an ordinary household fault from landlord safety work or an issue that may cross into communal areas.",
      points: [
        { title: "Say when work relates to a rented property", text: "With private renting around one third of households, state whether the request is a routine repair, inspection-related work or remedial work from an existing electrical report." },
        { title: "Keep private and communal systems separate", text: "For a flat, identify the consumer unit location if known and say whether the affected light, socket or supply is inside the home or appears to be in a shared hallway or managed part of the building." },
        { title: "Older buildings can make the existing installation less predictable", text: "If the property is a converted older building, mention previous alterations or mixed-age fittings that you know about, but leave live investigation and testing to the electrician." },
      ],
      checklistHeading: "What Brighton electricians need before responding",
      checklistIntro: "A factual symptom and building description are more valuable than a guessed fault.",
      checklist: ["Say whether the home is rented and whether an EICR or remedial report already exists.", "Describe tripping, heat, smells, flickering or loss of power without touching live equipment.", "For flats, include floor, access and whether the issue is private or communal."],
      sources: [HOUSING],
    },
    roofer: {
      eyebrow: "Brighton roofing context",
      heading: "Historic areas and dense housing can materially change a Brighton roofing job",
      intro: "Brighton & Hove has 34 conservation areas and some also have Article 4 controls. Roof covering, visible alterations and access therefore deserve an address-specific check before a major repair or replacement is priced.",
      points: [
        { title: "Conservation status can affect roof alterations", text: "The council says planning controls are tighter in conservation areas and that some areas have additional Article 4 Directions. Check the address before assuming a visible re-roof or roof alteration can proceed as routine work." },
        { title: "Shared and converted buildings need ownership boundaries understood", text: "In blocks and converted flats, clarify whether the roof is part of the freehold or managed common parts before treating a leak as an individual flat repair." },
        { title: "Access should be described before quotations are compared", text: "Dense streets, rear-only access and upper-storey work can alter scaffolding or tower requirements. Explain front, side and rear access and where materials can be loaded." },
      ],
      checklistHeading: "Checks before posting Brighton roofing work",
      checklistIntro: "Planning status and access can change the scope before any roof covering is selected.",
      checklist: ["Check conservation-area, Article 4 and listed-building status for major visible roof work.", "For flats, establish whether the roof is privately owned or managed as a common part.", "Describe scaffold access, roof type, chimneys, valleys and the exact position of the defect."],
      sources: [CONSERVATION, HERITAGE],
    },
    "painter-decorator": {
      eyebrow: "Brighton decorating context",
      heading: "Exterior finishes and occupied flats need a Brighton-specific decorating brief",
      intro: "Brighton's historic streets, conservation areas and large rented sector mean exterior decorating and rapid rental refreshes should not be described as the same generic painting job.",
      points: [
        { title: "Historic exteriors can need extra care", text: "The council provides specific guidance for work in conservation areas and historic buildings. For exterior masonry, timber or architectural features, identify any designation before agreeing preparation or finish changes." },
        { title: "Converted flats create shared-area boundaries", text: "If decorating involves a flat, make clear whether halls, stairwells, windows or exterior elements are inside the demise or are communal areas managed by a freeholder or agent." },
        { title: "Rental refreshes need an occupied-or-empty plan", text: "Brighton's large private rented sector makes end-of-tenancy and between-tenancy work common. Say whether rooms are empty, furnished or occupied so protection and sequencing can be priced properly." },
      ],
      checklistHeading: "What to add to a Brighton decorating request",
      checklistIntro: "Clarify the surfaces, building status and occupancy before comparing finishes and prices.",
      checklist: ["For exterior work, mention conservation or listed status where relevant.", "Say whether the property is occupied, empty or rented and who provides access.", "Describe existing coatings, damaged plaster, wallpaper and any communal areas involved."],
      sources: [CONSERVATION, HERITAGE, HOUSING],
    },
    "flooring-fitter": {
      eyebrow: "Brighton flooring context",
      heading: "Upper-floor delivery and occupied flats can change a Brighton flooring quote",
      intro: "With more than half of households in flats, flooring work in Brighton frequently depends on how materials reach the room and how the existing floor can be removed without blocking shared routes.",
      points: [
        { title: "Floor level and carrying route matter", text: "Include lift dimensions or availability, stair width, communal corridors and where flooring packs can be unloaded and stored before fitting." },
        { title: "Shared buildings may have lease or management requirements", text: "Before changing floor finishes in a flat, check whether the lease or building management imposes requirements around underlay, acoustic treatment or working hours." },
        { title: "Rental turnover affects sequencing", text: "For an empty rental, whole-property fitting may be straightforward. In occupied flats, say which rooms must remain usable and whether furniture moving, uplift and disposal are part of the quote." },
      ],
      checklistHeading: "What Brighton floor fitters need to know first",
      checklistIntro: "Separate the fitting itself from delivery, uplift and building-management constraints.",
      checklist: ["Give the floor level, lift and stair access for material delivery.", "Check any lease or managing-agent requirements before changing flooring in a flat.", "State the existing covering, furniture situation and whether uplift, disposal or levelling is required."],
      sources: [HOUSING],
    },
    builder: {
      eyebrow: "Brighton building context",
      heading: "Planning status and tight urban sites should be part of a Brighton building brief",
      intro: "Brighton's historic fabric and dense residential streets mean extensions, structural alterations and exterior changes can involve more than the construction work itself.",
      points: [
        { title: "Conservation and Article 4 status should be checked early", text: "Brighton & Hove has numerous conservation areas and additional controls in some of them. Check the address before assuming external alterations, roof changes or visible extensions fall within normal permitted development." },
        { title: "Historic buildings can need suitable methods and materials", text: "The council's heritage guidance advises attention to the significance and fabric of historic properties. Tell builders about listed or conservation status before asking for a like-for-like modern specification." },
        { title: "Restricted access changes site logistics", text: "For terraces, flats and dense streets, identify delivery space, waste-removal routes, neighbour access and where materials can be stored. Those practical constraints can affect programme and cost." },
      ],
      checklistHeading: "Before comparing Brighton building quotes",
      checklistIntro: "Make planning, property and access constraints part of the scope rather than adding them later.",
      checklist: ["Check conservation, Article 4 and listed status before major alterations.", "Provide drawings or approvals where they exist and identify any party-wall or shared-building issues.", "Explain access for deliveries, skips, scaffolding and material storage."],
      sources: [CONSERVATION, HERITAGE],
    },
    gardener: {
      eyebrow: "Brighton garden context",
      heading: "Protected trees and difficult access can change a Brighton garden job",
      intro: "Brighton & Hove has extensive protected-tree coverage and many conservation areas, while dense urban properties can have gardens reached only through the house or narrow side passages.",
      points: [
        { title: "Tree protection should be checked before significant work", text: "The council says hundreds of trees are protected by Tree Preservation Orders, and qualifying trees in conservation areas require six weeks' written notice before work." },
        { title: "Garden access can determine what machinery is practical", text: "State whether there is direct side or rear access, the gate width and whether equipment or green waste must pass through a flat, house or shared passage." },
        { title: "Ordinary maintenance and protected-tree work are different jobs", text: "Separate mowing, hedge cutting and clearance from pruning or removing mature trees so the right permissions, equipment and expertise can be considered." },
      ],
      checklistHeading: "What to check before posting Brighton garden work",
      checklistIntro: "Clarify tree status and the physical route into and out of the garden.",
      checklist: ["Check TPO and conservation-area status before significant tree pruning or removal.", "Give gate widths and explain if access is only through the property or a shared route.", "Say whether green waste removal and machinery are required."],
      sources: [TREES, CONSERVATION],
    },
  },
};
