import { makePortsmouthProfile } from "./portsmouthProfileBase";

export const treeSurgeonsPortsmouth = makePortsmouthProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, removal or an inspection of a tree in Portsmouth? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Portsmouth?",
    copy: "Enter the postcode, approximate tree size and the work you think is needed. Add photos from more than one angle and say whether the tree may be protected or inside a conservation area so suitable Portsmouth tree surgeons can judge the next step.",
  },
  localContext: {
    eyebrow: "Portsmouth protected-tree rules",
    title: "TPO and conservation-area checks need to happen before cutting starts",
    intro: "Portsmouth City Council requires permission before work to a tree protected by a Tree Preservation Order or located in a conservation area. The city also has a substantial network of designated conservation areas, so address-level checking matters.",
    items: [
      {
        title: "Protected trees need council permission before work",
        text: "Portsmouth City Council says permission is needed before undertaking work on a tree that is subject to a Tree Preservation Order or is in a conservation area. Applications need a clear work specification, tree location and supporting evidence where health, safety or property damage is being claimed.",
        source: {
          label: "Portsmouth City Council — tree works and Tree Preservation Orders",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/tree-works-and-tree-preservation-orders/",
        },
      },
      {
        title: "Portsmouth has conservation areas across Southsea, Old Portsmouth, Eastney, Hilsea and other parts of the city",
        text: "The council lists designated areas including Old Portsmouth, The Seafront, Eastney Barracks, East Southsea, Milton Locks, Gunwharf, Hilsea Lines and Craneswater & Eastern Parade. Tell the tree surgeon if the property is in or close to a conservation area so the correct consent route can be checked.",
        source: {
          label: "Portsmouth City Council — conservation areas in Portsmouth",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/planning-policy/conservation-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Portsmouth by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the whole tree and the surroundings",
    sideCopy: "Include photos of the crown, trunk, nearby buildings, roads, sheds and access route. Say whether branches overhang neighbouring land or the highway and whether machinery can reach the tree.",
    noteLead: "Check protection before accepting a start date.",
    noteText: "A contractor can advise on the work, but TPO or conservation-area permission may need to be resolved before cutting begins.",
  },
  faq: [
    ["How much does tree surgery cost in Portsmouth?", "The price depends on tree size, species, access, climbing or machinery requirements, waste removal and whether protected-tree procedures are involved."],
    ["How do I know if my Portsmouth tree has a TPO?", "Check with Portsmouth City Council before pruning or removal. The council's tree-work guidance covers TPO and conservation-area applications."],
    ["What if the tree is in a conservation area?", "Portsmouth City Council says permission is needed before undertaking work on trees in conservation areas, so check the address before work starts."],
    ["Can I post a small pruning job?", "Yes. Tree-surgery requests can cover inspections, pruning and reductions as well as larger removals and clearance work."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Portsmouth?",
    copy: "Describe the tree, access and proposed work once, then compare interested Portsmouth tree surgeons and their quotes.",
    buttonLabel: "Get Portsmouth tree-surgery quotes",
  },
});

export const architectsPortsmouth = makePortsmouthProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new design in Portsmouth? Describe the property, objectives and likely scope once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Portsmouth?",
    copy: "Enter the postcode, property type and what you want to change. Mention conservation-area, listed-building or HMO use if relevant so suitable Portsmouth architects can judge the likely planning and design work.",
  },
  localContext: {
    eyebrow: "Portsmouth planning and heritage context",
    title: "Conservation areas and Portsmouth's HMO planning rules can materially change the design route",
    intro: "Portsmouth has many designated conservation areas and a tightly regulated HMO market. Planning permission and Building Regulations are also separate systems, so the exact property and intended use should be checked early.",
    items: [
      {
        title: "New HMOs need both planning permission and a licence",
        text: "Portsmouth City Council says a new HMO needs planning permission from the Planning Service and a licence from the Housing Service. If a design involves shared accommodation or a change of use, flag that intention at the briefing stage rather than treating it as an ordinary internal conversion.",
        source: {
          label: "Portsmouth City Council — HMO planning permission and licensing requirements",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/planning-policy/supplementary-planning-documents/planning-houses-in-multiple-occupation/hmo-planning-permission-and-licensing-requirements/",
        },
      },
      {
        title: "Conservation areas can reduce normal permitted-development freedom",
        text: "Portsmouth City Council says conservation-area designation affects demolition, extensions, trees and some external changes, with Article 4 Directions adding extra controls in some locations. An architect should therefore check the exact address before assuming a proposal is permitted development.",
        source: {
          label: "Portsmouth City Council — about conservation areas",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/conservation-and-heritage/conservation-areas/about-conservation-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Portsmouth by project type, property and stage of work. Example areas include:",
    sideTitle: "Give the exact address and intended use",
    sideCopy: "The same extension or conversion can face different constraints in Old Portsmouth, Southsea, Eastney or a non-designated area. Share the address, existing plans and any known planning history.",
    noteLead: "Planning and Building Regulations are separate.",
    noteText: "A project may need planning permission, Building Regulations approval, both or neither. Ask the architect to explain which route applies to the proposed work.",
  },
  faq: [
    ["How much does an architect cost in Portsmouth?", "Fees depend on project value, complexity and whether you need concept design, planning drawings, technical Building Regulations information, tender support or contract administration."],
    ["Do conservation areas affect extensions in Portsmouth?", "They can. Conservation designation reduces some permitted-development freedoms and Article 4 Directions can add further controls in specific areas."],
    ["Does a new HMO need planning permission in Portsmouth?", "Yes. Portsmouth City Council says a new HMO needs planning permission as well as the relevant HMO licence."],
    ["Do listed buildings need special consent?", "Alterations that affect a listed building's special character can require listed-building consent as well as any other planning approval."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Portsmouth?",
    copy: "Describe the property, objectives and project stage once, then compare interested Portsmouth architects and their proposals.",
    buttonLabel: "Get Portsmouth architect quotes",
  },
});
