import { makeMiltonKeynesProfile } from "./miltonKeynesProfileBase";

export const treeSurgeonsMiltonKeynes = makeMiltonKeynesProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, removal or an inspection of a tree in Milton Keynes? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Milton Keynes?",
    copy: "Enter the postcode, approximate tree size and the work you think is needed. Add photos from more than one angle and say whether the tree may be protected or inside a conservation area so suitable Milton Keynes tree surgeons can judge the next step.",
  },
  localContext: {
    eyebrow: "Milton Keynes protected-tree rules",
    title: "TPOs and conservation-area trees need checking before work starts",
    intro: "Milton Keynes City Council protects individual and groups of trees through Tree Preservation Orders, while trees inside the authority's conservation areas are also protected by planning law.",
    items: [
      {
        title: "Protected trees need council permission before work",
        text: "Milton Keynes City Council says it is an offence to carry out work on trees covered by a Tree Preservation Order or protected through conservation-area legislation without the required local-authority permission. Check status before agreeing a start date.",
        source: {
          label: "Milton Keynes City Council — tree protection and preservation",
          url: "https://www.milton-keynes.gov.uk/planning-and-building/planning-applications-apply-pay-and-comment/tree-protection-and-preservation",
        },
      },
      {
        title: "Milton Keynes has 27 conservation areas",
        text: "The council lists 27 conservation areas across the authority, including Bletchley, Great Linford, Loughton, Milton Keynes Village, Newport Pagnell, Stony Stratford, Wolverton and Woughton-on-the-Green. Tell the tree surgeon if the property is in or near one of these areas so the correct notice or consent route can be checked.",
        source: {
          label: "Milton Keynes City Council — conservation areas in Milton Keynes",
          url: "https://www.milton-keynes.gov.uk/planning-and-building/conservation-and-archaeology/conservation-areas-milton-keynes",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Milton Keynes by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the whole tree and the surroundings",
    sideCopy: "Include photos of the crown, trunk, nearby buildings, roads, sheds and access route. Say whether branches overhang neighbouring land or the highway and whether machinery can reach the tree.",
    noteLead: "Check protection before accepting a start date.",
    noteText: "A contractor can advise on the work, but TPO permission or conservation-area procedures may need to be resolved before cutting begins.",
  },
  faq: [
    ["How much does tree surgery cost in Milton Keynes?", "The price depends on tree size, species, access, climbing or machinery requirements, waste removal and whether protected-tree procedures are involved."],
    ["How do I know if my tree has a TPO?", "Milton Keynes City Council provides tree-protection information and planning datasets. Check the tree before pruning or removal."],
    ["What if the tree is in a conservation area?", "Trees in conservation areas are protected by planning law, so the relevant council procedure should be followed before work starts."],
    ["Can I post a small pruning job?", "Yes. Tree-surgery requests can cover inspections, pruning and reductions as well as larger removals and clearance work."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Milton Keynes?",
    copy: "Describe the tree, access and proposed work once, then compare interested Milton Keynes tree surgeons and their quotes.",
    buttonLabel: "Get Milton Keynes tree-surgery quotes",
  },
});

export const architectsMiltonKeynes = makeMiltonKeynesProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new design in Milton Keynes? Describe the property, objectives and likely scope once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Milton Keynes?",
    copy: "Enter the postcode, property type and what you want to change. Mention conservation-area, listed-building or HMO use if relevant so suitable Milton Keynes architects can judge the likely planning and design work.",
  },
  localContext: {
    eyebrow: "Milton Keynes planning context",
    title: "Article 4 directions and conservation areas can materially change the design route",
    intro: "Milton Keynes is not a single uniform planning context. The authority has 27 conservation areas and Article 4 directions that remove specific permitted-development rights, including borough-wide controls over HMO conversions.",
    items: [
      {
        title: "HMO conversion requires planning permission across Milton Keynes",
        text: "Milton Keynes City Council says its Article 4 Direction removes permitted-development rights for changing a dwellinghouse to HMO use, so a planning application is required in all cases. If a project involves subdivision or shared accommodation, flag that use at the briefing stage.",
        source: {
          label: "Milton Keynes City Council — Article 4 Directions",
          url: "https://www.milton-keynes.gov.uk/planning-and-building-control/planning-policy/article-4-directions-milton-keynes",
        },
      },
      {
        title: "The authority has 27 conservation areas",
        text: "Milton Keynes City Council lists conservation areas ranging from historic settlements such as Stony Stratford and Newport Pagnell to Bletchley, Wolverton and Milton Keynes Village. Within these areas, design and material choices can require closer planning scrutiny.",
        source: {
          label: "Milton Keynes City Council — conservation areas in Milton Keynes",
          url: "https://www.milton-keynes.gov.uk/planning-and-building/conservation-and-archaeology/conservation-areas-milton-keynes",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Milton Keynes by project type, property and stage of work. Example areas include:",
    sideTitle: "Give the exact address and intended use",
    sideCopy: "The same extension or conversion can face different constraints in Wolverton, Stony Stratford, Bletchley or a newer estate. Share the address, existing plans and any known planning history.",
    noteLead: "Planning and Building Regulations are separate.",
    noteText: "A project may need planning permission, Building Regulations approval, both or neither. Ask the architect to explain which route applies to the proposed work.",
  },
  faq: [
    ["How much does an architect cost in Milton Keynes?", "Fees depend on project value, complexity and whether you need concept design, planning drawings, technical Building Regulations information, tender support or contract administration."],
    ["Do conservation areas affect extensions in Milton Keynes?", "They can. Milton Keynes has 27 conservation areas, where design and material changes can be subject to tighter planning control."],
    ["Does an HMO conversion need planning permission?", "Yes. Milton Keynes has an Article 4 Direction removing the usual permitted-development right for changing a dwellinghouse to HMO use."],
    ["Do listed buildings need special consent?", "Alterations that affect a listed building's special character can require listed-building consent as well as any other planning approval."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Milton Keynes?",
    copy: "Describe the property, objectives and project stage once, then compare interested Milton Keynes architects and their proposals.",
    buttonLabel: "Get Milton Keynes architect quotes",
  },
});
