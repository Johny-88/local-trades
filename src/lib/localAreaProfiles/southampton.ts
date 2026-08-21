import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const RENTAL: LocalResearchSource = {
  label: "Southampton City Council — private rented sector evidence, Census 2021",
  url: "https://www.southampton.gov.uk/moderngov/documents/g7189/Public%20reports%20pack%2025th-Jun-2024%2016.30%20Cabinet.pdf?T=10",
};

const ARTICLE4: LocalResearchSource = {
  label: "Southampton City Council — city-wide HMO Article 4 direction",
  url: "https://www.southampton.gov.uk/modernGov/ieDecisionDetails.aspx?AIId=5038",
};

const CONSERVATION: LocalResearchSource = {
  label: "Southampton City Council — conservation area appraisals",
  url: "https://www.southampton.gov.uk/planning/heritage/conservation-areas/conservation-areas-appraisals/",
};

const TREES: LocalResearchSource = {
  label: "Southampton City Council — protected tree and conservation-area map",
  url: "https://www.southampton.gov.uk/environment/trees-grass-hedges/protected/tpo-map/",
};

const LOCALITIES: LocalResearchSource = {
  label: "Southampton Data Observatory — locality profiles",
  url: "https://data.southampton.gov.uk/place/area-profiles/locality-profiles/",
};

