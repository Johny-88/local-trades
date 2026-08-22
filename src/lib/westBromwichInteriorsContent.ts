import { makeWestBromwichProfile } from "./westBromwichProfileBase";

export const plasterersWestBromwich = makeWestBromwichProfile("plasterers", {
  heroCopy: "Need patching, skimming, boarding or full-room plastering in West Bromwich? Describe the surfaces, damage and finish required once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in West Bromwich?",
    copy: "Enter the postcode, rooms or approximate wall and ceiling areas, existing finish and whether there is cracking, loose plaster, damp staining or previous water damage. Photos help contractors judge preparation before quoting.",
  },
  localContext: {
    eyebrow: "West Bromwich damp and plaster repairs",
    title: "Active moisture should be investigated before damaged plaster is simply covered",
    intro: "Sandwell's current housing guidance distinguishes condensation from leaks, penetrating damp and structural moisture problems. That matters because replastering over an unresolved source can fail again.",
    items: [
      {
        title: "Sandwell advises investigating structural problems and leaks behind damp or mould",
        text: "The council's damp and mould guidance tells residents to report suspected structural defects, leaks or other repair issues so the underlying cause can be resolved rather than treating the visible surface alone.",
        source: {
          label: "Sandwell Council — damp, mould and condensation",
          url: "https://www.sandwell.gov.uk/tenanthandbook/tenant-handbook/condensation-damp-mould",
        },
      },
      {
        title: "Different damp patterns can point to different causes",
        text: "Sandwell's repairs guidance notes that plumbing leaks, rain penetration, faulty bath or shower seals, rising damp and condensation can present differently. Describe when and where staining appears so plaster repairs can follow the right remedial work.",
        source: {
          label: "Sandwell Council — common repairs guidance",
          url: "https://www.sandwell.gov.uk/tenanthandbook/tenant-handbook/step-step-guide-common-repairs",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover West Bromwich by postcode, surface condition and room size. Example areas include:",
    sideTitle: "Describe the substrate and the cause of damage",
    sideCopy: "A ceiling patch in Greets Green, full skim in Charlemont and blown plaster after a leak in Hateley Heath need different preparation. State whether damp or water ingress is still active.",
    noteLead: "A smooth finish does not fix an active moisture source.",
    noteText: "If plaster is failing because of a leak, condensation or penetrating damp, resolve that cause first and ask the plasterer what drying or stabilisation is needed before finishing.",
  },
  faq: [
    ["How much does plastering cost in West Bromwich?", "Room size, ceiling height, substrate condition, preparation, boarding, access and the finish required all affect price."],
    ["Should damp plaster be skimmed immediately?", "Not if moisture is still active. The underlying leak, condensation or structural cause should be identified and resolved first."],
    ["Can condensation cause mould on plaster?", "Yes. Sandwell Council says mould is commonly associated with condensation, although leaks and other damp sources can also be involved."],
    ["Should I send photos of cracks or blown plaster?", "Yes. Wide shots plus close-ups can help a plasterer judge preparation and whether further investigation is needed."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in West Bromwich?",
    copy: "Describe the surfaces, damage and finish once, then compare interested West Bromwich plasterers and their quotes.",
    buttonLabel: "Get West Bromwich plastering quotes",
  },
});

export const kitchenFittersWestBromwich = makeWestBromwichProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen replacement or remodel in West Bromwich? Describe the layout, units, worktops, appliances and any plumbing or electrical changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in West Bromwich?",
    copy: "Enter the postcode, kitchen size, whether the layout changes, who supplies the units and worktops, and what plumbing, electrical, gas, flooring, tiling or structural work is included.",
  },
  localContext: {
    eyebrow: "West Bromwich kitchen alterations",
    title: "Kitchen refits can become Building Regulations projects when services or layout change",
    intro: "Sandwell treats Building Regulations separately from planning permission and notes that approval applies to most building work. More involved kitchen conversions need checking as a whole project.",
    items: [
      {
        title: "Most building projects require Building Regulations approval",
        text: "Sandwell Council says Building Regulations cover safety, health, accessibility and energy efficiency and apply to most building work, with only limited exemptions.",
        source: {
          label: "Sandwell Council — building regulations",
          url: "https://www.sandwell.gov.uk/buildingregs",
        },
      },
      {
        title: "Additional kitchens and waste connections can require approval in HMO conversions",
        text: "Sandwell's HMO standards guide specifically identifies installation of additional kitchen facilities requiring waste connections and layout changes involving walls, doors or windows as work likely to need Building Regulations approval.",
        source: {
          label: "Sandwell Council — HMO standards and amenities guide",
          url: "https://www.sandwell.gov.uk/downloads/file/3179/sandwell-council-standards-and-amenities-guide-for-houses-in-multiple-occupation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover West Bromwich by postcode, layout and project size. Example areas include:",
    sideTitle: "Separate supply from installation in the brief",
    sideCopy: "A like-for-like unit swap in Yew Tree, a full remodel in Great Barr and a kitchen relocation near the town centre have different trade and approval requirements. State exactly what is moving.",
    noteLead: "The cheapest cabinet price is not the whole kitchen price.",
    noteText: "Compare quotes on demolition, disposal, units, worktops, plumbing, electrics, gas, plastering, tiling, flooring, decorating and certification so exclusions are visible.",
  },
  faq: [
    ["How much does a kitchen fitter cost in West Bromwich?", "Cost depends on kitchen size, unit and worktop specification, layout changes, services, preparation and how much finishing work is included."],
    ["Does every kitchen replacement need Building Regulations approval?", "Not necessarily, but structural, service, ventilation or layout changes can bring parts of the project within the regulations."],
    ["Can moving a kitchen create extra approval requirements?", "Yes. New waste connections, altered layouts and other building work can require Building Regulations approval."],
    ["Should I say who supplies the kitchen?", "Yes. Make clear whether you already have units and worktops or want the fitter to supply them."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in West Bromwich?",
    copy: "Describe the kitchen, layout and included trades once, then compare interested West Bromwich kitchen fitters and their quotes.",
    buttonLabel: "Get West Bromwich kitchen quotes",
  },
});
