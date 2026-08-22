import { makeBrightonHoveProfile } from "./brightonHoveProfileBase";

export const plasterersBrightonHove = makeBrightonHoveProfile("plasterers", {
  heroCopy: "Need skimming, patching, ceiling repairs or rendering in Brighton & Hove? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Brighton & Hove?",
    copy: "Enter the postcode, say which walls or ceilings need work and describe the existing surface. Mention cracks, staining, damp or loose plaster so suitable Brighton & Hove plasterers can judge preparation as well as the final finish.",
  },
  localContext: {
    eyebrow: "Brighton & Hove plastering context",
    title: "The underlying defect and the disposal plan matter as much as the final skim",
    intro: "A cosmetic finish should not hide unresolved building problems, while strip-out by a contractor creates construction waste. Brighton & Hove's Building Control and trade-waste guidance are useful checks when plaster failure is part of a wider repair.",
    items: [
      {
        title: "Wider repairs can bring Building Regulations into the project",
        text: "Brighton & Hove City Council provides Building Control routes for regulated construction work. If damaged plaster is linked to structural alterations, major insulation, controlled services or another wider repair, establish the approval route before the final finish hides the work.",
        source: {
          label: "Brighton & Hove City Council — Building Regulations",
          url: "https://www.brighton-hove.gov.uk/planning/building-regulations",
        },
      },
      {
        title: "Removed plaster and rubble are trade waste when produced by paid work",
        text: "The council includes construction and demolition material within business and trade waste. If old plaster, plasterboard or rubble is removed, agree who takes it away and whether the disposal cost is included in the quote.",
        source: {
          label: "Brighton & Hove City Council — how to manage your business waste",
          url: "https://www.brighton-hove.gov.uk/rubbish-recycling-and-streets/business-and-trade-waste/how-manage-your-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Brighton & Hove by postcode and job size. Example areas include:",
    sideTitle: "Show the existing surface clearly",
    sideCopy: "Photos of cracks, loose areas, previous finishes and damp staining help a plasterer decide whether the job needs patching, boarding, bonding or a straightforward skim.",
    noteLead: "A smooth finish needs a sound background.",
    noteText: "Ask what preparation, protection, boarding, beads and waste removal are included rather than comparing only the final skim price.",
  },
  faq: [
    ["How much does plastering cost in Brighton & Hove?", "The price depends on surface condition, room size, access and whether boarding or repairs are needed before skimming. Compare quotes for the same preparation and finish."],
    ["Should I skim over damaged or damp plaster?", "Not until the underlying cause is understood. A new finish can fail again if a leak, moisture problem or defective background has not been resolved."],
    ["Who removes old plaster and rubble?", "Agree this in the quote. Waste created through paid building work must be handled through lawful trade-waste arrangements."],
    ["Can I post a small patch repair?", "Yes. Plasterers can respond to smaller repairs as well as full-room skimming, ceilings and rendering work."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Brighton & Hove?",
    copy: "Describe the surfaces and preparation once, then compare interested Brighton & Hove plasterers and their quotes.",
    buttonLabel: "Get Brighton & Hove plastering quotes",
  },
});

export const kitchenFittersBrightonHove = makeBrightonHoveProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or refurbishment in Brighton & Hove? Describe the units, worktops, room and any service changes once, then compare kitchen fitters interested in the job.",
  answer: {
    title: "Looking for a kitchen fitter near you in Brighton & Hove?",
    copy: "Enter the postcode and share the kitchen plan, dimensions and product list if you have them. Mention whether walls, plumbing, electrics, gas, flooring or tiling are changing so suitable Brighton & Hove fitters can judge the full scope.",
  },
  localContext: {
    eyebrow: "Brighton & Hove kitchen-fit planning",
    title: "Cabinet fitting may be only one part of a regulated refurbishment",
    intro: "Kitchen work can combine structural alterations, plumbing, electrics, gas and ventilation. Brighton & Hove Building Control provides the approval and competent-person routes, while old units and demolition debris produced by a contractor fall under trade-waste rules.",
    items: [
      {
        title: "Structural and service changes can need Building Regulations compliance",
        text: "Brighton & Hove City Council explains the Building Regulations approval routes and competent-person system. If walls move or electrical, gas, drainage or other controlled work is substantially altered, establish who is responsible for compliance and certification before fitting begins.",
        source: {
          label: "Brighton & Hove City Council — check if you need Building Regulations approval",
          url: "https://www.brighton-hove.gov.uk/planning/building-regulations/check-if-you-need-building-regulations-approval",
        },
      },
      {
        title: "Old units and renovation debris need a lawful disposal route",
        text: "The council's trade-waste guidance includes construction and demolition waste. Confirm how old cabinets, worktops, packaging, tiles and other renovation debris will be removed rather than assuming disposal is automatically included in the fitting price.",
        source: {
          label: "Brighton & Hove City Council — how to manage your business waste",
          url: "https://www.brighton-hove.gov.uk/rubbish-recycling-and-streets/business-and-trade-waste/how-manage-your-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Brighton & Hove by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Share the plan and product list before asking for a fixed price",
    sideCopy: "The same number of cabinets can be a very different job if walls move, worktops need specialist fabrication or plumbing, gas and electrics are being relocated.",
    noteLead: "Separate fitting from specialist services.",
    noteText: "Confirm who is responsible for electrical, gas, plumbing, tiling, decorating, worktop templating and waste so gaps do not appear after strip-out.",
  },
  faq: [
    ["How much does kitchen fitting cost in Brighton & Hove?", "The cost depends on kitchen size, product type, worktops, preparation and how much plumbing, electrical, gas or structural work is included. Compare the same scope rather than just a fitting figure."],
    ["Can a kitchen project need Building Regulations approval?", "Yes. Cabinets themselves are not usually the issue, but structural changes and certain service alterations can require Building Regulations compliance."],
    ["Who removes the old kitchen?", "Agree this in writing. Strip-out and disposal may be included, priced separately or left to the homeowner, so compare quotes on the same basis."],
    ["Can I post a supply-and-fit job?", "Yes. Explain whether the kitchen is already purchased or whether you want design, supply and fitting included."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Brighton & Hove?",
    copy: "Describe the kitchen, products and service changes once, then compare interested Brighton & Hove kitchen fitters and their quotes.",
    buttonLabel: "Get Brighton & Hove kitchen quotes",
  },
});
