import { makeBootleProfile } from "./bootleProfileBase";

export const plasterersBootle = makeBootleProfile("plasterers", {
  heroCopy: "Need skimming, patch repairs, ceilings, plasterboarding or rendering in Bootle? Describe the surfaces, condition and finish once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Bootle?",
    copy: "Enter the postcode, rooms or elevations involved, approximate dimensions and whether the job is patching, skimming, boarding, repair or render. Photos help suitable Bootle plasterers judge preparation and access.",
  },
  localContext: {
    eyebrow: "Bootle conservation-area finishes",
    title: "External render and visible façade work near Derby Park need more care than an ordinary internal skim",
    intro: "Internal plastering is usually straightforward, but external finishes can affect a building's appearance and local heritage character. Derby Park Conservation Area sits immediately east of Bootle town centre and includes Victorian terraces, villas and historic townscape.",
    items: [
      {
        title: "Derby Park's conservation status is intended to protect its historic character",
        text: "Sefton Council says conservation areas are designated for their special architectural or historic interest and alterations should preserve or enhance that character. External render, removal of original detailing or a major change of finish should therefore be checked before work starts.",
        source: {
          label: "Sefton Council — conservation areas",
          url: "https://sefton.gov.uk/conservationareas",
        },
      },
      {
        title: "Planning constraints can remove normal rights for specified works",
        text: "Sefton's planning-constraints guidance explains that conservation status and Article 4 controls can affect work that might otherwise avoid a planning application. For visible exterior plaster or render, confirm the exact address and proposed finish first.",
        source: {
          label: "Sefton Council — planning constraints",
          url: "https://www.sefton.gov.uk/planning-building-control/apply-for-permission/planning-constraints/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Bootle by postcode, surface type and project size. Example areas include:",
    sideTitle: "Photos of the substrate matter more than a room count",
    sideCopy: "Blown plaster in Linacre, a ceiling skim in Netherton and external render near Derby Park can require very different preparation. Show cracks, damp staining, loose material and existing finishes.",
    noteLead: "Do not plaster over an unresolved cause.",
    noteText: "Active leaks, penetrating damp, movement and failed backgrounds should be diagnosed first. A smooth finish will not fix the defect underneath it.",
  },
  faq: [
    ["How much does a plasterer cost in Bootle?", "Pricing depends on area, preparation, access, boarding, removal, drying conditions and whether the work is patching, skimming or rendering."],
    ["Does internal skimming need planning permission?", "Ordinary internal plaster finishing normally does not, but associated structural or regulated alterations can have separate requirements."],
    ["Can external render be sensitive in Derby Park Conservation Area?", "Yes. Visible exterior changes in a conservation area should be checked against the property's planning constraints and heritage character."],
    ["Should damp be fixed before plastering?", "Yes. Active moisture or leaks should be diagnosed and resolved before new plaster is used to cover the affected area."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Bootle?",
    copy: "Describe the surfaces, condition and finish once, then compare interested Bootle plasterers and their quotes.",
    buttonLabel: "Get Bootle plastering quotes",
  },
});

export const kitchenFittersBootle = makeBootleProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or major kitchen refit in Bootle? Describe the room, units, worktops, appliances and any layout changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Bootle?",
    copy: "Enter the postcode, room size, kitchen supplier if chosen and whether the job includes removal, units, worktops, plumbing, electrics, flooring, plastering or structural changes. Suitable Bootle fitters can then price the same scope.",
  },
  localContext: {
    eyebrow: "Bootle kitchen alterations and Building Control",
    title: "A kitchen refit can move from simple fitting into regulated building work when walls, structure or services change",
    intro: "Replacing cabinets in the same layout is very different from removing walls, changing drainage or carrying out other regulated alterations. Sefton's current Building Control guidance distinguishes simpler Building Notice projects from Full Plans work.",
    items: [
      {
        title: "Building Notice is aimed at simpler domestic projects",
        text: "Sefton Council says Building Notices can be used for domestic work such as minor internal alterations or simple extensions, while Full Plans are recommended for larger or more complex projects. Identify structural and service changes before the kitchen order is finalised.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
      {
        title: "Planning permission and Building Regulations are separate checks",
        text: "Sefton's planning guidance says building, altering or extending a property may require planning permission, Building Regulations approval or both. A kitchen fitter should know which parts of the job are merely installation and which depend on other trades or approvals.",
        source: {
          label: "Sefton Council — how to make a planning application",
          url: "https://www.sefton.gov.uk/planning-building-control/apply-for-permission/how-to-make-a-planning-application",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Bootle by postcode, kitchen type and project size. Example areas include:",
    sideTitle: "Separate the cabinet price from the whole-room job",
    sideCopy: "A dry-fit kitchen in Litherland, a full strip-out in Bootle and a layout change in Seaforth can have very different plumbing, electrical, plastering and structural requirements.",
    noteLead: "List who supplies every trade.",
    noteText: "Clarify removal, waste, plumbing, gas, electrics, flooring, decorating, worktop templating and appliance connection. Missing trades are a common reason apparently similar kitchen quotes differ.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Bootle?", "Cost depends on kitchen size, unit type, worktops, removal, services, flooring, plastering, appliances and any structural or layout changes."],
    ["Does every kitchen replacement need Building Control?", "No. Straightforward like-for-like fitting may not, but structural alterations and other regulated work can require approval."],
    ["Are planning permission and Building Control the same thing?", "No. They are separate approval systems and some projects require both."],
    ["Can I post a kitchen fitting job if I already bought the units?", "Yes. Provide the plan, supplier, delivery status and a clear list of fitting and associated trades required."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Bootle?",
    copy: "Describe the kitchen, services and fitting scope once, then compare interested Bootle kitchen fitters and their quotes.",
    buttonLabel: "Get Bootle kitchen quotes",
  },
});
