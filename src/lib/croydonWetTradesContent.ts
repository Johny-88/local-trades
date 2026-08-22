import { makeCroydonProfile } from "./croydonProfileBase";

export const bathroomSpecialistsCroydon = makeCroydonProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit in Croydon? Describe the room, sanitaryware, finishes and service changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Croydon?",
    copy: "Enter the postcode and explain whether you need a straight replacement or a full reconfiguration. Mention drainage changes, new electrics, ventilation, tiling, structural work and accessibility needs so suitable Croydon bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Croydon bathroom compliance context",
    title: "Croydon distinguishes a new bathroom from a straightforward refurbishment, and sewer proximity can change the application route",
    intro: "Croydon Council lists installation of a new bathroom as minor domestic work suitable for a building notice, while stating that refurbishing an existing bathroom or toilet does not need approval on that basis alone. If wider building work is over or within three metres of a public sewer, a full-plans application is required instead.",
    items: [
      {
        title: "A new bathroom is specifically listed as building-notice work",
        text: "Croydon Council says installation of a new bathroom can use the building-notice route and clarifies that ordinary refurbishment of an existing bathroom or toilet does not need approval simply because the fittings are being renewed. A complete reconfiguration should therefore be described accurately before the contractor decides what compliance route applies.",
        source: {
          label: "Croydon Council — building notices",
          url: "https://www.croydon.gov.uk/planning-and-regeneration/building-control/submit-building-control-application/building-notices",
        },
      },
      {
        title: "Work over or within three metres of a public sewer requires full plans",
        text: "Croydon Council states that a full-plans application must be submitted where proposed building work involves building over or within three metres of a public sewer. If a bathroom is part of an extension or major drainage alteration, establish the sewer position before finalising the layout.",
        source: {
          label: "Croydon Council — building notices and public sewers",
          url: "https://www.croydon.gov.uk/planning-and-regeneration/building-control/submit-building-control-application/building-notices",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Croydon by postcode, room size and scope. Example areas include:",
    sideTitle: "Describe every service change",
    sideCopy: "Moving a WC or shower, adding ventilation, changing electrics and rebuilding a floor is very different from swapping sanitaryware in the same positions. Show the existing layout and the proposed one.",
    noteLead: "Make the compliance responsibility explicit.",
    noteText: "Ask who is handling plumbing, electrics, ventilation, tanking, tiling, building-control evidence and waste so there are no gaps between trades.",
  },
  faq: [
    ["How much does a bathroom refit cost in Croydon?", "The range is wide because layout changes, sanitaryware, tiling, plumbing, electrics, ventilation and structural work all change the scope."],
    ["Does a new bathroom need Building Regulations approval in Croydon?", "Croydon Council lists installation of a new bathroom as work suitable for a building notice, while straightforward refurbishment of an existing bathroom or toilet does not need approval on that basis alone."],
    ["What if the work is close to a public sewer?", "Croydon Council says building work over or within three metres of a public sewer requires a full-plans application."],
    ["Can I post a small shower or toilet replacement?", "Yes. Smaller repairs and replacements can be posted alongside complete bathroom refurbishments."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Croydon?",
    copy: "Describe the bathroom, layout and service changes once, then compare interested Croydon bathroom specialists and their quotes.",
    buttonLabel: "Get Croydon bathroom quotes",
  },
});

export const drainageSpecialistsCroydon = makeCroydonProfile("drainage-specialists", {
  heroCopy: "Need help with blocked drains, recurring flooding, damaged pipes or drainage alterations in Croydon? Describe the symptoms and location once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Croydon?",
    copy: "Enter the postcode and explain whether the problem is an internal drain, external gully, sewer connection, surface-water issue or recurring blockage. Mention flooding, smells, backing-up fixtures and previous repairs so suitable Croydon drainage specialists can judge the investigation needed.",
  },
  localContext: {
    eyebrow: "Croydon drainage and flood-responsibility context",
    title: "Private drains, public sewers and surface-water flooding have different responsibilities in Croydon",
    intro: "Croydon Council is the Lead Local Flood Authority for surface water, groundwater and ordinary watercourses, while Thames Water is responsible for public sewers. The council also states that property owners remain responsible for private drains until they connect to someone else's drain or a public sewer.",
    items: [
      {
        title: "A private drain remains the property owner's responsibility until it reaches the shared or public system",
        text: "Croydon Council says householders are responsible for checking and clearing their own drains until the pipe connects to another person's drain or to a public sewer. If several properties are affected or the problem is beyond the private boundary, the responsible organisation may change.",
        source: {
          label: "Croydon Council — flooding and drainage responsibilities",
          url: "https://www.croydon.gov.uk/environment/flood-and-water-management/flood-management-and-reporting/flooding-who-responsible",
        },
      },
      {
        title: "Croydon Council leads on local flood risk, while Thames Water handles public sewers",
        text: "The council's LLFA role covers surface water, groundwater and ordinary watercourses, while public-sewer flooding is directed to Thames Water. For recurring flooding, record where the water first appears and whether roads, neighbours or public sewers are involved before commissioning repeated private repairs.",
        source: {
          label: "Croydon Council — Lead Local Flood Authority",
          url: "https://www.croydon.gov.uk/environment/flood-and-water-management/lead-local-flood-authority-llfa",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Croydon by postcode, problem type and access. Example areas include:",
    sideTitle: "Say exactly where the water backs up",
    sideCopy: "A kitchen waste blockage, collapsed private drain, overflowing highway gully and surface-water flooding need different investigations. Note which fixtures or external points are affected first.",
    noteLead: "Diagnosis before excavation.",
    noteText: "For recurring problems, ask whether CCTV inspection, jetting, tracing, root ingress checks or structural repair are needed before agreeing disruptive work.",
  },
  faq: [
    ["Who is responsible for a blocked private drain in Croydon?", "Croydon Council says the property owner is responsible for a drain until it connects to another person's drain or a public sewer."],
    ["Who deals with public sewer flooding in Croydon?", "Croydon Council directs public-sewer flooding to Thames Water, while the council manages local flood risk from sources such as surface water and groundwater."],
    ["Can I post a recurring blocked-drain problem?", "Yes. Explain how often it returns and what previous jetting, CCTV or repairs have already been tried."],
    ["When might a CCTV drain survey help?", "It can be useful for recurring blockages, suspected structural damage, root ingress or when the location of a defect is unclear."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Croydon?",
    copy: "Describe the symptoms, affected drains and flooding history once, then compare interested Croydon drainage specialists and their quotes.",
    buttonLabel: "Get Croydon drainage quotes",
  },
});
