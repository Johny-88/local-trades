import { makeBuryProfile } from "./buryProfileBase";

export const removalCompaniesBury = makeBuryProfile("removal-companies", {
  heroCopy: "Moving home in Bury, elsewhere in Greater Manchester or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Bury?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Bury removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Bury moving-day parking",
    title: "Resident-permit streets need checking before moving day because permits are tied to the resident and vehicle",
    intro: "A move in Bury Town Centre, Fishpool or another permit-controlled street can depend on where the removal vehicle can legally wait. Bury Council's resident parking rules make clear that permits are not transferable to a new occupier.",
    items: [
      {
        title: "A resident parking permit should not be passed to the next occupier",
        text: "Bury Council tells residents to report when they move house and says a permit must not be passed to a new occupant or altered by hand. If either address sits in a resident parking scheme, confirm the parking arrangement before the removal van arrives.",
        source: {
          label: "Bury Council — resident parking scheme permits",
          url: "https://www.bury.gov.uk/roads-travel-and-parking/parking/apply-for-a-parking-permit/resident-parking-scheme-permits",
        },
      },
      {
        title: "Temporary resident permits require at least 48 hours' notice",
        text: "Bury Council offers temporary resident permits for special events and says applications made with less than 48 hours' notice will not be processed. These permits do not amount to a guaranteed reserved loading space, so moving-day access should be checked separately.",
        source: {
          label: "Bury Council — resident parking scheme permits",
          url: "https://www.bury.gov.uk/roads-travel-and-parking/parking/apply-for-a-parking-permit/resident-parking-scheme-permits",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Bury by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A terrace in Fishpool, a family home in Brandlesholme and a flat near Bury town centre can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not assume a permit or kerb space will be available on the day.",
    noteText: "Give the removal company any permit-zone details, loading restrictions, narrow access and likely carrying distance so vehicle size and crew can be planned correctly.",
  },
  faq: [
    ["How much does a removal company cost in Bury?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can I pass my Bury resident parking permit to the person moving into my old home?", "No. Bury Council says resident parking permits must not be passed to a new occupant."],
    ["How much notice does Bury require for a temporary resident parking permit?", "Bury Council says applications with less than 48 hours' notice will not be processed."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Bury?",
    copy: "Describe the move, access and parking once, then compare interested Bury removal companies and their quotes.",
    buttonLabel: "Get Bury removal quotes",
  },
});

export const cleanersBury = makeBuryProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Bury? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Bury?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Bury cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Bury HMO and landlord cleaning",
    title: "New borough-wide HMO planning controls make the actual occupancy and use important for landlord work",
    intro: "Shared homes can create a much larger cleaning brief than ordinary domestic properties. Bury has mandatory HMO licensing for larger shared homes and, since July 2026, a borough-wide Article 4 direction for new small HMOs.",
    items: [
      {
        title: "HMOs with five or more occupants from two or more households require a licence",
        text: "Bury Council states that mandatory HMO licensing applies where five or more people from two or more households occupy the property and share amenities. For changeover cleaning, give the real room count and shared-space layout rather than describing it only as a house clean.",
        source: {
          label: "Bury Council — Houses in Multiple Occupation licence",
          url: "https://www.bury.gov.uk/housing/private-rent/landlords/hmo-licence",
        },
      },
      {
        title: "New small HMOs now need planning permission across the borough",
        text: "Bury's immediate Article 4 direction took effect on 16 July 2026 and removes the normal permitted-development right for material changes from C3 dwellinghouse to C4 small HMO. The direction applies borough-wide.",
        source: {
          label: "Bury Council — Article 4 Directions",
          url: "https://www.bury.gov.uk/planning-building-control/planning-permission/article-4-directions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Bury by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Walmersley, a family home in Elton and an HMO changeover near the town centre can need very different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Bury?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Which HMOs need a licence in Bury?", "Bury Council says mandatory licensing applies to HMOs with five or more occupants from two or more households where amenities are shared."],
    ["Do new small HMOs need planning permission in Bury?", "Yes. A borough-wide Article 4 direction took effect on 16 July 2026, removing the normal C3-to-C4 permitted-development right."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Bury?",
    copy: "Describe the property and cleaning checklist once, then compare interested Bury cleaners and their quotes.",
    buttonLabel: "Get Bury cleaning quotes",
  },
});
