import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "Office for National Statistics — Census 2021 towns and cities housing characteristics",
  url: "https://www.ons.gov.uk/peoplepopulationandcommunity/housing/articles/townsandcitiescharacteristicsofbuiltupareasenglandandwales/census2021",
};

const TENURE: LocalResearchSource = {
  label: "Far Cotton & Delapre Housing Needs Assessment — Census 2021 context",
  url: "https://www.farcottonanddelapre-cc.gov.uk/uploads/far-cotton-delapre-hna-final.pdf?v=1763465743",
};

const CONSERVATION: LocalResearchSource = {
  label: "West Northamptonshire Council — conservation area appraisals",
  url: "https://www.westnorthants.gov.uk/designated-heritage-assets/conservation-areas/conservation-area-appraisals",
};

const TREES: LocalResearchSource = {
  label: "West Northamptonshire Council — trees in conservation areas",
  url: "https://www.westnorthants.gov.uk/tree-and-hedgerow-protection/trees-conservation-area-tca",
};

const TREE_MAP: LocalResearchSource = {
  label: "West Northamptonshire Council — check if a tree is protected",
  url: "https://www.westnorthants.gov.uk/tree-and-woods-strategy/find-out-if-tree-protected",
};

export const NORTHAMPTON_PROFILE: LocalAreaProfile = {
  city: "Northampton",
  housingSummary:
    "Northampton has a broad suburban housing base with a relatively high share of detached homes for a major English built-up area, while inner neighbourhoods can have much stronger private-rental concentrations. ONS Census 2021 analysis records 22.0% of Northampton households in detached properties, and local housing evidence for Far Cotton & Delapre shows how tenure can vary sharply within the town.",
  housingFacts: [
    { value: "22.0%", label: "Northampton households in detached homes" },
    { value: "64.8%", label: "owner occupied across wider West Northamptonshire" },
    { value: "19.2%", label: "privately rented across wider West Northamptonshire" },
    { value: "33.5%", label: "privately rented in Far Cotton & Delapre" },
  ],
  areas: ["Abington", "Kingsthorpe", "Far Cotton", "Delapre", "Duston", "St James", "Kingsley", "Wootton"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "West Northamptonshire Council — Northampton conservation areas and local planning evidence",
  areaSourceUrl: CONSERVATION.url,
  tradeContent: {
    handyman: {
      eyebrow: "Northampton handyman context",
      heading: "Suburban houses and denser inner neighbourhoods create different Northampton visits",
      intro: "Northampton's property mix changes noticeably between established suburban areas and denser inner neighbourhoods, so a handyman brief should include the actual access and housing type rather than just the postcode.",
      points: [
        { title: "House jobs may involve garages, gardens and outbuildings", text: "Northampton has a relatively high detached-house share for a major English town. Mention side access, garages, sheds or garden rooms when the handyman needs to carry materials or work outside the main house." },
        { title: "Inner rental areas can need clear access coordination", text: "Local Census-based evidence shows private renting is much higher in some inner neighbourhoods such as Far Cotton & Delapre. If a landlord or agent is arranging repairs, state who will provide access and approve extras." },
        { title: "Group small maintenance tasks together", text: "List furniture assembly, doors, shelves, sealant, fittings and minor repairs in one request so travel and setup are judged against the full visit." },
      ],
      checklistHeading: "What to include in a Northampton handyman request",
      checklistIntro: "Give the tradesperson the property, access and full task picture before they respond.",
      checklist: ["State whether the job is in a house or flat and mention side, rear or communal access.", "List every small task you want completed in the same visit.", "For rented properties, identify who provides access and approves additional work."],
      sources: [HOUSING, TENURE],
    },
    plumber: {
      eyebrow: "Northampton plumbing context",
      heading: "Property layout and access can make similar Northampton plumbing faults very different",
      intro: "A leak in a detached suburban home, terrace or flat can involve different isolation points, pipe routes and access. The property description should therefore be part of the plumbing brief from the start.",
      points: [
        { title: "House layouts can involve lofts, garages and long pipe runs", text: "For suburban houses, mention whether the problem is near an extension, loft tank, garage, utility area or outside wall so the plumber understands the likely route and access." },
        { title: "Denser rented areas may involve tenant and landlord coordination", text: "Where a tenant, landlord or agent is involved, identify who can give access and who can approve additional repair if the initial fault turns out to be wider." },
        { title: "Describe the symptom rather than guessing the fault", text: "Say where water appears, when it happens, whether the supply can be isolated and whether adjacent rooms are affected. That is more useful than an uncertain diagnosis." },
      ],
      checklistHeading: "Details that help Northampton plumbers assess the job",
      checklistIntro: "Make the symptom, property type and access route clear.",
      checklist: ["Give the property type and exact location of the leak or fitting.", "Say whether water can be isolated and whether the problem is active.", "Mention loft, garage, garden, flat or landlord-access constraints where relevant."],
      sources: [HOUSING, TENURE],
    },
    electrician: {
      eyebrow: "Northampton electrical context",
      heading: "Rental properties, extensions and outbuildings create different Northampton electrical briefs",
      intro: "Northampton's mix of larger suburban homes and denser rented neighbourhoods means electrical work can range from landlord remedials to new circuits serving extensions, garages or garden buildings.",
      points: [
        { title: "State when work follows an electrical report", text: "For rented homes, say whether an EICR or remedial report already exists and share the relevant observations so electricians understand the same scope." },
        { title: "Extensions and outbuildings should be identified clearly", text: "If the fault or new installation is in a garage, extension, garden room or external area, explain where it sits relative to the main consumer unit and whether the request is repair or new work." },
        { title: "Describe electrical symptoms without investigating live parts", text: "Give factual details about tripping, flickering, heat, smells or loss of power and leave circuit testing and live investigation to the electrician." },
      ],
      checklistHeading: "What Northampton electricians need before responding",
      checklistIntro: "Include report context, property layout and the affected area.",
      checklist: ["Say whether an EICR or remedial report already exists.", "Identify whether the work is in the main house, flat, garage, extension or outbuilding.", "Describe symptoms without opening or touching live equipment."],
      sources: [TENURE, HOUSING],
    },
    roofer: {
      eyebrow: "Northampton roofing context",
      heading: "Roof type, conservation status and suburban access can change Northampton roofing work",
      intro: "Northampton includes historic conservation areas such as Abington Park, Holy Sepulchre, Kingsley and Kingsthorpe alongside extensive suburban housing. A roof quote should reflect both the property type and any heritage setting.",
      points: [
        { title: "Historic areas deserve a planning check before visible replacement work", text: "West Northamptonshire Council publishes conservation-area appraisals for several Northampton neighbourhoods. If a property is designated or listed, check the planning position before changing visible roof materials or details." },
        { title: "Detached and semi-detached homes can involve several roof sections", text: "Describe main roofs, garages, porches, extensions, valleys and chimneys separately so the roofer knows whether the problem is local or affects multiple roof elements." },
        { title: "Access can be easier on suburban plots but should not be assumed", text: "Explain drive, side and rear access, overhead obstacles and where scaffold or materials could be placed before comparing quotes." },
      ],
      checklistHeading: "Checks before posting Northampton roofing work",
      checklistIntro: "Confirm heritage status and make the roof layout and access clear.",
      checklist: ["Check conservation and listed status before major visible roof changes.", "Describe the main roof, extensions, garages, valleys, chimneys and exact defect location.", "Explain access for scaffolding, towers and material delivery."],
      sources: [CONSERVATION, HOUSING],
    },
    "painter-decorator": {
      eyebrow: "Northampton decorating context",
      heading: "Historic neighbourhoods and rental turnover need different Northampton decorating scopes",
      intro: "Northampton's older conservation areas and varied rental markets mean exterior heritage work, owner-occupied refurbishments and between-tenancy refreshes should be described differently.",
      points: [
        { title: "Conservation-area exteriors may need a more careful finish", text: "Where the property is in a conservation area or is listed, identify that before changing exterior colours, masonry finishes or historic timber details." },
        { title: "Rental refreshes need a clear handover and occupancy status", text: "In neighbourhoods with stronger private renting, say whether the property is empty between tenancies, furnished or occupied so protection and sequencing can be priced properly." },
        { title: "Preparation should be described, not hidden inside the word painting", text: "Mention damaged plaster, old wallpaper, stained ceilings, exterior cracking or timber repairs so decorators are comparing the same preparation scope." },
      ],
      checklistHeading: "What to add to a Northampton decorating request",
      checklistIntro: "Clarify building status, surface condition and occupancy.",
      checklist: ["Mention conservation or listed status for exterior work.", "Say whether the property is empty, occupied or rented and who provides access.", "Describe existing finishes, wallpaper, plaster damage and timber repairs."],
      sources: [CONSERVATION, TENURE],
    },
    "flooring-fitter": {
      eyebrow: "Northampton flooring context",
      heading: "House layouts and inner-town rentals can produce very different Northampton flooring jobs",
      intro: "Flooring work can range from whole-house suburban projects with straightforward delivery to rental flats or terraces where furniture, stairs and room sequencing are the main constraints.",
      points: [
        { title: "Whole-house jobs should separate rooms and subfloors", text: "For larger homes, list each room, existing covering and known subfloor type so fitters can price transitions, door trimming, uplift and preparation accurately." },
        { title: "Flats and terraces need delivery routes described", text: "Give floor level, stair width, parking and the route for long flooring packs if materials cannot be unloaded directly beside the property." },
        { title: "Rental jobs should state whether the property is empty", text: "An empty between-tenancy fit can be sequenced very differently from an occupied home. Say whether furniture moving, old-floor uplift and disposal are included." },
      ],
      checklistHeading: "What Northampton floor fitters need to know first",
      checklistIntro: "Separate room scope, access and preparation from the new finish.",
      checklist: ["List rooms, measurements and existing floor coverings.", "Explain stairs, parking and delivery access for materials.", "State whether furniture moving, uplift, disposal or levelling is required."],
      sources: [HOUSING, TENURE],
    },
    builder: {
      eyebrow: "Northampton building context",
      heading: "Historic areas and varied suburban plots can change a Northampton building project",
      intro: "Northampton includes established conservation areas, dense inner terraces and larger suburban plots. Extensions, structural alterations and refurbishments therefore need an address-specific planning and access brief.",
      points: [
        { title: "Conservation status should be checked before exterior alterations", text: "West Northamptonshire Council publishes appraisals for Northampton conservation areas. If the property is designated or listed, check how proposed extensions, demolition or external changes interact with that status." },
        { title: "Suburban plots need site logistics described", text: "For extensions or larger alterations, give side access, drive width, skip position, neighbour boundaries and space for storing materials." },
        { title: "Inner terraces may have tighter delivery and waste routes", text: "Where access is street-only or through narrow passages, explain how materials, demolition waste and scaffolding can reach the work area before a programme is agreed." },
      ],
      checklistHeading: "Before comparing Northampton builder quotes",
      checklistIntro: "Planning status and site logistics should be visible in the brief from day one.",
      checklist: ["Check conservation and listed status before major external work.", "Share drawings, approvals and structural information where available.", "Explain delivery, skip, scaffold, side-access and material-storage constraints."],
      sources: [CONSERVATION, HOUSING],
    },
    gardener: {
      eyebrow: "Northampton garden context",
      heading: "Protected trees and larger suburban plots make access and permissions important",
      intro: "Northampton's house-led neighbourhoods can include mature gardens and trees, while conservation areas add an extra protection check before significant pruning or removal.",
      points: [
        { title: "Protected-tree status should be checked first", text: "West Northamptonshire Council provides mapping for Tree Preservation Orders and conservation areas. Significant work should not be treated as routine until the tree's status is checked." },
        { title: "Conservation-area trees can require six weeks' notice", text: "The council says qualifying trees in conservation areas require six weeks' written notice before work, unless an exception applies." },
        { title: "Larger gardens still need machinery and waste routes described", text: "Give gate widths, steps, slopes and side access so gardeners know whether mowers, chippers or other equipment can reach the work and how green waste will leave the site." },
      ],
      checklistHeading: "What to check before posting Northampton garden work",
      checklistIntro: "Confirm tree protection and explain access for equipment and waste.",
      checklist: ["Check TPO and conservation-area status before significant tree work.", "Allow for the six-week notice process where conservation-area protection applies.", "Give gate widths, steps and the route for machinery and green waste."],
      sources: [TREES, TREE_MAP],
    },
  },
};
