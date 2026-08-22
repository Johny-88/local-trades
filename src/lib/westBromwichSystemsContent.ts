import { makeWestBromwichProfile } from "./westBromwichProfileBase";

export const tilersWestBromwich = makeWestBromwichProfile("tilers", {
  heroCopy: "Planning wall or floor tiling in West Bromwich? Describe the rooms, approximate area, tile type, substrate and preparation once, then compare tilers who cover your postcode.",
  answer: {
    title: "Looking for a tiler near you in West Bromwich?",
    copy: "Enter the postcode, room dimensions or approximate square metres, tile size and material, current surface and whether removal, levelling, waterproofing or underfloor-heating preparation is required.",
  },
  localContext: {
    eyebrow: "West Bromwich tiling and renovation checks",
    title: "Tiling can sit inside wider bathroom or kitchen work that needs Building Regulations approval",
    intro: "A straightforward finish replacement may be simple, but changes to room layouts, plumbing or facilities can bring the wider project within Building Regulations.",
    items: [
      {
        title: "Sandwell says most building projects need Building Regulations approval",
        text: "Sandwell Council explains that Building Regulations are separate from planning permission and apply to most building work. If tiling is part of a wider remodel, check the whole project rather than the tile finish alone.",
        source: {
          label: "Sandwell Council — building regulations",
          url: "https://www.sandwell.gov.uk/buildingregs",
        },
      },
      {
        title: "New kitchen or bathroom facilities in HMOs can trigger Building Regulations",
        text: "Sandwell's HMO standards guidance says approval is likely to be required for conversion work such as additional kitchen or bathroom facilities needing waste connections, and for layout changes involving walls, doors or windows.",
        source: {
          label: "Sandwell Council — HMO standards and amenities guide",
          url: "https://www.sandwell.gov.uk/downloads/file/3179/sandwell-council-standards-and-amenities-guide-for-houses-in-multiple-occupation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover West Bromwich by postcode, tile type and room. Example areas include:",
    sideTitle: "Describe preparation, not just the finished tiles",
    sideCopy: "A splashback in Greets Green, a bathroom in Great Barr and a large-format floor near West Bromwich town centre can require completely different preparation. State the substrate, existing covering and whether levels or waterproofing need correction.",
    noteLead: "Preparation often decides whether the finish lasts.",
    noteText: "Ask each tiler to price removal, disposal, levelling, membranes, trims, grout and sealing on the same basis so quotes are genuinely comparable.",
  },
  faq: [
    ["How much does tiling cost in West Bromwich?", "Cost depends on tile size and material, layout, substrate condition, preparation, access and whether old finishes need removing."],
    ["Does replacing tiles always need Building Regulations approval?", "Not necessarily. But wider bathroom, kitchen, plumbing or layout changes may require approval, so assess the full project."],
    ["Can new HMO bathrooms or kitchens trigger Building Regulations?", "Yes. Sandwell's HMO guidance specifically notes additional kitchen or bathroom facilities with waste connections as work likely to require approval."],
    ["Should I tell the tiler about underfloor heating?", "Yes. It affects preparation, adhesives, movement joints and the installation sequence."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in West Bromwich?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested West Bromwich tilers and their quotes.",
    buttonLabel: "Get West Bromwich tiling quotes",
  },
});

export const heatingEngineersWestBromwich = makeWestBromwichProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control, cylinder or heating-system work in West Bromwich? Describe the system, fault and property once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in West Bromwich?",
    copy: "Enter the postcode, current boiler or heating type, symptoms, property size and whether you need repair, replacement or a new installation. Mention any chimney, flue or solid-fuel element so the scope is clear.",
  },
  localContext: {
    eyebrow: "West Bromwich heating and smoke control",
    title: "All of Sandwell is now covered by a single Smoke Control Area",
    intro: "Solid-fuel and wood-burning choices need checking carefully in West Bromwich because Sandwell replaced its older separate orders with one borough-wide Smoke Control Order.",
    items: [
      {
        title: "The whole of Sandwell has been a Smoke Control Area since 1 July 2024",
        text: "Sandwell Council says its borough-wide Smoke Control Order applies across all of Sandwell and includes boats. Visible chimney smoke is restricted and unauthorised solid fuels cannot be burned unless used in a Defra-exempt appliance.",
        source: {
          label: "Sandwell Council — Smoke Control Areas",
          url: "https://www.sandwell.gov.uk/consumer-advice/air-quality/6",
        },
      },
      {
        title: "Gas appliance work should be carried out by a Gas Safe registered engineer",
        text: "Sandwell Council's safety guidance tells residents to use a Gas Safe registered engineer for new gas appliance installations and stresses the importance of maintaining gas appliances safely.",
        source: {
          label: "Sandwell Council — health and safety guidance",
          url: "https://www.sandwell.gov.uk/leaseholder-handbook/health-safety",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover West Bromwich by postcode, system type and urgency. Example areas include:",
    sideTitle: "Describe the fuel, appliance and flue route",
    sideCopy: "A boiler fault in Charlemont, radiator changes in Hateley Heath and a solid-fuel appliance near Newton are different jobs. Give appliance details, fuel type, controls, flue route and symptoms.",
    noteLead: "Smoke-control rules matter when changing solid-fuel appliances.",
    noteText: "If the project involves wood, coal, a stove, chimney or flue, tell the engineer at the start so appliance suitability and compliance can be checked before work begins.",
  },
  faq: [
    ["How much does a heating engineer cost in West Bromwich?", "Cost depends on the fault, appliance, parts, system condition, access and whether the job is repair, replacement or installation."],
    ["Is West Bromwich in a Smoke Control Area?", "Yes. Sandwell Council says the whole borough has been covered by one Smoke Control Area since 1 July 2024."],
    ["Can I burn ordinary wood in an open fireplace in West Bromwich?", "Smoke-control rules restrict fuels and appliances. Check the council and Defra requirements before using solid fuel or wood."],
    ["Should gas appliance work be done by a Gas Safe engineer?", "Yes. Sandwell Council advises using a Gas Safe registered engineer for gas appliance installation and servicing."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in West Bromwich?",
    copy: "Describe the heating system, fault and fuel or flue requirements once, then compare interested West Bromwich heating engineers and their quotes.",
    buttonLabel: "Get West Bromwich heating quotes",
  },
});
