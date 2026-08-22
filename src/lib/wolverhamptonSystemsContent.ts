import { makeWolverhamptonProfile } from "./wolverhamptonProfileBase";

export const tilersWolverhampton = makeWolverhamptonProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Wolverhampton? Describe the room, surfaces, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Wolverhampton?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old finishes, tanking, underfloor heating or damaged backgrounds so suitable Wolverhampton tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Wolverhampton tiling and refurbishment context",
    title: "The tile finish may be simple, but the wider bathroom or kitchen work can be regulated",
    intro: "Wolverhampton Building Control lists structural stability, fire precautions, ventilation, sanitary appliances, drainage and electrical safety among the areas covered by Building Regulations. A tiling job inside a wider room alteration should therefore be scoped alongside the regulated work.",
    items: [
      {
        title: "Check the wider alteration before closing walls and floors",
        text: "The council explains that building work may require Building Regulations approval even when planning permission is not needed. If tiling forms part of a new bathroom, kitchen reconfiguration, drainage alteration or electrical change, establish who is responsible for approvals and inspections before backgrounds are covered.",
        source: {
          label: "City of Wolverhampton Council — about Building Regulations",
          url: "https://www.wolverhampton.gov.uk/planning/building-regulations/about-building-regulations",
        },
      },
      {
        title: "Current Wolverhampton charges explicitly cover bathroom and shower alterations",
        text: "The council's current domestic-alteration schedule includes work to create a WC, bathroom or shower room and separately covers internal alterations and non-competent-person electrical work. That is a useful reminder to separate ordinary tiling from the wider controlled work around it.",
        source: {
          label: "City of Wolverhampton Council — Building Regulation charges",
          url: "https://www.wolverhampton.gov.uk/sites/default/files/2025-11/fee-charges-from-1st-December-2025.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Wolverhampton by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the substrate before asking for a fixed price",
    sideCopy: "Large-format porcelain on a prepared wall is a different job from cracked floors, old adhesive, tanking or uneven backgrounds. Photos help expose preparation before quoting.",
    noteLead: "Preparation can dominate the cost.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and removal of old finishes are included rather than comparing only a laying rate.",
  },
  faq: [
    ["How much does tiling cost in Wolverhampton?", "The price depends on tile material and size, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the regulated issue, but a wider bathroom or kitchen project can include controlled drainage, electrical, ventilation or structural work."],
    ["Can this page be used for a bathroom tiling job?", "Yes. Include whether the job also needs tanking, boarding, plumbing changes or removal of old finishes."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted alongside complete bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Wolverhampton?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Wolverhampton tilers and their quotes.",
    buttonLabel: "Get Wolverhampton tiling quotes",
  },
});

export const heatingEngineersWolverhampton = makeWolverhamptonProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or solid-fuel work in Wolverhampton? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Wolverhampton?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Wolverhampton heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Wolverhampton heating and clean-air context",
    title: "Heating work can trigger Building Regulations, while solid-fuel jobs also need smoke-control checks",
    intro: "Wolverhampton's Building Control guidance specifically covers heating appliances and safe flue discharge. The council also publishes current smoke-control guidance for open fires and stoves, so solid-fuel work needs both appliance competence and clean-air checks.",
    items: [
      {
        title: "Heating appliances are within Wolverhampton's Building Regulations framework",
        text: "The council lists heating appliances, including safe discharge of flue gases, among the principal areas controlled by Building Regulations. Ask the engineer what notification, competent-person route or Building Control evidence applies to the specific installation.",
        source: {
          label: "City of Wolverhampton Council — about Building Regulations",
          url: "https://www.wolverhampton.gov.uk/planning/building-regulations/about-building-regulations",
        },
      },
      {
        title: "The council maintains specific smoke-control guidance for fires and stoves",
        text: "Wolverhampton's air-pollution page points residents to current Smoke Control Area rules and guidance for open fires and wood-burning stoves. Before specifying a solid-fuel appliance, check whether the address is affected and whether the intended appliance and fuel comply.",
        source: {
          label: "City of Wolverhampton Council — air pollution and smoke-control guidance",
          url: "https://www.wolverhampton.gov.uk/environment-and-climate/pollution/air-pollution",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Wolverhampton by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact appliance and fuel",
    sideCopy: "A boiler fault, radiator move, full central-heating replacement and stove installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "Match the engineer to the work.",
    noteText: "Ask for the registration or competence relevant to the actual appliance and confirm what certification or notification will be provided on completion.",
  },
  faq: [
    ["How much does a heating engineer cost in Wolverhampton?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Do smoke-control rules matter for a stove in Wolverhampton?", "They can. The council publishes Smoke Control Area rules and stove guidance, so check the address and proposed appliance or fuel before installation."],
    ["Will heating work need Building Regulations paperwork?", "Some heating work is notifiable or can be self-certified through an appropriate competent-person scheme. Ask the installer what applies to the specific system."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Wolverhampton?",
    copy: "Describe the system, fault or upgrade once, then compare interested Wolverhampton heating engineers and their quotes.",
    buttonLabel: "Get Wolverhampton heating quotes",
  },
});