export const SOUTHAMPTON_PROFILE: LocalAreaProfile = {
  city: "Southampton",
  housingSummary:
    "Southampton has an unusually large private rented sector, especially in central and university-adjacent neighbourhoods. City evidence using Census 2021 data reports that 29.2% of households were privately rented, with Banister and Polygon reaching 76.9%. The city also has a long-standing Article 4 direction controlling conversion from ordinary houses to small HMOs, plus multiple conservation areas.",
  housingFacts: [
    { value: "29.2%", label: "private rented households city-wide" },
    { value: "76.9%", label: "private renting in Banister & Polygon" },
    { value: "18", label: "current city council wards" },
    { value: "City-wide", label: "Article 4 control for small HMO conversion" },
  ],
  areas: ["Bassett", "Bitterne Park", "Freemantle", "Portswood", "Shirley", "Sholing", "Swaythling", "Woolston"],
  housingSourceLabel: RENTAL.label,
  housingSourceUrl: RENTAL.url,
  areaSourceLabel: LOCALITIES.label,
  areaSourceUrl: LOCALITIES.url,
  tradeContent: {
    handyman: {
      eyebrow: "Southampton handyman context",
      heading: "Rental occupancy and shared homes can shape a Southampton handyman visit",
      intro: "Southampton's private rented sector is one of the strongest local property signals. In central wards and areas near the universities, small maintenance jobs may be in occupied rentals or shared houses rather than straightforward owner-occupied homes.",
      points: [
        { title: "Rental access should be organised before the visit", text: "City evidence shows 29.2% of Southampton households were privately rented in 2021. Say whether a tenant, landlord or agent will provide access and who can approve any extra repair discovered while the handyman is on site." },
        { title: "Shared homes need a complete room list", text: "Southampton's city-wide HMO planning control reflects the importance of shared housing locally. If several bedrooms, hallways or shared kitchens need small repairs, list them together so the tradesperson knows the full visit rather than one isolated task." },
        { title: "Inner-city parking and carrying routes can matter", text: "In denser central neighbourhoods, mention permit parking, restricted loading, stairs or long routes from the vehicle to the property. These details can materially affect short jobs involving tools or bulky furniture." },
      ],
      checklistHeading: "What to include in a Southampton handyman request",
      checklistIntro: "Make the occupancy, complete task list and access arrangements clear before the visit is priced.",
      checklist: ["Say whether the property is owner-occupied, rented or shared and who provides access.", "List every small repair or fitting task you want completed in the same visit.", "Mention parking restrictions, stairs, communal entrances or bulky items that affect access."],
      sources: [RENTAL, ARTICLE4],
    },
    plumber: {
      eyebrow: "Southampton plumbing context",
      heading: "Shared and rented homes make plumbing access a key Southampton detail",
      intro: "A plumbing fault in a shared house or occupied rental can affect several residents and may require coordination between tenant, landlord and agent. Southampton's high private-rented share makes that context worth including from the start.",
      points: [
        { title: "The responsible contact should be obvious", text: "With 29.2% of city households privately rented in 2021, identify who is at the property, who can authorise repairs and whether the plumber can access all affected rooms or shared facilities." },
        { title: "Shared kitchens and bathrooms change the urgency", text: "In HMOs and shared homes, one failed toilet, shower or kitchen supply may affect several occupiers. Say how many facilities remain usable and whether the problem is confined to one room or a shared service." },
        { title: "Describe the symptom and isolation point", text: "Explain where water appears, whether it is active and whether the supply can be isolated safely. This helps plumbers assess the first visit without relying on a guessed diagnosis." },
      ],
      checklistHeading: "Details that help Southampton plumbers assess the job",
      checklistIntro: "Give a factual symptom, occupancy context and access information before comparing responses.",
      checklist: ["Say whether the property is rented or shared and who can approve the repair.", "Describe where the leak or fault appears and whether water can be isolated safely.", "For shared homes, explain which kitchens, bathrooms or occupiers are affected."],
      sources: [RENTAL, ARTICLE4],
    },
    electrician: {
      eyebrow: "Southampton electrical context",
      heading: "Landlord and shared-house electrical work is especially relevant in Southampton",
      intro: "Southampton's large private rented sector and substantial HMO market mean electricians are often asked to distinguish ordinary faults from inspection or remedial work in occupied rental properties.",
      points: [
        { title: "State whether the job follows an electrical report", text: "For landlord work, make clear whether the request is for inspection, remedial items from an existing report or a separate electrical fault. Sharing the relevant observations prevents responders from pricing different scopes." },
        { title: "Shared areas should be identified separately", text: "In a shared house, say whether the issue affects bedrooms, kitchens, hallways, alarms or other common areas. That helps distinguish one occupant's circuit from a wider property fault." },
        { title: "Occupied rentals need coordinated access", text: "With 29.2% of households privately rented, access to several rooms may need notice and coordination. State who will be present and whether a landlord or agent must approve further work after testing." },
      ],
      checklistHeading: "Before Southampton electricians respond",
      checklistIntro: "Describe the type of electrical job and the occupancy arrangement without touching live equipment.",
      checklist: ["Say whether the job is a fault, inspection or remedial work from an existing report.", "For shared homes, identify affected private and communal rooms or circuits.", "Describe tripping, loss of power, heat, smells or flickering and leave live investigation to the electrician."],
      sources: [RENTAL, ARTICLE4],
    },
    roofer: {
      eyebrow: "Southampton roofing context",
      heading: "Heritage areas and dense streets can change Southampton roofing work",
      intro: "Southampton has conservation areas ranging from the Old Town and Oxford Street to Carlton Crescent, Canute Road, Portswood Residents' Gardens and Old Woolston. Roof materials, visible changes and scaffold access can therefore be very address-specific.",
      points: [
        { title: "Check conservation status before changing the roof", text: "Southampton publishes individual conservation-area appraisals and management documents. For replacement tiles, dormers, roof alterations or prominent external work, check the address before assuming standard permitted development rules apply." },
        { title: "Historic central areas can have tight scaffold logistics", text: "In older and denser streets around the city centre, Oxford Street or the Old Town, explain whether scaffolding can stand on private land, a pavement edge or a narrow frontage and whether access permissions may be needed." },
        { title: "Rented blocks need the correct responsible party", text: "Southampton's sizeable rental sector includes flats and managed buildings. For a roof leak in a block, identify whether the freeholder, managing agent or landlord controls the roof and can authorise access." },
      ],
      checklistHeading: "Checks before requesting Southampton roofing quotes",
      checklistIntro: "Confirm planning status, roof responsibility and scaffold access before comparing proposals.",
      checklist: ["Check conservation-area or listed-building status before major or externally visible roof work.", "Describe whether the roof is private, shared, part of a terrace or part of a managed block.", "Mention scaffold space, pavement or road constraints and who can authorise communal access."],
      sources: [CONSERVATION, RENTAL],
    },
    "painter-decorator": {
      eyebrow: "Southampton decorating context",
      heading: "Southampton decorating jobs often split between rental refreshes and heritage exteriors",
      intro: "The city's high private-rented share creates frequent occupied and between-tenancy decorating work, while conservation areas such as the Old Town, Oxford Street and Carlton Crescent require more care with visible external character.",
      points: [
        { title: "Between-tenancy work should be described as such", text: "With 29.2% of Southampton households privately rented, say whether the property is empty, furnished or occupied. An empty turnaround can be planned very differently from a room-by-room refresh around tenants." },
        { title: "Historic exteriors need a character check", text: "Southampton's conservation-area appraisals identify the special features of each area. Before changing external colours, finishes or character details, check whether the property sits inside one of these designated areas." },
        { title: "Shared homes need sequencing and drying time", text: "In HMOs or shared rentals, hallways, kitchens and bathrooms may need to stay usable. Tell the decorator which spaces can be taken out of use and when so the quote reflects realistic phasing." },
      ],
      checklistHeading: "What to add to a Southampton decorating brief",
      checklistIntro: "Make occupancy, preparation and any heritage-sensitive exterior work clear before quotes are compared.",
      checklist: ["Say whether the property is vacant, occupied, rented or shared and who provides access.", "Describe wallpaper removal, staining, damaged plaster or other preparation that may add time.", "For exterior work, check conservation-area or listed-building constraints before changing visible finishes."],
      sources: [RENTAL, CONSERVATION],
    },
    "flooring-fitter": {
      eyebrow: "Southampton flooring context",
      heading: "Rental turnover, shared access and occupied rooms can change Southampton flooring work",
      intro: "Southampton's rental-heavy neighbourhoods create a clear difference between fitting floors in an empty property between tenancies and working around residents in an occupied flat or shared house.",
      points: [
        { title: "Vacant and occupied rentals need different sequencing", text: "Private renting accounted for 29.2% of city households in 2021. Say whether furniture has been removed and whether all rooms can be worked on together or must be handed back one at a time." },
        { title: "Shared houses need material-route planning", text: "For HMOs and shared homes, explain stairs, narrow hallways, communal entrances and where flooring packs can be stored without blocking common routes." },
        { title: "Flats may have acoustic or management requirements", text: "If the property is a managed or leasehold flat, check any rules on hard floor coverings, acoustic underlay, deliveries or working hours before materials are ordered." },
      ],
      checklistHeading: "What Southampton flooring fitters need to know",
      checklistIntro: "Separate the floor area from occupancy, delivery and preparation constraints.",
      checklist: ["Say whether the property is vacant, occupied or shared and whether furniture must be moved.", "Describe stairs, communal routes and where long flooring packs can be delivered and stored.", "For flats, check building or lease rules for hard flooring and acoustic underlay."],
      sources: [RENTAL, ARTICLE4],
    },
    builder: {
      eyebrow: "Southampton building context",
      heading: "HMO planning controls and heritage areas can shape Southampton building projects",
      intro: "Southampton has a city-wide Article 4 direction removing the normal permitted change from a dwellinghouse to a small HMO, while conservation areas add separate controls for character-sensitive building work.",
      points: [
        { title: "Small-HMO conversion needs planning permission", text: "Southampton confirmed a city-wide Article 4 direction removing permitted development rights for change from C3 dwellinghouses to C4 small HMOs. If a project changes the use of the house as well as the building, include that from the beginning." },
        { title: "Conservation areas require an address-specific design check", text: "The council publishes appraisals for areas including Old Town, Oxford Street, Carlton Crescent, Canute Road, Portswood Residents' Gardens and Old Woolston. Extensions and visible alterations should respond to the relevant area's character." },
        { title: "Dense urban sites need logistics in the quote", text: "For central terraces and compact plots, say where skips, deliveries and scaffolding can go, whether permits may be required and how materials reach the rear of the property." },
      ],
      checklistHeading: "Before requesting Southampton building quotes",
      checklistIntro: "Give builders the planning use, heritage status and site logistics as well as the proposed work.",
      checklist: ["If the project creates or alters an HMO, check the city-wide Article 4 planning requirement.", "Check conservation-area and listed-building status before externally visible alterations.", "Describe access for skips, scaffolding and deliveries, especially on dense or parking-controlled streets."],
      sources: [ARTICLE4, CONSERVATION],
    },
    gardener: {
      eyebrow: "Southampton garden context",
      heading: "Protected trees need checking before Southampton garden work begins",
      intro: "Southampton's online mapping shows both Tree Preservation Orders and conservation areas. Routine gardening may be simple, but pruning or removal can be controlled by the tree's status and the property's location.",
      points: [
        { title: "The council map distinguishes TPO and conservation protection", text: "Southampton's mapping uses separate layers for Tree Preservation Orders and conservation areas and advises residents to confirm protection status before carrying out tree work." },
        { title: "Other controls can apply on some properties", text: "The council notes that privately owned trees can also be protected by former council covenants or development landscaping conditions. A tree outside a conservation area is not automatically unrestricted." },
        { title: "Urban garden access affects machinery and waste", text: "In terraces, flats and dense streets, explain whether the garden has direct rear access or whether tools and green waste must pass through the home or a shared route." },
      ],
      checklistHeading: "Before posting Southampton garden or tree work",
      checklistIntro: "Check protection status first, then describe access and waste removal clearly.",
      checklist: ["Use the council map and confirm TPO, conservation-area or other known tree controls.", "Give gate widths or explain if access is through the house or a communal route.", "Say whether cuttings, soil or green waste should be removed and where a vehicle can load."],
      sources: [TREES, CONSERVATION],
    },
  },
};
