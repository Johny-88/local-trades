import { makeLiverpoolProfile } from "./liverpoolProfileBase";

export const bathroomSpecialistsLiverpool = makeLiverpoolProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower-room upgrade or accessibility improvement in Liverpool? Describe the room, products and service changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Liverpool?",
    copy: "Enter the postcode, room dimensions and what you want changed. Mention plumbing moves, electrics, ventilation, tiling, underfloor heating or structural work so suitable Liverpool bathroom specialists can judge the complete project.",
  },
  localContext: {
    eyebrow: "Liverpool bathroom-refit context",
    title: "Bathroom work can combine Building Regulations requirements with HMO-specific property standards",
    intro: "Liverpool City Council includes bathrooms among home improvements that can require Building Regulations approval where competent-person self-certification does not apply. Liverpool also licenses qualifying HMOs with five or more occupiers from more than one household, making shared-rental status relevant to some refurbishment briefs.",
    items: [
      {
        title: "Bathroom installation can have a Building Regulations route",
        text: "Liverpool's Building Control guidance says home improvements such as a bathroom, electrics and other controlled work can need approval depending on who carries out the work and whether an applicable Competent Person Scheme is used. If the refit changes drainage, electrics, ventilation or structure, confirm who handles compliance before finishes cover the work.",
        source: {
          label: "Liverpool City Council — Building Regulations approval",
          url: "https://liverpool.gov.uk/planning-and-building-control/building-control/building-regulations-approval",
        },
      },
      {
        title: "Qualifying shared homes need HMO licensing",
        text: "Liverpool's HMO guidance says properties occupied by five or more people forming unrelated households and sharing amenities such as a bathroom or kitchen require an HMO licence. If the bathroom is in a licensed or proposed HMO, tell the contractor so the wider property standards can be considered alongside the finish.",
        source: {
          label: "Liverpool City Council — HMO licence guidance",
          url: "https://liverpool.gov.uk/business/licences-and-permits/landlord-licensing/houses-in-multiple-occupancy/hmo-licence-guidance/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Liverpool by postcode, project size and required trades. Example areas include:",
    sideTitle: "Share the room layout and every service move",
    sideCopy: "A like-for-like suite replacement is different from moving a shower, toilet or radiator. Include dimensions, photos and whether plumbing, electrics, ventilation and tiling are changing.",
    noteLead: "Ask for one complete scope.",
    noteText: "Confirm who coordinates plumbing, electrics, tiling, plastering, ventilation, decorating and waste so the quote does not leave hidden gaps.",
  },
  faq: [
    ["How much does a bathroom refit cost in Liverpool?", "The price depends on room size, products, layout changes, preparation and how many trades are involved. Compare quotes against the same product and installation scope."],
    ["Can a bathroom refit need Building Regulations approval?", "Yes. Liverpool's Building Control guidance includes bathrooms among home improvements that can need approval depending on the work and who carries it out."],
    ["Do HMO rules matter for bathroom work in Liverpool?", "They can. Qualifying HMOs with five or more occupiers forming unrelated households require licensing, so state if the property is a licensed or proposed HMO."],
    ["Can I post a small shower replacement?", "Yes. Smaller repairs and replacements can be posted as well as complete bathroom renovations."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Liverpool?",
    copy: "Describe the room, products and service changes once, then compare interested Liverpool bathroom specialists and their quotes.",
    buttonLabel: "Get Liverpool bathroom quotes",
  },
});

export const drainageSpecialistsLiverpool = makeLiverpoolProfile("drainage-specialists", {
  heroCopy: "Need help with a blocked drain, recurring smells, slow waste pipes or a drainage fault in Liverpool? Describe the symptoms and affected fixtures once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Liverpool?",
    copy: "Enter the postcode and explain which drains, toilets, sinks or outside gullies are affected. Say whether the problem is constant or recurring and whether neighbouring properties are affected too so suitable Liverpool drainage specialists can judge the likely investigation.",
  },
  localContext: {
    eyebrow: "Liverpool drainage and flood context",
    title: "Recent council flood investigations make runoff routes and drainage condition worth treating seriously",
    intro: "Liverpool City Council is the Lead Local Flood Authority and has published formal Section 19 investigations into locally significant flooding, including Deysbrook Lane in West Derby and Queens Drive. Building Control also treats alterations to a building's drainage system as work that generally needs approval.",
    items: [
      {
        title: "Liverpool has investigated repeated flooding linked to local drainage networks",
        text: "The council's Deysbrook Lane investigation covers numerous flooding incidents reported between 2010 and 2024 and examines hydrology, the local drainage network and causes of flooding. For recurring external water problems, ask a drainage specialist to diagnose where water is coming from and where it should legally discharge rather than simply clearing the nearest gully.",
        source: {
          label: "Liverpool City Council — Deysbrook Lane flood investigation",
          url: "https://liverpool.gov.uk/parking-roads-and-travel/section-19-flood-investigations/report-on-deysbrook-lane-flooding/",
        },
      },
      {
        title: "Drainage alterations can require Building Regulations approval",
        text: "Liverpool City Council lists alterations to the drainage system of a building among works that need Building Regulations approval. If the job involves rerouting foul or surface-water drainage rather than simple unblocking, establish the approval route and who is responsible before work begins.",
        source: {
          label: "Liverpool City Council — Building Regulations approval",
          url: "https://liverpool.gov.uk/planning-and-building-control/building-control/building-regulations-approval",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Liverpool by postcode, fault type and urgency. Example areas include:",
    sideTitle: "Describe every affected outlet and where water collects",
    sideCopy: "Say whether the issue affects one sink, several fixtures, an outside gully or the whole property. For external flooding, explain where water appears, how quickly it builds and where it drains after rain.",
    noteLead: "Recurring blockages need a cause, not just a temporary clear.",
    noteText: "Ask whether the quote is for unblocking only or includes CCTV inspection, tracing, repair and any follow-up work if the problem returns.",
  },
  faq: [
    ["How much does drain unblocking cost in Liverpool?", "The price depends on access, severity, equipment and whether investigation such as CCTV is needed. Ask what the call-out includes and how additional repair work would be priced."],
    ["When might I need a CCTV drain survey?", "A survey can be useful when blockages recur, the cause is unclear, structural damage is suspected or you need evidence of condition before deciding on repairs."],
    ["Does Liverpool investigate significant flooding?", "Yes. As Lead Local Flood Authority, Liverpool publishes Section 19 investigations for significant local flood events, including recent reports for Deysbrook Lane, Queens Drive and other locations."],
    ["Can drainage alterations need Building Regulations approval?", "Yes. Liverpool City Council lists alterations to a building's drainage system among work that generally needs approval."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Liverpool?",
    copy: "Describe the blockage, drainage symptoms or runoff problem once, then compare interested Liverpool drainage specialists and their quotes.",
    buttonLabel: "Get Liverpool drainage quotes",
  },
});
