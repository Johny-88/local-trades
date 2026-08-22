import { makeSolihullProfile } from "./solihullProfileBase";

export const drivewaySpecialistsSolihull = makeSolihullProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or access change in Solihull? Describe the area, surface, drainage and kerb access once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Solihull?",
    copy: "Enter the postcode, approximate area and preferred surface. Mention whether you need a new or wider vehicle crossing, drainage changes, retaining work or front-garden alterations so suitable Solihull driveway specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Solihull driveway and highway-access context",
    title: "A new vehicle crossing needs council approval, and Solihull keeps construction of dropped kerbs with its own highways contractors",
    intro: "Solihull Council requires an application for a residential Vehicle Access Crossing before driveway access is formed from the road. The council also states that dropped-kerb construction in the borough can only be carried out by its own highways contractors, so the driveway contractor and highway work must be coordinated rather than treated as one informal job.",
    items: [
      {
        title: "Apply to Solihull Council before relying on a new dropped kerb",
        text: "The council says residents who need driveway access from the road must apply for a dropped kerb. Its current guidance sets dimensional and safety criteria and allows the council to refuse applications where the proposed crossing is unsuitable, so approval should come before the driveway layout is fixed around an assumed access width.",
        source: {
          label: "Solihull Council — apply to lower your kerb",
          url: "https://www.solihull.gov.uk/parking/apply-lower-your-kerb",
        },
      },
      {
        title: "Surface-water management should be designed into larger or more complex schemes",
        text: "Solihull's flood-risk planning guidance expects development to incorporate above-ground Sustainable Drainage Systems from the outset where applicable. Even on smaller domestic work, a driveway quote should explain where runoff will go rather than simply replacing permeable ground with a hard surface and leaving drainage unresolved.",
        source: {
          label: "Solihull Council — planning, policy and flood risk",
          url: "https://www.solihull.gov.uk/roads-pavements-and-streetcare/flooding/planning-policy-and-flood-risk",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Solihull by postcode, surface and site access. Example areas include:",
    sideTitle: "Separate private paving from highway works",
    sideCopy: "The contractor can quote the driveway inside your boundary, but Solihull Council controls the vehicle crossing over the footway. Confirm the approved crossing width and position before finalising edging, gates or parking layout.",
    noteLead: "Plan runoff as well as appearance.",
    noteText: "Ask how falls, channels, permeable construction and discharge points will keep water away from the highway and neighbouring property.",
  },
  faq: [
    ["Do I need permission for a dropped kerb in Solihull?", "Yes. Solihull Council says you must apply for a Vehicle Access Crossing if you need driveway access from the road."],
    ["Can my driveway contractor build the dropped kerb?", "Not in Solihull. The council states that construction of all dropped kerbs can only be carried out by its own highways contractors."],
    ["How wide can a single crossing be?", "Solihull's 2026 guidance gives a normal minimum of 2.7 metres and maximum of 3.6 metres for a single crossing, subject to site assessment and other restrictions."],
    ["Can I post resurfacing without changing the kerb?", "Yes. Repairs and resurfacing can be posted alongside complete new driveways and access changes."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Solihull?",
    copy: "Describe the surface, drainage and access once, then compare interested Solihull driveway specialists and their quotes.",
    buttonLabel: "Get Solihull driveway quotes",
  },
});

export const windowSpecialistsSolihull = makeSolihullProfile("window-specialists", {
  heroCopy: "Need replacement windows, glazing repairs or new external doors in Solihull? Describe the openings, materials and property type once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Solihull?",
    copy: "Enter the postcode, number of openings and preferred frame or glazing type. Mention conservation-area, listed-building or Article 4 status if known so suitable Solihull window specialists can judge both installation and consent requirements.",
  },
  localContext: {
    eyebrow: "Solihull window and heritage context",
    title: "Replacement windows can involve both Building Regulations certification and tighter planning controls in protected areas",
    intro: "Solihull Council lists replacement windows and doors by installers outside recognised competent-person schemes among common work requiring Building Regulations approval. Separately, the borough's 20 conservation areas can restrict permitted development, and some locations have Article 4 directions that bring window and door changes into planning control.",
    items: [
      {
        title: "Non-competent-person replacement work may need a Building Control application",
        text: "Solihull's homeowner guidance says window and door replacement by installers who are not BSI, CERTASS or FENSA approved is among common improvements requiring Building Regulations approval. Ask the installer how the completed work will be certified before accepting the quote.",
        source: {
          label: "Solihull Council — do I need Building Regulations approval?",
          url: "https://www.solihull.gov.uk/planning-and-building-control/building-regulations-approval-homeowners/do-i-need-building",
        },
      },
      {
        title: "Conservation areas and Article 4 directions can remove the normal planning freedom for window changes",
        text: "Solihull Council says its 20 conservation areas have tighter controls and may also be subject to Article 4 directions. Current council material for White House Way, for example, states that installation or alteration of windows and doors requires planning permission under its Article 4 direction. Always check the exact address rather than assuming all conservation areas have identical controls.",
        source: {
          label: "Solihull Council — conservation areas",
          url: "https://www.solihull.gov.uk/planning-and-building-control/conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Solihull by postcode, frame system and project size. Example areas include:",
    sideTitle: "Give the property status before choosing the frame",
    sideCopy: "A standard replacement in Shirley and a window change in a protected part of Olton, White House Way or central Solihull may face different planning constraints. Check the address before ordering units.",
    noteLead: "Certification and planning are separate questions.",
    noteText: "A FENSA or CERTASS route can address Building Regulations for eligible replacement work, but it does not override conservation-area, Article 4 or listed-building planning controls.",
  },
  faq: [
    ["Do replacement windows need Building Regulations approval in Solihull?", "They must comply. Solihull says work by installers outside BSI, CERTASS or FENSA approval is among common improvements that need a Building Control route."],
    ["Can conservation-area status affect replacement windows?", "Yes. Solihull's conservation areas have tighter controls, and some specific areas also have Article 4 directions."],
    ["Does an Article 4 direction apply everywhere in Solihull?", "No. Controls are location-specific. Check the exact property on the council's conservation and heritage information before ordering windows or doors."],
    ["Can I post a misted-glass or single-window repair?", "Yes. Smaller glazing repairs can be posted alongside full window and door replacement projects."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Solihull?",
    copy: "Describe the openings, frame type and property status once, then compare interested Solihull window specialists and their quotes.",
    buttonLabel: "Get Solihull window quotes",
  },
});
