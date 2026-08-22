import { makeBootleProfile } from "./bootleProfileBase";

export const treeSurgeonsBootle = makeBootleProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, felling or other tree work in Bootle? Describe the tree, access, nearby buildings and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Bootle?",
    copy: "Enter the postcode, number and approximate size of trees, proposed work, access and waste requirements. Mention any Tree Preservation Order, conservation area or suspected protection so suitable Bootle tree surgeons can plan the job correctly.",
  },
  localContext: {
    eyebrow: "Protected trees in Bootle",
    title: "Derby Park is a Bootle conservation area, and qualifying tree work there requires the same protection checks as elsewhere in Sefton",
    intro: "Bootle includes the Derby Park Conservation Area immediately east of the town centre. Before pruning or felling, the exact address should be checked for both conservation-area status and any Tree Preservation Order.",
    items: [
      {
        title: "TPO-protected trees need Sefton Council's permission before work",
        text: "Sefton Council says it is an offence to cut down, lop, uproot, wilfully damage or destroy a tree protected by a Tree Preservation Order without permission, unless a specific exemption applies.",
        source: {
          label: "Sefton Council — tree preservation",
          url: "https://www.sefton.gov.uk/planning-building-control/apply-for-permission/tree-preservation/",
        },
      },
      {
        title: "Trees in conservation areas normally require six weeks' notice",
        text: "Sefton says qualifying work to trees in a conservation area requires six weeks' notice. Derby Park is one of Sefton's conservation areas, so the location should be checked before agreeing a start date.",
        source: {
          label: "Sefton Council — tree preservation",
          url: "https://www.sefton.gov.uk/planning-building-control/apply-for-permission/tree-preservation/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Bootle by postcode, tree size, access and protection status. Example areas include:",
    sideTitle: "Check protection before agreeing a start date",
    sideCopy: "A garden tree in Netherton, mature trees near Derby Park and work close to a boundary in Litherland may have different access and permission issues. Give the tree surgeon the exact address early.",
    noteLead: "Do not confuse ownership with permission to prune.",
    noteText: "Even a tree on private land can be protected. If branches overhang from a neighbour's land, permission issues and protected-tree consent should be resolved before work begins.",
  },
  faq: [
    ["How much does a tree surgeon cost in Bootle?", "Cost depends on tree size, species, access, climbing or machinery required, waste removal, stump work and protection constraints."],
    ["Do I need permission to work on a TPO tree in Bootle?", "Yes. Sefton Council says protected-tree work needs permission unless a specific exemption applies."],
    ["How much notice is needed for a tree in a Sefton conservation area?", "Sefton Council says qualifying conservation-area tree work requires six weeks' notice."],
    ["Is Derby Park a conservation area?", "Yes. Sefton Council lists Derby Park as a conservation area in Bootle."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Bootle?",
    copy: "Describe the tree work, access and protection status once, then compare interested Bootle tree surgeons and their quotes.",
    buttonLabel: "Get Bootle tree-surgery quotes",
  },
});

export const architectsBootle = makeBootleProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or other building project in Bootle? Describe the property, goals and constraints once, then compare architects and designers who cover your area.",
  answer: {
    title: "Looking for an architect near you in Bootle?",
    copy: "Enter the postcode, property type, project scope and whether you need concept design, planning drawings, Building Regulations information or a fuller service. Suitable Bootle architects can then respond to the same brief.",
  },
  localContext: {
    eyebrow: "Bootle planning context",
    title: "Bootle now has its own adopted Area Action Plan as part of Sefton's statutory development plan",
    intro: "Bootle is not governed only by generic borough-wide planning policy. Sefton formally adopted the Bootle Area Action Plan in January 2026, covering Bootle and parts of Seaforth and Litherland, and it now forms part of the statutory development plan.",
    items: [
      {
        title: "The Bootle Area Action Plan was adopted on 15 January 2026",
        text: "Sefton Council says the adopted plan sets a long-term vision for Bootle and the wider area and is now used alongside the Sefton Local Plan and other development-plan documents when planning proposals are assessed.",
        source: {
          label: "Sefton Council — Bootle Area Action Plan",
          url: "https://www.sefton.gov.uk/bootle-action-plan",
        },
      },
      {
        title: "Derby Park adds a heritage layer to some Bootle projects",
        text: "Sefton's conservation guidance identifies Derby Park as a conservation area with a Victorian urban landscape and historic Bootle village context. Extensions and visible alterations there should preserve or enhance the area's character rather than relying on a generic design approach.",
        source: {
          label: "Sefton Council — conservation areas",
          url: "https://sefton.gov.uk/conservationareas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects and designers may cover Bootle by postcode, project type and required service. Example areas include:",
    sideTitle: "Give the exact address before assuming the planning route",
    sideCopy: "An extension in Netherton, alterations near Derby Park and a conversion in Seaforth may sit under different site, heritage and policy constraints. Address checks should happen before the design is fixed.",
    noteLead: "Planning permission and Building Control are separate.",
    noteText: "A project can need one, both or neither depending on the work. Ask the designer to state what they are providing and which approvals, surveys and technical drawings remain outside their fee.",
  },
  faq: [
    ["How much does an architect cost in Bootle?", "Fees depend on project size, complexity and service level, from measured survey and planning drawings through to detailed design and contract administration."],
    ["Does Bootle have its own planning policy document?", "Yes. Sefton Council adopted the Bootle Area Action Plan in January 2026 and it now forms part of the statutory development plan."],
    ["Is Derby Park a conservation area?", "Yes. Sefton identifies Derby Park in Bootle as a conservation area with specific heritage considerations."],
    ["Does planning permission guarantee Building Regulations approval?", "No. Planning and Building Control are separate approval systems and a project can require both."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Bootle?",
    copy: "Describe the property and project once, then compare interested Bootle architects or designers and their quotes.",
    buttonLabel: "Get Bootle architect quotes",
  },
});
