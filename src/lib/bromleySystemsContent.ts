import { makeBromleyProfile } from "./bromleyProfileBase";

export const tilersBromley = makeBromleyProfile("tilers", {
  heroCopy: "Need wall tiling, floor tiling, a bathroom finish or kitchen splashback in Bromley? Describe the surfaces, tile type and preparation once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Bromley?",
    copy: "Enter the postcode, approximate square metres and tile type. Mention old tiles, uneven surfaces, waterproofing, underfloor heating or damaged backgrounds so suitable Bromley tilers can judge preparation as well as laying.",
  },
  localContext: {
    eyebrow: "Bromley tiling and refurbishment context",
    title: "The tile finish may be simple while the wider room alteration still needs Building Regulations checks",
    intro: "Bromley's Building Control guidance separates cosmetic finishing from regulated construction. A splashback is different from a bathroom or kitchen project that changes drainage, structure, electrics or other controlled elements.",
    items: [
      {
        title: "Building Regulations can apply to alterations around the tiled area",
        text: "Bromley says building regulations cover many alterations and fittings including drains, heat-producing appliances, washing and sanitary facilities. If tiling is part of a larger refurbishment, confirm the approval route before regulated work is hidden behind finishes.",
        source: {
          label: "London Borough of Bromley — building regulations guide",
          url: "https://www.bromley.gov.uk/building-control/building-regulations-guide",
        },
      },
      {
        title: "A Building Notice can be suitable for some domestic alterations",
        text: "Bromley lists domestic internal alterations and alterations to domestic drainage among examples that may use the Building Notice route. The right route depends on the wider job, so describe drainage, wall and service changes separately from the tiles themselves.",
        source: {
          label: "London Borough of Bromley — Building Notice approval",
          url: "https://www.bromley.gov.uk/building-control/building-control-regulation-approval/3",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Bromley by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background as well as the finished tile choice",
    sideCopy: "Photos of the existing walls or floor, corners, levels and previous finishes help a tiler judge preparation. State whether tiles and trims are supplied and whether waterproofing or levelling is required.",
    noteLead: "Preparation changes the quote.",
    noteText: "Removing old tiles, repairing backgrounds, boarding, tanking and levelling can take as much planning as laying the new finish.",
  },
  faq: [
    ["How much does tiling cost in Bromley?", "The price depends on tile material, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the finish itself is not the main issue, but a wider bathroom or kitchen alteration can include regulated drainage, electrical, structural or ventilation work."],
    ["Can a Building Notice be used for domestic alterations?", "Bromley lists domestic internal alterations and some drainage alterations among examples suitable for the Building Notice route, subject to the actual project."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted as well as full bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Bromley?",
    copy: "Describe the surfaces, tile type and preparation once, then compare interested Bromley tilers and their quotes.",
    buttonLabel: "Get Bromley tiling quotes",
  },
});

export const heatingEngineersBromley = makeBromleyProfile("heating-engineers", {
  heroCopy: "Need boiler work, radiator changes, heating repairs or a system upgrade in Bromley? Describe the property, symptoms and existing system once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Bromley?",
    copy: "Enter the postcode, boiler or system type and the problem you are seeing. Mention error codes, cold radiators, pressure loss, hot-water issues or planned upgrades so suitable Bromley heating engineers can judge the likely visit.",
  },
  localContext: {
    eyebrow: "Bromley heating and smoke-control context",
    title: "Most of Bromley is inside a smoke control area, so solid-fuel heating needs an address-specific check",
    intro: "Bromley says the majority of the borough is covered by a Smoke Control Area, with specified exceptions in parts of Darwin and Chelsfield and Pratts Bottom wards. That makes the exact address relevant where a heating project involves a stove, fireplace or other solid-fuel appliance.",
    items: [
      {
        title: "The majority of the borough is smoke controlled",
        text: "Bromley states that its Smoke Control Areas cover the borough except specified parts of Darwin and Chelsfield and Pratts Bottom wards. In a controlled area, chimney smoke is regulated and fuel or appliance requirements apply, so check the property before planning solid-fuel work.",
        source: {
          label: "London Borough of Bromley — smoke control areas",
          url: "https://www.bromley.gov.uk/pollution-control-air-quality/smoke-control-areas",
        },
      },
      {
        title: "Heat-producing appliances can also fall within Building Regulations",
        text: "Bromley's Building Regulations guide says the regulations can apply to fittings such as heat-producing appliances as well as alterations to buildings. Ask the heating engineer what certification or Building Control route applies to the proposed work rather than assuming every system change is like-for-like maintenance.",
        source: {
          label: "London Borough of Bromley — building regulations guide",
          url: "https://www.bromley.gov.uk/building-control/building-regulations-guide",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Bromley by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the system details before the visit",
    sideCopy: "Share the boiler make and model if known, fuel type, number of radiators and any error code or pressure reading. If the work involves a stove or solid fuel, include the exact address for the smoke-control check.",
    noteLead: "Gas work needs the right registration.",
    noteText: "For work on gas appliances or pipework, check that the engineer is appropriately Gas Safe registered for the work being carried out.",
  },
  faq: [
    ["How much does a heating engineer cost in Bromley?", "Costs vary with the fault, system type, parts and whether the visit is planned or urgent. Clear system details make quotes easier to compare."],
    ["Is all of Bromley a smoke control area?", "No. The council says the majority is covered, with specified exceptions in parts of Darwin and Chelsfield and Pratts Bottom wards."],
    ["Can heat-producing appliances need Building Regulations approval?", "Yes. Bromley's guidance includes heat-producing appliances among work that can fall within Building Regulations."],
    ["Can I use this page for radiator work?", "Yes. Radiator replacement, valves, balancing, cold spots and planned heating upgrades can be posted alongside boiler repairs."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Bromley?",
    copy: "Describe the system and problem once, then compare interested Bromley heating engineers and their quotes.",
    buttonLabel: "Get Bromley heating quotes",
  },
});
