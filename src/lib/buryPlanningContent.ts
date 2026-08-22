import { makeBuryProfile } from "./buryProfileBase";

export const treeSurgeonsBury = makeBuryProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, felling or other tree work in Bury? Describe the tree, access, nearby buildings and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Bury?",
    copy: "Enter the postcode, number and approximate size of trees, proposed work, access and waste requirements. Mention any Tree Preservation Order, conservation area or suspected protection so suitable Bury tree surgeons can plan the job correctly.",
  },
  localContext: {
    eyebrow: "Protected trees in Bury",
    title: "TPO trees need council permission, and conservation-area trees can also require advance notice",
    intro: "Bury Council protects trees through Tree Preservation Orders and conservation-area controls. Before pruning or felling, the legal status of the tree should be checked rather than assumed from its size or whether it stands on private land.",
    items: [
      {
        title: "It is an offence to carry out unauthorised work to a TPO tree",
        text: "Bury Council says a Tree Preservation Order gives a tree legal protection and makes it an offence to cut down, top, lop, uproot, wilfully damage or destroy it without council permission.",
        source: {
          label: "Bury Council — protected trees",
          url: "https://www.bury.gov.uk/planning-building-control/protected-trees",
        },
      },
      {
        title: "Conservation-area trees over the stated diameter threshold need notice",
        text: "Bury Council says trees in conservation areas are protected where the trunk exceeds 7.5 centimetres in diameter at 1.5 metres above ground, or 10 centimetres where work is intended to help other trees grow. Notice must be given before work proceeds.",
        source: {
          label: "Bury Council — protected trees",
          url: "https://www.bury.gov.uk/planning-building-control/protected-trees",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Bury by postcode, tree size, access and protection status. Example areas include:",
    sideTitle: "Check protection before agreeing a start date",
    sideCopy: "A garden tree in Brandlesholme, mature trees in Walmersley and work inside Bury Town Centre Conservation Area may have different controls. Give the tree surgeon the exact address early.",
    noteLead: "Do not confuse ownership with permission to prune.",
    noteText: "Even a tree on private land can be protected. Confirm TPO or conservation-area status before arranging felling, crown reduction or other significant work.",
  },
  faq: [
    ["How much does a tree surgeon cost in Bury?", "Cost depends on tree size, species, access, climbing or machinery required, waste removal, stump work and protection constraints."],
    ["Do I need permission to work on a TPO tree in Bury?", "Yes. Bury Council says TPO trees cannot be cut down, topped, lopped, uprooted, damaged or destroyed without permission."],
    ["Are trees in Bury conservation areas protected?", "Yes. Bury Council says qualifying trees in conservation areas require notice before work is carried out."],
    ["What trunk size triggers the conservation-area rule?", "Bury Council states 7.5 centimetres in diameter measured 1.5 metres above the ground, or 10 centimetres in a specific thinning circumstance."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Bury?",
    copy: "Describe the tree work, access and protection status once, then compare interested Bury tree surgeons and their quotes.",
    buttonLabel: "Get Bury tree-surgery quotes",
  },
});

export const architectsBury = makeBuryProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or other building project in Bury? Describe the property, goals and constraints once, then compare architects and designers who cover your area.",
  answer: {
    title: "Looking for an architect near you in Bury?",
    copy: "Enter the postcode, property type, project scope and whether you need concept design, planning drawings, Building Regulations information or a fuller service. Suitable Bury architects can then respond to the same brief.",
  },
  localContext: {
    eyebrow: "Bury heritage and planning context",
    title: "Bury has 12 designated conservation areas, while a new borough-wide Article 4 direction now controls new small HMOs",
    intro: "Designing only to generic permitted-development limits can miss important local controls. Bury Council lists conservation areas across the borough and also introduced a borough-wide HMO Article 4 direction in July 2026.",
    items: [
      {
        title: "Bury Council lists 12 designated conservation areas",
        text: "The current council list includes Bury Town Centre, Walmersley, Ramsbottom, Holcombe, Ainsworth, All Saints Whitefield and others. Conservation-area designation brings additional planning controls intended to preserve or enhance local character.",
        source: {
          label: "Bury Council — Conservation Areas & Article 4 Directions",
          url: "https://www.bury.gov.uk/planning-building-control/heritage-and-conservation/conservation-areas",
        },
      },
      {
        title: "New small HMOs require planning permission across the whole borough",
        text: "Bury's immediate HMO Article 4 direction came into effect on 16 July 2026 and removes the normal permitted-development right for material changes from C3 dwellinghouse to C4 small HMO. The direction is borough-wide.",
        source: {
          label: "Bury Council — Article 4 Directions",
          url: "https://www.bury.gov.uk/planning-building-control/planning-permission/article-4-directions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects and designers may cover Bury by postcode, project type and required service. Example areas include:",
    sideTitle: "Give the exact address before assuming the planning route",
    sideCopy: "An extension in Chesham, alterations near Bury Town Centre and a conversion in Fishpool can sit under different heritage, Article 4 or site-specific constraints. Address checks should happen before the design is fixed.",
    noteLead: "Planning permission and Building Control are separate.",
    noteText: "A project can need one, both or neither depending on the work. Ask the designer to state what they are providing and which approvals, surveys and technical drawings remain outside their fee.",
  },
  faq: [
    ["How much does an architect cost in Bury?", "Fees depend on project size, complexity and service level, from measured survey and planning drawings through to detailed design and contract administration."],
    ["How many conservation areas does Bury Council list?", "The current council page lists 12 designated conservation areas across the borough."],
    ["What does an Article 4 direction mean?", "It removes specified permitted-development rights, so work that would normally avoid an application can require planning permission."],
    ["Do new small HMOs need planning permission in Bury?", "Yes. Bury's borough-wide HMO Article 4 direction took effect on 16 July 2026."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Bury?",
    copy: "Describe the property and project once, then compare interested Bury architects or designers and their quotes.",
    buttonLabel: "Get Bury architect quotes",
  },
});
