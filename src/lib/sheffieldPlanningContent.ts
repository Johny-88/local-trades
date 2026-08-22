import { makeSheffieldProfile } from "./sheffieldProfileBase";

export const treeSurgeonsSheffield = makeSheffieldProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, removal or an inspection of a tree in Sheffield? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Sheffield?",
    copy: "Enter the postcode, approximate tree size and the work you think is needed. Add photos from more than one angle and say whether the tree may be protected or inside a conservation area so suitable Sheffield tree surgeons can judge the next step.",
  },
  localContext: {
    eyebrow: "Sheffield protected-tree rules",
    title: "Tree Preservation Orders and conservation-area notice can control work before a saw is used",
    intro: "Sheffield City Council protects trees through Tree Preservation Orders and conservation-area controls. TPO work normally needs written consent, while qualifying trees in a conservation area require six weeks' notice before work begins unless an exception applies.",
    items: [
      {
        title: "TPO consent is required for protected-tree work",
        text: "Sheffield City Council says it is an offence to cut down, top, lop, uproot, wilfully damage or destroy a tree protected by a TPO without written consent, subject to limited exceptions. Give the tree surgeon the exact address and a clear work specification so protected status and the consent route can be checked before a start date is agreed.",
        source: {
          label: "Sheffield City Council — Tree Preservation Orders and applications",
          url: "https://www.sheffield.gov.uk/planning-development/conservation-design/tree-works-protected-trees/tree-preservation-orders-application-works",
        },
      },
      {
        title: "Qualifying conservation-area trees require six weeks' notice",
        text: "For trees in a conservation area with a trunk diameter of 75mm or more when measured 1.5 metres above ground, Sheffield normally requires six weeks' notice before pruning, removal or root-severance work. The council can use that period to consider whether a TPO should protect the tree.",
        source: {
          label: "Sheffield City Council — notice for tree work in a conservation area",
          url: "https://www.sheffield.gov.uk/planning-development/conservation-design/tree-works-protected-trees/giving-notice-work-tree-conservation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Sheffield by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the tree, boundaries and access route",
    sideCopy: "Include photos of the crown, trunk, nearby buildings, roads, gardens and machinery access. Say whether branches overhang neighbouring land or the highway and whether the tree sits in a known conservation area.",
    noteLead: "Check protection before booking the work.",
    noteText: "The contractor can help specify the work, but TPO consent or conservation-area notice may need to be resolved before pruning or removal starts.",
  },
  faq: [
    ["How much does tree surgery cost in Sheffield?", "The price depends on tree size, species, access, climbing or machinery requirements, waste removal and whether protected-tree procedures are involved."],
    ["How do I know if a Sheffield tree has a TPO?", "Sheffield City Council provides an indicative conservation-area and TPO map and advises contacting the council if there is any doubt because new orders may not yet appear online."],
    ["What if the tree is in a conservation area?", "Qualifying trees normally require six weeks' notice before work. Sheffield's threshold is generally a trunk diameter of at least 75mm measured 1.5 metres above ground, subject to exceptions."],
    ["Can I post a small pruning job?", "Yes. Tree-surgery requests can cover inspections, pruning and reductions as well as larger removals and clearance work."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Sheffield?",
    copy: "Describe the tree, access and proposed work once, then compare interested Sheffield tree surgeons and their quotes.",
    buttonLabel: "Get Sheffield tree-surgery quotes",
  },
});

export const architectsSheffield = makeSheffieldProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new design in Sheffield? Describe the property, objectives and likely scope once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Sheffield?",
    copy: "Enter the postcode, property type and what you want to change. Mention conservation-area, listed-building or HMO use if relevant so suitable Sheffield architects can judge the likely planning and design work.",
  },
  localContext: {
    eyebrow: "Sheffield planning and heritage context",
    title: "Thirty-eight conservation areas, around 1,100 listed buildings and local Article 4 directions make the exact address important",
    intro: "Sheffield City Council identifies 38 conservation areas and around 1,100 listed buildings. It also applies additional Article 4 controls in Broomhill and Nether Edge and a separate HMO Article 4 direction in areas with higher concentrations of student accommodation.",
    items: [
      {
        title: "Heritage and Article 4 constraints vary from street to street",
        text: "The council's planning guidance says certain works in Sheffield's 38 conservation areas require planning permission and that listed-building consent is needed for changes that affect the special interest of a listed building. Broomhill and Nether Edge Conservation Areas have further Article 4 restrictions, so establish the property's designations before relying on normal permitted-development rules.",
        source: {
          label: "Sheffield City Council — find out if you need planning permission",
          url: "https://www.sheffield.gov.uk/planning-development/applications-advice/need-planning-permission",
        },
      },
      {
        title: "Small-HMO conversion rules are tighter inside Sheffield's HMO Article 4 area",
        text: "Within the defined HMO Article 4 area, changing a C3 dwellinghouse to a C4 HMO for three to six unrelated people requires planning permission. Sheffield also uses a 20% concentration test within 200 metres when assessing these applications, so occupancy and intended use should be part of the design brief from the start.",
        source: {
          label: "Sheffield City Council — planning permission for HMOs",
          url: "https://www.sheffield.gov.uk/planning-development/applications-advice/planning-permission-hmo",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Sheffield by project type, property and stage of work. Example areas include:",
    sideTitle: "Give the exact address and intended use",
    sideCopy: "An extension in Dore, a Broomhill conversion and alterations to a Nether Edge period house can face very different heritage, Article 4 and planning constraints. Share the address, existing plans and any known planning history.",
    noteLead: "Planning and Building Regulations are separate.",
    noteText: "A project may need planning permission, listed-building consent, Building Regulations approval, more than one of these or none. Ask the architect to explain the route for the actual proposal.",
  },
  faq: [
    ["How much does an architect cost in Sheffield?", "Fees depend on project value, complexity and whether you need concept design, planning drawings, technical Building Regulations information, tender support or contract administration."],
    ["How many conservation areas are there in Sheffield?", "Sheffield City Council currently identifies 38 conservation areas. The exact controls still depend on the individual area, property and proposed work."],
    ["Are there special Article 4 controls in Broomhill and Nether Edge?", "Yes. The council says these conservation areas have additional Article 4 restrictions beyond ordinary conservation-area controls."],
    ["Does a small HMO conversion need planning permission everywhere in Sheffield?", "Not everywhere. The C3-to-C4 restriction applies within Sheffield's defined HMO Article 4 area, while larger HMOs and other changes of use have separate requirements."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Sheffield?",
    copy: "Describe the property, objectives and project stage once, then compare interested Sheffield architects and their proposals.",
    buttonLabel: "Get Sheffield architect quotes",
  },
});
