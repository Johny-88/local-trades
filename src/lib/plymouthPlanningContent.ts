import { makePlymouthProfile } from "./plymouthProfileBase";

export const treeSurgeonsPlymouth = makePlymouthProfile("tree-surgeons", {
  heroCopy: "Need tree pruning, removal or other arboricultural work in Plymouth? Describe the tree, location and access once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Plymouth?",
    copy: "Enter the postcode, tree type if known, approximate size, required work and access. Mention whether the tree may be protected or inside a conservation area so suitable Plymouth tree surgeons can plan the job correctly.",
  },
  localContext: {
    eyebrow: "Plymouth protected-tree context",
    title: "Protected trees and conservation-area trees need permission or notice before work starts",
    intro: "Plymouth has 15 conservation areas and the council operates Tree Preservation Orders across the city. The legal route differs depending on the protection, so the first step is checking status rather than booking cutting work immediately.",
    items: [
      {
        title: "TPO trees need approval and conservation-area trees require six weeks' notice",
        text: "Plymouth City Council says works to a tree protected by a Tree Preservation Order require approval, while work to qualifying trees in a conservation area requires six weeks' notice. The council recommends applying through the Planning Portal and providing a plan, work specification and reasons for the proposed work.",
        source: {
          label: "Plymouth City Council — work on a protected tree",
          url: "https://www.plymouth.gov.uk/apply-work-protected-tree",
        },
      },
      {
        title: "Plymouth currently has 15 conservation areas",
        text: "The council lists 15 conservation areas, including the Barbican, City Centre and other historic neighbourhoods. If a tree sits within one of these boundaries, tell the arborist before agreeing the work so the notification requirement can be checked first.",
        source: {
          label: "Plymouth City Council — conservation areas",
          url: "https://www.plymouth.gov.uk/conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Plymouth by postcode, tree size and access. Example areas include:",
    sideTitle: "Protection status matters before the saw comes out",
    sideCopy: "A garden tree in Plymstock, a mature tree in Mannamead and one inside the Barbican or another conservation area can have very different planning constraints. Share the exact address and photos.",
    noteLead: "Check protection before booking the work.",
    noteText: "A competent tree surgeon should be able to work from the council's protection status and help define the application or notice required before non-emergency work begins.",
  },
  faq: [
    ["How much does a tree surgeon cost in Plymouth?", "Price depends on tree size, species, access, equipment, waste removal and whether climbing or traffic management is needed. Compare quotes for the same scope."],
    ["Can I prune a TPO tree without permission?", "Not normally. Plymouth City Council says approval is required for works to trees protected by a Tree Preservation Order unless a specific exemption applies."],
    ["What if the tree is in a Plymouth conservation area?", "The council says you generally need to give six weeks' notice before carrying out qualifying work to a tree in a conservation area."],
    ["How many conservation areas does Plymouth have?", "Plymouth City Council currently lists 15 conservation areas."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Plymouth?",
    copy: "Describe the tree, required work and access once, then compare interested Plymouth tree surgeons and their quotes.",
    buttonLabel: "Get Plymouth tree-work quotes",
  },
});

export const architectsPlymouth = makePlymouthProfile("architects", {
  heroCopy: "Planning an extension, conversion, refurbishment or other design project in Plymouth? Describe the property and proposal once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Plymouth?",
    copy: "Enter the postcode, property type and what you want to change. Mention listed-building status, conservation areas, HMO use or major internal alterations so suitable Plymouth architects can judge the likely planning and Building Regulations route.",
  },
  localContext: {
    eyebrow: "Plymouth planning and heritage context",
    title: "Plymouth combines historic waterfront fabric with nationally important post-war architecture and targeted Article 4 controls",
    intro: "The city has 15 conservation areas, including the post-war City Centre Conservation Area, while separate Article 4 controls remove the normal C3-to-C4 HMO permitted-development right in eleven neighbourhood groups. That makes the exact property and use critical at concept stage.",
    items: [
      {
        title: "The City Centre Conservation Area protects Plymouth's distinctive post-war plan",
        text: "Plymouth City Council says the City Centre conservation area was designated to protect the post-war architecture created after wartime destruction and notes that Plymouth has an exceptional concentration of twentieth-century listed buildings. Alterations in conservation areas should therefore be designed around the significance of the place, not treated as an ordinary unrestricted façade change.",
        source: {
          label: "Plymouth City Council — conservation areas",
          url: "https://www.plymouth.gov.uk/conservation-areas",
        },
      },
      {
        title: "Small-HMO conversions need planning permission in eleven named neighbourhood groups",
        text: "The council's Article 4 direction removes the normal permitted-development route from a C3 dwelling to a small C4 HMO in eleven areas around central Plymouth. For a conversion or investment project, an architect should confirm planning status before layouts and room counts are finalised.",
        source: {
          label: "Plymouth City Council — HMO planning and Article 4",
          url: "https://www.plymouth.gov.uk/planning-permission-and-houses-multiple-occupation-hmo",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Plymouth by project type, property and planning complexity. Example areas include:",
    sideTitle: "Start with the site's real constraints",
    sideCopy: "A conservation-area property in the Barbican, an HMO proposal around Mutley and a suburban extension in Plympton may involve very different planning evidence. Give the exact address and intended use from the start.",
    noteLead: "Planning and Building Regulations are separate.",
    noteText: "A design can require planning permission, Building Regulations approval, listed-building consent or more than one of these. Confirm the route before construction information is commissioned.",
  },
  faq: [
    ["How much does an architect cost in Plymouth?", "Fees depend on project size, complexity, survey work, planning risk and how far the architect is engaged through design and construction. Ask for the scope and stages in writing."],
    ["Does Plymouth have conservation areas?", "Yes. Plymouth City Council currently lists 15 conservation areas, including the Barbican and City Centre."],
    ["What is unusual about Plymouth's City Centre conservation area?", "The council designated it to protect the city's distinctive post-war architecture and reconstruction plan."],
    ["Do small HMO conversions need planning permission everywhere in Plymouth?", "The Article 4 direction applies in eleven named neighbourhood groups; large HMOs have separate planning requirements citywide."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Plymouth?",
    copy: "Describe the property, proposal and known constraints once, then compare interested Plymouth architects and their quotes.",
    buttonLabel: "Get Plymouth architect quotes",
  },
});
