import { makeMiltonKeynesProfile } from "./miltonKeynesProfileBase";

export const plasterersMiltonKeynes = makeMiltonKeynesProfile("plasterers", {
  heroCopy: "Need skimming, patching, ceiling repairs or rendering in Milton Keynes? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Milton Keynes?",
    copy: "Enter the postcode, say which walls or ceilings need work and describe the existing surface. Mention cracks, staining, damp or loose plaster so suitable Milton Keynes plasterers can judge preparation as well as the final finish.",
  },
  localContext: {
    eyebrow: "Milton Keynes plastering context",
    title: "Damp and mould should be investigated before cosmetic replastering",
    intro: "Milton Keynes City Council's private-renting guidance says damp can damage property and create health risks, while landlords are responsible for keeping rented homes safe and in good repair. Active moisture should be diagnosed before a new skim hides the evidence.",
    items: [
      {
        title: "Persistent damp needs investigation, not just a fresh finish",
        text: "Milton Keynes City Council tells private tenants to report persistent condensation and mould to their landlord and explains that damp can indicate problems involving leaks, ventilation, heating or the building fabric. If plaster is repeatedly stained or blown, identify the cause before paying for cosmetic work.",
        source: {
          label: "Milton Keynes City Council — private tenants",
          url: "https://www.milton-keynes.gov.uk/housing/private-sector-housing/private-tenants",
        },
      },
      {
        title: "Plaster and rubble from paid work are commercial waste",
        text: "Milton Keynes City Council requires business waste to be transferred through authorised arrangements, and its Newport Pagnell trade-waste site charges by material and weight. If old plaster, plasterboard or rubble is removed, agree who disposes of it and whether the cost is included.",
        source: {
          label: "Milton Keynes City Council — commercial and business waste",
          url: "https://www.milton-keynes.gov.uk/waste-and-recycling/commercial-and-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Milton Keynes by postcode and job size. Example areas include:",
    sideTitle: "Show the existing surface clearly",
    sideCopy: "Photos of cracks, loose areas, previous finishes and damp staining help a plasterer decide whether the job needs patching, boarding, bonding or a straightforward skim.",
    noteLead: "A smooth finish needs a sound background.",
    noteText: "Ask what preparation, protection, boarding, beads and waste removal are included rather than comparing only the final skim price.",
  },
  faq: [
    ["How much does plastering cost in Milton Keynes?", "The price depends on surface condition, room size, access and whether boarding or repairs are needed before skimming. Compare quotes for the same preparation and finish."],
    ["Should I plaster over a damp wall?", "Not until the cause is understood. Persistent damp or mould can be linked to leaks, poor ventilation, heating or building-fabric problems."],
    ["Who removes old plaster and rubble?", "Agree this in the quote. Waste created through paid building work must be handled through lawful commercial waste arrangements."],
    ["Can I post a small patch repair?", "Yes. Plasterers can respond to smaller repairs as well as full-room skimming, ceilings and rendering work."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Milton Keynes?",
    copy: "Describe the surfaces and preparation once, then compare interested Milton Keynes plasterers and their quotes.",
    buttonLabel: "Get Milton Keynes plastering quotes",
  },
});

export const kitchenFittersMiltonKeynes = makeMiltonKeynesProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or refurbishment in Milton Keynes? Describe the units, worktops, room and any service changes once, then compare kitchen fitters interested in the job.",
  answer: {
    title: "Looking for a kitchen fitter near you in Milton Keynes?",
    copy: "Enter the postcode and share the kitchen plan, dimensions and product list if you have them. Mention whether walls, plumbing, electrics, gas, flooring or tiling are changing so suitable Milton Keynes fitters can judge the full scope.",
  },
  localContext: {
    eyebrow: "Milton Keynes kitchen-fit planning",
    title: "Cabinet fitting may be only one part of the regulated work",
    intro: "Milton Keynes Building Control separates simple fitting from controlled work involving structure, services, ventilation and drainage. A kitchen project should identify those elements before the units are installed around them.",
    items: [
      {
        title: "Building Regulations can apply to structural and service changes",
        text: "Milton Keynes City Council explains that Building Regulations cover structural stability, fire safety, ventilation, energy conservation and services such as sanitary accommodation and boilers. If walls move or services are substantially altered, establish the compliance route before fitting begins.",
        source: {
          label: "Milton Keynes City Council — building regulations",
          url: "https://www.milton-keynes.gov.uk/planning-and-building/building-control/building-control-advice/building-regulations",
        },
      },
      {
        title: "Old units and renovation debris need proper disposal",
        text: "Milton Keynes City Council says businesses must arrange legal waste disposal and keep duty-of-care documentation. Confirm how old cabinets, worktops, packaging, tiles and demolition debris will be removed rather than assuming all waste is included in the fitting price.",
        source: {
          label: "Milton Keynes City Council — waste collections from business premises",
          url: "https://www.milton-keynes.gov.uk/waste-and-recycling/commercial-and-business-waste/waste-collections-business-premises",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Milton Keynes by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Share the plan and product list before asking for a fixed price",
    sideCopy: "The same number of cabinets can be a very different job if walls move, worktops need specialist fabrication or plumbing, gas and electrics are being relocated.",
    noteLead: "Separate fitting from specialist services.",
    noteText: "Confirm who is responsible for electrical, gas, plumbing, tiling, decorating, worktop templating and waste so gaps do not appear after strip-out.",
  },
  faq: [
    ["How much does kitchen fitting cost in Milton Keynes?", "The cost depends on kitchen size, product type, worktops, preparation and how much plumbing, electrical, gas or structural work is included. Compare the same scope rather than just a fitting figure."],
    ["Can a kitchen project need Building Regulations approval?", "Yes. The cabinets themselves are not usually the issue, but structural changes and certain service alterations can require Building Regulations compliance."],
    ["Who removes the old kitchen?", "Agree this in writing. Strip-out and disposal may be included, priced separately or left to the homeowner, so compare quotes on the same basis."],
    ["Can I post a supply-and-fit job?", "Yes. Explain whether the kitchen is already purchased or whether you want design, supply and fitting included."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Milton Keynes?",
    copy: "Describe the kitchen, products and service changes once, then compare interested Milton Keynes kitchen fitters and their quotes.",
    buttonLabel: "Get Milton Keynes kitchen quotes",
  },
});
