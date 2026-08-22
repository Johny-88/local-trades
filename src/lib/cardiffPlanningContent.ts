import { makeCardiffProfile } from "./cardiffProfileBase";

export const treeSurgeonsCardiff = makeCardiffProfile("tree-surgeons", {
  heroCopy: "Need pruning, crown reduction, tree removal or advice in Cardiff? Describe the tree, location and work required once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Cardiff?",
    copy: "Enter the postcode and describe the species if known, approximate height, access and requested work. Add photos of the whole tree, stem and surrounding buildings so suitable Cardiff tree surgeons can judge access and whether planning checks are needed.",
  },
  localContext: {
    eyebrow: "Cardiff protected-tree context",
    title: "Trees in conservation areas and trees covered by TPOs need planning checks before work starts",
    intro: "Cardiff protects trees through Tree Preservation Orders and conservation-area controls. That means even routine pruning can need permission or notification depending on the tree's status and location.",
    items: [
      {
        title: "TPO trees cannot be cut, pruned or damaged without permission",
        text: "Cardiff Council states that it is illegal to fell, prune, destroy or damage a tree covered by a Tree Preservation Order without council permission. Check the council mapping and obtain the appropriate approval before the contractor starts work.",
        source: {
          label: "Cardiff Council — tree protection",
          url: "https://cardiff.gov.uk/treeprotection",
        },
      },
      {
        title: "Conservation-area trees are protected too",
        text: "Cardiff Council also requires planning involvement for works to trees in conservation areas. The city has 27 conservation areas, so a homeowner should not assume that a tree is unrestricted merely because it has no obvious TPO tag or sign.",
        source: {
          label: "Cardiff Council — conservation of the built environment",
          url: "https://cardiff.gov.uk/conservation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Cardiff by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the tree and the space around it",
    sideCopy: "A mature garden tree in Llandaff, a tight-access tree in Roath and work near a street in Pontcanna can require very different rigging, parking and protection checks. Wide photos are more useful than close-ups alone.",
    noteLead: "Check protection before agreeing a start date.",
    noteText: "Ask the tree surgeon whether the tree is covered by a TPO or conservation-area control and who will handle any application or notification needed before work begins.",
  },
  faq: [
    ["How much does a tree surgeon cost in Cardiff?", "Price depends on tree size, species, access, rigging, waste removal, stump work and whether protected-tree procedures are needed."],
    ["How do I know if a Cardiff tree has a TPO?", "Cardiff Council provides mapping and planning information for Tree Preservation Orders. Check before work starts."],
    ["Are trees in Cardiff conservation areas protected?", "Yes. Cardiff Council says permission or planning involvement is required for works to trees in conservation areas."],
    ["Can I post a small pruning job?", "Yes. Small pruning and hedge-adjacent tree work can be posted alongside major reductions, removals and stump work."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Cardiff?",
    copy: "Describe the tree, access and proposed work once, then compare interested Cardiff tree surgeons and their quotes.",
    buttonLabel: "Get Cardiff tree-surgery quotes",
  },
});

export const architectsCardiff = makeCardiffProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or new design in Cardiff? Describe the property and project once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Cardiff?",
    copy: "Enter the postcode, property type and project scope. Mention conservation status, listed-building concerns, HMO use, structural changes and whether you need concept design, planning drawings or technical Building Regulations work.",
  },
  localContext: {
    eyebrow: "Cardiff planning and heritage context",
    title: "Cardiff combines extensive heritage protection with citywide HMO planning controls",
    intro: "Cardiff has 27 conservation areas, around 1,000 listed buildings and many Article 4 directions. Separately, new HMOs from three unrelated occupiers require planning permission, making early use-class and heritage checks important before a design is fixed.",
    items: [
      {
        title: "Heritage controls can affect small as well as major alterations",
        text: "Cardiff Council says the city has 27 conservation areas and around 1,000 listed buildings, while many conservation areas also have Article 4 directions removing permitted development rights for minor alterations such as windows. Listed Building Consent is needed where work affects the character of a listed building.",
        source: {
          label: "Cardiff Council — conservation of the built environment",
          url: "https://cardiff.gov.uk/conservation",
        },
      },
      {
        title: "New HMOs require planning permission from three unrelated occupiers",
        text: "Cardiff Council says C4 HMOs for three to six unrelated people and larger HMOs require planning permission. It also assesses local HMO concentration, so a conversion concept should establish the intended occupancy and planning use before internal layouts are developed in detail.",
        source: {
          label: "Cardiff Council — houses in multiple occupation planning",
          url: "https://www.cardiff.gov.uk/HMOlicence",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Cardiff by postcode, project type and stage. Example areas include:",
    sideTitle: "Start with the property's constraints, not the sketch",
    sideCopy: "A protected house in Llandaff, a terrace in Canton and an HMO proposal in Cathays can face very different planning issues. Give the architect the address and intended use before asking for a design solution.",
    noteLead: "Planning and Building Regulations are separate.",
    noteText: "Ask whether the architect's fee includes planning strategy, heritage work, Building Regulations drawings, structural coordination and any specialist reports your project may need.",
  },
  faq: [
    ["How much does an architect cost in Cardiff?", "Fees depend on project size, complexity, heritage constraints and how much of the design, planning and technical process you want the architect to handle."],
    ["How many conservation areas are there in Cardiff?", "Cardiff Council currently lists 27 conservation areas."],
    ["Does a listed building need special consent?", "Yes. Listed Building Consent can be required where proposed work affects the character of a statutory listed building."],
    ["Do new HMOs need planning permission in Cardiff?", "Yes. Cardiff Council says planning permission is required for new HMOs from three unrelated occupiers."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Cardiff?",
    copy: "Describe the property, constraints and project once, then compare interested Cardiff architects and their quotes.",
    buttonLabel: "Get Cardiff architect quotes",
  },
});
