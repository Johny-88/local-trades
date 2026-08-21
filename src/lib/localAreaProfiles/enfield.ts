import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "Enfield Council — Borough Profile 2025/26",
  url: "https://www.enfield.gov.uk/__data/assets/pdf_file/0020/109730/Borough-profile-2025-to-2026-Your-council.pdf",
};

const CONSERVATION: LocalResearchSource = {
  label: "Enfield Council — conservation areas",
  url: "https://www.enfield.gov.uk/services/planning/heritage/conservation-areas",
};

const ARTICLE4: LocalResearchSource = {
  label: "Enfield Council — Article 4 Directions in conservation areas",
  url: "https://www.enfield.gov.uk/services/planning/heritage/conservation-areas/article-4-directions-in-conservation-areas",
};

const TREE_GUIDE: LocalResearchSource = {
  label: "Planning Portal — Tree Preservation Orders",
  url: "https://www.planningportal.co.uk/permission/common-projects/trees-and-hedges/tree-preservation-orders",
};

export const ENFIELD_PROFILE: LocalAreaProfile = {
  city: "Enfield",
  housingSummary:
    "Enfield has a more house-led housing stock than many London boroughs, but flats still account for a substantial share. The council's 2025/26 borough profile reports that 61% of households lived in houses and 39% in flats at Census 2021, while 29.5% of households were privately rented. That mix makes both suburban-house logistics and managed-flat access relevant to local trade work.",
  housingFacts: [
    { value: "61%", label: "households living in houses" },
    { value: "39%", label: "households living in flats" },
    { value: "52.4%", label: "households owner occupied" },
    { value: "29.5%", label: "households privately rented" },
  ],
  areas: ["Enfield Town", "Edmonton", "Palmers Green", "Southgate", "Winchmore Hill", "Bush Hill Park", "Enfield Lock", "Ponders End"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Enfield Council — borough conservation areas and local place information",
  areaSourceUrl: CONSERVATION.url,
  tradeContent: {
    handyman: {
      eyebrow: "Enfield handyman context",
      heading: "Houses, flats and rental access create different Enfield handyman visits",
      intro: "Enfield combines a majority house-based housing stock with a sizeable flat and rental market, so the practical brief should reflect the actual property rather than only the task name.",
      points: [
        { title: "House and flat access should be described differently", text: "For houses, mention side access, garages or outbuildings where relevant. For flats, include floor, lift, communal-door and parking details before a handyman accepts bulky fitting or assembly work." },
        { title: "Rental maintenance needs a clear decision-maker", text: "Almost three in ten households rent privately. If a landlord or agent is arranging repairs, say who can provide access and authorise additional work." },
        { title: "A complete task list makes short visits easier to price", text: "Group door adjustments, shelves, furniture assembly, sealant and minor repairs into one request so travel and setup are judged against the full workload." },
      ],
      checklistHeading: "What to include in an Enfield handyman request",
      checklistIntro: "Make the property type, access and complete task list clear.",
      checklist: ["State house or flat and give relevant floor, lift, parking or side-access details.", "List every small job you want done in the same visit.", "For rentals, identify who provides access and approves extras."],
      sources: [HOUSING],
    },
    plumber: {
      eyebrow: "Enfield plumbing context",
      heading: "Property layout can change the first plumbing visit across Enfield",
      intro: "A plumbing fault in a suburban house can be very different from the same symptom in one of Enfield's many flats, where isolation and communal services may matter.",
      points: [
        { title: "Flats need floor and service-boundary details", text: "With 39% of households living in flats, say which floor the problem is on, whether you know where water can be isolated and whether the issue appears to extend into a shared or managed area." },
        { title: "House jobs should include access to external pipework", text: "For houses, mention whether side passages, lofts, gardens, garages or external stop taps affect access to the pipe route or repair area." },
        { title: "Rental jobs can involve tenant, landlord and agent", text: "For privately rented homes, identify who will attend and who can approve extra repair if the plumber discovers a wider fault." },
      ],
      checklistHeading: "Details that help Enfield plumbers assess the job",
      checklistIntro: "Describe the property, symptom and access route before comparing responses.",
      checklist: ["Give property type, floor level and exact problem location.", "Say whether water can be isolated and whether the fault is active.", "Explain any communal, loft, garden or landlord-access constraints."],
      sources: [HOUSING],
    },
    electrician: {
      eyebrow: "Enfield electrical context",
      heading: "Rental work and flats need a clear electrical boundary in Enfield",
      intro: "Enfield's housing profile makes it useful to separate ordinary owner-occupied electrical faults from landlord safety work and issues that may belong to a communal system.",
      points: [
        { title: "State whether the work follows an inspection", text: "For a rented property, say whether an EICR or remedial report already exists and share the relevant observations so electricians price the same work." },
        { title: "Flats need private and communal issues separated", text: "Identify whether the affected fitting, circuit or meter area is inside the flat or appears to belong to a shared hallway or building-managed supply." },
        { title: "House alterations can involve extensions or outbuildings", text: "For homes with garages, garden rooms or extensions, explain which part of the property the circuit serves and whether the work is a repair or a planned new installation." },
      ],
      checklistHeading: "What Enfield electricians need before responding",
      checklistIntro: "Give a factual symptom, property type and any existing report information.",
      checklist: ["Say whether the property is rented and whether an EICR or report exists.", "Describe tripping, flickering, heat, smells or loss of power without touching live parts.", "For flats or outbuildings, clearly identify which area or circuit is affected."],
      sources: [HOUSING],
    },
    roofer: {
      eyebrow: "Enfield roofing context",
      heading: "Conservation controls and house-led streets can alter Enfield roofing work",
      intro: "Enfield has 22 conservation areas, and many are covered wholly or partly by Article 4 Directions. That makes the exact address relevant before visible roof changes are treated as routine replacement work.",
      points: [
        { title: "Many conservation areas have additional Article 4 controls", text: "Enfield Council lists Article 4 coverage across areas including Bush Hill Park, Clay Hill, Enfield Lock, Forty Hill, Hadley Wood, Southgate Green, Trent Park and Winchmore Hill." },
        { title: "Roof alterations can lose normal permitted-development treatment", text: "Where Article 4 applies, specified roof alterations or visible changes may need planning permission even when similar work elsewhere would not." },
        { title: "House-heavy areas still need adjoining details described", text: "For semi-detached and terraced homes, include shared roof lines, chimneys, valleys, gutters and extension roofs so the roofer can distinguish a local repair from work affecting adjoining elements." },
      ],
      checklistHeading: "Checks before posting Enfield roofing work",
      checklistIntro: "Confirm planning status and show the roofer exactly which roof element is affected.",
      checklist: ["Check conservation-area, Article 4 and listed status before major visible work.", "Describe roof type, chimneys, valleys, shared lines and extension roofs.", "Explain front, side and rear access for scaffolding or towers."],
      sources: [CONSERVATION, ARTICLE4, HOUSING],
    },
    "painter-decorator": {
      eyebrow: "Enfield decorating context",
      heading: "Historic streets and rental homes need different decorating briefs in Enfield",
      intro: "Enfield's conservation areas cover distinctive residential streets, while almost three in ten households rent privately. Exterior heritage work and quick rental refreshes therefore need different scopes.",
      points: [
        { title: "Exterior changes may be controlled in Article 4 areas", text: "Some Enfield conservation areas have Article 4 Directions protecting visible features. Check the property before changing external finishes, windows, doors or other character-sensitive elements." },
        { title: "Rental refreshes need the occupancy status", text: "Say whether the property is empty between tenancies, furnished or occupied because this changes protection, room sequencing and access." },
        { title: "Older surfaces can need more preparation", text: "Describe damaged plaster, old wallpaper, stained ceilings, timber condition or previous coatings so quotes are based on preparation as well as the final paint." },
      ],
      checklistHeading: "What to add to an Enfield decorating request",
      checklistIntro: "Clarify property status, occupancy and surface condition.",
      checklist: ["Check conservation and Article 4 status for exterior work.", "Say whether the home is empty, occupied or rented and who provides access.", "Describe existing coatings, wallpaper, plaster damage and exterior timber condition."],
      sources: [CONSERVATION, ARTICLE4, HOUSING],
    },
    "flooring-fitter": {
      eyebrow: "Enfield flooring context",
      heading: "Flats, houses and rental turnover create different Enfield flooring jobs",
      intro: "Enfield's mix of houses and flats means one flooring job may have easy ground-floor delivery while another depends on lifts, communal routes and management rules.",
      points: [
        { title: "Flat delivery should be described before pricing", text: "For the 39% of households living in flats, include floor level, lift availability, stair width and where flooring packs can be unloaded and stored." },
        { title: "Managed buildings may impose flooring conditions", text: "Check lease or managing-agent requirements around underlay, acoustic performance, common-area protection or working hours before changing a hard floor." },
        { title: "Rental jobs should separate fitting from clearance", text: "Say whether the property is empty or occupied and whether furniture moving, old-floor uplift, disposal and subfloor preparation are included." },
      ],
      checklistHeading: "What Enfield floor fitters need to know first",
      checklistIntro: "Make delivery, management rules and preparation part of the initial scope.",
      checklist: ["Give floor level, lift and stair access where relevant.", "Check lease or agent requirements for flats before installing hard flooring.", "State existing covering, furniture, uplift, disposal and levelling needs."],
      sources: [HOUSING],
    },
    builder: {
      eyebrow: "Enfield building context",
      heading: "Article 4 coverage and varied residential sites can change an Enfield build",
      intro: "Enfield includes established conservation areas, suburban houses and denser flat-led locations. Extensions and visible alterations should therefore be checked against the exact property rather than a borough-wide assumption.",
      points: [
        { title: "Conservation and Article 4 status can change what needs permission", text: "Enfield has 22 conservation areas and multiple Article 4 Directions. Certain exterior alterations that are normally permitted can require a planning application in designated streets." },
        { title: "House projects need site logistics described", text: "For extensions or structural work, explain side access, drive width, skip position, neighbour boundaries and where materials can be stored." },
        { title: "Flat projects need ownership boundaries understood", text: "For alterations in flats, identify freeholder or managing-agent involvement and whether the work touches common structure, services or external fabric." },
      ],
      checklistHeading: "Before comparing Enfield builder quotes",
      checklistIntro: "Bring planning status, ownership and access into the scope from the start.",
      checklist: ["Check conservation, Article 4 and listed status before exterior or structural changes.", "Share drawings, approvals and structural information where available.", "Explain delivery, waste, scaffold and neighbour-access constraints."],
      sources: [CONSERVATION, ARTICLE4, HOUSING],
    },
    gardener: {
      eyebrow: "Enfield garden context",
      heading: "Protected landscapes and suburban garden access can affect Enfield garden work",
      intro: "Enfield's many conservation areas and house-led housing stock mean garden jobs often involve mature trees, front gardens, side access and larger plots as well as routine maintenance.",
      points: [
        { title: "Check protection before significant tree work", text: "Trees can be protected by a Tree Preservation Order or by conservation-area rules. Confirm status before booking felling, heavy reduction or other significant work." },
        { title: "Conservation areas can make the setting relevant", text: "Where a garden forms part of a protected streetscape, tree removal, front-boundary changes or other visible alterations may need more care than ordinary maintenance." },
        { title: "Side and rear access should be measured", text: "For larger house gardens, give gate widths, steps and the route for machinery or green waste so gardeners know what equipment is practical." },
      ],
      checklistHeading: "What to check before posting Enfield garden work",
      checklistIntro: "Separate routine maintenance from protected-tree work and describe physical access.",
      checklist: ["Check TPO and conservation-area status before major tree work.", "Give gate widths, steps and side or rear access details.", "Say whether cuttings, soil or green waste must be removed from site."],
      sources: [CONSERVATION, TREE_GUIDE],
    },
  },
};
