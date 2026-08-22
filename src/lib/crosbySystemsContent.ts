import { makeCrosbyProfile } from "./crosbyProfileBase";

export const tilersCrosby = makeCrosbyProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Crosby? Describe the room, surface condition, tile type, approximate area and finish once, then compare tilers who cover your postcode.",
  answer: {
    title: "Looking for a tiler near you in Crosby?",
    copy: "Share the room dimensions, tile size and material, existing surface, pattern, trims and whether old tiles need removing. Suitable Crosby tilers can then price preparation and fitting against the same brief.",
  },
  localContext: {
    eyebrow: "Crosby alterations and Building Control",
    title: "Tiling can form part of a larger alteration that needs Building Control even when the tile finish itself does not",
    intro: "Straightforward retiling is normally a finishing job, but bathroom, kitchen and floor projects can include drainage, structural or other regulated work. Sefton has separate Building Notice and Full Plans routes depending on the project.",
    items: [
      {
        title: "Building Notices are intended for simpler domestic work",
        text: "Sefton Council says a Building Notice can be used for domestic work in appropriate cases and recommends it for minor internal works or simple extensions. Larger or more complex projects may be better suited to Full Plans.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
      {
        title: "Full Plans are recommended for larger or more complex domestic work",
        text: "Sefton says Full Plans must be used for non-domestic buildings and buildings containing flats with shared access, and are also recommended for new dwellings and larger complex domestic extensions. If tiling is part of that wider work, give the tiler the approved build-up and specification.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Crosby by postcode, project size and tile type. Example areas include:",
    sideTitle: "Preparation usually matters more than the postcode",
    sideCopy: "A splashback in Waterloo, a bathroom floor in Crosby and large-format kitchen tiles in Blundellsands can require very different levelling, waterproofing and cutting time.",
    noteLead: "Describe what is underneath the tiles.",
    noteText: "Loose boards, cracked screed, old adhesive, uneven walls and wet-area tanking can materially change the job. Photos of the existing surface make quotes more comparable.",
  },
  faq: [
    ["How much does a tiler cost in Crosby?", "Pricing depends on area, tile material and size, pattern, preparation, access, removal and finishing details. Compare like-for-like scopes."],
    ["Do I need Building Control just to replace tiles?", "Simple like-for-like tiling is normally a finishing job, but a wider alteration involving structure, drainage or other regulated work may require Building Control."],
    ["What is the difference between a Building Notice and Full Plans?", "Sefton recommends Building Notices for simpler eligible domestic work, while Full Plans are required or recommended for more complex categories of work."],
    ["Can I post a small splashback job?", "Yes. Small repairs and splashbacks can be posted alongside complete bathroom, kitchen and floor tiling jobs."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Crosby?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Crosby tilers and their quotes.",
    buttonLabel: "Get Crosby tiling quotes",
  },
});

export const heatingEngineersCrosby = makeCrosbyProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Crosby for a boiler, radiator, heating fault or system upgrade? Describe the system, symptoms and timing once, then compare professionals who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Crosby?",
    copy: "Enter the postcode, heating type, boiler or appliance details and the problem. Mention loss of heat or hot water, unusual pressure, leaks, radiator issues and any planned changes so suitable Crosby heating engineers can assess the same brief.",
  },
  localContext: {
    eyebrow: "Sefton smoke-control checks",
    title: "Solid-fuel heating needs an address check because parts of Sefton are designated Smoke Control Areas",
    intro: "Most Crosby heating jobs involve gas, electricity or heat pumps, but stoves and other solid-fuel appliances have an extra local consideration. Sefton Council says certain districts within the borough are designated Smoke Control Areas and directs residents to check the current Defra map.",
    items: [
      {
        title: "Smoke Control Areas restrict the fuel or appliance that can be used",
        text: "Sefton Council explains that within designated Smoke Control Areas there are restrictions on the types of fuel that may be burned in a chimney. Check the exact Crosby-area address before specifying a stove or other solid-fuel appliance.",
        source: {
          label: "Sefton Council — Smoke Control Areas",
          url: "https://www.sefton.gov.uk/environment/pests-pollution-and-food-hygiene/pollution/smoke-control-areas/",
        },
      },
      {
        title: "The council points residents to Defra's current map for address checks",
        text: "Sefton does not treat every address as interchangeable; its guidance tells residents to use the UK Air resource from Defra to establish whether a property is in a Smoke Control Area. Give the engineer the exact address and proposed appliance before ordering equipment.",
        source: {
          label: "Sefton Council — Smoke Control Areas",
          url: "https://www.sefton.gov.uk/environment/pests-pollution-and-food-hygiene/pollution/smoke-control-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Crosby by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the appliance details before asking for a price",
    sideCopy: "A combi-boiler fault in Waterloo, radiator balancing in Thornton and a planned stove installation near Crosby can be very different jobs. Include make, model, age and symptoms where known.",
    noteLead: "Do not treat every heating job as a generic boiler callout.",
    noteText: "Fuel type, controls, cylinder setup, system pressure, existing pipework and whether the property has any heat at all can change the engineer and visit required.",
  },
  faq: [
    ["How much does a heating engineer cost in Crosby?", "Cost depends on diagnosis, system type, parts, access, urgency and whether the job is repair, servicing or installation."],
    ["Are there Smoke Control Areas in Sefton?", "Yes. Sefton Council says certain districts within the borough are designated Smoke Control Areas."],
    ["How do I know if my Crosby property is in a Smoke Control Area?", "Sefton Council directs residents to the current Defra UK Air resource to check the exact address."],
    ["Can I post a no-heating or no-hot-water fault?", "Yes. Describe the symptoms, boiler or appliance details and whether the issue is intermittent or complete."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Crosby?",
    copy: "Describe the heating system and problem once, then compare interested Crosby heating engineers and their quotes.",
    buttonLabel: "Get Crosby heating quotes",
  },
});
