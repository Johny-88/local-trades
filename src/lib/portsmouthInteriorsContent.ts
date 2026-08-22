import { makePortsmouthProfile } from "./portsmouthProfileBase";

export const plasterersPortsmouth = makePortsmouthProfile("plasterers", {
  heroCopy: "Need skimming, patching, ceiling repairs or rendering in Portsmouth? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Portsmouth?",
    copy: "Enter the postcode, say which walls or ceilings need work and describe the existing surface. Mention cracks, staining, damp or loose plaster so suitable Portsmouth plasterers can judge preparation as well as the final finish.",
  },
  localContext: {
    eyebrow: "Portsmouth plastering context",
    title: "Damp and the underlying construction should be dealt with before a cosmetic skim hides the evidence",
    intro: "Portsmouth Building Control explicitly includes damp-proofing among the matters covered by Building Regulations, while demolition waste from paid work falls under business-waste rules. Both can matter when plaster failure is more than cosmetic.",
    items: [
      {
        title: "Building Regulations cover damp-proofing and construction standards",
        text: "Portsmouth City Council says Building Regulations cover foundations, damp-proofing, stability, insulation, ventilation and other aspects of construction. If plaster is repeatedly blown, stained or damaged, investigate the cause rather than simply applying a new finish over an unresolved building defect.",
        source: {
          label: "Portsmouth City Council — building regulations",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/buildings/help-and-advice-on-building-regulations/",
        },
      },
      {
        title: "Plaster and rubble from paid work need a commercial waste route",
        text: "Portsmouth City Council requires businesses to use registered waste carriers and appropriate disposal arrangements. If old plaster, plasterboard or rubble is being removed, agree who takes it away and whether disposal is included in the quote.",
        source: {
          label: "Portsmouth City Council — business waste",
          url: "https://www.portsmouth.gov.uk/services/recycling-and-rubbish/guide-to-waste-in-portsmouth/business-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Portsmouth by postcode and job size. Example areas include:",
    sideTitle: "Show the existing surface clearly",
    sideCopy: "Photos of cracks, loose areas, previous finishes and damp staining help a plasterer decide whether the job needs patching, boarding, bonding or a straightforward skim.",
    noteLead: "A smooth finish needs a sound background.",
    noteText: "Ask what preparation, protection, boarding, beads and waste removal are included rather than comparing only the final skim price.",
  },
  faq: [
    ["How much does plastering cost in Portsmouth?", "The price depends on surface condition, room size, access and whether boarding or repairs are needed before skimming. Compare quotes for the same preparation and finish."],
    ["Should I plaster over a damp wall?", "Not until the cause is understood. Damp can indicate a problem with moisture entry, ventilation or the building fabric that should be resolved first."],
    ["Who removes old plaster and rubble?", "Agree this in the quote. Waste created through paid building work must be handled through lawful commercial waste arrangements."],
    ["Can I post a small patch repair?", "Yes. Plasterers can respond to smaller repairs as well as full-room skimming, ceilings and rendering work."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Portsmouth?",
    copy: "Describe the surfaces and preparation once, then compare interested Portsmouth plasterers and their quotes.",
    buttonLabel: "Get Portsmouth plastering quotes",
  },
});

export const kitchenFittersPortsmouth = makePortsmouthProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or refurbishment in Portsmouth? Describe the units, worktops, room and any service changes once, then compare kitchen fitters interested in the job.",
  answer: {
    title: "Looking for a kitchen fitter near you in Portsmouth?",
    copy: "Enter the postcode and share the kitchen plan, dimensions and product list if you have them. Mention whether walls, plumbing, electrics, gas, flooring or tiling are changing so suitable Portsmouth fitters can judge the full scope.",
  },
  localContext: {
    eyebrow: "Portsmouth kitchen-fit planning",
    title: "Cabinet fitting can be only one part of the controlled work in a full kitchen refurbishment",
    intro: "Portsmouth Building Control covers structural stability, ventilation, heating, electrical safety and other regulated construction. The waste from stripping an old kitchen also needs a lawful business disposal route when a contractor removes it.",
    items: [
      {
        title: "Structural and service changes can bring Building Regulations into the job",
        text: "Portsmouth City Council says Building Regulations apply to many home alterations and cover structure, ventilation, heating, fire protection and electrical safety. If walls move or services are substantially altered, establish the compliance route before cabinets are fitted around the work.",
        source: {
          label: "Portsmouth City Council — building regulations",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/buildings/help-and-advice-on-building-regulations/",
        },
      },
      {
        title: "Old units and renovation debris need proper disposal",
        text: "Portsmouth's business-waste guidance requires commercial waste to be sorted, stored safely and transferred to registered carriers. Confirm how old cabinets, worktops, packaging, tiles and demolition debris will be removed rather than assuming all waste is included in the fitting price.",
        source: {
          label: "Portsmouth City Council — business waste",
          url: "https://www.portsmouth.gov.uk/services/recycling-and-rubbish/guide-to-waste-in-portsmouth/business-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Portsmouth by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Share the plan and product list before asking for a fixed price",
    sideCopy: "The same number of cabinets can be a very different job if walls move, worktops need specialist fabrication or plumbing, gas and electrics are being relocated.",
    noteLead: "Separate fitting from specialist services.",
    noteText: "Confirm who is responsible for electrical, gas, plumbing, tiling, decorating, worktop templating and waste so gaps do not appear after strip-out.",
  },
  faq: [
    ["How much does kitchen fitting cost in Portsmouth?", "The cost depends on kitchen size, product type, worktops, preparation and how much plumbing, electrical, gas or structural work is included. Compare the same scope rather than just a fitting figure."],
    ["Can a kitchen project need Building Regulations approval?", "Yes. The cabinets themselves are not usually the issue, but structural changes and certain service alterations can require Building Regulations compliance."],
    ["Who removes the old kitchen?", "Agree this in writing. Strip-out and disposal may be included, priced separately or left to the homeowner, so compare quotes on the same basis."],
    ["Can I post a supply-and-fit job?", "Yes. Explain whether the kitchen is already purchased or whether you want design, supply and fitting included."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Portsmouth?",
    copy: "Describe the kitchen, products and service changes once, then compare interested Portsmouth kitchen fitters and their quotes.",
    buttonLabel: "Get Portsmouth kitchen quotes",
  },
});
