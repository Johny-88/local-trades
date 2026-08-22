import { makeBuryProfile } from "./buryProfileBase";

export const tilersBury = makeBuryProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Bury? Describe the room, surface condition, tile type, approximate area and finish once, then compare tilers who cover your postcode.",
  answer: {
    title: "Looking for a tiler near you in Bury?",
    copy: "Share the room dimensions, tile size and material, existing surface, pattern, trims and whether old tiles need removing. Suitable Bury tilers can then price preparation and fitting against the same brief.",
  },
  localContext: {
    eyebrow: "Bury alterations and Building Control",
    title: "Tiling can sit inside a larger alteration that needs Building Regulations approval even when the finish itself does not",
    intro: "Straightforward retiling is usually a finishing job, but bathrooms, kitchens and floor rebuilds can include drainage, structure or electrical work. Bury Council lists these wider alterations among work that can require Building Regulations approval.",
    items: [
      {
        title: "Structural, drainage and electrical alterations can fall within Building Regulations",
        text: "Bury Council says Building Regulations will probably apply to structural alterations, changes to drainage, heat-producing appliances and domestic electrical installations. If tiling is part of a wider project, establish the regulated elements before they are covered.",
        source: {
          label: "Bury Council — building advice",
          url: "https://www.bury.gov.uk/planning-building-control/building-regulations/building-advice",
        },
      },
      {
        title: "Building Control can inspect work at several stages",
        text: "Bury's Building Control service inspects work at the start, end and relevant intermediate stages. Give your tiler the wider project specification so tanking, substrates and finished levels do not obstruct required inspection work.",
        source: {
          label: "Bury Council — Building Regulations consent",
          url: "https://www.bury.gov.uk/planning-building-control/building-regulations/consent",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Bury by postcode, project size and tile type. Example areas include:",
    sideTitle: "Preparation usually matters more than the postcode",
    sideCopy: "A splashback in Chesham, a bathroom floor in Fishpool and a large-format tiled kitchen in Brandlesholme can require very different levelling, waterproofing and cutting time.",
    noteLead: "Describe what is underneath the tiles.",
    noteText: "Loose boards, cracked screed, old adhesive, uneven walls and wet-area tanking can materially change the job. Photos of the existing surface make quotes more comparable.",
  },
  faq: [
    ["How much does a tiler cost in Bury?", "Pricing depends on area, tile material and size, pattern, preparation, access, removal and finishing details. Compare like-for-like scopes."],
    ["Do I need Building Control just to replace tiles?", "Simple like-for-like tiling is normally a finishing job, but a larger alteration involving structure, drainage or regulated electrical work can require approval."],
    ["Should I buy tiles before choosing a tiler?", "You can, but confirm quantities, wastage, trims, adhesive and grout requirements first, especially for patterned or large-format tiles."],
    ["Can I post a small splashback job?", "Yes. Small repairs and splashbacks can be posted alongside complete bathroom, kitchen and floor tiling jobs."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Bury?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Bury tilers and their quotes.",
    buttonLabel: "Get Bury tiling quotes",
  },
});

export const heatingEngineersBury = makeBuryProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Bury for a boiler, radiator, heating fault or system upgrade? Describe the system, symptoms and timing once, then compare professionals who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Bury?",
    copy: "Enter the postcode, heating type, boiler or appliance details and the problem. Mention loss of heat or hot water, unusual pressure, leaks, radiator issues and any planned changes so suitable Bury heating engineers can assess the same brief.",
  },
  localContext: {
    eyebrow: "Bury smoke-control rules",
    title: "Bury is designated as a Smoke Control Area, which matters for solid-fuel heating choices",
    intro: "Most household heating jobs involve gas, electricity or heat pumps, but solid-fuel stoves and burners have an extra local consideration. Bury Council states that the area is designated as a Smoke Control Area.",
    items: [
      {
        title: "Solid fuel must comply with smoke-control rules",
        text: "Bury Council says residents who burn solid fuel must use authorised smokeless fuel or a low-emission exempt appliance. Give the heating engineer the exact stove or burner and proposed fuel before installation is planned.",
        source: {
          label: "Bury Council — solid fuels for domestic burning",
          url: "https://www.bury.gov.uk/pests-pollution-and-food-hygiene/pollution/air-quality/solid-fuels-for-domestic-burning",
        },
      },
      {
        title: "Building Regulations can also apply to heat-producing appliances",
        text: "Bury Council's building guidance lists installation of a heat-producing appliance among work that will probably require Building Regulations approval, subject to the competent-person exemptions that apply to some installers.",
        source: {
          label: "Bury Council — building advice",
          url: "https://www.bury.gov.uk/planning-building-control/building-regulations/building-advice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Bury by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the appliance details before asking for a price",
    sideCopy: "A combi-boiler fault in Pimhole, radiator balancing in Walmersley and a planned stove installation in Elton are different jobs. Include make, model, age and symptoms where known.",
    noteLead: "Do not treat every heating job as a generic boiler callout.",
    noteText: "Fuel type, controls, cylinder setup, system pressure, existing pipework and whether the property has any heat at all can change the engineer and visit required.",
  },
  faq: [
    ["How much does a heating engineer cost in Bury?", "Cost depends on diagnosis, system type, parts, access, urgency and whether the job is repair, servicing or installation."],
    ["Is Bury a Smoke Control Area?", "Yes. Bury Council states that Bury is designated as a Smoke Control Area."],
    ["What can I burn in a solid-fuel appliance in Bury?", "Bury Council says authorised smokeless fuel must be used unless the appliance is an approved low-emission exempt appliance."],
    ["Can I post a no-heating or no-hot-water fault?", "Yes. Describe the symptoms, boiler or appliance details and whether the issue is intermittent or complete."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Bury?",
    copy: "Describe the heating system and problem once, then compare interested Bury heating engineers and their quotes.",
    buttonLabel: "Get Bury heating quotes",
  },
});
