import { makePortsmouthProfile } from "./portsmouthProfileBase";

export const tilersPortsmouth = makePortsmouthProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Portsmouth? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Portsmouth?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Portsmouth tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Portsmouth tiling context",
    title: "The wider refurbishment can bring Building Regulations and waste-disposal requirements into an otherwise simple tiling job",
    intro: "Portsmouth Building Control covers damp-proofing, ventilation, drainage, electrical safety and other construction standards. Demolition waste also needs a separate disposal plan when the work goes beyond a cosmetic finish.",
    items: [
      {
        title: "Building Regulations can apply to the wider bathroom or kitchen project",
        text: "Portsmouth City Council says Building Regulations cover construction matters including damp-proofing, ventilation, heating and electrical work. Simple tiling is different from a refurbishment that changes controlled services or construction, so establish the wider scope before surfaces are closed up.",
        source: {
          label: "Portsmouth City Council — building regulations",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/buildings/help-and-advice-on-building-regulations/",
        },
      },
      {
        title: "The council's bulky collection does not take tiles or building waste",
        text: "Portsmouth's bulky waste service excludes building and DIY waste such as rubble, tiles, concrete, bricks and plasterboard. If the tiler is stripping the old finish, agree who will remove the waste and which lawful disposal route is included in the quote.",
        source: {
          label: "Portsmouth City Council — bulky waste collection",
          url: "https://www.portsmouth.gov.uk/services/recycling-and-rubbish/special-waste-collection/bulky-waste/book-bulky-waste-collection/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Portsmouth by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background before asking for a fixed price",
    sideCopy: "Large-format porcelain over a flat prepared wall is different from mosaics, cracked floors or a bathroom that needs boarding and tanking first. Photos help expose the preparation before quoting.",
    noteLead: "Preparation changes the quote.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and waste removal are included rather than comparing only the laying price.",
  },
  faq: [
    ["How much does tiling cost in Portsmouth?", "The price depends on tile size and material, pattern, surface condition, preparation, access and whether old finishes are being removed."],
    ["Can I post a small splashback job?", "Yes. Small kitchen splashbacks, repairs and replacement tiles can be posted alongside full bathroom and floor-tiling projects."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the issue, but a wider project can include regulated drainage, electrical, ventilation or structural work."],
    ["Who removes the old tiles?", "Agree this before work starts. Portsmouth's council bulky collection does not accept tiles or building rubble."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Portsmouth?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Portsmouth tilers and their quotes.",
    buttonLabel: "Get Portsmouth tiling quotes",
  },
});

export const heatingEngineersPortsmouth = makePortsmouthProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or other heating work in Portsmouth? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Portsmouth?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Portsmouth heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Portsmouth heating context",
    title: "Building Regulations apply to heating work, while part of Portsmouth is also a smoke-control area",
    intro: "The right compliance route depends on the appliance and fuel. Portsmouth Building Control covers heating and energy standards, while local smoke-control restrictions matter for solid-fuel and wood-burning appliances in the affected area.",
    items: [
      {
        title: "Heating installations fall within Building Regulations standards",
        text: "Portsmouth City Council says Building Regulations cover heating, insulation, energy conservation and related building services. For boiler replacements or significant heating alterations, ask who is responsible for notification, commissioning and compliance paperwork.",
        source: {
          label: "Portsmouth City Council — building regulations",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/buildings/help-and-advice-on-building-regulations/",
        },
      },
      {
        title: "The south-west corner of Portsmouth is a smoke-control area",
        text: "Portsmouth City Council says the south-west corner of the city is a smoke-control area, limiting fuel use to smokeless fuels except where approved combustion equipment is used. If the project involves a stove or other solid-fuel appliance, check the property against the council map before choosing equipment.",
        source: {
          label: "Portsmouth City Council — air pollution and smoke control",
          url: "https://www.portsmouth.gov.uk/services/environmental-health/pollution-air-quality-and-nuisances/pollution-control/air-pollution-and-complaints/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Portsmouth by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact system details",
    sideCopy: "A boiler fault, full central-heating replacement, radiator move and solid-fuel installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "Match the engineer to the fuel and appliance.",
    noteText: "Ask for the qualifications and registration relevant to the work rather than assuming every heating engineer covers every system type.",
  },
  faq: [
    ["How much does a heating engineer cost in Portsmouth?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Do smoke-control rules matter for a wood-burning stove?", "They can. Portsmouth City Council says the south-west corner of the city is a smoke-control area, so check the address and appliance or fuel requirements before installation."],
    ["Will heating work need Building Regulations paperwork?", "Some controlled heating work does. Ask the engineer what notification, commissioning or certification applies to the specific system."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Portsmouth?",
    copy: "Describe the system, fault or upgrade once, then compare interested Portsmouth heating engineers and their quotes.",
    buttonLabel: "Get Portsmouth heating quotes",
  },
});
