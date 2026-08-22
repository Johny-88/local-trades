import { makeWolverhamptonProfile } from "./wolverhamptonProfileBase";

export const treeSurgeonsWolverhampton = makeWolverhamptonProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, felling or tree advice in Wolverhampton? Describe the tree, access and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Wolverhampton?",
    copy: "Enter the postcode, tree species if known, approximate height, condition, access and what you want done. Include photos of the whole tree and its surroundings so suitable Wolverhampton tree surgeons can judge equipment, waste and permissions.",
  },
  localContext: {
    eyebrow: "Wolverhampton protected-tree context",
    title: "Tree Preservation Orders and conservation-area controls need checking before work starts",
    intro: "Wolverhampton protects significant trees through Tree Preservation Orders and also gives trees in conservation areas additional statutory protection. The practical first step is therefore to check status before agreeing pruning or felling work.",
    items: [
      {
        title: "Protected trees need consent before most works",
        text: "The council's tree strategy records hundreds of Tree Preservation Orders across Wolverhampton and explains that works to a TPO tree require permission from Planning. A contractor should identify whether a TPO affects the tree before the quote turns into booked work.",
        source: {
          label: "City of Wolverhampton Council — tree and woodland strategy",
          url: "https://consultation.wolverhampton.gov.uk/cwc/tree-and-woodland-strategy/supporting_documents/Tree%20Woodland%20Strategy%20Consultation%20Draft%20Final.pdf",
        },
      },
      {
        title: "Conservation-area trees generally require six weeks' notice",
        text: "Wolverhampton's conservation guidance states that works to trees in conservation areas require council consent, and the city's published conservation material explains the six-week notice process. Check this before arranging pruning or felling in one of the city's conservation areas.",
        source: {
          label: "City of Wolverhampton Council — conservation",
          url: "https://www.wolverhampton.gov.uk/planning/conservation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Wolverhampton by postcode, tree size and access. Example areas include:",
    sideTitle: "Show the tree in its surroundings",
    sideCopy: "A mature garden tree in Tettenhall, a constrained rear garden in Whitmore Reans and a roadside tree in Bilston can need very different access, rigging and waste-removal plans.",
    noteLead: "Permission comes before cutting.",
    noteText: "Check TPO and conservation-area status before accepting a start date, and make sure the agreed scope matches any consent or notice given.",
  },
  faq: [
    ["How much does a tree surgeon cost in Wolverhampton?", "Price depends on tree size, access, rigging, waste removal, stump work and whether specialist equipment is needed."],
    ["How do I know if a tree has a TPO?", "Wolverhampton provides mapping for Tree Preservation Orders and conservation areas. Check the property before work starts or ask Planning if status is unclear."],
    ["Can I cut a tree in a conservation area?", "Works can be controlled. Wolverhampton's guidance requires the council process to be followed, commonly including six weeks' notice for qualifying trees."],
    ["Can a tree surgeon remove all the waste?", "Usually this can be included, but confirm whether chip, logs and stump material are removed or left on site."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Wolverhampton?",
    copy: "Describe the tree, access and required work once, then compare interested Wolverhampton tree surgeons and their quotes.",
    buttonLabel: "Get Wolverhampton tree quotes",
  },
});

export const architectsWolverhampton = makeWolverhamptonProfile("architects", {
  heroCopy: "Planning an extension, conversion, redesign or change of use in Wolverhampton? Describe the property and project once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Wolverhampton?",
    copy: "Enter the postcode, property type, existing layout and what you want to achieve. Mention listed status, conservation area, HMO use or structural changes so suitable Wolverhampton architects can judge the planning and Building Regulations route.",
  },
  localContext: {
    eyebrow: "Wolverhampton planning and heritage context",
    title: "Heritage controls and the whole-city HMO Article 4 direction can materially change the design brief",
    intro: "Wolverhampton currently has 31 conservation areas, some with additional Article 4 directions, while a separate citywide Article 4 direction requires planning permission for small HMO conversions. Those constraints are worth identifying before design work is priced or drawings are commissioned.",
    items: [
      {
        title: "Conservation areas reduce normal permitted-development freedom",
        text: "The council states that Wolverhampton has 31 conservation areas and that properties within them have fewer permitted-development rights, with still tighter controls where an Article 4 direction applies. For extensions, windows, doors or external alterations, the architect should confirm the site's designation at the start.",
        source: {
          label: "City of Wolverhampton Council — conservation",
          url: "https://www.wolverhampton.gov.uk/planning/conservation",
        },
      },
      {
        title: "Small HMO conversion needs planning permission citywide",
        text: "Wolverhampton's Article 4 direction removes permitted development for changing a C3 dwelling to a small C4 HMO accommodating three to six people across the whole local-authority area. If the project is for shared housing, planning strategy belongs in the brief from day one.",
        source: {
          label: "City of Wolverhampton Council — small HMO Article 4 direction",
          url: "https://www.wolverhampton.gov.uk/planning/planning-policies/small-houses-multiple-occupation-article-4-direction",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Wolverhampton by project type and site. Example areas include:",
    sideTitle: "Start with the property's constraints, not just the desired floor plan",
    sideCopy: "A conservation-area house in Tettenhall, a standard suburban property in Penn and an HMO proposal elsewhere in the city can face very different planning questions before the design is finalised.",
    noteLead: "Planning and Building Regulations are separate tests.",
    noteText: "A project may need one, both or neither depending on the work. Ask the architect to state which approvals and drawings are included in the fee.",
  },
  faq: [
    ["How much does an architect cost in Wolverhampton?", "Fees depend on project size, survey work, design stages, planning complexity, technical drawings and contract administration. Compare the same scope of service."],
    ["How many conservation areas are in Wolverhampton?", "The council currently lists 31 conservation areas, with some also subject to Article 4 directions."],
    ["Do small HMO conversions need planning permission?", "Yes. Wolverhampton's citywide Article 4 direction requires planning permission for changing a normal dwelling to a small C4 HMO for three to six people."],
    ["Is planning permission the same as Building Regulations approval?", "No. They are separate regimes and a project may require both. The architect should identify the likely route for each."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Wolverhampton?",
    copy: "Describe the property, constraints and project once, then compare interested Wolverhampton architects and their quotes.",
    buttonLabel: "Get Wolverhampton architect quotes",
  },
});
