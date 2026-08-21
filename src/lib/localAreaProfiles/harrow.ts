import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "Harrow Council — Census 2021 housing tenure summary",
  url: "https://www.harrow.gov.uk/downloads/file/33496/harrow-send-jsna-briefing",
};
const LOCAL_PLAN: LocalResearchSource = {
  label: "Harrow Council — Local Plan 2021–2041",
  url: "https://www.harrow.gov.uk/downloads/file/32095/harrow-s-new-local-plan-2021-2041",
};
const CONSERVATION: LocalResearchSource = {
  label: "Harrow Council — conservation areas and Article 4",
  url: "https://www.harrow.gov.uk/planning-developments/biodiversity-conservation",
};
const HARROW_HILL: LocalResearchSource = {
  label: "Harrow Council — Harrow on-the-Hill conservation areas",
  url: "https://www.harrow.gov.uk/planning-developments/biodiversity-conservation/3",
};
const TREES: LocalResearchSource = {
  label: "Harrow Council — Local Plan baseline on protected trees",
  url: "https://www.harrow.gov.uk/downloads/file/32654/C0410_Reg_19_IIA_Report_Appendix_B_2.pdf",
};

export const HARROW_PROFILE: LocalAreaProfile = {
  city: "Harrow",
  housingSummary: "Harrow is a strongly residential outer-London borough with high owner-occupation, a sizeable and growing private-rented sector, many family homes and increasing numbers of flats. Census 2021 data cited by the council shows 58.8% of households owned their home and about 30% privately rented, while the Local Plan notes strong recent growth in purpose-built flats.",
  housingFacts: [
    { value: "58.8%", label: "owner-occupied households in 2021" },
    { value: "30%", label: "private rented households" },
    { value: "30", label: "conservation areas" },
    { value: "10,000+", label: "protected trees across Harrow" },
  ],
  areas: ["Harrow on the Hill", "Harrow Weald", "Kenton", "North Harrow", "Pinner", "Rayners Lane", "South Harrow", "Wealdstone"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Harrow Council — conservation and neighbourhood information",
  areaSourceUrl: "https://www.harrow.gov.uk/planning-developments/biodiversity-conservation",
  tradeContent: {
    handyman: {
      eyebrow: "Harrow handyman context",
      heading: "Family homes, flats and rentals create different Harrow handyman visits",
      intro: "Harrow combines many owner-occupied family houses with a large private-rented sector and a growing stock of flats. Small repair jobs therefore vary considerably in access, occupancy and whether the work is maintenance or improvement.",
      points: [
        { title: "Family homes often produce several jobs at once", text: "In suburban houses, one visit may combine shelves, doors, curtain poles, sealant, furniture assembly and minor outdoor fittings. List everything together so the handyman can judge the visit properly." },
        { title: "Rental maintenance may involve a landlord or agent", text: "Around 30% of Harrow households privately rented in 2021. If the person arranging the job is not the occupant, state who provides access and who can approve any extra work." },
        { title: "More flats means communal access matters more often", text: "Harrow's Local Plan notes strong growth in purpose-built flats. For flat jobs, include floor level, lift availability and whether bulky items must pass through communal areas." },
      ],
      checklistHeading: "What to include in a Harrow handyman request",
      checklistIntro: "A complete task list and access notes make a small-job quote much more useful.",
      checklist: ["List all small repairs and fittings for the same visit.", "Mention stairs, lifts, parking and communal access.", "For rentals, identify who provides access and approves extra work."],
      sources: [HOUSING, LOCAL_PLAN],
    },
    plumber: {
      eyebrow: "Harrow plumbing context",
      heading: "Harrow plumbing briefs should distinguish houses, flats and rented homes",
      intro: "A leak in a suburban family house can involve a very different layout from the same symptom in a purpose-built flat. Rental arrangements can also affect who gives access and approves follow-on work.",
      points: [
        { title: "Larger family homes may have several bathrooms or extensions", text: "Describe exactly where the issue appears and whether it is in the original house, loft conversion, utility area or rear extension rather than assuming all plumbing follows one route." },
        { title: "Flats can involve shared service routes", text: "For flats, say which floor is affected and whether the water issue appears inside the dwelling or near a communal riser or building-managed space." },
        { title: "Rental repairs need a clear approval path", text: "With private renting around 30%, identify the tenant, landlord or agent responsible for access and for approving further work if the first visit uncovers a larger repair." },
      ],
      checklistHeading: "Details that help Harrow plumbers assess the first visit",
      checklistIntro: "The symptom, property type and access arrangement are more useful than a guessed diagnosis.",
      checklist: ["Give the property type, floor and exact room involved.", "Say whether the water can be isolated and whether the leak is active.", "For rentals or managed flats, identify access and approval contacts."],
      sources: [HOUSING, LOCAL_PLAN],
    },
    electrician: {
      eyebrow: "Harrow electrical context",
      heading: "Rental safety work and extended family homes create different Harrow electrical scopes",
      intro: "Electrical jobs in Harrow range from landlord inspection remedials and flat faults to new circuits or alterations in extended suburban houses. The request should make that context clear.",
      points: [
        { title: "Say when the work follows an EICR", text: "If a landlord inspection or electrical report already exists, share the relevant observations or codes so electricians know whether they are quoting remedial work, testing or a separate fault." },
        { title: "Extended homes can contain several generations of wiring", text: "Loft conversions, rear extensions and remodelled kitchens may have been wired at different times. State which part of the property is affected and any recent work." },
        { title: "Flats need private-versus-communal clarity", text: "If meters, communal lighting or shared equipment appear involved, say so rather than assuming the fault belongs entirely to the flat." },
      ],
      checklistHeading: "What to include before Harrow electricians respond",
      checklistIntro: "Keep the brief factual and leave live electrical investigation to the electrician.",
      checklist: ["Mention any EICR or remedial report.", "Describe tripping, heat, smells, flickering or loss of power without opening live equipment.", "For flats, state whether the issue appears private or communal."],
      sources: [HOUSING, LOCAL_PLAN],
    },
    roofer: {
      eyebrow: "Harrow roofing context",
      heading: "Harrow's conservation areas and Article 4 directions can change roofing work",
      intro: "Harrow has 30 conservation areas, and many include Article 4 directions that remove normal permitted-development rights. Roof work in Harrow on the Hill, Pinner and other protected neighbourhoods can therefore need extra planning checks.",
      points: [
        { title: "Article 4 directions apply in multiple protected areas", text: "Harrow Council identifies Article 4 directions in areas including Harrow Park, Harrow on-the-Hill Village, South Hill Avenue and Mount Park Estate, as well as several Pinner conservation areas." },
        { title: "Roof materials can form part of protected character", text: "In historic streets, replacement coverings, dormers or visible roof alterations should be checked against conservation guidance before the material and design are fixed." },
        { title: "Suburban semis and detached homes can have multiple roof forms", text: "Extensions, bays, garages and loft conversions create extra junctions. Describe exactly which roof section, chimney, valley or gutter is affected." },
      ],
      checklistHeading: "Checks before posting Harrow roofing work",
      checklistIntro: "Planning status and the exact roof geometry should be clear before quotes are compared.",
      checklist: ["Check conservation, Article 4 and listed status before major visible roof changes.", "Describe extensions, chimneys, valleys and shared roof lines.", "Mention scaffold, driveway, side and rear access."],
      sources: [CONSERVATION, HARROW_HILL],
    },
    "painter-decorator": {
      eyebrow: "Harrow decorating context",
      heading: "Protected streets and rental properties need different Harrow decorating briefs",
      intro: "A quick rental refresh in Wealdstone and exterior work on a protected property in Harrow on the Hill are fundamentally different decorating jobs. Surface condition, occupancy and heritage status should all be stated before quoting.",
      points: [
        { title: "Conservation areas can restrict visible exterior changes", text: "Harrow's conservation guidance applies extra planning controls, and Article 4 directions remove permitted development rights in many areas. Check the address before changing external finishes on a protected property." },
        { title: "Rental turnover jobs need an occupancy plan", text: "With about 30% of households privately rented, say whether the home is empty, furnished or occupied and whether access is through a tenant or agent." },
        { title: "Older and higher-value homes may need more careful preparation", text: "Traditional plaster, timber joinery, decorative details and older coatings can add significant preparation time that a simple room count does not capture." },
      ],
      checklistHeading: "Local details to add to a Harrow decorating job",
      checklistIntro: "Make heritage status, occupancy and preparation part of the initial brief.",
      checklist: ["Check conservation and Article 4 status for exterior work.", "Describe wallpaper, damaged plaster, timber and existing coatings.", "Say whether the property is occupied, vacant or rented and who provides access."],
      sources: [CONSERVATION, HOUSING],
    },
    "flooring-fitter": {
      eyebrow: "Harrow flooring context",
      heading: "Family homes and a growing flat stock create different Harrow flooring installations",
      intro: "Flooring work can range from connected ground-floor rooms in suburban houses to upper-floor flats where lift access and communal protection are major practical considerations.",
      points: [
        { title: "Larger homes may need continuous flooring across several rooms", text: "If flooring runs through halls, kitchens and reception spaces, say where transitions, thresholds and changes of material occur so fitters price the same layout." },
        { title: "Flats need delivery and communal-access details", text: "Harrow's flat stock has grown substantially. State floor level, lift dimensions or stair-only access and where long flooring packs can be stored." },
        { title: "Occupied family homes can require room sequencing", text: "If furniture remains in the property, explain what must be moved and whether rooms need to stay usable while the work progresses." },
      ],
      checklistHeading: "What Harrow flooring fitters need to know",
      checklistIntro: "Room layout, delivery and floor preparation should be explicit before comparing fitting prices.",
      checklist: ["Give room sizes and explain continuity between rooms.", "Describe stairs, lifts and delivery access.", "State the existing covering and whether uplift, disposal or furniture moving is required."],
      sources: [LOCAL_PLAN, HOUSING],
    },
    builder: {
      eyebrow: "Harrow building context",
      heading: "Conservation and Article 4 controls can materially change Harrow building projects",
      intro: "Harrow has 30 conservation areas and numerous Article 4 directions, so the same extension or exterior alteration may face very different planning constraints depending on the exact street.",
      points: [
        { title: "Article 4 can remove normal permitted-development rights", text: "Harrow Council states that Article 4 directions apply in many conservation areas and mean planning permission is required for work that might otherwise be permitted." },
        { title: "Historic areas need design and material checks before pricing", text: "Harrow on the Hill, Pinner and other protected neighbourhoods have detailed appraisals and management strategies. External changes should be checked against those local requirements before the final specification is fixed." },
        { title: "Suburban plots still need a clear logistics plan", text: "Driveways and side access may help, but skips, deliveries, scaffolding and neighbour boundaries can still constrain a project. Describe the actual site rather than assuming easy access." },
      ],
      checklistHeading: "What to check before posting a Harrow building project",
      checklistIntro: "Planning status and site logistics should be understood before builders compare the job.",
      checklist: ["Check conservation, Article 4 and listed status for the exact address.", "Describe skip, delivery, scaffold and waste-removal access.", "Separate structural, specialist-trade and finishing elements in the scope."],
      sources: [CONSERVATION, HARROW_HILL],
    },
    gardener: {
      eyebrow: "Harrow garden context",
      heading: "Protected trees and suburban garden access can change Harrow garden work",
      intro: "Harrow has more than 10,000 protected trees through conservation-area status or Tree Preservation Orders, while many suburban houses have larger gardens that can require machinery and substantial green-waste handling.",
      points: [
        { title: "Tree protection is a significant local consideration", text: "Harrow's Local Plan evidence records more than 10,000 protected trees. Check whether a tree is protected before arranging substantial pruning, lopping or removal." },
        { title: "Conservation areas add another layer of control", text: "Harrow has 30 conservation areas, so tree and boundary work in protected streets should be checked before it is treated as routine landscaping." },
        { title: "Larger suburban plots need access details for machinery", text: "Give gate widths and say whether mowers, chippers or other machinery can reach the rear without passing through the house or a narrow shared route." },
      ],
      checklistHeading: "What to include in a Harrow garden request",
      checklistIntro: "Check protection first, then describe access and waste handling clearly.",
      checklist: ["Check tree protection and conservation status before major tree work.", "Give gate widths and explain side, rear or through-house access.", "Say whether green waste, stump work or machinery is required."],
      sources: [TREES, CONSERVATION],
    },
  },
};
