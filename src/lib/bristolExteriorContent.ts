import { makeBristolProfile } from "./bristolProfileBase";

export const drivewaySpecialistsBristol = makeBristolProfile("driveway-specialists", {
  heroCopy: "Planning block paving, resin, tarmac, gravel or a new parking area in Bristol? Describe the frontage, dimensions and existing surface once, then compare driveway specialists interested in the job.",
  answer: {
    title: "Looking for a driveway specialist near you in Bristol?",
    copy: "Enter the postcode, approximate square metres and preferred finish. Add photos from the road and say whether a dropped kerb already exists so suitable Bristol driveway specialists can judge excavation, drainage and access requirements.",
  },
  localContext: {
    eyebrow: "Bristol driveway rules",
    title: "Vehicle-crossing approval and drainage need checking before the surface is laid",
    intro: "A driveway inside the boundary and the right to cross the public footway are separate issues. Bristol also expects surface water to be kept off the adopted highway.",
    items: [
      {
        title: "A new vehicle crossover needs highway approval",
        text: "Bristol City Council's vehicle-crossover guidance says a dropped kerb and crossover require a Section 171 licence. Applications are assessed for issues such as distance from junctions, pedestrian and vehicle visibility and the width of the crossing, so the driveway design should be checked before work starts.",
        source: {
          label: "Bristol City Council — vehicle crossover guidance",
          url: "https://www.bristol.gov.uk/files/documents/1502-vehicle-crossover-s-171-and-s-184-guidance-and-process-document/file",
        },
      },
      {
        title: "Driveway drainage should not discharge onto the highway",
        text: "Bristol's transport design guidance says suitable drainage must be provided within the property at the point of access to prevent surface water being discharged onto the adopted highway. The same guidance promotes porous or permeable paving approaches in suitable situations.",
        source: {
          label: "Bristol City Council — off-street parking and private drives",
          url: "https://www.bristol.gov.uk/files/documents/5422-off-street-parking-spaces-and-private-drives/file",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Bristol by postcode, surface and job size. Example areas include:",
    sideTitle: "Measure the frontage before choosing the finish",
    sideCopy: "Give width, depth, approximate square metres and photos showing the pavement and road. That helps identify drainage falls, levels, retaining edges and whether the proposed vehicle access is realistic.",
    noteLead: "Do not assume the driveway quote includes a dropped kerb.",
    noteText: "The vehicle crossover is controlled by the highway authority and can have its own licence, design and contractor requirements separate from surfacing inside the property.",
  },
  faq: [
    ["How much does a driveway cost in Bristol?", "For a 30m² one-car driveway, MyJobQuote's current UK guide gives broad ranges of about £1,000–£2,500 for gravel, £1,200–£2,000 for resin, £1,300–£3,200 for tarmac and £1,200–£4,000 for block paving."],
    ["Do I need a dropped kerb for a new Bristol driveway?", "If vehicles need to cross the public footway, Bristol's guidance requires an approved vehicle crossover rather than simply driving over an ordinary kerb."],
    ["Can driveway water run onto the pavement?", "Bristol's transport guidance says drainage should be provided within the site so surface water does not discharge onto the adopted highway."],
    ["Can planning controls affect a front-garden driveway?", "Yes in some locations. Bristol has Article 4 Directions in certain areas, including controls on hard standings in parts of Cotham and Redland, so check the property constraints before removing walls or creating parking."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Bristol?",
    copy: "Share the frontage, dimensions and preferred surface once, then compare interested Bristol driveway specialists and their quotes.",
    buttonLabel: "Get Bristol driveway quotes",
  },
});

export const windowSpecialistsBristol = makeBristolProfile("window-specialists", {
  heroCopy: "Replacing windows, repairing failed double glazing or upgrading sash, bay, timber or uPVC units in Bristol? Describe the property and openings once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Bristol?",
    copy: "Enter the postcode, number and style of windows and whether you need full frames or only failed sealed units replaced. Mention listed-building or conservation-area status if known so suitable Bristol specialists can respond accurately.",
  },
  localContext: {
    eyebrow: "Bristol window and heritage checks",
    title: "Traditional sash windows and heritage controls make the property address especially important",
    intro: "Bristol's own window guidance emphasises the city's traditional timber sash stock, while local police guidance adds a separate security standard to consider for modern replacements.",
    items: [
      {
        title: "Bristol's traditional window guidance puts strong emphasis on retention and repair",
        text: "Bristol City Council says timber sliding sash windows are the most common form of traditional window in the city. Its guidance says replacing windows on a listed building requires listed-building consent and changing windows to a flat in a conservation area requires planning permission, while like-for-like repairs do not usually need permission.",
        source: {
          label: "Bristol City Council — Traditional Windows guidance",
          url: "https://www.bristol.gov.uk/files/documents/2914-traditional-windows-guidance-and-repairs/file",
        },
      },
      {
        title: "Security specification matters when replacement is appropriate",
        text: "Avon and Somerset Police advises people replacing windows to choose security-accredited products tested to standards such as PAS 24:2022. For sash windows, it also recommends measures such as paired sash stops or suitable locking bolts where extra security is needed.",
        source: {
          label: "Avon and Somerset Police — window security",
          url: "https://www.avonandsomerset.police.uk/crime-prevention-advice/home-protection/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Bristol by postcode, frame type and project size. Example areas include:",
    sideTitle: "Give the property status before ordering frames",
    sideCopy: "A standard modern house and a period flat in Clifton or Redland can have very different planning and product constraints. Check listing and conservation status before committing to non-returnable units.",
    noteLead: "Repair can be a real alternative to replacement.",
    noteText: "For traditional timber windows, ask whether draught-proofing, repair, secondary glazing or sealed-unit work can meet the goal without replacing the whole frame.",
  },
  faq: [
    ["How much do replacement windows cost in Bristol?", "MyJobQuote's current UK guide gives about £350–£600 for a standard uPVC casement, £600–£1,100 for a uPVC sash and £1,200–£2,800 for a bay window as broad examples."],
    ["Can I replace windows on a listed Bristol property?", "Bristol City Council's guidance says replacing any windows on a listed building requires listed-building consent. Check before ordering or removing the existing windows."],
    ["What about a flat in a Bristol conservation area?", "The council's Traditional Windows guidance says changing windows on a flat in a conservation area requires planning permission."],
    ["What security standard should I ask about?", "Avon and Somerset Police recommends security-accredited replacement windows tested to a recognised standard such as PAS 24:2022."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Bristol?",
    copy: "Describe the openings and property once, then compare interested Bristol window specialists and their product and fitting quotes.",
    buttonLabel: "Get Bristol window quotes",
  },
});
