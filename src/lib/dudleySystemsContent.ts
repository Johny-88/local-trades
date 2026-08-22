import { makeDudleyProfile } from "./dudleyProfileBase";

export const tilersDudley = makeDudleyProfile("tilers", {
  heroCopy: "Need a tiler in Dudley for a bathroom, kitchen, floor or repair? Describe the surfaces, tile type, approximate area and preparation required once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Dudley?",
    copy: "Enter the postcode, room, approximate square metres and tile format. Mention old-tile removal, levelling, waterproofing, underfloor heating and damaged backgrounds so suitable Dudley tilers can quote the same scope.",
  },
  localContext: {
    eyebrow: "Dudley refurbishment checks",
    title: "Tiling can sit on top of building work that needs separate Building Regulations approval",
    intro: "Dudley Building Control says most building work is covered by the Building Regulations. For tiling inside a wider bathroom or kitchen project, check the work behind the finish before new tiles conceal drainage, electrical or structural changes.",
    items: [
      {
        title: "Material alterations and controlled services can require approval",
        text: "Dudley says Building Regulations can apply to extensions, material alterations and the installation or alteration of controlled services and fittings. If the tiling project includes structural changes, drains, sanitary fittings or electrical work, establish the approval route before finishing surfaces are installed.",
        source: {
          label: "Dudley Council — do I need Building Regulations approval?",
          url: "https://www.dudley.gov.uk/residents/planning/building-control/apply-for-building-control/do-i-need-building-regulations-approval-for-a-specific-proposal/",
        },
      },
      {
        title: "Planning permission and Building Regulations are separate",
        text: "Dudley Council explicitly warns that planning permission and Building Regulations approval are separate requirements. A project can therefore need Building Control involvement even where planning permission is not required.",
        source: {
          label: "Dudley Council — guidance on Building Regulations",
          url: "https://www.dudley.gov.uk/residents/planning/building-control/guidance-on-building-regulations/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Dudley by postcode, tile type and job size. Example areas include:",
    sideTitle: "Describe the background as well as the tile",
    sideCopy: "A kitchen splashback in Coseley, a wet-room floor in Netherton and a large-format floor in Sedgley need different preparation. State whether the substrate is plaster, board, screed, concrete or an existing tiled surface.",
    noteLead: "Preparation can change the job more than the tile area.",
    noteText: "Loose backgrounds, uneven floors, tanking, service changes and old finishes should be identified before quotes are compared.",
  },
  faq: [
    ["How much does a tiler cost in Dudley?", "Pricing depends on tile size, layout, preparation, cutting, access and whether old finishes must be removed. Compare quotes against the same measured scope."],
    ["Do I need Building Regulations approval just to replace tiles?", "A simple like-for-like finish may not need approval, but structural, drainage, sanitary or electrical work within the wider project can."],
    ["Are planning permission and Building Regulations the same thing?", "No. Dudley Council states that they are separate requirements and a project may need one even if it does not need the other."],
    ["Can I post a small tile repair?", "Yes. Replacing damaged tiles, regrouting and smaller splashbacks can be posted as well as full-room tiling."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Dudley?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Dudley tilers and their quotes.",
    buttonLabel: "Get Dudley tiling quotes",
  },
});

export const heatingEngineersDudley = makeDudleyProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Dudley for a boiler, radiator, controls or heating fault? Describe the system, fuel, symptoms and urgency once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Dudley?",
    copy: "Enter the postcode, heating type and problem. Include boiler make and model where known, fault codes, hot-water symptoms, radiator issues and any planned upgrades so suitable Dudley heating engineers can assess the job.",
  },
  localContext: {
    eyebrow: "Dudley smoke-control rules",
    title: "The whole borough is a Smoke Control Area, which matters for stoves and solid-fuel heating",
    intro: "Dudley's Smoke Control Order covers the entire metropolitan borough. Boiler and radiator repairs are unaffected by that distinction, but stove, fireplace and solid-fuel work needs the appliance, fuel and notification route checked before installation.",
    items: [
      {
        title: "All of Dudley borough is covered by the Smoke Control Order",
        text: "Dudley Council says the Smoke Control Order 2017 has applied to the whole borough since January 2018. Solid-fuel use is restricted to authorised fuels or appropriately exempt appliances under the relevant rules.",
        source: {
          label: "Dudley Council — Smoke Control Area",
          url: "https://www.dudley.gov.uk/business/environmental-health/pollution-control/air-quality/smoke-control-order-enforcement/",
        },
      },
      {
        title: "Exempt appliances still need a compliant installation",
        text: "The council states that exempted or approved appliances must be installed in compliance with Building Regulations notification, for example through an appropriate self-certification route such as HETAS where applicable.",
        source: {
          label: "Dudley Council — Smoke Control Area",
          url: "https://www.dudley.gov.uk/business/environmental-health/pollution-control/air-quality/smoke-control-order-enforcement/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Dudley by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give enough system detail to triage the visit",
    sideCopy: "A boiler fault in Brierley Hill, cold radiators in Upper Gornal and a stove project in Sedgley are very different jobs. Include fuel type, controls, fault codes and whether heating or hot water has failed completely.",
    noteLead: "For gas work, use an appropriately registered engineer.",
    noteText: "For solid-fuel work, also ask how Dudley's Smoke Control Area and Building Regulations notification apply to the proposed appliance and installation.",
  },
  faq: [
    ["How much does a heating engineer cost in Dudley?", "It depends on the fault, system type, parts, access and whether the work is repair, servicing or installation. Describe the symptoms clearly before comparing quotes."],
    ["Is Dudley in a Smoke Control Area?", "Yes. Dudley Council says the whole metropolitan borough is covered by its Smoke Control Order."],
    ["Can I install a wood-burning stove in Dudley?", "Potentially, but the appliance, fuel and installation must comply with smoke-control and Building Regulations requirements."],
    ["Should I include the boiler fault code?", "Yes. The make, model and displayed fault code can help an engineer understand the likely problem before attending."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Dudley?",
    copy: "Describe the heating system and fault once, then compare interested Dudley heating engineers and their quotes.",
    buttonLabel: "Get Dudley heating quotes",
  },
});
