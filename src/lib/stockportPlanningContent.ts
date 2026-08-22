import { makeStockportProfile } from "./stockportProfileBase";

export const treeSurgeonsStockport = makeStockportProfile("tree-surgeons", {
  heroCopy: "Need a tree surgeon in Stockport for pruning, crown work, removal or an unsafe tree? Describe the tree, access and reason for the work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Stockport?",
    copy: "Enter the postcode, tree species if known, approximate height and required work. Mention nearby buildings, roads, overhead lines, restricted access and whether you know of a Tree Preservation Order or conservation-area status.",
  },
  localContext: {
    eyebrow: "Stockport protected trees",
    title: "Check TPO and conservation-area status before pruning or felling",
    intro: "Stockport has extensive local heritage and tree controls. The council provides an interactive map for Tree Preservation Orders and conservation areas, and protected trees can need permission or prior notification before work starts.",
    items: [
      {
        title: "TPO trees cannot simply be cut, topped, lopped or uprooted",
        text: "Stockport says it is an offence to cut down, top, lop, uproot, wilfully damage or destroy a tree protected by a Tree Preservation Order without the planning authority's permission. Check the council map before accepting a quote that assumes immediate work.",
        source: {
          label: "Stockport Council — works to trees covered by a Tree Preservation Order",
          url: "https://www.stockport.gov.uk/tree-preservation/works-to-tpo-trees",
        },
      },
      {
        title: "Trees in conservation areas have separate protection",
        text: "Stockport says trees over 75mm diameter measured at 1 metre high within a conservation area are protected and proposed work must be notified to the Arboriculture Team. The council currently identifies 37 conservation areas across the borough.",
        source: {
          label: "Stockport Council — works to trees in a conservation area",
          url: "https://www.stockport.gov.uk/tree-preservation/works-to-trees-in-a-conservation-area",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Stockport by postcode, tree size and access. Example areas include:",
    sideTitle: "Protection status can change the job before a saw is used",
    sideCopy: "Mature trees around Bramhall, Cheadle, Heaton Moor and Marple can sit within conservation areas or be individually protected. Give the exact address and any planning references so the contractor can check restrictions.",
    noteLead: "Do not treat a verbal quote as permission to start protected-tree work.",
    noteText: "Ask who will check the TPO or conservation-area position, who will make any required application or notification, and whether stump removal and waste clearance are included.",
  },
  faq: [
    ["How much does a tree surgeon cost in Stockport?", "Cost depends on tree size, species, access, rigging, waste removal, stump work and protection status. Compare quotes against the same specification."],
    ["How do I check if a tree has a TPO in Stockport?", "Stockport Council provides an interactive TPO map where you can search by address or postcode."],
    ["Can I prune a tree in a Stockport conservation area?", "Not without checking first. Stockport says qualifying trees in conservation areas are protected and proposed work must be notified to its Arboriculture Team."],
    ["Does a TPO only stop complete tree removal?", "No. Stockport lists cutting down, topping, lopping, uprooting, wilful damage and destruction among the controlled activities."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Stockport?",
    copy: "Describe the tree, access and protection status once, then compare interested Stockport tree surgeons and their quotes.",
    buttonLabel: "Get Stockport tree quotes",
  },
});

export const architectsStockport = makeStockportProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or heritage project in Stockport? Describe the property and intended changes once, then compare architects and architectural designers who cover your area.",
  answer: {
    title: "Looking for an architect near you in Stockport?",
    copy: "Enter the postcode, property type and project stage. Mention conservation areas, listed status, Article 4 controls, structural changes and whether you need concept design, planning drawings, Building Regulations information or a fuller service.",
  },
  localContext: {
    eyebrow: "Stockport heritage constraints",
    title: "Conservation areas, Article 4 Directions and listed buildings can change the design route",
    intro: "Stockport has a substantial stock of protected heritage. The council currently identifies 37 conservation areas, while Article 4 Directions remove selected permitted-development rights in many of them. Listed buildings have an additional consent regime covering internal as well as external alterations.",
    items: [
      {
        title: "Article 4 controls can cover windows, doors, roofs, hardstanding and boundaries",
        text: "Stockport says Article 4 Directions can require planning permission for alterations that would otherwise be permitted development. In affected areas this can include windows, doors, roofs, chimneys, porches, gates, walls, fences and hardstanding.",
        source: {
          label: "Stockport Council — Article 4 Directions",
          url: "https://www.stockport.gov.uk/article-four-directions",
        },
      },
      {
        title: "Listed-building consent can apply to internal and external alterations",
        text: "Stockport states that demolition and internal or external alterations to a listed building are subject to listed-building consent. The council currently records 399 entries on the statutory list, so establish heritage status before design work assumes normal householder freedoms.",
        source: {
          label: "Stockport Council — heritage assets: listed buildings",
          url: "https://www.stockport.gov.uk/heritage-assets/listed-buildings",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Stockport by postcode, project type and service level. Example areas include:",
    sideTitle: "Give the designer the planning constraints at the start",
    sideCopy: "A rear extension in Hazel Grove, remodelling in Cheadle Hulme and work to a period property in Heaton Moor can face different design constraints. Share the exact address so heritage layers and planning history can be checked early.",
    noteLead: "Planning permission and Building Regulations are different approvals.",
    noteText: "Agree whether the quote covers measured survey, concept options, planning submission, heritage input, technical drawings, structural coordination and Building Regulations support.",
  },
  faq: [
    ["How much does an architect cost in Stockport?", "Fees vary with project size, complexity and service level. Compare quotations that clearly state which stages, drawings and submissions are included."],
    ["How many conservation areas are there in Stockport?", "Stockport Council currently identifies 37 conservation areas across the borough."],
    ["What does an Article 4 Direction change?", "It removes specified permitted-development rights, so alterations that might normally avoid a planning application can require permission in the affected area."],
    ["Do internal changes to a listed building need consent?", "They can. Stockport says internal as well as external alterations to a listed building are subject to listed-building consent."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Stockport?",
    copy: "Describe the property, project and required design service once, then compare interested Stockport architects and designers.",
    buttonLabel: "Get Stockport design quotes",
  },
});
