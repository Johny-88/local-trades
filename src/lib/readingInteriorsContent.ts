import { makeReadingProfile } from "./readingProfileBase";

export const plasterersReading = makeReadingProfile("plasterers", {
  heroCopy: "Need skimming, patching, ceiling repairs or rendering in Reading? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Reading?",
    copy: "Enter the postcode, say which walls or ceilings need work and describe the existing surface. Mention cracks, staining, damp or loose plaster so suitable Reading plasterers can judge preparation as well as the final finish.",
  },
  localContext: {
    eyebrow: "Reading plastering context",
    title: "Damp should be investigated before a cosmetic skim hides the evidence",
    intro: "Reading Borough Council's property-maintenance guidance tells landlords not to ignore damp and mould reports because they can indicate a more serious underlying problem. Fresh plaster should follow diagnosis where moisture is active.",
    items: [
      {
        title: "Investigate damp before replastering",
        text: "Reading's property-maintenance guidance says damp and mould reports should be investigated rather than ignored. If plaster is blown, stained or repeatedly mouldy, identify leaks, condensation or other moisture sources before paying for a purely cosmetic finish.",
        source: {
          label: "Reading Borough Council — property maintenance",
          url: "https://www.reading.gov.uk/housing/private-renting/landlords/click-before-you-evict/property-maintenance/",
        },
      },
      {
        title: "Plaster and rubble from paid work are commercial waste",
        text: "Reading Borough Council's business-waste guidance requires commercial waste to be handled through authorised arrangements. If old plaster, plasterboard or rubble is being removed, agree who disposes of it and whether that cost is included.",
        source: {
          label: "Reading Borough Council — commercial waste advice",
          url: "https://www.reading.gov.uk/waste-and-recycling/commercial-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Reading by postcode and job size. Example areas include:",
    sideTitle: "Show the existing surface clearly",
    sideCopy: "Photos of cracks, loose areas, previous finishes and damp staining help a plasterer decide whether the job needs patching, boarding, bonding or a straightforward skim.",
    noteLead: "A smooth finish needs a sound background.",
    noteText: "Ask what preparation, protection, boarding, beads and waste removal are included rather than comparing only the final skim price.",
  },
  faq: [
    ["How much does plastering cost in Reading?", "The price depends on surface condition, room size, access and whether boarding or repairs are needed before skimming. Compare quotes for the same preparation and finish."],
    ["Should I plaster over a damp wall?", "Not until the cause is understood. Reading Borough Council advises investigating damp and mould because it may indicate a more serious property problem."],
    ["Who removes old plaster and rubble?", "Agree this in the quote. Waste created through paid building work must be handled through lawful commercial waste arrangements."],
    ["Can I post a small patch repair?", "Yes. Plasterers can respond to smaller repairs as well as full-room skimming, ceilings and rendering work."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Reading?",
    copy: "Describe the surfaces and preparation once, then compare interested Reading plasterers and their quotes.",
    buttonLabel: "Get Reading plastering quotes",
  },
});

export const kitchenFittersReading = makeReadingProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or refurbishment in Reading? Describe the units, worktops, room and any service changes once, then compare kitchen fitters interested in the job.",
  answer: {
    title: "Looking for a kitchen fitter near you in Reading?",
    copy: "Enter the postcode and share the kitchen plan, dimensions and product list if you have them. Mention whether walls, plumbing, electrics, gas, flooring or tiling are changing so suitable Reading fitters can judge the full scope.",
  },
  localContext: {
    eyebrow: "Reading kitchen-fit planning",
    title: "The cabinet installation may be only one part of the regulated work",
    intro: "Reading's building-control guidance distinguishes Building Regulations from planning permission and explains that many alterations need building-control approval. Kitchen projects involving structure, drainage, electrics or gas should be scoped as more than cabinet fitting.",
    items: [
      {
        title: "Structural and service changes can bring Building Regulations into the project",
        text: "Reading Borough Council says Building Regulations apply to construction and alterations and that many building works need building-control approval even when planning permission is not required. If walls move or services are substantially altered, establish the approval route before units are ordered.",
        source: {
          label: "Reading Borough Council — about building control",
          url: "https://www.reading.gov.uk/planning-and-building-control/building-control/about-building-control/",
        },
      },
      {
        title: "Old units and renovation debris need proper disposal",
        text: "Reading's trade-waste service does not treat construction materials such as rubble, ceramics, plaster, window glass, UPVC and wood as ordinary general business-bin waste. Confirm how old cabinets, worktops, packaging and demolition debris will be removed.",
        source: {
          label: "Reading Borough Council — trade and business waste",
          url: "https://www.reading.gov.uk/waste-and-recycling/bulky-business-and-clinical-waste/business-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Reading by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Share the plan and product list before asking for a fixed price",
    sideCopy: "The same number of cabinets can be a very different job if walls move, worktops need specialist fabrication or plumbing, gas and electrics are being relocated.",
    noteLead: "Separate fitting from specialist services.",
    noteText: "Confirm who is responsible for electrical, gas, plumbing, tiling, decorating, worktop templating and waste so gaps do not appear after strip-out.",
  },
  faq: [
    ["How much does kitchen fitting cost in Reading?", "The cost depends on kitchen size, product type, worktops, preparation and how much plumbing, electrical, gas or structural work is included. Compare the same scope rather than just a fitting figure."],
    ["Can a kitchen project need Building Regulations approval?", "Yes. The cabinets themselves are not the main issue, but structural changes and certain service alterations can require Building Regulations compliance."],
    ["Who removes the old kitchen?", "Agree this in writing. Strip-out and disposal may be included, priced separately or left to the homeowner, so compare quotes on the same basis."],
    ["Can I post a supply-and-fit job?", "Yes. Explain whether the kitchen is already purchased or whether you want design, supply and fitting included."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Reading?",
    copy: "Describe the kitchen, products and service changes once, then compare interested Reading kitchen fitters and their quotes.",
    buttonLabel: "Get Reading kitchen quotes",
  },
});
