import { makeStockportProfile } from "./stockportProfileBase";

export const removalCompaniesStockport = makeStockportProfile("removal-companies", {
  heroCopy: "Moving home in Stockport, elsewhere in Greater Manchester or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Stockport?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, narrow access, long carries, restricted parking and bulky items so suitable Stockport removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Stockport moving-day access",
    title: "Restricted parking can need council permission before the removal van arrives",
    intro: "Stockport Council offers parking dispensations for situations where a vehicle needs to wait in a restricted place, including domestic removals. If the move relies on a controlled bay or yellow-line position, sort the parking requirement before the moving date rather than leaving it to the crew on arrival.",
    items: [
      {
        title: "Domestic removals are one of the council's stated reasons for a dispensation",
        text: "Stockport lists domestic removals among the special circumstances where a temporary parking dispensation may be considered. The same service can cover suspending parking bays or permission to wait on yellow lines.",
        source: {
          label: "Stockport Council — parking dispensations and suspensions",
          url: "https://www.stockport.gov.uk/parking-dispensations",
        },
      },
      {
        title: "The council says it may take up to 10 working days to respond",
        text: "The online request asks for the vehicle, reason, activity, dates and times required. Stockport says it will respond within 10 working days, so a move that depends on restricted-space access should be planned well in advance.",
        source: {
          label: "Stockport Council — request a parking dispensation",
          url: "https://www.stockport.gov.uk/start/request-a-parking-dispensation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Stockport by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both addresses, not just the number of rooms",
    sideCopy: "A flat near Stockport town centre, a house in Cheadle Hulme and a property around Marple can involve very different stairs, driveways and walking distances from the van. Give the route from vehicle to door at both ends.",
    noteLead: "Do not assume the removal vehicle can wait outside.",
    noteText: "If the job depends on a controlled bay or yellow-line position, check whether a council dispensation is needed and allow enough time for the request to be processed.",
  },
  faq: [
    ["How much does a removal company cost in Stockport?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance can all affect the quote."],
    ["Can I request restricted parking for a house move in Stockport?", "Stockport Council lists domestic removals as one of the circumstances where a parking dispensation may be considered."],
    ["How early should I sort out a parking dispensation?", "Stockport says it will respond to requests within 10 working days, so do not leave a parking-dependent move until the last minute."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Stockport?",
    copy: "Describe the move, access and parking once, then compare interested Stockport removal companies and their quotes.",
    buttonLabel: "Get Stockport removal quotes",
  },
});

export const cleanersStockport = makeStockportProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Stockport? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Stockport?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Stockport cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Stockport shared-rental context",
    title: "Larger shared homes can fall within mandatory HMO licensing",
    intro: "For landlord, communal-area or changeover cleaning, the actual use and room count of the property matter. Stockport's current landlord guidance explains when a shared home falls within mandatory HMO licensing and makes clear that shared kitchens and bathrooms are part of the test.",
    items: [
      {
        title: "Five or more people from two or more households can trigger mandatory licensing",
        text: "Stockport says mandatory HMO licensing applies where five or more people from two or more households occupy the property and at least two households share amenities such as bathrooms or kitchens.",
        source: {
          label: "Stockport Council — information for landlords: houses in multiple occupation",
          url: "https://www.stockport.gov.uk/information-for-landlords/houses-in-multiple-occupation",
        },
      },
      {
        title: "Give cleaners the shared-space detail rather than only the floor area",
        text: "The council's HMO definition specifically refers to shared kitchens and bathrooms. For a changeover or communal clean, list the number of bedrooms, shared facilities, stairs and communal rooms so every cleaner is quoting the same workload.",
        source: {
          label: "Stockport Council — information for landlords: houses in multiple occupation",
          url: "https://www.stockport.gov.uk/information-for-landlords/houses-in-multiple-occupation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Stockport by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Bramhall, a family home in Hazel Grove and a shared-house changeover in Reddish can need very different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Stockport?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["When does an HMO need a licence in Stockport?", "Stockport says mandatory licensing applies where five or more people from two or more households occupy the property and at least two households share amenities such as a kitchen or bathroom."],
    ["Should I list communal areas for an HMO clean?", "Yes. Give the cleaner the bedrooms, shared kitchens and bathrooms, stairs and other communal spaces so the quote reflects the actual job."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Stockport?",
    copy: "Describe the property and cleaning checklist once, then compare interested Stockport cleaners and their quotes.",
    buttonLabel: "Get Stockport cleaning quotes",
  },
});
