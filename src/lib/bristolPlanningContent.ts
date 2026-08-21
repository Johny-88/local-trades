import { makeBristolProfile } from "./bristolProfileBase";

export const treeSurgeonsBristol = makeBristolProfile("tree-surgeons", {
  heroCopy: "Need pruning, a crown reduction, stump work or a tree removed in Bristol? Describe the tree, access and intended outcome once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Bristol?",
    copy: "Enter the postcode, tree species if known, approximate height and the work you want done. Add photos showing the whole tree, nearby buildings and access so suitable Bristol tree surgeons can judge equipment, waste and permission requirements.",
  },
  localContext: {
    eyebrow: "Bristol protected-tree checks",
    title: "Permission can matter before a saw ever reaches the tree",
    intro: "Bristol protects trees through Tree Preservation Orders and conservation-area controls. A professional quote should identify whether consent or notice is needed before work is booked.",
    items: [
      {
        title: "TPO-protected trees need permission for common types of work",
        text: "Bristol City Council says Tree Preservation Orders can cover all types of trees and permission is needed for work such as felling, lopping, topping and cutting roots. The council's online mapping can be used to check whether a tree is covered by a TPO.",
        source: {
          label: "Bristol City Council — Tree Preservation Orders",
          url: "https://www.bristol.gov.uk/residents/planning-and-building-regulations/tree-works-and-preservation/tree-preservation-orders",
        },
      },
      {
        title: "Trees in conservation areas also have automatic protection",
        text: "Bristol's conservation-area guidance says trees with a trunk diameter of 75mm or more, measured 1.5 metres above the ground, are protected. In most cases the council requires six weeks' notice before cutting down, topping, trimming or uprooting such a tree.",
        source: {
          label: "Bristol City Council — planning in conservation areas",
          url: "https://www.bristol.gov.uk/residents/planning-and-building-regulations/conservation-listed-buildings-and-the-historic-environment/conservation-areas/planning-permission-in-conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Bristol by postcode, tree size and access. Example areas include:",
    sideTitle: "Photos should show the whole working area",
    sideCopy: "Include the tree, nearby roofs, roads, gardens, sheds, overhead lines and the route for removing timber. Access can change whether climbing, rigging or larger equipment is practical.",
    noteLead: "Check protection status before agreeing a start date.",
    noteText: "A TPO or conservation-area notice can affect what work is lawful and when it can begin, even when the tree is on private land.",
  },
  faq: [
    ["How do I know if a Bristol tree has a TPO?", "Bristol City Council provides online mapping for Tree Preservation Orders. A tree surgeon can also help identify the planning check needed before work is booked."],
    ["Can I prune a protected tree without permission?", "Not generally. The council lists felling, lopping, topping and root cutting among works that need permission when a TPO applies."],
    ["What about trees in a Bristol conservation area?", "Trees with a trunk diameter of at least 75mm at 1.5m above ground are protected by conservation-area rules, and six weeks' notice is normally required for proposed work."],
    ["Should waste removal be included in the quote?", "Ask explicitly whether branches, timber, woodchip and stump material are included, because disposal and access can materially affect the price."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Bristol?",
    copy: "Describe the tree, access and intended work once, then compare interested Bristol tree surgeons and their quotes.",
    buttonLabel: "Get Bristol tree-surgery quotes",
  },
});

export const architectsBristol = makeBristolProfile("architects", {
  heroCopy: "Planning an extension, remodelling project or new design in Bristol? Describe the property, goals and budget once, then compare architects with relevant local experience.",
  answer: {
    title: "Looking for an architect near you in Bristol?",
    copy: "Enter the postcode and explain what you want to change, the approximate budget and whether the property is listed or in a conservation area if known. Suitable Bristol architects can then judge whether the project fits their experience and service level.",
  },
  localContext: {
    eyebrow: "Bristol planning and heritage context",
    title: "Listed buildings and conservation areas can change the design route early",
    intro: "Bristol has substantial historic building stock and locally specific planning controls. Establishing constraints before concept design can prevent a scheme being developed around assumptions that later prove impossible.",
    items: [
      {
        title: "Works affecting a listed building's historic character normally need consent",
        text: "Bristol City Council says a listed building needs consent for demolition, alteration or extension where the work affects its historic character, and that most changes to the inside or outside can require Listed Building Consent. Early heritage assessment can therefore shape layout, materials and how much original fabric can be altered.",
        source: {
          label: "Bristol City Council — alterations to listed buildings",
          url: "https://www.bristol.gov.uk/residents/planning-and-building-regulations/conservation-listed-buildings-and-the-historic-environment/listed-buildings/making-alterations-to-a-listed-building",
        },
      },
      {
        title: "Conservation areas have tighter planning controls",
        text: "The council says conservation areas have stricter controls and advises a pre-application enquiry for major work in a conservation area. It also notes that local Article 4 Directions remove permitted-development rights for particular works in some Bristol neighbourhoods, so the exact address matters before drawings are finalised.",
        source: {
          label: "Bristol City Council — planning permission in conservation areas",
          url: "https://www.bristol.gov.uk/residents/planning-and-building-regulations/conservation-listed-buildings-and-the-historic-environment/conservation-areas/planning-permission-in-conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may work across Bristol depending on project type and scope. Example areas include:",
    sideTitle: "Give the address before asking for a design fee",
    sideCopy: "Planning constraints can differ street by street. The postcode lets an architect check conservation status, listing, Article 4 controls and the planning history before recommending a route.",
    noteLead: "Compare the service stage as well as the fee.",
    noteText: "Confirm whether the quote includes measured survey, concept design, planning, technical drawings, building regulations and construction-stage support.",
  },
  faq: [
    ["Do I need an architect for a Bristol extension?", "Not every extension legally requires an architect, but professional design can be valuable where planning constraints, structure, layout or technical coordination are complicated."],
    ["What if my Bristol property is listed?", "Bristol City Council says most works affecting the historic character of a listed building can require Listed Building Consent, including many internal as well as external alterations."],
    ["Does living in a conservation area change the planning process?", "It can. Bristol applies tighter planning controls in conservation areas and some areas also have Article 4 Directions that remove normally available permitted-development rights."],
    ["What should I compare between architects?", "Compare relevant project experience and exactly which work stages are included: survey, concept, planning, technical design, building regulations, tendering and site support."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Bristol?",
    copy: "Describe the property and project once, then compare interested Bristol architects, relevant experience and fees.",
    buttonLabel: "Get Bristol architect quotes",
  },
});
