import { makeStHelensProfile } from "./stHelensProfileBase";

export const tilersStHelens = makeStHelensProfile("tilers", {
  heroCopy: "Need a tiler in St Helens for a bathroom, kitchen, floor or repair? Describe the surfaces, tile type, approximate area and preparation required once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in St Helens?",
    copy: "Enter the postcode, room, approximate square metres and tile format. Mention old-tile removal, levelling, waterproofing, underfloor heating and damaged backgrounds so suitable St Helens tilers can quote the same scope.",
  },
  localContext: {
    eyebrow: "St Helens refurbishment checks",
    title: "Tiling can sit inside wider building work that needs separate approval",
    intro: "A straightforward tile replacement is different from a bathroom or kitchen remodel involving structure, electrics, drainage or new openings. St Helens Council tells householders to check Building Regulations before starting regulated work, even where planning permission is not needed.",
    items: [
      {
        title: "Building Regulations and planning permission are separate",
        text: "St Helens Council explains that Building Regulations set safety and construction standards and are separate from planning permission. The council advises checking approval before building work starts because a project can need one permission, both, or neither depending on the scope.",
        source: {
          label: "St Helens Borough Council — guide to planning and building control",
          url: "https://www.sthelens.gov.uk/article/3481/Your-guide-to-planning-building-Control",
        },
      },
      {
        title: "Bathrooms and electrical work are specifically listed as common regulated improvements",
        text: "The council's planning guidance says Building Regulations approval will probably be needed for home improvements such as a new bathroom, fuse box, electrical work, windows, doors, boiler or radiators. If tiling forms part of that wider project, confirm responsibility for the regulated work before finishes conceal it.",
        source: {
          label: "St Helens Borough Council — how to apply for planning permission",
          url: "https://www.sthelens.gov.uk/article/1916/How-to-apply-for-planning-permission",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover St Helens by postcode, tile type and job size. Example areas include:",
    sideTitle: "Describe the background as well as the tile",
    sideCopy: "A splashback in Eccleston, a wet-room floor in Rainhill and a large-format tiled floor in Haydock need different preparation. State whether the substrate is plaster, board, screed, concrete or an existing tiled surface.",
    noteLead: "Preparation can change the job more than the tile area.",
    noteText: "Loose backgrounds, uneven floors, tanking, old finishes and service changes should be identified before comparing quotes, especially where the wider refurbishment includes regulated work.",
  },
  faq: [
    ["How much does a tiler cost in St Helens?", "Pricing depends on tile size, layout, preparation, cutting, access and whether old finishes must be removed. Compare quotes against the same measured scope."],
    ["Do I need Building Regulations approval just to replace tiles?", "A simple like-for-like tile replacement may not, but the wider bathroom or kitchen project can. Check the actual work being carried out."],
    ["Does a new bathroom ever need Building Regulations approval in St Helens?", "Yes. St Helens Council lists a new bathroom among home improvements that will probably need Building Regulations approval."],
    ["Can I post a small tile repair?", "Yes. Replacing damaged tiles, regrouting and smaller splashbacks can be posted as well as full-room tiling."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in St Helens?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested St Helens tilers and their quotes.",
    buttonLabel: "Get St Helens tiling quotes",
  },
});

export const heatingEngineersStHelens = makeStHelensProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in St Helens for a boiler, radiator, controls or heating fault? Describe the system, fuel, symptoms and urgency once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in St Helens?",
    copy: "Enter the postcode, heating type and problem. Include boiler make and model where known, fault codes, hot-water symptoms, radiator issues and any planned upgrades so suitable St Helens heating engineers can assess the job.",
  },
  localContext: {
    eyebrow: "St Helens smoke-control rules",
    title: "Most of the borough is in a Smoke Control Zone, which matters for solid-fuel heating",
    intro: "Boiler and radiator repairs are different from stove or solid-fuel projects. St Helens Council says the vast majority of the borough is within a Smoke Control Zone, so the appliance and fuel rules should be checked before installing or altering solid-fuel heating.",
    items: [
      {
        title: "Wood and logs need an exempt appliance in a smoke-control area",
        text: "St Helens Council says unauthorised fuels such as ordinary wood, peat and bituminous house coal cannot be burned in a fireplace within a Smoke Control Area. Clean wood or logs require a Defra-approved exempt appliance.",
        source: {
          label: "St Helens Borough Council — smoke control",
          url: "https://www.sthelens.gov.uk/article/5446/Smoke-control",
        },
      },
      {
        title: "Boilers and radiators can also fall within Building Regulations",
        text: "The council's planning guidance lists new boilers and radiators among home improvements that will probably require Building Regulations approval. For installation work, ask how notification, commissioning and any competent-person certification will be handled.",
        source: {
          label: "St Helens Borough Council — how to apply for planning permission",
          url: "https://www.sthelens.gov.uk/article/1916/How-to-apply-for-planning-permission",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover St Helens by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the engineer enough system detail to triage the visit",
    sideCopy: "A boiler fault in Sutton, cold radiators in Parr and a stove project around Rainford are very different jobs. Include fuel type, controls, fault codes and whether heating or hot water has failed completely.",
    noteLead: "For gas work, use an appropriately registered engineer.",
    noteText: "For solid-fuel work, also check whether the exact property is inside a Smoke Control Area and whether the proposed appliance and fuel are permitted.",
  },
  faq: [
    ["How much does a heating engineer cost in St Helens?", "It depends on the fault, system type, parts, access and whether the work is repair, servicing or installation. Describe the symptoms clearly before comparing quotes."],
    ["Is St Helens in a Smoke Control Area?", "St Helens Council says the vast majority of the borough is within a Smoke Control Zone, with only a few areas outside it."],
    ["Can I burn wood in St Helens?", "Within a Smoke Control Area, clean wood or logs must be used in a Defra-approved exempt appliance. Check the exact address before relying on the general borough position."],
    ["Should I include the boiler fault code?", "Yes. The make, model and displayed fault code can help an engineer understand the likely problem before attending."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in St Helens?",
    copy: "Describe the heating system and fault once, then compare interested St Helens heating engineers and their quotes.",
    buttonLabel: "Get St Helens heating quotes",
  },
});
