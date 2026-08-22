import { makeCrosbyProfile } from "./crosbyProfileBase";

export const bathroomSpecialistsCrosby = makeCrosbyProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom renovation, shower room or wet room in Crosby? Describe the room, fixtures, layout and finish once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Crosby?",
    copy: "Enter the postcode, room size, current layout and required sanitaryware, tiling, plumbing, electrics, ventilation and decorating. Mention any layout or drainage changes so suitable Crosby bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Crosby bathroom alterations and Building Control",
    title: "Moving drainage or altering structure can turn a cosmetic bathroom refit into regulated building work",
    intro: "Replacing sanitaryware in the same positions is very different from moving waste pipes, changing structure or creating a new wet room. Sefton uses Building Notice and Full Plans routes depending on the type of work.",
    items: [
      {
        title: "Building Notices are for eligible domestic work, not every project",
        text: "Sefton Council says a Building Notice can be used for domestic properties in appropriate cases, but it cannot be used for some categories of work. Establish the correct route before regulated drainage or structural work is covered by finished surfaces.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
      {
        title: "Work close to a public sewer can require Full Plans",
        text: "Sefton's Building Regulations guidance says a Building Notice cannot be used where proposed work is within three metres of a public sewer. If a bathroom project forms part of an extension or drainage alteration, check the sewer position early.",
        source: {
          label: "Sefton Council — Building Regulations guidance",
          url: "https://www.sefton.gov.uk/media/4528/building-control-e-form-final.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Crosby by postcode, room size and project scope. Example areas include:",
    sideTitle: "Give every contractor the same layout brief",
    sideCopy: "A like-for-like bathroom in Crosby, a shower room in Waterloo and a wet-room conversion in Blundellsands can differ greatly in drainage, waterproofing, ventilation and electrical work.",
    noteLead: "Waterproofing and ventilation belong in the quote.",
    noteText: "Ask who is responsible for tanking, falls, extraction, electrical zones, plumbing pressure checks, making good and waste removal rather than comparing sanitaryware fitting alone.",
  },
  faq: [
    ["How much does a bathroom renovation cost in Crosby?", "Cost depends on room size, sanitaryware, layout changes, plumbing, electrics, tiling, waterproofing, ventilation and finish."],
    ["Does every bathroom refit need Building Control?", "No. Cosmetic like-for-like work may not, but structural, drainage and other regulated changes can require approval."],
    ["Why does a public sewer matter for bathroom or extension work?", "Sefton's guidance says a Building Notice cannot be used where proposed work is within three metres of a public sewer, so the approval route can change."],
    ["Can I post a small shower replacement?", "Yes. Small repairs and replacements can be posted alongside full bathroom and wet-room projects."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Crosby?",
    copy: "Describe the room, layout and full fitting scope once, then compare interested Crosby bathroom specialists and their quotes.",
    buttonLabel: "Get Crosby bathroom quotes",
  },
});

export const drainageSpecialistsCrosby = makeCrosbyProfile("drainage-specialists", {
  heroCopy: "Blocked drain, recurring overflow, damaged pipework or a drainage project in Crosby? Describe the symptoms, location and history once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Crosby?",
    copy: "Enter the postcode, affected fixtures or drains, whether the problem is inside or outside and any previous jetting, CCTV or repair work. Suitable Crosby drainage specialists can then assess the same symptoms.",
  },
  localContext: {
    eyebrow: "Sefton drainage and flood responsibilities",
    title: "Surface-water problems and household drain blockages fall into different systems, and Sefton is the Lead Local Flood Authority for local flood risk",
    intro: "A blocked foul drain and persistent surface-water pooling are not the same job. Sefton Council manages local flood risk from surface water, groundwater and ordinary watercourses, while drainage defects can also contribute to local rodent problems.",
    items: [
      {
        title: "Sefton is the Lead Local Flood Authority for local sources of flooding",
        text: "Sefton's flood-risk guidance states that the council manages local flood risk from surface water, groundwater and ordinary watercourses. For persistent flooding around a Crosby property, describe whether the water appears to be rainwater, groundwater or foul drainage rather than treating every issue as a simple blockage.",
        source: {
          label: "Sefton Council — Sustainable Drainage and Flood Risk Information Note",
          url: "https://www.sefton.gov.uk/media/3497/flood-risk-information-note-fulldoc.pdf",
        },
      },
      {
        title: "Drainage defects are one of the factors Sefton checks when investigating rats",
        text: "Sefton's Environmental Public Health team says it looks for drainage defects when investigating rodent activity and works with United Utilities on sewer baiting. Repeated rats alongside recurring drainage symptoms may justify CCTV or defect investigation rather than repeated surface treatment alone.",
        source: {
          label: "Sefton Council — environmental public health",
          url: "https://www.sefton.gov.uk/environment/pests-pollution-and-food-hygiene/environmental-public-health/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Crosby by postcode, symptom and access. Example areas include:",
    sideTitle: "Say whether the problem is foul, rainwater or surface water",
    sideCopy: "A blocked kitchen line in Thornton, a recurring external gully issue in Waterloo and surface-water pooling near the coast can require different equipment and investigation.",
    noteLead: "Recurring blockages usually need more than another guess.",
    noteText: "If a drain repeatedly blocks, mention previous jetting, CCTV results, root ingress, damaged pipework, shared runs and any nearby building work so the specialist can price investigation as well as clearance.",
  },
  faq: [
    ["How much does a drainage specialist cost in Crosby?", "Cost depends on access, blockage location, equipment, CCTV, jetting, excavation, pipe repair and whether emergency attendance is needed."],
    ["Who manages local flood risk in Sefton?", "Sefton Council is the Lead Local Flood Authority for local sources including surface water, groundwater and ordinary watercourses."],
    ["Can drainage defects contribute to rodent problems?", "Yes. Sefton Council specifically lists drainage defects among the factors it investigates when looking into rodent activity."],
    ["Can I post a recurring blockage rather than an emergency?", "Yes. Include how often it happens and what previous contractors have already tried."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Crosby?",
    copy: "Describe the drainage symptoms and history once, then compare interested Crosby drainage specialists and their quotes.",
    buttonLabel: "Get Crosby drainage quotes",
  },
});
