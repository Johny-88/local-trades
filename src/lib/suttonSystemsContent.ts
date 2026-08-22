import { makeSuttonProfile } from "./suttonProfileBase";

export const tilersSutton = makeSuttonProfile("tilers", {
  heroCopy: "Need a tiler in Sutton for a bathroom, kitchen, floor or repair? Describe the surfaces, tile type, approximate area and preparation required once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Sutton?",
    copy: "Enter the postcode, room, approximate square metres and tile format. Mention old-tile removal, levelling, waterproofing, underfloor heating and damaged backgrounds so suitable Sutton tilers can quote the same scope.",
  },
  localContext: {
    eyebrow: "Sutton refurbishment checks",
    title: "Tiling can sit on top of regulated alterations or older materials that need checking before preparation begins",
    intro: "A straightforward tile replacement is different from a bathroom or kitchen remodel that changes walls, rooms or services. Sutton's current Building Control schedule and asbestos guidance both show why the hidden scope should be established before finishes cover it.",
    items: [
      {
        title: "Sutton's Building Control schedule includes new bathrooms and structural alterations",
        text: "The council's 2026/27 Building Control charging schedule specifically lists formation of a new bathroom, shower room or cloakroom and removal of a load-bearing wall among alterations to existing dwellings. If tiling is part of that wider work, clarify the Building Regulations route before finishing surfaces are installed.",
        source: {
          label: "London Borough of Sutton — Building Control charging schedule 2026/27",
          url: "https://www.sutton.gov.uk/documents/d/guest/building-control-charging-schedule-2026_27",
        },
      },
      {
        title: "Do not sand, drill or strip suspected asbestos materials",
        text: "Sutton warns that asbestos risk increases when material is drilled, sawn, scrubbed or sanded and advises householders not to work on suspected asbestos until expert advice has been obtained. That matters before removing old boards, panels or finishes during surface preparation.",
        source: {
          label: "London Borough of Sutton — disposing of asbestos safely",
          url: "https://www.sutton.gov.uk/environment/environmental-health/disposing-asbestos-safely",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Sutton by postcode, tile type and job size. Example areas include:",
    sideTitle: "Describe the background as well as the tile",
    sideCopy: "A splashback in Wallington, a wet-room floor in Carshalton and large-format flooring in Cheam can need very different preparation. State whether the substrate is plaster, board, screed, concrete or an existing tiled surface.",
    noteLead: "Preparation can change the job more than the tile area.",
    noteText: "Loose backgrounds, uneven floors, tanking, old finishes and structural or service changes should be identified before comparing quotes.",
  },
  faq: [
    ["How much does a tiler cost in Sutton?", "Pricing depends on tile size, layout, preparation, cutting, access and whether old finishes must be removed. Compare quotes against the same measured scope."],
    ["Does replacing tiles need Building Regulations approval?", "A simple like-for-like tile replacement may not, but the wider bathroom or kitchen alteration can. Check the actual structural and services work being carried out."],
    ["Does Sutton Building Control cover new bathroom formation?", "Yes. Sutton's current domestic alteration schedule specifically includes formation of a new bathroom, shower room or cloakroom."],
    ["Should suspected asbestos be checked before tile preparation?", "Yes. Sutton advises not to drill, saw, scrub or sand suspected asbestos material and to seek expert advice first."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Sutton?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Sutton tilers and their quotes.",
    buttonLabel: "Get Sutton tiling quotes",
  },
});

export const heatingEngineersSutton = makeSuttonProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Sutton for a boiler, radiator, controls or heating fault? Describe the system, fuel, symptoms and urgency once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Sutton?",
    copy: "Enter the postcode, heating type and problem. Include boiler make and model where known, fault codes, hot-water symptoms, radiator issues and any planned upgrades so suitable Sutton heating engineers can assess the job.",
  },
  localContext: {
    eyebrow: "Sutton smoke-control rules",
    title: "Solid-fuel heating and stove work has a borough-wide Smoke Control Area check",
    intro: "Sutton Council states that the entire borough is a Smoke Control Area. That makes the fuel and appliance type especially important where a heating project involves a stove, open fire or another solid-fuel appliance rather than a conventional boiler repair.",
    items: [
      {
        title: "The entire borough is covered by smoke-control rules",
        text: "Sutton's air-quality guidance states that the whole borough is a Smoke Control Area. Before installing or altering a solid-fuel appliance, establish whether the proposed appliance and fuel comply with the smoke-control requirements for the address.",
        source: {
          label: "London Borough of Sutton — Smoke Control Area",
          url: "https://www.sutton.gov.uk/environment/pollution/report-air-quality-concern/smoke-control-area",
        },
      },
      {
        title: "Authorised fuel or an exempt appliance changes what can be burned",
        text: "The council explains that exemptions apply where authorised fuel is used or an exempt appliance is operated correctly. A heating quote involving wood or solid fuel should therefore identify the exact appliance and intended fuel rather than simply saying 'stove installation'.",
        source: {
          label: "London Borough of Sutton — Smoke Control Area",
          url: "https://www.sutton.gov.uk/environment/pollution/report-air-quality-concern/smoke-control-area",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Sutton by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the engineer enough system detail to triage the visit",
    sideCopy: "A boiler fault in Belmont, cold radiators in Worcester Park and a stove project in Cheam are very different jobs. Include fuel type, controls, fault codes and whether heating or hot water has failed completely.",
    noteLead: "For gas work, use an appropriately registered engineer.",
    noteText: "For solid-fuel work, also ask how Sutton's Smoke Control Area affects the proposed appliance and fuel before the installation is agreed.",
  },
  faq: [
    ["How much does a heating engineer cost in Sutton?", "It depends on the fault, system type, parts, access and whether the work is repair, servicing or installation. Describe the symptoms clearly before comparing quotes."],
    ["Is Sutton in a Smoke Control Area?", "Yes. Sutton Council states that the entire borough is a Smoke Control Area."],
    ["Can I install any wood-burning stove in Sutton?", "Do not assume so. Check that the appliance and fuel comply with the borough's Smoke Control Area requirements."],
    ["Should I include the boiler fault code?", "Yes. The make, model and displayed fault code can help an engineer understand the likely problem before attending."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Sutton?",
    copy: "Describe the heating system and fault once, then compare interested Sutton heating engineers and their quotes.",
    buttonLabel: "Get Sutton heating quotes",
  },
});
