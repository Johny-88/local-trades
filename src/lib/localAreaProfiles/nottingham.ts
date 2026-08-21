import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "ONS — How life has changed in Nottingham: Census 2021",
  url: "https://www.ons.gov.uk/visualisations/censusareachanges/E06000018",
};
const LICENSING: LocalResearchSource = {
  label: "Nottingham City Council — selective licensing",
  url: "https://www.nottinghamcity.gov.uk/qualityhousingforall",
};
const ARTICLE4: LocalResearchSource = {
  label: "Nottingham City Council — Article 4 restrictions",
  url: "https://www.nottinghamcity.gov.uk/hmopermitteddevelopment",
};
const CONSERVATION: LocalResearchSource = {
  label: "Nottingham City Council — conservation areas and listed buildings",
  url: "https://nottinghamcity.gov.uk/information-for-business/planning-and-building-control/planning-policy/conservation-areas-and-listed-buildings/",
};
const TREES: LocalResearchSource = {
  label: "Nottingham City Council — protected trees and trees in conservation areas",
  url: "https://www.nottinghamcity.gov.uk/treepreservation",
};

export const NOTTINGHAM_PROFILE: LocalAreaProfile = {
  city: "Nottingham",
  housingSummary: "Nottingham has a large rented sector, dense inner-city terraces, student and HMO neighbourhoods, suburban housing and flats. Census 2021 shows 45.1% of households were owner-occupied, while the city also retains a large social-rented sector. Selective licensing covers more than 30,000 privately rented homes in designated areas.",
  housingFacts: [
    { value: "45.1%", label: "owner-occupied households in 2021" },
    { value: "25.5%", label: "social-rented households" },
    { value: "30,000+", label: "private rentals in selective-licensing areas" },
    { value: "Citywide", label: "Article 4 control for HMO conversions" },
  ],
  areas: ["Arboretum", "Beeston fringe", "Lenton", "Mapperley", "Sherwood", "Sneinton", "The Park", "West Bridgford fringe"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Nottingham City Council — conservation and neighbourhood information",
  areaSourceUrl: "https://www.nottinghamcity.gov.uk/information-for-business/planning-and-building-control/planning-policy/conservation-areas-and-listed-buildings/",
  tradeContent: {
    handyman: {
      eyebrow: "Nottingham handyman context",
      heading: "Rental turnover, HMOs and dense terraces can shape Nottingham handyman jobs",
      intro: "Nottingham has a large rented sector and many dense inner-city streets, so small maintenance jobs often need clear access arrangements and a complete task list before a visit is worth pricing.",
      points: [
        { title: "Rental maintenance often has several decision-makers", text: "Selective licensing covers more than 30,000 privately rented homes in designated Nottingham areas. State whether a tenant, landlord or agent will provide access and who can approve additional repairs." },
        { title: "HMOs can create repeated small maintenance work", text: "Shared houses may involve doors, locks, fittings, sealant, minor repairs and communal spaces. Make clear which rooms are private, which are shared and whether occupants will be present." },
        { title: "Inner-city access can affect a short visit", text: "In places such as Lenton, Arboretum and Sneinton, on-street parking and narrow residential streets can make carrying tools or bulky items less simple. Mention parking and access restrictions in the request." },
      ],
      checklistHeading: "What to include in a Nottingham handyman request",
      checklistIntro: "A clear task list and access plan help small jobs get realistic responses.",
      checklist: ["List all repairs and fittings needed in one visit.", "Explain parking, stairs, communal entrances or restricted access.", "For rented or shared homes, identify who provides access and approval."],
      sources: [LICENSING, HOUSING],
    },
    plumber: {
      eyebrow: "Nottingham plumbing context",
      heading: "Shared and rented homes make the plumbing brief especially important",
      intro: "Nottingham's rented and HMO housing means a leak or bathroom fault may affect more than one occupant and may involve landlords or agents as well as the person reporting it.",
      points: [
        { title: "Shared houses need the affected area identified clearly", text: "Say whether the problem is in a private bedroom, shared bathroom, kitchen or communal area and whether several occupants are affected." },
        { title: "Rental repairs may need fast approval", text: "Where a landlord or agent is responsible, identify who can authorise follow-on work if the plumber discovers that the first repair is not enough." },
        { title: "Older terraces can contain altered pipe routes", text: "Describe the visible symptom and isolation point if known rather than assuming where hidden pipework runs in an older or converted property." },
      ],
      checklistHeading: "Details that help Nottingham plumbers assess the first visit",
      checklistIntro: "Make the symptom, occupancy and access clear before responders compare the job.",
      checklist: ["Give the exact room, floor and property type.", "Say whether water can be isolated and whether the problem is active.", "For rentals or HMOs, identify the access contact and approval contact."],
      sources: [LICENSING, HOUSING],
    },
    electrician: {
      eyebrow: "Nottingham electrical context",
      heading: "Landlord safety work and shared houses are common Nottingham electrical briefs",
      intro: "Electrical requests in Nottingham can range from ordinary faults to EICR remedials in rented homes and shared properties. Stating which type of job you have makes the request much more useful.",
      points: [
        { title: "Say when the job follows an electrical report", text: "If the work is prompted by an EICR or landlord inspection, share the relevant observations or codes and distinguish remedial work from a separate fault." },
        { title: "Shared homes need circuit and room details", text: "In HMOs or converted properties, say whether the issue affects one room, a communal area or several occupants and where the consumer unit is if known." },
        { title: "Do not confuse planning rules with electrical safety", text: "Nottingham's citywide HMO Article 4 direction concerns planning use, not electrical competence. Electrical work still needs an appropriately competent electrician and the correct testing or certification where required." },
      ],
      checklistHeading: "What to include before Nottingham electricians respond",
      checklistIntro: "A factual brief is safer and easier to compare than a guessed diagnosis.",
      checklist: ["Mention any EICR or remedial report.", "Describe tripping, loss of power, heat, smells or flickering without opening live equipment.", "For shared housing, state whether the issue is private or communal."],
      sources: [LICENSING, ARTICLE4],
    },
    roofer: {
      eyebrow: "Nottingham roofing context",
      heading: "Conservation controls and dense terraces can change a Nottingham roofing job",
      intro: "Nottingham has conservation areas where extra planning controls protect visible building features, including some properties with Article 4 directions. The exact address should therefore be checked before major roof alterations are priced.",
      points: [
        { title: "Some conservation areas have additional Article 4 controls", text: "Nottingham City Council identifies Article 4 directions affecting properties in areas including Canning Circus, New Lenton, Sneinton, Strelley Village and Waterloo Promenade." },
        { title: "Terraces make shared roof details important", text: "On continuous rows of housing, describe party lines, shared chimneys, valleys and gutter runs so the roofer understands which elements belong to the property." },
        { title: "Access and scaffolding can dominate the practical scope", text: "Dense streets, rear yards and restricted side access can affect scaffold design, waste removal and how materials reach the roof." },
      ],
      checklistHeading: "Checks before posting Nottingham roofing work",
      checklistIntro: "Planning status and access should be clear before roof quotes are compared.",
      checklist: ["Check conservation, Article 4 and listed status for major external changes.", "Describe roof type, chimneys, valleys and shared boundaries.", "Mention scaffold access, parking and waste-removal constraints."],
      sources: [CONSERVATION, ARTICLE4],
    },
    "painter-decorator": {
      eyebrow: "Nottingham decorating context",
      heading: "Rental refreshes and conservation streets need different Nottingham decorating briefs",
      intro: "A fast redecoration between tenancies and exterior work in a conservation area should not be treated as the same job. Nottingham's housing mix makes occupancy, surface condition and planning context worth stating upfront.",
      points: [
        { title: "Rental turnover work benefits from a clear empty-or-occupied status", text: "For a licensed rental or HMO, say whether rooms are vacant, occupied or being decorated in stages around tenants." },
        { title: "Conservation-area exteriors deserve an early planning check", text: "Some Nottingham conservation areas have additional controls on windows, doors and minor external works. If the decorating changes a visible historic finish, check the address before choosing products." },
        { title: "Older terraces often need more preparation", text: "Traditional plaster, repeated paint layers and repaired joinery can add preparation time that is easy to miss in a headline room count." },
      ],
      checklistHeading: "Local details to add to a Nottingham decorating job",
      checklistIntro: "State occupancy, preparation and heritage constraints clearly before comparing quotes.",
      checklist: ["Say whether the property is occupied, empty or shared.", "Describe existing wallpaper, damaged plaster, staining and old coatings.", "Check conservation or Article 4 status for visible exterior changes."],
      sources: [LICENSING, CONSERVATION],
    },
    "flooring-fitter": {
      eyebrow: "Nottingham flooring context",
      heading: "Shared houses and rental turnover can change Nottingham flooring installation",
      intro: "Flooring work in a student house, HMO, flat or owner-occupied home can involve very different furniture, access and sequencing even when the floor area is similar.",
      points: [
        { title: "Occupied shared homes need a room-by-room plan", text: "If several tenants are living at the property, explain which rooms are available, how furniture will be moved and whether communal routes must remain usable during fitting." },
        { title: "Vacant turnover work can be much more efficient", text: "If the property is empty between tenancies, say so. Fitters can then judge whether uplift, preparation and installation can run continuously rather than around occupants." },
        { title: "Older subfloors may need separate preparation", text: "Describe known timber boards, uneven areas, previous repairs or damp concerns so installation is not priced on the assumption of a ready surface." },
      ],
      checklistHeading: "What Nottingham flooring fitters need to know",
      checklistIntro: "Make access, occupancy and floor preparation part of the initial scope.",
      checklist: ["Give room sizes and the existing floor covering.", "State whether the property is occupied, shared or vacant.", "Explain stairs, lifts, delivery access and whether uplift or disposal is required."],
      sources: [LICENSING, HOUSING],
    },
    builder: {
      eyebrow: "Nottingham building context",
      heading: "HMO and conservation planning rules can materially change Nottingham building work",
      intro: "Nottingham's citywide Article 4 control for HMO conversions and additional Article 4 directions in some conservation areas mean planning status can change a project before construction details are even considered.",
      points: [
        { title: "HMO conversion is not simply a building-layout decision", text: "Nottingham City Council states that the citywide Article 4 direction means planning permission is required to convert a family home to a small HMO use that would otherwise fall under permitted development." },
        { title: "Some conservation-area properties have further restrictions", text: "Additional Article 4 directions can restrict minor building work, outbuildings, extensions and changes to windows and doors at specific protected properties." },
        { title: "Dense sites need logistics written into the scope", text: "On terraced streets, explain skip space, deliveries, scaffold access, shared passages and whether waste must pass through the building." },
      ],
      checklistHeading: "What to check before posting a Nottingham building project",
      checklistIntro: "Planning use, conservation constraints and site logistics should be understood before builders compare the job.",
      checklist: ["Check HMO planning status if the project changes occupancy or use.", "Check conservation, Article 4 and listed status for external alterations.", "Describe delivery, skip, scaffold and waste-removal access."],
      sources: [ARTICLE4, CONSERVATION],
    },
    gardener: {
      eyebrow: "Nottingham garden context",
      heading: "Protected trees and constrained rear access can change Nottingham garden work",
      intro: "Routine maintenance is simple, but tree work is address-sensitive in Nottingham because Tree Preservation Orders and conservation-area controls can require permission or notice before pruning or felling.",
      points: [
        { title: "Tree Preservation Orders require permission", text: "Nottingham City Council states that work to a tree protected by a TPO requires permission and unauthorised work is an offence." },
        { title: "Conservation-area tree work usually needs six weeks' notice", text: "For trees in conservation areas that are not already covered by a TPO, the council requires notice and normally a six-week waiting period before work proceeds." },
        { title: "Rear access can determine what machinery is practical", text: "Terraced and shared properties may have narrow passages or through-house access. Give gate widths and explain how green waste can leave the site." },
      ],
      checklistHeading: "What to include in a Nottingham garden request",
      checklistIntro: "Check tree protection first, then describe the practical route into the garden.",
      checklist: ["Check TPO and conservation-area status before significant tree work.", "Describe side, rear or through-house access and gate widths.", "Say whether green waste removal, stump work or machinery is required."],
      sources: [TREES, CONSERVATION],
    },
  },
};
