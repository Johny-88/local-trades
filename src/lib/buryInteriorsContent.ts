import { makeBuryProfile } from "./buryProfileBase";

export const plasterersBury = makeBuryProfile("plasterers", {
  heroCopy: "Need skimming, patch repairs, ceilings, plasterboarding or rendering in Bury? Describe the surfaces, condition and finish once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Bury?",
    copy: "Enter the postcode, rooms or elevations involved, approximate dimensions and whether the job is patching, skimming, boarding, repair or render. Photos help suitable Bury plasterers judge preparation and access.",
  },
  localContext: {
    eyebrow: "Bury conservation-area finishes",
    title: "External render and visible façade changes can need an address-specific heritage check",
    intro: "Internal skimming is usually straightforward, but external finishes can affect the appearance of a conservation area. Bury Council designates conservation areas including Bury Town Centre and Walmersley and expects their character or appearance to be preserved or enhanced.",
    items: [
      {
        title: "Conservation-area designation brings additional controls",
        text: "Bury Council explains that conservation areas are protected because of their special architectural or historic interest and that some normal permitted-development rights are restricted. Visible external changes should be checked before the finish is specified.",
        source: {
          label: "Bury Council — Conservation Areas & Article 4 Directions",
          url: "https://www.bury.gov.uk/planning-building-control/heritage-and-conservation/conservation-areas",
        },
      },
      {
        title: "Bury Town Centre is one of the borough's designated conservation areas",
        text: "The council's current list includes Bury Town Centre alongside Walmersley and ten other conservation areas. If render, removal of original finishes or other façade work affects a designated area, confirm the planning position first.",
        source: {
          label: "Bury Council — Conservation Areas & Article 4 Directions",
          url: "https://www.bury.gov.uk/planning-building-control/heritage-and-conservation/conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Bury by postcode, surface type and project size. Example areas include:",
    sideTitle: "Photos of the substrate matter more than a room count",
    sideCopy: "Blown plaster in Pimhole, a ceiling skim in Brandlesholme and external render near Bury Town Centre can require very different preparation. Show cracks, damp staining, loose material and existing finishes.",
    noteLead: "Do not plaster over an unresolved cause.",
    noteText: "Active leaks, penetrating damp, movement and failed backgrounds should be diagnosed first. A smooth finish will not fix the defect underneath it.",
  },
  faq: [
    ["How much does a plasterer cost in Bury?", "Pricing depends on area, preparation, access, boarding, removal, drying conditions and whether the work is patching, skimming or rendering."],
    ["Does internal skimming need planning permission?", "Ordinary internal plaster finishing normally does not, but associated structural or regulated alterations can have separate requirements."],
    ["Can external render be restricted in a Bury conservation area?", "Potentially. Conservation-area controls can affect visible exterior changes, so check the exact address and proposed finish first."],
    ["Should damp be fixed before plastering?", "Yes. Active moisture or leaks should be diagnosed and resolved before new plaster is used to cover the affected area."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Bury?",
    copy: "Describe the surfaces, condition and finish once, then compare interested Bury plasterers and their quotes.",
    buttonLabel: "Get Bury plastering quotes",
  },
});

export const kitchenFittersBury = makeBuryProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or major kitchen refit in Bury? Describe the room, units, worktops, appliances and any layout changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Bury?",
    copy: "Enter the postcode, room size, kitchen supplier if chosen and whether the job includes removal, units, worktops, plumbing, electrics, flooring, plastering or structural changes. Suitable Bury fitters can then price the same scope.",
  },
  localContext: {
    eyebrow: "Bury kitchen alterations and Building Control",
    title: "A kitchen refit can cross into Building Regulations when the job goes beyond replacing finishes and units",
    intro: "A like-for-like cabinet change is different from moving walls, altering drainage or carrying out regulated electrical work. Bury Council lists structural alterations, drainage changes and domestic electrical installations among work that can require Building Regulations approval.",
    items: [
      {
        title: "Structural and drainage changes are specifically listed as regulated work",
        text: "Bury Council says Building Regulations will probably apply to structural alterations and to providing, extending or altering drainage facilities. Identify these elements before ordering the final kitchen layout.",
        source: {
          label: "Bury Council — building advice",
          url: "https://www.bury.gov.uk/planning-building-control/building-regulations/building-advice",
        },
      },
      {
        title: "The council inspects work at relevant stages",
        text: "Bury Building Control says work is inspected at the start, end and at appropriate stages in between. Regulated work should remain accessible for inspection rather than being hidden behind finished units or surfaces too early.",
        source: {
          label: "Bury Council — Building Regulations consent",
          url: "https://www.bury.gov.uk/planning-building-control/building-regulations/consent",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Bury by postcode, kitchen type and project size. Example areas include:",
    sideTitle: "Separate the cabinet price from the whole-room job",
    sideCopy: "A dry-fit kitchen in Elton, a full strip-out in Fishpool and a layout change in Walmersley can have very different plumbing, electrical, plastering and structural requirements.",
    noteLead: "List who supplies every trade.",
    noteText: "Clarify removal, waste, plumbing, gas, electrics, flooring, decorating, worktop templating and appliance connection. Missing trades are a common reason apparently similar kitchen quotes differ.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Bury?", "Cost depends on kitchen size, unit type, worktops, removal, services, flooring, plastering, appliances and any structural or layout changes."],
    ["Does every kitchen replacement need Building Control?", "No. Straightforward like-for-like fitting may not, but structural, drainage and regulated electrical changes can require approval."],
    ["Can drainage changes trigger Building Regulations?", "Yes. Bury Council specifically lists providing, extending or altering drainage facilities among work likely to require approval."],
    ["Can I post a kitchen fitting job if I already bought the units?", "Yes. Provide the plan, supplier, delivery status and a clear list of fitting and associated trades required."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Bury?",
    copy: "Describe the kitchen, services and fitting scope once, then compare interested Bury kitchen fitters and their quotes.",
    buttonLabel: "Get Bury kitchen quotes",
  },
});
