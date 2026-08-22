import { makeBromleyProfile } from "./bromleyProfileBase";

export const treeSurgeonsBromley = makeBromleyProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, removal or an inspection of a tree in Bromley? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Bromley?",
    copy: "Enter the postcode, approximate tree size and the work you think is needed. Add photos from more than one angle and say whether the tree may be protected or inside a conservation area so suitable Bromley tree surgeons can judge the next step.",
  },
  localContext: {
    eyebrow: "Bromley protected-tree rules",
    title: "Bromley has extensive TPO coverage, and conservation-area trees need advance notice",
    intro: "The borough maintains records for more than 2,000 Tree Preservation Orders and separately protects trees in conservation areas. A routine-looking prune can therefore need an address check before a start date is agreed.",
    items: [
      {
        title: "Bromley records more than 2,000 Tree Preservation Orders",
        text: "The council says there are currently over 2,000 TPOs in Bromley and provides an interactive map for checking protected trees. Permission is normally required before pruning or felling a tree covered by an order, subject to limited exceptions.",
        source: {
          label: "London Borough of Bromley — Tree Preservation Orders",
          url: "https://www.bromley.gov.uk/TreeProtection",
        },
      },
      {
        title: "Conservation-area tree work normally needs six weeks' notice",
        text: "Bromley's tree guidance says anyone planning to cut down or carry out work to a tree in a conservation area must give the council six weeks' notice. Tell the tree surgeon about conservation status early so the notice period can be built into the timing.",
        source: {
          label: "London Borough of Bromley — trees in conservation areas",
          url: "https://www.bromley.gov.uk/trees/tree-protection/4",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Bromley by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the whole tree and the surroundings",
    sideCopy: "Include photos of the crown, trunk, nearby buildings, roads, sheds and access route. Say whether branches overhang neighbouring land or the highway and whether vehicle access is possible.",
    noteLead: "Check protection before accepting a start date.",
    noteText: "A contractor can advise on the work, but TPO permission or conservation-area notice may need to be resolved before cutting begins.",
  },
  faq: [
    ["How much does tree surgery cost in Bromley?", "The price depends on tree size, access, climbing or machinery requirements, waste removal and whether protected-tree procedures are involved."],
    ["How do I know if a Bromley tree has a TPO?", "Bromley maintains an interactive protected-tree map and records of its Tree Preservation Orders."],
    ["What if the tree is in a conservation area?", "Bromley says six weeks' notice is normally required before carrying out tree work in a conservation area."],
    ["Can I post a small pruning job?", "Yes. Tree-surgery requests can cover inspections, pruning and reductions as well as removals and clearance work."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Bromley?",
    copy: "Describe the tree, access and proposed work once, then compare interested Bromley tree surgeons and their quotes.",
    buttonLabel: "Get Bromley tree-surgery quotes",
  },
});

export const architectsBromley = makeBromleyProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new design in Bromley? Describe the property, objectives and likely scope once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Bromley?",
    copy: "Enter the postcode, property type and what you want to change. Mention conservation-area, listed-building or Article 4 status if known so suitable Bromley architects can judge the likely planning and design work.",
  },
  localContext: {
    eyebrow: "Bromley planning and heritage context",
    title: "Conservation areas and numerous Article 4 directions make the exact address important",
    intro: "Bromley has a large network of designated conservation areas and publishes a substantial set of Article 4 Directions covering specific streets, estates and planning rights. An architect should therefore check the property itself rather than rely on a borough-wide assumption about permitted development.",
    items: [
      {
        title: "Bromley currently lists 47 conservation areas",
        text: "The council says there are 47 conservation areas designated for their special architectural or historic interest. It provides an interactive map and local guidance, so extensions and visible alterations should be checked against the property's exact heritage status.",
        source: {
          label: "London Borough of Bromley — conservation areas",
          url: "https://www.bromley.gov.uk/conservation/conservation-areas-2",
        },
      },
      {
        title: "Article 4 controls are spread across many named areas",
        text: "Bromley publishes Article 4 Directions for locations including Beckenham, Bickley, Biggin Hill, Chislehurst, Petts Wood and other parts of the borough. These directions remove specified permitted-development rights, so the proposal and address need checking before a design route is assumed.",
        source: {
          label: "London Borough of Bromley — Article 4 Direction areas",
          url: "https://www.bromley.gov.uk/downloads/download/72/article-4-direction-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Bromley by project type, property and stage of work. Example areas include:",
    sideTitle: "Give the exact address and any planning history",
    sideCopy: "The same extension concept can have different constraints in a standard suburban street, a conservation area or a property affected by an Article 4 Direction. Share the address, existing plans and previous decisions if available.",
    noteLead: "Planning and Building Regulations are separate.",
    noteText: "Bromley's own guidance makes clear that planning permission and Building Regulations are different systems. Ask who is responsible for each approval route in the project scope.",
  },
  faq: [
    ["How much does an architect cost in Bromley?", "Fees depend on project value, complexity and whether you need concept design, planning drawings, technical information, tender support or contract administration."],
    ["How many conservation areas are there in Bromley?", "The council's current conservation page lists 47 designated conservation areas."],
    ["What is an Article 4 Direction?", "It is a local planning direction that removes specified permitted-development rights. Bromley has many address-specific directions, so check the exact property."],
    ["Are planning permission and Building Regulations the same?", "No. Bromley's Building Control guidance explicitly says the two systems are separate and a project can require one, both or neither depending on the work."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Bromley?",
    copy: "Describe the property, objectives and project stage once, then compare interested Bromley architects and their proposals.",
    buttonLabel: "Get Bromley architect quotes",
  },
});
