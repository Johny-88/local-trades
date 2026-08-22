import { makeCroydonProfile } from "./croydonProfileBase";

export const tilersCroydon = makeCroydonProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Croydon? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the borough.",
  answer: {
    title: "Looking for a tiler near you in Croydon?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Croydon tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Croydon tiling and refurbishment context",
    title: "A tile finish may be straightforward, but the wider bathroom or structural project can trigger building-control requirements",
    intro: "Croydon Council treats the installation of a new bathroom as the kind of minor domestic work that can use a building notice, while ordinary refurbishment of an existing bathroom or toilet does not need approval on that basis alone. More complex alterations can require full plans, so tiling should be scoped together with the work behind the finished surface.",
    items: [
      {
        title: "A new bathroom is specifically listed as building-notice work",
        text: "Croydon Council lists installation of a new bathroom among the domestic works suitable for a building notice and states that simply refurbishing an existing bathroom or toilet does not need approval on that ground alone. If tiling forms part of a new room or major reconfiguration, establish the compliance route before the walls and floors are closed up.",
        source: {
          label: "Croydon Council — building notices",
          url: "https://www.croydon.gov.uk/planning-and-regeneration/building-control/submit-building-control-application/building-notices",
        },
      },
      {
        title: "Structural changes can move a project into the full-plans route",
        text: "Croydon's full-plans guidance says detailed drawings and structural calculations may be required for more complex alterations such as removing load-bearing walls or forming new openings. For a kitchen or bathroom project involving structural work, make sure the tiling quote is based on the finished substrate after the regulated work is resolved.",
        source: {
          label: "Croydon Council — full plans",
          url: "https://www.croydon.gov.uk/planning-and-regeneration/building-control/submit-building-control-application/full-plans",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Croydon by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the substrate before asking for a fixed price",
    sideCopy: "Large-format porcelain on a prepared wall is a different job from cracked floors, old adhesive, tanking or uneven backgrounds. Photos help expose preparation before quoting.",
    noteLead: "Preparation can cost as much as the finish.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and removal of old finishes are included rather than comparing only a laying rate.",
  },
  faq: [
    ["How much does tiling cost in Croydon?", "The price depends on tile material and size, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the regulated issue, but a wider bathroom or kitchen project can include controlled structural, drainage, electrical or ventilation work."],
    ["Does a new bathroom need building-control approval in Croydon?", "Croydon Council lists installation of a new bathroom among domestic works suitable for a building notice, while ordinary refurbishment of an existing bathroom or toilet does not need approval on that basis alone."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted alongside complete bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Croydon?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Croydon tilers and their quotes.",
    buttonLabel: "Get Croydon tiling quotes",
  },
});

export const heatingEngineersCroydon = makeCroydonProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or solid-fuel work in Croydon? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Croydon?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Croydon heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Croydon heating and clean-air context",
    title: "Most of Croydon is within a smoke-control area, so solid-fuel installations need an address and appliance check",
    intro: "Croydon Council says the majority of the borough is a smoke-control area. In those areas, ordinary wood and bituminous coal are not authorised fuels unless an exempt appliance is being used, so a stove or solid-fuel heating job should start with the property's exact status rather than a borough-wide assumption.",
    items: [
      {
        title: "The majority of Croydon is covered by smoke-control rules",
        text: "Croydon Council says smoke-control rules apply across most of the borough and restrict smoke from domestic chimneys. If a job involves a wood burner or other solid-fuel appliance, confirm whether the address is inside the controlled area before choosing the appliance and fuel.",
        source: {
          label: "Croydon Council — wood burning and smoke-control areas",
          url: "https://www.croydon.gov.uk/environment/pollution/air-pollution-and-and-air-quality/air-quality-croydon/wood-burning",
        },
      },
      {
        title: "Unauthorised fuels are restricted unless an exempt appliance is used",
        text: "The same council guidance states that ordinary wood and bituminous coal are not authorised fuels in a smoke-control area unless an exempt appliance is in use. Ask the installer to explain the appliance, permitted fuel and any certification or notification that will be provided on completion.",
        source: {
          label: "Croydon Council — smoke-control rules for domestic chimneys",
          url: "https://www.croydon.gov.uk/environment/pollution/air-pollution-and-and-air-quality/air-quality-croydon/wood-burning",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Croydon by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact appliance and fuel",
    sideCopy: "A boiler fault, radiator move, full central-heating replacement and wood-burning stove installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "Match the engineer to the work.",
    noteText: "For gas, solid-fuel or other regulated work, ask what registration or competence applies and what certification or notification will be provided.",
  },
  faq: [
    ["How much does a heating engineer cost in Croydon?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Is all of Croydon a smoke-control area?", "Croydon Council says the majority of the borough is covered, so check the exact address rather than assuming every property has identical rules."],
    ["Can I burn ordinary wood in a Croydon smoke-control area?", "The council says ordinary wood is not an authorised fuel in a smoke-control area unless an exempt appliance is being used."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Croydon?",
    copy: "Describe the system, fault or upgrade once, then compare interested Croydon heating engineers and their quotes.",
    buttonLabel: "Get Croydon heating quotes",
  },
});
