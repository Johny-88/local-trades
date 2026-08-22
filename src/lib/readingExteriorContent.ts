import { makeReadingProfile } from "./readingProfileBase";

export const drivewaySpecialistsReading = makeReadingProfile("driveway-specialists", {
  heroCopy: "Planning block paving, resin, tarmac, gravel or a new parking area in Reading? Describe the frontage, dimensions and existing surface once, then compare driveway specialists interested in the job.",
  answer: {
    title: "Looking for a driveway specialist near you in Reading?",
    copy: "Enter the postcode, approximate square metres and preferred finish. Add photos from the road and say whether a dropped kerb already exists so suitable Reading driveway specialists can judge excavation, drainage and access requirements.",
  },
  localContext: {
    eyebrow: "Reading driveway rules",
    title: "A driveway and permission to cross the pavement are separate parts of the project",
    intro: "Reading Borough Council requires permission for a vehicle crossing or dropped kerb. Planning constraints can also matter where a property is in a conservation area or affected by an Article 4 direction.",
    items: [
      {
        title: "A new dropped kerb needs Reading Borough Council approval",
        text: "Reading Borough Council says you must have its permission to install a vehicle crossing to a property and currently charges a non-refundable application fee that includes processing, a site visit, measurements and a formal quotation. Check the crossover before assuming the driveway surface alone creates legal vehicle access.",
        source: {
          label: "Reading Borough Council — dropped kerbs",
          url: "https://www.reading.gov.uk/vehicles-roads-and-transport/roads-and-streets/dropped-kerbs-apms-and-disabled-boxes/",
        },
      },
      {
        title: "Heritage and Article 4 controls can affect frontage changes",
        text: "Reading has conservation areas and multiple Article 4 directions that remove specified permitted-development rights. If the driveway proposal changes walls, gates, patterned frontage features or other external elements, check the property constraints before finalising the design.",
        source: {
          label: "Reading Borough Council — Article 4 Directions",
          url: "https://www.reading.gov.uk/planning-and-building-control/article-4-directions/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Reading by postcode, surface and job size. Example areas include:",
    sideTitle: "Measure the frontage before choosing the finish",
    sideCopy: "Give width, depth, approximate square metres and photos showing the pavement and road. That helps identify excavation, drainage falls, retaining edges and whether the proposed vehicle access is realistic.",
    noteLead: "Do not assume the quote includes a dropped kerb.",
    noteText: "The vehicle crossing is controlled separately from surfacing within the property, so ask who is dealing with council permission and any crossover construction.",
  },
  faq: [
    ["How much does a driveway cost in Reading?", "The price depends on area, excavation, sub-base, drainage, edging and the chosen surface. Compare quotes against the same square metres and preparation specification."],
    ["Do I need permission for a dropped kerb in Reading?", "Yes. Reading Borough Council says permission is required to install a vehicle crossing or dropped kerb to a property."],
    ["Can conservation or Article 4 controls affect a front driveway?", "They can affect some external changes, walls, gates or distinctive frontage features. Check the exact property before removing or altering anything significant."],
    ["Should drainage be included in the quote?", "Yes. Ask how surface water will be managed and whether channels, soakaway work or permeable construction are included where required."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Reading?",
    copy: "Share the frontage, dimensions and preferred surface once, then compare interested Reading driveway specialists and their quotes.",
    buttonLabel: "Get Reading driveway quotes",
  },
});

export const windowSpecialistsReading = makeReadingProfile("window-specialists", {
  heroCopy: "Replacing windows, repairing failed double glazing or upgrading sash, bay, timber or uPVC units in Reading? Describe the property and openings once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Reading?",
    copy: "Enter the postcode, number and style of windows and whether you need full frames or only failed sealed units replaced. Mention listed-building, conservation-area or Article 4 status if known so suitable Reading specialists can respond accurately.",
  },
  localContext: {
    eyebrow: "Reading window and heritage checks",
    title: "Heritage controls and security standards both matter before replacement windows are ordered",
    intro: "Reading's conservation guidance restricts some replacement windows and doors, while Thames Valley Police recommends tested security standards for new windows. The property address and product specification therefore matter before ordering.",
    items: [
      {
        title: "Replacement windows in conservation areas can need planning permission",
        text: "Reading Borough Council says new or replacement windows and doors in a conservation area can require planning permission unless the materials are similar to the existing property. Listed-building alterations require listed-building consent, so check heritage status before ordering non-returnable frames.",
        source: {
          label: "Reading Borough Council — conservation-area guidance",
          url: "https://www.reading.gov.uk/planning-and-building-control/heritage-and-conservation/conservation-areas-listed-buildings/conservation-areas-guidance-and-advice-for-householders/",
        },
      },
      {
        title: "Thames Valley Police recommends security-accredited replacement windows",
        text: "Police guidance advises considering security-accredited replacement windows tested to standards such as PAS 24:2022. It also recommends measures such as key-operated locks, sash stops or opening restrictors where appropriate to the window type and location.",
        source: {
          label: "Thames Valley Police — window security",
          url: "https://www.thamesvalley.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Reading by postcode, frame type and project size. Example areas include:",
    sideTitle: "Check property status before ordering frames",
    sideCopy: "A modern house in Tilehurst and a period property in a Reading conservation area can have very different product and planning constraints. Confirm listing, conservation and Article 4 status before committing to replacement units.",
    noteLead: "Repair may be an alternative to full replacement.",
    noteText: "For timber or period windows, ask whether repair, draught-proofing, sealed-unit replacement or secondary glazing can meet the goal without changing the whole frame.",
  },
  faq: [
    ["How much do replacement windows cost in Reading?", "The price depends on material, style, size, glazing specification, access and whether repairs to surrounding finishes are included. Compare the same product specification and installation scope."],
    ["Can conservation-area rules affect replacement windows in Reading?", "Yes. Reading Borough Council says replacement windows and doors in conservation areas can require permission unless materials are similar to the existing property."],
    ["What about a listed building?", "Alterations that affect a listed building's character can require listed-building consent. Check before ordering or removing existing windows."],
    ["What security standard should I ask about?", "Thames Valley Police recommends considering security-accredited replacement windows tested to a recognised standard such as PAS 24:2022."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Reading?",
    copy: "Describe the openings and property once, then compare interested Reading window specialists and their product and fitting quotes.",
    buttonLabel: "Get Reading window quotes",
  },
});
