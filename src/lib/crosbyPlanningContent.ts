import { makeCrosbyProfile } from "./crosbyProfileBase";

export const treeSurgeonsCrosby = makeCrosbyProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, felling or other tree work in Crosby? Describe the tree, access, nearby buildings and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Crosby?",
    copy: "Enter the postcode, number and approximate size of trees, proposed work, access and waste requirements. Mention any Tree Preservation Order, conservation area or suspected protection so suitable Crosby tree surgeons can plan the job correctly.",
  },
  localContext: {
    eyebrow: "Protected trees around Crosby",
    title: "TPO trees need consent, and conservation-area tree work normally requires six weeks' notice",
    intro: "Crosby and nearby areas include several conservation areas, including Crosby Hall, Little Crosby, Moor Park and Blundellsands Park. Before pruning or felling, the legal status of the tree should be checked rather than assumed from its location or ownership.",
    items: [
      {
        title: "Sefton requires permission for work to TPO-protected trees",
        text: "Sefton Council says it is an offence to cut down, lop, uproot, wilfully damage or destroy a tree protected by a Tree Preservation Order without permission, except where a specific exemption applies.",
        source: {
          label: "Sefton Council — tree preservation",
          url: "https://www.sefton.gov.uk/planning-building-control/apply-for-permission/tree-preservation/",
        },
      },
      {
        title: "Conservation-area tree work requires six weeks' notice",
        text: "Sefton says trees in conservation areas are protected and proposals to work on them must normally be submitted with six weeks' notice. The council can then assess whether further protection is appropriate.",
        source: {
          label: "Sefton Council — tree preservation",
          url: "https://www.sefton.gov.uk/planning-building-control/apply-for-permission/tree-preservation/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Crosby by postcode, tree size, access and protection status. Example areas include:",
    sideTitle: "Check protection before agreeing a start date",
    sideCopy: "A garden tree in Hightown, mature trees in Blundellsands and work close to Crosby Hall or Little Crosby can face different constraints. Give the tree surgeon the exact address early.",
    noteLead: "Do not confuse ownership with permission to prune.",
    noteText: "Even a tree on private land can be protected. If branches overhang from neighbouring land, ownership and protected-tree requirements should be resolved before work begins.",
  },
  faq: [
    ["How much does a tree surgeon cost in Crosby?", "Cost depends on tree size, species, access, climbing or machinery required, waste removal, stump work and protection constraints."],
    ["Do I need permission to work on a TPO tree in Sefton?", "Yes. Sefton Council says protected trees cannot normally be cut down, lopped or otherwise damaged without permission."],
    ["How much notice is needed for a tree in a conservation area?", "Sefton Council says qualifying conservation-area tree work requires six weeks' notice."],
    ["Are there conservation areas around Crosby?", "Yes. Sefton lists Crosby Hall, Little Crosby, Moor Park and Blundellsands Park among conservation areas in and around Crosby."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Crosby?",
    copy: "Describe the tree work, access and protection status once, then compare interested Crosby tree surgeons and their quotes.",
    buttonLabel: "Get Crosby tree-surgery quotes",
  },
});

export const architectsCrosby = makeCrosbyProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or other building project in Crosby? Describe the property, goals and constraints once, then compare architects and designers who cover your area.",
  answer: {
    title: "Looking for an architect near you in Crosby?",
    copy: "Enter the postcode, property type, project scope and whether you need concept design, planning drawings, Building Regulations information or a fuller service. Suitable Crosby architects can then respond to the same brief.",
  },
  localContext: {
    eyebrow: "Crosby heritage and Article 4 context",
    title: "Crosby has several conservation areas, and Moor Park has an Article 4 Direction that removes additional permitted-development rights",
    intro: "Designing only to generic permitted-development limits can miss important local controls. Sefton identifies several conservation areas around Crosby and applies an Article 4 Direction within Moor Park to control specified alterations more closely.",
    items: [
      {
        title: "Sefton lists several conservation areas in the Crosby area",
        text: "The council's current conservation-area list includes Crosby Hall, Little Crosby, Moor Park and Blundellsands Park, with Waterloo and Waterloo Park immediately to the south. These designations are material considerations when relevant planning applications are assessed.",
        source: {
          label: "Sefton Council — conservation areas",
          url: "https://www.sefton.gov.uk/conservationareas",
        },
      },
      {
        title: "Moor Park has a confirmed Article 4 Direction",
        text: "Sefton Council says the Moor Park Article 4 Direction was confirmed in July 2010 to control specified work that would otherwise benefit from permitted-development rights. At affected addresses, the planning route should be checked before design assumptions are fixed.",
        source: {
          label: "Sefton Council — Article 4 Direction for conservation areas",
          url: "https://www.sefton.gov.uk/planning-building-control/planning-policy-including-local-plan-and-neighbourhood-planning/article-4-directions/article-4-direction-for-conservation-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects and designers may cover Crosby by postcode, project type and required service. Example areas include:",
    sideTitle: "Give the exact address before assuming the planning route",
    sideCopy: "An extension in Thornton, alterations near Moor Park and work in Blundellsands can sit under different site, heritage or Article 4 constraints. Address checks should happen before the design is fixed.",
    noteLead: "Planning permission and Building Control are separate.",
    noteText: "A project can need one, both or neither depending on the work. Ask the designer to state what they are providing and which approvals, surveys and technical drawings remain outside their fee.",
  },
  faq: [
    ["How much does an architect cost in Crosby?", "Fees depend on project size, complexity and service level, from measured survey and planning drawings through to detailed design and contract administration."],
    ["Are there conservation areas in Crosby?", "Yes. Sefton lists Crosby Hall, Little Crosby, Moor Park and Blundellsands Park among local conservation areas."],
    ["What does the Moor Park Article 4 Direction mean?", "It removes specified permitted-development rights within the defined area, so certain alterations may require planning permission when they otherwise would not."],
    ["Does planning permission guarantee Building Regulations approval?", "No. Planning and Building Control are separate approval systems and a project may need both."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Crosby?",
    copy: "Describe the property and project once, then compare interested Crosby architects or designers and their quotes.",
    buttonLabel: "Get Crosby architect quotes",
  },
});
