import { makeSouthportProfile } from "./southportProfileBase";

export const treeSurgeonsSouthport = makeSouthportProfile("tree-surgeons", {
  heroCopy: "Need a tree surgeon in Southport for pruning, crown work, removal or a tree-safety concern? Describe the tree, access and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Southport?",
    copy: "Enter the postcode, approximate tree size, species if known and the work you think is needed. Add photos and mention buildings, roads, overhead lines, restricted access or protected-tree status so suitable Southport tree surgeons can assess the job properly.",
  },
  localContext: {
    eyebrow: "Southport protected-tree checks",
    title: "TPOs and Southport's conservation areas can require permission or notice before tree work starts",
    intro: "Sefton protects trees through Tree Preservation Orders and conservation-area controls. Southport contains several conservation areas, so checking the exact address before pruning or felling can prevent a straightforward garden job becoming a planning problem.",
    items: [
      {
        title: "TPO work needs Sefton Council permission",
        text: "Sefton says it is an offence to cut down, lop, uproot, wilfully damage or destroy a tree protected by a Tree Preservation Order without permission, subject to the relevant exemptions. The council's SIMON map can be used to check TPO and conservation-area status.",
        source: {
          label: "Sefton Council — tree preservation",
          url: "https://sefton.gov.uk/planning-building-control/apply-for-permission/tree-preservation/",
        },
      },
      {
        title: "Conservation-area tree work normally needs six weeks' notice",
        text: "Sefton says anyone proposing works to a tree in a conservation area must give the council six weeks' notice. Southport conservation areas include Lord Street, Promenade, North Meols and West Birkdale, so protection should be checked before work is booked.",
        source: {
          label: "Sefton Council — conservation and heritage FAQs",
          url: "https://www.sefton.gov.uk/planning-building-control/conservation-and-heritage/conservation-and-heritage-faqs/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Southport by postcode, tree size and access. Example areas include:",
    sideTitle: "Give enough information to plan equipment and permissions",
    sideCopy: "A garden conifer in Marshside, a mature tree in Birkdale and roadside crown work in Churchtown can involve very different access and risk. Photos showing the whole tree and its surroundings are useful.",
    noteLead: "Do not assume a private tree is automatically free to cut.",
    noteText: "Check TPO and conservation-area status first, then make sure the quote states who will handle any application or notice, waste removal and stump work.",
  },
  faq: [
    ["How much does a tree surgeon cost in Southport?", "Cost depends on tree size, species, access, risk, equipment, waste removal and whether stump grinding or traffic management is needed."],
    ["How do I check whether a Southport tree has a TPO?", "Sefton Council directs residents to its SIMON mapping system for Tree Preservation Orders and conservation areas."],
    ["How much notice is needed for tree work in a Sefton conservation area?", "Sefton says six weeks' notice is normally required before carrying out works to a tree in a conservation area."],
    ["Can a tree surgeon handle the permission process?", "Many can help prepare or submit tree-work applications or notices, but agree responsibility clearly before work starts."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Southport?",
    copy: "Describe the tree, access and required work once, then compare interested Southport tree surgeons and their quotes.",
    buttonLabel: "Get Southport tree-surgery quotes",
  },
});

export const architectsSouthport = makeSouthportProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling project or new design in Southport? Describe the property, goals and planning constraints once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Southport?",
    copy: "Enter the postcode, property type and intended work. Include existing drawings or photos, whether the site is in a conservation area and any previous planning history so suitable Southport architects can assess the likely design and approval route.",
  },
  localContext: {
    eyebrow: "Southport heritage and HMO planning",
    title: "Southport combines significant conservation areas with an HMO Article 4 direction in parts of the town",
    intro: "The planning route can change sharply by address in Southport. Lord Street, Promenade, North Meols and West Birkdale are conservation areas, while parts of Southport also have an Article 4 direction removing permitted-development rights for conversion from a dwellinghouse to a small HMO.",
    items: [
      {
        title: "Several Southport conservation areas are on the Heritage at Risk Register",
        text: "Sefton lists Lord Street, North Meols, Promenade and West Birkdale in Southport among the borough's conservation areas currently on the national Heritage at Risk Register. The council says conservation-area character is a material planning consideration for alterations and development.",
        source: {
          label: "Sefton Council — conservation areas",
          url: "https://www.sefton.gov.uk/planning-building-control/conservation-and-heritage/conservation-areas/",
        },
      },
      {
        title: "Small-HMO conversion can require planning permission in parts of Southport",
        text: "Sefton's HMO Article 4 direction removes permitted-development rights for changing a Class C3 dwellinghouse to a Class C4 HMO in specified parts of Southport. An architect planning a conversion should therefore check both the address and intended occupancy before assuming permitted development applies.",
        source: {
          label: "Sefton Council — Article 4 Direction for Houses in Multiple Occupation",
          url: "https://www.sefton.gov.uk/planning-building-control/planning-policy-including-local-plan-and-neighbourhood-planning/article-4-directions/article-4-direction-for-houses-in-multiple-occupation/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Southport by postcode, project type and planning complexity. Example areas include:",
    sideTitle: "Start with the site's actual planning constraints",
    sideCopy: "A rear extension in Ainsdale, remodelling in Churchtown and external alterations around Lord Street can follow different planning routes. Give the architect the full address so conservation, listed-building and HMO controls can be checked early.",
    noteLead: "Planning permission and Building Regulations are separate.",
    noteText: "A project may need one, both or neither depending on the work. Ask the architect to state which approvals, drawings and consultant inputs are included in the fee.",
  },
  faq: [
    ["How much does an architect cost in Southport?", "Fees depend on project size, complexity, survey work, planning risk, structural input and how far the architect's service continues through construction."],
    ["Does Southport have conservation areas?", "Yes. Southport includes several, including Lord Street, Promenade, North Meols and West Birkdale."],
    ["Can changing a house to a small HMO need planning permission in Southport?", "Yes in the areas covered by Sefton's HMO Article 4 direction, which removes the normal permitted-development right for C3-to-C4 change of use."],
    ["Does planning permission cover Building Regulations?", "No. They are separate approval systems and a project can require one, both or neither depending on the work."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Southport?",
    copy: "Describe the property and project once, then compare interested Southport architects and their quotes.",
    buttonLabel: "Get Southport architect quotes",
  },
});
