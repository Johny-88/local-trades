import { makeBirkenheadProfile } from "./birkenheadProfileBase";

export const plasterersBirkenhead = makeBirkenheadProfile("plasterers", {
  heroCopy: "Need skimming, patch repairs, ceilings, plasterboarding or rendering in Birkenhead? Describe the surfaces, condition and finish once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Birkenhead?",
    copy: "Enter the postcode, rooms or elevations involved, approximate dimensions and whether the job is patching, skimming, boarding, repair or render. Photos help suitable Birkenhead plasterers judge preparation and access.",
  },
  localContext: {
    eyebrow: "Birkenhead conservation-area finishes",
    title: "External render and visible façade changes can need a heritage check in Birkenhead's conservation areas",
    intro: "Internal skimming is usually straightforward, but external finishes can alter the appearance of historic streets. Birkenhead includes several conservation areas where Wirral Council applies tighter planning control to protect character and detailing.",
    items: [
      {
        title: "Conservation areas have tighter controls over exterior alterations",
        text: "Wirral Council says conservation areas are protected because of their special architectural or historic interest and that stricter planning controls can apply to demolition, extensions and other alterations. External render or removal of original finishes should be checked at the exact address.",
        source: {
          label: "Wirral Council — conservation areas",
          url: "https://www.wirral.gov.uk/planning-and-building/built-conservation/conservation-areas",
        },
      },
      {
        title: "Clifton Park is a Birkenhead conservation area with specific historic character",
        text: "Wirral identifies Clifton Park, south-west of Birkenhead town centre, as a conservation area developed around high-quality nineteenth-century villas. Historic façades and detailing can make the choice of render, repairs and finish more sensitive than on an ordinary modern property.",
        source: {
          label: "Wirral Council — Clifton Park conservation area",
          url: "https://www.wirral.gov.uk/planning-and-building/built-conservation/conservation-areas/clifton-park-conservation-area",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Birkenhead by postcode, surface type and project size. Example areas include:",
    sideTitle: "Photos of the substrate matter more than a room count",
    sideCopy: "Blown plaster in Tranmere, a ceiling skim in Prenton and external render in Oxton can require very different preparation. Show cracks, damp staining, loose material and existing finishes.",
    noteLead: "Do not plaster over an unresolved cause.",
    noteText: "Active leaks, penetrating damp, movement and failed backgrounds should be diagnosed first. A smooth finish will not fix the defect underneath it.",
  },
  faq: [
    ["How much does a plasterer cost in Birkenhead?", "Pricing depends on area, preparation, access, boarding, removal, drying conditions and whether the work is patching, skimming or rendering."],
    ["Does internal skimming need planning permission?", "Ordinary internal plaster finishing normally does not, but associated structural or regulated alterations can have separate requirements."],
    ["Can external render be sensitive in a Birkenhead conservation area?", "Yes. Wirral applies tighter planning control in conservation areas, so visible exterior changes should be checked at the exact address."],
    ["Should damp be fixed before plastering?", "Yes. Active moisture or leaks should be diagnosed and resolved before new plaster is used to cover the affected area."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Birkenhead?",
    copy: "Describe the surfaces, condition and finish once, then compare interested Birkenhead plasterers and their quotes.",
    buttonLabel: "Get Birkenhead plastering quotes",
  },
});

export const kitchenFittersBirkenhead = makeBirkenheadProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or major kitchen refit in Birkenhead? Describe the room, units, worktops, appliances and any layout changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Birkenhead?",
    copy: "Enter the postcode, room size, kitchen supplier if chosen and whether the job includes removal, units, worktops, plumbing, electrics, flooring, plastering or structural changes. Suitable Birkenhead fitters can then price the same scope.",
  },
  localContext: {
    eyebrow: "Wirral kitchen alterations and Building Control",
    title: "A kitchen refit can cross into Building Control when the job goes beyond replacing units and finishes",
    intro: "A like-for-like cabinet change is different from moving walls, altering drainage or carrying out other regulated building work. Wirral Council requires the appropriate Building Control application where the wider project falls under the Building Regulations.",
    items: [
      {
        title: "Wirral accepts Building Control applications for relevant alterations",
        text: "Wirral Council provides Full Plans and Building Notice routes for proposed work. Structural alterations and other regulated elements should be identified before the kitchen is ordered so the fitter is working to the correct approved scope.",
        source: {
          label: "Wirral Council — submit a Building Regulations application",
          url: "https://www.wirral.gov.uk/planning-and-building/building-control/apply-building-regulation-applications",
        },
      },
      {
        title: "Inspection stages can include drainage before it is covered",
        text: "Wirral's Building Control inspection guidance lists drainage prior to backfilling among the stages that can require inspection. If a kitchen layout change affects regulated drainage or other concealed work, coordinate the inspection before cabinets, floors or finishes hide it.",
        source: {
          label: "Wirral Council — Building Regulation inspections",
          url: "https://www.wirral.gov.uk/planning-and-building/building-control/building-regulation-inspections",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Birkenhead by postcode, kitchen type and project size. Example areas include:",
    sideTitle: "Separate the cabinet price from the whole-room job",
    sideCopy: "A dry-fit kitchen in Claughton, a full strip-out in Rock Ferry and a layout change in Oxton can have very different plumbing, electrical, plastering and structural requirements.",
    noteLead: "List who supplies every trade.",
    noteText: "Clarify removal, waste, plumbing, gas, electrics, flooring, decorating, worktop templating and appliance connection. Missing trades are a common reason apparently similar kitchen quotes differ.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Birkenhead?", "Cost depends on kitchen size, unit type, worktops, removal, services, flooring, plastering, appliances and any structural or layout changes."],
    ["Does every kitchen replacement need Building Control?", "No. Straightforward like-for-like fitting may not, but structural alterations and other regulated work can require Building Control approval."],
    ["Can drainage work need inspection before it is covered?", "Yes. Wirral lists drainage prior to backfilling among the Building Control inspection stages that may apply."],
    ["Can I post a kitchen fitting job if I already bought the units?", "Yes. Provide the plan, supplier, delivery status and a clear list of fitting and associated trades required."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Birkenhead?",
    copy: "Describe the kitchen, services and fitting scope once, then compare interested Birkenhead kitchen fitters and their quotes.",
    buttonLabel: "Get Birkenhead kitchen quotes",
  },
});
