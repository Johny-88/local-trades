import { makeRomfordProfile } from "./romfordProfileBase";

export const treeSurgeonsRomford = makeRomfordProfile("tree-surgeons", {
  heroCopy: "Need a tree surgeon in Romford for pruning, crown work, removal or a tree-safety concern? Describe the tree, access and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Romford?",
    copy: "Enter the postcode, approximate tree size, species if known and the work you think is needed. Add photos and mention buildings, roads, overhead lines, restricted access or protected-tree status so suitable Romford tree surgeons can assess the job properly.",
  },
  localContext: {
    eyebrow: "Romford protected-tree checks",
    title: "Check TPO and conservation-area protection before pruning or felling",
    intro: "Havering protects trees through Tree Preservation Orders and conservation-area controls. Around Romford and Gidea Park, that means the legal status of the tree can be just as important as the physical work being quoted.",
    items: [
      {
        title: "TPO work needs council consent",
        text: "Havering says its consent must be obtained for work to a tree covered by a Tree Preservation Order. The council's online mapping system can be used to check whether a tree is protected or lies within a conservation area.",
        source: {
          label: "London Borough of Havering — TPOs and trees in conservation areas",
          url: "https://www.havering.gov.uk/environmental-issues/trees-grass-hedges-leaves-weeds/3",
        },
      },
      {
        title: "Conservation-area trees are also protected",
        text: "Havering states that trees in conservation areas are similarly protected and consent should be obtained before work, subject to limited exceptions. Gidea Park is one of Havering's designated conservation areas, so location should be checked before a tree surgeon starts.",
        source: {
          label: "London Borough of Havering — conservation areas",
          url: "https://www.havering.gov.uk/planning-3/heritage",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Romford by postcode, tree size and access. Example areas include:",
    sideTitle: "Give enough information to plan equipment and permissions",
    sideCopy: "A garden conifer in Collier Row, a mature tree in Gidea Park and roadside crown work near Rise Park can involve very different access and risk. Photos showing the whole tree and its surroundings are useful.",
    noteLead: "Do not assume a private tree is automatically free to cut.",
    noteText: "Check TPO and conservation-area status first, then make sure the quote states who will handle any application, waste removal and stump work.",
  },
  faq: [
    ["How much does a tree surgeon cost in Romford?", "Cost depends on tree size, species, access, risk, equipment, waste removal and whether stump grinding or traffic management is needed."],
    ["How do I know if a tree has a TPO?", "Havering says its online mapping system can be used to check Tree Preservation Orders and conservation areas."],
    ["Can I prune a tree in a conservation area without checking?", "Do not assume so. Havering says trees in conservation areas are protected and consent should be obtained before work, subject to limited exceptions."],
    ["Can a tree surgeon handle the permission process?", "Many can help prepare or submit tree-work applications, but agree responsibility clearly before work starts."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Romford?",
    copy: "Describe the tree, access and required work once, then compare interested Romford tree surgeons and their quotes.",
    buttonLabel: "Get Romford tree-surgery quotes",
  },
});

export const architectsRomford = makeRomfordProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling project or new design in Romford? Describe the property, goals and planning constraints once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Romford?",
    copy: "Enter the postcode, property type and intended work. Include existing drawings or photos, whether the site is in a conservation area and any previous planning history so suitable Romford architects can assess the likely design and approval route.",
  },
  localContext: {
    eyebrow: "Romford heritage and planning",
    title: "Gidea Park and other heritage areas can add design controls beyond normal householder rules",
    intro: "Havering has 11 conservation areas, including both Gidea Park and Romford. Gidea Park also has an Article 4 Direction that removes certain permitted-development rights, so a design that looks minor elsewhere may still need a planning application there.",
    items: [
      {
        title: "Havering has 11 designated conservation areas",
        text: "The council's heritage guidance says conservation-area status is a material consideration in planning decisions and that proposals should preserve or enhance the area's character and appearance. Romford and Gidea Park are both designated conservation areas.",
        source: {
          label: "London Borough of Havering — conservation areas",
          url: "https://www.havering.gov.uk/planning-3/heritage",
        },
      },
      {
        title: "Gidea Park has its own Article 4 controls",
        text: "Havering's Gidea Park Article 4 Direction removes specified permitted-development rights for affected properties. The current management plan notes controls over matters including extensions, roof alterations, outbuildings, hard surfacing, boundary treatments and some other external changes.",
        source: {
          label: "London Borough of Havering — Gidea Park Conservation Area management plan",
          url: "https://www.havering.gov.uk/downloads/file/7386/gidea-park-conservation-area-appraisal-and-management-plan",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Romford by postcode, project type and planning complexity. Example areas include:",
    sideTitle: "Start with the site's actual planning constraints",
    sideCopy: "A rear extension in Harold Wood, remodelling in central Romford and external alterations in Gidea Park can follow different planning routes. Give the architect the full address so conservation and Article 4 controls can be checked early.",
    noteLead: "Planning permission and Building Regulations are separate.",
    noteText: "A project may need one, both or neither depending on the work. Ask the architect to state which approvals, drawings and consultant inputs are included in the fee.",
  },
  faq: [
    ["How much does an architect cost in Romford?", "Fees depend on project size, complexity, survey work, planning risk, structural input and how far the architect's service continues through construction."],
    ["Is Gidea Park a conservation area?", "Yes. Havering lists Gidea Park as one of the borough's 11 conservation areas."],
    ["What does the Gidea Park Article 4 Direction mean?", "It removes specified permitted-development rights from affected properties, so some external works that might otherwise be permitted can require planning permission."],
    ["Does planning permission cover Building Regulations?", "No. Havering Building Control states that Building Regulations approval is separate from planning permission."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Romford?",
    copy: "Describe the property and project once, then compare interested Romford architects and their quotes.",
    buttonLabel: "Get Romford architect quotes",
  },
});
