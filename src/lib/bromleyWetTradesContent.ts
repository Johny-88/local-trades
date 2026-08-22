import { makeBromleyProfile } from "./bromleyProfileBase";

export const bathroomSpecialistsBromley = makeBromleyProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower-room upgrade or accessibility improvement in Bromley? Describe the room, products and service changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Bromley?",
    copy: "Enter the postcode, room dimensions and what you want changed. Mention plumbing moves, electrics, ventilation, tiling, underfloor heating or structural work so suitable Bromley bathroom specialists can judge the complete project.",
  },
  localContext: {
    eyebrow: "Bromley bathroom-refit context",
    title: "A bathroom refit can combine several Building Regulations elements, especially when services move",
    intro: "Bromley's Building Control guidance covers alterations, drains, electrical work and sanitary facilities. A like-for-like refit may be straightforward, but moving drainage, electrics or walls can change the compliance route.",
    items: [
      {
        title: "The wider project may need Building Regulations approval",
        text: "Bromley says Building Regulations apply to many alterations and fittings including drains, washing and sanitary facilities. If the bathroom changes drainage, structure, electrics or other regulated elements, agree who is responsible for approval and certification before work starts.",
        source: {
          label: "London Borough of Bromley — building regulations guide",
          url: "https://www.bromley.gov.uk/building-control/building-regulations-guide",
        },
      },
      {
        title: "HMOs have local bathroom and amenity standards",
        text: "Bromley's HMO guidance says shared rented homes must meet adopted standards covering the number and size of kitchens and bathrooms as well as other safety requirements. Tell the contractor if the property is an HMO so the layout is considered in that context.",
        source: {
          label: "London Borough of Bromley — HMO advice for landlords",
          url: "https://www.bromley.gov.uk/housing-advice-options/houses-multiple-occupation-hmo-advice-landlords",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Bromley by postcode, project size and required trades. Example areas include:",
    sideTitle: "Share the room layout and every service move",
    sideCopy: "A like-for-like suite replacement is different from moving a shower, toilet or radiator. Include dimensions, photos and whether plumbing, electrics, ventilation and tiling are changing.",
    noteLead: "Ask for one complete scope.",
    noteText: "Confirm who coordinates plumbing, electrics, tiling, plastering, ventilation, decorating and making good so the quote does not leave hidden gaps.",
  },
  faq: [
    ["How much does a bathroom refit cost in Bromley?", "The price depends on room size, products, layout changes, preparation and how many trades are involved. Compare quotes against the same product and installation scope."],
    ["Can a bathroom refit need Building Regulations approval?", "Yes. Drainage, electrical, structural and other changes can bring Building Regulations requirements even where the cosmetic refit itself is straightforward."],
    ["Do HMOs in Bromley have bathroom standards?", "Yes. Bromley's adopted HMO standards cover bathroom provision and other shared amenities."],
    ["Can I post a small shower replacement?", "Yes. Smaller repairs and replacements can be posted as well as complete bathroom renovations."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Bromley?",
    copy: "Describe the room, products and service changes once, then compare interested Bromley bathroom specialists and their quotes.",
    buttonLabel: "Get Bromley bathroom quotes",
  },
});

export const drainageSpecialistsBromley = makeBromleyProfile("drainage-specialists", {
  heroCopy: "Need help with a blocked drain, recurring smells, slow waste pipes or a drainage fault in Bromley? Describe the symptoms and affected fixtures once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Bromley?",
    copy: "Enter the postcode and explain which drains, toilets, sinks or outside gullies are affected. Say whether the problem is constant or recurring and whether neighbouring properties are affected too so suitable Bromley drainage specialists can judge the likely investigation.",
  },
  localContext: {
    eyebrow: "Bromley drainage and flood-risk context",
    title: "Responsibility depends on where the blockage sits, while surface-water problems have a separate borough role",
    intro: "Bromley says Thames Water looks after the public sewer network, while an individual drain serving one property is normally the owner's responsibility. The council is also the Lead Local Flood Authority for surface-water, groundwater and smaller-watercourse flooding.",
    items: [
      {
        title: "First establish whether the fault is private drainage or a public sewer",
        text: "Bromley states that Thames Water manages the borough's public sewer network and that a drain serving only one property is the owner's responsibility. If several homes or outside manholes are affected, say so before paying for private excavation or repair.",
        source: {
          label: "London Borough of Bromley — sewers and drains",
          url: "https://www.bromley.gov.uk/environmental-health/sewers-drains",
        },
      },
      {
        title: "Bromley coordinates local surface-water and groundwater flood risk",
        text: "As Lead Local Flood Authority, Bromley records and investigates local flooding and coordinates agencies with surface-water drainage responsibilities. If the problem appears only during heavy rain or involves repeated surface-water ponding, describe that pattern rather than treating it as an ordinary internal blockage.",
        source: {
          label: "London Borough of Bromley — flood risk management",
          url: "https://www.bromley.gov.uk/FloodRiskManagement",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Bromley by postcode, fault type and urgency. Example areas include:",
    sideTitle: "Describe every affected outlet and when the problem appears",
    sideCopy: "Say whether the issue affects one sink, several fixtures, an outside gully or the whole property. Mention whether it worsens after heavy rain and whether neighbours are affected.",
    noteLead: "Recurring blockages need a cause, not just a temporary clear.",
    noteText: "Ask whether the quote is for unblocking only or includes CCTV inspection, tracing, repair and any follow-up work if the problem returns.",
  },
  faq: [
    ["How much does drain unblocking cost in Bromley?", "The price depends on access, severity, equipment and whether investigation such as CCTV is needed. Ask what the call-out includes and how repair work would be priced."],
    ["Who is responsible for a blocked drain in Bromley?", "Bromley says a drain serving only one property is normally the owner's responsibility, while Thames Water manages the public sewer network."],
    ["Who deals with surface-water flood risk in Bromley?", "Bromley Council is the Lead Local Flood Authority for local sources including surface water, groundwater and ordinary watercourses."],
    ["Can I post an urgent blocked toilet or drain?", "Yes. State that the job is urgent and explain which fixtures are affected and whether wastewater is overflowing or backing up."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Bromley?",
    copy: "Describe the blockage or drainage symptoms once, then compare interested Bromley drainage specialists and their quotes.",
    buttonLabel: "Get Bromley drainage quotes",
  },
});
