import { makeCardiffProfile } from "./cardiffProfileBase";

export const tilersCardiff = makeCardiffProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Cardiff? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Cardiff?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Cardiff tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Cardiff tiling and refurbishment context",
    title: "The tile finish may be simple, but the wider room alteration can fall under Welsh Building Regulations",
    intro: "Cardiff Building Control explains that regulated work includes material alterations and changes to controlled services or fittings. A tiling job inside a bathroom or kitchen refurbishment should therefore be scoped alongside any regulated plumbing, drainage, electrical or structural work.",
    items: [
      {
        title: "Check the wider room alteration before surfaces are closed up",
        text: "Cardiff Council says Building Regulations approval can be required when a building is materially altered or a controlled service or fitting is extended or altered, including installing a WC. If tiling is part of a bathroom, kitchen or utility-room project, establish who is responsible for the regulated elements before finishes cover them.",
        source: {
          label: "Cardiff Council — when Building Regulations approval is needed",
          url: "https://www.cardiff.gov.uk/doineedbuildingregapproval",
        },
      },
      {
        title: "Planning permission and Building Regulations are separate approvals",
        text: "Cardiff Council emphasises that planning permission and Building Regulations approval are different. A refurbishment can require one, both or neither depending on the work. For multi-trade tiling projects, ask who has checked each route rather than assuming one approval covers everything.",
        source: {
          label: "Cardiff Council — what Building Regulations are",
          url: "https://www.cardiff.gov.uk/whatarebuildingregulations",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Cardiff by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the substrate before asking for a fixed price",
    sideCopy: "Large-format porcelain on a prepared wall is a different job from cracked floors, old adhesive, tanking or uneven backgrounds. Photos help expose preparation before quoting.",
    noteLead: "Preparation can cost as much as the finish.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and removal of old finishes are included rather than comparing only a laying rate.",
  },
  faq: [
    ["How much does tiling cost in Cardiff?", "The price depends on tile material and size, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the regulated issue, but a wider bathroom or kitchen project can include controlled drainage, electrical, ventilation or structural work."],
    ["Is planning permission the same as Building Regulations approval?", "No. Cardiff Council treats them as separate systems and some projects can need both."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted alongside complete bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Cardiff?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Cardiff tilers and their quotes.",
    buttonLabel: "Get Cardiff tiling quotes",
  },
});

export const heatingEngineersCardiff = makeCardiffProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or solid-fuel work in Cardiff? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Cardiff?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Cardiff heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Cardiff heating and clean-air context",
    title: "Cardiff currently has no smoke-control areas, but heating work still has compliance requirements",
    intro: "Cardiff differs from many English cities: the council's 2025 air-quality progress report states that there are no smoke-control areas in Cardiff. That does not remove Building Regulations, appliance-safety or statutory nuisance responsibilities.",
    items: [
      {
        title: "Cardiff's 2025 air-quality report confirms no smoke-control areas",
        text: "Shared Regulatory Services, reporting for Cardiff Council, states that Cardiff has no smoke-control areas and therefore no smoke-control-area appliance restriction. It still reminds residents about statutory smoke nuisance and recommends cleaner appliance choices. Check the current position before a solid-fuel installation because air-quality rules can change over time.",
        source: {
          label: "Shared Regulatory Services — Cardiff 2025 Air Quality Progress Report",
          url: "https://www.srs.wales/Documents/Air-Quality/Cardiff/Cardiff-2025-APR.pdf",
        },
      },
      {
        title: "Heat-producing appliances can fall within Building Regulations",
        text: "Cardiff Council's Building Control charges and guidance cover controlled services and fittings and specifically refer to solid or dual-fuel heat-producing appliances. Ask the installer what notification, competent-person certification or Building Control route applies to the actual appliance and fuel.",
        source: {
          label: "Cardiff Council — Building Regulations guidance and charges",
          url: "https://www.cardiff.gov.uk/whatarebuildingregulations",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Cardiff by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact appliance and fuel",
    sideCopy: "A boiler fault, radiator move, full central-heating replacement and wood-burning stove installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "No smoke-control area does not mean no rules.",
    noteText: "Ask for the registration or competence relevant to the actual appliance and confirm what certification or Building Control evidence will be provided on completion.",
  },
  faq: [
    ["How much does a heating engineer cost in Cardiff?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Is Cardiff a smoke-control area?", "Cardiff's 2025 Air Quality Progress Report states that there are no smoke-control areas in Cardiff."],
    ["Will heating work need Building Regulations paperwork?", "Some heating work is notifiable or can be self-certified through an appropriate competent-person scheme. Ask the installer what applies to the specific appliance and fuel."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Cardiff?",
    copy: "Describe the system, fault or upgrade once, then compare interested Cardiff heating engineers and their quotes.",
    buttonLabel: "Get Cardiff heating quotes",
  },
});
