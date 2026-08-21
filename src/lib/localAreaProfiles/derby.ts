import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "Derby City Council — Local Plan baseline housing evidence",
  url: "https://www.derby.gov.uk/media/derbycitycouncil/content/documents/environmentandplanning/localplan/appendix-a-baseline.pdf",
};
const CONSTRAINTS: LocalResearchSource = {
  label: "Derby City Council — planning constraints and Article 4 directions",
  url: "https://www.derby.gov.uk/environment-and-planning/planning/development-control/planning-constraints/index.html",
};
const CONSERVATION: LocalResearchSource = {
  label: "Derby City Council — conservation area guidance",
  url: "https://www.derby.gov.uk/media/derbycitycouncil/contentassets/documents/environmentandplanning/conservation/DerbyCityCouncil_Conservation_area_FAQs_August-2016.pdf",
};

export const DERBY_PROFILE: LocalAreaProfile = {
  city: "Derby",
  housingSummary: "Derby's 2021 housing stock is dominated by semi-detached homes, with detached houses and terraces also forming substantial shares. Derby City Council's current Local Plan baseline reports 39.1% semi-detached, 24.1% detached, 21.8% terraced and 14.7% flats, creating a varied mix of access, roof, garden and renovation conditions across the city.",
  housingFacts: [
    { value: "39.1%", label: "semi-detached dwellings" },
    { value: "24.1%", label: "detached dwellings" },
    { value: "21.8%", label: "terraced dwellings" },
    { value: "14.7%", label: "flats" },
  ],
  areas: ["Allestree", "Chaddesden", "Darley Abbey", "Littleover", "Mackworth", "Mickleover", "Normanton", "Spondon"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Derby City Council — planning and conservation information",
  areaSourceUrl: "https://www.derby.gov.uk/environment-and-planning/planning/",
  tradeContent: {
    handyman: {
      eyebrow: "Derby handyman context",
      heading: "Derby's mix of semis, terraces and detached homes creates very different small-job visits",
      intro: "Semi-detached homes are Derby's largest housing group, but terraces, flats and detached properties are all substantial. A useful handyman request should therefore describe the property and access rather than relying on the job title alone.",
      points: [
        { title: "Semi-detached homes often produce mixed indoor and outdoor task lists", text: "With 39.1% of dwellings semi-detached, a single visit may combine doors, shelves, sealant, exterior fittings and small garden-side repairs. Group the tasks together so the handyman can estimate setup and time properly." },
        { title: "Terraces can have tighter rear access", text: "For terraced homes, mention shared passages, through-house access, narrow rear gates and parking restrictions where these affect carrying tools or bulky items." },
        { title: "Flats need floor and communal access details", text: "If the job is in a flat, state the floor, lift availability, communal entrance arrangements and whether large furniture or materials can reach the property easily." },
      ],
      checklistHeading: "What to include in a Derby handyman request",
      checklistIntro: "Property type and access can make a small job much easier to price accurately.",
      checklist: ["List all small tasks for the same visit.", "State whether the property is detached, semi, terraced or a flat.", "Mention parking, stairs, rear access or bulky items."],
      sources: [HOUSING],
    },
    plumber: {
      eyebrow: "Derby plumbing context",
      heading: "Property layout matters across Derby's varied housing stock",
      intro: "A plumbing problem in a semi-detached family house can involve very different access and pipe routes from the same symptom in a terrace or flat. The initial brief should make that difference clear.",
      points: [
        { title: "Semi-detached and detached homes often have more distributed plumbing", text: "Larger houses can include extensions, utility rooms, multiple bathrooms and altered heating layouts. Say exactly where the problem appears and where water can be isolated if known." },
        { title: "Terraces may have older or repeatedly altered pipework", text: "Describe the visible symptom rather than assuming the leak source, especially where kitchens or bathrooms have been moved or upgraded over time." },
        { title: "Flats can involve shared service routes", text: "For a flat, include the floor and whether the issue appears entirely inside the dwelling or near a communal riser, hallway or managed area." },
      ],
      checklistHeading: "Details that help Derby plumbers assess the visit",
      checklistIntro: "Describe the symptom, property type and isolation information before responders compare the job.",
      checklist: ["Give the exact room and property type.", "Say whether the water can be isolated and whether the issue is active.", "For flats, identify any communal or building-managed areas involved."],
      sources: [HOUSING],
    },
    electrician: {
      eyebrow: "Derby electrical context",
      heading: "Extensions and older housing can make Derby electrical scopes less predictable",
      intro: "Derby's mix of older terraces, suburban semis and detached homes means electrical systems may have been extended and altered in different stages. A factual description of the fault or planned work is more useful than assuming the age of the installation.",
      points: [
        { title: "Extended houses can contain several generations of electrical work", text: "Where kitchens, lofts, garages or rear extensions have been added, say which part of the property is affected and whether the job relates to a newer addition or the original house." },
        { title: "Fault descriptions should identify rooms and circuits", text: "Explain tripping, loss of power, flickering, heat or smells and which rooms or fittings are involved without removing covers or investigating live equipment." },
        { title: "Flats need private-versus-communal clarity", text: "If the issue involves meters, communal lighting or shared areas, state that clearly so an electrician can distinguish work inside the dwelling from building-managed equipment." },
      ],
      checklistHeading: "What to include before Derby electricians respond",
      checklistIntro: "A precise brief helps electricians understand whether the job is fault finding, alteration or installation.",
      checklist: ["Describe symptoms and affected rooms or circuits.", "Mention recent extensions, renovations or electrical work.", "For flats, explain whether the affected equipment is private or communal."],
      sources: [HOUSING],
    },
    roofer: {
      eyebrow: "Derby roofing context",
      heading: "Conservation and Article 4 controls can affect Derby roofing work",
      intro: "Derby City Council has Article 4 directions in several conservation areas, including Allestree, Arboretum, Darley Abbey, Hartington Street, Little Chester, Markeaton, Mickleover, Spondon and Strutts Park. Roof-covering changes can therefore need extra checks in protected streets.",
      points: [
        { title: "Some conservation areas control roof-covering alterations", text: "Derby's conservation guidance states that in several Article 4 areas planning permission is required for alterations to roof coverings facing a highway." },
        { title: "Traditional roof materials may contribute to local character", text: "Before replacing a visible slate, tile or other traditional covering in a protected area, check whether planning controls or conservation guidance affect the material choice." },
        { title: "Semi-detached and terraced homes make shared details important", text: "Together these property types account for more than 60% of Derby dwellings. Describe shared chimneys, valleys, party lines and gutter connections clearly." },
      ],
      checklistHeading: "Checks before posting Derby roofing work",
      checklistIntro: "Planning status, shared details and access can materially change a roofing quote.",
      checklist: ["Check conservation, Article 4 and listed status before major roof changes.", "Describe roof type, shared chimneys, valleys and adjoining gutters.", "Mention scaffold access, parking and rear access."],
      sources: [CONSTRAINTS, CONSERVATION, HOUSING],
    },
    "painter-decorator": {
      eyebrow: "Derby decorating context",
      heading: "Protected streets and mixed housing create different Derby decorating scopes",
      intro: "An occupied suburban semi, a terrace in a conservation area and a flat all create different preparation and access requirements. Exterior work can also intersect with Derby's conservation controls.",
      points: [
        { title: "Conservation areas can restrict visible external alterations", text: "Derby's guidance applies tighter permitted-development controls in conservation areas, with Article 4 directions adding further protection in specific locations." },
        { title: "Older surfaces can need more preparation than room counts suggest", text: "Traditional plaster, timber windows, repeated paint layers and repaired masonry can materially change preparation time, so describe the existing finish rather than only giving dimensions." },
        { title: "Different property types change access and protection", text: "Flats may need communal protection and lift access, while larger semis and detached homes can involve stairwells, landings and more extensive exterior elevations." },
      ],
      checklistHeading: "Local details to add to a Derby decorating job",
      checklistIntro: "Make surface condition, access and any heritage constraints clear before quotes are compared.",
      checklist: ["Check conservation and Article 4 status for exterior changes.", "Describe wallpaper, damaged plaster, timber and existing coatings.", "Say whether the property is occupied and note communal access if relevant."],
      sources: [CONSERVATION, HOUSING],
    },
    "flooring-fitter": {
      eyebrow: "Derby flooring context",
      heading: "Derby's housing mix makes subfloor and access details important",
      intro: "Flooring work across semi-detached homes, terraces, detached houses and flats can differ greatly in room size, stairs, delivery routes and the condition of the existing base.",
      points: [
        { title: "Houses may involve several connected rooms", text: "In larger semi-detached and detached homes, say whether flooring runs through hallways, kitchens and multiple rooms or stops at doorways, because sequencing and thresholds affect fitting time." },
        { title: "Terraces can have restricted delivery routes", text: "Long flooring packs and rolls may need to pass through narrow hallways or front rooms where there is no side access. Mention the practical route into the property." },
        { title: "Flats need floor and lift information", text: "For upper-floor work, include lift availability, stairs, communal protection and where flooring can be stored before installation." },
      ],
      checklistHeading: "What Derby flooring fitters need to know",
      checklistIntro: "Separate material fitting from access, uplift and subfloor preparation.",
      checklist: ["Give room sizes and the existing covering.", "Describe stairs, lifts and delivery access.", "State whether uplift, disposal, levelling or furniture moving is required."],
      sources: [HOUSING],
    },
    builder: {
      eyebrow: "Derby building context",
      heading: "Article 4 and conservation constraints can change Derby building projects",
      intro: "Derby has protected neighbourhoods where permitted development rights are restricted. That means a project in Darley Abbey, Mickleover or Spondon may need different planning checks from a similar alteration elsewhere in the city.",
      points: [
        { title: "Article 4 directions can remove permitted development rights", text: "Derby City Council states that Article 4 directions are mainly used in conservation areas and can require planning permission for works that would otherwise be permitted." },
        { title: "External details and boundaries can be controlled", text: "In some protected areas, controls extend to doors, windows, roof coverings and highway-facing boundary treatments, so these elements should be identified before the builder prices the final scope." },
        { title: "Site logistics differ sharply between terraces and suburban plots", text: "A terrace may have no side access, while a detached or semi-detached home may have drive or garden access. Explain skips, deliveries, scaffolding and waste routes in the brief." },
      ],
      checklistHeading: "What to check before posting a Derby building project",
      checklistIntro: "Planning status and practical site access should be clear before comparing builder quotes.",
      checklist: ["Check conservation, Article 4 and listed status.", "Describe skip, delivery, scaffold and waste-removal access.", "Separate structural, finishing and specialist-trade elements in the scope."],
      sources: [CONSTRAINTS, CONSERVATION],
    },
    gardener: {
      eyebrow: "Derby garden context",
      heading: "Property type and conservation controls can change Derby garden work",
      intro: "Detached and semi-detached homes make up a large share of Derby's housing, creating many substantial gardens, while terraced properties can have much tighter access. Protected areas can also require checks before tree or boundary work.",
      points: [
        { title: "Larger suburban plots can involve more machinery", text: "Detached and semi-detached homes account for more than 60% of Derby dwellings, so some jobs involve larger lawns, hedges and garden structures. Mention gate widths and whether machinery can reach the work area." },
        { title: "Terraces can restrict green-waste removal", text: "Where there is no side access, explain whether waste must pass through the house or a shared alley and whether steps or narrow gates are involved." },
        { title: "Conservation areas can affect trees and boundaries", text: "If the job includes significant tree work or changes to a highway-facing wall, fence or gate in a protected area, check local planning controls before treating it as routine garden maintenance." },
      ],
      checklistHeading: "What to include in a Derby garden request",
      checklistIntro: "Describe access and separate routine maintenance from protected-tree or boundary work.",
      checklist: ["Give gate widths and explain side, rear or through-house access.", "Say whether green waste and cut material must be removed.", "Check conservation or tree protection before significant tree work."],
      sources: [HOUSING, CONSERVATION],
    },
  },
};
