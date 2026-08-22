import { makeEnfieldProfile } from "./enfieldProfileBase";

export const removalCompaniesEnfield = makeEnfieldProfile("removal-companies", {
  heroCopy: "Moving home in Enfield, elsewhere in Greater London or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Enfield?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Enfield removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Enfield moving-day parking",
    title: "A house move may need a temporary parking dispensation, while reserved road space needs more notice",
    intro: "Moves in Enfield Town, Edmonton, Southgate and other controlled streets can depend on where the removal vehicle can legally wait. Enfield Council has separate routes for temporary dispensations and formal suspensions.",
    items: [
      {
        title: "Moving house is specifically listed for a temporary dispensation",
        text: "Enfield says a temporary parking dispensation may be needed when moving house or carrying out building works. It can allow a vehicle to park for a short period in a restricted area, although it does not guarantee a parking space.",
        source: {
          label: "Enfield Council — parking suspensions and dispensations",
          url: "https://www.enfield.gov.uk/services/parking/parking-suspensions",
        },
      },
      {
        title: "Formal suspensions should be requested at least 10 working days ahead",
        text: "If the move needs parking restrictions or bays formally suspended, Enfield Council asks for applications at least 10 working days before the required date. Check access before fixing the removal timetable.",
        source: {
          label: "Enfield Council — parking suspensions and dispensations",
          url: "https://www.enfield.gov.uk/services/parking/parking-suspensions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Enfield by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A flat near Enfield Town, a terrace in Edmonton and a house in Winchmore Hill can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not leave restricted-street access until moving morning.",
    noteText: "If the van needs a dispensation or reserved road space, arrange it in advance and tell the removal company exactly where the vehicle can legally wait.",
  },
  faq: [
    ["How much does a removal company cost in Enfield?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can a removal van get a temporary parking dispensation in Enfield?", "Yes. Enfield Council specifically lists moving house as a reason a temporary dispensation may be needed."],
    ["How much notice should I allow for an Enfield parking suspension?", "Enfield Council asks for suspension applications at least 10 working days before the date required."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Enfield?",
    copy: "Describe the move, access and parking once, then compare interested Enfield removal companies and their quotes.",
    buttonLabel: "Get Enfield removal quotes",
  },
});

export const cleanersEnfield = makeEnfieldProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Enfield? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Enfield?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Enfield cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Enfield HMO and landlord cleaning",
    title: "Borough-wide HMO licensing and planning controls make the actual occupancy important for landlord cleans",
    intro: "Shared homes can create much larger cleaning briefs than ordinary domestic properties. Enfield now has borough-wide additional HMO licensing as well as a borough-wide Article 4 planning direction for small HMOs.",
    items: [
      {
        title: "Additional HMO licensing has applied borough-wide since September 2025",
        text: "Enfield says its additional HMO licensing scheme applies across the borough to properties occupied by three or four people forming more than one household who share amenities, alongside mandatory licensing for larger HMOs.",
        source: {
          label: "Enfield Council — Houses in multiple occupation",
          url: "https://www.enfield.gov.uk/services/housing/houses-in-multiple-occupation",
        },
      },
      {
        title: "Changing a normal dwelling to a small HMO needs planning permission",
        text: "Enfield has withdrawn the usual permitted-development right for changing a C3 dwellinghouse to a C4 small HMO through a borough-wide Article 4 direction. For landlord work, confirm the property's actual use and occupancy.",
        source: {
          label: "Enfield Council — Article 4 directions",
          url: "https://www.enfield.gov.uk/services/planning/article-4-directions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Enfield by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Southgate, a family home in Palmers Green and an HMO changeover in Edmonton can need very different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Enfield?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Does Enfield have borough-wide additional HMO licensing?", "Yes. Enfield's additional HMO licensing scheme started borough-wide on 1 September 2025."],
    ["Does converting a house to a small HMO need planning permission in Enfield?", "Yes. Enfield has a borough-wide Article 4 direction removing the normal permitted-development right from C3 dwellinghouse to C4 small HMO."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Enfield?",
    copy: "Describe the property and cleaning checklist once, then compare interested Enfield cleaners and their quotes.",
    buttonLabel: "Get Enfield cleaning quotes",
  },
});
