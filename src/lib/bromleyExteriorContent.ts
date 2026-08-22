import { makeBromleyProfile } from "./bromleyProfileBase";

export const drivewaySpecialistsBromley = makeBromleyProfile("driveway-specialists", {
  heroCopy: "Planning block paving, resin, tarmac, gravel or a new parking area in Bromley? Describe the frontage, dimensions and existing surface once, then compare driveway specialists interested in the job.",
  answer: {
    title: "Looking for a driveway specialist near you in Bromley?",
    copy: "Enter the postcode, approximate square metres and preferred finish. Add photos from the road and say whether a legal crossover already exists so suitable Bromley driveway specialists can judge excavation, drainage and access requirements.",
  },
  localContext: {
    eyebrow: "Bromley driveway and crossover rules",
    title: "A private driveway does not by itself give legal vehicle access across the pavement",
    intro: "Bromley controls vehicle crossovers separately from driveway surfacing. The council says it is illegal to drive over the pavement without a properly constructed crossover and that crossovers on its roads can only be built by the council.",
    items: [
      {
        title: "A legal crossover is required to drive across the public footway",
        text: "Bromley says there is no right to drive across a public footway to reach a private forecourt unless a properly built vehicle crossover is in place. If the property does not already have one, treat the crossover application as a separate part of the project.",
        source: {
          label: "London Borough of Bromley — access to your drive: crossovers",
          url: "https://www.bromley.gov.uk/roads-highways-pavements/access-drive-crossovers-dropped-kerbs",
        },
      },
      {
        title: "Planning and highway checks happen before the crossover is approved",
        text: "Bromley's application guide says a proposed crossover must satisfy both planning and highway requirements, and homeowners should not carry out property works connected with the crossover before receiving approval. The hard-standing must be built before the council arrives to construct the approved crossover.",
        source: {
          label: "London Borough of Bromley — crossover application guide",
          url: "https://www.bromley.gov.uk/roads-highways-pavements/access-drive-crossovers-dropped-kerbs/2",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Bromley by postcode, surface and job size. Example areas include:",
    sideTitle: "Measure the frontage and show the pavement as well as the drive",
    sideCopy: "Give width, depth, approximate square metres and photos showing the road, pavement, boundary and any existing crossover. That helps distinguish surfacing work from the separate highway-access process.",
    noteLead: "Do not assume a new drive includes a dropped kerb.",
    noteText: "Bromley constructs approved crossovers itself, so ask the driveway contractor to quote the private hard-standing separately from the council's crossover process.",
  },
  faq: [
    ["How much does a driveway cost in Bromley?", "The price depends on area, excavation, sub-base, drainage, edging and the chosen surface. Compare quotes against the same preparation specification."],
    ["Do I need a dropped kerb to drive onto my property?", "Yes. Bromley says it is illegal to drive over the public pavement without a properly constructed vehicle crossover."],
    ["Can my driveway contractor build the crossover?", "Bromley says crossovers on roads and pavements it controls can only be constructed by the council."],
    ["Does the crossover need planning approval?", "A proposal must satisfy both planning and highway requirements before Bromley will proceed, and some applications require planning permission."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Bromley?",
    copy: "Share the frontage, dimensions and preferred surface once, then compare interested Bromley driveway specialists and their quotes.",
    buttonLabel: "Get Bromley driveway quotes",
  },
});

export const windowSpecialistsBromley = makeBromleyProfile("window-specialists", {
  heroCopy: "Replacing windows, repairing failed double glazing or upgrading sash, bay, timber or uPVC units in Bromley? Describe the property and openings once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Bromley?",
    copy: "Enter the postcode, number and style of windows and whether you need full frames or only failed sealed units replaced. Mention conservation-area, listed-building or Article 4 status if known so suitable Bromley specialists can respond accurately.",
  },
  localContext: {
    eyebrow: "Bromley window, heritage and Building Regulations checks",
    title: "Full-frame replacement has a Building Regulations route, while heritage controls depend on the address",
    intro: "Bromley's Building Control guidance distinguishes full-frame replacement from minor repairs, and the borough has many conservation areas and Article 4 Directions. That makes both the installation route and the property's planning status worth checking before windows are ordered.",
    items: [
      {
        title: "Full-frame replacement normally needs Building Regulations compliance",
        text: "Bromley says replacing the whole fixed frame and opening parts of one or more windows requires Building Regulations approval unless the work is carried out by an installer registered with an appropriate Competent Person Scheme such as FENSA, BSI or CERTASS. Replacing glass or a failed sealed unit is treated differently.",
        source: {
          label: "London Borough of Bromley — replacement windows",
          url: "https://www.bromley.gov.uk/building-control/building-control-regulation-approval/6",
        },
      },
      {
        title: "Conservation and Article 4 controls need an address check before visible changes",
        text: "Bromley lists 47 conservation areas and publishes numerous Article 4 Directions affecting specific streets and estates. For period or character-sensitive properties, check the exact address before committing to a new frame material, opening pattern or other visible change.",
        source: {
          label: "London Borough of Bromley — conservation areas",
          url: "https://www.bromley.gov.uk/conservation/conservation-areas-2",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Bromley by postcode, frame type and project size. Example areas include:",
    sideTitle: "Check property status before ordering non-returnable frames",
    sideCopy: "A modern house in Orpington and a period property in a Bromley conservation area can have different planning and product constraints. Confirm the status and exact opening sizes before manufacturing starts.",
    noteLead: "Repair may avoid unnecessary replacement.",
    noteText: "For fogged sealed units, damaged sashes or local frame repairs, ask whether the problem can be fixed without replacing the complete window.",
  },
  faq: [
    ["How much do replacement windows cost in Bromley?", "The price depends on material, style, size, glazing specification, access and surrounding making good. Compare the same product and installation scope."],
    ["Do replacement windows need Building Regulations approval in Bromley?", "Full-frame replacement generally does, unless an appropriately registered Competent Person Scheme installer self-certifies the work. Minor glass or sealed-unit replacement is treated differently."],
    ["Can conservation rules affect replacement windows?", "Yes. Bromley has 47 conservation areas and many Article 4 Directions, so address-specific planning controls should be checked before visible changes."],
    ["What security standard can I ask about?", "Metropolitan Police guidance recommends considering security-accredited replacement windows and identifies PAS 24:2022 as a good standard."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Bromley?",
    copy: "Describe the openings and property once, then compare interested Bromley window specialists and their product and fitting quotes.",
    buttonLabel: "Get Bromley window quotes",
  },
});
