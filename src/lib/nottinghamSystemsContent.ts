import { makeNottinghamProfile } from "./nottinghamProfileBase";

export const tilersNottingham = makeNottinghamProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Nottingham? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Nottingham?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Nottingham tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Nottingham tiling and refurbishment context",
    title: "Tiling itself may be finish work, but the wider bathroom or kitchen project can fall under Building Regulations",
    intro: "Nottingham Building Control says regulated building work includes alterations and controlled services or fittings such as sanitary facilities, drainage, replacement windows and fuel-burning appliances. That means a tiling job inside a wider refurbishment should be scoped alongside the regulated work rather than treated in isolation.",
    items: [
      {
        title: "Check the wider room alteration before covering services and backgrounds",
        text: "Nottingham City Council explains that alterations affecting structure, fire safety, controlled services or fittings can require Building Regulations approval. If tiling forms part of a new bathroom, kitchen reconfiguration, drainage change or electrical alteration, establish who is responsible for the compliance route before walls and floors are closed up.",
        source: {
          label: "Nottingham City Council — check approval needed for building work",
          url: "https://www.nottinghamcity.gov.uk/buildingwork",
        },
      },
      {
        title: "Competent-person schemes can change how related work is certified",
        text: "The council notes that some work, including certain electrical work, gas installations and replacement windows, can be self-certified by registered competent persons. If a tiling project is part of a larger multi-trade refurbishment, ask which contractor is certifying each regulated element rather than assuming the tiler covers everything.",
        source: {
          label: "Nottingham City Council — competent person schemes",
          url: "https://www.nottinghamcity.gov.uk/information-for-business/planning-and-building-control/building-control-service/check-the-approval-you-need-for-building-work/registered-trades-person-competent-persons-scheme/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Nottingham by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the substrate before asking for a fixed price",
    sideCopy: "Large-format porcelain on a prepared wall is a different job from cracked floors, old adhesive, tanking or uneven backgrounds. Photos help expose preparation before quoting.",
    noteLead: "Preparation can cost as much as the finish.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and removal of old finishes are included rather than comparing only a laying rate.",
  },
  faq: [
    ["How much does tiling cost in Nottingham?", "The price depends on tile material and size, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the regulated issue, but a wider bathroom or kitchen project can include controlled drainage, electrical, ventilation or structural work."],
    ["Can a tiler self-certify electrical or gas work?", "Only if the person carrying out that regulated work belongs to the relevant competent-person scheme. Check who is responsible for each part of a multi-trade project."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted alongside complete bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Nottingham?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Nottingham tilers and their quotes.",
    buttonLabel: "Get Nottingham tiling quotes",
  },
});

export const heatingEngineersNottingham = makeNottinghamProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or solid-fuel work in Nottingham? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Nottingham?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Nottingham heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Nottingham heating and clean-air context",
    title: "The whole Nottingham City Council area is covered by Smoke Control Orders",
    intro: "Gas and heating work can fall within Building Regulations or competent-person certification, while Nottingham's citywide smoke-control rules matter for wood burners and other solid-fuel appliances.",
    items: [
      {
        title: "Solid-fuel appliances must respect Nottingham's citywide smoke-control rules",
        text: "Nottingham City Council says Smoke Control Orders cover the entire city area. In practice, ordinary wood and unauthorised fuels cannot simply be burned in a standard appliance; the appliance and fuel must meet the relevant exemption or authorised-fuel requirements. Confirm this before buying or installing a stove.",
        source: {
          label: "Nottingham City Council — smoke control areas and wood-burning stoves",
          url: "https://nottinghamcity.gov.uk/information-for-residents/community/environmental-health-and-public-protection/pollution-and-nuisances/air-pollution-and-air-quality/smoke-control-areas-and-wood-burning-stoves/",
        },
      },
      {
        title: "Heating appliances are also controlled building services",
        text: "The council's Building Regulations guidance lists fuel-burning appliances and controlled services among work that must comply with the regulations. For gas or other notifiable work, ask the engineer what competent-person notification or Building Control route applies and what completion evidence you will receive.",
        source: {
          label: "Nottingham City Council — check approval needed for building work",
          url: "https://www.nottinghamcity.gov.uk/buildingwork",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Nottingham by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact appliance and fuel",
    sideCopy: "A boiler fault, radiator move, full central-heating replacement and wood-burning stove installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "Match the engineer to the work.",
    noteText: "Ask for the registration or competence relevant to the actual appliance and confirm what certification or notification will be provided on completion.",
  },
  faq: [
    ["How much does a heating engineer cost in Nottingham?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Is Nottingham a smoke-control area?", "Yes. Nottingham City Council says Smoke Control Orders cover the whole city area, so solid-fuel appliances and fuels must comply with those rules."],
    ["Will heating work need Building Regulations paperwork?", "Some heating work is notifiable or can be self-certified through an appropriate competent-person scheme. Ask the installer what applies to the specific appliance and fuel."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Nottingham?",
    copy: "Describe the system, fault or upgrade once, then compare interested Nottingham heating engineers and their quotes.",
    buttonLabel: "Get Nottingham heating quotes",
  },
});
