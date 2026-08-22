import { makePlymouthProfile } from "./plymouthProfileBase";

export const bathroomSpecialistsPlymouth = makePlymouthProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom replacement or refurbishment in Plymouth? Describe the room, fixtures, layout and finish once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Plymouth?",
    copy: "Enter the postcode, room size and whether you need a simple refit or a full redesign. Mention drainage moves, ventilation, electrical work, tanking, accessibility and tiling so suitable Plymouth bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Plymouth bathroom and compliance context",
    title: "Bathrooms combine plumbing, drainage, ventilation and electrical work that can cross into regulated building services",
    intro: "Plymouth City Council specifically lists plumbing and water-supply systems, bathrooms and sanitary ware, electrical work, ventilation and heating among work that can fall within Building Regulations or competent-person certification.",
    items: [
      {
        title: "Registered competent persons can self-certify some bathroom-related work",
        text: "The council's competent-person guidance includes plumbing and water-supply systems, bathrooms and sanitary ware, electrical installations and mechanical ventilation. For a full bathroom refit, ask which contractor is responsible for each regulated element and what completion evidence will be issued.",
        source: {
          label: "Plymouth City Council — competent person scheme",
          url: "https://www.plymouth.gov.uk/competent-person-scheme",
        },
      },
      {
        title: "Plymouth's HMO standards set specific expectations for bathrooms and shared facilities",
        text: "The council's HMO standards include bathroom, toilet and wash-hand-basin provision, along with drainage and ventilation requirements. If a bathroom project is inside an HMO, give the specialist the occupancy and shared-facility context rather than treating it as an ordinary single-family bathroom.",
        source: {
          label: "Plymouth City Council — HMO standards",
          url: "https://www.plymouth.gov.uk/hmo-standards",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Plymouth by postcode, room size and project scope. Example areas include:",
    sideTitle: "Describe every service being moved",
    sideCopy: "Replacing a suite in the same positions is a different job from moving a soil pipe, adding a shower circuit, changing ventilation or rebuilding floors. List those changes before comparing quotes.",
    noteLead: "Waterproofing and ventilation matter as much as the finish.",
    noteText: "Ask what tanking, extraction, substrate preparation, plumbing and electrical certification are included rather than comparing only tiles and sanitary ware.",
  },
  faq: [
    ["How much does a bathroom refit cost in Plymouth?", "Cost depends on room size, fixtures, layout changes, plumbing, electrical work, ventilation, preparation and finishes. Compare quotes on the same full scope."],
    ["Can bathroom work need Building Regulations approval?", "Yes. Drainage, electrical, ventilation, structural and other regulated elements can require compliance even when the visible project is simply called a bathroom refit."],
    ["Can some bathroom work be self-certified?", "Yes, where the installer belongs to an appropriate competent-person scheme for the specific work involved."],
    ["Do HMO bathrooms have extra standards?", "Plymouth's HMO standards include requirements for shared bathrooms, toilets, drainage and related facilities, so occupancy matters in HMO projects."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Plymouth?",
    copy: "Describe the room, layout and regulated service changes once, then compare interested Plymouth bathroom specialists and their quotes.",
    buttonLabel: "Get Plymouth bathroom quotes",
  },
});

export const drainageSpecialistsPlymouth = makePlymouthProfile("drainage-specialists", {
  heroCopy: "Need help with blocked drains, recurring smells, damaged pipework or surface-water drainage in Plymouth? Describe the symptoms and affected area once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Plymouth?",
    copy: "Enter the postcode and explain whether the problem is a blockage, slow drainage, flooding, damaged pipework, foul smell or recurring rodent issue. Mention inspection covers, recent building work and whether the problem affects one property or several.",
  },
  localContext: {
    eyebrow: "Plymouth flood and drainage context",
    title: "Most of Plymouth is classed as a Critical Drainage Area, so surface-water management is a real local constraint",
    intro: "Plymouth City Council is the Lead Local Flood Authority and says most of the city lies within a Critical Drainage Area where the drainage network is considered at or close to capacity. The city is also actively building flood-relief and sustainable-drainage schemes in places with repeated surface-water problems.",
    items: [
      {
        title: "Most of Plymouth sits within a Critical Drainage Area",
        text: "The council says most of Plymouth is in an Environment Agency-defined Critical Drainage Area, where existing drainage is considered at or close to capacity. For extensions, paving and drainage alterations, that makes runoff routes and surface-water design worth checking rather than assuming more water can simply be sent into the existing system.",
        source: {
          label: "Plymouth City Council — development and drainage guidance",
          url: "https://www.plymouth.gov.uk/guidance-developments-and-new-builds",
        },
      },
      {
        title: "Current flood-relief work shows repeated surface-water pressure in Lipson Vale",
        text: "The council completed the Trefusis Park Flood Relief Scheme in July 2026 to store excess storm water and better protect 147 homes, particularly around Bernice Terrace and Lipson Vale. For properties with repeat surface-water flooding, tell the drainage specialist the history and rainfall conditions rather than reporting only the latest blockage.",
        source: {
          label: "Plymouth City Council — Trefusis Park Flood Relief Scheme",
          url: "https://www.plymouth.gov.uk/trefusis-park-flood-relief-scheme",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Plymouth by postcode, drainage type and urgency. Example areas include:",
    sideTitle: "Separate foul drainage from surface water",
    sideCopy: "A blocked kitchen drain, collapsed private pipe, overflowing manhole and repeated rainwater flooding are different problems. Explain whether the issue occurs in dry weather, after heavy rain or across several properties.",
    noteLead: "Private drains remain the property owner's responsibility.",
    noteText: "Plymouth's flood-reporting guidance says flooding caused by private drains is the owner's responsibility, so identifying whether the defect is private, shared or public is an important first step.",
  },
  faq: [
    ["How much does drain unblocking cost in Plymouth?", "Cost depends on access, blockage type, equipment, CCTV investigation and whether excavation or repair is needed. Ask what diagnosis and follow-up are included."],
    ["Why does Plymouth's Critical Drainage Area status matter?", "It means much of the city's existing drainage is considered at or close to capacity, so new or altered surface-water drainage may need tighter control."],
    ["Who is responsible for a private drain?", "Plymouth City Council says flooding caused by private drains is the responsibility of the property owner."],
    ["Should I mention if flooding only happens in heavy rain?", "Yes. That can point toward surface-water capacity or runoff rather than an ordinary foul-drain blockage."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Plymouth?",
    copy: "Describe the symptoms, drainage type and flooding history once, then compare interested Plymouth drainage specialists and their quotes.",
    buttonLabel: "Get Plymouth drainage quotes",
  },
});
