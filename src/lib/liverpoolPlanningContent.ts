import { makeLiverpoolProfile } from "./liverpoolProfileBase";

export const treeSurgeonsLiverpool = makeLiverpoolProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, removal or an inspection of a tree in Liverpool? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Liverpool?",
    copy: "Enter the postcode, approximate tree size and the work you think is needed. Add photos from more than one angle and say whether the tree may be protected or inside a conservation area so suitable Liverpool tree surgeons can judge the next step.",
  },
  localContext: {
    eyebrow: "Liverpool protected-tree rules",
    title: "TPO consent and conservation-area notice need checking before tree work starts",
    intro: "Liverpool City Council protects trees through Tree Preservation Orders and conservation-area controls. Work to a TPO tree needs written council consent, while trees in conservation areas are protected even without a TPO and normally require six weeks' notice before work.",
    items: [
      {
        title: "Protected trees need written consent before cutting",
        text: "Liverpool City Council says consent is required before cutting down, topping, lopping or uprooting a tree covered by a TPO. Give the tree surgeon the exact address and proposed work specification so protected status can be checked before a start date is agreed.",
        source: {
          label: "Liverpool City Council — Tree Preservation Orders",
          url: "https://liverpool.gov.uk/planning-and-building-control/trees-hedges-and-conservation/tree-preservation-orders/",
        },
      },
      {
        title: "Trees in conservation areas normally need six weeks' notice",
        text: "Liverpool says trees in conservation areas are protected even where no separate TPO exists, and the council must normally receive six weeks' notice before work. Liverpool has 36 conservation areas, so address-level checking is especially important before pruning or removal.",
        source: {
          label: "Liverpool City Council — conservation areas",
          url: "https://liverpool.gov.uk/planning-and-building-control/trees-hedges-and-conservation/conservation-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Liverpool by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the tree, boundaries and access route",
    sideCopy: "Include photos of the crown, trunk, nearby buildings, roads, gardens and machinery access. Say whether branches overhang neighbouring land or the highway and whether the property sits in a conservation area.",
    noteLead: "Check protection before booking the work.",
    noteText: "The contractor can help specify the work, but TPO consent or conservation-area notice may need to be resolved before pruning or removal starts.",
  },
  faq: [
    ["How much does tree surgery cost in Liverpool?", "The price depends on tree size, species, access, climbing or machinery requirements, waste removal and whether protected-tree procedures are involved."],
    ["How do I know if a Liverpool tree has a TPO?", "Liverpool City Council provides a TPO map and advises checking before any work is carried out."],
    ["What if the tree is in a conservation area?", "Trees in conservation areas are protected even without a separate TPO, and Liverpool normally requires six weeks' notice before work."],
    ["Can I post a small pruning job?", "Yes. Tree-surgery requests can cover inspections, pruning and reductions as well as larger removals and clearance work."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Liverpool?",
    copy: "Describe the tree, access and proposed work once, then compare interested Liverpool tree surgeons and their quotes.",
    buttonLabel: "Get Liverpool tree-surgery quotes",
  },
});

export const architectsLiverpool = makeLiverpoolProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new design in Liverpool? Describe the property, objectives and likely scope once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Liverpool?",
    copy: "Enter the postcode, property type and what you want to change. Mention conservation-area, listed-building or HMO use if relevant so suitable Liverpool architects can judge the likely planning and design work.",
  },
  localContext: {
    eyebrow: "Liverpool planning and heritage context",
    title: "Thirty-six conservation areas, widespread Article 4 controls and HMO planning rules make the exact address important",
    intro: "Liverpool has 36 conservation areas covering about 9% of the city and protecting around 19,000 properties. The council says most conservation areas are also subject to Article 4 directions, while a separate HMO Article 4 area removes normal C3-to-C4 permitted-development rights for smaller HMOs.",
    items: [
      {
        title: "Conservation-area Article 4 controls can restrict ordinary house alterations",
        text: "Liverpool City Council says most of the city's conservation areas have Article 4 directions covering changes such as roofs, chimneys, dormers, roof lights, windows, doors, cladding, gates, hardstanding and sometimes boundary walls. If the project changes external appearance, confirm the property's exact designation before relying on normal permitted-development rules.",
        source: {
          label: "Liverpool City Council — Article 4 directions",
          url: "https://liverpool.gov.uk/planning-and-building-control/planning-permission/article-4-directions/",
        },
      },
      {
        title: "HMO use can create a separate planning route",
        text: "Liverpool says HMOs for seven or more people need planning permission anywhere in the city, and conversion to an HMO for three or more people needs permission within the defined Article 4 area. If a project changes occupancy or use, make that part of the architectural brief from the start.",
        source: {
          label: "Liverpool City Council — planning permission for HMOs",
          url: "https://liverpool.gov.uk/planning-and-building-control/planning-permission/planning-permission-for-hmos/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Liverpool by project type, property and stage of work. Example areas include:",
    sideTitle: "Give the exact address and intended use",
    sideCopy: "A Woolton extension, a Wavertree conversion and alterations in Mossley Hill or another conservation area can face different heritage, Article 4 and planning constraints. Share the address, existing plans and any known planning history.",
    noteLead: "Planning, listed-building consent and Building Regulations are separate.",
    noteText: "A project may need one, several or none of these approvals. Ask the architect to explain which route applies to the actual proposal.",
  },
  faq: [
    ["How much does an architect cost in Liverpool?", "Fees depend on project value, complexity and whether you need concept design, planning drawings, technical Building Regulations information, tender support or contract administration."],
    ["How many conservation areas are there in Liverpool?", "Liverpool City Council currently lists 36 conservation areas covering around 9% of the city and protecting about 19,000 properties."],
    ["Can Article 4 rules affect windows, doors and roofs?", "Yes. Liverpool says most conservation areas have Article 4 controls that can remove normal permitted-development rights for specified external alterations."],
    ["Does a small HMO conversion need planning permission everywhere in Liverpool?", "No. The three-or-more-person restriction applies within Liverpool's defined HMO Article 4 area; HMOs for seven or more people require planning permission anywhere in the city."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Liverpool?",
    copy: "Describe the property, objectives and project stage once, then compare interested Liverpool architects and their proposals.",
    buttonLabel: "Get Liverpool architect quotes",
  },
});
