import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const PROFILE: LocalResearchSource = {
  label: "Reading Borough Council — Profile of Reading",
  url: "https://www.reading.gov.uk/about-reading/profile-of-reading/",
};

const ARTICLE4: LocalResearchSource = {
  label: "Reading Borough Council — Article 4 directions",
  url: "https://www.reading.gov.uk/planning-and-building-control/article-4-directions/",
};

const CONSERVATION: LocalResearchSource = {
  label: "Reading Borough Council — conservation-area guidance",
  url: "https://www.reading.gov.uk/planning-and-building-control/heritage-and-conservation/conservation-areas-listed-buildings/conservation-areas-guidance-and-advice-for-householders/",
};

const HMO: LocalResearchSource = {
  label: "Reading Borough Council — HMO licensing",
  url: "https://www.reading.gov.uk/housing/private-renting/landlords/houses-in-multiple-occupation-hmos/",
};

const TREES: LocalResearchSource = {
  label: "Reading Borough Council — protected trees",
  url: "https://www.reading.gov.uk/planning-and-building-control/trees-hedges-and-environment/trees/",
};

export const READING_PROFILE: LocalAreaProfile = {
  city: "Reading",
  housingSummary:
    "Reading has a notably large private rented sector alongside owner-occupied homes. The council's current profile reports that 31.9% of households were privately rented in the 2021 Census and 50.4% were owner occupied. The borough also has multiple Article 4 directions and conservation areas, so rental management, HMO requirements and character-sensitive exterior work are all relevant to local trade jobs.",
  housingFacts: [
    { value: "31.9%", label: "private rented households in 2021" },
    { value: "50.4%", label: "owner-occupied households in 2021" },
    { value: "18", label: "Article 4 directions listed by the council" },
    { value: "2026", label: "additional small-HMO licensing began" },
  ],
  areas: ["Caversham", "Caversham Heights", "Emmer Green", "Katesgrove", "Redlands", "Southcote", "Tilehurst", "Whitley"],
  housingSourceLabel: PROFILE.label,
  housingSourceUrl: PROFILE.url,
  areaSourceLabel: "Reading Borough Council — 2026 ward list",
  areaSourceUrl: "https://www.reading.gov.uk/the-council-and-democracy/elections-and-voting/election-results/local-election-results-7-may-2026/",
  tradeContent: {
    handyman: {
      eyebrow: "Reading handyman context",
      heading: "Rental access and character details can change a Reading handyman job",
      intro: "Reading's large private rented sector means many small maintenance jobs are arranged through landlords or agents, while some streets have Article 4 controls protecting distinctive architectural details.",
      points: [
        { title: "Rental jobs should identify who controls access", text: "Private renting represented 31.9% of Reading households in 2021. If a landlord or agent is arranging the job, say who will meet the handyman, whether the tenant is in occupation and who can approve extra work discovered during the visit." },
        { title: "Some exterior details have extra planning protection", text: "Reading has Article 4 directions protecting patterned brickwork and other architectural features on selected streets. If the job involves drilling, fixing or replacing visible exterior details, check the address before treating it as an ordinary odd job." },
        { title: "One clear list helps small jobs stay efficient", text: "Group shelves, flat-pack furniture, door adjustments, sealant, curtain poles and small repairs into one request, then mention parking, stairs or awkward access so the likely visit length is clearer." },
      ],
      checklistHeading: "What to add to a Reading handyman request",
      checklistIntro: "Make the access, task list and any exterior constraints clear before the job is priced.",
      checklist: ["List every small task you want completed in the same visit.", "For a rental, say whether the tenant, landlord or agent provides access and approval.", "For visible exterior work, check whether the address is affected by a conservation area or Article 4 direction."],
      sources: [PROFILE, ARTICLE4],
    },
    plumber: {
      eyebrow: "Reading plumbing context",
      heading: "Reading's rental and HMO market makes plumbing access worth explaining",
      intro: "Plumbing repairs in occupied rented homes and HMOs can involve several people, shared facilities and restricted access. Reading's rental profile makes those practical details especially useful in a local plumbing request.",
      points: [
        { title: "Rental repairs may involve several contacts", text: "With 31.9% of Reading households privately rented in 2021, identify the person at the property, the person authorising the repair and any access restrictions before a plumber attends." },
        { title: "Small HMOs now have additional local licensing", text: "Reading's additional HMO licensing scheme has applied to small HMOs with three or four occupants since 1 March 2026. If the plumbing job is in an HMO, describe shared kitchens, bathrooms or affected rooms so the scope is clear." },
        { title: "Describe the symptom and isolation point", text: "Say where water appears, when it happens and whether the supply can be isolated. For shared accommodation, note whether more than one room or occupier is affected rather than guessing which pipe has failed." },
      ],
      checklistHeading: "Details that help Reading plumbers assess the visit",
      checklistIntro: "A factual symptom plus tenancy and access information gives plumbers a more reliable starting point.",
      checklist: ["Say whether the property is owner-occupied, rented or an HMO and who provides access.", "Describe where the leak or fault appears and whether water can be isolated safely.", "For shared accommodation, explain which bathrooms, kitchens or rooms are affected."],
      sources: [PROFILE, HMO],
    },
    electrician: {
      eyebrow: "Reading electrical context",
      heading: "Rental safety work is a particularly relevant Reading electrical use case",
      intro: "Reading's private rented share is well above the England average shown in the council profile, and the borough has an active HMO sector. Electrical requests should distinguish ordinary faults from landlord inspections and remedial work.",
      points: [
        { title: "Say when the work follows an inspection", text: "For a rented property, make clear whether you need an inspection, remedial work from an existing report or a separate electrical fault repaired. Share the relevant observations or codes rather than asking the electrician to infer the scope." },
        { title: "HMOs can have shared electrical areas", text: "Reading requires additional licensing for small HMOs as well as mandatory licensing where national thresholds apply. If the fault affects shared halls, kitchens, alarms or other common areas, identify that in the request." },
        { title: "Occupied rentals need access planning", text: "With 31.9% of households privately rented in 2021, say who will be present, whether several rooms need entry and whether a landlord or agent must approve further work after testing." },
      ],
      checklistHeading: "Before Reading electricians respond",
      checklistIntro: "Give enough context to separate fault finding, landlord compliance and remedial work.",
      checklist: ["State whether the job is a fault, inspection or remedial work from an existing report.", "For HMOs or shared homes, identify any communal circuits or areas affected.", "Describe tripping, loss of power, heat, smells or flickering without touching live equipment."],
      sources: [PROFILE, HMO],
    },
    roofer: {
      eyebrow: "Reading roofing context",
      heading: "Conservation and Article 4 controls can materially change a Reading re-roof",
      intro: "Reading Borough Council's current conservation guidance specifically warns that roof additions and some replacement roof materials can require planning permission in conservation areas. Article 4 directions add further address-specific controls.",
      points: [
        { title: "Replacement roof materials may need planning permission", text: "Reading's conservation guidance says new or replacement roof and roof tiles can require planning permission unless the materials are similar to the existing property. Check the address before finalising a major replacement specification." },
        { title: "Article 4 directions remove further permitted rights", text: "The council lists 18 Article 4 directions. Some protect architectural features on particular streets, so a roofer should know if the property is affected before assuming normal permitted development rules apply." },
        { title: "Access and roof form still need describing", text: "State whether the roof is terraced, semi-detached, detached or part of a larger building and identify chimneys, valleys, party lines, rear extensions and scaffold access in the brief." },
      ],
      checklistHeading: "Checks before requesting Reading roofing quotes",
      checklistIntro: "Confirm planning status and roof arrangement before comparing replacement proposals.",
      checklist: ["Check conservation-area and Article 4 status for major or externally visible roof work.", "Describe roof type, adjoining roof lines, chimneys, valleys and the exact defect location.", "Mention front and rear access, parking and space for scaffolding or towers."],
      sources: [CONSERVATION, ARTICLE4],
    },
    "painter-decorator": {
      eyebrow: "Reading decorating context",
      heading: "Reading decorating work can range from rental refreshes to protected exterior details",
      intro: "Reading combines a large rental market with conservation areas and Article 4 controls that protect some distinctive façades. Interior repainting and exterior character work therefore need different briefs.",
      points: [
        { title: "Rental refreshes need occupancy and access details", text: "Private renting represented 31.9% of Reading households in 2021. Say whether the property is empty between tenancies, furnished or occupied, because that changes protection, sequencing and working time." },
        { title: "Patterned brickwork and external features can be protected", text: "Reading has Article 4 directions on selected streets to protect patterned brickwork and architectural features. Exterior preparation or coating should not be treated as routine until the property's planning constraints are understood." },
        { title: "Conservation areas can restrict visible exterior changes", text: "The council advises that fewer permitted development rights apply in conservation areas. If the job alters the external appearance rather than simply maintaining an existing finish, check permission before work begins." },
      ],
      checklistHeading: "What to add to a Reading decorating brief",
      checklistIntro: "Make occupancy, preparation and exterior planning constraints clear before prices are compared.",
      checklist: ["Say whether the property is occupied, empty or rented and who provides access.", "Describe existing paint, wallpaper, staining or damaged plaster that needs preparation.", "For exterior work, check conservation-area or Article 4 controls before changing visible finishes."],
      sources: [PROFILE, ARTICLE4, CONSERVATION],
    },
    "flooring-fitter": {
      eyebrow: "Reading flooring context",
      heading: "Rental turnover and occupied homes can change a Reading flooring job",
      intro: "Reading's large private rented sector means floor replacements are often carried out either between tenancies or while a property remains occupied. Those two situations create very different furniture, access and sequencing requirements.",
      points: [
        { title: "Empty and occupied rentals are different jobs", text: "With 31.9% of Reading households privately rented in 2021, say whether the property is vacant, partly furnished or fully occupied. Furniture moving and room-by-room handback can add time that is not visible from the floor area alone." },
        { title: "Shared homes need route and storage planning", text: "For HMOs or shared houses, explain where packs can be stored and whether stairs, shared halls or occupied rooms restrict material movement. Reading's additional HMO licensing makes this a locally relevant property type." },
        { title: "Uplift and subfloor work should be separated", text: "State the existing covering and whether old flooring, underlay or adhesive must be removed. A fitter can then distinguish the installation price from disposal and preparation." },
      ],
      checklistHeading: "What Reading flooring fitters need to know",
      checklistIntro: "Give access, occupancy and preparation details rather than only the room dimensions.",
      checklist: ["Say whether the property is vacant, occupied, rented or shared and whether furniture must be moved.", "Describe stairs, narrow halls or other restrictions on carrying long or heavy flooring packs.", "State the existing floor covering and whether uplift, disposal or levelling is required."],
      sources: [PROFILE, HMO],
    },
    builder: {
      eyebrow: "Reading building context",
      heading: "Article 4, HMO and conservation controls can shape Reading building projects",
      intro: "Reading has several overlapping planning considerations that can matter to extensions, conversions and external alterations. The borough lists 18 Article 4 directions, including controls affecting HMO conversion and architectural features.",
      points: [
        { title: "Article 4 controls are address-specific", text: "Reading's Article 4 directions remove normal permitted development rights in selected areas and streets. Check the property before assuming an extension, façade alteration or conversion is automatically permitted." },
        { title: "Small HMO conversions are controlled in parts of Reading", text: "The council's Article 4 guidance identifies areas including parts of Park, Redlands and Katesgrove where converting a house to a small HMO requires planning permission. HMO licensing is a separate requirement and should not be confused with planning consent." },
        { title: "Conservation areas change the external design test", text: "Reading's conservation guidance says proposals are assessed for whether they preserve or improve local character. Materials, roof changes, extensions and visible external work should be described with that context in mind." },
      ],
      checklistHeading: "Before requesting Reading building quotes",
      checklistIntro: "Give builders the planning status and intended use of the property before finalising the scope.",
      checklist: ["Check conservation-area and Article 4 status before relying on permitted development rights.", "If the project creates or alters an HMO, check both planning and licensing requirements.", "Describe access for materials, skips and scaffolding as well as the internal building work."],
      sources: [ARTICLE4, HMO, CONSERVATION],
    },
    gardener: {
      eyebrow: "Reading garden context",
      heading: "Protected trees need an address check before Reading garden work starts",
      intro: "Routine mowing and hedge work may be simple, but tree work in Reading can require formal permission or advance notice. Conservation-area trees and trees covered by individual TPOs have specific protection.",
      points: [
        { title: "Conservation-area tree work needs six weeks' notice", text: "Reading Borough Council states that residents in a conservation area need to give six weeks' written notice before carrying out tree work. That should be checked before significant pruning or removal is booked." },
        { title: "TPO trees require council permission", text: "If a tree is protected by a Tree Preservation Order, the council says permission must be obtained before pruning. Reading maintains a TPO directory so the status can be checked by address." },
        { title: "Garden access changes the practical quote", text: "Say whether machinery and green waste can leave through a side gate or rear route, or whether everything must pass through the house. Gate width and parking can determine which equipment is realistic." },
      ],
      checklistHeading: "Before posting Reading garden or tree work",
      checklistIntro: "Separate ordinary maintenance from protected-tree work and describe physical access clearly.",
      checklist: ["Check conservation-area and TPO status before significant tree pruning or removal.", "Give gate widths or explain if access is only through the house or a shared passage.", "Say whether green waste must be removed and whether larger machinery is likely to be needed."],
      sources: [TREES, CONSERVATION],
    },
  },
};
