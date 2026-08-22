import { makeSouthamptonProfile } from "./southamptonProfileBase";

export const drivewaySpecialistsSouthampton = makeSouthamptonProfile("driveway-specialists", {
  heroCopy: "Planning block paving, resin, tarmac, gravel or a new parking area in Southampton? Describe the frontage, dimensions and existing surface once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Southampton?",
    copy: "Enter the postcode, approximate square metres and preferred finish. Add photos from the road and say whether a dropped kerb already exists so suitable Southampton driveway specialists can judge excavation, drainage and access requirements.",
  },
  localContext: {
    eyebrow: "Southampton driveway rules",
    title: "Dropped-kerb approval and surface-water drainage need checking before work starts",
    intro: "A driveway inside your boundary and permission to cross the public footway are separate matters. Southampton also has specific rules for impermeable front-garden surfacing and runoff.",
    items: [
      {
        title: "Driving across the pavement requires an authorised vehicle crossover",
        text: "Southampton City Council says it is illegal to drive over the pavement without a vehicle crossover. A dropped-kerb application is required, and the council currently lists a non-refundable £165 application charge. Contractors carrying out highway excavation must meet the required NRSWA accreditation and insurance standards.",
        source: {
          label: "Southampton City Council — dropped kerbs",
          url: "https://www.southampton.gov.uk/travel-transport/apply-pay/licences/dropped-kerbs/",
        },
      },
      {
        title: "Impermeable surfacing over five square metres can trigger planning rules",
        text: "Southampton's dropped-kerb policy and flood-risk advice say planning permission can be required where more than five square metres of traditional impermeable driveway does not drain to a permeable area within the property. Surface water should not be directed onto the highway.",
        source: {
          label: "Southampton City Council — reduce flooding risk",
          url: "https://www.southampton.gov.uk/environment/emergencies-and-severe-weather/flood-risk-management/flood-risk-advice/reduce-flooding-risk/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Southampton by postcode, surface and job size. Example areas include:",
    sideTitle: "Measure the frontage before choosing the finish",
    sideCopy: "Give width, depth, approximate square metres and photos showing the pavement and road. That helps identify drainage falls, retaining edges, levels and whether the proposed vehicle access is realistic.",
    noteLead: "Do not assume the driveway quote includes the dropped kerb.",
    noteText: "The crossover is controlled by the highway authority and has its own approval and contractor requirements separate from surfacing inside the property.",
  },
  faq: [
    ["How much does a driveway cost in Southampton?", "The price depends on area, excavation depth, disposal, drainage, edging and surface choice. Compare quotes using the same measured square metres and preparation specification."],
    ["Do I need a dropped kerb for a new Southampton driveway?", "If a vehicle must cross the public pavement, Southampton City Council requires an authorised vehicle crossover rather than simply driving over the existing kerb."],
    ["Will I need planning permission for the driveway surface?", "It can be required for more than five square metres of impermeable front-garden surfacing if runoff is not directed to a permeable area within the property."],
    ["Can driveway water run onto the pavement or road?", "Southampton's guidance says driveway construction should prevent surface water from spilling onto the public pavement or highway."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Southampton?",
    copy: "Share the frontage, dimensions and preferred surface once, then compare interested Southampton driveway specialists and their quotes.",
    buttonLabel: "Get Southampton driveway quotes",
  },
});

export const windowSpecialistsSouthampton = makeSouthamptonProfile("window-specialists", {
  heroCopy: "Replacing windows, repairing failed double glazing or upgrading sash, bay, timber or uPVC units in Southampton? Describe the property and openings once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Southampton?",
    copy: "Enter the postcode, number and style of windows and whether you need full frames or only failed sealed units replaced. Mention listed-building or conservation-area status if known so suitable Southampton specialists can respond accurately.",
  },
  localContext: {
    eyebrow: "Southampton window and heritage checks",
    title: "Heritage controls and security standards can affect the right replacement product",
    intro: "Southampton has hundreds of listed buildings and 20 conservation areas, while Hampshire Police also recommends recognised security standards for replacement windows.",
    items: [
      {
        title: "Listed-building consent can apply to window replacement",
        text: "Southampton City Council says there are more than 450 listed buildings in the city and that listing covers the whole building, inside and out. Its listed-building consent guidance specifically includes altering or replacing doors and windows among works that can require consent, so check status before ordering non-returnable frames.",
        source: {
          label: "Southampton City Council — listed building consent",
          url: "https://www.southampton.gov.uk/planning/heritage/buildings-monuments-parks/listed-building-consent/",
        },
      },
      {
        title: "Police guidance recommends security-accredited replacement windows",
        text: "Hampshire and Isle of Wight Constabulary recommends security-accredited replacement windows tested to standards such as PAS 24:2022. Its advice also highlights key-operated locks, sash stops and laminated glazing for accessible windows where appropriate.",
        source: {
          label: "Hampshire and Isle of Wight Constabulary — window security",
          url: "https://www.hampshire.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Southampton by postcode, frame type and project size. Example areas include:",
    sideTitle: "Check heritage status before ordering frames",
    sideCopy: "A standard modern house and a period property within a conservation area can have very different planning and product constraints. Confirm status before committing to a frame material, glazing pattern or opening style.",
    noteLead: "Repair can sometimes be better than full replacement.",
    noteText: "For timber or period windows, ask whether repair, draught-proofing, sealed-unit replacement or secondary glazing could meet the goal without removing the original frame.",
  },
  faq: [
    ["How much do replacement windows cost in Southampton?", "The total depends on frame material, style, size, glazing specification, access and whether the existing openings need repair. Compare quotes for the same product specification and fitting scope."],
    ["Can I replace windows on a listed Southampton property?", "Do not order first and ask later. Southampton City Council says altering or replacing windows on a listed building can require listed-building consent."],
    ["Do conservation areas affect window replacement?", "They can. Southampton has 20 conservation areas with extra planning controls, so check the property status and any relevant appraisal before choosing a visibly different replacement."],
    ["What security standard should I ask about?", "Hampshire Police recommends security-accredited replacement windows tested to a recognised standard such as PAS 24:2022."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Southampton?",
    copy: "Describe the openings and property once, then compare interested Southampton window specialists and their product and fitting quotes.",
    buttonLabel: "Get Southampton window quotes",
  },
});
