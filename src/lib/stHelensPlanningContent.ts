import { makeStHelensProfile } from "./stHelensProfileBase";

export const treeSurgeonsStHelens = makeStHelensProfile("tree-surgeons", {
  heroCopy: "Need a tree surgeon in St Helens for pruning, crown work, removal or a tree-safety concern? Describe the tree, access and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in St Helens?",
    copy: "Enter the postcode, approximate tree size, species if known and the work you think is needed. Add photos and mention buildings, roads, overhead lines, restricted access or protected-tree status so suitable St Helens tree surgeons can assess the job properly.",
  },
  localContext: {
    eyebrow: "St Helens protected-tree checks",
    title: "Check both Tree Preservation Orders and conservation-area status before work starts",
    intro: "Tree work can need planning checks even where the tree stands on private land. St Helens Council provides map data for Tree Preservation Orders and conservation areas, while conservation-area trees have their own notification rules.",
    items: [
      {
        title: "TPO and conservation-area information is available through council mapping",
        text: "St Helens Council's land-charges data page directs residents to its interactive mapping system for Tree Preservation Orders and conservation areas. Check the exact tree and address before agreeing pruning or removal work rather than relying on appearance alone.",
        source: {
          label: "St Helens Borough Council — local land-charge data sets",
          url: "https://www.sthelens.gov.uk/article/4679/Data-sets",
        },
      },
      {
        title: "Conservation-area tree work normally needs six weeks' written notice",
        text: "The council's conservation guidance says it is an offence to cut down, top, lop or uproot a protected conservation-area tree without giving at least six weeks' prior written notice, allowing the council to consider whether a Tree Preservation Order is needed.",
        source: {
          label: "St Helens Borough Council — conservation areas guide",
          url: "https://www.sthelens.gov.uk/media/3070/conservation-areas-a-guide-for-owners-and-occupiers/pdf/conservation-areas-a-guide-for-owners-and-occupiers.pdf?m=1647519987147",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover St Helens by postcode, tree size and access. Example areas include:",
    sideTitle: "Give enough information to plan equipment and permissions",
    sideCopy: "A garden conifer in Thatto Heath, a mature tree in Rainford and roadside crown work near Eccleston can involve very different access and constraints. Photos showing the whole tree and its surroundings are useful.",
    noteLead: "Do not assume a privately owned tree is automatically free to cut.",
    noteText: "Check TPO and conservation-area status first, then make sure the quote states who will handle any application or notification, waste removal and stump work.",
  },
  faq: [
    ["How much does a tree surgeon cost in St Helens?", "Cost depends on tree size, species, access, risk, equipment, waste removal and whether stump grinding or traffic management is needed."],
    ["How do I check for a Tree Preservation Order in St Helens?", "St Helens Council directs residents to its interactive mapping system for TPO points and TPO areas."],
    ["Can I prune a tree in a conservation area without checking?", "Do not assume so. Council guidance says six weeks' prior written notice is normally required before cutting down, topping, lopping or uprooting a conservation-area tree."],
    ["Can a tree surgeon handle the permission process?", "Many can help with TPO applications or conservation-area notices, but agree responsibility clearly before work starts."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in St Helens?",
    copy: "Describe the tree, access and required work once, then compare interested St Helens tree surgeons and their quotes.",
    buttonLabel: "Get St Helens tree-surgery quotes",
  },
});

export const architectsStHelens = makeStHelensProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling project or new design in St Helens? Describe the property, goals and planning constraints once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in St Helens?",
    copy: "Enter the postcode, property type and intended work. Include existing drawings or photos, whether the site is in a conservation area and any previous planning history so suitable St Helens architects can assess the likely design and approval route.",
  },
  localContext: {
    eyebrow: "St Helens heritage and planning",
    title: "Conservation areas and Article 4 directions can remove normal permitted-development freedoms",
    intro: "St Helens has designated conservation areas and several Article 4 directions, including controls affecting Rainford, Rainhill and Vulcan Village. That can make the exact address important before an architect assumes a householder alteration is permitted development.",
    items: [
      {
        title: "The council maps conservation areas and identifies Article 4 directions",
        text: "St Helens Council's current data-set page provides conservation-area mapping and links to older Article 4 directions for locations including Rainhill, Rainford, Vulcan Village, High Street Newton-le-Willows and Willow Park, with newer directions available through Planning Public Access.",
        source: {
          label: "St Helens Borough Council — local land-charge data sets",
          url: "https://www.sthelens.gov.uk/article/4679/Data-sets",
        },
      },
      {
        title: "Planning permission and Building Regulations are separate checks",
        text: "The council explains that planning controls land use, appearance, access and environmental effects, while Building Regulations set safety and construction standards. A project can need both, so an architect's fee should state which drawings, applications and approvals are included.",
        source: {
          label: "St Helens Borough Council — guide to planning and building control",
          url: "https://www.sthelens.gov.uk/article/3481/Your-guide-to-planning-building-Control",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover St Helens by postcode, project type and planning complexity. Example areas include:",
    sideTitle: "Start with the site's actual planning constraints",
    sideCopy: "A rear extension in Haydock, remodelling near central St Helens and external alterations in Rainford or Rainhill can follow different planning routes. Give the architect the full address so conservation and Article 4 controls can be checked early.",
    noteLead: "Do not assume permitted development until the address has been checked.",
    noteText: "Ask the architect to identify planning, Building Regulations, structural-engineering and any heritage inputs separately so the quote is clear about what is and is not included.",
  },
  faq: [
    ["How much does an architect cost in St Helens?", "Fees depend on project size, complexity, survey work, planning risk, structural input and how far the architect's service continues through construction."],
    ["Does St Helens have conservation areas?", "Yes. The council maps designated conservation areas across the borough and publishes associated heritage information."],
    ["What does an Article 4 direction mean?", "It removes specified permitted-development rights from affected properties, so work that might be permitted elsewhere can require planning permission."],
    ["Does planning permission cover Building Regulations?", "No. St Helens Council explicitly treats them as separate approval systems and a project can require both."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in St Helens?",
    copy: "Describe the property and project once, then compare interested St Helens architects and their quotes.",
    buttonLabel: "Get St Helens architect quotes",
  },
});
