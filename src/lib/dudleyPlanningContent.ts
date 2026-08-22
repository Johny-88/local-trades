import { makeDudleyProfile } from "./dudleyProfileBase";

export const treeSurgeonsDudley = makeDudleyProfile("tree-surgeons", {
  heroCopy: "Need a tree surgeon in Dudley for pruning, crown work, removal or a tree-safety concern? Describe the tree, access and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Dudley?",
    copy: "Enter the postcode, approximate tree size, species if known and the work you think is needed. Add photos and mention buildings, roads, overhead lines, restricted access or protected-tree status so suitable Dudley tree surgeons can assess the job properly.",
  },
  localContext: {
    eyebrow: "Dudley protected-tree checks",
    title: "Check Tree Preservation Orders and conservation-area protection before pruning or felling",
    intro: "Dudley Council protects important trees through Tree Preservation Orders, while trees inside conservation areas also receive legal protection. The permission route should be checked before a contractor commits to the work.",
    items: [
      {
        title: "TPO work normally needs Dudley Council permission",
        text: "Dudley says a Tree Preservation Order generally makes it an offence to cut down, lop, top, uproot, wilfully damage or destroy a protected tree without first obtaining permission from the local planning authority. The council provides an online map for checking TPOs.",
        source: {
          label: "Dudley Council — Tree Preservation Orders",
          url: "https://www.dudley.gov.uk/residents/planning/planning-services/advice-and-guidance/trees-high-hedges/tree-preservation-orders/",
        },
      },
      {
        title: "Conservation-area tree work normally needs six weeks' notice",
        text: "Dudley Council says anyone proposing work to a tree in a conservation area must give the local planning authority six weeks' prior notice, unless a specific exemption applies. If the tree already has a TPO, formal consent is required instead.",
        source: {
          label: "Dudley Council — trees in conservation areas",
          url: "https://www.dudley.gov.uk/residents/planning/planning-services/advice-and-guidance/trees-high-hedges/trees-in-conservation-areas/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Dudley by postcode, tree size and access. Example areas include:",
    sideTitle: "Give enough information to plan equipment and permissions",
    sideCopy: "A garden conifer in Lower Gornal, a mature tree in Sedgley and roadside crown work in Netherton can involve very different access and risk. Photos showing the whole tree and its surroundings are useful.",
    noteLead: "Do not assume a private tree is automatically free to cut.",
    noteText: "Check TPO and conservation-area status first, then make sure the quote states who will handle any application or notice, waste removal and stump work.",
  },
  faq: [
    ["How much does a tree surgeon cost in Dudley?", "Cost depends on tree size, species, access, risk, equipment, waste removal and whether stump grinding or traffic management is needed."],
    ["How do I know if a tree has a TPO in Dudley?", "Dudley Council provides an online map for checking Tree Preservation Orders and also keeps copies of existing orders."],
    ["Can I prune a tree in a conservation area without checking?", "Do not assume so. Dudley Council says six weeks' prior notice is normally required for tree work in a conservation area."],
    ["Can a tree surgeon handle the permission process?", "Many can help prepare or submit tree-work applications and notices, but agree responsibility clearly before work starts."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Dudley?",
    copy: "Describe the tree, access and required work once, then compare interested Dudley tree surgeons and their quotes.",
    buttonLabel: "Get Dudley tree-surgery quotes",
  },
});

export const architectsDudley = makeDudleyProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling project or new design in Dudley? Describe the property, goals and planning constraints once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Dudley?",
    copy: "Enter the postcode, property type and intended work. Include existing drawings or photos, whether the site is in a conservation area and any previous planning history so suitable Dudley architects can assess the likely design and approval route.",
  },
  localContext: {
    eyebrow: "Dudley heritage and planning",
    title: "The borough has 22 conservation areas and some locations have tighter Article 4 controls",
    intro: "Dudley's historic areas range from town centres to canals and residential areas. If a project changes the exterior of a property, the exact address can determine whether ordinary permitted-development assumptions are safe to rely on.",
    items: [
      {
        title: "Dudley Council lists 22 conservation areas",
        text: "The council's conservation-area register includes Dudley Town Centre, Castle Hill, All Saints Sedgley, Brierley Hill High Street and several canal and village areas. Conservation status changes how development is assessed and can lower the threshold for planning control.",
        source: {
          label: "Dudley Council — conservation areas",
          url: "https://www.dudley.gov.uk/residents/planning/historic-environment/conservation-areas/",
        },
      },
      {
        title: "Article 4 directions add controls in specific conservation areas",
        text: "Dudley says Mushroom Green, Love Lane and The Leasowes have special Article 4 controls where even minor alterations and extensions can trigger a need for planning permission. The correct route therefore depends on the exact property, not simply the wider borough.",
        source: {
          label: "Dudley Council — conservation-area planning controls",
          url: "https://www.dudley.gov.uk/residents/planning/historic-environment/conservation-areas/conservation-area-planning-controls/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Dudley by postcode, project type and planning complexity. Example areas include:",
    sideTitle: "Start with the site's actual planning constraints",
    sideCopy: "An extension in Coseley, remodelling near Dudley town centre and external alterations around Sedgley can follow different planning routes. Give the architect the full address so heritage and planning constraints can be checked early.",
    noteLead: "Planning permission and Building Regulations are separate.",
    noteText: "A project may need one, both or neither depending on the work. Ask the architect to state which approvals, drawings and consultant inputs are included in the fee.",
  },
  faq: [
    ["How much does an architect cost in Dudley?", "Fees depend on project size, complexity, survey work, planning risk, structural input and how far the architect's service continues through construction."],
    ["Does Dudley have conservation areas?", "Yes. Dudley Council lists 22 conservation areas across the borough."],
    ["What does an Article 4 Direction mean?", "It removes specified permitted-development rights, so some work that might normally proceed without a planning application can require permission in the affected area."],
    ["Does planning permission cover Building Regulations?", "No. Dudley Council states that planning permission and Building Regulations approval are separate requirements."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Dudley?",
    copy: "Describe the property and project once, then compare interested Dudley architects and their quotes.",
    buttonLabel: "Get Dudley architect quotes",
  },
});
