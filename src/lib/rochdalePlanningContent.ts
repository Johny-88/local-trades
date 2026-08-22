import { makeRochdaleProfile } from "./rochdaleProfileBase";

export const treeSurgeonsRochdale = makeRochdaleProfile("tree-surgeons", {
  heroCopy: "Need pruning, crown reduction, tree removal or other tree work in Rochdale? Describe the tree, access and required work once, then compare tree surgeons who cover your postcode.",
  answer: {
    title: "Looking for a tree surgeon near you in Rochdale?",
    copy: "Enter the postcode, number and approximate size of trees, required work, access for equipment and whether you know of any Tree Preservation Order or conservation-area status. Photos from several angles can help suitable Rochdale tree surgeons assess the job.",
  },
  localContext: {
    eyebrow: "Rochdale protected trees",
    title: "Tree Preservation Orders and conservation-area status should be checked before pruning or removal starts",
    intro: "Protected-tree controls can change an otherwise straightforward tree job. Rochdale Council says trees may be protected either by a TPO or because they stand within a conservation area.",
    items: [
      {
        title: "A Rochdale TPO can prohibit cutting down, topping, lopping or damaging a tree without consent",
        text: "Rochdale Council says Tree Preservation Orders protect trees with amenity value and prohibit cutting down, uprooting, topping, lopping, wilful damage or destruction without council consent.",
        source: {
          label: "Rochdale Borough Council — Tree Preservation Orders",
          url: "https://www.rochdale.gov.uk/heritage-conservation/tree-preservation-orders",
        },
      },
      {
        title: "Trees in conservation areas are also treated as protected",
        text: "The council says a tree is protected if it has a TPO or is within a conservation area. If you are unsure, Rochdale currently asks for the address and tree location and aims to confirm protection status within 10 working days.",
        source: {
          label: "Rochdale Borough Council — find out if a tree is protected",
          url: "https://www.rochdale.gov.uk/heritage-conservation/tree-preservation-orders/2",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Rochdale by postcode, tree size and access. Example areas include:",
    sideTitle: "Check legal status before agreeing the cutting specification",
    sideCopy: "A garden tree in Wardle, mature trees in Norden and work near a conservation area in Rochdale can carry different constraints. Give the exact address and any known protection status.",
    noteLead: "Photos do not replace a protection check.",
    noteText: "Ask whether the tree surgeon expects a TPO or conservation-area application or notice to be needed, and make responsibility for paperwork clear in the quote.",
  },
  faq: [
    ["How much does tree surgery cost in Rochdale?", "Cost depends on tree size, species, access, climbing or machinery needs, waste removal and whether protected-tree paperwork is involved."],
    ["What does a Tree Preservation Order restrict?", "Rochdale Council says a TPO can prohibit cutting down, uprooting, topping, lopping, wilful damage or destruction without consent."],
    ["Are trees in Rochdale conservation areas protected?", "Yes. Rochdale Council says a tree is protected if it is in a conservation area or has a TPO."],
    ["Can the council tell me whether a tree is protected?", "Yes. The council currently asks for the address and tree location and says it aims to respond within 10 working days."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Rochdale?",
    copy: "Describe the trees, access and required work once, then compare interested Rochdale tree surgeons and their quotes.",
    buttonLabel: "Get Rochdale tree-work quotes",
  },
});

export const architectsRochdale = makeRochdaleProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or other residential project in Rochdale? Describe the property, objective and constraints once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Rochdale?",
    copy: "Enter the postcode, property type, proposed work and whether you need feasibility, measured drawings, planning, Building Regulations, technical design or project support. Mention any listed-building or conservation-area status from the start.",
  },
  localContext: {
    eyebrow: "Rochdale planning and heritage",
    title: "Conservation-area and Article 4 controls can remove freedoms that an ordinary house may have",
    intro: "Rochdale has many conservation areas, and the council explains that Article 4 directions can remove specified permitted-development rights. Planning and Building Control also remain separate approval systems.",
    items: [
      {
        title: "Article 4 directions can require planning permission for work that would normally be permitted development",
        text: "Rochdale Council says Article 4 directions can remove permitted-development rights for specified work, including examples such as replacing a door or window or altering gutters and downpipes. Conservation-area status can also mean planning permission is needed for changes.",
        source: {
          label: "Rochdale Borough Council — conservation areas",
          url: "https://www.rochdale.gov.uk/heritage-conservation/conservation-areas",
        },
      },
      {
        title: "Planning permission and Building Control answer different questions",
        text: "Rochdale Council explains that planning mainly deals with land use, appearance, environmental and neighbour effects, listed buildings and conservation areas, while Building Control deals with construction, structure, fire safety, weather resistance and energy standards.",
        source: {
          label: "Rochdale Borough Council — planning versus Building Control",
          url: "https://www.rochdale.gov.uk/planning-building-conservation/difference-planning-building-control",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Rochdale by postcode, project type and design stage. Example areas include:",
    sideTitle: "Start with the address and constraints, not just the desired floor plan",
    sideCopy: "An extension in Middleton, remodelling in Littleborough and alterations to a property in a Rochdale conservation area may need different planning and heritage strategies before technical drawings are developed.",
    noteLead: "Define the appointment before comparing fees.",
    noteText: "Ask each architect to quote the same stages: survey, concept, planning, Building Regulations or technical package, consultant coordination and construction support where required.",
  },
  faq: [
    ["How much does an architect cost in Rochdale?", "Fees depend on project size, complexity, survey work, planning risk, technical design and how many stages you appoint the architect for."],
    ["Can conservation-area status affect my project?", "Yes. Rochdale Council says changes in a conservation area may need planning permission, depending on the work and applicable controls."],
    ["What is an Article 4 direction?", "It is a direction that removes specified permitted-development rights, so work that might normally proceed without a planning application can require permission."],
    ["Is Building Control the same as planning permission?", "No. Rochdale Council describes them as separate systems dealing with different aspects of development and construction."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Rochdale?",
    copy: "Describe the property, project and design stage once, then compare interested Rochdale architects and their quotes.",
    buttonLabel: "Get Rochdale architect quotes",
  },
});
