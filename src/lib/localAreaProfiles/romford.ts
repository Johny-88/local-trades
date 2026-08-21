import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "ONS — How life has changed in Havering: Census 2021",
  url: "https://www.ons.gov.uk/visualisations/censusareachanges/E09000016/",
};
const CONSERVATION: LocalResearchSource = {
  label: "Havering Council — Romford Conservation Area",
  url: "https://www.havering.gov.uk/planning-3/heritage/2",
};
const ROMFORD_CA: LocalResearchSource = {
  label: "Havering Council — Romford Conservation Area Appraisal and Management Plan",
  url: "https://www.havering.gov.uk/downloads/file/141/romford-conservation-area-appraisal-and-management-plan",
};

export const ROMFORD_PROFILE: LocalAreaProfile = {
  city: "Romford",
  housingSummary: "Romford sits within Havering, one of London's more owner-occupied boroughs. Census 2021 shows 69.5% of Havering households owned their home and 15.8% rented privately. Romford itself combines suburban houses, terraces, flats and a historic town-centre conservation area, so access and planning context vary substantially by street.",
  housingFacts: [
    { value: "69.5%", label: "owner-occupied households across Havering" },
    { value: "15.8%", label: "private rented households" },
    { value: "1968", label: "Romford Conservation Area designated" },
    { value: "Suburban", label: "large house-and-garden catchment" },
  ],
  areas: ["Collier Row", "Gidea Park", "Harold Hill", "Harold Wood", "Rise Park", "Romford Town", "Rush Green", "Squirrels Heath"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Havering Council — heritage and Romford conservation information",
  areaSourceUrl: "https://www.havering.gov.uk/planning-3/heritage/2",
  tradeContent: {
    handyman: {
      eyebrow: "Romford handyman context",
      heading: "Suburban houses, flats and town-centre access create different Romford handyman visits",
      intro: "Romford covers everything from larger suburban homes to flats and central properties, so a short maintenance visit can differ greatly depending on parking, stairs, garden access and the number of tasks involved.",
      points: [
        { title: "Suburban homes often generate mixed maintenance lists", text: "In areas such as Gidea Park, Rise Park and Collier Row, one visit may combine wall mounting, doors, sealant, exterior fittings and small garden-side repairs. List everything together so the handyman can judge the visit realistically." },
        { title: "Central flats need clear access details", text: "For flats near Romford town centre, state the floor, lift availability, communal entrance arrangements and whether parking or loading is restricted." },
        { title: "Owner-occupied housing creates many improvement jobs", text: "Havering's 69.5% owner-occupation rate means local work often includes improvements as well as repairs. Say whether the task is maintenance, replacement or a new fitting so the scope is clear." },
      ],
      checklistHeading: "What to include in a Romford handyman request",
      checklistIntro: "Make the full task list and practical access clear before the tradesperson responds.",
      checklist: ["List all small jobs for the same visit.", "Mention parking, stairs, lifts and rear access.", "Say whether fittings or materials are already on site."],
      sources: [HOUSING],
    },
    plumber: {
      eyebrow: "Romford plumbing context",
      heading: "Romford plumbing jobs can vary between suburban houses and flats",
      intro: "A leak in a house with an extension or utility room can involve a very different first visit from the same symptom in a flat. Give the property layout and isolation information before plumbers compare the job.",
      points: [
        { title: "Suburban homes may have extended plumbing layouts", text: "Kitchens, bathrooms, utility rooms and rear extensions can add later pipe runs to the original house. Describe where the problem appears and whether you know where the water is isolated." },
        { title: "Flats can involve managed or communal areas", text: "For flats, say which floor is affected and whether pipework or water appears to involve a communal riser, hallway or building-managed space." },
        { title: "Older central properties may have repeatedly altered services", text: "Describe the symptom rather than assuming the cause, especially where a building has been converted or refurbished over time." },
      ],
      checklistHeading: "Details that help Romford plumbers assess the visit",
      checklistIntro: "The property type, symptom and access are more useful than a guessed diagnosis.",
      checklist: ["Give the room, property type and floor if relevant.", "Say whether the water can be isolated and whether the leak is active.", "For flats, identify any communal or managed areas involved."],
      sources: [HOUSING],
    },
    electrician: {
      eyebrow: "Romford electrical context",
      heading: "Extensions, refurbishments and flats can change the Romford electrical brief",
      intro: "Romford's suburban housing and central flats mean electrical work can range from added circuits in extended homes to faults and communal-access issues in apartment buildings.",
      points: [
        { title: "Extended homes may contain several phases of electrical work", text: "If the problem is in a loft conversion, rear extension, garage or newer kitchen, say so. It helps the electrician understand whether the affected installation is likely part of a later alteration." },
        { title: "Flats need private-versus-communal clarity", text: "State whether the fault is inside the flat or appears to involve shared lighting, meter cupboards or other building-managed equipment." },
        { title: "Describe symptoms without opening equipment", text: "Explain tripping, heat, smells, flickering or loss of power and which rooms or circuits appear affected, leaving live investigation to the electrician." },
      ],
      checklistHeading: "What to include before Romford electricians respond",
      checklistIntro: "A factual brief makes fault finding and planned work easier to compare.",
      checklist: ["Describe symptoms and affected rooms or circuits.", "Mention extensions, recent renovations or previous electrical work.", "For flats, explain whether the affected equipment is private or communal."],
      sources: [HOUSING],
    },
    roofer: {
      eyebrow: "Romford roofing context",
      heading: "Historic Romford and suburban roof types need different checks",
      intro: "Romford includes a conservation area around the Market Place and historic crossroads as well as large areas of suburban housing. A roof repair in one setting should not automatically be treated like a replacement roof in the other.",
      points: [
        { title: "The Romford Conservation Area protects historic town-centre character", text: "Havering Council identifies the conservation area around Market Place, North Street, South Street and High Street. Major visible roof changes in or near the protected area should be checked before materials are agreed." },
        { title: "Suburban houses often have extensions and multiple roof forms", text: "Bay roofs, garages, rear additions and loft conversions can create several junctions and drainage points. Describe exactly which roof section is affected." },
        { title: "Shared roofs still matter on terraces and semis", text: "Where roofs adjoin neighbours, identify shared chimneys, party lines, valleys and gutter connections so quotes refer to the same scope." },
      ],
      checklistHeading: "Checks before posting Romford roofing work",
      checklistIntro: "Planning context and the exact roof section can materially change the quote.",
      checklist: ["Check conservation or listed status for major visible changes near historic Romford.", "Describe roof type, extensions, chimneys and shared details.", "Mention scaffold, driveway, side and rear access."],
      sources: [CONSERVATION, ROMFORD_CA],
    },
    "painter-decorator": {
      eyebrow: "Romford decorating context",
      heading: "Historic exteriors and suburban interiors create different Romford decorating jobs",
      intro: "Romford's housing spans modern interiors, older suburban homes and protected town-centre buildings. Surface condition and conservation context therefore matter more than simply counting rooms.",
      points: [
        { title: "Historic external work should respect the conservation setting", text: "The Romford Conservation Area appraisal covers building materials, architectural details and management of change. If exterior decorating affects a protected building or streetscape, check the address before changing finishes." },
        { title: "Suburban homes can involve extensive stair and hallway work", text: "Larger owner-occupied houses may include landings, stairwells, extensions and multiple reception rooms, so identify the full areas to be prepared rather than giving a room count alone." },
        { title: "Flats may need communal access and protection", text: "For upper-floor flats, explain lift access, shared corridors and whether materials or ladders must pass through managed areas." },
      ],
      checklistHeading: "Local details to add to a Romford decorating job",
      checklistIntro: "State surface condition, access and any heritage sensitivity before quotes are compared.",
      checklist: ["Check conservation or listed status for historic exterior work.", "Describe wallpaper, damaged plaster, timber and existing coatings.", "Mention communal access, stairs or lift restrictions for flats."],
      sources: [ROMFORD_CA, HOUSING],
    },
    "flooring-fitter": {
      eyebrow: "Romford flooring context",
      heading: "Suburban room layouts and flat access can change Romford flooring work",
      intro: "Romford flooring installations can range from through-lounge and hallway work in houses to upper-floor flats where delivery and communal protection are major practical issues.",
      points: [
        { title: "Houses may involve connected ground-floor areas", text: "If flooring runs continuously through halls, kitchens and reception rooms, say where transitions and doorways occur so fitting and thresholds are priced consistently." },
        { title: "Flats need delivery and lift information", text: "Long packs, underlay and rolls can be awkward to move upstairs. State floor level, lift dimensions or stair-only access and where materials can be stored." },
        { title: "Existing bases should not be assumed ready", text: "Describe timber boards, screed, previous laminate, movement or known damp concerns so subfloor preparation is separated from the finish installation." },
      ],
      checklistHeading: "What Romford flooring fitters need to know",
      checklistIntro: "Make room layout, delivery and subfloor preparation part of the first brief.",
      checklist: ["Give room dimensions and continuity between rooms.", "Describe stairs, lifts and delivery access.", "State the existing floor and whether uplift, disposal or levelling is needed."],
      sources: [HOUSING],
    },
    builder: {
      eyebrow: "Romford building context",
      heading: "Historic-centre planning and suburban site logistics can change Romford building projects",
      intro: "A rear extension in a suburban street and external alterations within Romford's historic conservation area start from different planning contexts. The exact address and site access should be clear before builders compare the work.",
      points: [
        { title: "Protected Romford buildings need an early heritage check", text: "The conservation area centres on Market Place and the historic crossroads. External alterations in or around this area should be checked against conservation guidance before the final specification is fixed." },
        { title: "Suburban plots can offer better access but still need a logistics plan", text: "Driveways and side passages may simplify deliveries, while narrower plots or attached homes may restrict skips, scaffolding and material storage. Describe what is actually available." },
        { title: "Extensions should separate structural and finishing work", text: "State whether the quote needs foundations, structure, roofing, plumbing, electrics, plastering and final finishes so builders price the same complete scope." },
      ],
      checklistHeading: "What to check before posting a Romford building project",
      checklistIntro: "Planning status and site logistics should be known before comparing builders.",
      checklist: ["Check conservation and listed status for protected central properties.", "Describe access for skips, deliveries, scaffolding and waste removal.", "Separate structural, specialist-trade and finishing work in the scope."],
      sources: [ROMFORD_CA, CONSERVATION],
    },
    gardener: {
      eyebrow: "Romford garden context",
      heading: "Suburban gardens and protected historic settings create different Romford garden jobs",
      intro: "Romford's broad suburban catchment includes many houses with gardens, while central and protected areas can require more care around established trees, boundaries and access.",
      points: [
        { title: "Suburban plots may need machinery and green-waste access", text: "For larger lawns, hedge work or clearances, give gate widths and say whether a mower, chipper or other machinery can reach the garden without passing through the house." },
        { title: "Attached homes can still have restricted rear access", text: "Where there is no side passage, explain whether tools and waste must use a shared alley or pass through the property." },
        { title: "Historic settings deserve an early check before boundary changes", text: "If work near the Romford Conservation Area includes walls, railings, established trees or visible frontage changes, check whether planning or heritage considerations apply." },
      ],
      checklistHeading: "What to include in a Romford garden request",
      checklistIntro: "Access, waste removal and any protected setting should be clear before gardeners respond.",
      checklist: ["Give gate widths and explain side, rear or through-house access.", "Say whether green waste and cut material must be removed.", "Check conservation or tree protection before significant work in protected areas."],
      sources: [ROMFORD_CA, HOUSING],
    },
  },
};
