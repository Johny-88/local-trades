import { makeEnfieldProfile } from "./enfieldProfileBase";

export const drivewaySpecialistsEnfield = makeEnfieldProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or front-garden parking in Enfield? Describe the area, surface, drainage and kerb access once, then compare driveway specialists who cover your postcode.",
  answer: {
    title: "Looking for a driveway specialist near you in Enfield?",
    copy: "Enter the postcode, approximate area, preferred finish and whether you need excavation, sub-base, drainage, edging, wall changes or a vehicle crossover. Suitable Enfield driveway specialists can then price the same scope.",
  },
  localContext: {
    eyebrow: "Enfield dropped-kerb rules",
    title: "Creating front-garden parking does not automatically give permission to drive across the pavement",
    intro: "The driveway surface and the highway crossover are separate parts of the project. Enfield Council provides a specific application process for vehicle crossovers and checks site criteria before approval.",
    items: [
      {
        title: "Enfield Council builds or extends approved vehicle crossovers",
        text: "The council says it can build or extend a dropped kerb for vehicles, also called a vehicle crossover, so a vehicle can cross the footway into a parking area. Applications must meet the council's approval criteria.",
        source: {
          label: "Enfield Council — dropped kerbs for vehicles",
          url: "https://www.enfield.gov.uk/services/roads-and-transport/dropped-kerbs-for-vehicles",
        },
      },
      {
        title: "Protected trees should be checked before a crossover application",
        text: "Enfield specifically tells applicants to get advice before applying where protected trees are present. Council streetscape guidance also notes that planning permission can be required in circumstances such as classified roads or where sustainable drainage is not incorporated.",
        source: {
          label: "Enfield Council — dropped kerbs for vehicles",
          url: "https://www.enfield.gov.uk/services/roads-and-transport/dropped-kerbs-for-vehicles",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Enfield by postcode, area, surface and access. Example areas include:",
    sideTitle: "Separate private-land surfacing from highway work",
    sideCopy: "A resin refresh in Winchmore Hill, a block-paved front garden in Southgate and a new parking area in Enfield Town may have different crossover, drainage, tree and planning constraints.",
    noteLead: "Design the drainage before choosing the finish.",
    noteText: "Give contractors the fall, existing levels, sub-base condition and where rainwater will go. A cheap surface over a weak base or poor drainage is not a like-for-like quote.",
  },
  faq: [
    ["How much does a driveway cost in Enfield?", "Cost depends on area, excavation, sub-base, drainage, edging, surface material, waste removal and whether highway or crossover work is involved."],
    ["Can I just lower the kerb outside my Enfield home?", "No. Enfield Council has a formal vehicle-crossover application and construction process."],
    ["Do protected trees matter for a dropped-kerb application?", "Yes. Enfield Council specifically says applicants with protected trees should obtain advice before applying."],
    ["Can drainage affect whether planning permission is needed?", "Potentially. Enfield guidance notes that planning can be required where sustainable drainage is not incorporated, as well as in other circumstances such as classified roads."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Enfield?",
    copy: "Describe the driveway, drainage and crossover needs once, then compare interested Enfield driveway specialists and their quotes.",
    buttonLabel: "Get Enfield driveway quotes",
  },
});

export const windowSpecialistsEnfield = makeEnfieldProfile("window-specialists", {
  heroCopy: "Need replacement windows, glazing repairs or new doors and windows in Enfield? Describe the property, openings, frame type and required work once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Enfield?",
    copy: "Enter the postcode, number and approximate size of openings, frame material, glazing problem and whether you need repair or full replacement. Mention any conservation-area or heritage constraints so suitable Enfield specialists can assess the same scope.",
  },
  localContext: {
    eyebrow: "Enfield windows, heritage and security",
    title: "Conservation-area Article 4 controls and police security advice can both affect a replacement specification",
    intro: "The cheapest replacement is not automatically the right one. Enfield has 22 conservation areas, several with Article 4 directions, while the Metropolitan Police also publishes specific advice on secure doors and windows.",
    items: [
      {
        title: "Several Enfield conservation areas have Article 4 directions",
        text: "Enfield Council lists Article 4 controls affecting areas including Bush Hill Park, Enfield Lock, Enfield Town, Forty Hill, Southgate Green and Winchmore Hill. At affected addresses, specified exterior changes can need planning permission even where ordinary permitted-development rights would otherwise apply.",
        source: {
          label: "Enfield Council — Article 4 directions in conservation areas",
          url: "https://www.enfield.gov.uk/services/planning/heritage/conservation-areas/article-4-directions-in-conservation-areas",
        },
      },
      {
        title: "Met Police guidance says doors and windows should be treated as the home's key entry points",
        text: "The Metropolitan Police advises London residents to keep doors and windows as secure as possible and to close and lock them whenever leaving home. When replacing frames or glazing, include security hardware in the specification rather than treating it as an afterthought.",
        source: {
          label: "Metropolitan Police — protecting your home from crime",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Enfield by postcode, frame type and number of openings. Example areas include:",
    sideTitle: "Give the address before assuming every frame can be replaced the same way",
    sideCopy: "A failed double-glazed unit in Edmonton, replacement windows in Enfield Town and a new door in Winchmore Hill can face very different heritage, appearance and security requirements.",
    noteLead: "Repair and replacement are different scopes.",
    noteText: "State whether the issue is misted glass, failed hinges, draughts, rotten frames, locking hardware or complete replacement. Photos from inside and outside make quotes easier to compare.",
  },
  faq: [
    ["How much do replacement windows cost in Enfield?", "Cost depends on opening sizes, frame material, glazing, access, hardware, number of units, making good and any heritage requirements."],
    ["Does Enfield have conservation areas with Article 4 controls?", "Yes. Enfield Council lists several conservation areas with Article 4 directions that can restrict specified exterior changes."],
    ["What security should I consider when replacing windows or doors?", "The Metropolitan Police recommends treating doors and windows as key entry points and using secure, properly locked products and hardware."],
    ["Can I post a misted-glass or hinge repair instead of full replacement?", "Yes. Repairs can be posted alongside complete frame and glazing replacement jobs."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Enfield?",
    copy: "Describe the openings, faults and replacement requirements once, then compare interested Enfield window specialists and their quotes.",
    buttonLabel: "Get Enfield window quotes",
  },
});
