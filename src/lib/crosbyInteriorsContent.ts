import { makeCrosbyProfile } from "./crosbyProfileBase";

export const plasterersCrosby = makeCrosbyProfile("plasterers", {
  heroCopy: "Need skimming, patch repairs, ceilings, plasterboarding or rendering in Crosby? Describe the surfaces, condition and finish once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Crosby?",
    copy: "Enter the postcode, rooms or elevations involved, approximate dimensions and whether the job is patching, skimming, boarding, repair or render. Photos help suitable Crosby plasterers judge preparation and access.",
  },
  localContext: {
    eyebrow: "Crosby conservation-area finishes",
    title: "External render and visible façade changes can need an address-specific heritage check around Crosby",
    intro: "Internal skimming is usually straightforward, but exterior finishes can affect the character of a conservation area. Crosby and its surroundings include Moor Park, Crosby Hall, Little Crosby and Blundellsands Park conservation areas, with additional Article 4 control in Moor Park.",
    items: [
      {
        title: "Conservation areas protect more than individual listed buildings",
        text: "Sefton Council says conservation-area character includes the layout, grouping of buildings, materials, landscape features and quality of public and private spaces. Visible render or removal of original external finishes can therefore need more care than an ordinary internal plaster job.",
        source: {
          label: "Sefton Council — conservation areas",
          url: "https://www.sefton.gov.uk/conservationareas",
        },
      },
      {
        title: "Moor Park has extra Article 4 control over specified exterior alterations",
        text: "Sefton confirms an Article 4 Direction for Moor Park that restricts specified work that might otherwise be permitted development. If external plastering or rendering changes a visible elevation there, check the exact planning position first.",
        source: {
          label: "Sefton Council — Article 4 Direction for conservation areas",
          url: "https://www.sefton.gov.uk/planning-building-control/planning-policy-including-local-plan-and-neighbourhood-planning/article-4-directions/article-4-direction-for-conservation-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Crosby by postcode, surface type and project size. Example areas include:",
    sideTitle: "Photos of the substrate matter more than a room count",
    sideCopy: "Blown plaster in Waterloo, a ceiling skim in Thornton and external render near Moor Park can require very different preparation. Show cracks, damp staining, loose material and existing finishes.",
    noteLead: "Do not plaster over an unresolved cause.",
    noteText: "Active leaks, penetrating damp, movement and failed backgrounds should be diagnosed first. A smooth finish will not fix the defect underneath it.",
  },
  faq: [
    ["How much does a plasterer cost in Crosby?", "Pricing depends on area, preparation, access, boarding, removal, drying conditions and whether the work is patching, skimming or rendering."],
    ["Does internal skimming need planning permission?", "Ordinary internal plaster finishing normally does not, but associated structural or regulated alterations can have separate requirements."],
    ["Can external render be restricted in a Crosby conservation area?", "Potentially. Conservation-area and Article 4 controls can affect visible exterior changes, so check the exact address and proposed finish first."],
    ["Should damp be fixed before plastering?", "Yes. Active moisture or leaks should be diagnosed and resolved before new plaster is used to cover the affected area."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Crosby?",
    copy: "Describe the surfaces, condition and finish once, then compare interested Crosby plasterers and their quotes.",
    buttonLabel: "Get Crosby plastering quotes",
  },
});

export const kitchenFittersCrosby = makeCrosbyProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or major kitchen refit in Crosby? Describe the room, units, worktops, appliances and any layout changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Crosby?",
    copy: "Enter the postcode, room size, kitchen supplier if chosen and whether the job includes removal, units, worktops, plumbing, electrics, flooring, plastering or structural changes. Suitable Crosby fitters can then price the same scope.",
  },
  localContext: {
    eyebrow: "Crosby kitchen alterations and Building Control",
    title: "A kitchen refit can cross into Building Control when the work goes beyond replacing cabinets and finishes",
    intro: "A like-for-like kitchen replacement is different from moving walls, changing drainage or carrying out other regulated building work. Sefton offers Building Notice and Full Plans routes depending on the nature and complexity of the project.",
    items: [
      {
        title: "Building Notices are aimed at eligible domestic work",
        text: "Sefton Council says the Building Notice route can be used for domestic properties in appropriate cases and recommends it for minor internal works or simple extensions. Structural or more complicated kitchen alterations should be assessed before fitting begins.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
      {
        title: "Full Plans are recommended for larger and more complex domestic projects",
        text: "Sefton recommends Full Plans for larger complex domestic extensions and requires that route for certain other building types. If the kitchen is part of an extension or major remodelling, the fitter should work from the same approved drawings and technical specification as the other trades.",
        source: {
          label: "Sefton Council — making a Building Regulations application",
          url: "https://sefton.gov.uk/planning-building-control/building-control/making-a-building-regulations-application/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Crosby by postcode, kitchen type and project size. Example areas include:",
    sideTitle: "Separate the cabinet price from the whole-room job",
    sideCopy: "A dry-fit kitchen in Hightown, a full strip-out in Waterloo and a layout change in Blundellsands can have very different plumbing, electrical, plastering and structural requirements.",
    noteLead: "List who supplies every trade.",
    noteText: "Clarify removal, waste, plumbing, gas, electrics, flooring, decorating, worktop templating and appliance connection. Missing trades are a common reason apparently similar kitchen quotes differ.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Crosby?", "Cost depends on kitchen size, unit type, worktops, removal, services, flooring, plastering, appliances and any structural or layout changes."],
    ["Does every kitchen replacement need Building Control?", "No. Straightforward like-for-like fitting may not, but structural alterations and other regulated work can require Building Control approval."],
    ["When might Full Plans be preferable?", "Sefton recommends Full Plans for larger or more complex domestic extensions and requires it for certain other categories of building work."],
    ["Can I post a kitchen fitting job if I already bought the units?", "Yes. Provide the plan, supplier, delivery status and a clear list of fitting and associated trades required."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Crosby?",
    copy: "Describe the kitchen, services and fitting scope once, then compare interested Crosby kitchen fitters and their quotes.",
    buttonLabel: "Get Crosby kitchen quotes",
  },
});
