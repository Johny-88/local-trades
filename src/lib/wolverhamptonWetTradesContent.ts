import { makeWolverhamptonProfile } from "./wolverhamptonProfileBase";

export const bathroomSpecialistsWolverhampton = makeWolverhamptonProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit in Wolverhampton? Describe the room, layout, sanitaryware and service changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Wolverhampton?",
    copy: "Enter the postcode, room size and whether you need a full refit or selected work. Mention drainage moves, electrics, ventilation, tanking, tiling and accessibility needs so suitable Wolverhampton bathroom specialists can quote the same scope.",
  },
  localContext: {
    eyebrow: "Wolverhampton bathroom and Building Control context",
    title: "Bathroom alterations are specifically recognised within the city's Building Regulations framework",
    intro: "Wolverhampton Building Control covers sanitary appliances, drainage, ventilation, electrical safety and other controlled work, and the current local fee schedule specifically lists alterations to create a WC, bathroom or shower room.",
    items: [
      {
        title: "The wider bathroom alteration can require Building Regulations approval",
        text: "The council's Building Control guidance covers hygiene, sanitary appliances, drainage, ventilation and electrical safety. If the project moves waste pipes, changes ventilation, alters structure or includes notifiable electrics, establish the approval and certification route before finishes are installed.",
        source: {
          label: "City of Wolverhampton Council — about Building Regulations",
          url: "https://www.wolverhampton.gov.uk/planning/building-regulations/about-building-regulations",
        },
      },
      {
        title: "Wolverhampton's current fee schedule explicitly includes bathroom and shower-room alterations",
        text: "The current domestic-alteration schedule includes work to create a WC, bathroom or shower room. The exact approval route depends on the project, but the local schedule is a useful signal that a full bathroom refit can involve more than finish work alone.",
        source: {
          label: "City of Wolverhampton Council — Building Regulation charges",
          url: "https://www.wolverhampton.gov.uk/sites/default/files/2025-11/fee-charges-from-1st-December-2025.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Wolverhampton by postcode and project size. Example areas include:",
    sideTitle: "Describe layout changes, not just the new suite",
    sideCopy: "Keeping everything in the same position is very different from moving a toilet, shower, soil connection or ventilation route. Show the existing room and proposed layout.",
    noteLead: "Waterproofing and ventilation belong in the scope.",
    noteText: "Ask how tanking, extraction, substrate preparation and testing are handled rather than comparing only sanitaryware and tiles.",
  },
  faq: [
    ["How much does a bathroom refit cost in Wolverhampton?", "Cost depends on room size, sanitaryware, layout changes, plumbing, electrics, tiling, ventilation and preparation. Compare like-for-like scopes."],
    ["Does a bathroom refit need Building Regulations approval?", "Some work can. Drainage, ventilation, structural changes and certain electrical work are controlled, so the route depends on the actual scope."],
    ["Can I keep the existing bathroom layout to reduce cost?", "Often yes. Keeping waste, water and electrical positions can reduce labour and disruption compared with a complete reconfiguration."],
    ["Should tanking be included in the quote?", "Where waterproofing is needed, ask exactly which areas are tanked, what system is used and whether preparation is included."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Wolverhampton?",
    copy: "Describe the room, layout and service changes once, then compare interested Wolverhampton bathroom specialists and their quotes.",
    buttonLabel: "Get Wolverhampton bathroom quotes",
  },
});

export const drainageSpecialistsWolverhampton = makeWolverhamptonProfile("drainage-specialists", {
  heroCopy: "Need help with a blocked drain, recurring backup, damaged pipe or drainage investigation in Wolverhampton? Describe the symptoms and property once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Wolverhampton?",
    copy: "Enter the postcode, where the problem appears, when it started and whether it affects one fixture or several. Mention flooding, smells, rodent activity, previous repairs or shared drains so suitable Wolverhampton drainage specialists can plan the right investigation.",
  },
  localContext: {
    eyebrow: "Wolverhampton drainage and flood-risk context",
    title: "Current city flood-risk evidence makes surface-water behaviour worth separating from a simple blockage",
    intro: "Wolverhampton's Strategic Flood Risk Assessment was updated again in 2026 and distinguishes local flood and drainage constraints. For homeowners, the practical point is to separate a private pipe blockage from wider surface-water, sewer or site-drainage issues before choosing a repair.",
    items: [
      {
        title: "Wolverhampton's latest SFRA evidence was updated in 2026",
        text: "The council's current flood-risk page publishes the 2024 Strategic Flood Risk Assessment together with May 2026 updates. If a property has repeated garden, driveway or ground-floor flooding, a drainage specialist should understand whether the immediate defect is part of a broader surface-water or flood-risk pattern.",
        source: {
          label: "City of Wolverhampton Council — Strategic Flood Risk Assessment 2024 and 2026 updates",
          url: "https://www.wolverhampton.gov.uk/planning/planning-policies/wolverhampton-strategic-flood-risk-assessment-2024",
        },
      },
      {
        title: "Building Control treats drainage as a regulated part of building work",
        text: "Wolverhampton Building Control lists sanitary appliances and drainage among the principal areas covered by Building Regulations. If a drainage repair is part of an extension, bathroom move or larger alteration, establish whether the work also needs Building Control approval or inspection.",
        source: {
          label: "City of Wolverhampton Council — about Building Regulations",
          url: "https://www.wolverhampton.gov.uk/planning/building-regulations/about-building-regulations",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Wolverhampton by postcode, urgency and system type. Example areas include:",
    sideTitle: "Describe the pattern, not just the latest blockage",
    sideCopy: "A single slow sink, several backing-up fixtures, a flooded inspection chamber and repeated surface-water flooding point to different investigations. Say what happens, where and under what conditions.",
    noteLead: "Recurring problems usually need diagnosis before repair.",
    noteText: "Ask whether the quote includes CCTV, jetting, tracing, excavation or only an initial clearance so you know what happens if the blockage returns.",
  },
  faq: [
    ["How much does drain unblocking cost in Wolverhampton?", "It depends on access, blockage location, equipment, urgency and whether CCTV or excavation is needed. Compare quotes for the same diagnostic scope."],
    ["Does Wolverhampton publish flood-risk information?", "Yes. The council publishes its 2024 Strategic Flood Risk Assessment together with 2026 updates and mapping evidence."],
    ["Why does a drain keep blocking?", "Recurring problems can come from roots, damaged or displaced pipes, poor falls, grease, wipes or shared-system issues. A camera survey may be more useful than repeated clearing."],
    ["Can drainage work need Building Regulations approval?", "Yes in some building projects. Drainage is one of the areas controlled by Building Regulations, especially where it forms part of wider alterations."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Wolverhampton?",
    copy: "Describe the symptoms and property once, then compare interested Wolverhampton drainage specialists and their quotes.",
    buttonLabel: "Get Wolverhampton drainage quotes",
  },
});
