import { makeDudleyProfile } from "./dudleyProfileBase";

export const removalCompaniesDudley = makeDudleyProfile("removal-companies", {
  heroCopy: "Moving home in Dudley, elsewhere in the West Midlands or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Dudley?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Dudley removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Dudley moving-day parking",
    title: "Restricted-street access may need a parking dispensation before the removal van arrives",
    intro: "Dudley Council can issue parking dispensations where a vehicle genuinely needs to remain in an enforced area longer than normal. If the move depends on loading close to the property, sort that access before agreeing the final arrival plan.",
    items: [
      {
        title: "Dudley dispensations are for necessary restricted parking",
        text: "The council says dispensations may be issued where it is absolutely necessary for a vehicle to park longer than permitted or in a restricted area, including for building works and essential renovations where the vehicle must remain close to the site.",
        source: {
          label: "Dudley Council — parking dispensations",
          url: "https://www.dudley.gov.uk/residents/parking-and-roads/parking-in-dudley/parking-dispensations/",
        },
      },
      {
        title: "Allow processing time before moving day",
        text: "Dudley's Parking Management Unit says it aims to process completed dispensation applications within two working days. The vehicle must continue to follow normal parking rules until the permit has actually been received.",
        source: {
          label: "Dudley Council — parking dispensations",
          url: "https://www.dudley.gov.uk/residents/parking-and-roads/parking-in-dudley/parking-dispensations/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Dudley by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A town-centre flat in Dudley, a house in Sedgley and a terrace in Netherton can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not assume a restricted street will be available for loading.",
    noteText: "If the removal vehicle needs a dispensation, confirm it before moving day and tell the company exactly where the vehicle can legally stop and how far the carry will be.",
  },
  faq: [
    ["How much does a removal company cost in Dudley?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can I get a parking dispensation for a removal van in Dudley?", "Potentially, where restricted parking is genuinely necessary. Dudley Council assesses applications and the permit must be received before the vehicle uses the restriction."],
    ["How quickly does Dudley process parking-dispensation applications?", "The council says it aims to process completed applications within two working days, so allow time for approval before moving day."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Dudley?",
    copy: "Describe the move, access and parking once, then compare interested Dudley removal companies and their quotes.",
    buttonLabel: "Get Dudley removal quotes",
  },
});

export const cleanersDudley = makeDudleyProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Dudley? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Dudley?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Dudley cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Dudley HMO cleaning context",
    title: "Shared rented homes can have a very different cleaning scope from an ordinary domestic visit",
    intro: "Dudley licenses larger houses in multiple occupation, so landlord and changeover cleaning jobs should describe the actual occupancy and shared facilities rather than only the floor area or bedroom count.",
    items: [
      {
        title: "HMOs with five or more occupiers require licensing",
        text: "Dudley Council says HMOs occupied by five or more people must be licensed by the local authority. For cleaning quotes, identify shared kitchens, bathrooms, hallways and other communal areas so every cleaner prices the same job.",
        source: {
          label: "Dudley Council — private landlords and HMOs",
          url: "https://dudley.gov.uk/residents/housing/housing-options/private-housing/private-landlords/",
        },
      },
      {
        title: "Licensed HMOs are subject to local property and management standards",
        text: "The council publishes HMO property and management standards alongside its licensing information. For an HMO handover or communal clean, the cleaning brief should separate ordinary housekeeping from defects, repairs or management issues that need a landlord or another trade.",
        source: {
          label: "Dudley Council — private housing",
          url: "https://www.dudley.gov.uk/residents/housing/housing-options/private-sector-housing-enforcement/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Dudley by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and the standard required",
    sideCopy: "A weekly clean in Woodsetton, a family home in Sedgley and an HMO changeover nearer Dudley town centre need different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover or clearance job.",
    noteText: "Ovens, carpets, post-build dust, internal windows and rubbish removal are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Dudley?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["When does an HMO need a licence in Dudley?", "Dudley Council says HMOs with five or more people must be licensed by the local authority."],
    ["Should I list shared rooms on an HMO cleaning job?", "Yes. Shared kitchens, bathrooms, hallways and communal areas can materially change the cleaning time and should be stated before quotes are compared."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Dudley?",
    copy: "Describe the property and cleaning checklist once, then compare interested Dudley cleaners and their quotes.",
    buttonLabel: "Get Dudley cleaning quotes",
  },
});
