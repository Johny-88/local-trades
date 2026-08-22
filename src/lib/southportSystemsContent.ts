import { makeSouthportProfile } from "./southportProfileBase";

export const tilersSouthport = makeSouthportProfile("tilers", {
  heroCopy: "Need a tiler in Southport for a bathroom, kitchen, floor or repair? Describe the surfaces, tile type, approximate area and preparation required once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Southport?",
    copy: "Enter the postcode, room, approximate square metres and tile format. Mention old-tile removal, levelling, waterproofing, underfloor heating and damaged backgrounds so suitable Southport tilers can quote the same scope.",
  },
  localContext: {
    eyebrow: "Southport refurbishment checks",
    title: "Tiling can be only the visible finish of a project that also needs Building Control and proper waste handling",
    intro: "A simple splashback is different from a bathroom or kitchen refurbishment involving drainage, electrics or structural alterations. Sefton provides Building Notice and Full Plans routes for regulated work, while contractor-generated renovation waste must be handled as trade waste.",
    items: [
      {
        title: "Sefton distinguishes minor domestic work from more complex projects",
        text: "Sefton says a Building Notice can be used for many domestic works and recommends it for minor internal work or simple extensions, while Full Plans are required or recommended in specified and more complex cases. Check the wider job before finishes conceal regulated work.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
      {
        title: "A contractor cannot use the household recycling route for trade waste",
        text: "Sefton states that when a contractor removes waste it becomes trade waste and is not accepted through the household recycling-centre route. Ask whether tile rubble, adhesive bags, boards and old sanitary finishes are included in the tiler's disposal price.",
        source: {
          label: "Sefton Council — local tips and recycling centres",
          url: "https://www.sefton.gov.uk/bins-recycling/local-tips-and-recycling-centres/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Southport by postcode, tile type and job size. Example areas include:",
    sideTitle: "Describe the background as well as the tile",
    sideCopy: "A splashback in Churchtown, a wet-room floor in Birkdale and large-format floor tiles in Ainsdale need different preparation. State whether the substrate is plaster, board, screed, concrete or an existing tiled surface.",
    noteLead: "Preparation can change the job more than the tile area.",
    noteText: "Loose backgrounds, uneven floors, tanking, old finishes and service changes should be identified before comparing quotes, and waste removal should be priced explicitly.",
  },
  faq: [
    ["How much does a tiler cost in Southport?", "Pricing depends on tile size, layout, preparation, cutting, access and whether old finishes must be removed. Compare quotes against the same measured scope."],
    ["Does tiling itself need Building Regulations approval?", "A straightforward finish may not, but the wider bathroom or kitchen project can. Check whether drainage, electrics, structure or other regulated work is changing."],
    ["Can my tiler take renovation waste to the household tip?", "Not as household waste if the contractor generated or removed it. Sefton says contractor waste becomes trade waste and the contractor is responsible for lawful disposal."],
    ["Can I post a small tile repair?", "Yes. Replacing damaged tiles, regrouting and smaller splashbacks can be posted as well as full-room tiling."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Southport?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Southport tilers and their quotes.",
    buttonLabel: "Get Southport tiling quotes",
  },
});

export const heatingEngineersSouthport = makeSouthportProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Southport for a boiler, radiator, controls or heating fault? Describe the system, fuel, symptoms and urgency once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Southport?",
    copy: "Enter the postcode, heating type and problem. Include boiler make and model where known, fault codes, hot-water symptoms, radiator issues and any planned upgrades so suitable Southport heating engineers can assess the job.",
  },
  localContext: {
    eyebrow: "Southport heating and clean-air checks",
    title: "Solid-fuel work needs an address-specific Smoke Control Area check as well as normal appliance compliance",
    intro: "Sefton has declared Smoke Control Areas in parts of the borough and directs residents to the Defra checker for the exact address. This matters where a Southport heating project involves a stove, open fire or other solid-fuel appliance rather than a conventional boiler repair.",
    items: [
      {
        title: "Smoke-control status varies by address within Sefton",
        text: "Sefton Council says certain districts are Smoke Control Areas and that restrictions apply to the fuels that may be burned from chimneys. Check the exact Southport address before choosing or altering a solid-fuel appliance.",
        source: {
          label: "Sefton Council — Smoke Control Areas",
          url: "https://www.sefton.gov.uk/environment/pests-pollution-and-food-hygiene/pollution/smoke-control-areas/",
        },
      },
      {
        title: "Heritage location can add another check for external alterations",
        text: "Southport includes conservation areas such as Lord Street, Promenade, North Meols and West Birkdale. If a heating upgrade changes a chimney, flue or other external feature, check the planning position as well as Building Regulations and competent-person requirements.",
        source: {
          label: "Sefton Council — conservation areas",
          url: "https://www.sefton.gov.uk/planning-building-control/conservation-and-heritage/conservation-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Southport by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the engineer enough system detail to triage the visit",
    sideCopy: "A boiler fault in High Park, cold radiators in Hillside and a stove project in Churchtown are very different jobs. Include fuel type, controls, fault codes and whether heating or hot water has failed completely.",
    noteLead: "For gas work, use an appropriately registered engineer.",
    noteText: "For solid-fuel work, also check the exact address for Smoke Control Area status and whether any external flue or chimney alteration has planning implications.",
  },
  faq: [
    ["How much does a heating engineer cost in Southport?", "It depends on the fault, system type, parts, access and whether the work is repair, servicing or installation. Describe the symptoms clearly before comparing quotes."],
    ["Is all of Southport automatically a Smoke Control Area?", "Do not assume so. Sefton says certain districts are Smoke Control Areas and directs residents to the Defra address checker."],
    ["Can a stove or flue need planning checks in Southport?", "Potentially, especially where external alterations affect a conservation-area property. Check the exact address and proposed work before installation."],
    ["Should I include the boiler fault code?", "Yes. The make, model and displayed fault code can help an engineer understand the likely problem before attending."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Southport?",
    copy: "Describe the heating system and fault once, then compare interested Southport heating engineers and their quotes.",
    buttonLabel: "Get Southport heating quotes",
  },
});
