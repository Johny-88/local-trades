import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "Office for National Statistics — Census 2021 changes in Ealing",
  url: "https://www.ons.gov.uk/visualisations/censusareachanges/E09000009",
};

const CONSERVATION: LocalResearchSource = {
  label: "Ealing Council — conservation areas",
  url: "https://www.ealing.gov.uk/info/201158/conservation_areas",
};

const ARTICLE4: LocalResearchSource = {
  label: "Ealing Council — Article 4 Directions",
  url: "https://www.ealing.gov.uk/info/201158/conservation_areas/343/about_conservation_areas/2",
};

const TREES: LocalResearchSource = {
  label: "Ealing Council — protected trees",
  url: "https://www.ealing.gov.uk/info/201232/privately-owned_trees/787/protected_trees",
};

export const EALING_PROFILE: LocalAreaProfile = {
  city: "Ealing",
  housingSummary:
    "Ealing is a large West London borough with a strong private rented sector and a broad mix of suburban houses, converted properties and flats. Census 2021 data shows private renting reached 34.0% of households, while home ownership was 46.2%. The borough also has 30 conservation areas, creating a clear reason to check planning and heritage constraints for exterior work.",
  housingFacts: [
    { value: "34.0%", label: "households privately rented" },
    { value: "46.2%", label: "households owner occupied" },
    { value: "17.5%", label: "households socially rented" },
    { value: "30", label: "conservation areas across the borough" },
  ],
  areas: ["Ealing", "Acton", "Hanwell", "Greenford", "Northolt", "Southall", "Perivale", "West Ealing"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Ealing Council — conservation areas across Acton, Ealing, Hanwell, Northolt and Southall",
  areaSourceUrl: CONSERVATION.url,
  tradeContent: {
    handyman: {
      eyebrow: "Ealing handyman context",
      heading: "Rental access and mixed property types can shape an Ealing handyman visit",
      intro: "A third of Ealing households rent privately, so small maintenance jobs are often arranged by landlords or agents as well as owner-occupiers.",
      points: [
        { title: "Identify who can approve extra work", text: "For a rented home, say whether the tenant, landlord or agent will be present and who can approve additional repairs if a simple task reveals a wider issue." },
        { title: "Houses and flats need different access details", text: "State whether the job is in a house, purpose-built flat or converted property, and mention floor level, lift access, parking and shared entrances where relevant." },
        { title: "Group small jobs into one clear visit", text: "List fittings, door adjustments, shelves, furniture assembly and minor repairs together so a handyman can judge the likely time and tools rather than pricing an incomplete brief." },
      ],
      checklistHeading: "What to include in an Ealing handyman request",
      checklistIntro: "Make access, tenancy and the full task list clear before comparing responses.",
      checklist: ["Say house or flat and include floor, lift, parking and communal-access details.", "List every small task for the same visit.", "For rentals, identify who provides access and who authorises extra work."],
      sources: [HOUSING],
    },
    plumber: {
      eyebrow: "Ealing plumbing context",
      heading: "Property type and rental management can change an Ealing plumbing job",
      intro: "In a borough with substantial private renting and many flats, the first plumbing visit can depend as much on access and responsibility as on the visible leak.",
      points: [
        { title: "Managed flats may involve shared services", text: "For flats, include the floor, isolation point if known and whether the affected pipework seems to pass into a communal or building-managed area." },
        { title: "Rental jobs can involve more than one decision-maker", text: "With 34% of households privately rented, identify the tenant, landlord or agent contact who can provide access and approve further work." },
        { title: "A factual symptom helps more than a guessed cause", text: "Say where water appears, whether it is continuous or intermittent and what can be isolated safely. This helps plumbers assess urgency without relying on an uncertain diagnosis." },
      ],
      checklistHeading: "Details that help Ealing plumbers assess the visit",
      checklistIntro: "Describe the problem, property and access route precisely.",
      checklist: ["Give the property type, floor level and exact location of the problem.", "Say whether water can be isolated and whether the leak is active.", "For rented or managed properties, identify who provides access and approval."],
      sources: [HOUSING],
    },
    electrician: {
      eyebrow: "Ealing electrical context",
      heading: "Rental safety work and shared buildings create distinct Ealing electrical briefs",
      intro: "Ealing's private rented sector is large enough that landlord electrical work, remedial reports and ordinary homeowner faults should be clearly distinguished.",
      points: [
        { title: "State whether an EICR or report already exists", text: "If the work follows an electrical inspection, say so and share the relevant observations or remedial codes rather than describing the job only as an electrical repair." },
        { title: "Flats need a private-versus-communal boundary", text: "For a flat, identify whether the affected light, socket, meter area or supply is inside the home or appears to be part of a shared hallway or managed system." },
        { title: "Rental access should be agreed before the visit", text: "Where a tenant, landlord and agent are all involved, state who will attend and who can authorise additional work if testing identifies a wider fault." },
      ],
      checklistHeading: "What Ealing electricians need before responding",
      checklistIntro: "Keep the brief factual and identify any existing report or tenancy context.",
      checklist: ["Say whether the home is rented and whether an EICR or remedial report exists.", "Describe tripping, loss of power, flickering, heat or smells without opening live equipment.", "For flats, explain floor access and whether the issue is private or communal."],
      sources: [HOUSING],
    },
    roofer: {
      eyebrow: "Ealing roofing context",
      heading: "Conservation and Article 4 controls can change an Ealing roofing scope",
      intro: "Ealing has 30 conservation areas and several are subject to additional Article 4 Directions. Roof materials, roof alterations and visible changes should therefore be checked against the exact address before major work is treated as routine.",
      points: [
        { title: "Some conservation areas have tighter roof controls", text: "Ealing Council lists Article 4 controls in areas including Bedford Park, Brentham Garden Estate and Hanger Hill estates, with restrictions that can include roof alterations and replacement roof materials." },
        { title: "Do not assume a replacement roof is automatically permitted", text: "Where an Article 4 Direction applies, work that would normally be permitted development may require planning permission. Check the property before agreeing a visible change in covering or form." },
        { title: "Shared roofs need ownership and access clarified", text: "For terraces or flats, describe shared roof lines, valleys, chimneys, gutters and whether a freeholder or managing agent controls the common roof." },
      ],
      checklistHeading: "Checks before posting Ealing roofing work",
      checklistIntro: "Confirm planning status, ownership and physical access before comparing roof quotes.",
      checklist: ["Check conservation-area, Article 4 and listed status for major visible roof work.", "Describe the roof type, shared details, chimneys and exact defect location.", "Explain scaffold access and whether a freeholder or managing agent needs to approve work."],
      sources: [CONSERVATION, ARTICLE4],
    },
    "painter-decorator": {
      eyebrow: "Ealing decorating context",
      heading: "Historic exteriors and rental refreshes need different decorating scopes",
      intro: "Ealing's conservation areas include nineteenth and early twentieth-century residential development, while private renting accounts for a third of households. Those two contexts create very different decorating briefs.",
      points: [
        { title: "Exterior work may sit under conservation controls", text: "In some Article 4 areas, controls extend to exterior painting or previously unpainted surfaces. Check the address before changing the appearance of historic external fabric." },
        { title: "Rental refreshes need an occupancy plan", text: "For privately rented homes, say whether the property is empty between tenancies, furnished or occupied so protection, room sequencing and access can be priced accurately." },
        { title: "Preparation can differ in older properties", text: "If walls, timber or masonry are historic or previously repaired, describe peeling coatings, damaged plaster or staining rather than assuming a simple repaint." },
      ],
      checklistHeading: "What to add to an Ealing decorating request",
      checklistIntro: "Make building status, surface condition and occupancy clear.",
      checklist: ["Check conservation and Article 4 status for exterior changes.", "Say whether the property is empty, occupied or rented and who provides access.", "Describe existing finishes, wallpaper, damaged plaster and any specialist preparation already known."],
      sources: [CONSERVATION, ARTICLE4, HOUSING],
    },
    "flooring-fitter": {
      eyebrow: "Ealing flooring context",
      heading: "Flat access, rental turnover and building rules can affect Ealing flooring work",
      intro: "Floor fitting in Ealing ranges from suburban houses to upper-floor flats and rental refreshes, so delivery and building-management constraints should be separated from the fitting itself.",
      points: [
        { title: "Material delivery can be the first constraint", text: "For flats, include floor level, lift dimensions, stair access and where long or heavy flooring packs can be unloaded and stored." },
        { title: "Managed buildings may have flooring conditions", text: "Before changing hard flooring in a flat, check lease or managing-agent requirements around underlay, acoustic treatment, working hours or protection of common areas." },
        { title: "Rental properties need a clear furniture and uplift plan", text: "Say whether the property is empty or occupied and whether the quote should include moving furniture, lifting old flooring, disposal and subfloor preparation." },
      ],
      checklistHeading: "What Ealing floor fitters need to know first",
      checklistIntro: "Separate access, management requirements and preparation from the new floor finish.",
      checklist: ["Give floor level, lift and stair access for deliveries.", "Check lease or managing-agent rules before installing hard flooring in a flat.", "State existing covering, furniture, uplift, disposal and levelling requirements."],
      sources: [HOUSING],
    },
    builder: {
      eyebrow: "Ealing building context",
      heading: "Article 4 areas and established residential streets can change an Ealing building project",
      intro: "Extensions and exterior alterations in Ealing should be scoped against the exact property because some conservation areas have additional restrictions beyond normal permitted development.",
      points: [
        { title: "Six conservation areas have additional Article 4 restrictions", text: "Ealing Council identifies Bedford Park, Brentham Garden Estate, Churchfields, Ealing Town Centre, Hanger Hill Garden Estate and Hanger Hill Haymills as areas with further restrictions." },
        { title: "Restrictions can cover extensions, roofs and external details", text: "Depending on the area, Article 4 controls can affect extensions, porches, roof alterations, hardstanding, windows, doors, exterior painting and other visible changes." },
        { title: "Site logistics should be priced early", text: "In terraces, flats and busy West London streets, explain delivery access, skip or waste routes, scaffold space and where materials can be stored so the build programme is realistic." },
      ],
      checklistHeading: "Before comparing Ealing builder quotes",
      checklistIntro: "Bring planning status and site logistics into the initial scope.",
      checklist: ["Check conservation, Article 4 and listed status before major external alterations.", "Share drawings, approvals and structural information where available.", "Explain access for deliveries, waste, scaffolding and material storage."],
      sources: [CONSERVATION, ARTICLE4],
    },
    gardener: {
      eyebrow: "Ealing garden context",
      heading: "Protected trees and front-garden controls can matter in Ealing",
      intro: "Ealing Council says many trees are protected either by Tree Preservation Orders or because they stand in conservation areas. Some Article 4 areas also control hardstanding and front-garden changes.",
      points: [
        { title: "Check tree protection before major pruning or removal", text: "Trees may be protected by a TPO or by their location in a conservation area, so significant work should not be booked as routine clearance until status is checked." },
        { title: "Front-garden alterations can be planning-sensitive", text: "Some Article 4 areas restrict hardstanding, enclosures and vehicle access. If landscaping changes a front garden or driveway, check the planning position first." },
        { title: "Access determines machinery and waste removal", text: "Give gate widths and explain if a rear garden can only be reached through the house, a narrow side passage or a shared route." },
      ],
      checklistHeading: "What to check before posting Ealing garden work",
      checklistIntro: "Separate ordinary maintenance from protected-tree or planning-sensitive landscaping.",
      checklist: ["Check TPO and conservation-area status before significant tree work.", "For front-garden changes, check whether Article 4 controls affect hardstanding or enclosure work.", "Explain access, gate widths and whether green waste removal is required."],
      sources: [TREES, ARTICLE4],
    },
  },
};
