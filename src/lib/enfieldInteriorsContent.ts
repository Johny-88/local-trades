import { makeEnfieldProfile } from "./enfieldProfileBase";

export const plasterersEnfield = makeEnfieldProfile("plasterers", {
  heroCopy: "Need skimming, patch repairs, ceilings, plasterboarding or rendering in Enfield? Describe the surfaces, condition and finish once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Enfield?",
    copy: "Enter the postcode, rooms or elevations involved, approximate dimensions and whether the job is patching, skimming, boarding, repair or render. Photos help suitable Enfield plasterers judge preparation and access.",
  },
  localContext: {
    eyebrow: "Enfield conservation-area finishes",
    title: "External render and visible façade changes can need an address-specific heritage check in Enfield",
    intro: "Internal skimming is usually straightforward, but external finishes can affect the appearance of a building or conservation area. Enfield has 22 conservation areas and uses Article 4 directions to protect important features in several of them.",
    items: [
      {
        title: "Conservation-area controls focus on preserving local character",
        text: "Enfield Council describes conservation areas as places of special architectural and historic interest whose character and appearance should be preserved or enhanced. External render, altered detailing or removal of original finishes can therefore need closer checking.",
        source: {
          label: "Enfield Council — conservation areas",
          url: "https://www.enfield.gov.uk/services/planning/heritage/conservation-areas",
        },
      },
      {
        title: "Article 4 directions can remove normal permitted-development rights",
        text: "In parts of Enfield, Article 4 directions mean specified exterior works that might normally avoid an application can require planning permission. Confirm the address before committing to an external finish or removing historic detailing.",
        source: {
          label: "Enfield Council — Article 4 directions in conservation areas",
          url: "https://www.enfield.gov.uk/services/planning/heritage/conservation-areas/article-4-directions-in-conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Enfield by postcode, surface type and project size. Example areas include:",
    sideTitle: "Photos of the substrate matter more than a room count",
    sideCopy: "Blown plaster in Ponders End, a ceiling skim in Bush Hill Park and external render near Enfield Town can require very different preparation. Show cracks, damp staining, loose material and existing finishes.",
    noteLead: "Do not plaster over an unresolved cause.",
    noteText: "Active leaks, penetrating damp, movement and failed backgrounds should be diagnosed first. A smooth finish will not fix the defect underneath it.",
  },
  faq: [
    ["How much does a plasterer cost in Enfield?", "Pricing depends on area, preparation, access, boarding, removal, drying conditions and whether the work is patching, skimming or rendering."],
    ["Does internal skimming need planning permission?", "Ordinary internal plaster finishing normally does not, but associated structural or regulated alterations can have separate requirements."],
    ["Can external render be restricted in an Enfield conservation area?", "Potentially. Conservation-area and Article 4 controls can affect visible exterior changes, so check the exact address and proposed finish first."],
    ["Should damp be fixed before plastering?", "Yes. Active moisture or leaks should be diagnosed and resolved before new plaster is used to cover the affected area."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Enfield?",
    copy: "Describe the surfaces, condition and finish once, then compare interested Enfield plasterers and their quotes.",
    buttonLabel: "Get Enfield plastering quotes",
  },
});

export const kitchenFittersEnfield = makeEnfieldProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or major kitchen refit in Enfield? Describe the room, units, worktops, appliances and any layout changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Enfield?",
    copy: "Enter the postcode, room size, kitchen supplier if chosen and whether the job includes removal, units, worktops, plumbing, electrics, flooring, plastering or structural changes. Suitable Enfield fitters can then price the same scope.",
  },
  localContext: {
    eyebrow: "Enfield kitchen alterations and approvals",
    title: "A kitchen refit can cross into Building Control when the job goes beyond replacing finishes and units",
    intro: "A like-for-like cabinet change is different from moving walls, altering drainage or carrying out other regulated building work. Enfield Council says changes to an existing building can require a Building Control application, separate from planning.",
    items: [
      {
        title: "Building Control applications cover changes to existing buildings where regulations apply",
        text: "Enfield Council explains that building control approval is required for relevant changes to existing buildings and is separate from planning permission. Structural alterations and other regulated elements should be identified before the kitchen is ordered.",
        source: {
          label: "Enfield Council — building control applications",
          url: "https://www.enfield.gov.uk/services/planning/building-control/building-control-applications",
        },
      },
      {
        title: "Inspection and completion documentation depend on using the correct approval route",
        text: "Enfield's Building Control service carries out site inspections and issues completion certificates when works are satisfactorily completed. Keep regulated work accessible for inspection rather than hiding it behind finished cabinets or surfaces too early.",
        source: {
          label: "Enfield Council — overview of building control and site visits",
          url: "https://www.enfield.gov.uk/services/planning/building-control/overview-of-building-control",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Enfield by postcode, kitchen type and project size. Example areas include:",
    sideTitle: "Separate the cabinet price from the whole-room job",
    sideCopy: "A dry-fit kitchen in Southgate, a full strip-out in Edmonton and a layout change in Enfield Town can have very different plumbing, electrical, plastering and structural requirements.",
    noteLead: "List who supplies every trade.",
    noteText: "Clarify removal, waste, plumbing, gas, electrics, flooring, decorating, worktop templating and appliance connection. Missing trades are a common reason apparently similar kitchen quotes differ.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Enfield?", "Cost depends on kitchen size, unit type, worktops, removal, services, flooring, plastering, appliances and any structural or layout changes."],
    ["Does every kitchen replacement need Building Control?", "No. Straightforward like-for-like fitting may not, but structural alterations and other regulated work can require Building Control approval."],
    ["Are planning permission and Building Control the same thing?", "No. Enfield Council explicitly treats them as separate approvals and some projects require both."],
    ["Can I post a kitchen fitting job if I already bought the units?", "Yes. Provide the plan, supplier, delivery status and a clear list of fitting and associated trades required."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Enfield?",
    copy: "Describe the kitchen, services and fitting scope once, then compare interested Enfield kitchen fitters and their quotes.",
    buttonLabel: "Get Enfield kitchen quotes",
  },
});
