import { makeWestBromwichProfile } from "./westBromwichProfileBase";

export const treeSurgeonsWestBromwich = makeWestBromwichProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, removal or assessment of a tree in West Bromwich? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in West Bromwich?",
    copy: "Enter the postcode, tree species if known, approximate height, required work and access. Mention whether you know of a Tree Preservation Order or conservation-area status so suitable West Bromwich tree surgeons can assess permissions before quoting.",
  },
  localContext: {
    eyebrow: "West Bromwich protected trees",
    title: "TPOs and conservation-area controls should be checked before cutting",
    intro: "Sandwell protects individual trees through Tree Preservation Orders and also gives trees in conservation areas statutory protection.",
    items: [
      {
        title: "Sandwell publishes TPO records and requires permission for protected-tree work",
        text: "Sandwell Council says TPOs control work to important trees and provides a public-access route to check whether a tree is protected before pruning or removal is arranged.",
        source: {
          label: "Sandwell Council — Tree Preservation Orders",
          url: "https://www.sandwell.gov.uk/planning/planning-enforcement-1/7",
        },
      },
      {
        title: "Trees in conservation areas require six weeks' notice",
        text: "Sandwell Council says six weeks' notice must be given before work is carried out to trees in a conservation area. West Bromwich High Street is one of Sandwell's nine conservation areas.",
        source: {
          label: "Sandwell Council — Historic Areas",
          url: "https://www.sandwell.gov.uk/planning/historic-environment/3",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover West Bromwich by postcode, tree size and access. Example areas include:",
    sideTitle: "Give the tree's position as well as its size",
    sideCopy: "A rear-garden tree in Newton, roadside work in Great Barr and a tree near West Bromwich High Street can involve different access and planning checks. Photos from several angles help before a site visit.",
    noteLead: "Do not assume a tree is unprotected because it is on private land.",
    noteText: "Check TPO and conservation-area status before agreeing felling or major pruning, and ask the contractor who will handle any required application or notice.",
  },
  faq: [
    ["How much does tree work cost in West Bromwich?", "Height, species, condition, access, climbing or lifting equipment, waste removal and protection status all affect the quote."],
    ["How do I know if a West Bromwich tree has a TPO?", "Sandwell Council provides TPO information through its planning/public-access system."],
    ["Do conservation-area trees need notice in Sandwell?", "Yes. The council says six weeks' notice must be given before work to trees in a conservation area."],
    ["Is West Bromwich High Street a conservation area?", "Yes. It is one of Sandwell's nine conservation areas."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in West Bromwich?",
    copy: "Describe the tree, access and required work once, then compare interested West Bromwich tree surgeons and their quotes.",
    buttonLabel: "Get West Bromwich tree quotes",
  },
});

export const architectsWestBromwich = makeWestBromwichProfile("architects", {
  heroCopy: "Planning an extension, alteration, conversion or new design in West Bromwich? Describe the property and project once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in West Bromwich?",
    copy: "Enter the postcode, property type, proposed work, approximate budget and whether planning, Building Regulations drawings or both are needed. Mention any known conservation, listed-building or Article 4 status.",
  },
  localContext: {
    eyebrow: "West Bromwich planning constraints",
    title: "The High Street Conservation Area has additional Article 4 controls",
    intro: "West Bromwich has a specifically designated historic core where ordinary permitted-development assumptions can be wrong, so the exact address matters at concept stage.",
    items: [
      {
        title: "West Bromwich High Street is one of Sandwell's nine conservation areas",
        text: "Sandwell Council lists High Street, West Bromwich among the borough's nine conservation areas and explains that planning permission may be required for alterations or demolition within conservation areas.",
        source: {
          label: "Sandwell Council — Historic Areas",
          url: "https://www.sandwell.gov.uk/planning/historic-environment/3",
        },
      },
      {
        title: "An Article 4 direction applies to some properties in the West Bromwich High Street Conservation Area",
        text: "Sandwell Council says the direction removes specified permitted-development rights, meaning external changes that might normally be automatic can require planning permission at affected properties.",
        source: {
          label: "Sandwell Council — planning permission and Article 4",
          url: "https://www.sandwell.gov.uk/planning/planning-applications-process-1",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover West Bromwich by postcode and project type. Example areas include:",
    sideTitle: "Start with the exact planning context",
    sideCopy: "A rear extension in Hateley Heath, internal reconfiguration in Yew Tree and an external alteration on West Bromwich High Street can face very different planning constraints. Give the full address early.",
    noteLead: "Planning permission and Building Regulations are separate approvals.",
    noteText: "Ask whether the architect's fee includes planning drawings, Building Regulations information, structural coordination and any heritage or Article 4 work that the property needs.",
  },
  faq: [
    ["How much does an architect cost in West Bromwich?", "Fees depend on project size, survey work, design stages, planning complexity, technical drawings and whether contract administration is included."],
    ["Is West Bromwich High Street a conservation area?", "Yes. Sandwell Council lists it as one of the borough's nine conservation areas."],
    ["Is there an Article 4 direction in West Bromwich?", "Yes. Sandwell Council says some residential properties within the High Street Conservation Area are covered by an Article 4 direction."],
    ["Are planning permission and Building Regulations the same thing?", "No. Sandwell Council explicitly treats Building Regulations as a separate requirement from planning permission."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in West Bromwich?",
    copy: "Describe the property, project and approval stage once, then compare interested West Bromwich architects and their quotes.",
    buttonLabel: "Get West Bromwich architect quotes",
  },
});
