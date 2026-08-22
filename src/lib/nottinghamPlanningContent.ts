import { makeNottinghamProfile } from "./nottinghamProfileBase";

export const treeSurgeonsNottingham = makeNottinghamProfile("tree-surgeons", {
  heroCopy: "Need tree pruning, removal, reduction or other arboricultural work in Nottingham? Describe the trees, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Nottingham?",
    copy: "Enter the postcode and describe the tree species if known, approximate size, work required and access. Include photos of the whole tree, stem and surrounding buildings or boundaries so suitable Nottingham tree surgeons can judge the job.",
  },
  localContext: {
    eyebrow: "Nottingham protected-tree context",
    title: "Trees in conservation areas and trees covered by preservation orders need planning checks before work starts",
    intro: "Nottingham's conservation and planning controls can affect pruning and felling even on private land. Homeowners should establish whether a tree is protected before accepting a quote that assumes immediate work can begin.",
    items: [
      {
        title: "Conservation-area trees are subject to planning control",
        text: "Nottingham City Council states that trees in conservation areas are protected by planning controls. Its guidance requires notice for qualifying tree work, giving the council an opportunity to consider whether a Tree Preservation Order should be made before work proceeds.",
        source: {
          label: "Nottingham City Council — conservation areas and listed buildings",
          url: "https://nottinghamcity.gov.uk/information-for-business/planning-and-building-control/planning-policy/conservation-areas-and-listed-buildings/",
        },
      },
      {
        title: "The six-week conservation-area notice applies to qualifying trees",
        text: "Nottingham's tree-work guidance says notice is required for conservation-area trees above the statutory trunk-diameter threshold. Ask the tree surgeon to identify the protection status and who will submit any required notice or TPO application before agreeing a start date.",
        source: {
          label: "Nottingham City Council — guidance note for work to trees",
          url: "https://www.nottinghamcity.gov.uk/media/wz4jlhtg/ncc-guidance_note-works_to_trees-england.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Nottingham by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the tree and everything around it",
    sideCopy: "A tree beside a terrace in Sneinton, within a conservation setting in The Park or near a larger garden in Wollaton can involve very different access, rigging, protection and disposal requirements.",
    noteLead: "Check protection before booking the start date.",
    noteText: "Ask whether the contractor has checked for a TPO or conservation-area control and whether application or notice work is included in the quote.",
  },
  faq: [
    ["How much does tree surgery cost in Nottingham?", "Cost depends on tree size, species, access, rigging, waste removal, stump work and any protected-tree process. Compare quotes for the same scope."],
    ["Can I prune a tree in a Nottingham conservation area?", "Possibly, but qualifying work normally needs prior notice to the council, and protected trees can require formal consent."],
    ["What if the tree has a Tree Preservation Order?", "Work to a TPO tree normally requires the appropriate consent unless a specific statutory exception applies. Check before work begins."],
    ["Should the quote include removal of branches and logs?", "Confirm this explicitly. Chipping, timber removal, stump grinding and site clearance can materially change the price."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Nottingham?",
    copy: "Describe the tree, access and required work once, then compare interested Nottingham tree surgeons and their quotes.",
    buttonLabel: "Get Nottingham tree-surgery quotes",
  },
});

export const architectsNottingham = makeNottinghamProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or other building project in Nottingham? Describe the property and project once, then compare architects who cover the city.",
  answer: {
    title: "Looking for an architect near you in Nottingham?",
    copy: "Enter the postcode and explain the existing property, proposed changes and any planning history you already know. Add photos or sketches so suitable Nottingham architects can judge the likely design, planning and technical work.",
  },
  localContext: {
    eyebrow: "Nottingham planning and heritage context",
    title: "Nottingham combines extensive heritage protection with citywide HMO planning controls",
    intro: "The city contains hundreds of nationally listed buildings and numerous conservation areas, while a separate Article 4 Direction removes normal permitted-development rights for family-house to HMO changes across the whole city. That makes the exact property status central to early design advice.",
    items: [
      {
        title: "Nottingham has more than 800 nationally listed buildings",
        text: "Nottingham City Council says the city currently has over 800 nationally listed buildings. Most internal and external building work that affects a listed building can require Listed Building Consent, so establish designation status at the start rather than after drawings are complete.",
        source: {
          label: "Nottingham City Council — Nottingham Local List",
          url: "https://nottinghamcity.gov.uk/information-for-business/planning-and-building-control/building-a-better-nottingham/heritage-regeneration/nottingham-local-list/",
        },
      },
      {
        title: "The HMO Article 4 Direction applies across Nottingham",
        text: "The council requires planning permission to change a family dwelling to a small C4 HMO for three to six unrelated occupiers because the HMO Article 4 Direction covers the entire city. For rental conversions, planning strategy should be checked before detailed design or building work is commissioned.",
        source: {
          label: "Nottingham City Council — HMO Article 4 direction",
          url: "https://www.nottinghamcity.gov.uk/hmopermitteddevelopment",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Nottingham by project type, property status and postcode. Example areas include:",
    sideTitle: "Start with designation and lawful use",
    sideCopy: "A listed or conservation-area property in The Park, a shared house in Lenton and a suburban home in Wollaton can face very different planning constraints even when the proposed extension or internal layout looks similar.",
    noteLead: "Check planning history early.",
    noteText: "Article 4 Directions, listed status, conservation-area controls and previous planning conditions can remove assumptions that would be safe on an unrestricted property.",
  },
  faq: [
    ["How much does an architect cost in Nottingham?", "Fees depend on project size, complexity, survey requirements, planning work, technical drawings and contract administration. Compare the same service stages rather than headline percentages alone."],
    ["Does Nottingham have many listed buildings?", "Yes. Nottingham City Council says there are more than 800 nationally listed buildings in the city."],
    ["Does a C3 house to HMO conversion need planning permission in Nottingham?", "Yes for the small-HMO change controlled by the citywide Article 4 Direction, and larger HMOs already fall outside ordinary C4 permitted development."],
    ["Is conservation-area status the same as listed-building status?", "No. They are separate designations with different controls, and a property can be affected by one, both or neither."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Nottingham?",
    copy: "Describe the property and proposed project once, then compare interested Nottingham architects and their approaches.",
    buttonLabel: "Get Nottingham architect quotes",
  },
});
