import { makeSouthamptonProfile } from "./southamptonProfileBase";

export const tilersSouthampton = makeSouthamptonProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Southampton? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Southampton?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Southampton tilers can judge the preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Southampton tiling context",
    title: "Wet-area preparation and demolition waste can matter as much as the visible tiles",
    intro: "Tiling itself may be straightforward, but bathrooms and kitchens often involve moisture, drainage and significant demolition waste. Southampton's building-control and recycling guidance makes those hidden parts worth checking early.",
    items: [
      {
        title: "Building regulations can apply when the job affects moisture, ventilation or drainage",
        text: "Southampton City Council explains that Building Regulations cover issues including moisture resistance, ventilation, drainage and waste disposal. A simple tile replacement is different from a project that changes the bathroom build-up, drainage, ventilation or other controlled work, so establish the wider scope before the finish is priced.",
        source: {
          label: "Southampton City Council — building-control permissions",
          url: "https://www.southampton.gov.uk/planning/building-control/permissions/",
        },
      },
      {
        title: "Removed tiles and rubble need a disposal plan",
        text: "Southampton's household recycling centre classifies tiles, rubble and similar construction material as DIY waste and separately lists trade-waste arrangements for businesses. If the tiler is stripping the old finish, check whether bagging, carrying and lawful disposal are included in the quote.",
        source: {
          label: "Southampton City Council — Southampton household waste recycling centre",
          url: "https://www.southampton.gov.uk/bins-recycling/recycling/centre/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Southampton by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background before asking for a fixed price",
    sideCopy: "Large-format porcelain over a flat prepared wall is a different job from mosaics, old adhesive, cracked floors or a bathroom that needs boarding and tanking first.",
    noteLead: "Preparation changes the quote.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and waste removal are included rather than comparing only the laying price.",
  },
  faq: [
    ["How much does tiling cost in Southampton?", "The price depends on tile size and material, pattern, surface condition, preparation, access and whether old finishes are being removed. Compare quotes for the same preparation and finish."],
    ["Can I post a small splashback job?", "Yes. Small kitchen splashbacks, repairs and replacement tiles can be posted alongside full bathroom and floor-tiling projects."],
    ["Does a bathroom tiling job need building regulations approval?", "Not simply because tiles are being replaced. But if the wider project changes drainage, ventilation, structure or other controlled work, Building Regulations may become relevant."],
    ["Who removes the old tiles?", "Agree this before work starts. Some tilers include strip-out and disposal, while others price only preparation and installation."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Southampton?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Southampton tilers and their quotes.",
    buttonLabel: "Get Southampton tiling quotes",
  },
});

export const heatingEngineersSouthampton = makeSouthamptonProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or other heating work in Southampton? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Southampton?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Southampton heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Southampton heating context",
    title: "Controlled heating work and smoke-control rules can affect the specification",
    intro: "The right compliance route depends on the system. Southampton's building-control guidance covers heat-producing equipment and controlled services, while local smoke-control rules matter for wood and solid-fuel appliances.",
    items: [
      {
        title: "Heating installations can fall within Building Regulations",
        text: "Southampton City Council says Building Regulations apply to the installation of controlled services and fittings and cover heat-producing equipment and energy saving. For system replacements or substantial alterations, ask who is responsible for the relevant certification and notification.",
        source: {
          label: "Southampton City Council — building-control permissions",
          url: "https://www.southampton.gov.uk/planning/building-control/permissions/",
        },
      },
      {
        title: "Wood and solid-fuel appliances need a smoke-control check",
        text: "Southampton City Council advises that only authorised fuels or exempt appliances can be used where smoke-control rules apply, and it provides a smoke-control zone map. If a project involves a stove or solid-fuel appliance, check the address before choosing the equipment.",
        source: {
          label: "Southampton City Council — wood burning and smoke control areas",
          url: "https://www.southampton.gov.uk/our-green-city/council-commitments/clean-air/smoke-control-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Southampton by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact system details",
    sideCopy: "A boiler fault, full central-heating replacement, radiator move and solid-fuel installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "Match the engineer to the fuel and appliance.",
    noteText: "Ask for the qualifications and registration relevant to the work rather than assuming every heating engineer covers every system type.",
  },
  faq: [
    ["How much does a heating engineer cost in Southampton?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Do smoke-control rules matter for a wood-burning stove?", "They can. Southampton provides a smoke-control zone map, so check the property address and the appliance or fuel requirements before installation."],
    ["Will heating work need Building Regulations paperwork?", "Some controlled heating work does. Ask the engineer what notification, commissioning or certification applies to the specific system."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Southampton?",
    copy: "Describe the system, fault or upgrade once, then compare interested Southampton heating engineers and their quotes.",
    buttonLabel: "Get Southampton heating quotes",
  },
});
