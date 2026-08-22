import { makeWalsallProfile } from "./walsallProfileBase";

export const treeSurgeonsWalsall = makeWalsallProfile("tree-surgeons", {
  heroCopy: "Need a tree surgeon in Walsall for pruning, felling, crown work or an inspection? Describe the trees, access and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Walsall?",
    copy: "Enter the postcode, number and approximate size of trees, the work you think is needed and any access restrictions. Mention suspected TPO or conservation-area protection so suitable Walsall tree surgeons can advise on the correct process.",
  },
  localContext: {
    eyebrow: "Walsall protected-tree checks",
    title: "Tree work may need council approval before a saw is used",
    intro: "Walsall has a large number of Tree Preservation Orders and 18 conservation areas. A competent tree surgeon should check whether statutory protection applies before pruning or felling starts.",
    items: [
      {
        title: "The borough has more than 900 Tree Preservation Orders",
        text: "Walsall Council says the borough currently has over 900 TPOs. A tree protected by a TPO cannot be felled or pruned without consent except in limited circumstances, so the exact property and tree position should be checked before work is booked.",
        source: {
          label: "Walsall Council — tree preservation orders",
          url: "https://go.walsall.gov.uk/planning-and-building-control/listed-buildings-conservation-and-environment/tree-preservation",
        },
      },
      {
        title: "Conservation-area and TPO applications run on different timescales",
        text: "Walsall says it has six weeks to determine a conservation-area tree application and eight weeks for a TPO application. The council also advises tree owners to contact the planning authority before work to establish whether protection applies.",
        source: {
          label: "Walsall Council — apply to work on a protected tree",
          url: "https://go.walsall.gov.uk/planning-and-building-control/listed-buildings-conservation-and-environment/tree-preservation/apply",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Walsall by postcode, tree size and access. Example areas include:",
    sideTitle: "Give the tree location and access route, not only the species",
    sideCopy: "A garden tree in Aldridge, a mature tree near a conservation area in Bloxwich and a confined-space removal in Willenhall can require very different equipment and permissions. Photos showing the crown, stem and access are useful.",
    noteLead: "Protection checks should happen before work begins.",
    noteText: "Ask the contractor to confirm whether the tree is covered by a TPO, conservation-area controls, a planning condition or another restriction and who will handle any application.",
  },
  faq: [
    ["How much does a tree surgeon cost in Walsall?", "Price depends on tree size, work type, access, disposal, climbing or machinery requirements and whether permissions are needed. Compare quotes against the same specification."],
    ["How many TPOs are there in Walsall?", "Walsall Council says the borough has more than 900 Tree Preservation Orders."],
    ["Do trees in Walsall conservation areas have protection?", "Yes. Walsall says trees in its 18 conservation areas have protection and work should be checked with the planning authority."],
    ["How long can a protected-tree application take?", "Walsall states six weeks for conservation-area tree applications and eight weeks for TPO applications."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Walsall?",
    copy: "Describe the trees, access and required work once, then compare interested Walsall tree surgeons and their quotes.",
    buttonLabel: "Get Walsall tree-work quotes",
  },
});

export const architectsWalsall = makeWalsallProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or change of use in Walsall? Describe the property and proposal once, then compare architects and designers who cover your area.",
  answer: {
    title: "Looking for an architect near you in Walsall?",
    copy: "Enter the postcode, property type, proposed works and project stage. Mention conservation-area, listed-building or HMO use where relevant so suitable Walsall architects can assess planning and Building Regulations requirements from the start.",
  },
  localContext: {
    eyebrow: "Walsall planning constraints",
    title: "HMO and heritage controls can remove normal permitted-development assumptions",
    intro: "Walsall has borough-wide planning controls for HMOs and a network of conservation areas, listed buildings and Article 4 Directions. Early site-specific checks can prevent a design being developed around rights that do not apply to the property.",
    items: [
      {
        title: "Creating or extending an HMO now needs planning permission across Walsall",
        text: "Walsall Council says a borough-wide Article 4 Direction took effect on 1 October 2025. It removes the permitted-development right to create smaller HMOs, so anyone intending to develop or extend an HMO must obtain planning permission alongside any licensing requirement.",
        source: {
          label: "Walsall Council — HMO Article 4 Direction",
          url: "https://go.walsall.gov.uk/planning-and-building-control/planning-policy/houses-multiple-occupation-hmo-consultation-article-4",
        },
      },
      {
        title: "Walsall has 18 conservation areas and more than 160 listed buildings",
        text: "The council lists 18 conservation areas across the borough and says there are over 160 listed buildings. Listed-building consent is required for work affecting a listed building's special character, while conservation areas and local Article 4 Directions can add further planning controls.",
        source: {
          label: "Walsall Council — conservation areas",
          url: "https://go.walsall.gov.uk/planning-and-building-control/listed-buildings-conservation-and-environment/conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects and designers may cover Walsall by postcode, project type and stage. Example areas include:",
    sideTitle: "Identify planning constraints before developing the design",
    sideCopy: "An extension in Pelsall, a listed-building alteration in Walsall and an HMO conversion in Darlaston can follow very different approval routes. Give the designer any known planning history, listing or conservation status at the outset.",
    noteLead: "Planning permission and Building Regulations are separate systems.",
    noteText: "A project can need one, both or neither depending on the work. Ask the designer to define what they will prepare, submit and coordinate before comparing fees.",
  },
  faq: [
    ["How much does an architect cost in Walsall?", "Fees vary with project size, complexity and whether you need concept design, planning drawings, technical Building Regulations work or full project support."],
    ["Do I need planning permission to create an HMO in Walsall?", "Yes. Walsall's borough-wide Article 4 Direction means planning permission is required to create or extend an HMO from 1 October 2025."],
    ["How many conservation areas are in Walsall?", "Walsall Council currently lists 18 conservation areas across the borough."],
    ["Does a listed building need a separate consent?", "Work that affects the special character of a listed building can require listed-building consent in addition to any planning permission or Building Regulations approval."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Walsall?",
    copy: "Describe the property, proposal and project stage once, then compare interested Walsall architects and designers.",
    buttonLabel: "Get Walsall design quotes",
  },
});
