import { makeLiverpoolProfile } from "./liverpoolProfileBase";

export const tilersLiverpool = makeLiverpoolProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Liverpool? Describe the room, surface, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Liverpool?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention uneven floors, old tiles, tanking, underfloor heating or damaged backgrounds so suitable Liverpool tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Liverpool tiling and refurbishment context",
    title: "The tile finish may be simple, but the wider bathroom or kitchen project can need Building Regulations approval",
    intro: "Liverpool City Council says Building Regulations approval is required for many structural, drainage and home-improvement works, including bathrooms, electrics, windows and doors where the installer is not using an applicable Competent Person Scheme. Strip-out by a contractor also creates business waste that needs an agreed disposal route.",
    items: [
      {
        title: "Check the wider project before regulated work is covered",
        text: "Liverpool's Building Control guidance says approval can apply to structural alterations, drainage changes and home improvements such as bathrooms and electrical work where competent-person self-certification does not apply. If tiling is part of a larger refurbishment, establish the compliance route before walls and floors are closed up.",
        source: {
          label: "Liverpool City Council — Building Regulations approval",
          url: "https://liverpool.gov.uk/planning-and-building-control/building-control/building-regulations-approval",
        },
      },
      {
        title: "Old tiles and renovation debris need a lawful contractor-waste route",
        text: "Liverpool says businesses must arrange their own commercial waste removal through a legally authorised carrier and keep disposal records. If the tiler removes old tiles, boards, adhesive or rubble, ask who takes the waste away and whether that cost is included.",
        source: {
          label: "Liverpool City Council — commercial waste",
          url: "https://liverpool.gov.uk/bins-and-recycling/commercial-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Liverpool by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background before asking for a fixed price",
    sideCopy: "Large-format porcelain on a flat prepared wall is a different job from mosaics, cracked floors or a bathroom that needs boarding and tanking. Photos help expose preparation before quoting.",
    noteLead: "Preparation changes the quote.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and waste removal are included rather than comparing only the laying price.",
  },
  faq: [
    ["How much does tiling cost in Liverpool?", "The price depends on tile material and size, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the issue, but a wider bathroom or kitchen project can include regulated drainage, electrical or structural work."],
    ["Who removes the old tiles and rubble?", "Agree this before work starts. Waste created and removed through paid trade work needs lawful business-waste handling and should not be assumed to be included."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted alongside complete bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Liverpool?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Liverpool tilers and their quotes.",
    buttonLabel: "Get Liverpool tiling quotes",
  },
});

export const heatingEngineersLiverpool = makeLiverpoolProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or other heating work in Liverpool? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Liverpool?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include model details and photos where useful so suitable Liverpool heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Liverpool heating and clean-air context",
    title: "Heating work can need Building Regulations compliance, while solid-fuel appliances also need a smoke-control check",
    intro: "Liverpool's Building Control guidance includes boilers and radiators among home improvements that can require approval when the installer is not operating through an applicable Competent Person Scheme. Liverpool also maintains a published smoke-controlled-zone dataset, so wood-burning and solid-fuel installations should be checked against the current address-level rules.",
    items: [
      {
        title: "Boilers and radiators can have a Building Regulations route",
        text: "Liverpool City Council says home improvements including a new boiler and radiators can need Building Regulations approval if the person carrying out the work is not a member of the relevant Competent Person Scheme. Ask the engineer what notification and completion documentation applies to the actual system.",
        source: {
          label: "Liverpool City Council — Building Regulations approval",
          url: "https://liverpool.gov.uk/planning-and-building-control/building-control/building-regulations-approval",
        },
      },
      {
        title: "Check smoke-control status before specifying a solid-fuel appliance",
        text: "Liverpool City Council publishes a Liverpool City Smoke Controlled Zone dataset, updated through the government's data service. If the job involves a wood burner or another solid-fuel appliance, check the current zone and permitted appliance or fuel rules for the exact address before purchase or installation.",
        source: {
          label: "Liverpool City Council data — smoke controlled zone",
          url: "https://www.data.gov.uk/dataset/84c48af4-6019-42f2-9ea1-8dcd07d285dc/liverpool-city-smoke-controlled-zone",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Liverpool by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact appliance and system details",
    sideCopy: "A boiler fault, radiator move, full central-heating replacement and solid-fuel installation need different skills, parts and compliance routes. Include the make, model and fuel where known.",
    noteLead: "Match the engineer to the appliance and fuel.",
    noteText: "Ask for the qualifications and registration relevant to the actual work, and confirm what certification will be provided when the job is complete.",
  },
  faq: [
    ["How much does a heating engineer cost in Liverpool?", "Costs vary widely between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, heating controls and larger heating upgrades can all be posted in this category."],
    ["Do smoke-control rules matter for a wood-burning stove in Liverpool?", "Potentially. Liverpool publishes a smoke-controlled-zone dataset, so check the current rules for the exact property and the appliance or fuel you intend to use."],
    ["Will heating work need Building Regulations paperwork?", "Some heating work can be self-certified through an appropriate Competent Person Scheme. Ask the installer what applies to the specific appliance and system."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Liverpool?",
    copy: "Describe the system, fault or upgrade once, then compare interested Liverpool heating engineers and their quotes.",
    buttonLabel: "Get Liverpool heating quotes",
  },
});
