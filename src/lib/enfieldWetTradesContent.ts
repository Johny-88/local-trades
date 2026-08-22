import { makeEnfieldProfile } from "./enfieldProfileBase";

export const bathroomSpecialistsEnfield = makeEnfieldProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom renovation, shower room or wet room in Enfield? Describe the room, fixtures, layout and finish once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Enfield?",
    copy: "Enter the postcode, room size, current layout and required sanitaryware, tiling, plumbing, electrics, ventilation and decorating. Mention any layout or drainage changes so suitable Enfield bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Enfield bathroom alterations and Building Control",
    title: "Layout and drainage changes can turn a cosmetic bathroom refit into regulated building work",
    intro: "Replacing sanitaryware in the same positions is very different from moving drainage, altering structure or creating a new wet room. Enfield Council says relevant changes to existing buildings can require Building Control approval.",
    items: [
      {
        title: "Building Control is separate from planning permission",
        text: "Enfield Council says a project may need Building Control, planning permission or both. If the bathroom work includes structural changes or other regulated elements, establish the route before finishes conceal the work.",
        source: {
          label: "Enfield Council — building control applications",
          url: "https://www.enfield.gov.uk/services/planning/building-control/building-control-applications",
        },
      },
      {
        title: "Building Notice work should not start immediately after submission",
        text: "For eligible single private dwelling work using a Building Notice, Enfield states that work must not begin until two working days after an acceptable notice has been deposited. Larger or more complex projects may need a different route.",
        source: {
          label: "Enfield Council — building control applications",
          url: "https://www.enfield.gov.uk/services/planning/building-control/building-control-applications",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Enfield by postcode, room size and project scope. Example areas include:",
    sideTitle: "Give every contractor the same layout brief",
    sideCopy: "A like-for-like bathroom in Palmers Green, a shower room in Enfield Lock and a wet-room conversion in Southgate can differ greatly in drainage, waterproofing, ventilation and electrical work.",
    noteLead: "Waterproofing and ventilation belong in the quote.",
    noteText: "Ask who is responsible for tanking, falls, extraction, electrical zones, plumbing pressure checks, making good and waste removal rather than comparing sanitaryware fitting alone.",
  },
  faq: [
    ["How much does a bathroom renovation cost in Enfield?", "Cost depends on room size, sanitaryware, layout changes, plumbing, electrics, tiling, waterproofing, ventilation and finish."],
    ["Does every bathroom refit need Building Control?", "No. Cosmetic like-for-like work may not, but structural, drainage and other regulated changes can require approval."],
    ["Can I use a Building Notice for bathroom alterations?", "For eligible work to a single private dwelling it may be possible, but Enfield says the route has conditions and work must not start until two working days after an acceptable notice is deposited."],
    ["Can I post a small shower replacement?", "Yes. Small repairs and replacements can be posted alongside full bathroom and wet-room projects."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Enfield?",
    copy: "Describe the room, layout and full fitting scope once, then compare interested Enfield bathroom specialists and their quotes.",
    buttonLabel: "Get Enfield bathroom quotes",
  },
});

export const drainageSpecialistsEnfield = makeEnfieldProfile("drainage-specialists", {
  heroCopy: "Blocked drain, recurring overflow, damaged pipework or a drainage project in Enfield? Describe the symptoms, location and history once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Enfield?",
    copy: "Enter the postcode, affected fixtures or drains, whether the problem is inside or outside and any previous jetting, CCTV or repair work. Suitable Enfield drainage specialists can then assess the same symptoms.",
  },
  localContext: {
    eyebrow: "Enfield drainage and flood context",
    title: "Enfield has more than 100 kilometres of watercourses, and local development policy puts strong emphasis on surface-water management",
    intro: "A household blockage and a surface-water design problem are not the same job. Enfield has an extensive watercourse network and the council acts as Lead Local Flood Authority for local flood risk.",
    items: [
      {
        title: "Enfield has over 100 kilometres of watercourses",
        text: "Council planning material states that Enfield has more than 100 kilometres of watercourses and is responsible for local flood risk including surface-water runoff, groundwater and ordinary watercourses. Surface-water issues should be described separately from foul drainage.",
        source: {
          label: "Enfield Council — infrastructure and sustainable drainage",
          url: "https://www.enfield.gov.uk/__data/assets/pdf_file/0022/22666/Infrastructure-funding-statement-2020-2021-Planning.pdf",
        },
      },
      {
        title: "Building close to a public sewer can change the Building Control route",
        text: "Enfield says a Full Plans application is required rather than a Building Notice if building work is over or within three metres of a public sewer. For extensions or drainage alterations, establish the sewer position before work starts.",
        source: {
          label: "Enfield Council — building control applications",
          url: "https://www.enfield.gov.uk/services/planning/building-control/building-control-applications",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Enfield by postcode, symptom and access. Example areas include:",
    sideTitle: "Say whether the problem is foul, rainwater or surface water",
    sideCopy: "A blocked kitchen line in Edmonton, a recurring external gully issue in Ponders End and surface-water pooling in Bush Hill Park can need different equipment and investigation.",
    noteLead: "Recurring blockages usually need more than another guess.",
    noteText: "If a drain repeatedly blocks, mention previous jetting, CCTV results, root ingress, damaged pipework, shared runs and any nearby building work so the specialist can price investigation as well as clearance.",
  },
  faq: [
    ["How much does a drainage specialist cost in Enfield?", "Cost depends on access, blockage location, equipment, CCTV, jetting, excavation, pipe repair and whether emergency attendance is needed."],
    ["Who manages local flood risk in Enfield?", "Enfield Council acts as Lead Local Flood Authority for local sources including surface water, groundwater and ordinary watercourses."],
    ["Why does a public sewer matter for an extension?", "Enfield says building over or within three metres of a public sewer requires the Full Plans Building Control route rather than a Building Notice."],
    ["Can I post a recurring blockage rather than an emergency?", "Yes. Include how often it happens and what previous contractors have already tried."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Enfield?",
    copy: "Describe the drainage symptoms and history once, then compare interested Enfield drainage specialists and their quotes.",
    buttonLabel: "Get Enfield drainage quotes",
  },
});
