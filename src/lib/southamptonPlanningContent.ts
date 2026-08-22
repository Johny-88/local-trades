import { makeSouthamptonProfile } from "./southamptonProfileBase";

export const treeSurgeonsSouthampton = makeSouthamptonProfile("tree-surgeons", {
  heroCopy: "Need pruning, crown work, felling or help with a dangerous tree in Southampton? Describe the tree, location and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Southampton?",
    copy: "Enter the postcode, tree species if known, approximate height and the work you think is needed. Mention nearby buildings, roads, cables and whether the tree may be protected so suitable Southampton tree surgeons can judge access and permissions.",
  },
  localContext: {
    eyebrow: "Southampton protected-tree rules",
    title: "Check protection status before pruning or felling",
    intro: "Southampton has extensive Tree Preservation Order and conservation-area coverage. A competent tree surgeon should identify the legal status before work begins, not after the branches are cut.",
    items: [
      {
        title: "Southampton has more than 700 TPOs and 20 conservation areas",
        text: "Southampton City Council says there are over 700 Tree Preservation Orders in the city and 20 conservation areas. Trees in conservation areas can also be protected when their trunk diameter exceeds 75mm at 1.5 metres above ground. The council provides an online TPO and conservation-area map, but advises contacting the trees team to confirm status before work.",
        source: {
          label: "Southampton City Council — protected trees",
          url: "https://www.southampton.gov.uk/environment/trees-grass-hedges/protected/",
        },
      },
      {
        title: "Urgent safety work follows a different route from routine pruning",
        text: "Southampton City Council says protected trees needing health-and-safety work within five days can be made safe, with the works then reported to the council. Work needed over weeks or months normally requires the appropriate tree-works application, so urgency should be documented clearly.",
        source: {
          label: "Southampton City Council — damage to protected trees",
          url: "https://www.southampton.gov.uk/environment/trees-grass-hedges/protected/damage-protected-trees/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Southampton by postcode, tree size and access. Example areas include:",
    sideTitle: "Send photos showing the whole tree and its surroundings",
    sideCopy: "Include the trunk, crown, garden access and nearby buildings, roads, fences or cables. That helps a tree surgeon judge climbing, lowering, machinery and waste-removal requirements.",
    noteLead: "Do not assume a neighbour's tree is unprotected.",
    noteText: "Check the TPO and conservation-area position before agreeing the work, especially for mature trees or properties with known planning history.",
  },
  faq: [
    ["How much does tree surgery cost in Southampton?", "The price depends on tree size, species, access, the amount of material being removed, rigging requirements and whether specialist equipment or traffic management is needed."],
    ["How do I know if a Southampton tree has a TPO?", "Southampton City Council provides an online TPO and conservation-area map and recommends confirming protection status with its trees team before work."],
    ["Are trees in Southampton conservation areas protected?", "Many are. The council says trees with a trunk diameter greater than 75mm at 1.5 metres above ground are protected within conservation areas, subject to the relevant rules and exceptions."],
    ["What if a protected tree becomes dangerous?", "Southampton has a specific process for urgent safety work. A reputable tree surgeon should document the condition and follow the council's notification or application requirements."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Southampton?",
    copy: "Describe the tree, access and proposed work once, then compare interested Southampton tree surgeons and their quotes.",
    buttonLabel: "Get Southampton tree quotes",
  },
});

export const architectsSouthampton = makeSouthamptonProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new development in Southampton? Describe the property, site and goals once, then compare architects who cover the city.",
  answer: {
    title: "Looking for an architect near you in Southampton?",
    copy: "Enter the postcode and explain the existing property, proposed changes, approximate budget and whether you already have surveys or planning history. Suitable Southampton architects can then judge the design, planning and technical work required.",
  },
  localContext: {
    eyebrow: "Southampton planning context",
    title: "Early planning checks matter around heritage areas and constrained sites",
    intro: "Southampton's planning service encourages early advice on proposals that may face design, heritage or other constraints. The city also has substantial conservation and listed-building coverage.",
    items: [
      {
        title: "The council offers formal pre-application planning advice",
        text: "Southampton City Council says its pre-application service can identify key planning issues, flag design changes and reduce the risk of incomplete or difficult applications. For extensions, conversions or more complex projects, an architect can help decide whether early planning advice is worthwhile before detailed drawings are finalised.",
        source: {
          label: "Southampton City Council — pre-application advice",
          url: "https://www.southampton.gov.uk/planning/planning-permission/pre-app-advice/",
        },
      },
      {
        title: "Southampton has 20 conservation areas and more than 450 listed buildings",
        text: "The council identifies 20 conservation areas and more than 450 listed buildings across Southampton. Listed-building protection can cover interiors as well as facades, so heritage status should be checked before assuming a standard extension or refurbishment route.",
        source: {
          label: "Southampton City Council — listed buildings",
          url: "https://www.southampton.gov.uk/planning-building-control/planning/conservation-and-heritage/buildings-monuments-parks/listed-buildings/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may work across Southampton according to project type and scope. Example areas include:",
    sideTitle: "Share the site constraints at the beginning",
    sideCopy: "Include listing or conservation status, nearby trees, previous applications, access limitations and any known structural issues. Early constraints can change the design long before a planning submission is made.",
    noteLead: "Ask what stage the quote covers.",
    noteText: "Concept design, planning drawings, Building Regulations information, tender support and contract administration are separate services, so compare architects on the same scope.",
  },
  faq: [
    ["How much does an architect cost in Southampton?", "Fees depend on project value, complexity and the stages you appoint them for. Ask each architect to state whether the quote covers concept design, planning, technical drawings and later project support."],
    ["Do I need an architect for planning permission?", "Not always, but an architect can be useful where design quality, heritage, constrained sites or more complex planning issues need to be resolved and presented clearly."],
    ["What is Southampton's pre-application advice service?", "It is a council service that gives planning guidance before an application is submitted and can identify key issues or information requirements early."],
    ["Does listed-building status affect internal work?", "Yes. Southampton City Council notes that listing covers the whole building, inside and out, and listed-building consent is usually required for works that affect its special character."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Southampton?",
    copy: "Describe the property, project and planning position once, then compare interested Southampton architects and their proposals.",
    buttonLabel: "Get Southampton architect quotes",
  },
});
