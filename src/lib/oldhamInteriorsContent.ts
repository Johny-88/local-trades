import { makeOldhamProfile } from "./oldhamProfileBase";

export const plasterersOldham = makeOldhamProfile("plasterers", {
  heroCopy: "Need skimming, patching, boarding, rendering or plaster repairs in Oldham? Describe the rooms, surfaces and condition once, then compare plasterers who cover your postcode.",
  answer: {
    title: "Looking for a plasterer near you in Oldham?",
    copy: "Enter the postcode, rooms or elevations, approximate area, existing finish and whether you need patching, boarding, full skim, damp-related repairs or external rendering.",
  },
  localContext: {
    eyebrow: "Oldham renovation safety and waste",
    title: "Older finishes should be assessed before disturbance, and contractor waste has legal disposal duties",
    intro: "Plaster removal can expose older boards, coatings and hidden materials. Oldham Council's asbestos guidance and business-waste rules make it worth identifying suspect material and agreeing who removes waste before work begins.",
    items: [
      {
        title: "Damaged asbestos-containing material can release dangerous fibres",
        text: "Oldham Council says asbestos in good condition and unlikely to be disturbed should not cause harm, but damaged material releasing fibres can become dangerous. It notes that most asbestos can only be removed by specialist licensed contractors.",
        source: {
          label: "Oldham Council — asbestos",
          url: "https://www.oldham.gov.uk/info/200236/environmental_health/149/asbestos",
        },
      },
      {
        title: "Businesses are responsible for arranging legal disposal of their waste",
        text: "Oldham Council says business rates do not cover business waste and the business owner is responsible under the Environmental Protection Act 1990 for ensuring waste is removed properly. Agree disposal responsibility with the plasterer before stripping starts.",
        source: {
          label: "Oldham Council — business waste",
          url: "https://www.oldham.gov.uk/info/200301/business_waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Oldham by postcode, room count and finish. Example areas include:",
    sideTitle: "Describe what is underneath the failed finish",
    sideCopy: "A cracked ceiling in Shaw, a full skim in Chadderton and older wall finishes in Oldham town centre can involve different preparation and safety checks. Photos and the age of the property help.",
    noteLead: "Do not ask for a skim quote if the substrate is unknown.",
    noteText: "Loose plaster, damp, lath, damaged board and suspect asbestos-containing materials can change the job completely. Ask for preparation and waste removal to be priced explicitly.",
  },
  faq: [
    ["How much does plastering cost in Oldham?", "Cost depends on area, surface condition, preparation, boarding, height, access, finish and waste removal."],
    ["Should suspected asbestos be disturbed during plaster removal?", "No. Oldham Council advises that damaged asbestos-containing material can be dangerous and that most asbestos removal requires specialist licensed contractors."],
    ["Who is responsible for contractor waste?", "Oldham Council says businesses have a legal responsibility to arrange proper removal of their waste, so confirm disposal within the contractor's scope."],
    ["Can I post a small patch repair?", "Yes. Small repairs can be posted alongside full-room skimming and rendering."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Oldham?",
    copy: "Describe the surfaces, preparation and finish once, then compare interested Oldham plasterers and their quotes.",
    buttonLabel: "Get Oldham plastering quotes",
  },
});

export const kitchenFittersOldham = makeOldhamProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen installation or refit in Oldham? Describe the layout, units, worktops, appliances and building work once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Oldham?",
    copy: "Enter the postcode, kitchen size, whether units are supplied, worktop material and the plumbing, electrical, flooring, tiling or structural changes required. Upload a plan if you have one.",
  },
  localContext: {
    eyebrow: "Oldham kitchen Building Control",
    title: "Moving drainage or altering structure can turn a straightforward refit into regulated building work",
    intro: "Oldham Council specifically lists new or relocated kitchen drainage and several forms of internal or structural alteration as work that can require Building Control approval.",
    items: [
      {
        title: "New or relocated kitchen drainage requires Building Control approval",
        text: "Oldham Council says installation of new drainage facilities, including installation or relocation connected with kitchens, requires Building Control approval.",
        source: {
          label: "Oldham Council — drainage",
          url: "https://www.oldham.gov.uk/info/200412/apply_for_approval/916/drainage",
        },
      },
      {
        title: "Internal and structural alterations are likely to require Building Regulations approval",
        text: "The council lists formation of additional rooms, new door or window openings and removal or partial removal of load-bearing walls or chimney breasts among work likely to require Building Regulations approval.",
        source: {
          label: "Oldham Council — alterations",
          url: "https://www.oldham.gov.uk/info/200412/apply_for_approval/912/alterations",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Oldham by postcode, kitchen size and scope. Example areas include:",
    sideTitle: "Separate fitting from plumbing, electrics and structural work",
    sideCopy: "A like-for-like unit swap in Royton, a layout change in Lees and a kitchen opened into another room in Failsworth are different projects. Give the fitter the plan and every trade involved.",
    noteLead: "Ask for exclusions in writing.",
    noteText: "Units, worktops, appliances, plumbing, electrics, gas, flooring, tiling, plastering, decorating and waste can all sit outside a basic fitting quote unless stated.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Oldham?", "Cost depends on kitchen size, units, worktops, appliances, layout changes and how much plumbing, electrical or building work is included."],
    ["Does moving a kitchen sink or drainage need Building Control approval?", "Oldham Council says installation of new drainage facilities, including relocation connected with kitchens, requires approval."],
    ["Can removing a wall need Building Regulations approval?", "Yes. Oldham Council lists removal or partial removal of a load-bearing wall among structural alterations likely to require approval."],
    ["Can I post a worktop-only installation?", "Yes. Smaller kitchen jobs can be posted separately from full refits."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Oldham?",
    copy: "Describe the kitchen, layout and associated trades once, then compare interested Oldham kitchen fitters and their quotes.",
    buttonLabel: "Get Oldham kitchen quotes",
  },
});
