import { makeBristolProfile } from "./bristolProfileBase";

export const tilersBristol = makeBristolProfile("tilers", {
  heroCopy: "Planning bathroom tiles, a kitchen splashback, a tiled floor or repairs in Bristol? Describe the surfaces, tile type and finish once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Bristol?",
    copy: "Enter the postcode and explain what needs tiling, the approximate area, tile material and condition of the existing surface. Interested Bristol tilers can then judge whether the preparation and finish match their experience.",
  },
  localContext: {
    eyebrow: "Bristol tiling context",
    title: "Wet-area preparation matters more than simply covering the old surface",
    intro: "Bristol's own housing guidance highlights how failed grout and sealant can contribute to damp, while the council also reminds homeowners that some bathroom improvements can fall within building-regulation requirements.",
    items: [
      {
        title: "Cracked grout and worn sealant can allow penetrating damp",
        text: "Bristol City Council's private-renting guide lists damaged areas around sinks, showers and baths — including cracked grouting and worn-out sealant — as possible routes for penetrating damp. Before retiling, ask whether the substrate is dry, stable and properly waterproofed rather than simply covering visible damage.",
        source: {
          label: "Bristol City Council — Private Renting in Bristol",
          url: "https://www.bristol.gov.uk/files/documents/8548-final-private-housing-service-tenant-guide/file",
        },
      },
      {
        title: "Some bathroom work may need building-regulation approval",
        text: "Bristol City Council says building regulations apply to most building work and lists home improvements such as bathrooms among projects that may need approval. A straightforward tile replacement is different from altering structure, drainage, ventilation or services, so clarify the full scope before work starts.",
        source: {
          label: "Bristol City Council — approvals for building work",
          url: "https://www.bristol.gov.uk/residents/planning-and-building-regulations/check-what-approval-you-need-for-your-building-work",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Bristol by postcode, job size and tile type. Example areas include:",
    sideTitle: "Show the surface before asking for a fixed price",
    sideCopy: "Photos of the existing walls or floor, tile dimensions and approximate square metres help a tiler judge removal, levelling, waterproofing and cutting time before quoting.",
    noteLead: "Preparation is part of the tiling job.",
    noteText: "If grout, sealant or the substrate has failed because of moisture, deal with the cause before paying for a new finish.",
  },
  faq: [
    ["How much does tiling cost in Bristol?", "Prices depend on tile material, size, pattern and how much preparation is needed. MyJobQuote's current UK guidance gives around £400–£500 for roughly 8m² of floor tiling and about £500–£800 for typical bathroom tiling as broad examples."],
    ["Should damaged grout or sealant be fixed before retiling?", "Yes. Bristol's private-housing guidance identifies cracked grout and worn sealant around wet areas as possible routes for penetrating damp. The substrate should be sound and dry before a new finish is installed."],
    ["Does a bathroom tiling job need building regulations approval?", "Purely replacing tiles is different from changing structure or services, but Bristol City Council advises that bathroom improvements can fall within building-regulation requirements. Check the full project scope rather than assuming."],
    ["Can I post a small repair or regrouting job?", "Yes. The Tilers category can cover smaller repairs and regrouting as well as full wall and floor installations."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Bristol?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Bristol tilers, verified reviews and quotes.",
    buttonLabel: "Get Bristol tiling quotes",
  },
});

export const heatingEngineersBristol = makeBristolProfile("heating-engineers", {
  heroCopy: "Boiler trouble, cold radiators, heating controls or a low-carbon upgrade in Bristol? Describe the system and symptoms once, then compare heating engineers interested in the job.",
  answer: {
    title: "Looking for a heating engineer near you in Bristol?",
    copy: "Enter the postcode, boiler or heating-system details and what is going wrong. If you are considering a replacement or heat pump, include the property type and current heating so suitable Bristol engineers can judge the likely scope.",
  },
  localContext: {
    eyebrow: "Bristol heating context",
    title: "Bristol is actively shifting from individual fossil-fuel heating toward lower-carbon systems",
    intro: "The city's current Warm Homes Plan and heat-network programme mean some Bristol properties are already using heat pumps or district heating while many others still rely on individual gas systems.",
    items: [
      {
        title: "Bristol's Warm Homes Plan focuses on efficiency, heat pumps and heat networks",
        text: "Bristol City Council's Warm Homes Plan sets out a citywide programme for decarbonising homes through better energy efficiency, heat pumps and heat-network connections. The plan says around 700 council homes were heated by heat pumps and around 750 by district heat networks when the plan was prepared, while most council homes still depended on gas heating.",
        source: {
          label: "Bristol City Council — Warm Homes Plan",
          url: "https://www.bristol.gov.uk/council/policies-plans-and-strategies/find-a-policy-plan-or-strategy/policy-plan-or-strategy?id=125",
        },
      },
      {
        title: "The Bristol heat network already serves the equivalent of thousands of homes",
        text: "Bristol City Council says 35 buildings are connected to the Bristol heat network, supplying enough heat for the equivalent of almost 13,500 homes, with further connections planned. If a building is on or near a heat-network route, the long-term heating options can differ from a standard like-for-like boiler replacement.",
        source: {
          label: "Bristol City Council — climate action on heat and buildings",
          url: "https://www.bristol.gov.uk/council/policies-plans-and-strategies/our-action-on-climate-and-ecology/our-climate-action-on-buildings",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Bristol by postcode, fuel type and job urgency. Example areas include:",
    sideTitle: "Give the system details before the engineer travels",
    sideCopy: "Boiler make and model, fuel type, error codes, property size and whether every radiator is affected can help distinguish a small repair from a wider system problem.",
    noteLead: "Replacement is not the only option to compare.",
    noteText: "For a major upgrade, ask whether controls, insulation, radiator sizing, heat-pump suitability or a heat-network connection are relevant to the property.",
  },
  faq: [
    ["How much does a heating engineer cost in Bristol?", "The price depends on the fault and the system. Small diagnostic or radiator jobs can be very different from boiler replacement or a heat-pump installation, so describe the existing system clearly and compare the same scope."],
    ["Is Bristol moving away from gas boilers?", "Bristol's Warm Homes Plan is explicitly focused on reducing fossil-fuel heating through energy efficiency, heat pumps and heat networks. That does not mean every home needs the same solution today."],
    ["Does Bristol have a district heat network?", "Yes. Bristol City Council says the network currently supplies the equivalent of almost 13,500 homes across 35 connected buildings, with further expansion underway."],
    ["Should gas work be done by a registered engineer?", "Yes. Work on regulated gas systems should be carried out by an appropriately Gas Safe registered professional for the type of work involved."],
    ["Do I have to hire an engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Bristol?",
    copy: "Describe the system and symptoms once, then compare interested Bristol heating engineers, verified reviews and quotes.",
    buttonLabel: "Get Bristol heating quotes",
  },
});
