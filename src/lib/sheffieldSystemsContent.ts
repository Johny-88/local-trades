import { makeSheffieldProfile } from "./sheffieldProfileBase";

export const tilersSheffield = makeSheffieldProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Sheffield? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Sheffield?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Sheffield tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Sheffield tiling and refurbishment context",
    title: "A tiling job can sit inside wider regulated building work, while strip-out creates business waste",
    intro: "Straightforward tiling is finish work, but Sheffield Building Control lists bathroom installation, structural alterations and certain electrical work among domestic projects that can fall within Building Regulations procedures. Old tiles, boards and rubble removed by a contractor also need lawful business-waste handling.",
    items: [
      {
        title: "Check the wider refurbishment, not just the tile finish",
        text: "Sheffield City Council's Building Notice guidance includes bathroom or shower installation, load-bearing-wall alterations, heating work, replacement windows outside FENSA and electrical alterations outside a competent-person scheme as examples of work that can require Building Regulations procedures. If tiling is part of a larger bathroom or kitchen project, establish the compliance route before regulated work is covered up.",
        source: {
          label: "Sheffield City Council — apply for a Building Notice",
          url: "https://www.sheffield.gov.uk/planning-development/building-regulations/apply-building-notice",
        },
      },
      {
        title: "Old tiles and renovation debris need a lawful disposal route",
        text: "Sheffield requires businesses to use registered waste arrangements and retain evidence of lawful disposal. If a tiler removes old tiles, boards, adhesive or rubble, ask who is responsible for taking that material away and whether disposal is included in the quote.",
        source: {
          label: "Sheffield City Council — commercial and business waste",
          url: "https://www.sheffield.gov.uk/bins-waste-recycling/other-services/commercial-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Sheffield by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background before asking for a fixed price",
    sideCopy: "Large-format porcelain on a flat prepared wall is a different job from mosaics, cracked floors or a bathroom that needs boarding and tanking. Photos help expose preparation before quoting.",
    noteLead: "Preparation changes the quote.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and waste removal are included rather than comparing only the laying price.",
  },
  faq: [
    ["How much does tiling cost in Sheffield?", "The price depends on tile material and size, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the issue, but a wider bathroom or kitchen project can include regulated drainage, electrical, ventilation or structural work."],
    ["Who removes the old tiles and rubble?", "Agree this before work starts. Waste created through paid trade work needs lawful business-waste handling and should not be assumed to be included."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted alongside complete bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Sheffield?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Sheffield tilers and their quotes.",
    buttonLabel: "Get Sheffield tiling quotes",
  },
});

export const heatingEngineersSheffield = makeSheffieldProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or other heating work in Sheffield? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Sheffield?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Sheffield heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Sheffield heating and clean-air context",
    title: "Heating alterations can need Building Regulations compliance, while wood burners must respect Sheffield's smoke-control rules",
    intro: "Sheffield Building Control specifically lists installing or altering a heating appliance and flue among work that can use the Building Notice route. The council's current air-quality reporting also states that Sheffield's urban area is a smoke-control area where non-compliant fuels and stoves are prohibited.",
    items: [
      {
        title: "Heating appliances and flues can fall within Building Regulations procedures",
        text: "Sheffield City Council lists installing a new heating appliance, or altering an existing appliance and flue, among domestic works that may use a Building Notice. Ask the engineer what notification, competent-person certification and completion paperwork applies to the specific fuel and system rather than assuming every heating job follows the same route.",
        source: {
          label: "Sheffield City Council — apply for a Building Notice",
          url: "https://www.sheffield.gov.uk/planning-development/building-regulations/apply-building-notice",
        },
      },
      {
        title: "Sheffield's urban area is subject to smoke-control restrictions",
        text: "Sheffield City Council's 2025 Air Quality Annual Status Report says the urban area is a smoke-control area and that non-compliant fuels and stoves are prohibited. If the job involves a wood burner or other solid-fuel appliance, confirm the appliance, fuel and address-level requirements before purchase or installation.",
        source: {
          label: "Sheffield City Council — 2025 Air Quality Annual Status Report",
          url: "https://www.sheffield.gov.uk/sites/default/files/2025-10/2025_air_quality_annual_status_report.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Sheffield by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact appliance and system details",
    sideCopy: "A boiler fault, radiator move, full central-heating replacement and solid-fuel installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "Match the engineer to the appliance and fuel.",
    noteText: "Ask for the qualifications and registration relevant to the actual work, and confirm what certification will be provided when the job is complete.",
  },
  faq: [
    ["How much does a heating engineer cost in Sheffield?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Do Sheffield smoke-control rules matter for a wood-burning stove?", "Yes. The council states that Sheffield's urban area is a smoke-control area and non-compliant stoves and fuels are prohibited, so check the exact appliance and fuel before installation."],
    ["Will heating work need Building Regulations paperwork?", "Some heating work is notifiable or can be self-certified through an appropriate competent-person route. Ask the installer what applies to the specific appliance and system."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Sheffield?",
    copy: "Describe the system, fault or upgrade once, then compare interested Sheffield heating engineers and their quotes.",
    buttonLabel: "Get Sheffield heating quotes",
  },
});
