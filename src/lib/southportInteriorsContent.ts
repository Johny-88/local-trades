import { makeSouthportProfile } from "./southportProfileBase";

export const plasterersSouthport = makeSouthportProfile("plasterers", {
  heroCopy: "Need a plasterer in Southport for skimming, patch repairs, ceilings, rendering or preparation after other building work? Describe the surfaces and condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Southport?",
    copy: "Enter the postcode, room count and whether the job is patching, skimming, boarding, ceiling work or external render. Mention cracks, damp, blown areas, old finishes and any recent electrical or plumbing work so suitable Southport plasterers can price the same scope.",
  },
  localContext: {
    eyebrow: "Southport strip-out and asbestos checks",
    title: "Older finishes should be assessed before sanding or stripping, and contractor waste needs the correct disposal route",
    intro: "Plastering often begins with removing old boards, textured finishes or damaged backgrounds. Sefton's current asbestos and recycling guidance makes it important to identify suspect materials before disturbance and agree who is responsible for the resulting waste.",
    items: [
      {
        title: "Damaged or disturbed asbestos-containing material can release fibres",
        text: "Sefton warns that asbestos-containing material presents greater risk when it is damaged or disturbed and says it should be managed carefully. If an old board, panel or other finish is suspected to contain asbestos, identify the material before sanding, chasing or removal starts.",
        source: {
          label: "Sefton Council — asbestos",
          url: "https://www.sefton.gov.uk/environment/pests-pollution-and-food-hygiene/pollution/asbestos/",
        },
      },
      {
        title: "Contractor-removed waste becomes trade waste",
        text: "Sefton states that waste removed by a contractor becomes trade waste and cannot be taken through the household recycling-centre route. Ask whether old plaster, boards, bags and other strip-out waste are included in the quote and how they will be disposed of.",
        source: {
          label: "Sefton Council — local tips and recycling centres",
          url: "https://www.sefton.gov.uk/bins-recycling/local-tips-and-recycling-centres/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Southport by postcode, room count and finish required. Example areas include:",
    sideTitle: "Describe what is under the finish, not only how many walls need skimming",
    sideCopy: "A ceiling repair in High Park, whole-room skim in Birkdale and damaged older finishes around Churchtown can require different preparation. Mention cracks, loose backgrounds, damp history and whether services have recently been chased into the walls.",
    noteLead: "A clean finish depends on a sound and safe background.",
    noteText: "Ask whether the quote includes removal of loose material, boarding, beads, bonding coats, protection and waste, and stop before disturbing any material suspected to contain asbestos.",
  },
  faq: [
    ["How much does a plasterer cost in Southport?", "Pricing depends on room size, surface condition, access, preparation, ceilings, boarding, render and the required finish. Compare quotes against the same scope."],
    ["Should old materials be checked before sanding or removal?", "Yes where there is doubt. Sefton warns that asbestos-containing material presents increased risk when damaged or disturbed."],
    ["Can my plasterer take renovation waste to the household tip?", "Not as household waste if the contractor removes it. Sefton says contractor waste becomes trade waste and the contractor is responsible for disposal."],
    ["Can I post a small patch repair?", "Yes. Small ceiling and wall repairs can be posted as well as full-room skimming and larger refurbishments."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Southport?",
    copy: "Describe the surfaces and preparation once, then compare interested Southport plasterers and their quotes.",
    buttonLabel: "Get Southport plastering quotes",
  },
});

export const kitchenFittersSouthport = makeSouthportProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen in Southport? Describe the layout, units, worktops, appliances and any plumbing, electrical or structural changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Southport?",
    copy: "Enter the postcode and explain whether the job is a straightforward replacement or a full remodel. Include plans or photos, appliance positions, worktop material and any wall removal, new openings, plumbing or electrical changes so suitable Southport kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Southport kitchen-remodel checks",
    title: "Internal kitchen work can need Building Control even when the visible job looks like a cabinet replacement",
    intro: "A Southport kitchen refit can include structural openings, drainage, ventilation or electrical work behind the units. Sefton's Building Control guidance separates straightforward domestic work from projects that need a more formal Full Plans route.",
    items: [
      {
        title: "Building Notice is aimed at minor domestic work, with important exceptions",
        text: "Sefton says a Building Notice is recommended for minor internal domestic work or simple extensions, while Full Plans must be used for non-domestic buildings and buildings containing flats with shared access and is recommended for larger or more complex domestic projects.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
      {
        title: "Kitchen strip-out waste should be included explicitly in the quote",
        text: "Sefton's household recycling guidance says waste removed by a contractor becomes trade waste, while the council's bulky collection excludes building materials, rubble and several renovation items. Clarify cabinets, worktops, tiles, plasterboard and packaging before work begins.",
        source: {
          label: "Sefton Council — local tips and recycling centres",
          url: "https://www.sefton.gov.uk/bins-recycling/local-tips-and-recycling-centres/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Southport by postcode, kitchen size and project complexity. Example areas include:",
    sideTitle: "Separate the cabinet fit from structural and services work",
    sideCopy: "A like-for-like kitchen in Ainsdale, an island with new electrics in Hillside and a wall-opening project in Birkdale are not comparable jobs. List what is changing behind the finished kitchen as well as the visible units.",
    noteLead: "Ask for exclusions before choosing the cheapest quote.",
    noteText: "Clarify demolition, disposal, plumbing, electrics, gas, plastering, flooring, decorating, worktops, appliance connection and Building Control responsibility in writing.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Southport?", "Cost varies with kitchen size, unit type, worktops, appliance fitting, plumbing, electrics, demolition and structural work. Compare like-for-like scopes."],
    ["Can internal kitchen work need Building Regulations approval?", "Yes. Structural, electrical, drainage, ventilation and other changes can bring the wider project within Building Regulations."],
    ["Can a Building Notice always be used?", "No. Sefton says Full Plans must be used for certain building types and recommends that route for larger or more complex domestic projects."],
    ["Should the fitter include waste removal?", "Agree this before work begins. Contractor-removed renovation waste is trade waste, so disposal should be clearly included or excluded."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Southport?",
    copy: "Describe the kitchen and all associated work once, then compare interested Southport kitchen fitters and their quotes.",
    buttonLabel: "Get Southport kitchen quotes",
  },
});
