import { makeStockportProfile } from "./stockportProfileBase";

export const tilersStockport = makeStockportProfile("tilers", {
  heroCopy: "Need a tiler in Stockport for a bathroom, kitchen, floor or repair? Describe the surfaces, tile type, approximate area and preparation required once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Stockport?",
    copy: "Enter the postcode, room, approximate square metres and tile format. Mention old-tile removal, levelling, waterproofing, underfloor heating and damaged backgrounds so suitable Stockport tilers can quote the same scope.",
  },
  localContext: {
    eyebrow: "Stockport alteration checks",
    title: "The tile finish may be simple even when the work behind it is not",
    intro: "Replacing tiles alone is often straightforward, but a bathroom or kitchen project can also involve structural alterations, electrical work, waterproofing or other regulated work. Stockport Building Control advises homeowners to check whether Building Regulations approval is needed for the wider project.",
    items: [
      {
        title: "Internal alterations can fall within Building Regulations",
        text: "Stockport's Building Control fee schedule specifically includes internal alterations and structural alterations. If the tiling forms part of moving walls, altering structure or a wider refurbishment, establish the Building Regulations position before work is covered up by finishes.",
        source: {
          label: "Stockport Council — Building Control fees: Section B",
          url: "https://www.stockport.gov.uk/building-control-fees/section-b",
        },
      },
      {
        title: "Waste produced by the tradesperson is the tradesperson's responsibility",
        text: "GOV.UK's waste duty-of-care guidance says construction and renovation waste produced by a tradesperson is business waste and the tradesperson is responsible for removing and disposing of it correctly. Clarify whether tile strip-out and disposal are included in the quote.",
        source: {
          label: "GOV.UK — waste duty of care code of practice",
          url: "https://www.gov.uk/government/publications/waste-duty-of-care-code-of-practice/waste-duty-of-care-code-of-practice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Stockport by postcode, tile type and job size. Example areas include:",
    sideTitle: "Describe the background as well as the tile",
    sideCopy: "A splashback in Cheadle, a wet-room floor in Bramhall and a large-format tiled floor in Hazel Grove need different preparation. State whether the substrate is plaster, board, screed, concrete or an existing tiled surface.",
    noteLead: "Preparation can change the job more than the tile area.",
    noteText: "Loose backgrounds, uneven floors, tanking, decoupling membranes and removal of old finishes should be identified before comparing quotes.",
  },
  faq: [
    ["How much does a tiler cost in Stockport?", "Pricing depends on tile size, layout, preparation, cutting, access and whether old finishes must be removed. Compare quotes against the same measured scope."],
    ["Do I need Building Regulations approval just to replace tiles?", "A simple like-for-like tile finish may not need approval, but the wider project can. Stockport advises homeowners to check Building Regulations requirements for the actual work being undertaken."],
    ["Who should remove old tiles and waste?", "Agree this in the quote. GOV.UK says waste produced by a tradesperson during construction or renovation is the tradesperson's responsibility to remove and dispose of correctly."],
    ["Can I post a small tile repair?", "Yes. Replacing damaged tiles, regrouting and smaller splashbacks can be posted as well as full-room tiling."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Stockport?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Stockport tilers and their quotes.",
    buttonLabel: "Get Stockport tiling quotes",
  },
});

export const heatingEngineersStockport = makeStockportProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Stockport for a boiler, radiator, controls or heating fault? Describe the system, fuel, symptoms and urgency once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Stockport?",
    copy: "Enter the postcode, heating type and problem. Include boiler make and model where known, fault codes, hot-water symptoms, radiator issues and any planned upgrades so suitable Stockport heating engineers can assess the job.",
  },
  localContext: {
    eyebrow: "Stockport smoke-control rules",
    title: "Solid-fuel and stove work has an extra local air-quality check",
    intro: "Stockport Council states that Stockport is designated as a smoke control area under the Clean Air Act. That is particularly relevant where the heating job involves a wood-burning stove, open fire or another solid-fuel appliance rather than a conventional boiler or radiator repair.",
    items: [
      {
        title: "Smoke-control rules restrict what can be burned",
        text: "Stockport says householders in a smoke control area must not allow chimney smoke unless an exempt appliance or authorised or smokeless fuel is used. If the job concerns a stove or solid-fuel appliance, confirm the appliance and fuel rules before installation or alteration.",
        source: {
          label: "Stockport Council — smoke",
          url: "https://www.stockport.gov.uk/smoke",
        },
      },
      {
        title: "Oil and solid-fuel appliance installation can also involve Building Control",
        text: "The council says Building Control consent is needed to install an oil or solid-fuel burning appliance unless the work is carried out through the relevant Competent Persons Scheme. Ask the installer how compliance and certification will be handled.",
        source: {
          label: "Stockport Council — smoke",
          url: "https://www.stockport.gov.uk/smoke",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Stockport by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the engineer enough system detail to triage the visit",
    sideCopy: "A boiler fault in Reddish, cold radiators in Cheadle Hulme and a stove project near Marple are very different jobs. Include fuel type, controls, fault codes and whether heating or hot water has failed completely.",
    noteLead: "For gas work, use an appropriately registered engineer.",
    noteText: "For solid-fuel or oil work, also ask how smoke-control requirements, Building Regulations and any competent-person certification apply to the proposed installation.",
  },
  faq: [
    ["How much does a heating engineer cost in Stockport?", "It depends on the fault, system type, parts, access and whether the work is repair, servicing or installation. Describe the symptoms clearly before comparing quotes."],
    ["Is Stockport a smoke control area?", "Yes. Stockport Council states that Stockport is designated as a smoke control area under the Clean Air Act."],
    ["Can I install any wood-burning stove in Stockport?", "Not automatically. Stockport says smoke-control rules require an exempt appliance or authorised or smokeless fuel where applicable, and Building Control requirements may also apply."],
    ["Should I include the boiler fault code?", "Yes. The make, model and displayed fault code can help an engineer understand the likely problem before attending."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Stockport?",
    copy: "Describe the heating system and fault once, then compare interested Stockport heating engineers and their quotes.",
    buttonLabel: "Get Stockport heating quotes",
  },
});
