import { makeGlasgowProfile } from "./glasgowProfileBase";

export const treeSurgeonsGlasgow = makeGlasgowProfile("tree-surgeons", {
  heroCopy: "Need tree pruning, removal, stump work or an assessment in Glasgow? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Glasgow?",
    copy: "Enter the postcode and describe the tree species if known, approximate size, condition, access and proposed work. Add photos from several angles so suitable Glasgow tree surgeons can judge equipment, risk and permissions.",
  },
  localContext: {
    eyebrow: "Glasgow protected-tree context",
    title: "Tree work can need council involvement where a TPO or conservation-area protection applies",
    intro: "Glasgow City Council can protect individual trees, groups and woodlands through Tree Preservation Orders, while Scottish conservation-area rules require six weeks' notice before most work to trees in a conservation area.",
    items: [
      {
        title: "Glasgow uses Tree Preservation Orders to protect important trees",
        text: "Glasgow planning policy states that removal or serious damage to a tree protected by a TPO should occur only in exceptional circumstances and that development proposals should account for protected trees at design stage. Before accepting a quote for major pruning or removal, check whether the tree is covered by a TPO.",
        source: {
          label: "Glasgow City Council — Tree Preservation Orders",
          url: "https://onlineservices.glasgow.gov.uk/CouncillorsandCommittees/viewSelectedDocument.asp?c=P62AFQDNZLNTZLDNZ3",
        },
      },
      {
        title: "Trees in conservation areas normally require six weeks' notice before work",
        text: "Scottish Government guidance says it is an offence to cut, lop, top, uproot, wilfully damage or destroy a tree in a conservation area unless six weeks' notice has been given to the planning authority, subject to statutory exceptions. A tree surgeon should establish protection status before starting work.",
        source: {
          label: "Scottish Government — guide to conservation areas in Scotland",
          url: "https://www.gov.scot/publications/guide-to-conservation-areas-in-scotland/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Glasgow by postcode, tree size and access. Example areas include:",
    sideTitle: "Check protection status before booking the saw",
    sideCopy: "A garden tree in Cathcart, a mature tree in Pollokshields and work near a conservation-area property can have very different access and permission issues. Send photos and identify boundaries clearly.",
    noteLead: "Do not assume garden ownership removes planning controls.",
    noteText: "A privately owned tree can still be protected by a TPO or conservation-area rules. Check before pruning or felling rather than after the work has started.",
  },
  faq: [
    ["How much does a tree surgeon cost in Glasgow?", "Price depends on tree size, condition, access, climbing or machinery, waste removal, stump work and any traffic or permission issues. Compare the same scope."],
    ["How do I know if a Glasgow tree has a TPO?", "Check with Glasgow City Council planning before major work. A professional tree surgeon can also help identify what information is needed."],
    ["Can I cut a tree in a Glasgow conservation area?", "Usually you must give the planning authority six weeks' notice before work to a conservation-area tree, subject to statutory exceptions."],
    ["Does the quote normally include taking branches away?", "Do not assume so. Ask whether chipping, timber removal, stump grinding and site clearance are included and how waste will be handled."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Glasgow?",
    copy: "Describe the tree, proposed work and access once, then compare interested Glasgow tree surgeons and their quotes.",
    buttonLabel: "Get Glasgow tree-surgery quotes",
  },
});

export const architectsGlasgow = makeGlasgowProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or other design project in Glasgow? Describe the property, scope and priorities once, then compare architects who cover the city.",
  answer: {
    title: "Looking for an architect near you in Glasgow?",
    copy: "Enter the postcode and explain the existing property, intended changes, budget range and whether planning or building-warrant work is likely. Include sketches or photos so suitable Glasgow architects can understand the brief.",
  },
  localContext: {
    eyebrow: "Glasgow planning and heritage context",
    title: "Glasgow has 25 conservation areas and a separate Scottish building-warrant process to plan around",
    intro: "Glasgow's historic environment is a real design constraint rather than decorative background. The council has 25 conservation areas, while Building Standards acts as the local verifier for building warrants under the Scottish system.",
    items: [
      {
        title: "Glasgow currently has 25 conservation areas",
        text: "Glasgow City Council's conservation-area review identifies 25 designated conservation areas, including Central, Glasgow West, Dennistoun, Pollokshields, Shawlands Cross and others. Projects in these areas can face tighter controls over external changes, materials and demolition, so status should be checked at the start of the design brief.",
        source: {
          label: "Glasgow City Council — conservation area review programme",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDN812U81NT81",
        },
      },
      {
        title: "Planning permission and a building warrant are separate approvals in Scotland",
        text: "Glasgow Building Standards is the verifier responsible for granting building warrants in the city. A project can therefore need planning permission, a building warrant, both or neither depending on the work. Ask an architect to map the approval route before detailed design and construction are committed.",
        source: {
          label: "Glasgow City Council — Building Standards verifier role",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDNNTZ3DN81Z3",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Glasgow by project type, property and postcode. Example areas include:",
    sideTitle: "Start with the property's actual constraints",
    sideCopy: "A tenement alteration in Hillhead, a conservation-area house in Pollokshields and a modern property in another part of Glasgow can require very different design and approval strategies.",
    noteLead: "Check heritage status before fixing the design.",
    noteText: "Conservation-area, listed-building and tree constraints can change what is feasible. Early checks are cheaper than redesigning after an application is prepared.",
  },
  faq: [
    ["How much does an architect cost in Glasgow?", "Fees vary by project size, complexity, survey work, planning, building-warrant input and construction-stage involvement. Compare quotes against the same scope of service."],
    ["How many conservation areas are there in Glasgow?", "Glasgow City Council identifies 25 conservation areas in its current review programme."],
    ["Is a Scottish building warrant the same as planning permission?", "No. They are separate systems. Planning controls land use and development, while the building-warrant process checks compliance with Scottish building standards."],
    ["Can an architect help with a tenement alteration?", "Yes. Explain whether the work affects common fabric, structure, external appearance or shared services so the architect can identify likely approvals and coordination."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Glasgow?",
    copy: "Describe the property, project and likely approvals once, then compare interested Glasgow architects and their proposals.",
    buttonLabel: "Get Glasgow architect quotes",
  },
});
