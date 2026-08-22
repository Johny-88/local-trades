import { makeGlasgowProfile } from "./glasgowProfileBase";

export const tilersGlasgow = makeGlasgowProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Glasgow? Describe the room, background, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Glasgow?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention old tiles, damaged plaster, uneven floors, tanking or underfloor heating so suitable Glasgow tilers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Glasgow tiling and building-standards context",
    title: "The tile finish may be straightforward, but the wider alteration can fall within Scotland's building-standards system",
    intro: "Glasgow City Council is the local verifier for building warrants. Simple decorative tiling is not normally the issue, but structural changes, conversions and certain alterations around bathrooms or kitchens can need a warrant before work starts.",
    items: [
      {
        title: "Glasgow administers building warrants under the Scottish system",
        text: "Glasgow Building Standards considers and approves building warrants for the city, and council reporting notes that warrants are required for most forms of alterations, extensions and conversions. If tiling is part of a larger refurbishment, identify any structural, drainage or conversion work before finishes cover it up.",
        source: {
          label: "Glasgow City Council — Building Standards and building warrants",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDNZLT1NTUTZL",
        },
      },
      {
        title: "Scottish rules distinguish minor house work from alterations with greater impact",
        text: "Scottish building-standards guidance allows some work in houses to proceed without a warrant but identifies exceptions such as altering structural walls, roofs, external walls or wastewater discharge. Ask whether the tiling job is only a finish or part of regulated alteration work.",
        source: {
          label: "Scottish Government — building standards guidance",
          url: "https://www.gov.scot/policies/building-standards/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Glasgow by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background, not just the new tile",
    sideCopy: "Large porcelain on a prepared wall is a different job from cracked tenement floors, uneven substrates or a bathroom that needs boarding and waterproofing. Photos help expose preparation before quoting.",
    noteLead: "Preparation changes the price.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and removal of old materials are included rather than comparing only the laying rate.",
  },
  faq: [
    ["How much does tiling cost in Glasgow?", "The price depends on tile type and size, pattern, surface condition, preparation, access and removal of existing finishes. Compare quotes for the same specification."],
    ["Does ordinary tiling need a building warrant in Glasgow?", "Usually the decorative tile finish itself is not the issue, but a wider alteration can involve work that needs a Scottish building warrant. Check the whole project scope."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted alongside complete bathrooms, floors and larger tiling projects."],
    ["Who removes the old tiles and rubble?", "Agree this in advance. Waste created by paid trade work is business waste in Scotland, so disposal should be clear in the quote."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Glasgow?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Glasgow tilers and their quotes.",
    buttonLabel: "Get Glasgow tiling quotes",
  },
});

export const heatingEngineersGlasgow = makeGlasgowProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control or solid-fuel work in Glasgow? Describe the system, fuel and problem once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Glasgow?",
    copy: "Enter the postcode and explain the boiler or heating system, fuel type, fault symptoms and any planned upgrades. Include make, model and photos where useful so suitable Glasgow heating engineers can judge the job accurately.",
  },
  localContext: {
    eyebrow: "Glasgow heating and clean-air context",
    title: "Glasgow's smoke-control designation matters for solid fuel, while larger alterations still sit within Scottish building standards",
    intro: "Glasgow City Council data identifies the council area as a Smoke Control Area. Scottish building standards also apply to heating work even where a particular house installation may not require a warrant, so the appliance, fuel, flue and wider alterations all matter.",
    items: [
      {
        title: "Glasgow is covered by smoke-control restrictions",
        text: "Glasgow City Council's smoke-control dataset covers the council boundary. In a Smoke Control Area, smoke emissions and the use of unauthorised fuels are restricted unless an exempt appliance and authorised arrangements apply. If the job involves a stove or solid-fuel appliance, check the exact model and fuel before purchase or installation.",
        source: {
          label: "Spatial Hub Scotland — Glasgow City Council Smoke Control Areas",
          url: "https://data.spatialhub.scot/ar/dataset/smoke_control_areas-gc",
        },
      },
      {
        title: "A heating job can still have building-standards obligations even where no warrant is required",
        text: "Scottish guidance explains that some central-heating work in houses can be exempt from the warrant requirement, but work still has to comply with applicable building standards and exceptions apply where more significant alterations are involved. Ask the installer what certification and compliance route applies to the exact system.",
        source: {
          label: "Scottish Government — building standards",
          url: "https://www.gov.scot/collections/building-standards/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Glasgow by postcode, fuel and system type. Example areas include:",
    sideTitle: "Give the exact appliance and fuel",
    sideCopy: "A boiler fault, radiator move, full central-heating replacement and solid-fuel installation are different jobs. Include the make, model, fuel and any flue or chimney work where known.",
    noteLead: "Match the engineer to the actual system.",
    noteText: "Ask for the qualifications and registration relevant to the appliance and fuel, and confirm what paperwork will be provided when the work is complete.",
  },
  faq: [
    ["How much does a heating engineer cost in Glasgow?", "Costs vary between diagnostics, repairs, boiler replacement and full-system work. Give the appliance details and symptoms so quotes relate to the same task."],
    ["Can I use this page for a boiler repair?", "Yes. Boiler faults, radiator problems, controls and larger heating upgrades can all be posted in this category."],
    ["Do Glasgow smoke-control rules matter for a wood-burning stove?", "Yes. Glasgow is covered by a Smoke Control Area, so the appliance and fuel must comply with the applicable smoke-control rules."],
    ["Does every heating job need a Scottish building warrant?", "No. Some work in houses can be exempt from the warrant requirement, but building standards still apply and larger associated alterations may need a warrant."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Glasgow?",
    copy: "Describe the system, fault or upgrade once, then compare interested Glasgow heating engineers and their quotes.",
    buttonLabel: "Get Glasgow heating quotes",
  },
});
