import { makeWolverhamptonProfile } from "./wolverhamptonProfileBase";

export const removalCompaniesWolverhampton = makeWolverhamptonProfile("removal-companies", {
  heroCopy: "Moving home in Wolverhampton or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Wolverhampton?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, restricted parking, long carries and bulky items so suitable Wolverhampton removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Wolverhampton moving-day context",
    title: "Parking arrangements and lawful disposal can materially change a moving-day plan",
    intro: "Wolverhampton provides both parking dispensations and temporary bay closures, so a move on a controlled street can need more planning than simply arriving with a van. If the move also includes clearance, trade waste must go through an appropriate licensed route.",
    items: [
      {
        title: "Temporary bay closures are available where a move needs protected kerb space",
        text: "City of Wolverhampton Council has a temporary bay-closure process that asks for the location, number of bays, reason, dates, times and vehicle registrations. If a removal van needs dependable access on a controlled street, arrange the parking position before moving day rather than relying on an empty bay being available.",
        source: {
          label: "City of Wolverhampton Council — temporary bay closure application",
          url: "https://www.wolverhampton.gov.uk/parking-and-roads/temporary-bay-closure-application-form",
        },
      },
      {
        title: "Clearance waste from paid work is not ordinary household tip waste",
        text: "The council states that trade waste should be disposed of through an appropriately licensed contractor or licensed transfer station or landfill. If a removal includes unwanted furniture or other clearance, confirm who is taking responsibility for disposal and where the material will go.",
        source: {
          label: "City of Wolverhampton Council — tip and trade-waste rules",
          url: "https://www.wolverhampton.gov.uk/waste-and-recycling/tips/book-a-tip-visit",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Wolverhampton by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both addresses",
    sideCopy: "A city-centre flat, a property in Whitmore Reans and a house in Tettenhall can involve very different parking, stairs and carrying distances. Give the route from van to front door at both ends.",
    noteLead: "Sort restricted parking before moving day.",
    noteText: "If the van needs a controlled bay or dispensation, check the council process early and give the removal company the approved location and times.",
  },
  faq: [
    ["How much does a removal company cost in Wolverhampton?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can I reserve parking for a removal van in Wolverhampton?", "The council provides temporary bay-closure and parking-dispensation processes. Whether one is appropriate depends on the street and restriction."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Small furniture moves and man-with-a-van work can be posted alongside full household removals."],
    ["What if I need rubbish or old furniture taken away too?", "Include it in the job description and confirm that paid clearance waste will be handled through an appropriate licensed route."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Wolverhampton?",
    copy: "Describe the move, access and parking once, then compare interested Wolverhampton removal companies and their quotes.",
    buttonLabel: "Get Wolverhampton removal quotes",
  },
});

export const cleanersWolverhampton = makeWolverhamptonProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Wolverhampton? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Wolverhampton?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows, post-build dust or rubbish removal so suitable Wolverhampton cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Wolverhampton rental and HMO context",
    title: "Shared-house work sits within unusually clear citywide HMO planning controls",
    intro: "Wolverhampton has a citywide Article 4 direction requiring planning permission when a normal dwelling changes to a small HMO for three to six people, while mandatory HMO licensing applies from five occupiers in two or more households sharing facilities. That context matters for landlord handovers and communal cleaning jobs.",
    items: [
      {
        title: "Small HMO conversions require planning permission across Wolverhampton",
        text: "The council's Article 4 direction applies across the whole local-authority area and removes the normal permitted-development route for changing a house from C3 use to a small C4 HMO for three to six people. A cleaner does not determine planning status, but landlords commissioning handover or refurbishment cleans should describe the actual use of the property accurately.",
        source: {
          label: "City of Wolverhampton Council — small HMO Article 4 direction",
          url: "https://www.wolverhampton.gov.uk/planning/planning-policies/small-houses-multiple-occupation-article-4-direction",
        },
      },
      {
        title: "Mandatory HMO licensing starts at five occupiers where the statutory test is met",
        text: "The council says mandatory licensing applies where five or more people from two or more households occupy the property as their main or only residence and share facilities such as a kitchen, bathroom or toilet. For a licensed-HMO clean, state whether the job covers private rooms, shared spaces or a complete changeover.",
        source: {
          label: "City of Wolverhampton Council — HMO licence guidance",
          url: "https://www.wolverhampton.gov.uk/housing/house-multiple-occupation-licence",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Wolverhampton by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and condition",
    sideCopy: "A shared property near the city centre, a family house in Penn and a larger home in Tettenhall can need very different visit lengths. State bedrooms, bathrooms, communal areas and any specialist tasks.",
    noteLead: "Separate routine cleaning from clearance.",
    noteText: "Ovens, carpets, internal windows, heavy build-up, post-build dust and rubbish removal are often priced separately from an ordinary recurring clean.",
  },
  faq: [
    ["How much does a cleaner cost in Wolverhampton?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Do small HMOs need planning permission in Wolverhampton?", "A citywide Article 4 direction means changing a normal dwelling to a small C4 HMO for three to six people requires planning permission."],
    ["When does mandatory HMO licensing apply?", "The council says it generally applies from five occupiers in two or more households who share facilities, subject to the statutory definitions."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Wolverhampton?",
    copy: "Describe the property and cleaning checklist once, then compare interested Wolverhampton cleaners and their quotes.",
    buttonLabel: "Get Wolverhampton cleaning quotes",
  },
});
