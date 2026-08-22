import { makeEnfieldProfile } from "./enfieldProfileBase";

export const treeSurgeonsEnfield = makeEnfieldProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, felling or other tree work in Enfield? Describe the tree, access, nearby buildings and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Enfield?",
    copy: "Enter the postcode, number and approximate size of trees, proposed work, access and waste requirements. Mention any Tree Preservation Order, conservation area or suspected protection so suitable Enfield tree surgeons can plan the job correctly.",
  },
  localContext: {
    eyebrow: "Protected trees in Enfield",
    title: "TPO trees need formal consent, while conservation-area tree work normally requires six weeks' notice",
    intro: "Enfield has extensive protected tree stock and 22 conservation areas. Before pruning or felling, the legal status of the tree should be checked rather than assumed from its size or location.",
    items: [
      {
        title: "Enfield requires consent for work to TPO-protected trees",
        text: "Enfield Council says formal consent is required for pruning or removing a tree protected by a Tree Preservation Order. Protected status can also arise through a conservation area or specific planning conditions.",
        source: {
          label: "Enfield Council — tree protection and planning",
          url: "https://www.enfield.gov.uk/services/environment/tree-protection-and-planning",
        },
      },
      {
        title: "Conservation-area notifications normally require six weeks before work begins",
        text: "For qualifying trees in a conservation area, Enfield says a notification must be submitted and six weeks' notice given before work starts. TPO applications may take up to eight weeks for an outcome.",
        source: {
          label: "Enfield Council — tree protection and planning",
          url: "https://www.enfield.gov.uk/services/environment/tree-protection-and-planning",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Enfield by postcode, tree size, access and protection status. Example areas include:",
    sideTitle: "Check protection before agreeing a start date",
    sideCopy: "A garden tree in Enfield Lock, mature trees in Winchmore Hill and work near one of Enfield's conservation areas may have different permissions. Give the tree surgeon the exact address early.",
    noteLead: "Do not confuse ownership with permission to prune.",
    noteText: "Even a tree on private land can be protected. If branches overhang from a neighbour's land, permission issues and protected-tree consent should be resolved before work begins.",
  },
  faq: [
    ["How much does a tree surgeon cost in Enfield?", "Cost depends on tree size, species, access, climbing or machinery required, waste removal, stump work and protection constraints."],
    ["Do I need permission to work on a TPO tree in Enfield?", "Yes. Enfield Council says formal consent is required for pruning or removing a TPO-protected tree unless a specific exemption applies."],
    ["How much notice is needed for a tree in an Enfield conservation area?", "Enfield Council says qualifying conservation-area tree work normally requires six weeks' notice."],
    ["How many conservation areas does Enfield have?", "Enfield Council lists 22 conservation areas across the borough."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Enfield?",
    copy: "Describe the tree work, access and protection status once, then compare interested Enfield tree surgeons and their quotes.",
    buttonLabel: "Get Enfield tree-surgery quotes",
  },
});

export const architectsEnfield = makeEnfieldProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or other building project in Enfield? Describe the property, goals and constraints once, then compare architects and designers who cover your area.",
  answer: {
    title: "Looking for an architect near you in Enfield?",
    copy: "Enter the postcode, property type, project scope and whether you need concept design, planning drawings, Building Regulations information or a fuller service. Suitable Enfield architects can then respond to the same brief.",
  },
  localContext: {
    eyebrow: "Enfield heritage and planning context",
    title: "Enfield has 22 conservation areas, and Article 4 directions remove extra permitted-development rights in several of them",
    intro: "Designing only to generic permitted-development limits can miss important local controls. Enfield's heritage map includes conservation areas across the borough, and some areas have additional Article 4 directions.",
    items: [
      {
        title: "Enfield Council lists 22 conservation areas",
        text: "The borough's conservation areas include Enfield Town, Enfield Lock, Bush Hill Park, Winchmore Hill, Southgate Green, Forty Hill and others. Their character and appearance are specifically protected through the planning system.",
        source: {
          label: "Enfield Council — conservation areas",
          url: "https://www.enfield.gov.uk/services/planning/heritage/conservation-areas",
        },
      },
      {
        title: "Article 4 directions can require applications for work normally permitted",
        text: "Enfield Council explains that Article 4 directions withdraw specified permitted-development rights. Several conservation areas have their own directions, and a separate borough-wide direction covers C3 dwellinghouse to C4 HMO changes.",
        source: {
          label: "Enfield Council — Article 4 directions",
          url: "https://www.enfield.gov.uk/services/planning/article-4-directions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects and designers may cover Enfield by postcode, project type and required service. Example areas include:",
    sideTitle: "Give the exact address before assuming the planning route",
    sideCopy: "An extension in Southgate, alterations in Enfield Town and a conversion in Edmonton may sit under different heritage, Article 4 or site-specific constraints. Address checks should happen before the design is fixed.",
    noteLead: "Planning permission and Building Control are separate.",
    noteText: "A project can need one, both or neither depending on the work. Ask the designer to state what they are providing and which approvals, surveys and technical drawings remain outside their fee.",
  },
  faq: [
    ["How much does an architect cost in Enfield?", "Fees depend on project size, complexity and service level, from measured survey and planning drawings through to detailed design and contract administration."],
    ["How many conservation areas are in Enfield?", "Enfield Council lists 22 conservation areas across the borough."],
    ["What does an Article 4 direction mean?", "It withdraws specified permitted-development rights in a defined area or for a defined change, so work that might otherwise be permitted can require planning permission."],
    ["Does an Enfield planning application guarantee Building Regulations approval?", "No. Planning and Building Control are separate approval systems and a project may need both."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Enfield?",
    copy: "Describe the property and project once, then compare interested Enfield architects or designers and their quotes.",
    buttonLabel: "Get Enfield architect quotes",
  },
});
