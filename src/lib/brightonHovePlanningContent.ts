import { makeBrightonHoveProfile } from "./brightonHoveProfileBase";

export const treeSurgeonsBrightonHove = makeBrightonHoveProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, removal or an inspection of a tree in Brighton & Hove? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Brighton & Hove?",
    copy: "Enter the postcode, approximate tree size and the work you think is needed. Add photos from more than one angle and say whether the tree may be protected or inside a conservation area so suitable Brighton & Hove tree surgeons can judge the next step.",
  },
  localContext: {
    eyebrow: "Brighton & Hove protected-tree rules",
    title: "TPO and conservation-area checks need to happen before cutting starts",
    intro: "Brighton & Hove protects trees through Tree Preservation Orders and conservation-area controls. The council's own guidance says permission is needed for TPO work and six weeks' notice is normally required for qualifying trees in conservation areas.",
    items: [
      {
        title: "A Tree Preservation Order requires an application before work",
        text: "Brighton & Hove City Council guidance says work to a tree protected by a TPO requires an application. Give the tree surgeon the exact address and proposed specification so protected status and the consent route can be checked before a start date is agreed.",
        source: {
          label: "Brighton & Hove City Council — tree work application guidance",
          url: "https://www.brighton-hove.gov.uk/sites/default/files/migrated/article/inline/downloads/trees/Guidance_for_standard_application_form.pdf",
        },
      },
      {
        title: "Conservation-area tree work normally needs six weeks' notice",
        text: "The same council guidance explains that, where a tree is not already subject to a TPO, proposed work to qualifying trees in a conservation area normally needs six weeks' notice. Brighton & Hove has many designated conservation areas, so check the address before cutting begins.",
        source: {
          label: "Brighton & Hove City Council — tree work application guidance",
          url: "https://www.brighton-hove.gov.uk/sites/default/files/migrated/article/inline/downloads/trees/Guidance_for_standard_application_form.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Brighton & Hove by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the whole tree and its surroundings",
    sideCopy: "Include photos of the crown, trunk, nearby buildings, roads, sheds and access route. Say whether branches overhang neighbouring land or the highway and whether machinery can reach the tree.",
    noteLead: "Check protection before booking the work.",
    noteText: "A contractor can advise on the work, but TPO consent or conservation-area notice may need to be resolved before pruning or removal begins.",
  },
  faq: [
    ["How much does tree surgery cost in Brighton & Hove?", "The price depends on tree size, species, access, climbing or machinery requirements, waste removal and whether protected-tree procedures are involved."],
    ["How do I know if my tree has a TPO?", "Check the property and tree with Brighton & Hove City Council before pruning or removal. A tree surgeon can help describe the proposed work, but council consent is separate."],
    ["What if the tree is in a conservation area?", "Qualifying trees in conservation areas normally require six weeks' notice before work unless another exemption applies."],
    ["Can I post a small pruning job?", "Yes. Tree-surgery requests can cover inspections, pruning and reductions as well as larger removals and clearance work."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Brighton & Hove?",
    copy: "Describe the tree, access and proposed work once, then compare interested Brighton & Hove tree surgeons and their quotes.",
    buttonLabel: "Get Brighton & Hove tree-surgery quotes",
  },
});

export const architectsBrightonHove = makeBrightonHoveProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new design in Brighton & Hove? Describe the property, objectives and likely scope once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Brighton & Hove?",
    copy: "Enter the postcode, property type and what you want to change. Mention conservation-area, listed-building or HMO use if relevant so suitable Brighton & Hove architects can judge the likely planning and design work.",
  },
  localContext: {
    eyebrow: "Brighton & Hove planning and heritage context",
    title: "A dense heritage environment and citywide HMO Article 4 controls make address-specific planning checks important",
    intro: "Brighton & Hove has 34 conservation areas and around 3,400 individually listed buildings and structures. The city also has a citywide Article 4 direction removing the normal C3-to-C4 HMO permitted-development right.",
    items: [
      {
        title: "Brighton & Hove has 34 conservation areas and around 3,400 listed buildings or structures",
        text: "The council's design guidance highlights the scale of the city's heritage assets. If an extension, conversion or refurbishment affects a listed building or a property in a conservation area, material, form and detailing can need closer planning scrutiny than on an unrestricted modern property.",
        source: {
          label: "Brighton & Hove City Council — draft Extensions and Alterations SPD",
          url: "https://www.brighton-hove.gov.uk/planning/brighton-hove-city-council-draft-extensions-and-alterations-spd",
        },
      },
      {
        title: "Changing a dwellinghouse to a small HMO needs planning permission across the city",
        text: "Brighton & Hove City Council says the Article 4 direction applies citywide, so the usual permitted-development right to change a C3 dwellinghouse to a C4 small HMO is removed. If a project changes occupancy or use, flag that intention at the briefing stage rather than treating it as an ordinary internal conversion.",
        source: {
          label: "Brighton & Hove City Council — planning permission for HMOs",
          url: "https://www.brighton-hove.gov.uk/planning/planning-applications/planning-permission-houses-multiple-occupation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Brighton & Hove by project type, property and stage of work. Example areas include:",
    sideTitle: "Give the exact address and intended use",
    sideCopy: "The same extension or conversion can face very different constraints in Kemptown, Hove, Rottingdean or a non-designated area. Share the address, existing plans and any known planning history.",
    noteLead: "Planning and Building Regulations are separate.",
    noteText: "A project may need planning permission, Building Regulations approval, both or neither. Ask the architect to explain which route applies to the proposed work.",
  },
  faq: [
    ["How much does an architect cost in Brighton & Hove?", "Fees depend on project value, complexity and whether you need concept design, planning drawings, technical Building Regulations information, tender support or contract administration."],
    ["Do conservation areas affect extensions in Brighton & Hove?", "They can. The city has 34 conservation areas, and design, materials and external alterations may face additional controls depending on the property and proposal."],
    ["Does a small HMO conversion need planning permission?", "Yes. Brighton & Hove has a citywide Article 4 direction removing the normal C3-to-C4 permitted-development right."],
    ["Do listed buildings need special consent?", "Alterations that affect a listed building's special architectural or historic interest can require listed-building consent as well as any other planning approval."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Brighton & Hove?",
    copy: "Describe the property, objectives and project stage once, then compare interested Brighton & Hove architects and their proposals.",
    buttonLabel: "Get Brighton & Hove architect quotes",
  },
});
