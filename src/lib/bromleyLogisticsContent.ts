import { makeBromleyProfile } from "./bromleyProfileBase";

export const removalCompaniesBromley = makeBromleyProfile("removal-companies", {
  heroCopy: "Moving home in Bromley, elsewhere in Greater London or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Bromley?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Bromley removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Bromley moving-day access",
    title: "Restricted parking may need a dispensation or bay suspension before moving day",
    intro: "The London Borough of Bromley has separate processes for parking dispensations and suspensions. That matters when a removal vehicle needs to stay close to a property on a yellow line or in a controlled bay rather than relying on ordinary parking availability.",
    items: [
      {
        title: "Yellow-line dispensations should be requested at least one working day ahead",
        text: "Bromley says a parking dispensation can allow a vehicle to wait on a single or double yellow line where continuous access is needed for loading or unloading, including removals. Applications should be submitted at least one working day before the required start date.",
        source: {
          label: "London Borough of Bromley — parking dispensations and suspensions",
          url: "https://www.bromley.gov.uk/parking/parking-dispensationssuspensions",
        },
      },
      {
        title: "Suspending a restricted bay needs more notice",
        text: "For a parking-bay suspension, Bromley asks for at least three working days' notice. The council also says it cannot grant dispensations for red routes, so any red-route requirement must be checked with Transport for London instead.",
        source: {
          label: "London Borough of Bromley — parking dispensations and suspensions",
          url: "https://www.bromley.gov.uk/parking/parking-dispensationssuspensions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Bromley by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both ends before comparing quotes",
    sideCopy: "A flat near Bromley town centre, a terrace in Beckenham and a larger house around Chislehurst or Bickley can involve different stairs, driveways and vehicle positions. Give the access route from van to door at both addresses.",
    noteLead: "Do not assume the van can wait directly outside.",
    noteText: "If the move depends on a yellow line or controlled bay, check whether a dispensation or suspension is needed and allow the council's notice period.",
  },
  faq: [
    ["How much does a removal company cost in Bromley?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can a removal van park on yellow lines in Bromley?", "Not automatically. Bromley offers parking dispensations in eligible circumstances and asks for at least one working day's notice."],
    ["How far ahead should I request a parking-bay suspension?", "Bromley asks for at least three working days' notice for a parking suspension."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Bromley?",
    copy: "Describe the move, access and parking once, then compare interested Bromley removal companies and their quotes.",
    buttonLabel: "Get Bromley removal quotes",
  },
});

export const cleanersBromley = makeBromleyProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Bromley? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Bromley?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Bromley cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Bromley shared-rental context",
    title: "HMO licensing and planning are separate checks for shared rented homes",
    intro: "Bromley requires mandatory HMO licensing for qualifying larger shared homes, while an Article 4 Direction has removed normal permitted-development rights for creating HMOs since September 2022. For landlord or changeover cleaning, identifying the actual property use helps define the right scope.",
    items: [
      {
        title: "Qualifying HMOs with five or more occupiers need a licence",
        text: "Bromley says an HMO requires a licence where five or more tenants in two or more households share at least one kitchen, bathroom or toilet. For a licensed shared house, give the cleaner the bedroom count, shared facilities and communal areas rather than only the floor area.",
        source: {
          label: "London Borough of Bromley — HMO advice for landlords",
          url: "https://www.bromley.gov.uk/housing-advice-options/houses-multiple-occupation-hmo-advice-landlords",
        },
      },
      {
        title: "Creating an HMO has a separate planning check",
        text: "Bromley states that an Article 4 Direction removing permitted-development rights for HMOs took effect on 1 September 2022. Licensing, planning and Building Control are separate systems, so a cleaning job should not be used as evidence that the property's other approvals are in place.",
        source: {
          label: "London Borough of Bromley — HMO advice for landlords",
          url: "https://www.bromley.gov.uk/housing-advice-options/houses-multiple-occupation-hmo-advice-landlords",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Bromley by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Petts Wood, a family home in Hayes and an HMO changeover elsewhere in the borough need different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Bromley?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["When does an HMO need a licence in Bromley?", "Bromley says mandatory licensing applies to qualifying HMOs occupied by five or more tenants from two or more households who share facilities."],
    ["Does HMO licensing replace planning permission?", "No. Bromley explicitly treats HMO licensing, planning and Building Control as separate requirements."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Bromley?",
    copy: "Describe the property and cleaning checklist once, then compare interested Bromley cleaners and their quotes.",
    buttonLabel: "Get Bromley cleaning quotes",
  },
});
