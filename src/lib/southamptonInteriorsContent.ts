import { makeSouthamptonProfile } from "./southamptonProfileBase";

export const plasterersSouthampton = makeSouthamptonProfile("plasterers", {
  heroCopy: "Need skimming, ceiling repairs, patching or rendering in Southampton? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Southampton?",
    copy: "Enter the postcode, say which walls or ceilings need work and describe cracks, loose areas, staining or damp. Suitable Southampton plasterers can then judge whether the job needs patching, boarding, bonding or a straightforward skim.",
  },
  localContext: {
    eyebrow: "Southampton plastering context",
    title: "Solve the damp cause before paying for a cosmetic finish",
    intro: "Southampton's own damp guidance distinguishes condensation from leaks and other moisture sources. That matters when plaster is blown, stained or mouldy because a new skim will not cure an active water problem.",
    items: [
      {
        title: "Damp can come from condensation, leaks or defects around the building",
        text: "Southampton City Council says damp and mould can result from excess moisture caused by leaking pipes, rising damp or rain entering around roofs and window frames. Its council-housing guidance also identifies damaged drainage, guttering and walls as possible causes of true damp. Identify and fix the source before sealing it behind new plaster.",
        source: {
          label: "Southampton City Council — damp and condensation",
          url: "https://www.southampton.gov.uk/our-green-city/how-you-can-help/saving-energy-at-home/damp-and-condensation/",
        },
      },
      {
        title: "Plasterboard and demolition waste have specific disposal arrangements",
        text: "Southampton's household recycling centre lists charges for plasterboard and separate trade-waste arrangements for businesses. If old plaster, board or rubble is being removed, ask whether bagging, loading and lawful disposal are included in the plasterer's quote.",
        source: {
          label: "Southampton City Council — Southampton household waste recycling centre",
          url: "https://www.southampton.gov.uk/bins-recycling/recycling/centre/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Southampton by postcode and job size. Example areas include:",
    sideTitle: "Photograph cracks and staining before the old finish is covered",
    sideCopy: "Show the whole wall or ceiling as well as close-ups. That helps a plasterer judge whether the background is sound and whether repairs, boarding or moisture investigation are needed first.",
    noteLead: "A smooth finish depends on the background.",
    noteText: "Compare what preparation, beads, boarding, protection and waste removal are included rather than looking only at the final skim price.",
  },
  faq: [
    ["How much does plastering cost in Southampton?", "The cost depends on room size, surface condition, access and whether repairs or boarding are needed before skimming. Compare quotes based on the same preparation and finish."],
    ["Should I plaster over a damp wall?", "Not until the cause is understood. Southampton's guidance identifies several moisture sources, and new plaster will not solve an active leak or condensation problem."],
    ["Can I post a small plaster repair?", "Yes. Small patches, damaged ceilings and local repairs can be posted alongside full-room skimming, boarding and rendering work."],
    ["Who removes old plaster and plasterboard?", "Agree this in the quote. Southampton's recycling-centre guidance has specific arrangements for plasterboard and trade waste, so disposal should not be assumed."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Southampton?",
    copy: "Describe the surfaces and preparation once, then compare interested Southampton plasterers and their quotes.",
    buttonLabel: "Get Southampton plastering quotes",
  },
});

export const kitchenFittersSouthampton = makeSouthamptonProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or refurbishment in Southampton? Describe the units, worktops, room and any service changes once, then compare kitchen fitters interested in the job.",
  answer: {
    title: "Looking for a kitchen fitter near you in Southampton?",
    copy: "Enter the postcode and share the kitchen plan, dimensions and product list if you have them. Mention wall changes, plumbing, electrics, gas, flooring or tiling so suitable Southampton fitters can judge the complete scope.",
  },
  localContext: {
    eyebrow: "Southampton kitchen-fit planning",
    title: "Structural work and controlled services should be separated from cabinet fitting",
    intro: "A kitchen can be a simple unit replacement or a building project involving walls, drainage, ventilation and controlled services. Southampton's building-control guidance makes the distinction important before the fitting price is agreed.",
    items: [
      {
        title: "Building Regulations can apply to structural and service changes",
        text: "Southampton City Council says Building Regulations cover structure, ventilation, drainage, heat-producing equipment, energy saving and controlled services. If the kitchen design removes walls or relocates major services, establish who is designing, certifying and signing off those elements before units are ordered.",
        source: {
          label: "Southampton City Council — building-control permissions",
          url: "https://www.southampton.gov.uk/planning/building-control/permissions/",
        },
      },
      {
        title: "Old units and renovation debris need an agreed disposal route",
        text: "Southampton's household recycling centre separates household DIY allowances from commercial trade-waste disposal. If the fitter is removing old cabinets, worktops, tiles or rubble, ask whether waste carriage and disposal are included rather than leaving it until strip-out day.",
        source: {
          label: "Southampton City Council — Southampton household waste recycling centre",
          url: "https://www.southampton.gov.uk/bins-recycling/recycling/centre/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Southampton by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Share the plan before asking for a fixed fitting price",
    sideCopy: "The same number of cabinets can involve very different work if walls move, services are relocated or specialist worktops need templating. Include the supplier plan and appliance schedule where possible.",
    noteLead: "Define who coordinates each trade.",
    noteText: "Confirm responsibility for plumbing, electrics, gas, tiling, decorating, worktops and waste so there are no gaps after the old kitchen is removed.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Southampton?", "The cost depends on kitchen size, product type and how much structural, plumbing, electrical, gas, tiling and finishing work sits around the installation. Compare quotes against the same scope."],
    ["Can I use my own kitchen supplier?", "Yes. Share the supplier plan and product list so the fitter can price installation, modifications and any missing items clearly."],
    ["Do I need Building Regulations for a kitchen refit?", "A straightforward like-for-like refit may not need approval, but structural alterations and some controlled-service, drainage or ventilation work can fall within Building Regulations."],
    ["Does the kitchen fitter remove the old kitchen?", "Some do and some price it separately. Confirm strip-out, waste carriage and disposal before comparing the final totals."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Southampton?",
    copy: "Share the kitchen plan and full scope once, then compare interested Southampton kitchen fitters and their quotes.",
    buttonLabel: "Get Southampton kitchen quotes",
  },
});
