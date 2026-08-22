import { makePlymouthProfile } from "./plymouthProfileBase";

export const tilersPlymouth = makePlymouthProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Plymouth? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Plymouth?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Plymouth tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Plymouth tiling and refurbishment context",
    title: "Tiling may be finish work, but wider bathroom and kitchen alterations can fall under Building Regulations",
    intro: "Plymouth Building Control says alterations must comply with the Building Regulations where the regulated requirements apply. The council also lists bathrooms, sanitary ware, electrical work, heating systems and windows among work that can sometimes be certified through competent-person schemes.",
    items: [
      {
        title: "Check the wider room alteration before covering services and backgrounds",
        text: "Plymouth City Council explains that building work involving alterations can require Building Regulations compliance, covering areas such as structure, fire safety, drainage, ventilation and electrical safety. If tiling forms part of a wider bathroom or kitchen project, establish who is responsible for each regulated element before it is concealed.",
        source: {
          label: "Plymouth City Council — Building Control and Building Regulations",
          url: "https://www.plymouth.gov.uk/who-are-building-control-and-when-do-i-need-them",
        },
      },
      {
        title: "Some related installations can be self-certified by registered competent persons",
        text: "The council's competent-person guidance includes electrical work associated with kitchens, plumbing and water systems, bathrooms and sanitary ware, heating systems, and replacement windows. For a multi-trade refurbishment, ask which contractor is certifying each regulated part rather than assuming the tiler covers everything.",
        source: {
          label: "Plymouth City Council — competent person scheme",
          url: "https://www.plymouth.gov.uk/competent-person-scheme",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Plymouth by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the substrate before asking for a fixed price",
    sideCopy: "Large-format porcelain on a prepared wall is a different job from cracked floors, old adhesive, tanking or uneven backgrounds. Photos help expose preparation before quoting.",
    noteLead: "Preparation can cost as much as the finish.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and removal of old finishes are included rather than comparing only a laying rate.",
  },
  faq: [
    ["How much does tiling cost in Plymouth?", "The price depends on tile material and size, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the regulated issue, but a wider bathroom or kitchen project can include controlled drainage, electrical, ventilation or structural work."],
    ["Can related electrical or bathroom work be self-certified?", "Some work can be certified through an appropriate competent-person scheme if the installer is registered for that specific work."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted alongside complete bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Plymouth?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Plymouth tilers and their quotes.",
    buttonLabel: "Get Plymouth tiling quotes",
  },
});

export const heatingEngineersPlymouth = makePlymouthProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or solid-fuel work in Plymouth? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Plymouth?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Plymouth heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Plymouth heating and clean-air context",
    title: "Plymouth currently has no designated smoke-control areas, but installation and nuisance rules still matter",
    intro: "Plymouth City Council says the city has no designated Smoke Control Areas. That removes the extra Clean Air Act restrictions that apply inside those zones, but it does not remove Building Regulations, fuel-quality rules or the council's powers to investigate smoke that becomes a statutory nuisance.",
    items: [
      {
        title: "The council confirms Plymouth has no designated Smoke Control Areas",
        text: "The council's current smoke-and-fire guidance states that solid-fuel fires and appliances in Plymouth do not have to meet Smoke Control Area exemption rules purely because of location. Even so, the council recommends cleaner appliances and fuels where possible and can investigate repeated smoke nuisance.",
        source: {
          label: "Plymouth City Council — smoke and fire",
          url: "https://www.plymouth.gov.uk/smoke-and-fire",
        },
      },
      {
        title: "Heating systems and fuel-burning appliances still sit within regulated building work",
        text: "Plymouth's Building Control guidance says Building Regulations cover energy performance, ventilation, gas and electrical safety, while competent-person schemes can cover gas appliances and heating or hot-water systems. Ask the installer what certification or notification applies to the exact system being fitted.",
        source: {
          label: "Plymouth City Council — competent person scheme",
          url: "https://www.plymouth.gov.uk/competent-person-scheme",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Plymouth by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact appliance and fuel",
    sideCopy: "A boiler fault, radiator move, full central-heating replacement and wood-burning stove installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "Match the engineer to the work.",
    noteText: "Ask for the registration or competence relevant to the actual appliance and confirm what certification or notification will be provided on completion.",
  },
  faq: [
    ["How much does a heating engineer cost in Plymouth?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Is Plymouth a smoke-control area?", "No. Plymouth City Council currently says there are no designated Smoke Control Areas in the city."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Will heating work need Building Regulations paperwork?", "Some heating work is notifiable or can be self-certified through an appropriate competent-person scheme. Ask the installer what applies to the specific appliance and fuel."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Plymouth?",
    copy: "Describe the system, fault or upgrade once, then compare interested Plymouth heating engineers and their quotes.",
    buttonLabel: "Get Plymouth heating quotes",
  },
});
