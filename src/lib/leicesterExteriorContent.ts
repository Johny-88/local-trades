import { makeLeicesterProfile } from "./leicesterProfileBase";

export const drivewaySpecialistsLeicester = makeLeicesterProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or dropped-kerb access in Leicester? Describe the area, surface and access requirements once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Leicester?",
    copy: "Enter the postcode and describe the existing surface, approximate area, drainage, desired finish and whether a new or altered dropped kerb is needed. Add photos from the road and property so suitable Leicester driveway specialists can judge the job.",
  },
  localContext: {
    eyebrow: "Leicester driveway and runoff context",
    title: "Dropped-kerb approval and surface-water management both matter before paving starts",
    intro: "A private driveway surface and the public-highway crossing are separate parts of the job. Leicester requires highway approval for new footway crossings, while local planning policy also places strong emphasis on permeable or SuDS-based front parking surfaces.",
    items: [
      {
        title: "A new dropped kerb needs Leicester highway approval",
        text: "Leicester City Council's current highway guidance says applicants must obtain Local Highway Authority approval before constructing a new footway crossing. The council no longer builds these crossings for applicants, so the approved process and suitable contractor need resolving before work starts.",
        source: {
          label: "Leicester City Council — highway requirements for new footway crossings",
          url: "https://cabinet.leicester.gov.uk/mgAi.aspx?ID=127791",
        },
      },
      {
        title: "Front parking areas over 5 square metres should use SuDS techniques",
        text: "Leicester's current Local Plan says new parking areas between a home's principal elevation and the highway should use sustainable drainage techniques where the area exceeds 5 square metres. That makes runoff direction and surface permeability part of the design, not an afterthought.",
        source: {
          label: "Leicester City Council — climate change and flood risk",
          url: "https://www.leicester.gov.uk/leicester-local-plan/climate-change-and-flood-risk",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Leicester by postcode, surface and access. Example areas include:",
    sideTitle: "Show the whole frontage and the highway edge",
    sideCopy: "A front garden in Knighton, an existing hardstanding in Evington and a tighter terrace frontage in Westcotes can have very different drainage, visibility, kerb and parking constraints.",
    noteLead: "Do not assume the dropped kerb is part of the paving quote.",
    noteText: "Confirm separately who is obtaining highway approval, who is constructing the crossing and how surface water will be kept from creating a new runoff problem.",
  },
  faq: [
    ["How much does a driveway cost in Leicester?", "Cost depends on area, excavation, sub-base, drainage, edging, surface choice, access and whether a dropped kerb is required."],
    ["Do I need approval for a dropped kerb in Leicester?", "Yes. New footway crossings need approval from Leicester's Local Highway Authority before work is carried out."],
    ["Does driveway drainage matter in Leicester?", "Yes. Leicester's planning policy emphasises SuDS and requires sustainable drainage techniques for certain larger front parking areas."],
    ["Can a dropped kerb application be refused?", "Yes. Safety, visibility, junctions, trees, street furniture, slope, available parking space and flood/runoff effects can all matter."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Leicester?",
    copy: "Describe the frontage, surface, drainage and access once, then compare interested Leicester driveway specialists and their quotes.",
    buttonLabel: "Get Leicester driveway quotes",
  },
});

export const windowSpecialistsLeicester = makeLeicesterProfile("window-specialists", {
  heroCopy: "Need replacement windows, repairs or glazing upgrades in Leicester? Describe the property, window type and required work once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Leicester?",
    copy: "Enter the postcode and describe the number, material, style and condition of the windows. Add photos and say whether the property is listed or in a conservation area if known so suitable Leicester window specialists can judge the job.",
  },
  localContext: {
    eyebrow: "Leicester window and heritage context",
    title: "Replacement windows can involve both Building Regulations and local planning controls",
    intro: "Ordinary replacement windows are controlled fittings under Building Regulations, while Leicester's Article 4 and listed-building controls can separately restrict changes to external appearance in protected properties.",
    items: [
      {
        title: "Replacement windows can require Building Regulations compliance",
        text: "Leicester City Council guidance identifies replacement windows among alterations that may require Building Regulations approval, covering issues such as energy performance and means of escape. Ask the installer what approval or competent-person certification route will be used.",
        source: {
          label: "Leicester City Council — achieving well-designed homes",
          url: "https://consultations.leicester.gov.uk/communications/urban-planning/user_uploads/achieving-well-designed-homes-2019.pdf",
        },
      },
      {
        title: "Article 4 directions can require planning permission for window changes",
        text: "Leicester City Council says Article 4 directions in parts of the city can remove normal permitted-development rights for changing windows and doors. Areas such as Stoneygate, New Walk, West End and Knighton Village have additional controls, so check the address before ordering replacements.",
        source: {
          label: "Leicester City Council — Article 4 directions",
          url: "https://www.leicester.gov.uk/planning-environment-and-building-control/planning-applications/check-if-you-need-planning-permission/article-4-directions-leicester",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Leicester by postcode, window type and project size. Example areas include:",
    sideTitle: "Check planning status before ordering made-to-measure units",
    sideCopy: "A period house in Stoneygate, a home in Knighton and a modern property in Humberstone can have very different style, material, planning and certification requirements.",
    noteLead: "Security standard matters too.",
    noteText: "Leicestershire Police recommends security-accredited replacement windows and cites PAS 24:2022 as a good standard, especially for accessible openings.",
  },
  faq: [
    ["How much do replacement windows cost in Leicester?", "Cost depends on number, size, frame material, glazing specification, access, repairs and whether heritage-style units are required."],
    ["Do replacement windows need Building Regulations approval?", "They are controlled fittings and need to meet the relevant standards; installers commonly use an applicable competent-person route or Building Control approval."],
    ["Can I replace windows freely in a Leicester conservation area?", "Not always. Article 4 directions or listed-building controls can require permission for changes that would otherwise be permitted."],
    ["What security standard should I ask about?", "Leicestershire Police recommends security-accredited products and identifies PAS 24:2022 as a good standard for replacement windows."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Leicester?",
    copy: "Describe the windows, property status and required work once, then compare interested Leicester window specialists and their quotes.",
    buttonLabel: "Get Leicester window quotes",
  },
});
