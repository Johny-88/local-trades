import { makeRochdaleProfile } from "./rochdaleProfileBase";

export const drivewaySpecialistsRochdale = makeRochdaleProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or front-garden parking in Rochdale? Describe the area, surface, drainage and kerb access once, then compare driveway specialists who cover your postcode.",
  answer: {
    title: "Looking for a driveway specialist near you in Rochdale?",
    copy: "Enter the postcode, approximate area, preferred finish and whether you need excavation, sub-base, drainage, edging, wall changes or a vehicle crossover. Suitable Rochdale driveway specialists can then price the same scope.",
  },
  localContext: {
    eyebrow: "Rochdale dropped-kerb rules",
    title: "A private driveway and the public-highway crossover are separate parts of the project",
    intro: "Rochdale Council has a formal dropped-kerb process and checks whether there is suitable parking space within the property. Planning permission can also be required in specific situations.",
    items: [
      {
        title: "The council will not approve a dropped kerb without suitable off-street parking space",
        text: "Rochdale Council says it cannot approve an application unless the property can provide a suitable parking area. The council also strengthens the footway crossing because ordinary pavements are not designed to carry vehicle loads.",
        source: {
          label: "Rochdale Borough Council — dropped kerbs",
          url: "https://www.rochdale.gov.uk/residential-streets-parking-home/apply-dropped-kerb/2",
        },
      },
      {
        title: "Planning permission can be required for classified roads, listed buildings and non-house properties",
        text: "Rochdale Council says a new dropped kerb normally does not need planning permission, but permission is required where the frontage is directly onto a classified road, the property is listed, or the property is not a single-family house.",
        source: {
          label: "Rochdale Borough Council — dropped-kerb planning permission",
          url: "https://www.rochdale.gov.uk/residential-streets-parking-home/apply-dropped-kerb/4",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Rochdale by postcode, surface and access. Example areas include:",
    sideTitle: "Separate private-land surfacing from the highway crossover",
    sideCopy: "A resin refresh in Milnrow, a block-paved front garden in Middleton and a new parking area in Rochdale may have different crossover, planning and drainage requirements.",
    noteLead: "Design the levels and drainage before choosing the finish.",
    noteText: "Give contractors the fall, existing levels, sub-base condition, kerb situation and where rainwater will go. A cheap surface over a weak base or poor drainage is not a like-for-like quote.",
  },
  faq: [
    ["How much does a driveway cost in Rochdale?", "Cost depends on area, excavation, sub-base, drainage, edging, surface material, waste removal and whether highway or crossover work is involved."],
    ["Can I just lower the kerb outside my Rochdale home?", "No. Rochdale Council has a formal dropped-kerb application and construction process."],
    ["Does Rochdale require off-street parking space before approving a dropped kerb?", "Yes. The council says it cannot approve the crossing unless a suitable parking area is available within the property."],
    ["When can a dropped kerb need planning permission?", "Rochdale Council lists classified-road frontages, listed buildings and properties other than single-family houses among situations requiring permission."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Rochdale?",
    copy: "Describe the driveway, drainage and crossover needs once, then compare interested Rochdale driveway specialists and their quotes.",
    buttonLabel: "Get Rochdale driveway quotes",
  },
});

export const windowSpecialistsRochdale = makeRochdaleProfile("window-specialists", {
  heroCopy: "Need replacement windows, glazing repairs or new doors and windows in Rochdale? Describe the property, openings, frame type and required work once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Rochdale?",
    copy: "Enter the postcode, number and approximate size of openings, frame material, glazing problem and whether you need repair or full replacement. Mention any conservation-area or heritage constraints so suitable Rochdale specialists can assess the same scope.",
  },
  localContext: {
    eyebrow: "Rochdale windows, Building Regulations and heritage",
    title: "Replacement windows can trigger Building Regulations and Article 4 controls can restrict exterior changes",
    intro: "The cheapest frame is not automatically the right specification. Rochdale Council lists replacement windows among common Building Regulations work and explains that Article 4 directions can remove ordinary permitted-development rights in defined areas.",
    items: [
      {
        title: "New or replacement windows can require Building Regulations approval",
        text: "Rochdale Council lists installation of new or replacement doors and windows among common proposals that may require approval, unless the work is carried out through an applicable competent-person scheme.",
        source: {
          label: "Rochdale Borough Council — work requiring Building Regulations approval",
          url: "https://www.rochdale.gov.uk/building-control-regulations/building-regulation-approval-requirements",
        },
      },
      {
        title: "Article 4 directions can remove permitted-development rights for replacing doors or windows",
        text: "Rochdale Council explains that Article 4 directions can require planning permission for work that would otherwise be permitted development, giving replacement doors and windows among its examples.",
        source: {
          label: "Rochdale Borough Council — conservation areas",
          url: "https://www.rochdale.gov.uk/heritage-conservation/conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Rochdale by postcode, frame type and number of openings. Example areas include:",
    sideTitle: "Give the address before assuming every frame can be replaced the same way",
    sideCopy: "A misted unit in Heywood, replacement windows in Rochdale and a new door in a conservation area near Middleton can face different appearance, planning and compliance requirements.",
    noteLead: "Repair and replacement are different scopes.",
    noteText: "State whether the issue is misted glass, failed hinges, draughts, rotten frames, locking hardware or complete replacement. Photos from inside and outside make quotes easier to compare.",
  },
  faq: [
    ["How much do replacement windows cost in Rochdale?", "Cost depends on opening sizes, frame material, glazing, access, hardware, number of units, making good and any heritage requirements."],
    ["Can replacement windows need Building Regulations approval?", "Yes. Rochdale Council lists new or replacement doors and windows among common work that can require approval unless an applicable competent-person route covers it."],
    ["Can an Article 4 direction affect window replacement?", "Yes. Rochdale Council specifically gives replacement doors and windows as examples of work whose permitted-development rights can be removed by an Article 4 direction."],
    ["Can I post a misted-glass or hinge repair instead of full replacement?", "Yes. Repairs can be posted alongside complete frame and glazing replacement jobs."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Rochdale?",
    copy: "Describe the openings, faults and replacement requirements once, then compare interested Rochdale window specialists and their quotes.",
    buttonLabel: "Get Rochdale window quotes",
  },
});
