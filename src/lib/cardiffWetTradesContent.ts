import { makeCardiffProfile } from "./cardiffProfileBase";

export const bathroomSpecialistsCardiff = makeCardiffProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower room or accessible bathroom in Cardiff? Describe the room, layout, plumbing and finish once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Cardiff?",
    copy: "Enter the postcode and explain whether you need a complete refit, shower conversion, new suite, tiling, ventilation, electrics or drainage changes. Add room dimensions and photos so suitable Cardiff bathroom specialists can compare the same scope.",
  },
  localContext: {
    eyebrow: "Cardiff bathroom and Building Regulations context",
    title: "Bathroom alterations can involve controlled fittings, drainage, ventilation and electrical work",
    intro: "Cardiff Building Control specifically lists installing a WC and alterations to controlled services or fittings among work that can require Building Regulations approval. A complete bathroom project should therefore separate decorative finish from regulated plumbing, drainage, ventilation and electrical elements.",
    items: [
      {
        title: "Installing or altering controlled fittings can require approval",
        text: "Cardiff Council says Building Regulations approval is required for work such as materially altering a building or extending or altering a controlled service or fitting, giving installation of a WC as an example. If a bathroom layout is being moved rather than simply replaced like-for-like, establish the approval route before closing walls and floors.",
        source: {
          label: "Cardiff Council — when Building Regulations approval is needed",
          url: "https://www.cardiff.gov.uk/doineedbuildingregapproval",
        },
      },
      {
        title: "Cardiff Building Control inspects drains during regulated work",
        text: "Cardiff Council's approval process lists drains laid, drains covered and back-filled ready for testing among the inspection stages that can apply to building work. For bathroom projects involving new drainage runs, ask who is coordinating inspection and completion evidence.",
        source: {
          label: "Cardiff Council — apply for Building Regulations approval",
          url: "https://www.cardiff.gov.uk/buildingregulationsapproval",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Cardiff by postcode, room type and project size. Example areas include:",
    sideTitle: "Describe what is moving, not just what is being replaced",
    sideCopy: "A like-for-like suite swap is different from relocating a WC, creating a wet room or moving drainage through a floor. Mark the existing and proposed positions where possible.",
    noteLead: "Waterproofing and ventilation belong in the scope.",
    noteText: "Ask how tanking, extraction, pipework, electrical zones, floor preparation and testing are handled rather than comparing only the visible suite and tiles.",
  },
  faq: [
    ["How much does a bathroom refit cost in Cardiff?", "Cost depends on room size, suite choice, tiling, plumbing changes, electrics, ventilation and preparation. Compare quotes against the same specification."],
    ["Will moving a toilet need Building Regulations approval?", "It can. Cardiff Council lists installing a WC and altering controlled fittings among work that can require approval."],
    ["Does drainage get inspected?", "For regulated work, Cardiff Building Control can inspect drains before they are covered and may witness testing."],
    ["Can I post a small shower replacement?", "Yes. Small repairs and replacements can be posted alongside complete bathroom and wet-room projects."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Cardiff?",
    copy: "Describe the room, layout and finish once, then compare interested Cardiff bathroom specialists and their quotes.",
    buttonLabel: "Get Cardiff bathroom quotes",
  },
});

export const drainageSpecialistsCardiff = makeCardiffProfile("drainage-specialists", {
  heroCopy: "Dealing with a blocked drain, recurring flooding, damaged pipe or drainage investigation in Cardiff? Describe the symptoms and location once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Cardiff?",
    copy: "Enter the postcode and describe slow drainage, backing-up, smells, flooding, manhole levels or recurring blockages. Mention whether neighbours are affected and where the problem appears so suitable Cardiff drainage specialists can judge whether the issue is likely private, public or surface-water related.",
  },
  localContext: {
    eyebrow: "Cardiff drainage and flood-responsibility context",
    title: "Cardiff drainage responsibility is split between the homeowner, Welsh Water, the council and Natural Resources Wales",
    intro: "Cardiff Council and Dŵr Cymru Welsh Water distinguish private drains, public sewers, highway drainage and river or surface-water flooding. Correctly identifying who owns the affected asset can avoid paying a contractor to investigate infrastructure that belongs to another body.",
    items: [
      {
        title: "Private pipes inside the property boundary are normally the owner's responsibility",
        text: "Dŵr Cymru Welsh Water says pipes serving only your property and lying within your home or property boundary are generally your responsibility, while pipes outside the boundary and shared sewers are probably Welsh Water's. If neighbours have the same blockage, check ownership before commissioning extensive private work.",
        source: {
          label: "Dŵr Cymru Welsh Water — sewer responsibilities",
          url: "https://www.dwrcymru.com/en/help-advice/sewer-responsibilities",
        },
      },
      {
        title: "Cardiff separates sewer, highway and river flooding reports",
        text: "Cardiff Council directs sewer and water-main problems to Welsh Water, surface-water and road-drain issues to the council, and river or sea flooding to Natural Resources Wales. When posting a drainage job, describe exactly where the water is appearing and whether the problem is inside the boundary, in the highway or associated with a watercourse.",
        source: {
          label: "Cardiff Council — flooding responsibilities",
          url: "https://www.cardiff.gov.uk/flooding",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Cardiff by postcode, fault type and access. Example areas include:",
    sideTitle: "Work out whether the problem is private or shared",
    sideCopy: "One slow sink, a private manhole backing up and several neighbouring properties flooding point to very different responsibilities. Note which fixtures and properties are affected before booking work.",
    noteLead: "Recurring blockages deserve diagnosis, not endless clearing.",
    noteText: "Ask whether CCTV, root ingress, collapsed pipework, misconnection or a public-sewer problem could explain repeat failures and what evidence will be provided after investigation.",
  },
  faq: [
    ["How much does drainage work cost in Cardiff?", "Cost depends on access, blockage severity, CCTV, jetting, excavation, pipe repairs and whether the affected asset is private or belongs to Welsh Water or the council."],
    ["Who owns the drain outside my Cardiff home?", "It depends. Dŵr Cymru says pipes serving only your home within the boundary are generally private, while shared pipes and pipes outside the boundary are often its responsibility."],
    ["Who handles a blocked road drain?", "Cardiff Council handles highway drainage and road-gully issues."],
    ["Who handles a public sewer blockage?", "Dŵr Cymru Welsh Water should be contacted where the problem is on its public sewer network."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Cardiff?",
    copy: "Describe the blockage, flooding or pipe problem once, then compare interested Cardiff drainage specialists and their quotes.",
    buttonLabel: "Get Cardiff drainage quotes",
  },
});
