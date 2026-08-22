import { makeOldhamProfile } from "./oldhamProfileBase";

export const treeSurgeonsOldham = makeOldhamProfile("tree-surgeons", {
  heroCopy: "Need pruning, crown work, tree removal or stump work in Oldham? Describe the trees, access and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Oldham?",
    copy: "Enter the postcode, number of trees, approximate height, required work and access. Mention nearby buildings, roads, cables and whether you know of any TPO or conservation-area status.",
  },
  localContext: {
    eyebrow: "Oldham protected trees",
    title: "TPO consent and conservation-area notification should be checked before cutting starts",
    intro: "Protected-tree rules can change the sequence of a job completely. Oldham Council publishes guidance both for Tree Preservation Orders and for proposed tree work inside conservation areas.",
    items: [
      {
        title: "TPO trees cannot simply be cut, lopped or felled without consent",
        text: "Oldham Council explains that a Tree Preservation Order prohibits cutting down, uprooting, topping, lopping, wilful damage or destruction without the council's consent, subject to the relevant legal exemptions.",
        source: {
          label: "Oldham Council — scope and purpose of Tree Preservation Orders",
          url: "https://www.oldham.gov.uk/download/downloads/id/811/the_scope_and_purpose_of_tree_preservation_orders.pdf",
        },
      },
      {
        title: "Conservation-area tree work can require prior notice",
        text: "Oldham's tree-work guidance says notice is required in conservation areas for trees with a trunk diameter over 75mm measured at 1.5m above ground, subject to the stated exceptions and thresholds.",
        source: {
          label: "Oldham Council — tree works in TPOs and conservation areas",
          url: "https://www.oldham.gov.uk/download/downloads/id/5386/guidelines_for_works_to_trees_subject_to_a_tree_preservation_order_andor_in_conservation_areas.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Oldham by postcode, tree size and access. Example areas include:",
    sideTitle: "Check protection before agreeing the cutting specification",
    sideCopy: "A garden tree in Lees, mature trees in Saddleworth and a roadside tree in Royton can have very different access and planning constraints. Give the exact address and photos before anyone assumes the work is unrestricted.",
    noteLead: "Permission risk belongs at the start of the quote.",
    noteText: "Ask whether the contractor has checked TPO and conservation-area status and whether the quote includes any application or notification work needed before cutting.",
  },
  faq: [
    ["How much does tree surgery cost in Oldham?", "Cost depends on tree size, species, work type, rigging, access, waste removal, stump work and any protected-tree process."],
    ["Can I prune a TPO tree without asking Oldham Council?", "Not generally. Oldham Council says work such as cutting, lopping or felling protected trees requires consent unless a legal exemption applies."],
    ["Do conservation-area trees need notice?", "Oldham guidance says prior notice is required for qualifying trees above the stated trunk-diameter threshold."],
    ["Can I post stump grinding only?", "Yes. Stump work can be posted separately from pruning or felling."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Oldham?",
    copy: "Describe the trees, access and protection status once, then compare interested Oldham tree surgeons and their quotes.",
    buttonLabel: "Get Oldham tree-surgery quotes",
  },
});

export const architectsOldham = makeOldhamProfile("architects", {
  heroCopy: "Planning an extension, conversion, redesign or planning application in Oldham? Describe the property and project once, then compare architects and designers who cover your area.",
  answer: {
    title: "Looking for an architect near you in Oldham?",
    copy: "Enter the postcode, property type, intended changes, approximate budget and whether you need feasibility, planning drawings, Building Regulations drawings or a fuller design service.",
  },
  localContext: {
    eyebrow: "Oldham planning context",
    title: "Oldham has a substantial conservation-area network and new borough-wide HMO planning control",
    intro: "The exact address matters before design starts. Current council evidence records 36 conservation areas, while the 2026 Article 4 direction means small-HMO conversions across the borough now need planning permission.",
    items: [
      {
        title: "Oldham has 36 conservation areas",
        text: "Oldham Council's 2025 Local Plan evidence records 36 conservation areas covering about 254.83 hectares, alongside hundreds of nationally listed heritage assets. Heritage constraints should therefore be checked at the address rather than assumed from the wider neighbourhood.",
        source: {
          label: "Oldham Council — Local Plan integrated assessment",
          url: "https://www.oldham.gov.uk/download/downloads/id/8325/oldham_local_plan_publication_plan_integrated_assessment_scoping_report.pdf",
        },
      },
      {
        title: "The HMO Article 4 direction applies borough-wide",
        text: "Since 1 January 2026, Oldham's Article 4 direction removes the normal permitted-development right for changing a C3 dwellinghouse into a C4 small HMO. That makes planning strategy part of the design brief for these conversions.",
        source: {
          label: "Oldham Council — Article 4 Direction",
          url: "https://www.oldham.gov.uk/article_4_direction",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects and designers may cover Oldham by postcode and project type. Example areas include:",
    sideTitle: "Start with constraints before drawing the preferred scheme",
    sideCopy: "An extension in Failsworth, a heritage-sensitive alteration in Saddleworth and a conversion in Oldham town centre can follow very different planning routes. Give the full address and intended use at the start.",
    noteLead: "Define exactly which stages you want priced.",
    noteText: "Feasibility, measured survey, planning, Building Regulations, structural coordination and contract administration are different services. Ask each professional to quote the same stages.",
  },
  faq: [
    ["How much does an architect cost in Oldham?", "Fees depend on project size, complexity and the stages of service required. Compare like-for-like scopes rather than headline percentages alone."],
    ["How many conservation areas are there in Oldham?", "Oldham Council's current Local Plan evidence records 36 conservation areas."],
    ["Do small HMO conversions need planning permission in Oldham?", "Yes. The borough-wide Article 4 direction took effect on 1 January 2026 for C3-to-C4 conversions."],
    ["Can I post a planning-drawings-only job?", "Yes. You can describe the exact stage you need, from feasibility to planning or Building Regulations drawings."],
    ["Do I have to hire an architect or designer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects and designers in Oldham?",
    copy: "Describe the property, proposal and required design stages once, then compare interested Oldham professionals and their quotes.",
    buttonLabel: "Get Oldham architect quotes",
  },
});
