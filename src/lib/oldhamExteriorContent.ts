import { makeOldhamProfile } from "./oldhamProfileBase";

export const drivewaySpecialistsOldham = makeOldhamProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or front-garden parking in Oldham? Describe the area, surface, drainage and kerb access once, then compare driveway specialists who cover your postcode.",
  answer: {
    title: "Looking for a driveway specialist near you in Oldham?",
    copy: "Enter the postcode, approximate area, preferred finish and whether you need excavation, sub-base, drainage, edging, wall changes or a vehicle crossover. Suitable Oldham driveway specialists can then price the same scope.",
  },
  localContext: {
    eyebrow: "Oldham dropped-kerb rules",
    title: "The driveway surface and the highway crossing are separate approvals",
    intro: "Oldham Council has a specific Light Duty Vehicle Crossing process. The council assesses safety and driveway criteria, controls construction of approved domestic dropped kerbs and identifies circumstances where planning permission may also be needed.",
    items: [
      {
        title: "Oldham Council assesses domestic dropped-kerb applications against specific criteria",
        text: "The council's current page lists driveway and safety criteria including gradient, distance from junctions and obstructions. Applications are assessed under the Light Duty Vehicle Crossings Policy.",
        source: {
          label: "Oldham Council — dropped kerbs",
          url: "https://www.oldham.gov.uk/info/201054/roads_streets_and_pavements/828/dropped_kerbs",
        },
      },
      {
        title: "Approved domestic dropped kerbs are constructed by Oldham Council",
        text: "Oldham Council says it does not allow other contractors to construct approved dropped kerbs. It also says planning permission may be required for classified roads, listed buildings, conservation areas, heavier vehicles, multiple homes or commercial access.",
        source: {
          label: "Oldham Council — dropped kerbs",
          url: "https://www.oldham.gov.uk/info/201054/roads_streets_and_pavements/828/dropped_kerbs",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Oldham by postcode, area, surface and access. Example areas include:",
    sideTitle: "Separate private-land surfacing from highway work",
    sideCopy: "A resin refresh in Failsworth, a block-paved front garden in Royton and a new parking area in Saddleworth may have different crossover, drainage and planning constraints.",
    noteLead: "Design the drainage and crossover before choosing the finish.",
    noteText: "Give contractors the levels, sub-base condition, where rainwater will go and whether a dropped kerb already exists. A cheap surface over a weak base is not a like-for-like quote.",
  },
  faq: [
    ["How much does a driveway cost in Oldham?", "Cost depends on area, excavation, sub-base, drainage, edging, surface material, waste removal and whether crossover work is needed."],
    ["Can my driveway contractor install the dropped kerb in Oldham?", "No. Oldham Council says approved domestic dropped kerbs are constructed by the council."],
    ["Can a dropped kerb need planning permission?", "Yes. Oldham Council lists circumstances including classified roads, listed buildings, conservation areas, heavy vehicles, multiple homes and commercial access."],
    ["Does Oldham have minimum driveway and safety criteria?", "Yes. The council assesses applications under its Light Duty Vehicle Crossings Policy and publishes criteria such as gradient and distance from junctions."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Oldham?",
    copy: "Describe the driveway, drainage and crossover needs once, then compare interested Oldham driveway specialists and their quotes.",
    buttonLabel: "Get Oldham driveway quotes",
  },
});

export const windowSpecialistsOldham = makeOldhamProfile("window-specialists", {
  heroCopy: "Need replacement windows, glazing repairs or new doors and windows in Oldham? Describe the property, openings, frame type and required work once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Oldham?",
    copy: "Enter the postcode, number and approximate size of openings, frame material, glazing problem and whether you need repair or full replacement. Mention any conservation-area or heritage constraints so suitable Oldham specialists can assess the same scope.",
  },
  localContext: {
    eyebrow: "Oldham windows, heritage and security",
    title: "Heritage context and PAS 24 security can both affect the replacement specification",
    intro: "Oldham has a large conservation-area network, while Greater Manchester Police recommends security-accredited replacement windows. The right specification therefore depends on both the address and the opening.",
    items: [
      {
        title: "Oldham Council records 36 conservation areas",
        text: "The council's current Local Plan evidence records 36 conservation areas covering around 254.83 hectares. For external replacements, check whether the exact property is within a conservation area or has another heritage constraint before assuming a standard frame change is appropriate.",
        source: {
          label: "Oldham Council — Local Plan integrated assessment",
          url: "https://www.oldham.gov.uk/download/downloads/id/8325/oldham_local_plan_publication_plan_integrated_assessment_scoping_report.pdf",
        },
      },
      {
        title: "GMP recommends PAS 24:2022 when replacing windows",
        text: "Greater Manchester Police says replacement windows should use security-accredited products tested to British standards and identifies PAS 24:2022 as a good standard. It also recommends laminated glass or security film for accessible windows.",
        source: {
          label: "Greater Manchester Police — window security",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Oldham by postcode, frame type and number of openings. Example areas include:",
    sideTitle: "Give the address before assuming every frame can be replaced the same way",
    sideCopy: "A misted unit in Chadderton, replacement windows near Oldham town centre and new glazing in Saddleworth can face different appearance, heritage and access requirements.",
    noteLead: "Repair and replacement are different scopes.",
    noteText: "State whether the issue is misted glass, failed hinges, draughts, rotten frames, locking hardware or complete replacement. Photos from inside and outside make quotes easier to compare.",
  },
  faq: [
    ["How much do replacement windows cost in Oldham?", "Cost depends on opening sizes, frame material, glazing, access, hardware, number of units, making good and any heritage requirements."],
    ["Does Oldham have conservation areas?", "Yes. Oldham Council's current Local Plan evidence records 36 conservation areas."],
    ["What security standard does GMP recommend for replacement windows?", "Greater Manchester Police identifies PAS 24:2022 as a good standard for security-accredited replacement windows."],
    ["Can I post a misted-glass or hinge repair instead of full replacement?", "Yes. Repairs can be posted alongside complete frame and glazing replacement jobs."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Oldham?",
    copy: "Describe the openings, faults and replacement requirements once, then compare interested Oldham window specialists and their quotes.",
    buttonLabel: "Get Oldham window quotes",
  },
});
