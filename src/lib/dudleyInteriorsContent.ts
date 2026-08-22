import { makeDudleyProfile } from "./dudleyProfileBase";

export const plasterersDudley = makeDudleyProfile("plasterers", {
  heroCopy: "Need a plasterer in Dudley for skimming, patch repairs, ceilings, rendering or preparation after other building work? Describe the surfaces and condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Dudley?",
    copy: "Enter the postcode, room count and whether the job is patching, skimming, boarding, ceiling work or external render. Mention cracks, damp, blown areas, old finishes and any recent electrical or plumbing work so suitable Dudley plasterers can price the same scope.",
  },
  localContext: {
    eyebrow: "Dudley alteration checks",
    title: "A cosmetic finish can hide building work that still needs Building Regulations compliance",
    intro: "Plastering is often the final visible stage after walls, ceilings or services have been altered. Dudley Building Control says structural alterations and controlled services can require approval, so the hidden work should be resolved before it is covered.",
    items: [
      {
        title: "Structural internal alterations can require approval",
        text: "Dudley Council says Building Regulations approval is needed for structural internal alterations such as removing or partly removing load-bearing walls, partitions, joists, beams or chimney breasts.",
        source: {
          label: "Dudley Council — Building Regulations approval",
          url: "https://www.dudley.gov.uk/residents/planning/building-control/apply-for-building-control/do-i-need-building-regulations-approval-for-a-specific-proposal/",
        },
      },
      {
        title: "Unauthorised work can require parts to be opened up later",
        text: "Dudley's regularisation guidance explains that where regulated work was completed without approval, Building Control may require covered parts of the building fabric to be uncovered so the construction can be assessed.",
        source: {
          label: "Dudley Council — unauthorised building work",
          url: "https://www.dudley.gov.uk/residents/planning/building-control/advice-and-guidance/unauthorised-building-work/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Dudley by postcode, room count and finish required. Example areas include:",
    sideTitle: "Describe what is under the finish, not only how many walls need skimming",
    sideCopy: "A ceiling repair in Coseley, whole-room skim in Netherton and damaged old plaster in Sedgley can require different preparation. Mention cracks, loose backgrounds, damp history and whether services have recently been chased into the walls.",
    noteLead: "A clean finish depends on a sound background.",
    noteText: "Ask whether the quote includes removal of loose material, boarding, beads, bonding coats, protection and waste, and resolve structural or service issues before they are covered.",
  },
  faq: [
    ["How much does a plasterer cost in Dudley?", "Pricing depends on room size, surface condition, access, preparation, ceilings, boarding, render and the required finish. Compare quotes against the same scope."],
    ["Does removing a load-bearing wall need Building Regulations approval?", "Yes. Dudley Council lists structural internal alterations such as removing load-bearing walls among works requiring approval."],
    ["Can Building Control ask for finished work to be opened up?", "Yes. Dudley's regularisation guidance says covered work may need to be uncovered where compliance has to be assessed retrospectively."],
    ["Can I post a small patch repair?", "Yes. Small ceiling and wall repairs can be posted as well as full-room skimming and larger refurbishments."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Dudley?",
    copy: "Describe the surfaces and preparation once, then compare interested Dudley plasterers and their quotes.",
    buttonLabel: "Get Dudley plastering quotes",
  },
});

export const kitchenFittersDudley = makeDudleyProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen in Dudley? Describe the layout, units, worktops, appliances and any plumbing, electrical or structural changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Dudley?",
    copy: "Enter the postcode and explain whether the job is a straightforward replacement or a full remodel. Include plans or photos, appliance positions, worktop material and any wall removal, new openings, plumbing or electrical changes so suitable Dudley kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Dudley kitchen-remodel checks",
    title: "A kitchen refit can become regulated building work when structure or services change",
    intro: "Replacing cabinets like for like is very different from moving walls, rewiring or altering drainage. Dudley Council says material alterations and controlled services can require Building Regulations approval even where planning permission is not needed.",
    items: [
      {
        title: "Controlled services and structural alterations can trigger Building Regulations",
        text: "Dudley says approval can be required for material alterations and for installing, altering or extending controlled services or fittings. Structural changes, electrical work and drainage changes should therefore be identified before the kitchen fit is priced.",
        source: {
          label: "Dudley Council — apply for building control",
          url: "https://www.dudley.gov.uk/residents/planning/building-control/apply-for-building-control/",
        },
      },
      {
        title: "Domestic projects can use different application routes",
        text: "Dudley explains that a Full Plans application provides detailed approval before work, while a Building Notice is available for domestic works in appropriate cases. The right route depends on the project, so agree who is handling Building Control before work starts.",
        source: {
          label: "Dudley Council — making a Building Control application",
          url: "https://www.dudley.gov.uk/residents/planning/building-control/apply-for-building-control/making-an-application/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Dudley by postcode, kitchen size and project complexity. Example areas include:",
    sideTitle: "Separate the cabinet fit from the structural and services work",
    sideCopy: "A like-for-like kitchen in Woodsetton, new electrics and an island in Upper Gornal, and a wall-opening project in Dudley town centre are not comparable jobs. List what is changing behind the finished kitchen as well as the visible units.",
    noteLead: "Ask for exclusions before choosing the cheapest quote.",
    noteText: "Clarify demolition, disposal, plumbing, electrics, gas, plastering, flooring, decorating, worktops, appliance connection and Building Control responsibility in writing.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Dudley?", "Cost varies with kitchen size, unit type, worktops, appliance fitting, plumbing, electrics, demolition and structural work. Compare like-for-like scopes."],
    ["Does a kitchen replacement need Building Regulations approval?", "Not every like-for-like replacement does, but structural, electrical, drainage and other controlled work can. Check the actual scope rather than the room name."],
    ["Can a Building Notice be used for domestic work in Dudley?", "Dudley Council says a Building Notice is an available application route for domestic works in appropriate cases."],
    ["Should the fitter include waste removal?", "Agree this before work begins. Old units, packaging, worktops and demolition waste can otherwise become an unexpected extra."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Dudley?",
    copy: "Describe the kitchen and all associated work once, then compare interested Dudley kitchen fitters and their quotes.",
    buttonLabel: "Get Dudley kitchen quotes",
  },
});
