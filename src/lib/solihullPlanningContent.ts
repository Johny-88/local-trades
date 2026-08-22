import { makeSolihullProfile } from "./solihullProfileBase";

export const treeSurgeonsSolihull = makeSolihullProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction or tree removal in Solihull? Describe the tree, access and proposed work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Solihull?",
    copy: "Enter the postcode, approximate tree size and work needed. Add photos showing the whole tree, nearby buildings and access so suitable Solihull tree surgeons can judge equipment, waste and whether planning checks are needed.",
  },
  localContext: {
    eyebrow: "Solihull protected-tree context",
    title: "Solihull's TPO system and 20 conservation areas mean protection checks should come before cutting",
    intro: "Solihull Council says Tree Preservation Orders can protect individual trees, groups or woodlands, and confirms the borough has 20 conservation areas where qualifying trees receive automatic protection. A routine-looking pruning job can therefore need formal consent or prior notice.",
    items: [
      {
        title: "TPO trees need council authority before pruning or removal",
        text: "The council says it is an offence to cut down, top, lop, uproot, wilfully damage or destroy a tree protected by a Tree Preservation Order without authority. Check the council's conservation and TPO map before agreeing the scope or assuming emergency access is enough.",
        source: {
          label: "Solihull Council — Tree Preservation Orders",
          url: "https://www.solihull.gov.uk/parks-and-open-spaces/trees/tree-preservation-orders-tpo",
        },
      },
      {
        title: "Trees in conservation areas receive automatic protection above the stated size threshold",
        text: "Solihull Council says the borough has 20 conservation areas and that trees over 75mm diameter measured 1.5m above ground are automatically protected within them. Proposed work must be notified to the Local Planning Authority so it can consider whether a TPO is needed.",
        source: {
          label: "Solihull Council — TPOs and trees in conservation areas",
          url: "https://www.solihull.gov.uk/parks-and-open-spaces/trees/tree-preservation-orders-tpo",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Solihull by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the full tree and the drop zone",
    sideCopy: "A rear-garden tree in Shirley, a protected tree in Knowle and a large tree beside a road or neighbouring property can require very different rigging, access and permissions.",
    noteLead: "Protection status changes the job.",
    noteText: "Before accepting a quote, establish whether the tree has a TPO or sits in a conservation area and who will handle any required application or notice.",
  },
  faq: [
    ["How do I know if a tree has a TPO in Solihull?", "Solihull Council provides an online conservation and heritage map and a TPO document search. Check the address before work starts."],
    ["Are trees in Solihull conservation areas protected?", "Yes. The council says qualifying trees in its 20 conservation areas receive automatic protection and proposed work must be notified."],
    ["Can I post a small pruning job?", "Yes. Small pruning and hedge-adjacent tree work can be posted alongside larger reductions and removals."],
    ["Will the tree surgeon remove the waste?", "Ask directly and make sure green waste from paid work is handled through a lawful commercial-waste route."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Solihull?",
    copy: "Describe the tree, access and proposed work once, then compare interested Solihull tree surgeons and their quotes.",
    buttonLabel: "Get Solihull tree quotes",
  },
});

export const architectsSolihull = makeSolihullProfile("architects", {
  heroCopy: "Planning an extension, conversion or renovation in Solihull? Describe the property and project once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Solihull?",
    copy: "Enter the postcode and explain the existing property, proposed changes and whether planning or listed-building issues are already known. Add photos or sketches so suitable Solihull architects can judge the likely design and consent work.",
  },
  localContext: {
    eyebrow: "Solihull planning and heritage context",
    title: "Twenty conservation areas and local Article 4 controls can materially change what a householder project needs",
    intro: "Solihull has 20 conservation areas, with greater planning controls and restrictions on permitted development. Some areas also have Article 4 directions, so an extension, window change or roof alteration may need a different consent route from an otherwise similar house elsewhere in the borough.",
    items: [
      {
        title: "Conservation-area status changes the planning baseline",
        text: "Solihull Council says its 20 conservation areas are subject to greater regulation, including restrictions on permitted development and, in some cases, Article 4 directions. An architect should therefore check the exact address before relying on ordinary householder permitted-development assumptions.",
        source: {
          label: "Solihull Council — conservation areas",
          url: "https://www.solihull.gov.uk/planning-and-building-control/conservation-areas",
        },
      },
      {
        title: "Solihull also maintains a substantial local list of heritage assets",
        text: "The council's Local List of Heritage Assets was revised in April 2024 and records 165 entries. Local-list status is not the same as statutory listing, but it can still be material when the council assesses alterations or redevelopment, so heritage checks should not stop at the national listed-building register.",
        source: {
          label: "Solihull Council — Local List of Heritage Assets",
          url: "https://www.solihull.gov.uk/sites/default/files/2022-10/Local-List-Heritage-Assets.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Solihull by project type, planning complexity and postcode. Example areas include:",
    sideTitle: "Start with the property's planning constraints",
    sideCopy: "A standard rear extension in Shirley and alterations to a heritage property in Knowle, Olton or central Solihull can require very different survey and consent work.",
    noteLead: "Check the address before fixing the design brief.",
    noteText: "Ask the architect to identify conservation-area, Article 4, listed-building, tree and flood/drainage constraints early enough to shape the proposal rather than redesign it later.",
  },
  faq: [
    ["How many conservation areas are there in Solihull?", "Solihull Council currently lists 20 conservation areas across the borough."],
    ["Can an Article 4 direction affect windows or extensions?", "Yes. Article 4 directions can remove permitted-development rights, and Solihull has directions affecting parts of some conservation areas."],
    ["What is a locally listed building?", "It is a heritage asset recognised by the council even though it is not on the national statutory list. Solihull's current local list contains 165 entries."],
    ["Can I post a small planning-drawing job?", "Yes. The category can cover feasibility, measured surveys and householder planning work as well as larger projects."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Solihull?",
    copy: "Describe the property, proposed changes and known constraints once, then compare interested Solihull architects and their quotes.",
    buttonLabel: "Get Solihull architect quotes",
  },
});
