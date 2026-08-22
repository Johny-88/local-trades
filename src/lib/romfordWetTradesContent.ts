import { makeRomfordProfile } from "./romfordProfileBase";

export const bathroomSpecialistsRomford = makeRomfordProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom, shower room or wet room in Romford? Describe the layout, sanitaryware, tiling and any plumbing, ventilation or electrical changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Romford?",
    copy: "Enter the postcode and explain whether the room is a like-for-like refit or a layout change. Include photos or plans, shower type, sanitaryware, tile areas and any drainage, ventilation or electrical changes so suitable Romford bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Romford bathroom Building Control",
    title: "Drainage, ventilation and electrical changes can make a bathroom more than a cosmetic refit",
    intro: "Havering Building Control lists ventilation, drainage, water efficiency and electrical safety among Building Regulations matters. A straightforward replacement can therefore become a regulated project when services or the room layout change.",
    items: [
      {
        title: "Building Regulations cover several parts of bathroom work",
        text: "Havering says Building Regulations apply to altered buildings and cover matters including ventilation, drainage, water efficiency and electrical safety. Ask the bathroom specialist which parts of the proposed work need notification, certification or Building Control involvement.",
        source: {
          label: "London Borough of Havering — building control advice",
          url: "https://www.havering.gov.uk/building-control/building-control-advice",
        },
      },
      {
        title: "Work near a public sewer can change the application route",
        text: "Havering says a building notice can suit minor internal work, but if a building or extension is near a public sewer a full plans application is needed unless the relevant water company has granted consent to build over or near the sewer and that consent is supplied.",
        source: {
          label: "London Borough of Havering — building regulation approval",
          url: "https://www.havering.gov.uk/building-control/apply-building-regulation-approval",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Romford by postcode, room size and project scope. Example areas include:",
    sideTitle: "Describe whether fixtures stay in the same positions",
    sideCopy: "A like-for-like bathroom in Collier Row, a wet room in Harold Wood and a full layout change in Gidea Park can involve very different plumbing and waterproofing. Mark where the toilet, basin, bath and shower are now and where they are moving.",
    noteLead: "The hidden work is often the expensive part.",
    noteText: "Ask whether the quote includes strip-out, disposal, plumbing, electrics, ventilation, tanking, tiling, plastering, flooring, decorating and any certification or Building Control work.",
  },
  faq: [
    ["How much does a bathroom refit cost in Romford?", "Cost depends on room size, sanitaryware, tiling, layout changes, plumbing, electrics, ventilation and the condition of the existing room. Compare quotes against the same specification."],
    ["Does bathroom work need Building Regulations approval?", "Some work can. Havering lists ventilation, drainage, water efficiency and electrical safety among regulated matters, so check the actual scope."],
    ["Can I move the toilet or shower?", "Usually this is possible, but it can change drainage runs, floor build-up and ventilation requirements. Describe the proposed layout clearly before comparing quotes."],
    ["Should waterproofing be included in a wet room quote?", "Yes. Ask exactly what tanking or waterproofing system is proposed and whether it is included in the quoted price."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Romford?",
    copy: "Describe the bathroom layout and finish once, then compare interested Romford bathroom specialists and their quotes.",
    buttonLabel: "Get Romford bathroom quotes",
  },
});

export const drainageSpecialistsRomford = makeRomfordProfile("drainage-specialists", {
  heroCopy: "Need a drainage specialist in Romford for a blockage, overflowing drain, CCTV survey or recurring drainage problem? Describe the symptoms and affected fixtures once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Romford?",
    copy: "Enter the postcode and explain whether the problem affects one fixture, several drains, an external manhole or the whole property. Mention smells, slow flow, backing-up water, flooding and any recent building work so suitable Romford drainage specialists can assess the likely cause.",
  },
  localContext: {
    eyebrow: "Romford drainage responsibility",
    title: "First work out whether the problem sits in a private drain, the public sewer or the highway drainage system",
    intro: "Havering separates responsibility between private drains, council-maintained highway drains and water-company public sewers. Identifying where the blockage or flooding starts can save paying a private contractor to investigate infrastructure owned by someone else.",
    items: [
      {
        title: "Private drains are the property owner's problem to arrange",
        text: "Havering says overflowing private drains or sewers need a drainage contractor. If it is unclear whether the blockage is private or public, the council advises contacting Thames Water, which can determine responsibility after a site visit.",
        source: {
          label: "London Borough of Havering — drains, flooded roads, rivers and streams",
          url: "https://www.havering.gov.uk/environmental-issues/hazards-pollution-flooding/6",
        },
      },
      {
        title: "Public sewers and road drains have different owners",
        text: "Havering says it is responsible for drains on public roads, while Thames Water owns and manages the public foul and surface-water sewer network in most of the borough. That distinction matters when deciding who should attend an overflowing manhole or flooded road.",
        source: {
          label: "London Borough of Havering — drains, flooded roads, rivers and streams",
          url: "https://www.havering.gov.uk/environmental-issues/hazards-pollution-flooding/6",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Romford by postcode, blockage type and urgency. Example areas include:",
    sideTitle: "Describe exactly what backs up and when",
    sideCopy: "A single blocked sink in Rise Park, repeated external drain flooding in Rush Green and several toilets backing up in Harold Hill point to different likely causes. Note which fixtures are affected and whether the problem changes during heavy rain.",
    noteLead: "A quick unblock may not explain a recurring problem.",
    noteText: "For repeated blockages, ask whether the quote includes CCTV inspection, root or scale removal, locating defects and a written recommendation for repair if damage is found.",
  },
  faq: [
    ["Who is responsible for a blocked drain in Romford?", "It depends where the blockage is. Havering says private drains need a drainage contractor, public sewers are generally managed by Thames Water and highway drains are the council's responsibility."],
    ["How much does drain unblocking cost in Romford?", "Cost depends on access, blockage severity, equipment, emergency timing and whether CCTV, jetting or repair work is needed."],
    ["Should I call Thames Water first?", "If you suspect a public sewer problem or are unsure whether a blockage is public or private, Havering advises contacting Thames Water."],
    ["When is a CCTV drain survey useful?", "It is especially useful for recurring blockages, suspected cracks, roots, displaced joints or before major drainage repair work."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Romford?",
    copy: "Describe the drainage symptoms and access once, then compare interested Romford drainage specialists and their quotes.",
    buttonLabel: "Get Romford drainage quotes",
  },
});
