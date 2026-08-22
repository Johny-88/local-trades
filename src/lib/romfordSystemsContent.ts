import { makeRomfordProfile } from "./romfordProfileBase";

export const tilersRomford = makeRomfordProfile("tilers", {
  heroCopy: "Need a tiler in Romford for a bathroom, kitchen, floor or repair? Describe the surfaces, tile type, approximate area and preparation required once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Romford?",
    copy: "Enter the postcode, room, approximate square metres and tile format. Mention old-tile removal, levelling, waterproofing, underfloor heating and damaged backgrounds so suitable Romford tilers can quote the same scope.",
  },
  localContext: {
    eyebrow: "Romford refurbishment checks",
    title: "The visible tile finish can sit on top of work that has separate safety or Building Regulations issues",
    intro: "Havering Building Control says regulations cover altered buildings and include structural stability, damp-proofing, ventilation, drainage, glazing and electrical safety. That matters when tiling forms part of a wider bathroom or kitchen refurbishment rather than a simple like-for-like finish.",
    items: [
      {
        title: "Internal changes can still fall within Building Regulations",
        text: "Havering says Building Regulations generally apply to new, extended and altered buildings, and Building Control can advise whether the wider project needs approval. If walls, floors, drainage or electrics are changing, establish that before finishes cover the work.",
        source: {
          label: "London Borough of Havering — building control advice",
          url: "https://www.havering.gov.uk/building-control/building-control-advice",
        },
      },
      {
        title: "Older finishes should not be stripped blindly",
        text: "Havering advises that asbestos can be present in houses built before 2000 and warns against disturbing or removing suspected material without trained specialists. If old boards, panels or floor materials look suspicious, identify them before demolition or surface preparation begins.",
        source: {
          label: "London Borough of Havering — asbestos advice",
          url: "https://www.havering.gov.uk/odour",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Romford by postcode, tile type and job size. Example areas include:",
    sideTitle: "Describe the background as well as the tile",
    sideCopy: "A splashback in Gidea Park, a wet-room floor in Harold Wood and a large-format tiled floor in Collier Row need different preparation. State whether the substrate is plaster, board, screed, concrete or an existing tiled surface.",
    noteLead: "Preparation can change the job more than the tile area.",
    noteText: "Loose backgrounds, uneven floors, tanking, old finishes and service changes should be identified before comparing quotes.",
  },
  faq: [
    ["How much does a tiler cost in Romford?", "Pricing depends on tile size, layout, preparation, cutting, access and whether old finishes must be removed. Compare quotes against the same measured scope."],
    ["Do I need Building Regulations approval just to replace tiles?", "A simple tile replacement may not need approval, but the wider project can. Havering advises checking the actual building work being undertaken."],
    ["Should old wall or floor materials be checked before removal?", "Yes where there is doubt. Havering says asbestos may be present in homes built before 2000 and suspected material should not be disturbed casually."],
    ["Can I post a small tile repair?", "Yes. Replacing damaged tiles, regrouting and smaller splashbacks can be posted as well as full-room tiling."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Romford?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Romford tilers and their quotes.",
    buttonLabel: "Get Romford tiling quotes",
  },
});

export const heatingEngineersRomford = makeRomfordProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Romford for a boiler, radiator, controls or heating fault? Describe the system, fuel, symptoms and urgency once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Romford?",
    copy: "Enter the postcode, heating type and problem. Include boiler make and model where known, fault codes, hot-water symptoms, radiator issues and any planned upgrades so suitable Romford heating engineers can assess the job.",
  },
  localContext: {
    eyebrow: "Romford smoke-control rules",
    title: "Solid-fuel and stove work has an extra borough-wide air-quality check",
    intro: "Havering states that the entire borough is a Smoke Control Area. That is particularly relevant where a heating job involves a wood-burning stove, open fire or another solid-fuel appliance rather than a conventional boiler or radiator repair.",
    items: [
      {
        title: "All of Havering is in a Smoke Control Area",
        text: "The council says solid-fuel users must use authorised smokeless fuel and/or an exempt appliance, and that burning wood and coal in an open fireplace is not permitted. Confirm the appliance and fuel rules before installing or altering solid-fuel heating.",
        source: {
          label: "London Borough of Havering — air quality and Smoke Control Area",
          url: "https://www.havering.gov.uk/public-health/air-quality-1",
        },
      },
      {
        title: "Heat-producing appliances also sit within Building Regulations",
        text: "Havering lists heat-producing appliances among the matters covered by Building Regulations. For installation work, ask how compliance, commissioning and any competent-person certification will be handled rather than treating the job as a simple appliance swap.",
        source: {
          label: "London Borough of Havering — building control advice",
          url: "https://www.havering.gov.uk/building-control/building-control-advice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Romford by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the engineer enough system detail to triage the visit",
    sideCopy: "A boiler fault in Rush Green, cold radiators in Rise Park and a stove project around Harold Hill are very different jobs. Include fuel type, controls, fault codes and whether heating or hot water has failed completely.",
    noteLead: "For gas work, use an appropriately registered engineer.",
    noteText: "For solid-fuel work, also ask how Havering's Smoke Control Area and Building Regulations apply to the proposed appliance and installation.",
  },
  faq: [
    ["How much does a heating engineer cost in Romford?", "It depends on the fault, system type, parts, access and whether the work is repair, servicing or installation. Describe the symptoms clearly before comparing quotes."],
    ["Is Romford in a Smoke Control Area?", "Yes. Havering Council states that the whole borough is in a Smoke Control Area."],
    ["Can I burn wood in an open fireplace in Havering?", "Havering says burning wood and coal in an open fireplace is not permitted in the borough's Smoke Control Area."],
    ["Should I include the boiler fault code?", "Yes. The make, model and displayed fault code can help an engineer understand the likely problem before attending."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Romford?",
    copy: "Describe the heating system and fault once, then compare interested Romford heating engineers and their quotes.",
    buttonLabel: "Get Romford heating quotes",
  },
});
