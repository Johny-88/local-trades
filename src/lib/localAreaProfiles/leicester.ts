import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "ONS — How life has changed in Leicester: Census 2021",
  url: "https://www.ons.gov.uk/visualisations/censusareachanges/E06000016/",
};
const CONSERVATION: LocalResearchSource = {
  label: "Leicester City Council — conservation areas and planning controls",
  url: "https://www.leicester.gov.uk/planning-environment-and-building-control/conservation/what-you-can-do-conservation-area",
};
const ARTICLE4: LocalResearchSource = {
  label: "Leicester City Council — St Paul's conservation area and Article 4",
  url: "https://www.leicester.gov.uk/planning-environment-and-building-control/conservation/st-pauls-conservation-area",
};

export const LEICESTER_PROFILE: LocalAreaProfile = {
  city: "Leicester",
  housingSummary: "Leicester has a strongly mixed urban housing market, with large areas of Victorian and Edwardian terraces alongside semi-detached homes, newer housing and flats. Census 2021 also shows private renting rose to 29.4% of households, making landlord, tenant and access arrangements especially relevant to local trade work.",
  housingFacts: [
    { value: "29.4%", label: "private rented households in 2021" },
    { value: "46.7%", label: "owner-occupied households" },
    { value: "Terraces", label: "common across inner Leicester" },
    { value: "Article 4", label: "controls apply in several conservation areas" },
  ],
  areas: ["Aylestone", "Belgrave", "Clarendon Park", "Evington", "Knighton", "Oadby fringe", "Stoneygate", "Westcotes"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Leicester City Council — conservation and neighbourhood information",
  areaSourceUrl: "https://www.leicester.gov.uk/planning-environment-and-building-control/conservation/",
  tradeContent: {
    handyman: {
      eyebrow: "Leicester handyman context",
      heading: "Terraces, rentals and tight access can shape a Leicester handyman visit",
      intro: "Leicester combines dense terraced streets with a large private rented sector, so small maintenance jobs often depend on access, parking and who is arranging the work as much as the task itself.",
      points: [
        { title: "Terraced streets can make loading and parking part of the visit", text: "In areas such as Westcotes, Highfields and parts of Belgrave, narrow streets and closely packed terraces can make carrying tools and materials less straightforward. Mention restricted parking, rear access and whether bulky items must pass through the house." },
        { title: "Rental maintenance is a major local use case", text: "ONS Census 2021 data shows 29.4% of Leicester households privately rented. If a landlord or agent is arranging repairs, say who will provide access and who can approve additional work." },
        { title: "Older homes can turn one task into a mixed maintenance list", text: "Victorian and Edwardian properties often combine older doors, trim, plaster and fittings with modern upgrades. Group related small jobs together so the handyman can judge the whole visit rather than one isolated task." },
      ],
      checklistHeading: "What to include in a Leicester handyman request",
      checklistIntro: "A complete task list and realistic access notes help the tradesperson price the visit properly.",
      checklist: ["List all small jobs you want handled in the same visit.", "Mention on-street parking, rear access, stairs or communal entrances.", "For rented homes, identify who provides access and authorises extra work."],
      sources: [HOUSING],
    },
    plumber: {
      eyebrow: "Leicester plumbing context",
      heading: "Property age and rental arrangements can change a Leicester plumbing brief",
      intro: "Leicester's inner terraces, converted properties and rented homes mean the same leak can involve different pipe routes, access points and decision-makers.",
      points: [
        { title: "Older terraces can have altered pipe routes", text: "In older housing, kitchens, bathrooms and heating systems may have been changed several times. Describe where the symptom appears and where the stop tap is if known rather than assuming the visible leak identifies the source." },
        { title: "Rented properties may involve tenant, landlord and agent", text: "With private renting at 29.4% in 2021, say who is at the property, who can let the plumber in and who can approve follow-on work if the first visit uncovers a wider repair." },
        { title: "Shared or converted buildings need clear boundaries", text: "For flats or converted houses, state the floor and whether the problem appears inside the dwelling or near a shared hallway, riser or communal service area." },
      ],
      checklistHeading: "Details that help Leicester plumbers assess the job",
      checklistIntro: "Describe the symptom, property and access rather than trying to diagnose hidden pipework yourself.",
      checklist: ["Give the property type, floor and exact room where the problem appears.", "Say whether the water can be isolated and whether the leak is active.", "For rentals or converted buildings, identify access and approval responsibilities."],
      sources: [HOUSING],
    },
    electrician: {
      eyebrow: "Leicester electrical context",
      heading: "Leicester's rental market makes clear electrical paperwork especially useful",
      intro: "A large private rented sector means electricians may be responding to ordinary faults, landlord safety work or remedial items from an existing report. Making that distinction at the start saves guesswork.",
      points: [
        { title: "Say when the job follows an EICR or landlord inspection", text: "If you already have an electrical report, state that clearly and share the relevant observations or codes so responders understand whether the request is testing, remedial work or a separate fault." },
        { title: "Older properties can contain layers of alterations", text: "Victorian and Edwardian housing may have had repeated upgrades over decades. Describe which rooms, circuits or fittings are affected and any recent work rather than assuming the age of the home reveals the wiring condition." },
        { title: "Converted flats need a clear private-versus-communal boundary", text: "If the issue is in a converted house or flat, say whether the affected fitting, meter area or supply equipment is inside the home or in a shared part of the building." },
      ],
      checklistHeading: "What to include before Leicester electricians respond",
      checklistIntro: "Keep the brief factual and leave live investigation to the electrician.",
      checklist: ["Mention any EICR, landlord inspection or remedial report.", "Describe tripping, loss of power, heat, smells or flickering without opening live equipment.", "For flats, explain whether the issue appears private or communal."],
      sources: [HOUSING],
    },
    roofer: {
      eyebrow: "Leicester roofing context",
      heading: "Historic streets and Article 4 controls can matter on Leicester roofing jobs",
      intro: "Leicester has multiple conservation areas where extra controls protect roofs, windows, external finishes and other visible features. That makes the exact address important before a replacement roof is treated as routine.",
      points: [
        { title: "Some conservation areas have Article 4 directions", text: "Leicester City Council identifies Article 4 controls in areas including St Paul's, West End, New Walk, Stoneygate and others. These can remove permitted development rights for alterations such as roof changes." },
        { title: "Traditional materials may be part of the area's character", text: "Several Leicester conservation areas are specifically valued for red-brick terraces, slate roofs and original architectural details. Major replacement work should therefore be checked against the property's designation before materials are agreed." },
        { title: "Terraces make shared roof details important", text: "On continuous terraces, describe party lines, chimneys, shared valleys and adjoining gutters clearly so the roofer understands where one property ends and another begins." },
      ],
      checklistHeading: "Checks before posting Leicester roofing work",
      checklistIntro: "Address-specific planning and access information can materially change a roofing quote.",
      checklist: ["Check conservation-area, Article 4 and listed-building status before major external changes.", "Describe roof type, shared details, chimneys and valleys.", "Mention scaffold, front, rear and side access restrictions."],
      sources: [CONSERVATION, ARTICLE4],
    },
    "painter-decorator": {
      eyebrow: "Leicester decorating context",
      heading: "Exterior finishes can need extra care in Leicester's protected streets",
      intro: "Leicester's conservation areas protect the character of historic streets, and Article 4 directions can remove normal permitted development rights for some visible changes. Rental refreshes create a very different brief from heritage exterior work.",
      points: [
        { title: "Painting or rendering can be controlled in protected areas", text: "Leicester City Council notes that Article 4 directions can require permission for changes including painting or rendering walls. Check the exact address before assuming an exterior finish can be changed freely." },
        { title: "Historic surfaces may need different preparation", text: "Traditional brick, timber and older render can require a different preparation and product choice from modern plasterboard or masonry. Tell the decorator about known conservation or listed status." },
        { title: "Rental refreshes need an occupied-or-empty brief", text: "With private renting at 29.4%, say whether the property is empty between tenancies, furnished or occupied, because protection, access and room sequencing can change significantly." },
      ],
      checklistHeading: "Local details to add to a Leicester decorating job",
      checklistIntro: "Separate ordinary interior work from heritage-sensitive exterior work and explain occupancy clearly.",
      checklist: ["Check conservation and Article 4 status for exterior work.", "Describe existing coatings, wallpaper, staining and damaged plaster.", "Say whether the home is occupied, empty or rented and who provides access."],
      sources: [CONSERVATION, HOUSING],
    },
    "flooring-fitter": {
      eyebrow: "Leicester flooring context",
      heading: "Terraces, flats and occupied rentals can all change a Leicester flooring installation",
      intro: "Flooring quotes depend on more than square metres. Leicester's dense terraces, flats and large rental market make delivery routes, furniture moving, uplift and subfloor preparation important parts of the scope.",
      points: [
        { title: "Access can affect material handling", text: "For upper-floor flats or homes with no side access, say how long flooring packs can enter the property, whether there is a lift and where materials can be stored before fitting." },
        { title: "Rental turnover work is different from an occupied installation", text: "A vacant rental can often be completed room-to-room more efficiently than a furnished occupied home. State occupancy and whether old flooring and furniture need moving." },
        { title: "Older properties may need more subfloor investigation", text: "Do not assume a level base under existing carpet or laminate. Describe known timber boards, screed, previous repairs, movement or damp concerns so fitters can separate installation from preparation." },
      ],
      checklistHeading: "What Leicester flooring fitters need to know",
      checklistIntro: "Make access, uplift and preparation explicit before comparing fitting prices.",
      checklist: ["Give room sizes, floor level and delivery access.", "State the existing covering and whether uplift or disposal is required.", "Explain whether the property is furnished, occupied or empty."],
      sources: [HOUSING],
    },
    builder: {
      eyebrow: "Leicester building context",
      heading: "Planning constraints can vary sharply between Leicester neighbourhoods",
      intro: "A rear alteration in a modern estate and an external change in Stoneygate or the West End should not be treated as the same planning brief. Leicester's conservation areas and Article 4 directions make address checks important before larger building work is priced.",
      points: [
        { title: "Article 4 can remove normal permitted development rights", text: "Leicester City Council explains that Article 4 directions can require planning permission for work that would normally be permitted, including changes to windows, doors, roofs and external finishes." },
        { title: "Conservation areas may require suitable materials and details", text: "Historic neighbourhoods such as Stoneygate, New Walk and the West End are protected for their architecture and streetscape. Extensions or visible alterations should be checked against local conservation guidance before the scope is fixed." },
        { title: "Dense terraces make logistics part of the build", text: "Limited side access, controlled parking and shared boundaries can affect skips, deliveries, scaffolding and waste removal. Put these constraints in the request rather than leaving them for the first site visit." },
      ],
      checklistHeading: "What to check before posting a Leicester building project",
      checklistIntro: "Planning status and site logistics should be understood before comparing builder quotes.",
      checklist: ["Check conservation, Article 4 and listed status for the exact address.", "Describe access for skips, deliveries, scaffolding and waste removal.", "Separate structural, finishing and specialist-trade work in the scope."],
      sources: [CONSERVATION, ARTICLE4],
    },
    gardener: {
      eyebrow: "Leicester garden context",
      heading: "Protected areas and rear access can change Leicester garden work",
      intro: "Routine garden maintenance is straightforward, but significant tree work and garden clearance can depend on planning protection and how tools or waste can reach the rear of the property.",
      points: [
        { title: "Trees in conservation areas need an early check", text: "Leicester's conservation guidance notes that work to trees in conservation areas can require planning controls. Check the address and tree status before arranging substantial pruning or removal." },
        { title: "Terraced homes can have no direct rear access", text: "In dense terraced streets, machinery and green waste may need to pass through the house or a shared passage. State gate width, passage access and whether there are steps." },
        { title: "Historic garden boundaries can form part of local character", text: "Some conservation areas value traditional walls, railings and established garden settings. If landscaping includes boundary changes, make the existing condition and conservation status clear before work starts." },
      ],
      checklistHeading: "What to include in a Leicester garden request",
      checklistIntro: "Separate routine maintenance from protected-tree or boundary work and explain access clearly.",
      checklist: ["Check conservation or tree protection before major tree work.", "Describe side, rear or through-house access and gate widths.", "Say whether green waste must be removed and whether boundary work is included."],
      sources: [CONSERVATION],
    },
  },
};
