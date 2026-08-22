import { makeBootleProfile } from "./bootleProfileBase";

export const tilersBootle = makeBootleProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Bootle? Describe the room, surface condition, tile type, approximate area and finish once, then compare tilers who cover your postcode.",
  answer: {
    title: "Looking for a tiler near you in Bootle?",
    copy: "Share the room dimensions, tile size and material, existing surface, pattern, trims and whether old tiles need removing. Suitable Bootle tilers can then price preparation and fitting against the same brief.",
  },
  localContext: {
    eyebrow: "Bootle alterations and Building Control",
    title: "Tiling itself is usually a finish, but the wider bathroom or kitchen alteration can require Building Regulations approval",
    intro: "A straightforward tile replacement is different from a floor rebuild, drainage change or structural alteration. Sefton Council's current Building Control guidance separates Building Notice work from larger or more complex Full Plans applications.",
    items: [
      {
        title: "Building Notices are intended for simpler domestic work",
        text: "Sefton says a Building Notice can be used for many domestic works and is recommended for minor internal projects or simple extensions, while Full Plans are recommended for larger or more complex domestic work. The right route depends on the wider alteration, not on the tile finish alone.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
      {
        title: "Plans, structural calculations and specifications may be needed for regulated work",
        text: "For work that needs formal Building Control approval, Sefton asks applicants to provide the relevant plans, calculations and technical specifications. If tiling is covering regulated construction, make sure inspections and approvals are dealt with before finishes hide the work.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Bootle by postcode, project size and tile type. Example areas include:",
    sideTitle: "Preparation usually matters more than the postcode",
    sideCopy: "A splashback in Litherland, a bathroom floor in Seaforth and a large-format tiled kitchen in Netherton can require very different levelling, waterproofing and cutting time.",
    noteLead: "Describe what is underneath the tiles.",
    noteText: "Loose boards, cracked screed, old adhesive, uneven walls and wet-area tanking can materially change the job. Photos of the existing surface make quotes more comparable.",
  },
  faq: [
    ["How much does a tiler cost in Bootle?", "Pricing depends on area, tile material and size, pattern, preparation, access, removal and finishing details. Compare like-for-like scopes."],
    ["Do I need Building Control just to replace tiles?", "Simple like-for-like tiling is normally a finishing job, but a wider alteration involving structure, drainage or other regulated work can require approval."],
    ["Should I buy tiles before choosing a tiler?", "You can, but confirm quantities, wastage, trims, adhesive and grout requirements first, especially for patterned or large-format tiles."],
    ["Can I post a small splashback job?", "Yes. Small repairs and splashbacks can be posted alongside complete bathroom, kitchen and floor tiling jobs."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Bootle?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Bootle tilers and their quotes.",
    buttonLabel: "Get Bootle tiling quotes",
  },
});

export const heatingEngineersBootle = makeBootleProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Bootle for a boiler, radiator, heating fault or system upgrade? Describe the system, symptoms and timing once, then compare professionals who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Bootle?",
    copy: "Enter the postcode, heating type, boiler or appliance details and the problem. Mention loss of heat or hot water, unusual pressure, leaks, radiator issues and any planned changes so suitable Bootle heating engineers can assess the same brief.",
  },
  localContext: {
    eyebrow: "Bootle air quality and solid-fuel heating",
    title: "South Sefton has recognised air-quality hotspots, and solid-fuel systems also need an address-specific Smoke Control Area check",
    intro: "Most Bootle heating jobs involve gas, electricity or heat pumps, but a stove or other solid-fuel appliance has additional local considerations. Sefton monitors air-quality hotspots around busy junctions in Bootle, Seaforth and Litherland and also has designated Smoke Control Areas within the borough.",
    items: [
      {
        title: "Bootle is part of South Sefton's air-quality focus",
        text: "Sefton Council says its identified air-quality hotspots are on busy junctions in Bootle, Seaforth and Litherland, where road traffic, commercial activity and other emissions contribute to local pollution. For a new heating system, appliance choice and emissions can therefore be relevant alongside running cost and performance.",
        source: {
          label: "Sefton Council — air quality",
          url: "https://sefton.gov.uk/environment/air-quality/",
        },
      },
      {
        title: "Smoke Control Area status should be checked for the exact address",
        text: "Sefton says certain districts in the borough are designated Smoke Control Areas and directs residents to the Defra resource to check whether their address is covered. A solid-fuel appliance and fuel choice should be confirmed before installation.",
        source: {
          label: "Sefton Council — Smoke Control Areas",
          url: "https://www.sefton.gov.uk/environment/pests-pollution-and-food-hygiene/pollution/smoke-control-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Bootle by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the appliance details before asking for a price",
    sideCopy: "A combi-boiler fault in Linacre, radiator balancing in Litherland and a planned stove installation near Derby Park are different jobs. Include make, model, age and symptoms where known.",
    noteLead: "Do not treat every heating job as a generic boiler callout.",
    noteText: "Fuel type, controls, cylinder setup, system pressure, existing pipework and whether the property has any heat at all can change the engineer and visit required.",
  },
  faq: [
    ["How much does a heating engineer cost in Bootle?", "Cost depends on diagnosis, system type, parts, access, urgency and whether the job is repair, servicing or installation."],
    ["Does Bootle have local air-quality hotspots?", "Yes. Sefton Council identifies hotspot areas on busy junctions in Bootle, Seaforth and Litherland."],
    ["How do I know whether my Bootle home is in a Smoke Control Area?", "Sefton Council advises checking the exact address using the Defra UK Air resource because Smoke Control Areas cover specified districts."],
    ["Can I post a no-heating or no-hot-water fault?", "Yes. Describe the symptoms, boiler or appliance details and whether the issue is intermittent or complete."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Bootle?",
    copy: "Describe the heating system and problem once, then compare interested Bootle heating engineers and their quotes.",
    buttonLabel: "Get Bootle heating quotes",
  },
});
