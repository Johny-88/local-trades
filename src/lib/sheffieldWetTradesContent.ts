import { makeSheffieldProfile } from "./sheffieldProfileBase";

export const bathroomSpecialistsSheffield = makeSheffieldProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower-room upgrade or accessibility improvement in Sheffield? Describe the room, products and service changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Sheffield?",
    copy: "Enter the postcode, room dimensions and what you want changed. Mention plumbing moves, electrics, ventilation, tiling, underfloor heating or structural work so suitable Sheffield bathroom specialists can judge the complete project.",
  },
  localContext: {
    eyebrow: "Sheffield bathroom-refit context",
    title: "Bathroom work can combine Building Regulations requirements with HMO-specific property standards",
    intro: "Sheffield Building Control lists installation of a bathroom or shower among domestic work that can use the Building Notice route. The city also licenses qualifying HMOs occupied by five or more people forming two or more households, so shared-rental status is relevant when a bathroom layout or services are being changed.",
    items: [
      {
        title: "Bathroom installation can fall within Building Regulations procedures",
        text: "Sheffield City Council specifically lists installation of a bathroom or shower among domestic works that can use a Building Notice. If the refit changes drainage, electrics, ventilation, structure or other controlled elements, agree who is responsible for notification, competent-person work and completion paperwork before the room is closed up.",
        source: {
          label: "Sheffield City Council — apply for a Building Notice",
          url: "https://www.sheffield.gov.uk/planning-development/building-regulations/apply-building-notice",
        },
      },
      {
        title: "Qualifying shared homes need Sheffield HMO licensing",
        text: "Sheffield requires an HMO licence for properties occupied by five or more people forming two or more households, subject to the statutory definitions and exemptions. If the bathroom is in a licensed or proposed HMO, tell the contractor so room provision, fire-safety implications and the wider property standards can be considered alongside the finish.",
        source: {
          label: "Sheffield City Council — apply for an HMO licence",
          url: "https://www.sheffield.gov.uk/housing/houses-multiple-occupation/apply",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Sheffield by postcode, project size and required trades. Example areas include:",
    sideTitle: "Share the room layout and every service move",
    sideCopy: "A like-for-like suite replacement is different from moving a shower, toilet or radiator. Include dimensions, photos and whether plumbing, electrics, ventilation and tiling are changing.",
    noteLead: "Ask for one complete scope.",
    noteText: "Confirm who coordinates plumbing, electrics, tiling, plastering, ventilation, decorating and waste so the quote does not leave hidden gaps.",
  },
  faq: [
    ["How much does a bathroom refit cost in Sheffield?", "The price depends on room size, products, layout changes, preparation and how many trades are involved. Compare quotes against the same product and installation scope."],
    ["Can a bathroom refit need Building Regulations approval?", "Yes. Sheffield's own Building Notice guidance specifically lists bathroom or shower installation, and regulated drainage, electrical, ventilation or structural work may also be involved."],
    ["Do HMO rules matter for bathroom work in Sheffield?", "They can. Qualifying HMOs with five or more occupiers forming two or more households require licensing, so state if the property is a licensed or proposed HMO."],
    ["Can I post a small shower replacement?", "Yes. Smaller repairs and replacements can be posted as well as complete bathroom renovations."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Sheffield?",
    copy: "Describe the room, products and service changes once, then compare interested Sheffield bathroom specialists and their quotes.",
    buttonLabel: "Get Sheffield bathroom quotes",
  },
});

export const drainageSpecialistsSheffield = makeSheffieldProfile("drainage-specialists", {
  heroCopy: "Need help with a blocked drain, recurring smells, slow waste pipes or a drainage fault in Sheffield? Describe the symptoms and affected fixtures once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Sheffield?",
    copy: "Enter the postcode and explain which drains, toilets, sinks or outside gullies are affected. Say whether the problem is constant or recurring and whether neighbouring properties are affected too so suitable Sheffield drainage specialists can judge the likely investigation.",
  },
  localContext: {
    eyebrow: "Sheffield drainage and surface-water context",
    title: "Sheffield's topography makes surface-water management relevant to wider drainage and external works",
    intro: "Sheffield City Council says sustainable drainage is particularly appropriate to the city's topography because poorly managed runoff can create local flooding and larger downstream problems. The council also notes that Building Notices cannot be used for work over or within three metres of a sewer shown on Yorkshire Water's sewer map.",
    items: [
      {
        title: "Sheffield actively promotes SuDS to control runoff close to its source",
        text: "The council's sustainability guidance says surface water should be controlled as near to source as possible and that SuDS are particularly appropriate to Sheffield's topography. If drainage work is connected to a driveway, extension or new hard surface, ask where runoff will go rather than treating rainwater as a separate afterthought.",
        source: {
          label: "Sheffield City Council — environment and resources sustainability guidance",
          url: "https://www.sheffield.gov.uk/planning-development/sustainability-toolkit/environment-and-resources",
        },
      },
      {
        title: "Building close to a mapped sewer changes the Building Regulations route",
        text: "Sheffield City Council says the Building Notice procedure cannot be used where proposed building work is over or within three metres of a sewer shown on the sewerage undertaker's map, which in Sheffield is Yorkshire Water. If drainage alterations form part of an extension or structural project, establish sewer position and approvals early.",
        source: {
          label: "Sheffield City Council — apply for a Building Notice",
          url: "https://www.sheffield.gov.uk/planning-development/building-regulations/apply-building-notice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Sheffield by postcode, fault type and urgency. Example areas include:",
    sideTitle: "Describe every affected outlet and the ground conditions",
    sideCopy: "Say whether the problem affects one sink, several fixtures, an outside gully or the whole property. For external work, mention slopes, hard surfaces and where water currently collects or runs.",
    noteLead: "Recurring blockages need a cause, not just a temporary clear.",
    noteText: "Ask whether the quote is for unblocking only or includes CCTV inspection, tracing, repair and any follow-up work if the problem returns.",
  },
  faq: [
    ["How much does drain unblocking cost in Sheffield?", "The price depends on access, severity, equipment and whether investigation such as CCTV is needed. Ask what the call-out includes and how additional repair work would be priced."],
    ["When might I need a CCTV drain survey?", "A survey can be useful when blockages recur, the cause is unclear, structural damage is suspected or you need evidence of condition before deciding on repairs."],
    ["Why does surface-water drainage matter in Sheffield?", "The council says Sheffield's topography means poorly managed runoff can contribute to local and downstream flooding, so SuDS and controlled discharge are relevant to many wider external projects."],
    ["Can building near a sewer affect the approval route?", "Yes. Sheffield's Building Control guidance says a Building Notice cannot be used for building work over or within three metres of a sewer shown on Yorkshire Water's sewer map."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Sheffield?",
    copy: "Describe the blockage, drainage symptoms or runoff problem once, then compare interested Sheffield drainage specialists and their quotes.",
    buttonLabel: "Get Sheffield drainage quotes",
  },
});
