import { makeBromleyProfile } from "./bromleyProfileBase";

export const plasterersBromley = makeBromleyProfile("plasterers", {
  heroCopy: "Need skimming, patching, ceiling repairs or rendering in Bromley? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Bromley?",
    copy: "Enter the postcode, say which walls or ceilings need work and describe the existing surface. Mention cracks, staining, damp or loose plaster so suitable Bromley plasterers can judge preparation as well as the final finish.",
  },
  localContext: {
    eyebrow: "Bromley plastering and damp context",
    title: "Damp should be dealt with before fresh plaster hides the evidence",
    intro: "Bromley's housing guidance explains that damp can cause mould, damage timber and affect health, and recommends reducing moisture through ventilation, heating and insulation. Where plaster is repeatedly stained or failing, diagnosis matters before cosmetic work.",
    items: [
      {
        title: "Recurring damp needs more than a cosmetic skim",
        text: "Bromley says damp may be linked to condensation and advises improving ventilation, reducing moisture and addressing heating or insulation issues. If plaster is blown, stained or repeatedly mouldy, describe those symptoms so the underlying cause can be investigated before refinishing.",
        source: {
          label: "London Borough of Bromley — damp, mould and condensation",
          url: "https://www.bromley.gov.uk/environmental-health/disrepair-rented-accommodation/6",
        },
      },
      {
        title: "Rented-property disrepair can trigger formal housing action",
        text: "Bromley uses the Housing Health and Safety Rating System when investigating serious disrepair hazards in rented homes. A plastering quote should therefore distinguish routine decorating from work needed after a leak, structural defect or persistent moisture problem.",
        source: {
          label: "London Borough of Bromley — help with disrepair",
          url: "https://www.bromley.gov.uk/environmental-health/disrepair-rented-accommodation/9",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Bromley by postcode and job size. Example areas include:",
    sideTitle: "Show the existing surface clearly",
    sideCopy: "Photos of cracks, loose areas, previous finishes and damp staining help a plasterer decide whether the job needs patching, boarding, bonding or a straightforward skim.",
    noteLead: "A smooth finish needs a sound background.",
    noteText: "Ask what preparation, protection, boarding, beads and making good are included rather than comparing only the final skim price.",
  },
  faq: [
    ["How much does plastering cost in Bromley?", "The price depends on surface condition, room size, access and whether boarding or repairs are needed before skimming. Compare quotes for the same preparation and finish."],
    ["Should I plaster over a damp wall?", "Not until the cause is understood. Bromley's guidance explains that damp and mould can indicate ventilation, moisture, heating or other property problems."],
    ["Can rented-property disrepair involve council enforcement?", "Yes. Bromley says serious hazards may be assessed under the Housing Health and Safety Rating System and can lead to enforcement action."],
    ["Can I post a small patch repair?", "Yes. Plasterers can respond to smaller repairs as well as full-room skimming, ceilings and rendering work."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Bromley?",
    copy: "Describe the surfaces and preparation once, then compare interested Bromley plasterers and their quotes.",
    buttonLabel: "Get Bromley plastering quotes",
  },
});

export const kitchenFittersBromley = makeBromleyProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or refurbishment in Bromley? Describe the units, worktops, room and any service changes once, then compare kitchen fitters interested in the job.",
  answer: {
    title: "Looking for a kitchen fitter near you in Bromley?",
    copy: "Enter the postcode and share the kitchen plan, dimensions and product list if you have them. Mention whether walls, plumbing, electrics, gas, flooring or tiling are changing so suitable Bromley fitters can judge the full scope.",
  },
  localContext: {
    eyebrow: "Bromley kitchen-refit context",
    title: "Kitchen projects can combine Building Regulations work with local HMO amenity standards",
    intro: "Bromley's Building Control guidance covers alterations, drains, electrical work and other regulated elements, while its HMO standards specify kitchen provision for shared rented homes. The property type and service changes therefore matter before a fitting quote is treated as complete.",
    items: [
      {
        title: "Structural, drainage and electrical changes can bring Building Regulations into the project",
        text: "Bromley says Building Regulations can apply to alterations, drains and other fittings, and its Building Notice examples include domestic internal alterations and drainage work. If walls or services are moving, establish who is responsible for compliance before units are ordered.",
        source: {
          label: "London Borough of Bromley — building regulations guide",
          url: "https://www.bromley.gov.uk/building-control/building-regulations-guide",
        },
      },
      {
        title: "Shared rented homes have local kitchen standards",
        text: "Bromley's adopted HMO standards cover the number and size of kitchens and other shared amenities. For a kitchen project in an HMO, tell the fitter how many occupiers and shared facilities are involved so the design can be checked against the relevant landlord requirements.",
        source: {
          label: "London Borough of Bromley — HMO advice for landlords",
          url: "https://www.bromley.gov.uk/housing-advice-options/houses-multiple-occupation-hmo-advice-landlords",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Bromley by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Share the plan and product list before asking for a fixed price",
    sideCopy: "The same number of cabinets can be a very different job if walls move, worktops need specialist fabrication or plumbing, gas and electrics are being relocated.",
    noteLead: "Separate fitting from specialist services.",
    noteText: "Confirm who is responsible for electrical, gas, plumbing, tiling, decorating, worktop templating and making good so gaps do not appear after strip-out.",
  },
  faq: [
    ["How much does kitchen fitting cost in Bromley?", "The cost depends on kitchen size, product type, worktops, preparation and how much plumbing, electrical, gas or structural work is included."],
    ["Can a kitchen project need Building Regulations approval?", "Yes. Structural changes and certain drainage or electrical works can require Building Regulations compliance even when the cabinets themselves do not."],
    ["Do Bromley HMOs have kitchen standards?", "Yes. Bromley's adopted HMO standards include requirements for the number and size of kitchens and other amenities."],
    ["Can I post a supply-and-fit job?", "Yes. Explain whether the kitchen is already purchased or whether you want design, supply and fitting included."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Bromley?",
    copy: "Describe the kitchen, products and service changes once, then compare interested Bromley kitchen fitters and their quotes.",
    buttonLabel: "Get Bromley kitchen quotes",
  },
});
