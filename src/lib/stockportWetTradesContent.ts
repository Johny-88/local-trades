import { makeStockportProfile } from "./stockportProfileBase";

export const bathroomSpecialistsStockport = makeStockportProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit in Stockport? Describe the room, sanitaryware, tiling, plumbing, ventilation and electrical work once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Stockport?",
    copy: "Enter the postcode, bathroom size and whether the layout is changing. Mention showers, baths, toilets, concealed pipework, tanking, extraction, electrics, flooring and wall finishes so suitable Stockport bathroom specialists can quote the same project.",
  },
  localContext: {
    eyebrow: "Stockport bathroom project checks",
    title: "Bathroom work can combine plumbing, electrical and Building Regulations requirements",
    intro: "A bathroom refit is rarely just a set of new fittings. Layout changes, electrical work and internal alterations can bring different compliance requirements, so agree who is responsible for each element before the old bathroom is removed.",
    items: [
      {
        title: "Part P applies to domestic electrical work",
        text: "Stockport Building Control explains that Part P electrical safety applies to domestic electrical installations. Where the project includes lighting, fans, showers, heated floors or other electrical work, ask how the work will be carried out and certified.",
        source: {
          label: "Stockport Council — building notice for electrical work",
          url: "https://www.stockport.gov.uk/building-regs-application-process/building-notice-for-electrical-work",
        },
      },
      {
        title: "Internal alterations may require a Building Regulations route",
        text: "Stockport's Building Control schedule includes internal and structural alterations. If the bathroom job changes walls, openings or structure, establish the approval position before finishes conceal the work.",
        source: {
          label: "Stockport Council — Building Control fees: Section B",
          url: "https://www.stockport.gov.uk/building-control-fees/section-b",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Stockport by postcode, project size and installation scope. Example areas include:",
    sideTitle: "Describe the hidden work, not only the visible fittings",
    sideCopy: "A shower replacement in Cheadle Hulme, a full family bathroom in Hazel Grove and a layout change in Bramhall can involve very different plumbing and preparation. State whether pipework, waste runs, electrics or walls are moving.",
    noteLead: "Waterproofing and ventilation matter as much as the final tiles.",
    noteText: "Ask what tanking or waterproofing system is included, how extraction will be handled and who is responsible for electrical certification and any Building Regulations requirements.",
  },
  faq: [
    ["How much does a bathroom fitter cost in Stockport?", "Cost depends on room size, layout changes, sanitaryware, tiling, plumbing, electrics and preparation. Compare quotes using the same detailed scope."],
    ["Does bathroom electrical work need special attention?", "Yes. Stockport's guidance confirms Part P applies to domestic electrical installations, so ask how electrical work will be carried out and certified."],
    ["Can moving bathroom walls affect Building Regulations?", "It can. Stockport's Building Control schedule includes internal and structural alterations."],
    ["Should I include waterproofing in the quote request?", "Yes. State whether you need tanking or another waterproofing system, especially for showers and wet areas."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Stockport?",
    copy: "Describe the bathroom and full installation scope once, then compare interested Stockport bathroom specialists and their quotes.",
    buttonLabel: "Get Stockport bathroom quotes",
  },
});

export const drainageSpecialistsStockport = makeStockportProfile("drainage-specialists", {
  heroCopy: "Dealing with a blocked drain, recurring backup, damaged pipe or unexplained flooding in Stockport? Describe the symptoms and affected area once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Stockport?",
    copy: "Enter the postcode, whether the problem affects sinks, toilets, external gullies or the garden, and how long it has been happening. Mention sewage smells, slow drainage, repeated blockages, subsidence or flooding so suitable Stockport drainage specialists can plan the right investigation.",
  },
  localContext: {
    eyebrow: "Stockport drainage responsibility",
    title: "Work out whether the problem is private drainage, a public sewer or highway drainage",
    intro: "Stockport Council distinguishes between private drains, public sewers and highway drainage. That matters because the responsible party changes depending on where the defect sits, and excavation should not be the first step before the source is understood.",
    items: [
      {
        title: "Property owners are responsible for private drains",
        text: "Stockport says the property owner is responsible for clearing blockages and repairing private drains. If a specialist is needed, the council advises contacting a drainage contractor or plumber; defective public sewers should be reported to United Utilities.",
        source: {
          label: "Stockport Council — private property drains and sewers",
          url: "https://www.stockport.gov.uk/private-property-drains-and-sewers",
        },
      },
      {
        title: "Flooding can have several different owners and causes",
        text: "Stockport records flood reports and may investigate wider issues, but it states that owners are responsible for flooding caused by their own pipes, gutters and drains while United Utilities is responsible for public sewers. Identify the source before authorising repair work.",
        source: {
          label: "Stockport Council — report a flood: homes and businesses",
          url: "https://www.stockport.gov.uk/report-a-flood/homes-and-businesses",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Stockport by postcode, fault type and urgency. Example areas include:",
    sideTitle: "Ask for diagnosis before excavation",
    sideCopy: "A blocked kitchen run in Reddish, recurring garden flooding in Marple and foul-water backup in Stockport town centre may involve completely different systems. Give the specialist the affected fixtures, inspection points and any previous repair history.",
    noteLead: "A CCTV survey can be more useful than repeated unblocking when the problem keeps returning.",
    noteText: "For recurring faults, ask whether the quote covers jetting, camera inspection, tracing, written findings and repair options rather than only a temporary clearance.",
  },
  faq: [
    ["How much does a drainage specialist cost in Stockport?", "Cost depends on access, blockage severity, camera work, jetting, excavation and repair. Ask whether diagnosis and any follow-up repair are priced separately."],
    ["Who is responsible for a private blocked drain in Stockport?", "Stockport Council says responsibility for clearing and repairing private drains lies with the property owner."],
    ["Who deals with a defective public sewer?", "Stockport directs property owners to United Utilities for defective public sewers."],
    ["Should I request CCTV for a recurring blockage?", "It can be useful where the same blockage returns, because a camera survey may identify collapse, roots, displaced joints or another underlying defect."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Stockport?",
    copy: "Describe the symptoms and affected drainage once, then compare interested Stockport drainage specialists and their quotes.",
    buttonLabel: "Get Stockport drainage quotes",
  },
});
