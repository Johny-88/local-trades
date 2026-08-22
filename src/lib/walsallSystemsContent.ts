import { makeWalsallProfile } from "./walsallProfileBase";

export const tilersWalsall = makeWalsallProfile("tilers", {
  heroCopy: "Need a tiler in Walsall for a bathroom, kitchen, floor or repair? Describe the surfaces, tile type, approximate area and preparation required once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Walsall?",
    copy: "Enter the postcode, room, approximate square metres and tile format. Mention old-tile removal, levelling, waterproofing, underfloor heating and damaged backgrounds so suitable Walsall tilers can quote the same scope.",
  },
  localContext: {
    eyebrow: "Walsall alteration checks",
    title: "The visible tiling may be only one part of a regulated refurbishment",
    intro: "A simple tile replacement is different from a project that also moves walls, changes structure or forms part of a larger bathroom or kitchen alteration. Walsall Building Control says most alterations and new building work need to comply with Building Regulations.",
    items: [
      {
        title: "Structural alterations commonly need Building Regulations approval",
        text: "Walsall Council lists structural alterations, including knocking down walls, among work that commonly requires Building Regulations approval. If tiling follows structural or other regulated work, confirm the wider approval position before finishes conceal it.",
        source: {
          label: "Walsall Council — check if you need building regulations approval",
          url: "https://go.walsall.gov.uk/planning-and-building-control/building-control/check-if-you-need-building-regulations-approval",
        },
      },
      {
        title: "Agree who removes renovation waste",
        text: "GOV.UK's waste duty-of-care guidance says construction and renovation waste produced by a tradesperson is business waste and the tradesperson is responsible for removing and disposing of it correctly. Clarify whether old tiles, adhesive and packaging are included in the quote.",
        source: {
          label: "GOV.UK — waste duty of care code of practice",
          url: "https://www.gov.uk/government/publications/waste-duty-of-care-code-of-practice/waste-duty-of-care-code-of-practice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Walsall by postcode, tile type and job size. Example areas include:",
    sideTitle: "Describe the background as well as the tile",
    sideCopy: "A splashback in Aldridge, a wet-room floor in Bloxwich and a large-format floor in Streetly can need very different preparation. State whether the substrate is plaster, board, screed, concrete or an existing tiled surface.",
    noteLead: "Preparation can change the job more than the tile area.",
    noteText: "Loose backgrounds, uneven floors, tanking, decoupling membranes and removal of old finishes should be identified before comparing quotes.",
  },
  faq: [
    ["How much does a tiler cost in Walsall?", "Pricing depends on tile size, layout, preparation, cutting, access and whether old finishes must be removed. Compare quotes against the same measured scope."],
    ["Do I need Building Regulations approval just to replace tiles?", "A straightforward tile finish may not need approval, but the wider project can. Structural alterations and other regulated work should be checked separately."],
    ["Who should remove old tiles and waste?", "Agree this in the quote. Waste produced by a tradesperson during renovation is generally their business waste and must be handled correctly."],
    ["Can I post a small tile repair?", "Yes. Replacing damaged tiles, regrouting and smaller splashbacks can be posted as well as full-room tiling."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Walsall?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Walsall tilers and their quotes.",
    buttonLabel: "Get Walsall tiling quotes",
  },
});

export const heatingEngineersWalsall = makeWalsallProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Walsall for a boiler, radiator, controls or heating fault? Describe the system, fuel, symptoms and urgency once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Walsall?",
    copy: "Enter the postcode, heating type and problem. Include boiler make and model where known, fault codes, hot-water symptoms, radiator issues and any planned upgrades so suitable Walsall heating engineers can assess the job.",
  },
  localContext: {
    eyebrow: "Walsall smoke-control rules",
    title: "Wood-burning and multi-fuel stove work needs an extra local air-quality check",
    intro: "Walsall Council says most of the borough is within a smoke control area, with some exceptions. This matters when a heating job involves a stove, open fire or other solid-fuel appliance rather than a conventional boiler or radiator repair.",
    items: [
      {
        title: "Most of Walsall is covered by smoke-control rules",
        text: "The council says most of Walsall Borough falls within a smoke control area and provides a map for checking individual locations. If the project involves burning solid fuel, confirm the property position and the rules for authorised fuels or exempt appliances.",
        source: {
          label: "Walsall Council — smoke control areas",
          url: "https://go.walsall.gov.uk/people-and-communities/protecting-our-environment/smoke-control-areas",
        },
      },
      {
        title: "New or replacement stoves also engage Building Regulations",
        text: "Walsall states that Building Regulations apply to new or replacement multi-fuel and wood-burning stoves. A competent person can self-certify; otherwise a building regulation application is needed before work starts.",
        source: {
          label: "Walsall Council — smoke control areas",
          url: "https://go.walsall.gov.uk/people-and-communities/protecting-our-environment/smoke-control-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Walsall by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the engineer enough system detail to triage the visit",
    sideCopy: "A boiler fault in Willenhall, cold radiators in Pelsall and a stove project near Brownhills are very different jobs. Include fuel type, controls, fault codes and whether heating or hot water has failed completely.",
    noteLead: "For gas work, use an appropriately registered engineer.",
    noteText: "For stove or solid-fuel work, also check the property's smoke-control status and how Building Regulations compliance will be certified.",
  },
  faq: [
    ["How much does a heating engineer cost in Walsall?", "It depends on the fault, system type, parts, access and whether the work is repair, servicing or installation. Describe the symptoms clearly before comparing quotes."],
    ["Is Walsall a smoke control area?", "Walsall Council says most of the borough is within smoke control areas, but there are some exceptions, so check the property location."],
    ["Do Building Regulations apply to a new wood-burning stove?", "Yes. Walsall says new or replacement multi-fuel and wood-burning stoves are subject to Building Regulations."],
    ["Should I include the boiler fault code?", "Yes. The make, model and displayed fault code can help an engineer understand the likely problem before attending."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Walsall?",
    copy: "Describe the heating system and fault once, then compare interested Walsall heating engineers and their quotes.",
    buttonLabel: "Get Walsall heating quotes",
  },
});
