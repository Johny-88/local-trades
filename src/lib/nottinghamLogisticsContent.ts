import { makeNottinghamProfile } from "./nottinghamProfileBase";

export const removalCompaniesNottingham = makeNottinghamProfile("removal-companies", {
  heroCopy: "Moving home within Nottingham, across Nottinghamshire or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Nottingham?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, loading bays, long carries and any bulky items so suitable Nottingham removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Nottingham moving-day context",
    title: "Loading restrictions and dense shared-housing areas can change the practical move plan",
    intro: "Nottingham City Council actively enforces yellow lines, resident bays, loading restrictions and designated parking places. In neighbourhoods with high concentrations of rented and shared homes, move-in and move-out dates can also create tighter access and parking conditions.",
    items: [
      {
        title: "Loading is not a blanket exemption from Nottingham parking controls",
        text: "Nottingham's parking enforcement policy says genuine loading or unloading must be continuous and no longer than necessary, with specific restrictions still applying in controlled locations. If a move needs prolonged occupation of a bay, loading area or restricted street, confirm the parking arrangement before moving day rather than assuming the van can simply wait outside.",
        source: {
          label: "Nottingham City Council — Parking Enforcement Policy",
          url: "https://www.nottinghamcity.gov.uk/media/a1rjv5mz/parking-enforcement-policy.pdf",
        },
      },
      {
        title: "Nottingham has citywide planning controls over new HMOs",
        text: "The citywide HMO Article 4 Direction means family homes cannot simply change to small HMOs under normal permitted-development rights. For removals involving shared rentals in areas such as Lenton or Radford, give the actual property type, number of occupiers, access and tenancy handover timing so the removal company can price the real move rather than a generic house move.",
        source: {
          label: "Nottingham City Council — HMO Article 4 direction",
          url: "https://www.nottinghamcity.gov.uk/hmopermitteddevelopment",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Nottingham by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the actual route from van to property",
    sideCopy: "A flat in The Park, a shared house in Lenton and a family property in Wollaton can involve very different stairs, parking, loading distances and access times. Give those details for both ends of the move.",
    noteLead: "Check controlled parking early.",
    noteText: "If the van needs a resident bay, loading bay or other restricted space for longer than ordinary loading allows, establish the correct arrangement before the move date.",
  },
  faq: [
    ["How much does a removal company cost in Nottingham?", "There is no single Nottingham rate. Volume, distance, crew size, stairs, parking, packing, storage and access all affect the quote."],
    ["Can parking restrictions affect a Nottingham house move?", "Yes. Resident bays, yellow lines, loading restrictions and other controls can affect where and how long the van can stop, so give the company the exact address and access conditions."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["Should I mention if the move is from shared student accommodation?", "Yes. Shared houses can involve multiple bedrooms, separate belongings, tighter streets and fixed tenancy dates, all of which can affect crew size and timing."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Nottingham?",
    copy: "Describe the move, access and parking once, then compare interested Nottingham removal companies and their quotes.",
    buttonLabel: "Get Nottingham removal quotes",
  },
});

export const cleanersNottingham = makeNottinghamProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Nottingham? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Nottingham?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows, post-build dust or rubbish removal so suitable Nottingham cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Nottingham rental and HMO context",
    title: "Nottingham has unusually broad property-licensing and HMO planning controls",
    intro: "The city operates mandatory, additional and selective landlord-licensing schemes, while a citywide Article 4 Direction controls conversion of family homes to small HMOs. Those rules do not require a professional cleaner, but they make property type and handover purpose useful context for landlord and agent cleaning jobs.",
    items: [
      {
        title: "Many Nottingham HMOs need a licence even below the national mandatory threshold",
        text: "Mandatory HMO licensing applies to five or more occupiers forming two or more households, while Nottingham's Additional Licensing can cover smaller HMOs with three or more people from two or more households in relevant areas. For a communal or end-of-tenancy clean, state whether the property is a family rental, HMO or self-contained flat and whether the job is routine cleaning or a complete turnover.",
        source: {
          label: "Nottingham City Council — landlord licensing schemes",
          url: "https://www.nottinghamcity.gov.uk/housinglicensing",
        },
      },
      {
        title: "HMO change of use is also controlled citywide",
        text: "Nottingham's Article 4 Direction requires planning permission to convert a family dwelling to a C4 HMO for three to six unrelated people. If cleaning is linked to a refurbishment, conversion or landlord handover, do not assume licensing and planning are the same issue; they are separate requirements.",
        source: {
          label: "Nottingham City Council — restrictions on HMO permitted development",
          url: "https://www.nottinghamcity.gov.uk/hmopermitteddevelopment",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Nottingham by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count and actual condition",
    sideCopy: "A shared house in Lenton or Radford, a flat in The Park and a family home in Wollaton can need very different cleaning times. State bedrooms, bathrooms, condition and specialist tasks.",
    noteLead: "Separate routine cleaning from turnover work.",
    noteText: "Ovens, carpets, internal windows, post-build dust, heavy build-up and rubbish removal are often priced separately from an ordinary recurring clean.",
  },
  faq: [
    ["How much does a cleaner cost in Nottingham?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, property condition and any landlord or agent checklist so cleaners quote for the same standard."],
    ["Does every Nottingham HMO need the same licence?", "No. Mandatory and Additional Licensing cover different property and occupancy situations, and Selective Licensing applies to other private rented homes in designated areas."],
    ["Does HMO licensing mean I must use a professional cleaner?", "No. Licensing regulates the property and its management; it does not create a general requirement to hire a professional cleaning company."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Nottingham?",
    copy: "Describe the property and cleaning checklist once, then compare interested Nottingham cleaners and their quotes.",
    buttonLabel: "Get Nottingham cleaning quotes",
  },
});
