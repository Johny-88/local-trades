import { makeEdinburghProfile } from "./edinburghProfileBase";

export const plasterersEdinburgh = makeEdinburghProfile("plasterers", {
  heroCopy: "Need plastering, skimming, patch repairs or wall and ceiling preparation in Edinburgh? Describe the rooms, surfaces and condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Edinburgh?",
    copy: "Enter the postcode and describe the rooms, wall or ceiling condition, approximate area and finish required. Add photos of cracks, damaged backgrounds or old finishes so suitable Edinburgh plasterers can judge preparation accurately.",
  },
  localContext: {
    eyebrow: "Edinburgh historic-building context",
    title: "Traditional interiors can need a repair-led approach, while strip-out waste remains trade waste",
    intro: "Edinburgh has a large protected historic building stock, including 50 conservation areas and the Old and New Towns World Heritage Site. Plaster repairs in older properties may therefore need to respect existing fabric and finishes, while debris removed by a contractor must follow Edinburgh's trade-waste rules.",
    items: [
      {
        title: "Listed-building alterations should protect the building's special character",
        text: "The council advises owners that alterations to a listed building may need listed-building consent and that work should be checked before it starts. For plastering in a protected property, distinguish straightforward patch repair from work that removes or replaces historic finishes, cornices or other significant fabric.",
        source: {
          label: "City of Edinburgh Council — listed building consent",
          url: "https://www.edinburgh.gov.uk/planning-applications-1/apply-listed-building-consent",
        },
      },
      {
        title: "Contractor-generated waste must use authorised trade-waste arrangements",
        text: "Edinburgh requires business waste to be collected and disposed of through a licensed waste carrier. If old plaster, boards, lath or packaging are being removed as part of the job, agree who will handle that waste and include the cost in the quote.",
        source: {
          label: "City of Edinburgh Council — trade waste duty of care",
          url: "https://www.edinburgh.gov.uk/trade-waste/duty-care",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Edinburgh by postcode, surface condition and job size. Example areas include:",
    sideTitle: "Show the existing surface, not just the room",
    sideCopy: "A modern plasterboard wall in Corstorphine is different from cracked traditional plaster in Marchmont or the New Town. Photos of the full wall or ceiling and close-ups of damage help expose the preparation needed.",
    noteLead: "Repair method matters in older properties.",
    noteText: "If the building is listed or has significant traditional finishes, ask whether the proposed material and repair method are compatible with the existing fabric before stripping anything out.",
  },
  faq: [
    ["How much does plastering cost in Edinburgh?", "Price depends on area, surface condition, height, access, preparation and finish. Compare quotes for the same preparation rather than only a square-metre figure."],
    ["Can plastering work on a listed Edinburgh property need consent?", "Routine like-for-like repair may differ from removing or altering significant historic fabric. Check the listed-building position before substantial changes."],
    ["Can I post a small patch repair?", "Yes. Small ceiling and wall repairs can be posted alongside full-room skimming and larger refurbishment work."],
    ["Who removes old plaster and rubble?", "Agree this before work starts. Waste produced through paid trade work needs lawful trade-waste handling and should not be assumed to be included."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Edinburgh?",
    copy: "Describe the surfaces, damage and finish once, then compare interested Edinburgh plasterers and their quotes.",
    buttonLabel: "Get Edinburgh plastering quotes",
  },
});

export const kitchenFittersEdinburgh = makeEdinburghProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen refit in Edinburgh? Describe the layout, units, worktops, services and any structural changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Edinburgh?",
    copy: "Enter the postcode and explain whether the job is a straightforward replacement or a full redesign. Include plans or photos and say if walls, plumbing, electrics, ventilation or windows are changing so suitable Edinburgh kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Edinburgh kitchen-refit context",
    title: "A straightforward refit can be warrant-exempt, but structural or protected-building changes are different",
    intro: "Edinburgh's Building Standards guidance distinguishes ordinary kitchen refits from work that affects structure, floor area, external walls or wastewater discharge. In a listed property, alterations can also require listed-building consent, so the quote should separate cabinet installation from regulated building work.",
    items: [
      {
        title: "Some kitchen refits do not require a building warrant if they stay within the exemptions",
        text: "The council's Building Standards FAQs give a kitchen refit as an example of work that can be done without a warrant where it does not involve excluded matters such as structural alteration, increasing floor area or changing wastewater discharge. If the design removes a load-bearing wall, forms new openings or significantly changes drainage, check the warrant route first.",
        source: {
          label: "City of Edinburgh Council — Building Standards FAQs",
          url: "https://www.edinburgh.gov.uk/downloads/file/31474/building-standards-faqs",
        },
      },
      {
        title: "Listed-property alterations can need a separate consent",
        text: "Edinburgh advises owners that alterations to a listed building may require listed-building consent and may also need a building warrant. If the kitchen project affects historic joinery, fireplaces, wall finishes, windows or other protected fabric, establish the consent position before demolition or ordering irreversible work.",
        source: {
          label: "City of Edinburgh Council — listed building consent",
          url: "https://www.edinburgh.gov.uk/planning-applications-1/apply-listed-building-consent",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Edinburgh by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Separate the fit-out from structural and service changes",
    sideCopy: "Replacing cabinets in a modern kitchen is different from reworking a tenement layout, moving drainage or opening up rooms. Provide a plan showing what stays, what moves and which trades are expected to be included.",
    noteLead: "Confirm responsibility for the whole project.",
    noteText: "Ask who is coordinating plumbing, electrics, ventilation, decorating, worktops, waste and any building-warrant or consent requirements rather than assuming one headline price includes everything.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Edinburgh?", "Costs depend on kitchen size, unit type, worktops, services, structural changes and who supplies materials. Compare itemised quotes for the same scope."],
    ["Does a kitchen refit need a building warrant in Edinburgh?", "Some straightforward refits can be warrant-exempt, but structural, drainage or other excluded changes can require a warrant. Check the actual design before work starts."],
    ["Can a listed property change the kitchen plan?", "Yes. Alterations affecting protected historic fabric may need listed-building consent in addition to any building warrant."],
    ["Should removal of the old kitchen be included?", "State this clearly. Strip-out, skip or trade-waste disposal, making good and decorating can be separate items unless the quote includes them."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Edinburgh?",
    copy: "Describe the layout, units and service changes once, then compare interested Edinburgh kitchen fitters and their quotes.",
    buttonLabel: "Get Edinburgh kitchen quotes",
  },
});
