import { makeBoltonProfile } from "./boltonProfileBase";

export const treeSurgeonsBolton = makeBoltonProfile("tree-surgeons", {
  heroCopy: "Need a tree surgeon in Bolton for pruning, reduction, removal or storm damage? Describe the tree, access and work required once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Bolton?",
    copy: "Enter the postcode, tree type if known, approximate height, required work and access. Add photos and mention nearby buildings, roads, power lines or boundaries so suitable Bolton tree surgeons can assess the job.",
  },
  localContext: {
    eyebrow: "Bolton protected-tree checks",
    title: "Check TPO and conservation-area status before pruning or felling",
    intro: "Bolton Council provides maps for Tree Preservation Orders and conservation areas. Protected status can change what notice or permission is required, so it is worth checking before agreeing a date for pruning, crown reduction or removal.",
    items: [
      {
        title: "Bolton publishes a map of Tree Preservation Orders",
        text: "The council's protected-tree search lets residents check whether a tree is covered by a Tree Preservation Order. It also lists additional recent TPOs that may not yet be obvious from older records.",
        source: {
          label: "Bolton Council — protected trees and hedgerows",
          url: "https://www.bolton.gov.uk/conservation/trees-hedgerows/4",
        },
      },
      {
        title: "Trees in conservation areas need a Notice of Intention",
        text: "Bolton Council states that a tree in a conservation area requires a Notice of Intention before work where the statutory exemptions do not apply. Give the tree surgeon the property address so status can be checked before work starts.",
        source: {
          label: "Bolton Council — protected trees and hedgerows",
          url: "https://www.bolton.gov.uk/conservation/trees-hedgerows/4",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Bolton by postcode, tree size and access. Example areas include:",
    sideTitle: "Photos and access details help avoid a wasted site visit",
    sideCopy: "A garden tree in Heaton, roadside work in Horwich and a mature tree near a conservation area in Westhoughton may need different equipment and permissions. Photograph the whole tree, base and access route.",
    noteLead: "Protected status should be checked before cutting begins.",
    noteText: "If the tree is under a TPO or within a conservation area, make sure the required application or notice is dealt with before the agreed work date.",
  },
  faq: [
    ["How much does a tree surgeon cost in Bolton?", "Price depends on tree size, work type, access, rigging, waste removal and whether traffic or protected-tree controls affect the job."],
    ["How do I know if a tree has a TPO in Bolton?", "Bolton Council provides an online protected-tree map and additional TPO records."],
    ["Can I prune a tree in a Bolton conservation area without telling the council?", "Not automatically. Bolton says a Notice of Intention is needed for relevant tree work in conservation areas unless an exemption applies."],
    ["Should I include photos when asking for quotes?", "Yes. A full-tree photo plus the trunk, access route and nearby buildings or cables helps a tree surgeon judge equipment and risk."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Bolton?",
    copy: "Describe the tree, required work and access once, then compare interested Bolton tree surgeons and their quotes.",
    buttonLabel: "Get Bolton tree-surgery quotes",
  },
});

export const architectsBolton = makeBoltonProfile("architects", {
  heroCopy: "Planning an extension, conversion, new layout or other building project in Bolton? Describe the property and proposal once, then compare architects and architectural designers who cover your area.",
  answer: {
    title: "Looking for an architect near you in Bolton?",
    copy: "Enter the postcode, property type, project stage and what you want to change. Mention whether the building is listed, in a conservation area or subject to an Article 4 Direction so suitable Bolton professionals can scope the right level of design and planning work.",
  },
  localContext: {
    eyebrow: "Bolton heritage and planning context",
    title: "Bolton has 26 conservation areas, and heritage status can change the planning route",
    intro: "Bolton Council says the borough has 26 conservation areas, from the town centre to smaller historic settlements. It also operates a boroughwide HMO Article 4 Direction. An architect should check the site's actual designations before assuming ordinary permitted-development rights apply.",
    items: [
      {
        title: "Conservation areas can require permission for work normally treated as permitted development",
        text: "Bolton Council says properties in conservation areas may need planning permission for demolition, external alterations, tree work, advertisements and some work that would normally be permitted development.",
        source: {
          label: "Bolton Council — conservation areas",
          url: "https://www.bolton.gov.uk/conservation/conservation-areas/8",
        },
      },
      {
        title: "Listed buildings are protected inside as well as outside",
        text: "Bolton Council explains that listed status covers the building in its entirety, including interiors and fixed features. Alterations affecting character require listed building consent in addition to any planning permission that may be needed.",
        source: {
          label: "Bolton Council — listed buildings",
          url: "https://www.bolton.gov.uk/conservation/listed-buildings",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects and architectural designers may cover Bolton by project type and postcode. Example areas include:",
    sideTitle: "Give the designer the planning context from the start",
    sideCopy: "An extension in Farnworth, a listed-property alteration in central Bolton and a project near a conservation area in Horwich can need very different drawings and supporting information. Share any planning history or designation you already know about.",
    noteLead: "Do not assume permitted development until the address has been checked.",
    noteText: "Conservation areas, listed status, the HMO Article 4 Direction and site-specific planning conditions can all change what consent is required.",
  },
  faq: [
    ["How much does an architect cost in Bolton?", "Fees depend on project size, survey work, drawing stages, planning complexity, Building Regulations work and whether contract administration is included."],
    ["How many conservation areas are there in Bolton?", "Bolton Council says there are currently 26 conservation areas in the borough."],
    ["Does listed status only protect the outside of a building?", "No. Bolton Council says listing covers the whole building, including interiors and fixed features, and can also extend to curtilage structures."],
    ["Does Bolton have an HMO Article 4 Direction?", "Yes. The boroughwide immediate Article 4 Direction introduced in June 2025 means conversion from a dwellinghouse to a small HMO requires planning permission."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Bolton?",
    copy: "Describe the property, project and planning context once, then compare interested Bolton architects and designers.",
    buttonLabel: "Get Bolton architect quotes",
  },
});
