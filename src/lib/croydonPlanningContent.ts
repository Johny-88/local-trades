import { makeCroydonProfile } from "./croydonProfileBase";

export const treeSurgeonsCroydon = makeCroydonProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction or tree removal in Croydon? Describe the tree, access and proposed work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Croydon?",
    copy: "Enter the postcode, approximate tree size and work needed. Add photos showing the whole tree, nearby buildings and access so suitable Croydon tree surgeons can judge equipment, waste and whether planning checks are needed.",
  },
  localContext: {
    eyebrow: "Croydon protected-tree context",
    title: "TPOs and Croydon's 21 conservation areas mean protection checks should come before cutting",
    intro: "Croydon Council can protect individual trees, groups, areas and woodlands through Tree Preservation Orders, and the borough currently has 21 conservation areas. Trees in conservation areas have separate protection, including a six-week notification requirement before most work.",
    items: [
      {
        title: "TPO trees need formal permission before pruning or felling",
        text: "Croydon Council says a Tree Preservation Order prevents protected trees from being removed or pruned without formal permission. If the tree may be protected, check its status and obtain the required consent before agreeing a start date or final scope with the contractor.",
        source: {
          label: "Croydon Council — Tree Preservation Orders",
          url: "https://www.croydon.gov.uk/environment/trees-and-hedges/tree-preservation-orders",
        },
      },
      {
        title: "Tree work in a conservation area normally needs six weeks' notice",
        text: "Croydon Council says there are currently 21 conservation areas and that the council must be notified at least six weeks before work is carried out to a tree in one. A routine-looking pruning job can therefore need advance notice even where no individual TPO is recorded.",
        source: {
          label: "Croydon Council — conservation areas",
          url: "https://www.croydon.gov.uk/planning-and-regeneration/planning-policy/conservation-and-heritage/conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Croydon by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the full tree and the drop zone",
    sideCopy: "A rear-garden tree in Addiscombe, a protected tree in a conservation area and a large tree beside a road or neighbouring property can require very different rigging, access and permissions.",
    noteLead: "Protection status changes the job.",
    noteText: "Before accepting a quote, establish whether the tree has a TPO or sits in a conservation area and who will handle any required application or notice.",
  },
  faq: [
    ["How do I know if a tree has a TPO in Croydon?", "Croydon Council can confirm whether a tree is protected. Check before pruning or removal and apply for permission where a TPO applies."],
    ["Are trees in Croydon conservation areas protected?", "Yes. Croydon Council says it must normally be notified at least six weeks before work to a tree in a conservation area."],
    ["How many conservation areas are there in Croydon?", "Croydon Council currently lists 21 conservation areas across the borough."],
    ["Can I post a small pruning job?", "Yes. Small pruning can be posted alongside larger reductions and removals."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Croydon?",
    copy: "Describe the tree, access and proposed work once, then compare interested Croydon tree surgeons and their quotes.",
    buttonLabel: "Get Croydon tree quotes",
  },
});

export const architectsCroydon = makeCroydonProfile("architects", {
  heroCopy: "Planning an extension, conversion or renovation in Croydon? Describe the property and project once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Croydon?",
    copy: "Enter the postcode and explain the existing property, proposed changes and whether planning, conservation or HMO issues are already known. Add photos or sketches so suitable Croydon architects can judge the likely design and consent work.",
  },
  localContext: {
    eyebrow: "Croydon planning and heritage context",
    title: "Twenty-one conservation areas and several Article 4 directions can materially change the planning route",
    intro: "Croydon has 21 conservation areas where planning controls can be tighter, plus Article 4 directions that remove specified permitted-development rights in particular locations and for certain uses. The council also requires planning permission for conversion to a small HMO in Croydon, so the exact address and intended use should be checked early.",
    items: [
      {
        title: "Conservation-area status changes the planning baseline",
        text: "Croydon Council says planning permission is more likely to be needed where work affects a conservation area and confirms there are currently 21 such areas. An architect should therefore check the property and its setting before relying on ordinary permitted-development assumptions.",
        source: {
          label: "Croydon Council — conservation areas",
          url: "https://www.croydon.gov.uk/planning-and-regeneration/planning-policy/conservation-and-heritage/conservation-areas",
        },
      },
      {
        title: "Article 4 directions remove permitted-development rights in specific Croydon situations",
        text: "Croydon Council lists Article 4 directions affecting locations including Chatsworth Road, The Waldrons, Kenley Aerodrome and other areas, and separately states that planning permission is required to convert small properties into HMOs in Croydon. The exact address and project type therefore matter before the design brief is fixed.",
        source: {
          label: "Croydon Council — Article 4 directions",
          url: "https://www.croydon.gov.uk/planning-and-regeneration/planning-policy/article-4-directions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Croydon by project type, planning complexity and postcode. Example areas include:",
    sideTitle: "Start with the property's planning constraints",
    sideCopy: "A standard extension in Thornton Heath and alterations to a heritage property in Central Croydon, Purley or one of the borough's conservation areas can require very different survey and consent work.",
    noteLead: "Check the address before fixing the design brief.",
    noteText: "Ask the architect to identify conservation-area, Article 4, listed-building, tree and flood or drainage constraints early enough to shape the proposal rather than redesign it later.",
  },
  faq: [
    ["How many conservation areas are there in Croydon?", "Croydon Council currently lists 21 conservation areas across the borough."],
    ["Can an Article 4 direction affect permitted development?", "Yes. Article 4 directions remove specified permitted-development rights, so work that is normally permitted may need planning permission in an affected location."],
    ["Do small HMO conversions need planning permission in Croydon?", "Croydon Council states that planning permission is required to convert small properties into HMOs in the borough."],
    ["Can I post a small planning-drawing job?", "Yes. The category can cover feasibility, measured surveys and householder planning work as well as larger projects."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Croydon?",
    copy: "Describe the property, proposed changes and known constraints once, then compare interested Croydon architects and their quotes.",
    buttonLabel: "Get Croydon architect quotes",
  },
});
