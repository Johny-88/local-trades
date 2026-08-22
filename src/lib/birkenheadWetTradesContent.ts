import { makeBirkenheadProfile } from "./birkenheadProfileBase";

export const bathroomSpecialistsBirkenhead = makeBirkenheadProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom renovation, shower room or wet room in Birkenhead? Describe the room, fixtures, layout and finish once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Birkenhead?",
    copy: "Enter the postcode, room size, current layout and required sanitaryware, tiling, plumbing, electrics, ventilation and decorating. Mention any layout or drainage changes so suitable Birkenhead bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Wirral bathroom alterations and Building Control",
    title: "A bathroom refit can become regulated building work when the job includes structural, drainage or other significant changes",
    intro: "Replacing sanitaryware in the same positions is different from moving walls, changing drainage or creating a new wet room. Wirral Council provides Building Notice and Full Plans routes for relevant domestic building work.",
    items: [
      {
        title: "Building Notice can be used for many domestic alterations and extensions",
        text: "Wirral Council says a Building Notice may be submitted for domestic alterations and extensions. Because this route does not receive the same plan assessment as Full Plans, the owner or developer remains responsible for ensuring the work complies with Building Regulations.",
        source: {
          label: "Wirral Council — Building Notice",
          url: "https://www.wirral.gov.uk/planning-and-building/building-control/types-applications/building-notice",
        },
      },
      {
        title: "Concealed drainage can be an inspection stage",
        text: "Wirral's inspection guidance includes drainage prior to backfilling among the stages that may need a Building Control visit. If a bathroom layout change alters regulated drainage, coordinate inspections before floors and finishes conceal the work.",
        source: {
          label: "Wirral Council — Building Regulation inspections",
          url: "https://www.wirral.gov.uk/planning-and-building/building-control/building-regulation-inspections",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Birkenhead by postcode, room size and project scope. Example areas include:",
    sideTitle: "Give every contractor the same layout brief",
    sideCopy: "A like-for-like bathroom in Prenton, a shower room in Tranmere and a wet-room conversion in Oxton can differ greatly in drainage, waterproofing, ventilation and electrical work.",
    noteLead: "Waterproofing and ventilation belong in the quote.",
    noteText: "Ask who is responsible for tanking, falls, extraction, electrical zones, plumbing pressure checks, making good and waste removal rather than comparing sanitaryware fitting alone.",
  },
  faq: [
    ["How much does a bathroom renovation cost in Birkenhead?", "Cost depends on room size, sanitaryware, layout changes, plumbing, electrics, tiling, waterproofing, ventilation and finish."],
    ["Does every bathroom refit need Building Control?", "No. Cosmetic like-for-like work may not, but structural, drainage and other regulated changes can require approval."],
    ["Can a Building Notice be used for domestic alterations in Wirral?", "Yes, for many domestic alterations and extensions, although the correct route depends on the work and Building Notice plans are not formally checked in the same way as Full Plans."],
    ["Can I post a small shower replacement?", "Yes. Small repairs and replacements can be posted alongside full bathroom and wet-room projects."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Birkenhead?",
    copy: "Describe the room, layout and full fitting scope once, then compare interested Birkenhead bathroom specialists and their quotes.",
    buttonLabel: "Get Birkenhead bathroom quotes",
  },
});

export const drainageSpecialistsBirkenhead = makeBirkenheadProfile("drainage-specialists", {
  heroCopy: "Blocked drain, recurring overflow, damaged pipework or a drainage project in Birkenhead? Describe the symptoms, location and history once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Birkenhead?",
    copy: "Enter the postcode, affected fixtures or drains, whether the problem is inside or outside and any previous jetting, CCTV or repair work. Suitable Birkenhead drainage specialists can then assess the same symptoms.",
  },
  localContext: {
    eyebrow: "Birkenhead drainage and flood responsibility",
    title: "Private drains, public sewers and highway flooding have different responsible bodies in Wirral",
    intro: "A household blockage, a public-sewer problem and surface-water flooding are not the same job. Wirral Council separates these responsibilities and also acts as the Lead Local Flood Authority for local flood risk.",
    items: [
      {
        title: "Private-property drain problems are the homeowner or landlord's responsibility",
        text: "Wirral Council says problems with drains on private property are the responsibility of the homeowner or landlord, while flooding from public sewers should be reported to the relevant water company. Establish which pipe or drain is affected before commissioning repair work.",
        source: {
          label: "Wirral Council — report flooding",
          url: "https://www.wirral.gov.uk/environmental-problems/report-flooding",
        },
      },
      {
        title: "Wirral Council is the Lead Local Flood Authority",
        text: "The council says it acts as Wirral's Lead Local Flood Authority and investigates local flooding where it considers this necessary or appropriate. Surface-water pooling, ordinary watercourses and sewer blockages should therefore be described separately when requesting a drainage quote.",
        source: {
          label: "Wirral Council — flood monitoring and reports",
          url: "https://www.wirral.gov.uk/communities-and-neighbourhoods/emergencies/flood-monitoring-and-reports",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Birkenhead by postcode, symptom and access. Example areas include:",
    sideTitle: "Say whether the problem is foul, rainwater or surface water",
    sideCopy: "A blocked kitchen line in Rock Ferry, a recurring external gully issue in Tranmere and surface-water pooling in Claughton can need different equipment and investigation.",
    noteLead: "Recurring blockages usually need more than another guess.",
    noteText: "If a drain repeatedly blocks, mention previous jetting, CCTV results, root ingress, damaged pipework, shared runs and any nearby building work so the specialist can price investigation as well as clearance.",
  },
  faq: [
    ["How much does a drainage specialist cost in Birkenhead?", "Cost depends on access, blockage location, equipment, CCTV, jetting, excavation, pipe repair and whether emergency attendance is needed."],
    ["Who is responsible for drains on private property in Wirral?", "Wirral Council says private-property drain problems are the responsibility of the homeowner or landlord."],
    ["Who manages local flood risk in Wirral?", "Wirral Council acts as the Lead Local Flood Authority for local flood risk."],
    ["Can I post a recurring blockage rather than an emergency?", "Yes. Include how often it happens and what previous contractors have already tried."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Birkenhead?",
    copy: "Describe the drainage symptoms and history once, then compare interested Birkenhead drainage specialists and their quotes.",
    buttonLabel: "Get Birkenhead drainage quotes",
  },
});
