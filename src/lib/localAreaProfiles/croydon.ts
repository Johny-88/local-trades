import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "Croydon Council — Local Housing Needs Assessment 2023",
  url: "https://www.croydon.gov.uk/sites/default/files/2024-03/new-shma-final-report-2023.pdf",
};

const LICENSING: LocalResearchSource = {
  label: "Croydon Council — Selective Licensing Scheme 2026",
  url: "https://www.croydon.gov.uk/housing/landlords/selective-and-additional-hmo-licensing-schemes-2026/selective-licensing-scheme-2026",
};

const ARTICLE4: LocalResearchSource = {
  label: "Croydon Council — Article 4 directions",
  url: "https://www.croydon.gov.uk/planning-and-regeneration/planning-policy/article-4-directions",
};

const CONSERVATION: LocalResearchSource = {
  label: "Croydon Council — conservation areas",
  url: "https://www.croydon.gov.uk/planning-and-regeneration/planning-policy/conservation-and-heritage/conservation-areas",
};

const TREES: LocalResearchSource = {
  label: "Croydon Council — trees in conservation areas",
  url: "https://www.croydon.gov.uk/environment/trees-and-hedges/trees-conservation-areas",
};

export const CROYDON_PROFILE: LocalAreaProfile = {
  city: "Croydon",
  housingSummary:
    "Croydon combines a large flatted housing market with substantial streets of semi-detached and terraced homes. The council's housing assessment reports that 41.1% of dwellings were flats in 2021, while semi-detached homes accounted for 23.9% and terraces 22.9%. Around 26% of homes were privately rented, so access, communal responsibilities and landlord or agent involvement are recurring practical issues for local trade work.",
  housingFacts: [
    { value: "41.1%", label: "of 2021 dwellings were flats" },
    { value: "23.9%", label: "were semi-detached homes" },
    { value: "22.9%", label: "were terraced homes" },
    { value: "26%", label: "were privately rented" },
  ],
  areas: ["Addiscombe", "Coulsdon", "Norbury", "Purley", "Sanderstead", "South Croydon", "South Norwood", "Thornton Heath"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Croydon Council — neighbourhood areas and the 16 places",
  areaSourceUrl: "https://www.croydon.gov.uk/planning-and-regeneration/planning-policy/local-plan-review/neighbourhood-planning/neighbourhood-areas",
  tradeContent: {
    handyman: {
      eyebrow: "Croydon handyman context",
      heading: "Flats, rentals and access can change a Croydon handyman visit",
      intro: "Croydon's housing mix means a short list of odd jobs can involve very different access arrangements. Flats are the borough's largest dwelling group, and a sizeable private rented sector means some jobs are arranged by landlords or agents rather than the person at the property.",
      points: [
        { title: "Flat access is worth describing before the visit", text: "With flats making up 41.1% of Croydon's 2021 housing stock, include the floor, lift access, communal entrance arrangements and whether bulky furniture or materials can be brought in easily." },
        { title: "Rental jobs may need a clear decision-maker", text: "Around 26% of Croydon homes were privately rented in the council's housing assessment. If a landlord or agent is arranging repairs, say who will provide access and who can approve extra work found on site." },
        { title: "Group small tasks into one realistic scope", text: "List shelves, furniture assembly, door adjustments, sealant, fittings and minor repairs together, then mention parking or restricted loading if relevant. That helps a handyman judge whether the work is a short call-out or a longer visit." },
      ],
      checklistHeading: "What to include in a Croydon handyman request",
      checklistIntro: "Give the tradesperson enough property and access detail to understand the visit before responding.",
      checklist: ["Say whether the job is in a house or flat and include floor, lift and communal-access details.", "List every small task you want completed in the same visit.", "For a rental property, identify who provides access and who can approve additional work."],
      sources: [HOUSING, LICENSING],
    },
    plumber: {
      eyebrow: "Croydon plumbing context",
      heading: "A Croydon plumbing brief should make the property layout clear",
      intro: "A leak in a Croydon flat can involve a very different first visit from the same symptom in a terrace or semi-detached house. The borough's high share of flats makes floor level, isolation points and communal boundaries especially useful details.",
      points: [
        { title: "Flats can involve shared routes and managed areas", text: "Because 41.1% of Croydon dwellings were flats in 2021, say which floor the problem is on, whether you know where the water can be isolated and whether any affected pipework appears to enter a communal or building-managed area." },
        { title: "Rental repairs can involve tenant, landlord and agent", text: "Croydon's private rented share was around 26%. For a rented home, name the person who can give access and the person who can authorise further repair if the plumber finds a wider problem." },
        { title: "Describe the symptom rather than guessing the fault", text: "State where water appears, when it happens, whether it is active and whether neighbouring rooms or properties seem affected. This is more useful to a plumber than an uncertain diagnosis." },
      ],
      checklistHeading: "Details that help Croydon plumbers assess the job",
      checklistIntro: "A precise symptom and clear access information make urgent and routine plumbing requests easier to compare.",
      checklist: ["Give the property type, floor level and exact location of the leak or fitting.", "Say whether the water can be isolated safely and whether the leak is still active.", "If the property is rented or managed, identify who provides access and approves follow-on work."],
      sources: [HOUSING, LICENSING],
    },
    electrician: {
      eyebrow: "Croydon electrical context",
      heading: "Croydon's flats and rented homes make the electrical brief important",
      intro: "Electrical work in a flat or rented home often needs more context than a simple description such as 'power keeps tripping'. Croydon's housing profile makes it useful to distinguish faults inside the dwelling from communal supplies and landlord safety work.",
      points: [
        { title: "Separate in-flat faults from communal electrical issues", text: "For a flat, give the floor, consumer-unit location if known and the rooms or circuits affected. If the issue appears to involve a shared hallway, entry system or communal lighting, say so rather than assuming it belongs to the flat." },
        { title: "Landlord safety work is a significant local use case", text: "With around 26% of Croydon homes privately rented, state whether the request is a fault repair, an inspection, or remedial work following an electrical report. Sharing the relevant report observations can reduce ambiguity." },
        { title: "Selective licensing affects many Croydon rental wards", text: "Croydon's 2026 selective licensing scheme covers a number of wards including Addiscombe, South Croydon, South Norwood, Thornton Heath and Waddon. Rental maintenance requests should make the property and responsible contact clear." },
      ],
      checklistHeading: "Before Croydon electricians respond",
      checklistIntro: "Describe symptoms safely and provide any report or tenancy context that affects the scope.",
      checklist: ["Say whether the home is owner-occupied or rented and whether the job follows an electrical report.", "Describe tripping, loss of power, heat, smells or flickering without opening live equipment.", "For flats, identify whether the affected equipment is inside the dwelling or in a communal area."],
      sources: [HOUSING, LICENSING],
    },
    roofer: {
      eyebrow: "Croydon roofing context",
      heading: "Roof type and planning controls can both matter in Croydon",
      intro: "Croydon ranges from flatted developments to long streets of terraces and semi-detached homes, while conservation areas and Article 4 directions add address-specific planning constraints in parts of the borough.",
      points: [
        { title: "Check conservation and Article 4 status before major changes", text: "Croydon Council warns that permitted development rights are more restricted in conservation areas and that Article 4 directions can add further controls. For replacement roofs or visible alterations, check the property before assuming the work is routine." },
        { title: "Attached houses need adjoining roof details", text: "Semi-detached and terraced homes together represented 46.8% of Croydon's 2021 dwellings. Mention party roof lines, shared gutters, valleys, chimneys and exactly where the defect sits relative to the neighbouring property." },
        { title: "Blocks of flats need the right responsible party", text: "With flats forming 41.1% of the borough's stock, a roof leak may relate to a freeholder or managing agent rather than an individual leaseholder. Say who is responsible for the roof and who can authorise access." },
      ],
      checklistHeading: "Checks before posting Croydon roofing work",
      checklistIntro: "Confirm both the roof arrangement and any address-specific planning constraints before comparing replacement quotes.",
      checklist: ["Check conservation-area and Article 4 status for replacement or externally visible work.", "Describe whether the roof is detached, shared, flat, pitched or part of a larger block.", "Mention scaffold access, rear access, parking restrictions and who controls communal areas."],
      sources: [HOUSING, CONSERVATION, ARTICLE4],
    },
    "painter-decorator": {
      eyebrow: "Croydon decorating context",
      heading: "Croydon decorating jobs range from rental refreshes to character-sensitive exteriors",
      intro: "The borough's large private rented and flatted sectors create plenty of occupied and between-tenancy decorating work, while conservation areas mean some exterior finishes and architectural details need extra care.",
      points: [
        { title: "Rental refreshes need an occupied-or-empty brief", text: "Around 26% of Croydon homes were privately rented. Say whether the property is vacant, furnished or occupied, who provides access and whether rooms must be returned to use in stages." },
        { title: "Exterior work can be planning-sensitive", text: "Croydon Council says conservation areas have tighter controls and some Article 4 directions apply to specific streets and areas. Before changing visible exterior finishes or character features, check the address and describe the existing surface." },
        { title: "Flats change protection and access logistics", text: "For a flat, mention the floor, lift, communal routes and any building rules affecting deliveries or working hours. This matters for ladders, dust sheets, wallpaper equipment and larger quantities of paint." },
      ],
      checklistHeading: "What to add to a Croydon decorating brief",
      checklistIntro: "Make the finish, occupancy and building constraints clear before quotes are compared.",
      checklist: ["Say whether the property is occupied, empty or rented and who will provide access.", "For exterior work, check conservation or Article 4 status and describe the existing finish.", "Mention damaged plaster, wallpaper removal, staining or other preparation that could change the scope."],
      sources: [HOUSING, CONSERVATION, ARTICLE4],
    },
    "flooring-fitter": {
      eyebrow: "Croydon flooring context",
      heading: "Croydon's high share of flats makes access and subfloor detail important",
      intro: "Flooring prices are not only about square metres. In Croydon, where flats made up 41.1% of dwellings in 2021, material delivery, lift access, noise rules and old-floor removal can materially change the job.",
      points: [
        { title: "Plan how flooring reaches the room", text: "For an upper-floor flat, give the floor level, lift size or stair access and any restrictions on carrying long flooring packs through communal routes." },
        { title: "Rental and occupied homes need a sequencing plan", text: "With a sizeable private rented sector, say whether the home is empty between tenancies or occupied. Furniture moving, uplift and room-by-room fitting can add significant time compared with an empty property." },
        { title: "Building rules can matter in flats", text: "If the property is leasehold or managed, check whether there are requirements around acoustic underlay, working hours or hard-floor coverings before buying materials. The fitter needs to know those constraints before installation." },
      ],
      checklistHeading: "What Croydon flooring fitters need to know",
      checklistIntro: "Separate the finish you want from access, uplift and subfloor preparation.",
      checklist: ["Give floor level, lift or stair access and any communal delivery restrictions.", "State the existing covering and whether uplift, disposal, levelling or furniture moving is required.", "For flats, check lease or management rules for hard flooring and acoustic underlay before ordering materials."],
      sources: [HOUSING],
    },
    builder: {
      eyebrow: "Croydon building context",
      heading: "Croydon building work can involve heritage, HMO and attached-property constraints",
      intro: "Extensions and alterations need to reflect the exact Croydon address. The borough includes conservation areas and Article 4 controls, while planning permission is required for small HMO conversions across Croydon.",
      points: [
        { title: "Do the planning check before pricing the final design", text: "Croydon Council advises that conservation areas and Article 4 directions can remove normal permitted development rights. Confirm the property's status before assuming an extension, roof alteration or exterior change can proceed without planning permission." },
        { title: "HMO conversions have borough-wide planning control", text: "Croydon Council states that planning permission is required to convert small properties into houses in multiple occupation. If the project changes how a property is used as well as how it is built, include that in the brief from the start." },
        { title: "Attached homes need boundary and neighbour detail", text: "Terraced and semi-detached homes are a major part of Croydon's stock. Describe shared walls, chimney breasts, roof lines, access beside the property and whether structural work approaches a neighbour's building." },
      ],
      checklistHeading: "Before requesting Croydon building quotes",
      checklistIntro: "Give builders the planning status, intended use and site constraints rather than only a room-size description.",
      checklist: ["Check conservation, Article 4 and listed-building constraints before finalising externally visible work.", "State whether the project changes the use of the property, including any HMO proposal.", "Mention party walls, shared roofs, side access, parking and how materials or skips can reach the site."],
      sources: [ARTICLE4, CONSERVATION, HOUSING],
    },
    gardener: {
      eyebrow: "Croydon garden context",
      heading: "Protected trees and garden access can change a Croydon gardening job",
      intro: "Routine lawn and hedge maintenance is straightforward, but significant tree work depends on the exact address. Trees in Croydon conservation areas are protected by a statutory notification process, and individual Tree Preservation Orders can add separate controls.",
      points: [
        { title: "Conservation-area tree work needs advance notice", text: "Croydon Council says six weeks' written notice must be given before carrying out work to trees in a conservation area. Check the property before booking pruning or removal as an ordinary garden-clearance job." },
        { title: "Tree Preservation Orders must also be checked", text: "A tree can be protected by a TPO whether or not the garden is in a conservation area. The council recommends checking tree protection before works that may affect trees." },
        { title: "Rear access changes machinery and waste removal", text: "Say whether the garden has a side gate, rear access or only a route through the house. This affects whether larger tools can be used and how hedge cuttings, soil or green waste can be removed." },
      ],
      checklistHeading: "Before posting Croydon garden or tree work",
      checklistIntro: "Separate routine garden maintenance from protected-tree work and describe access clearly.",
      checklist: ["Check conservation-area and TPO status before significant pruning, lopping or removal.", "Give gate widths or explain if access is only through the house or a shared route.", "Say whether green waste should be removed and whether the job requires machinery."],
      sources: [TREES, CONSERVATION],
    },
  },
};
