import { makeWolverhamptonProfile } from "./wolverhamptonProfileBase";

export const plasterersWolverhampton = makeWolverhamptonProfile("plasterers", {
  heroCopy: "Need skimming, patch repairs, rendering or plaster restoration in Wolverhampton? Describe the surfaces, condition and finish once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Wolverhampton?",
    copy: "Enter the postcode, rooms or elevations, approximate area and current condition. Mention damp damage, blown plaster, lath-and-plaster, removed tiles, chases or listed-building status so suitable Wolverhampton plasterers can judge preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Wolverhampton plastering and heritage context",
    title: "Historic interiors and wider alterations should be separated from ordinary skim work",
    intro: "Wolverhampton's 31 conservation areas and listed-building stock mean some properties can need a more cautious repair specification, while Building Regulations can apply when plastering is part of a wider structural, fire-safety or thermal alteration.",
    items: [
      {
        title: "Heritage status can affect how original fabric is repaired",
        text: "The council's conservation guidance explains that listed buildings and conservation areas are protected because of their special architectural or historic interest. If a plastering job involves original mouldings, lath-and-plaster or other historic fabric, identify the designation before stripping material out or changing the finish.",
        source: {
          label: "City of Wolverhampton Council — conservation",
          url: "https://www.wolverhampton.gov.uk/planning/conservation",
        },
      },
      {
        title: "Plastering can sit inside regulated alteration work",
        text: "Wolverhampton Building Control covers structural stability, fire precautions, damp, sound resistance and thermal performance. If walls or ceilings are being opened as part of structural or insulation work, confirm the wider approval and inspection responsibilities before replastering hides the construction.",
        source: {
          label: "City of Wolverhampton Council — about Building Regulations",
          url: "https://www.wolverhampton.gov.uk/planning/building-regulations/about-building-regulations",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Wolverhampton by postcode, surface and job size. Example areas include:",
    sideTitle: "Describe what is underneath the finish",
    sideCopy: "Fresh plasterboard, cracked old plaster, damp-damaged backgrounds and historic lath-and-plaster are different jobs. Photos of defects and exposed areas help quotes include the right preparation.",
    noteLead: "Fix the cause before finishing the symptom.",
    noteText: "If cracking or damp is active, ask whether another trade or investigation is needed before the final skim or decorative finish is applied.",
  },
  faq: [
    ["How much does plastering cost in Wolverhampton?", "Cost depends on area, ceiling height, background condition, preparation, access and whether old material must be removed."],
    ["Can a plasterer repair old lath-and-plaster?", "Many can, but describe the existing construction and any heritage status so the right repair approach is quoted."],
    ["Does a conservation area mean internal plaster always needs permission?", "No. Conservation-area designation mainly controls external character, but listed-building consent can affect internal historic fabric. Check listed status and the actual scope."],
    ["Should plastering happen before Building Control inspections?", "Not if the finish would hide work that still needs inspection. Coordinate the plastering sequence with any required Building Control checks."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Wolverhampton?",
    copy: "Describe the surfaces, defects and finish once, then compare interested Wolverhampton plasterers and their quotes.",
    buttonLabel: "Get Wolverhampton plastering quotes",
  },
});

export const kitchenFittersWolverhampton = makeWolverhamptonProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen refit in Wolverhampton? Describe the room, units, worktops, appliances and service changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Wolverhampton?",
    copy: "Enter the postcode, kitchen size and whether units are supply-and-fit or installation only. Mention wall removal, electrics, gas, plumbing, extraction, flooring and waste so suitable Wolverhampton kitchen fitters can quote the complete scope.",
  },
  localContext: {
    eyebrow: "Wolverhampton kitchen-refit context",
    title: "A kitchen refit can cross into Building Regulations when structure or controlled services change",
    intro: "Wolverhampton Building Control covers structural stability, ventilation, drainage, heating appliances and electrical safety. A like-for-like cabinet swap is very different from a project that removes walls, moves services or installs new controlled work.",
    items: [
      {
        title: "Separate cabinet installation from regulated structural and service work",
        text: "The council notes that building work may require Building Regulations approval even where planning permission is not required. If the kitchen involves structural openings, drainage changes, new ventilation, electrical work or heating appliances, identify who is responsible for each controlled element before installation begins.",
        source: {
          label: "City of Wolverhampton Council — about Building Regulations",
          url: "https://www.wolverhampton.gov.uk/planning/building-regulations/about-building-regulations",
        },
      },
      {
        title: "Current local charges distinguish ordinary internal alterations and electrical work",
        text: "Wolverhampton's current domestic-alteration fee schedule separately covers internal alterations and electrical work outside a competent-person scheme. That reinforces the need to ask whether a kitchen quote includes only fitting or also the regulated work and certification around it.",
        source: {
          label: "City of Wolverhampton Council — Building Regulation charges",
          url: "https://www.wolverhampton.gov.uk/sites/default/files/2025-11/fee-charges-from-1st-December-2025.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Wolverhampton by postcode, kitchen size and scope. Example areas include:",
    sideTitle: "List every trade the refit actually needs",
    sideCopy: "A dry-fit cabinet installation is not the same job as a full strip-out with wall removal, rewiring, gas, plumbing, plastering and flooring. Give each element so quotes are comparable.",
    noteLead: "Ask who coordinates the regulated trades.",
    noteText: "For multi-trade refits, confirm whether the fitter is managing electricians, gas engineers, plumbers and Building Control or whether you need to arrange them separately.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Wolverhampton?", "Price depends on kitchen size, unit type, worktops, appliances, service changes, preparation and how much old material must be removed."],
    ["Does a kitchen refit need Building Regulations approval?", "A simple like-for-like refit may not, but structural changes, electrical work, ventilation, drainage and some heating work can be controlled."],
    ["Can one kitchen fitter handle all the electrics and gas work?", "Only appropriately qualified or registered people should carry out regulated work. Ask exactly who is doing each element and what certification is included."],
    ["Can old kitchen waste be taken away?", "Yes if included, but confirm the contractor's disposal arrangements because waste from paid work must be handled lawfully."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Wolverhampton?",
    copy: "Describe the layout, units and service changes once, then compare interested Wolverhampton kitchen fitters and their quotes.",
    buttonLabel: "Get Wolverhampton kitchen quotes",
  },
});
