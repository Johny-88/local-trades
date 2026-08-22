import { makeEdinburghProfile } from "./edinburghProfileBase";

export const treeSurgeonsEdinburgh = makeEdinburghProfile("tree-surgeons", {
  heroCopy: "Need tree pruning, reduction, removal or another arboricultural job in Edinburgh? Describe the tree, location and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Edinburgh?",
    copy: "Enter the postcode and describe the tree species if known, size, condition, access and required work. Include clear photos from several angles so suitable Edinburgh tree surgeons can judge the job and check whether protection applies.",
  },
  localContext: {
    eyebrow: "Edinburgh protected-tree context",
    title: "Tree Preservation Orders and Edinburgh's conservation areas can require consent or advance notice",
    intro: "Edinburgh protects trees through Tree Preservation Orders, conservation-area controls and planning conditions. The city has 50 conservation areas, so checking protection before pruning or removal is particularly important rather than assuming a garden tree can always be worked on immediately.",
    items: [
      {
        title: "Conservation-area tree work generally needs at least six weeks' notice",
        text: "The council's tree-work quick guide says proposed work to trees in a conservation area should be notified to the council not less than six weeks before the work is carried out. Ask the tree surgeon to check the address and protection status early enough for the notice period rather than booking a date first.",
        source: {
          label: "City of Edinburgh Council — quick guide to applying for tree works",
          url: "https://www.edinburgh.gov.uk/downloads/file/31966/quick-guide-to-applying-for-tree-works",
        },
      },
      {
        title: "Trees covered by a TPO need prior planning-authority consent",
        text: "Edinburgh's guidance states that Tree Preservation Order trees require consent before work and that protected trees can also arise through planning conditions. The council provides an interactive map, but the exact order and constraints should be checked before pricing irreversible work such as felling or major reduction.",
        source: {
          label: "City of Edinburgh Council — privately owned trees and woodlands",
          url: "https://www.edinburgh.gov.uk/privatelyownedtrees",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Edinburgh by postcode, tree size and access. Example areas include:",
    sideTitle: "Check protection before agreeing the work date",
    sideCopy: "A garden tree in Morningside, Stockbridge or the New Town may sit within a conservation area, while another tree may be covered by a specific TPO or planning condition. Give the full address so protection can be checked properly.",
    noteLead: "Consent can affect timing.",
    noteText: "If a tree is protected, allow time for the correct application or conservation-area notification before arranging pruning, reduction or removal.",
  },
  faq: [
    ["How much does a tree surgeon cost in Edinburgh?", "Price depends on tree size, condition, access, equipment, waste removal and whether traffic or protection constraints affect the job. Compare quotes against the same scope."],
    ["Do I need permission to prune a tree in an Edinburgh conservation area?", "The council says proposed work to trees in conservation areas should generally be notified at least six weeks before the work is carried out."],
    ["What if the tree has a Tree Preservation Order?", "Prior consent from the planning authority is required for work to a TPO tree unless a specific legal exception applies."],
    ["How do I check whether a tree is protected?", "The City of Edinburgh Council provides an interactive map showing conservation areas and TPO information. A competent tree surgeon can also help identify what needs to be checked."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Edinburgh?",
    copy: "Describe the tree, access and required work once, then compare interested Edinburgh tree surgeons and their quotes.",
    buttonLabel: "Get Edinburgh tree quotes",
  },
});

export const architectsEdinburgh = makeEdinburghProfile("architects", {
  heroCopy: "Planning an extension, conversion, redesign or other building project in Edinburgh? Describe the property and goals once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Edinburgh?",
    copy: "Enter the postcode and explain the existing property, proposed changes, approximate budget and whether the building is listed or in a conservation area. Suitable Edinburgh architects can then judge the planning, design and warrant work involved.",
  },
  localContext: {
    eyebrow: "Edinburgh planning and heritage context",
    title: "Fifty conservation areas and citywide short-term-let controls make early planning checks especially important",
    intro: "Edinburgh combines a large protected historic environment with planning controls that can depend heavily on property use. For architects, that means the correct brief starts with the building's designation, location and intended use before design work progresses too far.",
    items: [
      {
        title: "Edinburgh has 50 designated conservation areas",
        text: "The council says Edinburgh has 50 conservation areas with extra rules controlling building work. For an extension, external alteration, roof work or changes to a traditional frontage, establish whether the site is inside a conservation area and review the relevant character appraisal before assuming ordinary householder rules are enough.",
        source: {
          label: "City of Edinburgh Council — conservation areas",
          url: "https://www.edinburgh.gov.uk/conservation-2/conservation-areas",
        },
      },
      {
        title: "The entire council area is designated as a short-term-let control area",
        text: "The council's designation means use of an entire dwelling that is not the owner's principal home as a short-term let is treated as a material change of use requiring planning permission. If an architect is designing a conversion or reconfiguration for letting, the intended use should be established before the layout is treated as a purely technical design exercise.",
        source: {
          label: "City of Edinburgh Council — short-term-let control area",
          url: "https://www.edinburgh.gov.uk/downloads/file/31823/short-term-let-designation-map",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Edinburgh by postcode, project type and planning complexity. Example areas include:",
    sideTitle: "Start with designations and lawful use",
    sideCopy: "A New Town flat, a Marchmont tenement, a Portobello house and a property in Corstorphine can face very different heritage, neighbour, access and planning considerations. Give the exact address and intended use at the start.",
    noteLead: "Planning and building warrants are separate systems.",
    noteText: "A project can need planning permission, listed-building consent, a building warrant, more than one of these or none. Ask the architect to identify the likely approval route early.",
  },
  faq: [
    ["How much does an architect cost in Edinburgh?", "Fees vary with project size, complexity, survey work, planning risk, technical design and whether the architect stays involved through construction. Compare quotes for the same scope and stages."],
    ["Does being in an Edinburgh conservation area change a project?", "It can. Edinburgh has 50 conservation areas and extra controls can affect external alterations, demolition and design details."],
    ["What about listed buildings?", "Alterations to a listed building may need listed-building consent in addition to any planning permission or building warrant."],
    ["Do short-term-let plans need special consideration in Edinburgh?", "Yes. The whole council area is a short-term-let control area, and secondary letting of an entire dwelling can require planning permission for change of use."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Edinburgh?",
    copy: "Describe the property, intended use and project goals once, then compare interested Edinburgh architects and their quotes.",
    buttonLabel: "Get Edinburgh architect quotes",
  },
});
