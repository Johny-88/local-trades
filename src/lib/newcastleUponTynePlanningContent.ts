import { makeNewcastleUponTyneProfile } from "./newcastleUponTyneProfileBase";

export const treeSurgeonsNewcastleUponTyne = makeNewcastleUponTyneProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, removal or an inspection of a tree in Newcastle upon Tyne? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Newcastle upon Tyne?",
    copy: "Enter the postcode, approximate tree size and the work you think is needed. Add photos from more than one angle and say whether the tree may be protected or inside a conservation area so suitable Newcastle tree surgeons can judge the next step.",
  },
  localContext: {
    eyebrow: "Newcastle protected-tree rules",
    title: "TPOs and conservation-area trees need checking before work starts",
    intro: "Newcastle City Council protects trees through Tree Preservation Orders, conservation-area controls and planning conditions. The council maintains an online protected-tree register and says unauthorised work to a protected tree is a criminal offence.",
    items: [
      {
        title: "A TPO tree needs council permission before work",
        text: "Newcastle City Council says that if a tree is covered by a Tree Preservation Order you must apply for permission before carrying out work. The council's online register and mapping information can be used to check protected status before accepting a start date.",
        source: {
          label: "Newcastle City Council — tree preservation orders and conservation-area trees",
          url: "https://www.newcastle.gov.uk/services/planning-building-and-development/trees-wildlife-and-green-environment/tree-preservation",
        },
      },
      {
        title: "Conservation-area trees normally need six weeks' notice",
        text: "Newcastle City Council says trees with a trunk diameter of 75mm or more are protected in a conservation area and that six weeks' notice must normally be given before work to a tree that is not already covered by a TPO. Newcastle currently has 12 conservation areas, so address checks matter.",
        source: {
          label: "Newcastle City Council — conservation areas",
          url: "https://newcastle.gov.uk/services/planning-building-and-development/historic-environment-and-urban-design/conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Newcastle upon Tyne by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the whole tree and its surroundings",
    sideCopy: "Include photos of the crown, trunk, nearby buildings, roads, sheds and access route. Say whether branches overhang neighbouring land or the highway and whether machinery can reach the tree.",
    noteLead: "Check protection before booking the work.",
    noteText: "A contractor can advise on the work, but TPO consent or conservation-area notice may need to be resolved before pruning or removal begins.",
  },
  faq: [
    ["How much does tree surgery cost in Newcastle upon Tyne?", "The price depends on tree size, species, access, climbing or machinery requirements, waste removal and whether protected-tree procedures are involved."],
    ["How do I know if my Newcastle tree has a TPO?", "Newcastle City Council maintains an online protected-tree register and mapping information that can be checked by address or reference."],
    ["What if the tree is in a conservation area?", "Newcastle City Council says trees of 75mm trunk diameter or more are protected in conservation areas and normally require six weeks' notice before work if they are not already covered by a TPO."],
    ["Can I post a small pruning job?", "Yes. Tree-surgery requests can cover inspections, pruning and reductions as well as larger removals and clearance work."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Newcastle upon Tyne?",
    copy: "Describe the tree, access and proposed work once, then compare interested Newcastle tree surgeons and their quotes.",
    buttonLabel: "Get Newcastle tree-surgery quotes",
  },
});

export const architectsNewcastleUponTyne = makeNewcastleUponTyneProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new design in Newcastle upon Tyne? Describe the property, objectives and likely scope once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Newcastle upon Tyne?",
    copy: "Enter the postcode, property type and what you want to change. Mention conservation-area, listed-building or HMO status if known so suitable Newcastle architects can judge the likely planning and design work.",
  },
  localContext: {
    eyebrow: "Newcastle planning and heritage context",
    title: "Conservation areas and HMO Article 4 directions can materially change the design route",
    intro: "Newcastle has 12 conservation areas and several Article 4 directions that remove normal permitted-development rights for changes from family houses to small HMOs in specified neighbourhoods. Address-specific planning checks therefore matter early in the design process.",
    items: [
      {
        title: "Newcastle has 12 conservation areas",
        text: "Newcastle City Council lists 12 conservation areas including Brandling Village, Central, Gosforth, Jesmond Dene, South Jesmond and Summerhill. Each has its own character and can involve closer control of external alterations, materials and heritage features.",
        source: {
          label: "Newcastle City Council — conservation areas",
          url: "https://newcastle.gov.uk/services/planning-building-and-development/historic-environment-and-urban-design/conservation-areas",
        },
      },
      {
        title: "Some Newcastle neighbourhoods have HMO Article 4 controls",
        text: "Newcastle City Council says Article 4 directions remove the normal permitted-development right to change a Class C3 dwelling to a Class C4 HMO in specified areas, including parts of Heaton, Jesmond, Sandyford, South Gosforth and Spital Tongues. If the project changes use or occupancy, check the exact address rather than assuming national permitted-development rights apply.",
        source: {
          label: "Newcastle City Council — houses in multiple occupation planning guidance",
          url: "https://www.newcastle.gov.uk/services/planning-building-and-development/planning-guidance/houses-multiple-occupation-hmos",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Newcastle upon Tyne by project type, property and stage of work. Example areas include:",
    sideTitle: "Give the exact address and intended use",
    sideCopy: "The same extension or conversion can face different constraints in Jesmond, Gosforth, Heaton or a property within another conservation or Article 4 area. Share the address, existing plans and any known planning history.",
    noteLead: "Planning and Building Regulations are separate.",
    noteText: "Newcastle City Council explicitly treats planning permission and Building Regulations as separate processes, so a project may need one, both or neither depending on the work.",
  },
  faq: [
    ["How much does an architect cost in Newcastle upon Tyne?", "Fees depend on project value, complexity and whether you need concept design, planning drawings, technical Building Regulations information, tender support or contract administration."],
    ["Do conservation areas affect extensions in Newcastle?", "They can. Newcastle has 12 conservation areas and external alterations may face tighter controls depending on the property and proposal."],
    ["Does an HMO conversion always need planning permission in Newcastle?", "Not everywhere. Newcastle has Article 4 directions in specified neighbourhoods where the normal C3-to-C4 permitted-development right is removed, while larger HMOs generally require planning permission."],
    ["Do listed buildings need special consent?", "Alterations that affect a listed building's special character can require listed-building consent as well as any other planning approval."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Newcastle upon Tyne?",
    copy: "Describe the property, objectives and project stage once, then compare interested Newcastle architects and their proposals.",
    buttonLabel: "Get Newcastle architect quotes",
  },
});
