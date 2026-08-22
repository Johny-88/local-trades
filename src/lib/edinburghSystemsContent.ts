import { makeEdinburghProfile } from "./edinburghProfileBase";

export const tilersEdinburgh = makeEdinburghProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Edinburgh? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Edinburgh?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Edinburgh tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Edinburgh refurbishment context",
    title: "Kitchen and bathroom tiling can sit inside wider Scottish building-standard and heritage requirements",
    intro: "A straightforward tile finish is different from a wider refurbishment. Edinburgh's Building Standards guidance says some kitchen and bathroom refits can be carried out without a building warrant when they stay within defined limits, but structural or other excluded work can require a warrant. Listed properties can add a separate consent question.",
    items: [
      {
        title: "A simple refit is not the same as structural alteration",
        text: "Edinburgh's Building Standards FAQs explain that kitchen or bathroom refits can fall within work that does not require a warrant where the work does not involve matters such as structural alterations, increasing floor area or changing wastewater discharge. If tiling is part of moving walls, changing drainage routes or another larger alteration, establish the compliance route before regulated work is covered up.",
        source: {
          label: "City of Edinburgh Council — Building Standards FAQs",
          url: "https://www.edinburgh.gov.uk/downloads/file/31474/building-standards-faqs",
        },
      },
      {
        title: "Trade waste from strip-out must use a lawful disposal route",
        text: "Edinburgh says businesses must dispose of trade waste through a licensed waste carrier. If a tiler removes old tiles, boards, adhesive or rubble, agree who is taking it away and whether disposal is included in the quote rather than assuming it can go through household waste facilities.",
        source: {
          label: "City of Edinburgh Council — trade waste regulations",
          url: "https://www.edinburgh.gov.uk/trade-waste/trade-waste-collections",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Edinburgh by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background before asking for a fixed price",
    sideCopy: "Large-format porcelain on a prepared wall is a different job from mosaics, cracked floors or an older bathroom that needs boarding and tanking. Clear photos help reveal preparation before quoting.",
    noteLead: "Preparation changes the quote.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and waste removal are included rather than comparing only the laying price.",
  },
  faq: [
    ["How much does tiling cost in Edinburgh?", "The price depends on tile material and size, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish."],
    ["Does ordinary tiling need a building warrant in Edinburgh?", "The tile finish itself is usually not the key issue. Edinburgh's guidance says some kitchen and bathroom refits can be warrant-exempt, but structural, drainage or other wider changes may alter that position."],
    ["Who removes old tiles and rubble?", "Agree this before work starts. Trade waste produced through paid work must be disposed of lawfully and should not be assumed to be included."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted alongside complete bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Edinburgh?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Edinburgh tilers and their quotes.",
    buttonLabel: "Get Edinburgh tiling quotes",
  },
});

export const heatingEngineersEdinburgh = makeEdinburghProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or other heating work in Edinburgh? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Edinburgh?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Edinburgh heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Edinburgh heating and clean-air context",
    title: "The whole city is a smoke-control area, while larger heating projects sit within Scottish building standards",
    intro: "Edinburgh applies smoke-control restrictions across the entire city. For larger alterations, conversions or new-build heating work, Scottish building standards and the current building-warrant regime also matter, so the right installer needs to understand both the appliance and the compliance route.",
    items: [
      {
        title: "The whole of Edinburgh is a smoke-control area",
        text: "The council states that smoke cannot be emitted from a building chimney in Edinburgh unless the appliance and fuel meet the relevant exemptions or authorised-fuel rules. If the job involves a stove, solid-fuel boiler or other combustion appliance, confirm the exact appliance, fuel and installation requirements before purchase.",
        source: {
          label: "City of Edinburgh Council — smoke control",
          url: "https://www.edinburgh.gov.uk/pollution/smoke-control/1",
        },
      },
      {
        title: "Building warrants remain part of the Scottish compliance system",
        text: "Edinburgh requires building-warrant applications through the Scottish eBuilding Standards process where a warrant is required, and warns that work started without a required warrant can create enforcement, inspection and sale problems. For major heating alterations or work bundled into a conversion, ask the engineer or designer what warrant and completion paperwork applies.",
        source: {
          label: "City of Edinburgh Council — apply for a Building Warrant",
          url: "https://www.edinburgh.gov.uk/buildingwarrant",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Edinburgh by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact appliance and system details",
    sideCopy: "A boiler fault, radiator move, full heating replacement and solid-fuel installation need different skills, parts and compliance checks. Include the make, model, fuel and any flue changes where known.",
    noteLead: "Match the engineer to the fuel and job scope.",
    noteText: "Ask for the qualifications and registration relevant to the actual appliance, and confirm what certification or completion paperwork will be supplied.",
  },
  faq: [
    ["How much does a heating engineer cost in Edinburgh?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Do Edinburgh smoke-control rules matter for a wood-burning stove?", "Yes. The whole city is a smoke-control area, so the appliance and fuel must satisfy the applicable smoke-control rules."],
    ["Will heating work need a building warrant?", "It depends on the scope. Some domestic heating work can be warrant-exempt, while wider alterations or conversions may require a warrant. Check the exact project before work starts."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Edinburgh?",
    copy: "Describe the system, fault or upgrade once, then compare interested Edinburgh heating engineers and their quotes.",
    buttonLabel: "Get Edinburgh heating quotes",
  },
});
