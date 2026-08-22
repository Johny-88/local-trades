import { makeBuryProfile } from "./buryProfileBase";

export const bathroomSpecialistsBury = makeBuryProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom renovation, shower room or wet room in Bury? Describe the room, fixtures, layout and finish once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Bury?",
    copy: "Enter the postcode, room size, current layout and required sanitaryware, tiling, plumbing, electrics, ventilation and decorating. Mention any layout or drainage changes so suitable Bury bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Bury bathroom alterations and Building Control",
    title: "Moving drainage or carrying out regulated electrical work can turn a cosmetic bathroom refit into Building Regulations work",
    intro: "Replacing sanitaryware in the same positions is very different from altering drainage, structure or electrical installations. Bury Council lists these wider changes among work that can require Building Regulations approval.",
    items: [
      {
        title: "Drainage alterations are specifically listed in Bury's building guidance",
        text: "Bury Council says Building Regulations will probably apply when drainage facilities are provided, extended or altered. If the bathroom layout moves wastes or creates a new shower or wet-room arrangement, identify that before finishes are fixed.",
        source: {
          label: "Bury Council — building advice",
          url: "https://www.bury.gov.uk/planning-building-control/building-regulations/building-advice",
        },
      },
      {
        title: "Building Notice work can begin after the required notice period",
        text: "Bury Council says a Building Notice is valid for three years and work can begin two days after submission, while the site-inspection guidance also requires at least 48 hours' notice before starting work. Confirm the correct route before the job begins.",
        source: {
          label: "Bury Council — Building Regulations consent",
          url: "https://www.bury.gov.uk/planning-building-control/building-regulations/consent",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Bury by postcode, room size and project scope. Example areas include:",
    sideTitle: "Give every contractor the same layout brief",
    sideCopy: "A like-for-like bathroom in Limefield, a shower room in Chesham and a wet-room conversion in Brandlesholme can differ greatly in drainage, waterproofing, ventilation and electrical work.",
    noteLead: "Waterproofing and ventilation belong in the quote.",
    noteText: "Ask who is responsible for tanking, falls, extraction, electrical zones, plumbing pressure checks, making good and waste removal rather than comparing sanitaryware fitting alone.",
  },
  faq: [
    ["How much does a bathroom renovation cost in Bury?", "Cost depends on room size, sanitaryware, layout changes, plumbing, electrics, tiling, waterproofing, ventilation and finish."],
    ["Does every bathroom refit need Building Control?", "No. Cosmetic like-for-like work may not, but structural, drainage and regulated electrical changes can require approval."],
    ["Can moving bathroom drainage trigger Building Regulations?", "Yes. Bury Council specifically lists providing, extending or altering drainage facilities among work likely to require approval."],
    ["Can I post a small shower replacement?", "Yes. Small repairs and replacements can be posted alongside full bathroom and wet-room projects."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Bury?",
    copy: "Describe the room, layout and full fitting scope once, then compare interested Bury bathroom specialists and their quotes.",
    buttonLabel: "Get Bury bathroom quotes",
  },
});

export const drainageSpecialistsBury = makeBuryProfile("drainage-specialists", {
  heroCopy: "Blocked drain, recurring overflow, damaged pipework or a drainage project in Bury? Describe the symptoms, location and history once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Bury?",
    copy: "Enter the postcode, affected fixtures or drains, whether the problem is inside or outside and any previous jetting, CCTV or repair work. Suitable Bury drainage specialists can then assess the same symptoms.",
  },
  localContext: {
    eyebrow: "Bury drainage and flood responsibility",
    title: "Bury Council is the Lead Local Flood Authority for surface water, groundwater and ordinary watercourses",
    intro: "A household blockage and a surface-water flooding problem are not the same job. Bury Council's local flood strategy separates local flood-risk responsibilities from ordinary private drainage repairs.",
    items: [
      {
        title: "The council manages local flood risk from several sources",
        text: "Bury Council's Local Flood Risk Management Strategy identifies the council as Lead Local Flood Authority for surface water, ordinary watercourses and groundwater. Describe whether your issue is foul drainage, rainwater or wider surface-water flooding.",
        source: {
          label: "Bury Council — Local Flood Risk Management Strategy",
          url: "https://www.bury.gov.uk/asset-library/local-flood-risk-mangement-strategy-2018.pdf",
        },
      },
      {
        title: "Full Plans information can include foul and storm-water drainage",
        text: "Bury's Building Regulations guidance says Full Plans applications may need particulars of both foul-water and storm-water drainage. For extensions or major alterations, establish the drainage route before excavation or finished landscaping begins.",
        source: {
          label: "Bury Council — Building Regulations consent",
          url: "https://www.bury.gov.uk/planning-building-control/building-regulations/consent",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Bury by postcode, symptom and access. Example areas include:",
    sideTitle: "Say whether the problem is foul, rainwater or surface water",
    sideCopy: "A blocked kitchen line in Fishpool, a recurring external gully issue in Pimhole and surface-water pooling in Walmersley can need different equipment and investigation.",
    noteLead: "Recurring blockages usually need more than another guess.",
    noteText: "If a drain repeatedly blocks, mention previous jetting, CCTV results, root ingress, damaged pipework, shared runs and any nearby building work so the specialist can price investigation as well as clearance.",
  },
  faq: [
    ["How much does a drainage specialist cost in Bury?", "Cost depends on access, blockage location, equipment, CCTV, jetting, excavation, pipe repair and whether emergency attendance is needed."],
    ["Who manages local flood risk in Bury?", "Bury Council acts as Lead Local Flood Authority for local sources including surface water, groundwater and ordinary watercourses."],
    ["Does Building Control consider drainage on larger projects?", "Yes. Bury's Full Plans guidance can require details of foul-water and storm-water drainage."],
    ["Can I post a recurring blockage rather than an emergency?", "Yes. Include how often it happens and what previous contractors have already tried."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Bury?",
    copy: "Describe the drainage symptoms and history once, then compare interested Bury drainage specialists and their quotes.",
    buttonLabel: "Get Bury drainage quotes",
  },
});
