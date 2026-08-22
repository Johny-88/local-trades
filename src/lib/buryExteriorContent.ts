import { makeBuryProfile } from "./buryProfileBase";

export const drivewaySpecialistsBury = makeBuryProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or front-garden parking in Bury? Describe the area, surface, drainage and kerb access once, then compare driveway specialists who cover your postcode.",
  answer: {
    title: "Looking for a driveway specialist near you in Bury?",
    copy: "Enter the postcode, approximate area, preferred finish and whether you need excavation, sub-base, drainage, edging, wall changes or a vehicle crossover. Suitable Bury driveway specialists can then price the same scope.",
  },
  localContext: {
    eyebrow: "Bury dropped-kerb rules",
    title: "A new driveway does not automatically give permission to drive across the pavement",
    intro: "The private driveway surface and the highway crossover are separate parts of the project. Bury Council has a formal application process and detailed minimum site criteria for new dropped kerbs.",
    items: [
      {
        title: "Bury requires permission for a new vehicular access crossing",
        text: "Bury Council says you must apply and be granted permission for a new dropped kerb. The published checks include a driveway at least 5 metres long, at least 3.1 metres wide and with a gradient below 10 percent, subject to site-specific assessment.",
        source: {
          label: "Bury Council — dropped kerbs",
          url: "https://www.bury.gov.uk/roads-travel-and-parking/highways-keep-bury-moving/dropped-kerbs",
        },
      },
      {
        title: "Planning permission can be needed in conservation areas and on classified roads",
        text: "Bury Council says planning permission is required in several circumstances, including a classified road, conservation area, listed building or commercial/apartment access. The council also says only Bury Council may carry out the highway crossing work.",
        source: {
          label: "Bury Council — dropped kerbs",
          url: "https://www.bury.gov.uk/roads-travel-and-parking/highways-keep-bury-moving/dropped-kerbs",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Bury by postcode, area, surface and access. Example areas include:",
    sideTitle: "Separate private-land surfacing from highway work",
    sideCopy: "A resin refresh in Brandlesholme, a block-paved front garden in Chesham and a new parking area near Bury Town Centre can have different crossover, drainage, tree and planning constraints.",
    noteLead: "Apply for the crossover before committing to a finished driveway layout.",
    noteText: "Bury Council specifically recommends applying for the dropped kerb before creating a driveway because not every application is approved. Give contractors the highway decision and drainage plan before work starts.",
  },
  faq: [
    ["How much does a driveway cost in Bury?", "Cost depends on area, excavation, sub-base, drainage, edging, surface material, waste removal and whether highway or crossover work is involved."],
    ["Can I lower the kerb outside my Bury home myself?", "No. Bury Council says a formal application is required and only the council is permitted to carry out this work on the adopted highway."],
    ["What minimum driveway size does Bury publish for a dropped-kerb application?", "The council lists at least 5 metres of length and 3.1 metres of width, with a gradient below 10 percent, subject to individual assessment."],
    ["Can a conservation area affect a dropped-kerb application?", "Yes. Bury Council says planning permission is required where the property is in a conservation area, among other specified cases."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Bury?",
    copy: "Describe the driveway, drainage and crossover needs once, then compare interested Bury driveway specialists and their quotes.",
    buttonLabel: "Get Bury driveway quotes",
  },
});

export const windowSpecialistsBury = makeBuryProfile("window-specialists", {
  heroCopy: "Need replacement windows, glazing repairs or new doors and windows in Bury? Describe the property, openings, frame type and required work once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Bury?",
    copy: "Enter the postcode, number and approximate size of openings, frame material, glazing problem and whether you need repair or full replacement. Mention any conservation-area or heritage constraints so suitable Bury specialists can assess the same scope.",
  },
  localContext: {
    eyebrow: "Bury windows, Building Regulations and security",
    title: "Replacement windows can need Building Regulations compliance as well as a security specification",
    intro: "A full frame replacement is different from repairing a misted unit or hinge. Bury Council provides a dedicated replacement-window and door consent route, while Greater Manchester Police recommends accredited products for security.",
    items: [
      {
        title: "FENSA or another competent-person scheme can self-certify compliant installations",
        text: "Bury Council says an installer registered with FENSA or another relevant competent-person scheme can self-certify replacement windows and doors. If the contractor is not registered under an applicable scheme, an application must be made to the council.",
        source: {
          label: "Bury Council — Building Regulations consent",
          url: "https://www.bury.gov.uk/planning-building-control/building-regulations/consent",
        },
      },
      {
        title: "GMP recommends PAS 24:2022 for replacement security products",
        text: "Greater Manchester Police advises people replacing windows or doors to choose security-accredited products and identifies PAS 24:2022 as a good standard. Include locks and hardware in the specification rather than comparing frames only.",
        source: {
          label: "Greater Manchester Police — window security",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Bury by postcode, frame type and number of openings. Example areas include:",
    sideTitle: "Give the address before assuming every frame can be replaced the same way",
    sideCopy: "A failed double-glazed unit in Fishpool, replacement windows near Bury Town Centre and a new door in Walmersley can face different Building Regulations, heritage and security requirements.",
    noteLead: "Repair and replacement are different scopes.",
    noteText: "State whether the issue is misted glass, failed hinges, draughts, rotten frames, locking hardware or complete replacement. Photos from inside and outside make quotes easier to compare.",
  },
  faq: [
    ["How much do replacement windows cost in Bury?", "Cost depends on opening sizes, frame material, glazing, access, hardware, number of units, making good and any heritage requirements."],
    ["Do replacement windows need Building Regulations approval in Bury?", "They must comply. Bury Council says a registered competent-person installer such as FENSA can self-certify, otherwise a council application may be required."],
    ["What security standard does Greater Manchester Police suggest for new windows?", "GMP identifies PAS 24:2022 as a good standard for security-accredited replacement windows."],
    ["Can I post a misted-glass or hinge repair instead of full replacement?", "Yes. Repairs can be posted alongside complete frame and glazing replacement jobs."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Bury?",
    copy: "Describe the openings, faults and replacement requirements once, then compare interested Bury window specialists and their quotes.",
    buttonLabel: "Get Bury window quotes",
  },
});
