import { makeLondonProfile } from "./londonProfileBase";

export const treeSurgeonsLondon = makeLondonProfile("tree-surgeons", {
  heroCopy: "Need pruning, a crown reduction, tree removal or stump work in London? Describe the tree, access and intended outcome once, then compare tree surgeons interested in the job.",
  answer: { title: "Looking for a tree surgeon near you in London?", copy: "Enter the postcode and upload clear photos showing the whole tree, nearby buildings, boundaries and access. Mention any known Tree Preservation Order or conservation-area status before anyone quotes." },
  localContext: {
    eyebrow: "London tree context",
    title: "London has a large urban forest and many trees are subject to planning protection",
    intro: "Tree work in the capital needs to account for both the physical access and the legal status of the tree.",
    items: [
      { title: "London contains an estimated 8.4 million trees", text: "City Hall describes London as one of the world's largest urban forests, with an estimated 8.4 million trees in public and private spaces. The GLA's 2024 modelling estimated tree canopy at about 19.6% of London's land area, so mature trees are a significant part of the city's infrastructure and streetscape.", source: { label: "London City Hall — trees and woodlands", url: "https://www.london.gov.uk/programmes-and-strategies/environment-and-climate-change/parks-green-spaces-and-biodiversity/trees-and-woodlands" } },
      { title: "Conservation areas and TPOs can restrict tree work", text: "Historic England explains that a Tree Preservation Order can prohibit cutting down, topping or lopping without consent. For qualifying trees in a conservation area, the local planning authority must generally be notified six weeks before work. Check the relevant London borough before instructing non-exempt work.", source: { label: "Historic England — permissions for trees", url: "https://historicengland.org.uk/advice/your-home/improvement/permission/" } },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover London according to access, tree size and travel distance. Example areas include:",
    sideTitle: "Check the tree's protection status before work is booked",
    sideCopy: "London boroughs hold local TPO and conservation-area records. A tree surgeon should know what information is needed before protected work starts.",
    noteLead: "Access can dominate the quote.",
    noteText: "Rear-garden trees with no side access may require climbing, sectional lowering or carrying timber through the property.",
  },
  faq: [
    ["How much does a tree surgeon cost in London?", "Small pruning jobs may be a few hundred pounds, while large or awkward removals can run into the thousands. Access, rigging, parking and waste have a major effect."],
    ["How do I know if a London tree is protected?", "Check with the relevant London borough for Tree Preservation Orders and conservation-area status before non-exempt work. A competent tree surgeon can also help identify what needs checking."],
    ["How much notice is needed for a tree in a conservation area?", "Historic England explains that qualifying tree work in a conservation area generally requires six weeks' notice to the local planning authority unless an exception applies."],
    ["Why are London tree quotes so dependent on access?", "Many rear gardens have narrow or no side access. Rigging material around buildings or carrying waste through a property can add significant time."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare tree surgeons in London?", copy: "Show the tree, access and intended work once, then compare interested London tree surgeons and quotes.", buttonLabel: "Get London tree-surgery quotes" },
});

export const architectsLondon = makeLondonProfile("architects", {
  heroCopy: "Planning an extension, remodel, conversion or new-build project in London? Explain the property, goals and budget once, then compare architects suited to the scale and planning context.",
  answer: { title: "Looking for an architect near you in London?", copy: "Enter the postcode and describe the existing building, proposed changes and project stage. Mention listed status, conservation-area location or previous planning history if known so London architects can judge whether their experience fits." },
  localContext: {
    eyebrow: "London planning context",
    title: "Design in London is strongly shaped by local character, density and heritage",
    intro: "The same extension or redevelopment idea can face very different constraints from one borough or street to another.",
    items: [
      { title: "London has more than 1,000 conservation areas and about 19,000 listed-building entries", text: "The adopted London Plan's heritage chapter says the capital has over 1,000 conservation areas and around 19,000 list entries for historic buildings, alongside World Heritage Sites and other designated assets. For an architect, checking heritage context early can avoid designing a scheme that ignores a major constraint.", source: { label: "London City Hall — London Plan heritage and culture", url: "https://www.london.gov.uk/programmes-strategies/planning/london-plan/the-london-plan-2021-online/chapter-7-heritage-and-culture" } },
      { title: "The London Plan requires a design-led approach", text: "Policy D3 of the London Plan says development should make the best use of land through a design-led approach responding to site context and capacity. Borough planning and conservation officers scrutinise proposals against London-wide policy and local evidence, so a generic design solution is rarely enough for a constrained London site.", source: { label: "London City Hall — London Plan design", url: "https://www.london.gov.uk/programmes-strategies/planning/london-plan/the-london-plan-2021-online/chapter-3-design" } },
    ],
  },
  areaCopy: {
    intro: "Architects may work across London or specialise in particular boroughs and project types. Example areas include:",
    sideTitle: "Local planning experience can be valuable",
    sideCopy: "Borough policies, conservation appraisals, Article 4 directions and local design guidance can vary. Ask whether the architect has handled comparable London planning contexts.",
    noteLead: "Define the appointment clearly.",
    noteText: "Planning approval, Building Regulations information and construction-stage support are separate services unless the fee explicitly includes them.",
  },
  faq: [
    ["How much does an architect cost in London?", "Fees vary widely. MyJobQuote's current UK guidance suggests around £50–£100 per hour or percentage-based fees commonly around 5%–10%, depending on the service and project."],
    ["Does a London conservation area affect an extension design?", "It can. London has more than 1,000 conservation areas and borough-specific appraisals or Article 4 directions may affect what is acceptable."],
    ["Is planning permission the same as Building Regulations approval?", "No. They are separate processes. Ask the architect which approvals and technical stages are included in the appointment."],
    ["Should I choose an architect who works in my borough?", "It can help when the project has complex local policy or heritage constraints, but relevant project experience and a well-defined service are more important than postcode alone."],
    ["Do I have to appoint an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare architects in London?", copy: "Describe the site, project and planning context once, then compare interested London architects and fee proposals.", buttonLabel: "Get London architect quotes" },
});
