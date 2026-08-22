import { makeRochdaleProfile } from "./rochdaleProfileBase";

export const plasterersRochdale = makeRochdaleProfile("plasterers", {
  heroCopy: "Need skimming, patch repairs, ceilings, rendering preparation or replastering in Rochdale? Describe the rooms, surfaces and damage once, then compare plasterers who cover your postcode.",
  answer: {
    title: "Looking for a plasterer near you in Rochdale?",
    copy: "Enter the postcode, rooms or wall areas, current surface and whether the work is patching, full skimming, boarding or repair after damp. Photos of cracks, blown plaster and staining help suitable Rochdale plasterers assess preparation before quoting.",
  },
  localContext: {
    eyebrow: "Rochdale plastering and damp",
    title: "New plaster should not be used to hide an unresolved moisture problem",
    intro: "Rochdale Council's damp guidance separates penetrating, rising and condensation damp and stresses fixing the cause. That matters before spending money on fresh plaster, decoration or skirting.",
    items: [
      {
        title: "Penetrating damp can come from roofs, gutters, pipework or damaged masonry",
        text: "Rochdale Council lists leaking roofs or gutters, leaking pipework and damaged or ageing brickwork among causes of penetrating damp. If plaster is stained, soft or repeatedly failing, the moisture source should be investigated before refinishing.",
        source: {
          label: "Rochdale Borough Council — damp, mould and condensation",
          url: "https://www.rochdale.gov.uk/housing/damp-mould-condensation",
        },
      },
      {
        title: "The source of rising damp should be treated before internal walls are repaired",
        text: "The council says rising damp can damage plaster, wallpaper, paint and skirting boards and specifically advises treating the moisture source before repairing the internal wall finish.",
        source: {
          label: "Rochdale Borough Council — damp, mould and condensation",
          url: "https://www.rochdale.gov.uk/housing/damp-mould-condensation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Rochdale by postcode, room and surface condition. Example areas include:",
    sideTitle: "Show the damage and explain what caused it",
    sideCopy: "A cracked ceiling in Heywood, skim work in Middleton and blown plaster after a leak in Wardle need different preparation. Tell the plasterer whether the moisture or movement problem has already been fixed.",
    noteLead: "The finish is only as good as the surface beneath it.",
    noteText: "Ask whether the quote includes hacking off loose material, boarding, bonding, corner beads, skim coats, drying time and making good around sockets or joinery.",
  },
  faq: [
    ["How much does plastering cost in Rochdale?", "Cost depends on area, ceiling height, substrate condition, preparation, boarding, access and whether damaged plaster must be removed first."],
    ["Should I replaster over damp staining?", "Not until the cause is understood. Rochdale Council advises fixing the source of damp before repairing the internal wall finish."],
    ["What can cause penetrating damp?", "Rochdale Council lists issues such as leaking roofs or gutters, leaking pipework and damaged or old brickwork."],
    ["Can I post a small patch-repair job?", "Yes. Small repairs can be posted alongside full-room or whole-house plastering."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Rochdale?",
    copy: "Describe the surfaces, damage and preparation once, then compare interested Rochdale plasterers and their quotes.",
    buttonLabel: "Get Rochdale plastering quotes",
  },
});

export const kitchenFittersRochdale = makeRochdaleProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen refit in Rochdale? Describe the room, units, worktops, appliances and services once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Rochdale?",
    copy: "Enter the postcode, kitchen size, whether units are supplied, worktop material and any changes to electrics, plumbing, drainage, ventilation or walls. Upload plans or photos so suitable Rochdale kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Rochdale kitchen alterations",
    title: "Moving services or altering the room can bring Building Regulations into an otherwise ordinary kitchen refit",
    intro: "A like-for-like unit replacement is different from a project that moves drains, adds electrical work or changes structure. Rochdale Council lists several of those works among common Building Regulations triggers.",
    items: [
      {
        title: "New waste appliances, drainage and some electrical work can need approval",
        text: "Rochdale Council lists installation of new waste appliances, new drainage and electrical work among common proposals requiring Building Regulations approval, subject to competent-person exemptions where applicable.",
        source: {
          label: "Rochdale Borough Council — work requiring Building Regulations approval",
          url: "https://www.rochdale.gov.uk/building-control-regulations/building-regulation-approval-requirements",
        },
      },
      {
        title: "Licensed HMOs are assessed against standards for food storage, preparation and cooking facilities",
        text: "Rochdale Council says HMO suitability standards include the number, type and quality of food storage, preparation and cooking facilities. For a shared-house kitchen, occupancy and amenity requirements should be part of the brief rather than considered after fitting.",
        source: {
          label: "Rochdale Borough Council — HMO licensing conditions and criteria",
          url: "https://www.rochdale.gov.uk/private-landlords/apply-landlord-licence/2",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Rochdale by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Separate cabinet fitting from the regulated service work",
    sideCopy: "A unit swap in Castleton, a full kitchen in Rochdale and a shared-house kitchen in Heywood can have very different electrical, plumbing, ventilation and compliance requirements.",
    noteLead: "Give every fitter the same inclusion list.",
    noteText: "State who supplies units and appliances and whether quotes must include removal, plumbing, electrics, gas work, worktops, tiling, flooring, decorating and waste disposal.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Rochdale?", "Cost depends on kitchen size, unit type, worktops, appliances, service changes, preparation and which finishing trades are included."],
    ["Can a kitchen refit need Building Regulations approval?", "Yes. Rochdale Council lists new waste appliances, drainage, electrical work and structural alterations among common works that can require approval."],
    ["Do HMO kitchen standards matter in Rochdale?", "Yes. Rochdale Council says licensed HMO suitability standards include food storage, preparation and cooking facilities."],
    ["Should I upload the kitchen plan?", "Yes. A plan, elevations and appliance schedule help fitters price comparable work and identify service changes."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Rochdale?",
    copy: "Describe the kitchen, services and inclusions once, then compare interested Rochdale kitchen fitters and their quotes.",
    buttonLabel: "Get Rochdale kitchen quotes",
  },
});
