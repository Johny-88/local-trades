import { makeSuttonProfile } from "./suttonProfileBase";

export const plasterersSutton = makeSuttonProfile("plasterers", {
  heroCopy: "Need a plasterer in Sutton for skimming, patch repairs, ceilings, rendering or preparation after other building work? Describe the surfaces and condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Sutton?",
    copy: "Enter the postcode, room count and whether the job is patching, skimming, boarding, ceiling work or external render. Mention cracks, damp, blown areas, old finishes and any recent electrical or plumbing work so suitable Sutton plasterers can price the same scope.",
  },
  localContext: {
    eyebrow: "Sutton wall and ceiling preparation",
    title: "Resolve moisture and suspect old materials before covering them with a new finish",
    intro: "A smooth skim will not correct an active damp source, and aggressive preparation can be unsafe where older materials are uncertain. Sutton's own housing and asbestos guidance makes both checks relevant before plastering starts.",
    items: [
      {
        title: "Different types of damp need different fixes",
        text: "Sutton distinguishes rising damp, penetrating damp and condensation, with causes ranging from damp-proofing failure to leaking roofs, gutters and poor ventilation. If plaster is damaged by moisture, identify the cause before paying to cover the symptoms with a fresh finish.",
        source: {
          label: "London Borough of Sutton — damp, mould and condensation",
          url: "https://www.sutton.gov.uk/w/damp-mould-and-condensation",
        },
      },
      {
        title: "Suspected asbestos should not be sanded, drilled or stripped casually",
        text: "Sutton warns that disturbing asbestos by drilling, sawing, scrubbing or sanding can release fibres and advises seeking expert advice if a material is suspected. Old coatings, boards or panels should therefore be identified before preparation work disturbs them.",
        source: {
          label: "London Borough of Sutton — disposing of asbestos safely",
          url: "https://www.sutton.gov.uk/environment/environmental-health/disposing-asbestos-safely",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Sutton by postcode, room count and finish required. Example areas include:",
    sideTitle: "Describe what is under the finish, not only how many walls need skimming",
    sideCopy: "A ceiling repair in Hackbridge, whole-room skim in Wallington and damaged old plaster in Cheam can require different preparation. Mention cracks, loose backgrounds, damp history and whether services have recently been chased into the walls.",
    noteLead: "A clean finish depends on a sound, dry background.",
    noteText: "Ask whether the quote includes removal of loose material, boarding, beads, bonding coats, protection and waste, and resolve active moisture or hazardous-material concerns first.",
  },
  faq: [
    ["How much does a plasterer cost in Sutton?", "Pricing depends on room size, surface condition, access, preparation, ceilings, boarding, render and the required finish. Compare quotes against the same scope."],
    ["Should I plaster over a damp patch?", "Not until the cause is understood and corrected. Sutton distinguishes rising, penetrating and condensation-related damp, each of which can need a different remedy."],
    ["Should old coatings be checked before sanding?", "Yes where there is uncertainty. Sutton advises not to drill, saw, scrub or sand suspected asbestos materials and to seek expert advice first."],
    ["Can I post a small patch repair?", "Yes. Small ceiling and wall repairs can be posted as well as full-room skimming and larger refurbishments."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Sutton?",
    copy: "Describe the surfaces and preparation once, then compare interested Sutton plasterers and their quotes.",
    buttonLabel: "Get Sutton plastering quotes",
  },
});

export const kitchenFittersSutton = makeSuttonProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen in Sutton? Describe the layout, units, worktops, appliances and any plumbing, electrical or structural changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Sutton?",
    copy: "Enter the postcode and explain whether the job is a straightforward replacement or a full remodel. Include plans or photos, appliance positions, worktop material and any wall removal, new openings, plumbing or electrical changes so suitable Sutton kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Sutton kitchen-remodel checks",
    title: "Structural changes and waste disposal should be separated from the visible cabinet-fitting price",
    intro: "A like-for-like kitchen replacement is very different from a remodel that removes walls or generates demolition waste. Sutton's Building Control and waste guidance gives two practical checks to settle before choosing a fitter.",
    items: [
      {
        title: "Load-bearing wall removal is explicitly treated as a Building Control alteration",
        text: "Sutton's 2026/27 Building Control charging schedule lists removal of a load-bearing wall as an alteration to an existing dwelling. If the kitchen design opens rooms together or changes structural walls, establish the structural design and Building Regulations route before installation starts.",
        source: {
          label: "London Borough of Sutton — Building Control charging schedule 2026/27",
          url: "https://www.sutton.gov.uk/documents/d/guest/building-control-charging-schedule-2026_27",
        },
      },
      {
        title: "The council's bulky collection is not a builders-waste service",
        text: "Sutton's household bulky-item collection can take some large domestic items, but it specifically excludes builders waste, builders bags and bricks. A kitchen quote should therefore state who removes old units, rubble, packaging and trade waste and where it will be taken.",
        source: {
          label: "London Borough of Sutton — bulky item collection",
          url: "https://www.sutton.gov.uk/waste-and-recycling/bulky-waste-collections/book-bulky-item-collection",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Sutton by postcode, kitchen size and project complexity. Example areas include:",
    sideTitle: "Separate the cabinet fit from the structural and services work",
    sideCopy: "A like-for-like kitchen in Belmont, an island and new electrics in Carshalton and a wall-opening project in Cheam are not comparable jobs. List what is changing behind the finished kitchen as well as the visible units.",
    noteLead: "Ask for exclusions before choosing the cheapest quote.",
    noteText: "Clarify demolition, disposal, plumbing, electrics, gas, plastering, flooring, decorating, worktops, appliance connection and Building Control responsibility in writing.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Sutton?", "Cost varies with kitchen size, unit type, worktops, appliance fitting, plumbing, electrics, demolition and structural work. Compare like-for-like scopes."],
    ["Does removing a load-bearing wall need Building Control involvement in Sutton?", "Sutton's current Building Control charging schedule explicitly lists removal of a load-bearing wall as a domestic alteration category."],
    ["Will Sutton's bulky collection take kitchen builders waste?", "No. The council states that its bulky-item service does not take builders waste, builders bags or bricks."],
    ["Should waste removal be included in the kitchen quote?", "Yes, or clearly excluded. Old units, worktops, packaging and demolition waste can otherwise become an unexpected extra."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Sutton?",
    copy: "Describe the kitchen and all associated work once, then compare interested Sutton kitchen fitters and their quotes.",
    buttonLabel: "Get Sutton kitchen quotes",
  },
});
