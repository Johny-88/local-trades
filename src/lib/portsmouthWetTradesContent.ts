import { makePortsmouthProfile } from "./portsmouthProfileBase";

export const bathroomSpecialistsPortsmouth = makePortsmouthProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower-room upgrade or accessibility improvement in Portsmouth? Describe the room, products and service changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Portsmouth?",
    copy: "Enter the postcode, room dimensions and what you want changed. Mention plumbing moves, electrics, ventilation, tiling, underfloor heating or structural work so suitable Portsmouth bathroom specialists can judge the complete project.",
  },
  localContext: {
    eyebrow: "Portsmouth bathroom-refit context",
    title: "A bathroom refit can combine several controlled trades, and strip-out waste needs its own plan",
    intro: "Portsmouth Building Control covers ventilation, electrical safety, heating, damp-proofing and other construction standards. The council's household bulky collection also specifically excludes sanitary ware and building waste, so disposal should be agreed before strip-out.",
    items: [
      {
        title: "The wider bathroom project can fall within Building Regulations",
        text: "Portsmouth City Council says Building Regulations cover construction matters including damp-proofing, ventilation, heating, electrical safety and accessibility. A simple like-for-like replacement is different from a refit that moves services or changes controlled work, so establish who is responsible for compliance and certification.",
        source: {
          label: "Portsmouth City Council — building regulations",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/buildings/help-and-advice-on-building-regulations/",
        },
      },
      {
        title: "Council bulky collections do not take sanitary ware or building waste",
        text: "Portsmouth City Council excludes ceramic sanitary ware such as sinks, pedestals, bidets and toilet cisterns, along with rubble, tiles, plasterboard and other building waste, from its bulky collection service. Ask the bathroom specialist how the old suite and renovation debris will be removed and whether disposal is included.",
        source: {
          label: "Portsmouth City Council — bulky waste collection",
          url: "https://www.portsmouth.gov.uk/services/recycling-and-rubbish/special-waste-collection/bulky-waste/book-bulky-waste-collection/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Portsmouth by postcode, project size and required trades. Example areas include:",
    sideTitle: "Share the room layout and every service move",
    sideCopy: "A like-for-like suite replacement is different from moving a shower, toilet or radiator. Include dimensions, photos and whether plumbing, electrics, ventilation and tiling are changing.",
    noteLead: "Ask for one complete scope.",
    noteText: "Confirm who coordinates plumbing, electrics, tiling, plastering, ventilation, decorating and waste so the quote does not leave hidden gaps.",
  },
  faq: [
    ["How much does a bathroom refit cost in Portsmouth?", "The price depends on room size, products, layout changes, preparation and how many trades are involved. Compare quotes against the same product and installation scope."],
    ["Can a bathroom refit need Building Regulations approval?", "Yes, depending on the work. Structural, electrical, ventilation and other controlled changes can bring Building Regulations requirements even where the cosmetic refit itself is straightforward."],
    ["Who disposes of the old bath, basin or toilet?", "Agree this before work starts. Portsmouth's council bulky collection excludes ceramic sanitary ware and building waste, so a contractor needs an appropriate disposal route if removal is included."],
    ["Can I post a small shower replacement?", "Yes. Smaller repairs and replacements can be posted as well as complete bathroom renovations."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Portsmouth?",
    copy: "Describe the room, products and service changes once, then compare interested Portsmouth bathroom specialists and their quotes.",
    buttonLabel: "Get Portsmouth bathroom quotes",
  },
});

export const drainageSpecialistsPortsmouth = makePortsmouthProfile("drainage-specialists", {
  heroCopy: "Need help with a blocked drain, recurring smells, slow waste pipes or a drainage fault in Portsmouth? Describe the symptoms and affected fixtures once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Portsmouth?",
    copy: "Enter the postcode and explain which drains, toilets, sinks or outside gullies are affected. Say whether the problem is constant or recurring and whether neighbours are affected too so suitable Portsmouth drainage specialists can judge the likely investigation.",
  },
  localContext: {
    eyebrow: "Portsmouth drainage context",
    title: "Recurring drainage faults can also create pest-entry problems, and larger alterations can involve Building Control",
    intro: "Portsmouth's rat guidance identifies old and defective drainage as a route into buildings. For projects that alter drainage rather than simply clear a blockage, the Building Control and sewer position should also be checked before work is covered up.",
    items: [
      {
        title: "Old or defective drainage can give rats access to buildings",
        text: "Portsmouth City Council says rats can gain access through old drainage systems as well as damaged airbricks and gaps around pipes. If blockages, smells or rodent signs keep returning, tell the drainage specialist about all of the symptoms so the underlying route can be investigated rather than repeatedly treating the surface problem.",
        source: {
          label: "Portsmouth City Council — rats",
          url: "https://www.portsmouth.gov.uk/services/environmental-health/pest-control/rats/",
        },
      },
      {
        title: "Building work over a critical sewer has a specific Portsmouth Building Control restriction",
        text: "Portsmouth City Council says a Building Notice cannot be used for an extension built over a critical sewer shown on Southern Water sewer maps. If drainage work is part of an extension or substantial alteration, establish the sewer position and approval route before excavation or construction begins.",
        source: {
          label: "Portsmouth City Council — submitting a Building Notice application",
          url: "https://www.portsmouth.gov.uk/services/development-and-planning/buildings/submitting-a-building-notice-application/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Portsmouth by postcode, fault type and urgency. Example areas include:",
    sideTitle: "Describe every affected outlet",
    sideCopy: "Say whether the issue affects one sink, several fixtures, an outside gully or the whole property. Recurring smells, backing-up toilets and rodent signs can help distinguish a local trap problem from a larger drainage fault.",
    noteLead: "Recurring blockages need a cause, not just a temporary clear.",
    noteText: "Ask whether the quote is for unblocking only or includes CCTV inspection, tracing, repair and any follow-up work if the problem returns.",
  },
  faq: [
    ["How much does drain unblocking cost in Portsmouth?", "The price depends on access, severity, equipment and whether investigation such as CCTV is needed. Ask what the call-out includes and how additional repair work would be priced."],
    ["Can damaged drains contribute to rat problems?", "Yes. Portsmouth City Council identifies old drainage systems and pipework gaps as routes rats can use to enter buildings."],
    ["When might I need a CCTV drain survey?", "A survey can be useful when blockages recur, the cause is unclear, structural damage is suspected or you need evidence of the condition before deciding on repairs."],
    ["Can I post an urgent blocked toilet or drain?", "Yes. State that the job is urgent and explain which fixtures are affected and whether wastewater is overflowing or backing up."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Portsmouth?",
    copy: "Describe the blockage or drainage symptoms once, then compare interested Portsmouth drainage specialists and their quotes.",
    buttonLabel: "Get Portsmouth drainage quotes",
  },
});
