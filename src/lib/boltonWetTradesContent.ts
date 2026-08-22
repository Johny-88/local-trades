import { makeBoltonProfile } from "./boltonProfileBase";

export const bathroomSpecialistsBolton = makeBoltonProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom, shower room or wet-room project in Bolton? Describe the room, fittings, layout and required finish once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Bolton?",
    copy: "Enter the postcode, room size and what is being replaced or moved. Mention sanitaryware, shower type, tiling, flooring, ventilation, electrics, plumbing and any damp or drainage problems so suitable Bolton bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Bolton bathroom and housing standards",
    title: "Ventilation, drainage and damp problems should be treated as part of the job, not hidden behind new finishes",
    intro: "Bolton Council's housing guidance links bathrooms to ventilation, working drainage and damp prevention. A bathroom refit should therefore identify leaks, damaged seals, poor extraction and drainage problems before new tiles and fittings cover them up.",
    items: [
      {
        title: "Rented bathrooms are expected to have mechanical extraction and working sanitation",
        text: "Bolton Council's private-landlord standards say kitchens and bathrooms require mechanical extraction and that baths, basins, WCs, water supplies and drainage should be in working order. Those are useful baseline checks for any refurbishment scope.",
        source: {
          label: "Bolton Council — private landlord property standards",
          url: "https://www.bolton.gov.uk/private-rented-owner-occupied-housing/private-landlords/2",
        },
      },
      {
        title: "Damaged grout, sealant and plumbing can contribute to penetrating damp",
        text: "Bolton's damp-and-mould guidance lists leaking pipework and damaged areas around sinks, showers and baths, including cracked grouting or worn sealant, as possible causes of penetrating damp. Repair the water source before cosmetic finishes are renewed.",
        source: {
          label: "Bolton Council — damp and mould",
          url: "https://www.bolton.gov.uk/private-rented-owner-occupied-housing/housing-standards/2",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Bolton by postcode, room size and project scope. Example areas include:",
    sideTitle: "Say what is moving, not just what is being replaced",
    sideCopy: "A like-for-like suite in Farnworth, a walk-in shower in Heaton and a full wet-room conversion in Horwich involve different drainage, waterproofing and electrical work. Mark where existing waste pipes, windows and extractors are located.",
    noteLead: "Do not tile over an unresolved damp source.",
    noteText: "Leaks, cracked seals, failed grout, poor extraction and slow drainage should be investigated before the final finishes go in.",
  },
  faq: [
    ["How much does a bathroom fitter cost in Bolton?", "Cost depends on room size, sanitaryware, layout changes, tiling, waterproofing, plumbing, electrics and whether old fittings and waste are removed."],
    ["Do bathrooms in rented homes need extraction?", "Bolton Council's landlord standards say kitchens and bathrooms require mechanical extraction."],
    ["Can damaged grout or sealant cause damp?", "Bolton's damp guidance lists cracked grouting and worn sealant around showers, baths and sinks among possible routes for penetrating damp."],
    ["Should I mention a slow drain before the refit?", "Yes. Drainage problems are easier to diagnose before new floors, trays and finishes make pipework harder to access."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Bolton?",
    copy: "Describe the room, fittings, services and existing problems once, then compare interested Bolton bathroom specialists and their quotes.",
    buttonLabel: "Get Bolton bathroom quotes",
  },
});

export const drainageSpecialistsBolton = makeBoltonProfile("drainage-specialists", {
  heroCopy: "Need a drainage specialist in Bolton for a blockage, damaged drain, recurring smell or survey? Describe the symptoms and affected fixtures once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Bolton?",
    copy: "Enter the postcode, symptoms, affected sinks, toilets, gullies or external drains and how long the problem has existed. Mention previous clearing attempts, flooding and whether neighbours are affected so suitable Bolton drainage specialists can diagnose the likely section.",
  },
  localContext: {
    eyebrow: "Bolton drainage responsibilities",
    title: "Responsibility can change depending on whether the problem is on the property drain or the public sewer",
    intro: "Bolton Council distinguishes drainage problems belonging to the property from problems with the public sewer network. That makes diagnosis important before paying for excavation or repeated jetting in the wrong section.",
    items: [
      {
        title: "Property drainage is normally the owner's or landlord's responsibility",
        text: "Bolton Council says problems with drainage from a property are the responsibility of the homeowner, landlord or housing association. The council also offers services such as blockage clearance, CCTV surveys and drain repairs subject to availability.",
        source: {
          label: "Bolton Council — property drainage",
          url: "https://www.bolton.gov.uk/private-rented-owner-occupied-housing/property-drainage",
        },
      },
      {
        title: "Public sewer problems are the responsibility of United Utilities",
        text: "The same Bolton Council guidance says problems with sewers are the responsibility of United Utilities. If several properties or the public sewer appear affected, establish ownership before commissioning private repair work.",
        source: {
          label: "Bolton Council — property drainage",
          url: "https://www.bolton.gov.uk/private-rented-owner-occupied-housing/property-drainage",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Bolton by postcode, symptom and urgency. Example areas include:",
    sideTitle: "Describe which fixtures fail together",
    sideCopy: "A single slow sink in Kearsley, repeated toilet backing-up in Little Lever and external flooding in Westhoughton point to different parts of the system. Say whether the problem is isolated, affects the whole property or appears to involve neighbours too.",
    noteLead: "Repeated clearing without diagnosis can waste money.",
    noteText: "For recurring blockages or suspected damage, ask whether a CCTV survey is appropriate and who owns the affected section before excavation is proposed.",
  },
  faq: [
    ["How much does a drainage specialist cost in Bolton?", "Price depends on access, blockage severity, jetting, CCTV work, excavation, pipe repairs and whether the problem is private drainage or a public sewer."],
    ["Who is responsible for drains on my property in Bolton?", "Bolton Council says property drainage problems are normally the responsibility of the homeowner, landlord or housing association."],
    ["Who deals with public sewer problems?", "Bolton Council says sewer problems are the responsibility of United Utilities."],
    ["When is a CCTV drain survey useful?", "It can help with recurring blockages, suspected damage, root ingress or uncertainty about where a defect is located."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Bolton?",
    copy: "Describe the symptoms, affected fixtures and history once, then compare interested Bolton drainage specialists and their quotes.",
    buttonLabel: "Get Bolton drainage quotes",
  },
});
