import { makeReadingProfile } from "./readingProfileBase";

export const bathroomSpecialistsReading = makeReadingProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower-room upgrade or accessibility improvement in Reading? Describe the room, products and service changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Reading?",
    copy: "Enter the postcode, room dimensions and what you want changed. Mention plumbing moves, electrics, ventilation, tiling, underfloor heating or structural work so suitable Reading bathroom specialists can judge the complete project.",
  },
  localContext: {
    eyebrow: "Reading bathroom-refit context",
    title: "A bathroom refit can combine several regulated trades",
    intro: "Reading's building-control guidance makes clear that planning permission and Building Regulations are separate systems. A simple like-for-like refit may be straightforward, while structural, drainage, electrical or ventilation changes can bring additional requirements.",
    items: [
      {
        title: "Check Building Regulations requirements for the wider project",
        text: "Reading Borough Council explains that Building Regulations apply to construction and alterations and that many building works need building-control approval. If the refit changes structure, drainage, electrics or other regulated elements, establish who is responsible for compliance and certification.",
        source: {
          label: "Reading Borough Council — about building control",
          url: "https://www.reading.gov.uk/planning-and-building-control/building-control/about-building-control/",
        },
      },
      {
        title: "Reading's HMO guidance includes bathroom and heating standards",
        text: "For shared rented homes, Reading's HMO guidance covers amenities and says shower rooms or bathrooms may require suitable fixed heating as part of the local standard. Tell the contractor if the property is a licensed or proposed HMO so the full requirements can be considered.",
        source: {
          label: "Reading Borough Council — HMO management pack",
          url: "https://www.reading.gov.uk/housing/private-renting/landlords/houses-in-multiple-occupation-hmos/houses-in-multiple-occupation-management-pack/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Reading by postcode, project size and required trades. Example areas include:",
    sideTitle: "Share the room layout and every service move",
    sideCopy: "A like-for-like suite replacement is different from moving a shower, toilet or radiator. Include dimensions, photos and whether plumbing, electrics, ventilation and tiling are changing.",
    noteLead: "Ask for one complete scope.",
    noteText: "Confirm who coordinates plumbing, electrics, tiling, plastering, ventilation, decorating and waste so the quote does not leave hidden gaps.",
  },
  faq: [
    ["How much does a bathroom refit cost in Reading?", "The price depends on room size, products, layout changes, preparation and how many trades are involved. Compare quotes against the same product and installation scope."],
    ["Can a bathroom refit need Building Regulations approval?", "Yes, depending on the work. Structural, drainage, electrical and ventilation changes can bring Building Regulations requirements even where the cosmetic refit itself is straightforward."],
    ["What should I include in the job description?", "Give room dimensions, photos, the products you plan to use and every fixture or service you want moved. Mention access and whether the room must remain usable during the work."],
    ["Can I post a small shower replacement?", "Yes. Smaller repairs and replacements can be posted as well as complete bathroom renovations."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Reading?",
    copy: "Describe the room, products and service changes once, then compare interested Reading bathroom specialists and their quotes.",
    buttonLabel: "Get Reading bathroom quotes",
  },
});

export const drainageSpecialistsReading = makeReadingProfile("drainage-specialists", {
  heroCopy: "Need help with a blocked drain, recurring smells, slow waste pipes or a drainage fault in Reading? Describe the symptoms and affected fixtures once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Reading?",
    copy: "Enter the postcode and explain which drains, toilets, sinks or outside gullies are affected. Say whether the problem is constant or recurring and whether neighbours are affected too so suitable Reading drainage specialists can judge the likely investigation.",
  },
  localContext: {
    eyebrow: "Reading drainage context",
    title: "Drain condition can be part of both blockage and pest problems",
    intro: "Reading Borough Council's local rat guidance specifically warns that damaged drains and open drainage pipes can give rodents access to buildings. Recurring drainage faults therefore deserve investigation rather than repeated surface-level clearing.",
    items: [
      {
        title: "Reading advises keeping drainage in good repair to reduce rat access",
        text: "The council's rat-prevention guidance says rats can enter through broken pipework and advises keeping drainage in good repair. It also warns that drainage pipes should not be left open during building work. If a blockage or smell keeps returning, tell the drainage specialist about any rodent signs too.",
        source: {
          label: "Reading Borough Council — rat prevention",
          url: "https://www.reading.gov.uk/nuisance-animals-and-pests/pest-control/rat-prevention/",
        },
      },
      {
        title: "Alterations to drainage can fall within Building Regulations",
        text: "Reading Borough Council explains that many building alterations require Building Regulations compliance. If the job goes beyond clearing or repair and involves changing drainage runs as part of an extension, bathroom or kitchen project, confirm the approval and inspection route before work is covered.",
        source: {
          label: "Reading Borough Council — about building control",
          url: "https://www.reading.gov.uk/planning-and-building-control/building-control/about-building-control/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Reading by postcode, fault type and urgency. Example areas include:",
    sideTitle: "Describe every affected outlet",
    sideCopy: "Say whether the issue affects one sink, several fixtures, an outside gully or the whole property. Recurring smells, backing-up toilets and rodent signs can help distinguish a local trap problem from a larger drainage fault.",
    noteLead: "Recurring blockages need a cause, not just a temporary clear.",
    noteText: "Ask whether the quote is for unblocking only or includes CCTV inspection, tracing, repair and any follow-up work if the problem returns.",
  },
  faq: [
    ["How much does drain unblocking cost in Reading?", "The price depends on access, severity, equipment and whether investigation such as CCTV is needed. Ask what the call-out includes and how additional repair work would be priced."],
    ["Can damaged drains attract rats?", "Yes. Reading Borough Council's rat-prevention guidance warns that rats can access homes through broken pipework, so recurring rodent activity can justify checking drainage condition."],
    ["When might I need a CCTV drain survey?", "A survey can be useful when blockages recur, the cause is unclear, structural damage is suspected or you need evidence of the condition before deciding on repairs."],
    ["Can I post an urgent blocked toilet or drain?", "Yes. State that the job is urgent and explain which fixtures are affected and whether wastewater is overflowing or backing up."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Reading?",
    copy: "Describe the blockage or drainage symptoms once, then compare interested Reading drainage specialists and their quotes.",
    buttonLabel: "Get Reading drainage quotes",
  },
});
