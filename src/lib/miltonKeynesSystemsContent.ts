import { makeMiltonKeynesProfile } from "./miltonKeynesProfileBase";

export const tilersMiltonKeynes = makeMiltonKeynesProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Milton Keynes? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Milton Keynes?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Milton Keynes tilers can judge the preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Milton Keynes tiling context",
    title: "The wider bathroom or kitchen project can matter more than the visible tiles",
    intro: "Straightforward tiling is different from refurbishment that changes drainage, electrics, ventilation or structure. Milton Keynes Building Control and commercial-waste rules are useful checks when the job includes more than a decorative finish.",
    items: [
      {
        title: "Building Regulations can apply to the wider project",
        text: "Milton Keynes City Council explains that Building Regulations cover construction standards including structure, ventilation, drainage and services. If tiling forms part of a bathroom or kitchen project that changes controlled work, establish the approval and certification route before surfaces are closed up.",
        source: {
          label: "Milton Keynes City Council — building regulations",
          url: "https://www.milton-keynes.gov.uk/planning-and-building/building-control/building-control-advice/building-regulations",
        },
      },
      {
        title: "Removed tiles and rubble need a lawful disposal route",
        text: "Milton Keynes City Council accepts trade waste at Newport Pagnell Household Waste Recycling Centre and charges businesses by waste type and weight. If old tiles, adhesive, boards or rubble are being removed, confirm whether carrying and disposal are included in the quote.",
        source: {
          label: "Milton Keynes City Council — trade waste at Household Waste Recycling Centre",
          url: "https://www.milton-keynes.gov.uk/waste-and-recycling/commercial-and-business-waste/trade-waste-household-waste-recycling-centre",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Milton Keynes by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background before asking for a fixed price",
    sideCopy: "Large-format porcelain over a flat prepared wall is different from mosaics, cracked floors or a bathroom that needs boarding and tanking first. Photos help expose preparation before quoting.",
    noteLead: "Preparation changes the quote.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and waste removal are included rather than comparing only the laying price.",
  },
  faq: [
    ["How much does tiling cost in Milton Keynes?", "The price depends on tile size and material, pattern, surface condition, preparation, access and whether old finishes are being removed. Compare quotes for the same preparation and finish."],
    ["Can I post a small splashback job?", "Yes. Small kitchen splashbacks, repairs and replacement tiles can be posted alongside full bathroom and floor-tiling projects."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the issue, but a wider project can include regulated drainage, electrical, ventilation or structural work."],
    ["Who removes the old tiles?", "Agree this before work starts. Some tilers include strip-out and disposal, while others price only preparation and installation."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Milton Keynes?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Milton Keynes tilers and their quotes.",
    buttonLabel: "Get Milton Keynes tiling quotes",
  },
});

export const heatingEngineersMiltonKeynes = makeMiltonKeynesProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or other heating work in Milton Keynes? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Milton Keynes?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Milton Keynes heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Milton Keynes heating context",
    title: "Boiler certification and smoke-control rules can affect the specification",
    intro: "Milton Keynes Building Control explains the notification route for boilers, while parts of the city are designated smoke-control areas. The right compliance path depends on the appliance and fuel.",
    items: [
      {
        title: "Boiler work must follow Building Regulations notification rules",
        text: "Milton Keynes City Council says installing or replacing a boiler or hot-water cylinder requires Building Regulations approval unless the installer is registered with the appropriate Competent Person Scheme, such as Gas Safe, in which case the installer can notify the council and issue a compliance certificate.",
        source: {
          label: "Milton Keynes City Council — building regulations",
          url: "https://www.milton-keynes.gov.uk/planning-and-building/building-control/building-control-advice/building-regulations",
        },
      },
      {
        title: "Some Milton Keynes addresses are inside smoke-control areas",
        text: "Milton Keynes City Council has designated smoke-control areas and provides an address map. In those areas, authorised smokeless fuel or an exempt appliance with the correct fuel is required, so check the property before specifying a stove or solid-fuel appliance.",
        source: {
          label: "Milton Keynes City Council — smoke control areas in MK",
          url: "https://www.milton-keynes.gov.uk/environmental-health/pollution/smoke-control-areas-mk",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Milton Keynes by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact system details",
    sideCopy: "A boiler fault, full central-heating replacement, radiator move and solid-fuel installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "Match the engineer to the fuel and appliance.",
    noteText: "Ask for the qualifications and registration relevant to the work rather than assuming every heating engineer covers every system type.",
  },
  faq: [
    ["How much does a heating engineer cost in Milton Keynes?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Do smoke-control rules matter for a wood-burning stove?", "They can. Milton Keynes has designated smoke-control areas, so check the property address and appliance or fuel requirements before installation."],
    ["Will boiler replacement need Building Regulations paperwork?", "Yes, but an appropriately registered Competent Person can normally self-certify and notify the council on your behalf."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Milton Keynes?",
    copy: "Describe the system, fault or upgrade once, then compare interested Milton Keynes heating engineers and their quotes.",
    buttonLabel: "Get Milton Keynes heating quotes",
  },
});
