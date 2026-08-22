import { makeBootleProfile } from "./bootleProfileBase";

export const bathroomSpecialistsBootle = makeBootleProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom renovation, shower room or wet room in Bootle? Describe the room, fixtures, layout and finish once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Bootle?",
    copy: "Enter the postcode, room size, current layout and required sanitaryware, tiling, plumbing, electrics, ventilation and decorating. Mention any layout or drainage changes so suitable Bootle bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Bootle bathroom alterations and Building Control",
    title: "Moving drainage or changing the structure can turn a cosmetic bathroom refit into regulated building work",
    intro: "Replacing sanitaryware in the same positions is different from moving waste pipes, altering floors or walls or creating a new wet room. Sefton Council's Building Control guidance sets out when domestic work can use a Building Notice and when a fuller application is appropriate.",
    items: [
      {
        title: "Building Notice is intended for simpler domestic work",
        text: "Sefton says a Building Notice can be used for many domestic projects and is recommended for minor internal work or simple extensions. More complex alterations can be better suited to Full Plans, especially where technical details need checking before work starts.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
      {
        title: "A Building Notice cannot be used in every situation",
        text: "Sefton's Building Regulations guidance states that a Building Notice cannot be used where proposed work is within three metres of a public sewer. If a Bootle bathroom layout change affects drainage near a public sewer, establish the approval route before floors or walls are closed up.",
        source: {
          label: "Sefton Council — Building Regulations guidance",
          url: "https://www.sefton.gov.uk/media/4528/building-control-e-form-final.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Bootle by postcode, room size and project scope. Example areas include:",
    sideTitle: "Give every contractor the same layout brief",
    sideCopy: "A like-for-like bathroom in Ford, a shower room in Litherland and a wet-room conversion in Netherton can differ greatly in drainage, waterproofing, ventilation and electrical work.",
    noteLead: "Waterproofing and ventilation belong in the quote.",
    noteText: "Ask who is responsible for tanking, falls, extraction, electrical zones, plumbing pressure checks, making good and waste removal rather than comparing sanitaryware fitting alone.",
  },
  faq: [
    ["How much does a bathroom renovation cost in Bootle?", "Cost depends on room size, sanitaryware, layout changes, plumbing, electrics, tiling, waterproofing, ventilation and finish."],
    ["Does every bathroom refit need Building Control?", "No. Cosmetic like-for-like work may not, but structural, drainage and other regulated changes can require approval."],
    ["Can a Building Notice always be used for bathroom work?", "No. Sefton guidance says a Building Notice cannot be used where proposed work is within three metres of a public sewer, among other exclusions."],
    ["Can I post a small shower replacement?", "Yes. Small repairs and replacements can be posted alongside full bathroom and wet-room projects."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Bootle?",
    copy: "Describe the room, layout and full fitting scope once, then compare interested Bootle bathroom specialists and their quotes.",
    buttonLabel: "Get Bootle bathroom quotes",
  },
});

export const drainageSpecialistsBootle = makeBootleProfile("drainage-specialists", {
  heroCopy: "Blocked drain, recurring overflow, damaged pipework or a drainage project in Bootle? Describe the symptoms, location and history once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Bootle?",
    copy: "Enter the postcode, affected fixtures or drains, whether the problem is inside or outside and any previous jetting, CCTV or repair work. Suitable Bootle drainage specialists can then assess the same symptoms.",
  },
  localContext: {
    eyebrow: "Bootle drainage and flood responsibility",
    title: "Sefton is the Lead Local Flood Authority for surface water, groundwater and ordinary watercourses, while household sewer problems can involve different owners",
    intro: "A blocked foul drain, a damaged private pipe and surface-water flooding are different jobs. Sefton Council leads on local flood risk from surface water, groundwater and ordinary watercourses, while public sewer responsibility can sit elsewhere.",
    items: [
      {
        title: "Sefton leads on local flood risk rather than every drainage problem",
        text: "Sefton's flood-risk guidance says the council is the Lead Local Flood Authority for local sources such as surface water, groundwater and ordinary watercourses. For a Bootle property, describe whether the issue is foul drainage, rainwater or wider surface-water flooding so the right responsibility can be identified.",
        source: {
          label: "Sefton Council — Sustainable Drainage and Flood Risk information note",
          url: "https://www.sefton.gov.uk/media/3497/flood-risk-information-note-fulldoc.pdf",
        },
      },
      {
        title: "Work within three metres of a public sewer affects the Building Control route",
        text: "Sefton's Building Regulations guidance says a Building Notice cannot be used where proposed work is within three metres of a public sewer. Extensions and major drainage alterations should therefore establish sewer positions before excavation or construction begins.",
        source: {
          label: "Sefton Council — Building Regulations guidance",
          url: "https://www.sefton.gov.uk/media/4528/building-control-e-form-final.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Bootle by postcode, symptom and access. Example areas include:",
    sideTitle: "Say whether the problem is foul, rainwater or surface water",
    sideCopy: "A blocked kitchen line in Linacre, a recurring external gully issue in Seaforth and surface-water pooling in Litherland can need different equipment and investigation.",
    noteLead: "Recurring blockages usually need more than another guess.",
    noteText: "If a drain repeatedly blocks, mention previous jetting, CCTV results, root ingress, damaged pipework, shared runs and any nearby building work so the specialist can price investigation as well as clearance.",
  },
  faq: [
    ["How much does a drainage specialist cost in Bootle?", "Cost depends on access, blockage location, equipment, CCTV, jetting, excavation, pipe repair and whether emergency attendance is needed."],
    ["Who manages local flood risk in Sefton?", "Sefton Council is the Lead Local Flood Authority for local sources including surface water, groundwater and ordinary watercourses."],
    ["Why does a public sewer matter for building work?", "Sefton guidance says a Building Notice cannot be used where proposed work is within three metres of a public sewer."],
    ["Can I post a recurring blockage rather than an emergency?", "Yes. Include how often it happens and what previous contractors have already tried."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Bootle?",
    copy: "Describe the drainage symptoms and history once, then compare interested Bootle drainage specialists and their quotes.",
    buttonLabel: "Get Bootle drainage quotes",
  },
});
