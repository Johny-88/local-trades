import { makeWalsallProfile } from "./walsallProfileBase";

export const plasterersWalsall = makeWalsallProfile("plasterers", {
  heroCopy: "Need a plasterer in Walsall for skimming, patch repairs, ceilings, rendering or renovation work? Describe the surfaces, condition and approximate area once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Walsall?",
    copy: "Enter the postcode, rooms or elevations involved, approximate area and existing surface condition. Mention cracks, blown plaster, damp staining, old finishes and whether the property is listed or in a conservation area so suitable Walsall plasterers can quote the same scope.",
  },
  localContext: {
    eyebrow: "Walsall heritage-property repairs",
    title: "Older and protected buildings may need a different repair specification",
    intro: "Walsall has listed buildings, locally listed properties and conservation areas where repair choices can affect historic character. On protected buildings, a modern skim or cement-based repair is not automatically the right specification.",
    items: [
      {
        title: "Listed-building consent is needed for work affecting special character",
        text: "Walsall Council says listed-building consent is required for anything that affects the special character of a listed building and that unauthorised work is a criminal offence. Before removing historic plaster or changing significant finishes, confirm whether consent or conservation advice is needed.",
        source: {
          label: "Walsall Council — listed buildings",
          url: "https://go.walsall.gov.uk/planning-and-building-control/listed-buildings-conservation-and-environment/listed-buildings",
        },
      },
      {
        title: "Traditional materials may be appropriate on protected buildings",
        text: "Walsall's building-conservation guidance says repairs to protected buildings require quality workmanship and appropriate materials, and specifically identifies traditional materials such as lime mortars as suitable for historic buildings. Ask how the proposed plaster or render system suits the existing fabric.",
        source: {
          label: "Walsall Council — building conservation approach",
          url: "https://go.walsall.gov.uk/planning-and-building-control/listed-buildings-conservation-and-environment/building-conservation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Walsall by postcode, surface type and job size. Example areas include:",
    sideTitle: "Describe why the old finish failed before covering it",
    sideCopy: "A cracked ceiling in Willenhall, damp-stained plaster in Darlaston and an older property in Aldridge can need different preparation. Say whether the background is brick, block, plasterboard, lath, old lime plaster or external masonry.",
    noteLead: "Do not hide unresolved damp or movement behind a new finish.",
    noteText: "If plaster has failed because of leaks, salts, structural movement or persistent moisture, deal with the cause first and ask what preparation is included in the quote.",
  },
  faq: [
    ["How much does a plasterer cost in Walsall?", "Pricing depends on area, background condition, preparation, access, finish and whether old material must be removed. Compare quotes against the same scope."],
    ["Can I replaster a listed building in Walsall without checking consent?", "Not safely as a general assumption. Walsall says listed-building consent is needed for work that affects the building's special character."],
    ["Are lime-based materials relevant to older buildings?", "They can be. Walsall's conservation guidance identifies traditional materials such as lime mortars as appropriate for historic-building repair."],
    ["Can I post a small patch repair?", "Yes. Localised holes, cracks and damaged areas can be posted as well as full-room skimming or larger rendering jobs."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Walsall?",
    copy: "Describe the surfaces, condition and finish once, then compare interested Walsall plasterers and their quotes.",
    buttonLabel: "Get Walsall plastering quotes",
  },
});

export const kitchenFittersWalsall = makeWalsallProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or kitchen refurbishment in Walsall? Describe the layout, units, worktops, appliances and associated plumbing or electrical work once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Walsall?",
    copy: "Enter the postcode, room size and whether units and appliances are already purchased. Mention layout changes, plumbing, electrics, tiling, flooring, plastering and waste removal so suitable Walsall kitchen fitters can price the same job.",
  },
  localContext: {
    eyebrow: "Walsall shared-home standards",
    title: "Kitchen work in an HMO has to fit the property's occupancy and approval status",
    intro: "For shared rented homes, a kitchen refurbishment is not only a cabinet-and-worktop job. Walsall's HMO standards require adequate kitchen facilities, while planning permission is now needed for the creation or extension of HMOs across the borough.",
    items: [
      {
        title: "HMO managers must provide and maintain suitable kitchen amenities",
        text: "Walsall Council says HMO managers must provide and maintain amenities such as kitchens and bathrooms and meet the council's standards for licensed HMOs. If the kitchen serves several unrelated occupiers, state the occupancy and facilities so the fitter is pricing the correct layout and capacity.",
        source: {
          label: "Walsall Council — managing houses in multiple occupation",
          url: "https://go.walsall.gov.uk/housing/information-landlords/houses-multiple-occupation-hmo/managing-houses-multiple-occupation",
        },
      },
      {
        title: "HMO planning permission is a separate borough-wide requirement",
        text: "From 1 October 2025, Walsall's borough-wide Article 4 Direction requires planning permission to create or extend an HMO. A kitchen fitting job does not establish that the property's planning or licensing position is valid, so those checks should be handled separately.",
        source: {
          label: "Walsall Council — HMO Article 4 Direction",
          url: "https://go.walsall.gov.uk/planning-and-building-control/planning-policy/houses-multiple-occupation-hmo-consultation-article-4",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Walsall by postcode, layout and project size. Example areas include:",
    sideTitle: "Separate supply, fitting and associated trades in the quote",
    sideCopy: "A straight unit replacement in Brownhills, a layout change in Streetly and an HMO kitchen in Walsall can require different plumbing, electrical, ventilation and finishing work. List what is supplied and what still needs sourcing.",
    noteLead: "A kitchen quote is clearer when each trade is identified.",
    noteText: "Ask whether the fitter is including unit assembly, worktops, plumbing, electrics, tiling, flooring, plastering, decorating and waste removal or whether some of those need separate contractors.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Walsall?", "Cost depends on layout, number of units, worktops, appliances, plumbing, electrics and finishing work. Compare quotes against the same supply-and-fit scope."],
    ["Are there special kitchen standards for HMOs?", "Yes. Walsall says HMO managers must provide and maintain suitable amenities, including kitchens, in line with the property's occupancy and relevant standards."],
    ["Does an HMO kitchen refurbishment itself prove the HMO is approved?", "No. Planning and licensing are separate. Walsall requires planning permission to create or extend HMOs under its borough-wide Article 4 Direction."],
    ["Can I use my own kitchen supplier?", "Yes. State what has already been ordered and ask fitters to quote only for the installation and associated work you still need."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Walsall?",
    copy: "Describe the kitchen, layout and associated work once, then compare interested Walsall kitchen fitters and their quotes.",
    buttonLabel: "Get Walsall kitchen quotes",
  },
});
