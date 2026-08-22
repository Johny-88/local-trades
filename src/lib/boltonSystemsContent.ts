import { makeBoltonProfile } from "./boltonProfileBase";

export const tilersBolton = makeBoltonProfile("tilers", {
  heroCopy: "Need a tiler in Bolton for a bathroom, kitchen, floor or repair? Describe the surfaces, tile type, approximate area and preparation required once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Bolton?",
    copy: "Enter the postcode, room, approximate square metres and tile format. Mention old-tile removal, levelling, waterproofing, underfloor heating and damaged backgrounds so suitable Bolton tilers can quote the same scope.",
  },
  localContext: {
    eyebrow: "Bolton alteration checks",
    title: "The tile finish may be simple even when the work behind it is regulated",
    intro: "Replacing tiles alone is often straightforward, but a kitchen or bathroom project can also involve structural alterations, electrical work, drainage or other work covered by Building Regulations. Bolton Building Control offers full plans and building-notice routes for work that requires approval.",
    items: [
      {
        title: "Check the wider project before finishes hide the work",
        text: "Bolton Council says homeowners who have not started work can choose a full plans application or a building notice where Building Regulations approval is required. If the tiling is part of structural changes or a larger refurbishment, establish that position before backgrounds and services are covered.",
        source: {
          label: "Bolton Council — building control applications",
          url: "https://www.bolton.gov.uk/building-control/building-control-applications",
        },
      },
      {
        title: "Construction waste produced by a tradesperson is business waste",
        text: "GOV.UK's waste duty-of-care guidance says construction and renovation waste produced by a tradesperson is business waste and the tradesperson is responsible for removing and disposing of it correctly. Clarify whether old-tile strip-out and disposal are included.",
        source: {
          label: "GOV.UK — waste duty of care code of practice",
          url: "https://www.gov.uk/government/publications/waste-duty-of-care-code-of-practice/waste-duty-of-care-code-of-practice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Bolton by postcode, tile type and job size. Example areas include:",
    sideTitle: "Describe the background as well as the tile",
    sideCopy: "A splashback in Farnworth, a wet-room floor in Horwich and a large-format tiled floor in Heaton need different preparation. State whether the substrate is plaster, board, screed, concrete or an existing tiled surface.",
    noteLead: "Preparation can change the job more than the tile area.",
    noteText: "Loose backgrounds, uneven floors, tanking, decoupling membranes and removal of old finishes should be identified before comparing quotes.",
  },
  faq: [
    ["How much does a tiler cost in Bolton?", "Pricing depends on tile size, layout, preparation, cutting, access and whether old finishes must be removed. Compare quotes against the same measured scope."],
    ["Do I need Building Regulations approval just to replace tiles?", "A simple like-for-like tile finish may not need approval, but the wider project can. Check the actual structural, electrical, drainage and ventilation work involved."],
    ["Who should remove old tiles and waste?", "Agree this in the quote. GOV.UK says waste produced by a tradesperson during construction or renovation is the tradesperson's responsibility to remove and dispose of correctly."],
    ["Can I post a small tile repair?", "Yes. Replacing damaged tiles, regrouting and smaller splashbacks can be posted as well as full-room tiling."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Bolton?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Bolton tilers and their quotes.",
    buttonLabel: "Get Bolton tiling quotes",
  },
});

export const heatingEngineersBolton = makeBoltonProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Bolton for a boiler, radiator, controls or heating fault? Describe the system, fuel, symptoms and urgency once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Bolton?",
    copy: "Enter the postcode, heating type and problem. Include boiler make and model where known, fault codes, hot-water symptoms, radiator issues and any planned upgrades so suitable Bolton heating engineers can assess the job.",
  },
  localContext: {
    eyebrow: "Bolton heating and air-quality checks",
    title: "Conventional boiler work and solid-fuel or larger furnace work can have different compliance routes",
    intro: "Most domestic heating jobs are ordinary boiler, radiator or controls work, but Bolton also enforces Clean Air Act requirements for certain larger furnaces and investigates nuisance smoke. If the project involves a stove, chimney or unusual combustion appliance, define that clearly before comparing installers.",
    items: [
      {
        title: "Some larger furnaces require chimney-height approval",
        text: "Bolton Council says chimney-height approval is required under the Clean Air Act for specified furnaces, including those over stated fuel-burn or heat-input thresholds. This is not a normal domestic boiler rule, but it matters for larger or specialist combustion installations.",
        source: {
          label: "Bolton Council — Clean Air Act approval",
          url: "https://www.bolton.gov.uk/pollution/clean-air-act-approval",
        },
      },
      {
        title: "Smoke from a property can be investigated as a statutory nuisance",
        text: "Bolton Council lists smoking chimneys among typical smoke complaints and says justified statutory nuisances can lead to an abatement notice. For solid-fuel or chimney-related work, discuss appliance choice, flue condition and expected operation with the installer.",
        source: {
          label: "Bolton Council — smoke and smells",
          url: "https://www.bolton.gov.uk/pollution/smoke-smells",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Bolton by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give enough system detail to triage the visit",
    sideCopy: "A boiler fault in Little Lever, cold radiators in Westhoughton and a stove or flue project near Blackrod are very different jobs. Include fuel type, controls, fault codes and whether heating or hot water has failed completely.",
    noteLead: "For gas work, use an appropriately registered engineer.",
    noteText: "For solid-fuel, chimney or specialist combustion work, also explain the appliance and flue so the installer can identify any Building Regulations or air-quality requirements.",
  },
  faq: [
    ["How much does a heating engineer cost in Bolton?", "It depends on the fault, system type, parts, access and whether the work is repair, servicing or installation. Describe the symptoms clearly before comparing quotes."],
    ["Does every boiler need Clean Air Act chimney approval?", "No. Bolton's chimney-height approval page applies to specified larger furnaces and stated thresholds, not ordinary domestic boilers as a blanket rule."],
    ["Can Bolton Council act on nuisance chimney smoke?", "Yes. The council says smoke from chimneys can be investigated where it amounts to a statutory nuisance."],
    ["Should I include the boiler fault code?", "Yes. The make, model and displayed fault code can help an engineer understand the likely problem before attending."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Bolton?",
    copy: "Describe the heating system and fault once, then compare interested Bolton heating engineers and their quotes.",
    buttonLabel: "Get Bolton heating quotes",
  },
});
