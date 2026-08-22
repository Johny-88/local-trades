import { makeLeicesterProfile } from "./leicesterProfileBase";

export const treeSurgeonsLeicester = makeLeicesterProfile("tree-surgeons", {
  heroCopy: "Need tree pruning, reduction, removal or other arboricultural work in Leicester? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Leicester?",
    copy: "Enter the postcode and describe the tree species if known, approximate size, work required and access. Include photos of the whole tree, stem and nearby buildings or boundaries so suitable Leicester tree surgeons can judge the job.",
  },
  localContext: {
    eyebrow: "Leicester protected-tree context",
    title: "TPOs and conservation-area trees need checks before work starts",
    intro: "Leicester has extensive heritage and conservation coverage, and tree protection is part of that planning framework. Homeowners should establish whether a tree is protected before accepting a quote that assumes work can begin immediately.",
    items: [
      {
        title: "TPO trees require council permission for qualifying work",
        text: "Leicester City Council's tree-preservation guidance says permission is required to carry out works to trees protected by a Tree Preservation Order, subject to statutory exemptions.",
        source: {
          label: "Leicester City Council — tree preservation FAQs",
          url: "https://www.leicester.gov.uk/media/178335/tree-preservation-faqs-2.pdf",
        },
      },
      {
        title: "Conservation-area tree work normally needs six weeks' notice",
        text: "The same council guidance says six weeks' notice is required for qualifying work to trees in a conservation area. Ask the tree surgeon to confirm protection status and who will handle any notice or application before fixing the start date.",
        source: {
          label: "Leicester City Council — tree preservation FAQs",
          url: "https://www.leicester.gov.uk/media/178335/tree-preservation-faqs-2.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Leicester by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the tree and everything around it",
    sideCopy: "A mature tree in Stoneygate, a garden tree in Knighton and a tree beside a terrace in Westcotes can involve very different protection, rigging, access and disposal requirements.",
    noteLead: "Check protection before agreeing a start date.",
    noteText: "Ask whether the contractor has checked TPO and conservation-area status and whether any application or notice work is included in the quote.",
  },
  faq: [
    ["How much does tree surgery cost in Leicester?", "Cost depends on tree size, species, access, rigging, waste removal, stump work and any protected-tree process. Compare quotes for the same scope."],
    ["Can I prune a tree in a Leicester conservation area?", "Possibly, but qualifying work normally needs six weeks' prior notice to the council."],
    ["What if the tree has a Tree Preservation Order?", "Qualifying work normally requires council permission unless a specific statutory exemption applies."],
    ["Should the quote include branch and log removal?", "Confirm this explicitly. Chipping, timber removal, stump grinding and site clearance can materially change the price."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Leicester?",
    copy: "Describe the tree, access and required work once, then compare interested Leicester tree surgeons and their quotes.",
    buttonLabel: "Get Leicester tree-surgery quotes",
  },
});

export const architectsLeicester = makeLeicesterProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or other building project in Leicester? Describe the property and project once, then compare architects who cover the city.",
  answer: {
    title: "Looking for an architect near you in Leicester?",
    copy: "Enter the postcode and explain the existing property, proposed changes and any planning history you know. Add photos or sketches so suitable Leicester architects can judge the likely design, planning and technical work.",
  },
  localContext: {
    eyebrow: "Leicester planning and heritage context",
    title: "Leicester combines extensive heritage protection with targeted HMO Article 4 controls",
    intro: "The city's current Local Plan records hundreds of listed buildings and 25 conservation areas, while separate Article 4 directions remove normal permitted-development rights in specific places and for small-HMO conversions in defined areas.",
    items: [
      {
        title: "Leicester has 396 listed buildings and 25 conservation areas in the current Local Plan",
        text: "Leicester City Council's Local Plan heritage section records 396 listed buildings, 25 conservation areas and more than 442 buildings and sites of local interest. Designation status should therefore be checked before assuming ordinary alteration rights apply.",
        source: {
          label: "Leicester City Council — Local Plan heritage",
          url: "https://www.leicester.gov.uk/leicester-local-plan/heritage",
        },
      },
      {
        title: "Small-HMO permitted development is removed in Leicester Article 4 areas",
        text: "The council says changing a family house to a small HMO for up to six people normally has permitted-development rights, but planning permission is required where the property falls inside Leicester's HMO Article 4 areas.",
        source: {
          label: "Leicester City Council — HMO planning and Article 4",
          url: "https://www.leicester.gov.uk/planning-environment-and-building-control/planning-applications/check-if-you-need-planning-permission/houses-multiple-occupation-hmos-planning-permission-and-article-4-directions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Leicester by project type, property status and postcode. Example areas include:",
    sideTitle: "Start with designation and lawful use",
    sideCopy: "A period property in Stoneygate, a shared house in Westcotes and a suburban home in Evington can face very different planning constraints even when the proposed extension or internal layout looks similar.",
    noteLead: "Check Article 4 and heritage status early.",
    noteText: "Conservation areas, listed status, Article 4 directions and previous planning conditions can remove assumptions that would be safe on an unrestricted property.",
  },
  faq: [
    ["How much does an architect cost in Leicester?", "Fees depend on project size, complexity, surveys, planning work, technical drawings and contract administration. Compare the same service stages."],
    ["How many conservation areas are in Leicester?", "Leicester's current Local Plan records 25 conservation areas."],
    ["Does a family house to small HMO conversion always need planning permission in Leicester?", "Not everywhere, but it does within the defined HMO Article 4 areas. Larger HMOs have separate planning requirements."],
    ["Is conservation-area status the same as listed-building status?", "No. They are separate designations with different controls, and a property can be affected by one, both or neither."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Leicester?",
    copy: "Describe the property and proposed project once, then compare interested Leicester architects and their approaches.",
    buttonLabel: "Get Leicester architect quotes",
  },
});
