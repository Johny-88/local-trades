import { makeDudleyProfile } from "./dudleyProfileBase";

export const bathroomSpecialistsDudley = makeDudleyProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom, shower room or wet room in Dudley? Describe the layout, sanitaryware, tiling and any plumbing, ventilation or electrical changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Dudley?",
    copy: "Enter the postcode and explain whether the room is a like-for-like refit or a layout change. Include photos or plans, shower type, sanitaryware, tile areas and any drainage, ventilation or electrical changes so suitable Dudley bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Dudley bathroom Building Control",
    title: "Drainage, sanitary fittings and electrical changes can make a bathroom more than a cosmetic refit",
    intro: "Dudley Building Control says the Regulations can apply to drains, washing facilities, sanitary conveniences and electrical work. The correct scope therefore depends on what is changing behind the finished bathroom, not only the tiles and sanitaryware.",
    items: [
      {
        title: "Sanitary and drainage work can fall within Building Regulations",
        text: "Dudley Council lists drains, washing facilities, sanitary conveniences and certain controlled services among work that can require Building Regulations approval. A layout change can therefore have a different compliance route from a straightforward like-for-like replacement.",
        source: {
          label: "Dudley Council — Building Regulations approval",
          url: "https://www.dudley.gov.uk/residents/planning/building-control/apply-for-building-control/do-i-need-building-regulations-approval-for-a-specific-proposal/",
        },
      },
      {
        title: "Electrical work is specifically identified by Dudley Building Control",
        text: "Dudley Council says installation or replacement of electrical wiring can require Building Regulations approval. Agree how electrical certification or competent-person notification will be handled before the bathroom is closed up and tiled.",
        source: {
          label: "Dudley Council — Building Regulations approval",
          url: "https://www.dudley.gov.uk/residents/planning/building-control/apply-for-building-control/do-i-need-building-regulations-approval-for-a-specific-proposal/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Dudley by postcode, room size and project scope. Example areas include:",
    sideTitle: "Describe whether fixtures stay in the same positions",
    sideCopy: "A like-for-like bathroom in Coseley, a wet room in Netherton and a full layout change in Sedgley can involve very different plumbing and waterproofing. Mark where the toilet, basin, bath and shower are now and where they are moving.",
    noteLead: "The hidden work is often the expensive part.",
    noteText: "Ask whether the quote includes strip-out, disposal, plumbing, electrics, ventilation, tanking, tiling, plastering, flooring, decorating and any certification or Building Control work.",
  },
  faq: [
    ["How much does a bathroom refit cost in Dudley?", "Cost depends on room size, sanitaryware, tiling, layout changes, plumbing, electrics, ventilation and the condition of the existing room. Compare quotes against the same specification."],
    ["Does bathroom work need Building Regulations approval?", "Some work can. Dudley Council identifies drainage, sanitary fittings and electrical work among matters that may require approval."],
    ["Can I move the toilet or shower?", "Usually this is possible, but it can change drainage runs, floor build-up, ventilation and other compliance requirements. Describe the proposed layout clearly before comparing quotes."],
    ["Should waterproofing be included in a wet-room quote?", "Yes. Ask exactly what tanking or waterproofing system is proposed and whether it is included in the quoted price."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Dudley?",
    copy: "Describe the bathroom layout and finish once, then compare interested Dudley bathroom specialists and their quotes.",
    buttonLabel: "Get Dudley bathroom quotes",
  },
});

export const drainageSpecialistsDudley = makeDudleyProfile("drainage-specialists", {
  heroCopy: "Need a drainage specialist in Dudley for a blockage, overflowing drain, CCTV survey or recurring drainage problem? Describe the symptoms and affected fixtures once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Dudley?",
    copy: "Enter the postcode and explain whether the problem affects one fixture, several drains, an external manhole or the whole property. Mention smells, slow flow, backing-up water, flooding and any recent building work so suitable Dudley drainage specialists can assess the likely cause.",
  },
  localContext: {
    eyebrow: "Dudley drainage responsibility",
    title: "First identify whether the problem is a private drain, a shared/public sewer or highway drainage",
    intro: "Dudley Council separates responsibility between the property owner, Severn Trent Water and the council's highway drainage service. Working out where the problem starts can prevent paying a private contractor to investigate infrastructure owned by someone else.",
    items: [
      {
        title: "Private drains inside the property boundary are the owner's responsibility",
        text: "Dudley says the owner or occupier is responsible for maintaining and clearing a drain within the property's curtilage. Once a drain becomes a lateral outside the boundary or a shared sewer, responsibility generally passes to Severn Trent Water.",
        source: {
          label: "Dudley Council — drains and sewer responsibilities",
          url: "https://www.dudley.gov.uk/residents/environment/flooding-drainage-and-sewerage/drains-and-sewer-responsibilities/",
        },
      },
      {
        title: "Road gullies and public sewers have different owners",
        text: "Dudley Council maintains street drains and gullies on the public highway, while Severn Trent Water is responsible for public sewers in the borough. Several houses backing up together is therefore a different starting point from one blocked private drain.",
        source: {
          label: "Dudley Council — flooding, drainage and sewerage",
          url: "https://www.dudley.gov.uk/residents/environment/flooding-drainage-and-sewerage/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Dudley by postcode, blockage type and urgency. Example areas include:",
    sideTitle: "Describe exactly what backs up and when",
    sideCopy: "A single blocked sink in Woodsetton, repeated external drain flooding in Lower Gornal and several toilets backing up in Brierley Hill point to different likely causes. Note which fixtures are affected and whether the problem changes during heavy rain.",
    noteLead: "A quick unblock may not explain a recurring problem.",
    noteText: "For repeated blockages, ask whether the quote includes CCTV inspection, root or scale removal, locating defects and a written recommendation for repair if damage is found.",
  },
  faq: [
    ["Who is responsible for a blocked drain in Dudley?", "It depends where the blockage is. Private drains within the property boundary are generally the owner's responsibility, public/shared sewers are generally Severn Trent Water's, and highway gullies are maintained by Dudley Council."],
    ["How much does drain unblocking cost in Dudley?", "Cost depends on access, blockage severity, equipment, emergency timing and whether CCTV, jetting or repair work is needed."],
    ["When should I contact Severn Trent rather than a private contractor?", "If several properties are affected or the problem appears to be in a shared/public sewer, Dudley Council directs residents to Severn Trent Water."],
    ["When is a CCTV drain survey useful?", "It is especially useful for recurring blockages, suspected cracks, roots, displaced joints or before major drainage repair work."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Dudley?",
    copy: "Describe the drainage symptoms and access once, then compare interested Dudley drainage specialists and their quotes.",
    buttonLabel: "Get Dudley drainage quotes",
  },
});
