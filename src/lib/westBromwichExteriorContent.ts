import { makeWestBromwichProfile } from "./westBromwichProfileBase";

export const drivewaySpecialistsWestBromwich = makeWestBromwichProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway or resurfacing work in West Bromwich? Describe the area, finish, drainage and whether a new or altered dropped kerb is needed, then compare driveway specialists who cover your postcode.",
  answer: {
    title: "Looking for a driveway specialist near you in West Bromwich?",
    copy: "Enter the postcode, approximate dimensions, existing surface, preferred material, drainage requirements and whether vehicle access already has an approved dropped kerb. Mention trees, utility boxes or street furniture near the proposed crossover.",
  },
  localContext: {
    eyebrow: "West Bromwich dropped kerbs",
    title: "Sandwell permission comes before any new vehicle crossover is built",
    intro: "A private driveway and the highway crossing are separate pieces of work. Sandwell requires approval for the dropped kerb and sets minimum space criteria inside the property.",
    items: [
      {
        title: "You need council permission before a dropped kerb is installed",
        text: "Sandwell Council says homeowners must apply before lowering the kerb and strengthening the pavement for vehicle access. Unapproved highway work can result in the council charging to put the pavement back.",
        source: {
          label: "Sandwell Council — dropped kerbs",
          url: "https://www.sandwell.gov.uk/roads-travel-parking/dropped-kerbsdropped-kerbs",
        },
      },
      {
        title: "Sandwell's current terms require at least 4.2m depth by 2.4m width",
        text: "The council's November 2025 dropped-kerb terms say the parking area must normally be at least 4.2 metres deep from the back of the footway to the building line and 2.4 metres wide. A parallel space does not normally meet the requirement.",
        source: {
          label: "Sandwell Council — dropped kerb terms and conditions",
          url: "https://www.sandwell.gov.uk/downloads/file/677/dropped-kerb-terms-and-conditions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover West Bromwich by postcode, surface type and access. Example areas include:",
    sideTitle: "Measure the parking area before designing the finish",
    sideCopy: "A resurfacing job in Great Barr, a new crossover in Charlemont and a front-garden conversion in Newton can have different highway, drainage and space constraints. Give dimensions and photos from the road.",
    noteLead: "Do not build the private hardstanding on the assumption the council will approve the crossover.",
    noteText: "Check Sandwell's dropped-kerb criteria first, then compare driveway quotes that clearly separate private surfacing, drainage and highway-crossing costs.",
  },
  faq: [
    ["How much does a driveway cost in West Bromwich?", "Area, excavation, sub-base, surfacing material, drainage, edging, access and whether a dropped kerb is needed all affect cost."],
    ["Do I need Sandwell Council permission for a dropped kerb?", "Yes. The council says permission is required before the work can be carried out."],
    ["How large does the parking area need to be?", "Sandwell's current terms normally require at least 4.2m depth and 2.4m width."],
    ["Should I build the driveway before applying for the crossover?", "No. Sandwell's terms say not to make the driveway until the required permissions have been obtained and the council has confirmed the crossover is permissible."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in West Bromwich?",
    copy: "Describe the area, surface and crossover requirements once, then compare interested West Bromwich driveway specialists and their quotes.",
    buttonLabel: "Get West Bromwich driveway quotes",
  },
});

export const windowSpecialistsWestBromwich = makeWestBromwichProfile("window-specialists", {
  heroCopy: "Need replacement windows, glazing or window repairs in West Bromwich? Describe the openings, frame type, glazing and property once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in West Bromwich?",
    copy: "Enter the postcode, number and approximate size of windows, frame material, repair or replacement scope and any known conservation or Article 4 status. Photos of each elevation help contractors quote consistently.",
  },
  localContext: {
    eyebrow: "West Bromwich windows and planning",
    title: "High Street properties can face Article 4 controls, while police guidance favours PAS 24 security",
    intro: "For some West Bromwich properties, window choice is not only about energy efficiency and appearance. Planning controls and security standards can both affect the right specification.",
    items: [
      {
        title: "Some properties in the West Bromwich High Street Conservation Area are covered by Article 4",
        text: "Sandwell Council says its West Bromwich High Street Article 4 direction can require planning permission for external changes that would normally fall within permitted-development rights. Check the exact address before ordering replacement windows.",
        source: {
          label: "Sandwell Council — Historic Areas",
          url: "https://www.sandwell.gov.uk/planning/historic-environment/3",
        },
      },
      {
        title: "West Midlands Police recommends PAS 24:2022 for replacement windows",
        text: "Police window-security guidance recommends security-accredited replacement products and identifies PAS 24:2022 as a good standard for windows tested to British security requirements.",
        source: {
          label: "West Midlands Police — window security",
          url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover West Bromwich by postcode, frame type and number of openings. Example areas include:",
    sideTitle: "Give each elevation and planning constraint",
    sideCopy: "A failed sealed unit in Hateley Heath, full uPVC replacement in Yew Tree and frontage work on West Bromwich High Street are very different jobs. State whether the property is in a conservation area or subject to Article 4 controls.",
    noteLead: "Do not order a whole set of windows before checking restrictions on an affected historic property.",
    noteText: "Compare frame specification, glazing, trickle ventilation, security standard, finishing, disposal and certification on the same basis, and resolve planning constraints first where they apply.",
  },
  faq: [
    ["How much do replacement windows cost in West Bromwich?", "Number and size of openings, frame material, glazing, access, security specification and finishing all affect the quote."],
    ["Can Article 4 affect replacement windows in West Bromwich?", "Yes. Some residential properties within the West Bromwich High Street Conservation Area are covered by an Article 4 direction."],
    ["What security standard does West Midlands Police mention for windows?", "Its guidance identifies PAS 24:2022 as a good standard for security-accredited replacement windows."],
    ["Should I send photos of every elevation?", "Yes. Photos help identify window styles, access, openings and any frontage differences before a survey."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in West Bromwich?",
    copy: "Describe the windows, property and required specification once, then compare interested West Bromwich window specialists and their quotes.",
    buttonLabel: "Get West Bromwich window quotes",
  },
});
