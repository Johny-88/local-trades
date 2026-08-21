import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "London Borough of Bromley — Local Plan Integrated Impact Assessment 2025",
  url: "https://www.bromley.gov.uk/downloads/file/3656/local-plan-integrated-impact-assessment-scoping-report-july-2025",
};

const CENSUS: LocalResearchSource = {
  label: "London Borough of Bromley — Census 2021",
  url: "https://www.bromley.gov.uk/census",
};

const CONSERVATION: LocalResearchSource = {
  label: "London Borough of Bromley — conservation areas",
  url: "https://www.bromley.gov.uk/conservation/conservation-areas-2",
};

const ARTICLE4: LocalResearchSource = {
  label: "London Borough of Bromley — Article 4 direction areas",
  url: "https://www.bromley.gov.uk/downloads/download/72/article-4-direction-areas",
};

const TREES: LocalResearchSource = {
  label: "London Borough of Bromley — tree protection",
  url: "https://www.bromley.gov.uk/trees/tree-protection/4",
};

const TPOS: LocalResearchSource = {
  label: "London Borough of Bromley — Tree Preservation Orders",
  url: "https://www.bromley.gov.uk/TreeProtection",
};

export const BROMLEY_PROFILE: LocalAreaProfile = {
  city: "Bromley",
  housingSummary:
    "Bromley has a strongly suburban housing profile with substantial numbers of semi-detached, terraced and detached homes alongside purpose-built flats. The borough's 2025 Local Plan evidence reports that 29.9% of households were in semi-detached homes in the 2021 Census, 23.5% in purpose-built flats or tenements, 20.6% in terraces and 18.1% in detached homes. The borough also has 45 conservation areas and more than 2,000 Tree Preservation Orders, so the exact address can matter for exterior, building and garden work.",
  housingFacts: [
    { value: "29.9%", label: "semi-detached homes" },
    { value: "23.5%", label: "purpose-built flats or tenements" },
    { value: "20.6%", label: "terraced homes" },
    { value: "18.1%", label: "detached homes" },
  ],
  areas: ["Beckenham", "Chislehurst", "Orpington", "Petts Wood", "West Wickham", "Penge", "Biggin Hill", "Hayes"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "London Borough of Bromley — current polling district and ward maps",
  areaSourceUrl: "https://www.bromley.gov.uk/downloads/download/614/polling-district-maps-2024---current-maps---wards",
  tradeContent: {
    handyman: {
      eyebrow: "Bromley handyman context",
      heading: "Bromley's suburban housing mix can change a handyman visit",
      intro:
        "Bromley contains large areas of semi-detached and detached housing as well as terraces and flats. A short handyman visit can therefore range from several maintenance jobs around a house and garden to fittings in an upper-floor flat with communal access.",
      points: [
        {
          title: "Semi-detached homes are a major local property type",
          text: "Semi-detached homes represented 29.9% of Bromley households in the 2021 Census. For jobs involving doors, exterior fittings, loft access or garden-side work, mention which part of the property is involved and whether there is direct side or rear access.",
        },
        {
          title: "Flats need access information before bulky jobs",
          text: "Purpose-built flats or tenements accounted for 23.5% of Bromley households. For furniture assembly, wall mounting or larger fittings, include the floor, lift availability, communal-door arrangements and any restrictions on carrying materials through shared areas.",
        },
        {
          title: "Character areas can make exterior details worth checking",
          text: "Bromley has 45 conservation areas and a number of Article 4 directions. If a small job changes a visible exterior feature rather than simply repairing it like-for-like, check the property status before assuming the alteration is routine.",
        },
      ],
      checklistHeading: "What to add to a Bromley handyman request",
      checklistIntro:
        "Give the property type, full task list and access information so the visit can be judged realistically.",
      checklist: [
        "List every small repair, fitting or assembly task you want completed in the same visit.",
        "Say whether the property is a house or flat and mention stairs, lifts, side access or communal entrances.",
        "For visible exterior alterations, check whether the address is in a conservation or Article 4 area.",
      ],
      sources: [HOUSING, CONSERVATION, ARTICLE4],
    },
    plumber: {
      eyebrow: "Bromley plumbing context",
      heading: "Attached homes and flats make property layout useful in a Bromley plumbing brief",
      intro:
        "Bromley's housing is split across semi-detached homes, terraces, detached houses and flats. The same leak or low-pressure symptom can therefore involve very different pipe routes, isolation points and access arrangements.",
      points: [
        {
          title: "Attached homes can have extensions and shared boundaries",
          text: "Semi-detached and terraced homes together represented 50.5% of Bromley households in 2021. If the issue is near a party wall, shared drain route, rear extension or loft conversion, describe that position rather than only naming the room.",
        },
        {
          title: "Flats may involve communal service routes",
          text: "With 23.5% of households in purpose-built flats or tenements, include the floor level, whether you know where water can be isolated and whether the problem appears to involve a communal riser or building-managed area.",
        },
        {
          title: "The observable symptom is more useful than a guessed cause",
          text: "Say when water appears, whether it is active, which fixtures are affected and whether the supply can be isolated. This gives a plumber a useful first-visit brief without relying on a homeowner diagnosis that may be wrong.",
        },
      ],
      checklistHeading: "Details that help Bromley plumbers assess the job",
      checklistIntro:
        "Describe the symptom, property layout and access before comparing responses.",
      checklist: [
        "Give the property type, floor level where relevant and exact location of the problem.",
        "Say whether the water can be isolated safely and whether the fault is active or intermittent.",
        "Mention extensions, shared areas or managed building services that could affect access to pipework.",
      ],
      sources: [HOUSING],
    },
    electrician: {
      eyebrow: "Bromley electrical context",
      heading: "Bromley's mix of houses and flats makes the installation context worth describing",
      intro:
        "Electrical work in a suburban house can have a very different scope from the same symptom in a purpose-built flat. Bromley's varied housing stock means the age of the property, consumer-unit location and boundary between private and communal systems are useful details.",
      points: [
        {
          title: "Older suburban houses may have several eras of alteration",
          text: "Large areas of Bromley contain established semi-detached, detached and terraced homes. If you know the property has been extended, rewired in stages or has converted loft or garage space, say which part of the installation is affected.",
        },
        {
          title: "Flats need a clear private-versus-communal boundary",
          text: "Purpose-built flats or tenements represented 23.5% of households in 2021. State whether the fault is inside the flat or appears to involve communal lighting, entry systems, shared meters or another building-managed area.",
        },
        {
          title: "Describe symptoms without investigating live equipment",
          text: "Tell the electrician about tripping, loss of power, heat, smells, buzzing or flickering and which rooms or circuits are affected. Leave covers, consumer units and live testing to the electrician.",
        },
      ],
      checklistHeading: "Before Bromley electricians respond",
      checklistIntro:
        "Give the property and circuit context while keeping the description safely observational.",
      checklist: [
        "Mention the approximate property age, extensions or known rewiring history if available.",
        "For flats, identify whether the affected equipment is private or in a communal area.",
        "Describe the symptoms and affected rooms or circuits without opening live electrical equipment.",
      ],
      sources: [HOUSING],
    },
    roofer: {
      eyebrow: "Bromley roofing context",
      heading: "Conservation controls and attached roof lines can materially change Bromley roofing work",
      intro:
        "Roofing in Bromley needs both a property check and an address check. The borough has 45 conservation areas and a substantial stock of semi-detached and terraced homes where chimneys, valleys, gutters and roof lines can interact with adjoining properties.",
      points: [
        {
          title: "Check conservation and Article 4 controls before a major re-roof",
          text: "Bromley has 45 conservation areas and publishes Article 4 directions for selected areas. Replacement materials, roof alterations and other visible changes should be checked against the property's planning status before a final specification is agreed.",
        },
        {
          title: "Shared roof details are common in the local housing stock",
          text: "Semi-detached and terraced homes together made up 50.5% of Bromley households in 2021. Describe party roof lines, shared chimneys, valleys, adjoining gutters and exactly where the defect sits in relation to the neighbouring property.",
        },
        {
          title: "Suburban plots still need scaffold and access detail",
          text: "Front drives and side passages can make access easier, but mature planting, narrow side routes and rear extensions can still restrict scaffolding. Mention the route to each elevation before a roofer prices access equipment.",
        },
      ],
      checklistHeading: "Checks before requesting Bromley roofing quotes",
      checklistIntro:
        "Confirm planning status, shared roof details and scaffold access before comparing replacement or repair proposals.",
      checklist: [
        "Check conservation-area, Article 4 and listed-building status for major or visible roof work.",
        "Describe roof type, chimneys, valleys, extensions and any shared roof or gutter lines.",
        "Explain front, side and rear access and any restrictions on scaffolding or material storage.",
      ],
      sources: [HOUSING, CONSERVATION, ARTICLE4],
    },
    "painter-decorator": {
      eyebrow: "Bromley decorating context",
      heading: "Established housing and conservation areas can change a Bromley decorating scope",
      intro:
        "Bromley has many established suburban homes with exterior timber, masonry and period details as well as purpose-built flats. Interior refreshes and character-sensitive exterior decorating should not be treated as the same generic painting job.",
      points: [
        {
          title: "Exterior character can be protected",
          text: "The borough has 45 conservation areas, and selected Article 4 directions place tighter controls on alterations. Before changing a visible exterior finish or architectural detail, check whether the property is affected rather than assuming ordinary permitted rights apply.",
        },
        {
          title: "Older finishes often make preparation the real job",
          text: "Established semi-detached, detached and terraced homes can have multiple layers of paint, repaired render, old wallpaper or timber that needs more preparation than a newer interior. Describe peeling, cracking, staining and damaged plaster rather than only the final colour you want.",
        },
        {
          title: "Flats change access and working logistics",
          text: "With 23.5% of households in purpose-built flats or tenements, mention floor level, lift access, communal protection requirements and any limits on deliveries or working hours where relevant.",
        },
      ],
      checklistHeading: "What to add to a Bromley decorating brief",
      checklistIntro:
        "Make preparation, property access and any heritage-sensitive exterior work clear before quotes are compared.",
      checklist: [
        "Describe existing paint, wallpaper, damaged plaster, staining or exterior coatings that need preparation.",
        "For flats, mention floor, lift and communal access or protection requirements.",
        "For exterior work, check conservation-area or Article 4 constraints before changing visible finishes.",
      ],
      sources: [HOUSING, CONSERVATION, ARTICLE4],
    },
    "flooring-fitter": {
      eyebrow: "Bromley flooring context",
      heading: "Property age, flat access and subfloor preparation can change Bromley flooring work",
      intro:
        "Bromley's mix of established houses and purpose-built flats means two rooms of the same size can require very different preparation and delivery arrangements. The existing floor and route into the property are as important as the new finish.",
      points: [
        {
          title: "Established houses can contain mixed floor construction",
          text: "Semi-detached, terraced and detached homes dominate much of Bromley's suburban housing. Extensions, knock-throughs and older room layouts can create changes in floor level or substrate that need checking before a continuous new finish is specified.",
        },
        {
          title: "Flats make material delivery part of the job",
          text: "Purpose-built flats or tenements accounted for 23.5% of households in 2021. Give the floor level, lift dimensions or stair access and say where long or heavy flooring packs can be delivered and stored.",
        },
        {
          title: "Lease or management rules may affect hard flooring",
          text: "For a managed or leasehold flat, check any requirements for acoustic underlay, hard-floor coverings, working hours or communal protection before buying materials. Those rules can change the suitable flooring system.",
        },
      ],
      checklistHeading: "What Bromley flooring fitters need to know",
      checklistIntro:
        "Separate access, uplift and subfloor work from the area of new flooring.",
      checklist: [
        "State the existing covering and any known level changes, extensions or damaged subfloor areas.",
        "For flats, give the floor level, lift or stair access and material delivery route.",
        "Check lease or management rules for hard flooring and acoustic underlay where applicable.",
      ],
      sources: [HOUSING],
    },
    builder: {
      eyebrow: "Bromley building context",
      heading: "Conservation areas, Article 4 controls and mature plots can shape Bromley building projects",
      intro:
        "Bromley's established suburban neighbourhoods include conservation areas, Article 4 directions, protected trees and many attached homes. Extensions and alterations should therefore start with the exact site's planning and access constraints rather than a borough-wide assumption.",
      points: [
        {
          title: "Planning controls can remove normal permitted development rights",
          text: "Bromley publishes numerous Article 4 direction areas alongside its 45 conservation areas. Check the property before assuming that an extension, façade change, roof alteration or other external work can proceed under ordinary permitted development rights.",
        },
        {
          title: "Attached homes need neighbour and boundary detail",
          text: "Semi-detached and terraced homes together represented 50.5% of Bromley households in 2021. Describe shared walls, chimney breasts, roof lines, side access and how close structural work will be to neighbouring property.",
        },
        {
          title: "Protected trees can affect site layout",
          text: "Bromley has more than 2,000 Tree Preservation Orders as well as trees protected within conservation areas. Mature trees near an extension, driveway or excavation should be identified before access, foundations and site logistics are finalised.",
        },
      ],
      checklistHeading: "Before requesting Bromley building quotes",
      checklistIntro:
        "Give builders the planning status, boundary conditions and site constraints before asking for a final price.",
      checklist: [
        "Check conservation-area, Article 4, listed-building and relevant planning constraints.",
        "Mention shared walls, boundaries, roof lines and side access on attached properties.",
        "Identify protected or mature trees close to proposed foundations, access routes or material storage areas.",
      ],
      sources: [CONSERVATION, ARTICLE4, HOUSING, TPOS],
    },
    gardener: {
      eyebrow: "Bromley garden context",
      heading: "Bromley's protected and mature trees make an address check important",
      intro:
        "Bromley is a leafy suburban borough with 45 conservation areas and more than 2,000 Tree Preservation Orders. Routine maintenance may be simple, but significant pruning or removal should never be booked without first checking whether the tree is protected.",
      points: [
        {
          title: "Conservation-area tree work normally needs six weeks' notice",
          text: "Bromley Council states that anyone proposing work to a tree in a conservation area must normally give the authority six weeks' notice. Check the address before treating major pruning or removal as routine garden work.",
        },
        {
          title: "The borough has more than 2,000 Tree Preservation Orders",
          text: "Bromley maintains over 2,000 TPOs protecting individual trees, groups and woodlands. A separately protected tree can require consent regardless of whether the property is inside a conservation area.",
        },
        {
          title: "Suburban gardens still vary greatly in machinery access",
          text: "Detached and semi-detached homes may have side access, while terraces or converted properties may require tools and green waste to pass through the house or a narrow shared route. Give gate widths and access details before larger garden work is priced.",
        },
      ],
      checklistHeading: "Before posting Bromley garden or tree work",
      checklistIntro:
        "Check tree protection first, then describe garden access and waste removal clearly.",
      checklist: [
        "Check TPO and conservation-area status before significant tree pruning, lopping or removal.",
        "Give gate widths and say whether machinery can reach the garden without passing through the home.",
        "Say whether cuttings, soil or green waste should be removed and where a vehicle can load."],
      sources: [TREES, TPOS, CONSERVATION],
    },
  },
};
