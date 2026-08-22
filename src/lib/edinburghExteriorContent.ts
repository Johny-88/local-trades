import { makeEdinburghProfile } from "./edinburghProfileBase";

export const drivewaySpecialistsEdinburgh = makeEdinburghProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or vehicle access in Edinburgh? Describe the existing frontage, proposed surface, drainage and kerb access once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Edinburgh?",
    copy: "Enter the postcode and explain the driveway size, existing surface, levels, drainage and whether a new or altered pavement crossing is needed. Add frontage photos so suitable Edinburgh driveway specialists can judge access and preparation accurately.",
  },
  localContext: {
    eyebrow: "Edinburgh driveway and access context",
    title: "Creating a dropped kerb needs a road-occupation permit, while surface-water management should be planned at the same time",
    intro: "Edinburgh requires a road-occupation permit for work that creates or alters a driveway or dropped kerb in the public street. The council is also actively managing surface-water flood risk, so a driveway design should deal with levels and runoff rather than simply replacing a permeable front garden with hard surfacing.",
    items: [
      {
        title: "A road-occupation permit is required to create or alter a driveway access point",
        text: "The City of Edinburgh Council lists creating or altering a driveway or other access point, and creating a dropped kerb, among activities that require a road-occupation permit. If the job changes the pavement or public-road edge, establish the permit and highway requirements before pricing the surfacing as though the crossing already exists.",
        source: {
          label: "City of Edinburgh Council — road occupation permits",
          url: "https://www.edinburgh.gov.uk/roadoccupationpermits",
        },
      },
      {
        title: "Edinburgh planning guidance requires surface-water impacts to be considered",
        text: "The council says it has statutory duties to reduce flood risk and requires a surface-water management checklist for planning applications. Its wider climate guidance promotes rain gardens, green roofs and sustainable drainage features that hold back and slow runoff. For a driveway, ask how levels, permeability and drainage will prevent water being pushed toward the house, pavement or neighbouring land.",
        source: {
          label: "City of Edinburgh Council — planning application guidance on flooding",
          url: "https://www.edinburgh.gov.uk/flooding/planning-application-guidance-flooding",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Edinburgh by postcode, surface type and access requirements. Example areas include:",
    sideTitle: "Show the pavement, kerb and drainage falls",
    sideCopy: "A resurfacing job with an existing lawful crossing is different from converting a front garden into parking and creating a new dropped kerb. Photos should show the full frontage, pavement, road edge and where rainwater currently flows.",
    noteLead: "Do not treat the dropped kerb as an afterthought.",
    noteText: "If public-road or pavement work is needed, confirm the road-occupation permit and any planning constraints before construction starts.",
  },
  faq: [
    ["How much does a driveway cost in Edinburgh?", "Cost depends on area, excavation, sub-base, surface material, drainage, access and whether kerb or pavement work is needed. Compare quotes for the same build-up and finish."],
    ["Do I need permission for a dropped kerb in Edinburgh?", "The council says creating a dropped kerb or altering a driveway access point in the public street requires a road-occupation permit. Planning permission can be a separate question depending on the proposal."],
    ["Why does drainage matter for a driveway?", "Hard surfacing changes how rainfall runs off the site. The design should avoid directing water toward the building, pavement or neighbouring property and should consider sustainable drainage where appropriate."],
    ["Can I post a resurfacing-only job?", "Yes. Resurfacing an existing driveway can be posted alongside full excavation, new driveways and access alterations."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Edinburgh?",
    copy: "Describe the frontage, access and drainage once, then compare interested Edinburgh driveway specialists and their quotes.",
    buttonLabel: "Get Edinburgh driveway quotes",
  },
});

export const windowSpecialistsEdinburgh = makeEdinburghProfile("window-specialists", {
  heroCopy: "Need replacement windows, repairs or glazing work in Edinburgh? Describe the property, window type and required change once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Edinburgh?",
    copy: "Enter the postcode and explain whether the job is repair, like-for-like replacement, double glazing or a change of style or material. Include photos of the full elevation as well as the windows so suitable Edinburgh specialists can judge both the work and likely planning constraints.",
  },
  localContext: {
    eyebrow: "Edinburgh window and heritage context",
    title: "Edinburgh's 2024 window rules allow more permitted development, but listed buildings and the World Heritage Site remain stricter",
    intro: "Scottish permitted-development rights for replacement windows changed in May 2024, and Edinburgh now uses a prior-approval route for some front and road-facing windows in conservation areas. That flexibility does not extend in the same way to listed buildings or properties in the World Heritage Site.",
    items: [
      {
        title: "Some conservation-area window replacements can now use permitted development or prior approval",
        text: "Edinburgh says rear windows that are not on a principal elevation, and side windows that do not face a road, can be altered without planning permission in qualifying conservation-area cases. Front or principal-elevation windows and side windows facing a road can use the prior-approval process so the council can assess the replacement without a full planning application.",
        source: {
          label: "City of Edinburgh Council — planning permission for windows",
          url: "https://www.edinburgh.gov.uk/planning-applications-1/prior-approval-%E2%80%93-windows",
        },
      },
      {
        title: "Listed buildings and the World Heritage Site remain outside those relaxed rules",
        text: "The council states that the May 2024 changes do not apply to listed buildings or properties in the World Heritage Site, where owners should continue to apply for the relevant planning permission or listed-building consent. Before ordering windows, identify the building's status and agree the opening method, pane pattern, frame dimensions, material and colour.",
        source: {
          label: "City of Edinburgh Council — planning permission for windows",
          url: "https://www.edinburgh.gov.uk/planning-applications-1/prior-approval-%E2%80%93-windows",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Edinburgh by postcode, frame type and property status. Example areas include:",
    sideTitle: "Send a full-elevation photo, not just a close-up",
    sideCopy: "A window in a modern Corstorphine house is a different planning and design question from traditional sash-and-case windows in the New Town, Stockbridge or Marchmont. The surrounding elevation helps identify the likely constraints.",
    noteLead: "Check permission before ordering bespoke windows.",
    noteText: "For a listed building, World Heritage Site property or prominent conservation-area elevation, confirm the approval route and acceptable design before paying for manufacture.",
  },
  faq: [
    ["How much do replacement windows cost in Edinburgh?", "Cost depends on size, material, glazing, opening style, access, repairs and whether bespoke heritage detailing is required. Compare quotes for the same specification."],
    ["Do replacement windows need planning permission in an Edinburgh conservation area?", "Not always. Since May 2024 some changes can be permitted development, while front or road-facing windows may use prior approval. The exact elevation and property status matter."],
    ["What if my property is listed or in the World Heritage Site?", "Edinburgh says the 2024 relaxed window rules do not apply in the same way there, so continue to check the relevant planning and listed-building consent requirements."],
    ["Can I post a window repair rather than full replacement?", "Yes. Repairs, failed glazing, sash work and complete replacements can all be posted in this category."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Edinburgh?",
    copy: "Describe the windows, property status and required change once, then compare interested Edinburgh window specialists and their quotes.",
    buttonLabel: "Get Edinburgh window quotes",
  },
});
