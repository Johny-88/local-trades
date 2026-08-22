import { makeWestBromwichProfile } from "./westBromwichProfileBase";

export const bathroomSpecialistsWestBromwich = makeWestBromwichProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom replacement or remodel in West Bromwich? Describe the room, fittings, layout and finish once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in West Bromwich?",
    copy: "Enter the postcode, room size, current and proposed layout, sanitaryware, shower or bath type, tiling and whether plumbing, electrics, ventilation, plastering or structural changes are included.",
  },
  localContext: {
    eyebrow: "West Bromwich bathroom alterations",
    title: "New bathroom facilities and waste connections can bring Building Regulations into the project",
    intro: "A like-for-like replacement is different from creating or relocating bathroom facilities. Sandwell's guidance makes that distinction important when comparing the full scope.",
    items: [
      {
        title: "Building Regulations are separate from planning permission",
        text: "Sandwell Council says Building Regulations apply to most building work and exist to ensure adequate standards of health, safety, accessibility and energy performance.",
        source: {
          label: "Sandwell Council — building regulations",
          url: "https://www.sandwell.gov.uk/buildingregs",
        },
      },
      {
        title: "Additional bathroom facilities with waste connections can require approval",
        text: "Sandwell's HMO standards guidance specifically identifies additional bathroom facilities needing waste connections, along with layout changes involving walls, doors or windows, as conversion work likely to require Building Regulations approval.",
        source: {
          label: "Sandwell Council — HMO standards and amenities guide",
          url: "https://www.sandwell.gov.uk/downloads/file/3179/sandwell-council-standards-and-amenities-guide-for-houses-in-multiple-occupation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover West Bromwich by postcode, room type and project size. Example areas include:",
    sideTitle: "Say whether the layout is staying or moving",
    sideCopy: "A like-for-like suite in Newton, a walk-in shower in Charlemont and a relocated bathroom near Greets Green can need very different plumbing, drainage and approval work. Give the proposed layout before comparing quotes.",
    noteLead: "Waterproofing, ventilation and waste routes matter as much as the visible fittings.",
    noteText: "Ask each specialist to price removal, plumbing, electrics, extraction, boarding, waterproofing, tiling, flooring, decorating and certification on the same basis.",
  },
  faq: [
    ["How much does a bathroom remodel cost in West Bromwich?", "Room size, sanitaryware, layout changes, plumbing, electrics, tiling, waterproofing and preparation all affect the quote."],
    ["Does a like-for-like bathroom replacement always need Building Regulations approval?", "Not necessarily, but new facilities, altered waste connections, structural changes and some electrical or ventilation work can require approval or certification."],
    ["Can adding another bathroom require Building Regulations approval?", "Yes. Sandwell's HMO guidance specifically notes additional bathroom facilities with waste connections as work likely to require approval."],
    ["Should I provide a proposed bathroom layout?", "Yes. It helps specialists price drainage routes, pipework, electrics, ventilation and tiling consistently."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in West Bromwich?",
    copy: "Describe the bathroom, layout and finish once, then compare interested West Bromwich bathroom specialists and their quotes.",
    buttonLabel: "Get West Bromwich bathroom quotes",
  },
});

export const drainageSpecialistsWestBromwich = makeWestBromwichProfile("drainage-specialists", {
  heroCopy: "Dealing with a blocked drain, recurring smell, slow waste, flooding or drainage fault in West Bromwich? Describe the symptoms and affected areas once, then compare drainage specialists who cover your postcode.",
  answer: {
    title: "Looking for a drainage specialist near you in West Bromwich?",
    copy: "Enter the postcode, whether the problem is inside or outside, which fixtures or drains are affected, whether sewage is involved and whether the issue is recurring. Mention any shared drains or recent flooding.",
  },
  localContext: {
    eyebrow: "West Bromwich drainage responsibilities",
    title: "Road gullies, private drains and public sewers have different responsible bodies",
    intro: "Sandwell Council distinguishes highway gullies from other drains and sewers, so identifying where the blockage sits can prevent the homeowner paying the wrong contractor for the wrong asset.",
    items: [
      {
        title: "Sandwell Council handles blocked road gullies",
        text: "The council says the gutter drains visible at the roadside can be reported to Sandwell. If the issue is another type of drain, a burst water main or a sewer, residents are directed to Severn Trent instead.",
        source: {
          label: "Sandwell Council — report a blocked drain",
          url: "https://www.sandwell.gov.uk/drains",
        },
      },
      {
        title: "Shared drains and sewer problems may fall to Severn Trent",
        text: "Sandwell's environmental enforcement guidance says private domestic drainage can require owner action, while drains serving more than one property should be referred to Severn Trent. The council also directs sewage incidents to Severn Trent.",
        source: {
          label: "Sandwell Council — environmental enforcement and drainage",
          url: "https://www.sandwell.gov.uk/environmental-health/support-environmental-enforcement-rapid-response-team",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover West Bromwich by postcode, symptom and urgency. Example areas include:",
    sideTitle: "Work out whether the fault is private, shared or in the highway",
    sideCopy: "A blocked kitchen waste in Lyng, a shared external drain in Hateley Heath and standing water at a road gully near the town centre may belong to different systems. State exactly where the problem appears.",
    noteLead: "Recurring blockages usually need diagnosis, not just another quick clearance.",
    noteText: "Ask whether the quote includes CCTV inspection, jetting, excavation, repair, root cutting or a written report, and identify ownership before authorising major work.",
  },
  faq: [
    ["How much does drainage work cost in West Bromwich?", "It depends on blockage location, access, CCTV or jetting needs, excavation, repairs and whether the problem is private or shared."],
    ["Who handles blocked road gullies in Sandwell?", "Sandwell Council handles the roadside gullies visible in the gutter and provides an online reporting route."],
    ["Who should I contact for a sewer problem?", "Sandwell Council directs sewer and sewage problems to Severn Trent."],
    ["What if a drain serves more than one property?", "Sandwell's guidance says drains serving more than one property should be referred to Severn Trent, although exact responsibility should be confirmed for the specific layout."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in West Bromwich?",
    copy: "Describe the drainage problem, affected points and access once, then compare interested West Bromwich drainage specialists and their quotes.",
    buttonLabel: "Get West Bromwich drainage quotes",
  },
});
