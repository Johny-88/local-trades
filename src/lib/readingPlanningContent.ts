import { makeReadingProfile } from "./readingProfileBase";

export const treeSurgeonsReading = makeReadingProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, removal or an inspection of a tree in Reading? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Reading?",
    copy: "Enter the postcode, approximate tree size and the work you think is needed. Add photos from more than one angle and say whether the tree may be protected or inside a conservation area so suitable Reading tree surgeons can judge the next step.",
  },
  localContext: {
    eyebrow: "Reading protected-tree rules",
    title: "TPOs and conservation-area trees need checking before work starts",
    intro: "Reading Borough Council protects individual trees and groups through Tree Preservation Orders, while trees in conservation areas have a separate notice requirement. Checking status first can prevent an otherwise routine pruning job becoming unauthorised work.",
    items: [
      {
        title: "Work to a TPO tree requires council permission",
        text: "Reading Borough Council says anyone wanting to prune a tree protected by a Tree Preservation Order must apply for permission through the Planning Portal. The council also maintains a TPO directory so the protected status can be checked before work is booked.",
        source: {
          label: "Reading Borough Council — trees",
          url: "https://www.reading.gov.uk/planning-and-building-control/trees-hedges-and-environment/trees/",
        },
      },
      {
        title: "Conservation-area tree work normally needs six weeks' notice",
        text: "Reading's guidance says residents in a conservation area must give six weeks' notice under Section 211 before carrying out tree work. Tell the tree surgeon if the property is in a conservation area so the notice period can be allowed for in the job timing.",
        source: {
          label: "Reading Borough Council — conservation areas and listed buildings",
          url: "https://www.reading.gov.uk/planning-and-building-control/heritage-and-conservation/conservation-areas-listed-buildings/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Reading by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the whole tree and the surroundings",
    sideCopy: "Include photos of the crown, trunk, nearby buildings, roads, sheds and access route. Say whether branches overhang neighbouring land or the highway and whether vehicle access is possible.",
    noteLead: "Check protection before accepting a start date.",
    noteText: "A contractor can advise on the work, but protected-tree permission or conservation-area notice may need to be resolved before cutting begins.",
  },
  faq: [
    ["How much does tree surgery cost in Reading?", "The price depends on tree size, species, access, climbing or machinery requirements, waste removal and whether traffic or protected-tree procedures are involved."],
    ["How do I know if my Reading tree has a TPO?", "Reading Borough Council maintains a Tree Preservation Order directory and can advise on protected status. Check before pruning or removal."],
    ["What if the tree is in a conservation area?", "Reading Borough Council says six weeks' written notice is normally required before carrying out tree work in a conservation area."],
    ["Can I post a small pruning job?", "Yes. Tree-surgery requests can cover inspections, pruning and reductions as well as larger removals and clearance work."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Reading?",
    copy: "Describe the tree, access and proposed work once, then compare interested Reading tree surgeons and their quotes.",
    buttonLabel: "Get Reading tree-surgery quotes",
  },
});

export const architectsReading = makeReadingProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new design in Reading? Describe the property, objectives and likely scope once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Reading?",
    copy: "Enter the postcode, property type and what you want to change. Mention conservation-area, listed-building or Article 4 status if known so suitable Reading architects can judge the likely planning and design work.",
  },
  localContext: {
    eyebrow: "Reading planning and heritage context",
    title: "Conservation areas, listed buildings and Article 4 directions can materially change the design route",
    intro: "Reading has numerous conservation areas and a network of Article 4 directions that remove some normal permitted-development rights. Property-specific planning constraints should therefore be checked early in the design process.",
    items: [
      {
        title: "Reading has designated conservation areas with tighter controls",
        text: "Reading Borough Council lists conservation areas including Redlands, Kendrick, Castle Hill/Russell Street/Oxford Road, St Peter's and others. It says many changes that may be permitted elsewhere can require planning permission in a conservation area, while listed-building alterations require listed-building consent.",
        source: {
          label: "Reading Borough Council — conservation areas and listed buildings",
          url: "https://www.reading.gov.uk/planning-and-building-control/heritage-and-conservation/conservation-areas-listed-buildings/",
        },
      },
      {
        title: "Article 4 directions remove permitted-development rights in specific Reading streets and areas",
        text: "Reading Borough Council publishes Article 4 directions covering locally distinctive buildings and features, including a number of streets with patterned brickwork and architectural details. An architect should check the exact address before assuming a proposal falls within normal permitted-development rights.",
        source: {
          label: "Reading Borough Council — Article 4 Directions",
          url: "https://www.reading.gov.uk/planning-and-building-control/article-4-directions/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Reading by project type, property and stage of work. Example areas include:",
    sideTitle: "Give the exact address and planning history",
    sideCopy: "The same extension concept can have different constraints in Redlands, Caversham or a property affected by an Article 4 direction. Share the address, existing plans and any previous decisions if available.",
    noteLead: "Planning and building control are separate.",
    noteText: "A project may need planning permission, Building Regulations approval, both or neither. Ask the architect to explain which route applies to the proposed work.",
  },
  faq: [
    ["How much does an architect cost in Reading?", "Fees depend on project value, complexity and whether you need concept design, planning drawings, technical Building Regulations information, tender support or contract administration."],
    ["Do conservation areas affect extensions in Reading?", "They can. Reading's guidance says fewer permitted-development rights apply in conservation areas and some external changes need planning permission."],
    ["What is an Article 4 direction?", "It is a local planning direction that removes specified permitted-development rights. Reading has multiple Article 4 directions, so the exact property address should be checked."],
    ["Do listed buildings need special consent?", "Yes. Altering, extending or demolishing a listed building can require listed-building consent as well as any other planning approval."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Reading?",
    copy: "Describe the property, objectives and project stage once, then compare interested Reading architects and their proposals.",
    buttonLabel: "Get Reading architect quotes",
  },
});
