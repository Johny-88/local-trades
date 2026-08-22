import { makeRochdaleProfile } from "./rochdaleProfileBase";

export const bathroomSpecialistsRochdale = makeRochdaleProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower-room upgrade or new bathroom in Rochdale? Describe the room, fittings, layout and service changes once, then compare bathroom specialists who cover your postcode.",
  answer: {
    title: "Looking for a bathroom specialist near you in Rochdale?",
    copy: "Enter the postcode, room size, existing and proposed layout, fittings and whether the job changes plumbing, drainage, electrics, ventilation or walls. Photos and a simple plan help suitable Rochdale bathroom specialists price the same scope.",
  },
  localContext: {
    eyebrow: "Rochdale bathroom compliance",
    title: "Drainage, waste fittings and electrical changes can make a bathroom project more than a cosmetic refit",
    intro: "Rochdale Council lists several common bathroom-related works among proposals that may need Building Regulations approval. In HMOs, bathroom and sanitary facilities also form part of the council's suitability standards.",
    items: [
      {
        title: "New waste appliances, drainage and some electrical work can need Building Regulations approval",
        text: "Rochdale Council lists installation of new waste appliances, new drainage and electrical works among common proposals that may require approval, subject to competent-person exemptions where applicable.",
        source: {
          label: "Rochdale Borough Council — work requiring Building Regulations approval",
          url: "https://www.rochdale.gov.uk/building-control-regulations/building-regulation-approval-requirements",
        },
      },
      {
        title: "HMO suitability standards cover bathrooms, toilets, washbasins and showers",
        text: "Rochdale Council says the standards used to assess whether a licensed HMO is reasonably suitable include the number, type and quality of bathrooms, toilets, washbasins and showers.",
        source: {
          label: "Rochdale Borough Council — HMO licensing conditions and criteria",
          url: "https://www.rochdale.gov.uk/private-landlords/apply-landlord-licence/2",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Rochdale by postcode, room size and project scope. Example areas include:",
    sideTitle: "Describe every service change, not just the new suite",
    sideCopy: "A shower replacement in Milnrow, a full bathroom in Middleton and an HMO bathroom upgrade in Rochdale can have very different drainage, electrical and ventilation requirements.",
    noteLead: "Waterproofing and preparation should be explicit in the quote.",
    noteText: "State whether the price must include strip-out, plumbing, electrics, ventilation, boarding, waterproofing, tiling, flooring, decoration and waste disposal.",
  },
  faq: [
    ["How much does a bathroom refit cost in Rochdale?", "Cost depends on room size, fittings, layout changes, plumbing, drainage, electrics, ventilation, tiling and preparation."],
    ["Can bathroom work need Building Regulations approval?", "Yes. Rochdale Council lists new waste appliances, new drainage and electrical work among common proposals that can require approval."],
    ["Do HMO bathroom standards matter in Rochdale?", "Yes. Rochdale Council says HMO suitability standards include bathrooms, toilets, washbasins and showers."],
    ["Should I tell the fitter if I am moving the toilet or shower?", "Yes. Moving waste or drainage connections materially changes the job and can affect approval, floor build-up and access."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Rochdale?",
    copy: "Describe the bathroom, layout and service changes once, then compare interested Rochdale bathroom specialists and their quotes.",
    buttonLabel: "Get Rochdale bathroom quotes",
  },
});

export const drainageSpecialistsRochdale = makeRochdaleProfile("drainage-specialists", {
  heroCopy: "Need help with blocked drains, recurring smells, damaged pipework, gullies or drainage alterations in Rochdale? Describe the symptoms and location once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Rochdale?",
    copy: "Enter the postcode, where the problem appears, whether it affects one fitting or several, and any history of flooding, root ingress or previous repairs. Mention whether the suspected issue is inside your boundary, at a road gully or in a public sewer.",
  },
  localContext: {
    eyebrow: "Rochdale drainage responsibilities",
    title: "Road gullies, public sewer problems and new private drainage fall under different responsibilities",
    intro: "Before paying for excavation or jetting, identify which part of the drainage system is affected. Rochdale Council distinguishes road-gully maintenance from United Utilities infrastructure, while new drainage work can also require Building Regulations approval.",
    items: [
      {
        title: "Rochdale Council maintains road gullies, while United Utilities handles public water and sewer infrastructure outside property boundaries",
        text: "The council says it is responsible for road gullies that collect water from roads and pavements, while United Utilities is responsible for foul and clean-water infrastructure outside a property boundary such as in public roads, footpaths or fields.",
        source: {
          label: "Rochdale Borough Council — manhole covers, drains and gullies",
          url: "https://www.rochdale.gov.uk/parking-roads-transport/report-flooding-manhole-covers-drains-gully-problems",
        },
      },
      {
        title: "Installation of new drainage can require Building Regulations approval",
        text: "Rochdale Council lists installation and fitting of new drainage among common proposals requiring Building Regulations approval. That matters when a repair becomes a reroute, new connection or wider bathroom or extension project.",
        source: {
          label: "Rochdale Borough Council — work requiring Building Regulations approval",
          url: "https://www.rochdale.gov.uk/building-control-regulations/building-regulation-approval-requirements",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Rochdale by postcode, symptom and access. Example areas include:",
    sideTitle: "Identify whether the problem is private, highway or public sewer related",
    sideCopy: "A blocked kitchen drain in Heywood, a road-gully issue in Castleton and wastewater backing up from a public sewer in Rochdale need different routes to resolution.",
    noteLead: "Ask what diagnostic work is included before excavation.",
    noteText: "For recurring blockages, compare quotes for jetting, CCTV inspection, tracing, root cutting, repairs and reinstatement rather than accepting an excavation price without diagnosis.",
  },
  faq: [
    ["How much does drain unblocking cost in Rochdale?", "Cost depends on access, blockage type, equipment, CCTV inspection, excavation, pipe repair and reinstatement."],
    ["Who maintains road gullies in Rochdale?", "Rochdale Council says it maintains road gullies that collect water from roads and pavements."],
    ["Who handles wastewater or sewer flooding?", "Rochdale Council directs wastewater or sewer flooding reports to United Utilities."],
    ["Can new drainage work need Building Regulations approval?", "Yes. Rochdale Council lists installation of new drainage among common works requiring approval."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Rochdale?",
    copy: "Describe the drainage symptoms, location and history once, then compare interested Rochdale drainage specialists and their quotes.",
    buttonLabel: "Get Rochdale drainage quotes",
  },
});
