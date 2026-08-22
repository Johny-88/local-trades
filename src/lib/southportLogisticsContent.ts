import { makeSouthportProfile } from "./southportProfileBase";

export const removalCompaniesSouthport = makeSouthportProfile("removal-companies", {
  heroCopy: "Moving home in Southport, elsewhere in Merseyside or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Southport?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Southport removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Southport moving-day parking",
    title: "A house move can qualify for a Sefton parking-bay suspension, but it needs arranging before moving day",
    intro: "Central Southport includes pay-and-display, limited-waiting and permit-controlled streets. If the removal vehicle needs to stay close to the property, Sefton's suspension and dispensation process may be more important than the distance on the map.",
    items: [
      {
        title: "House moves are an accepted reason for a parking suspension",
        text: "Sefton Council lists house moves among the reasons for which parking bays may be suspended. Where the removal vehicle also needs to remain in the suspended bay, a separate dispensation to park is required.",
        source: {
          label: "Sefton Council — suspensions and dispensations",
          url: "https://www.sefton.gov.uk/parking-roads-travel/parking/suspensions-and-dispensations/",
        },
      },
      {
        title: "Allow at least four working days for normal applications",
        text: "Sefton asks applicants to submit parking suspension and dispensation requests at least four working days before they are needed. If access is critical to the move, confirm the parking arrangement before agreeing the final arrival time with the removal company.",
        source: {
          label: "Sefton Council — suspensions and dispensations",
          url: "https://www.sefton.gov.uk/parking-roads-travel/parking/suspensions-and-dispensations/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Southport by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A flat near Lord Street, a house in Birkdale and a move from Churchtown can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not leave restricted-street access until moving morning.",
    noteText: "If the van needs a suspended bay, dispensation or temporary permit, arrange it in advance and tell the removal company exactly where the vehicle can legally wait.",
  },
  faq: [
    ["How much does a removal company cost in Southport?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can a parking bay be suspended for a house move in Sefton?", "Yes. Sefton Council lists house moves as an accepted reason for a parking-bay suspension."],
    ["How much notice should I allow for a Southport parking suspension?", "Sefton asks for at least four working days for normal suspension and dispensation applications."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Southport?",
    copy: "Describe the move, access and parking once, then compare interested Southport removal companies and their quotes.",
    buttonLabel: "Get Southport removal quotes",
  },
});

export const cleanersSouthport = makeSouthportProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Southport? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Southport?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Southport cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Southport HMO and rental context",
    title: "Central Southport has additional HMO licensing and planning controls that can change a landlord cleaning brief",
    intro: "A landlord clean can be very different from an ordinary domestic visit where several unrelated tenants share kitchens, bathrooms and communal areas. In parts of Southport, Sefton has both additional HMO licensing and an Article 4 planning direction for HMO use.",
    items: [
      {
        title: "Additional HMO licensing covers part of Southport",
        text: "Sefton's 2023–2028 additional licensing scheme covers qualifying privately rented HMOs in designated parts of Southport. The scheme includes smaller HMOs occupied by three or four people from two or more households who share facilities.",
        source: {
          label: "Sefton Council — Additional HMO Licensing 2023–2028",
          url: "https://www.sefton.gov.uk/housing/private-sector-housing/landlord-licensing-and-accreditation/additional-hmo-licensing-2023-2028/",
        },
      },
      {
        title: "Parts of Southport also have an HMO Article 4 direction",
        text: "Sefton has removed permitted-development rights for changing a dwellinghouse from Class C3 to a small HMO in specified parts of Southport. For a landlord or changeover clean, the exact occupancy and use of the property can therefore matter as much as the bedroom count.",
        source: {
          label: "Sefton Council — Article 4 Direction for Houses in Multiple Occupation",
          url: "https://www.sefton.gov.uk/planning-building-control/planning-policy-including-local-plan-and-neighbourhood-planning/article-4-directions/article-4-direction-for-houses-in-multiple-occupation/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Southport by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and the standard required",
    sideCopy: "A weekly clean in Hillside, a family home in Ainsdale and an HMO changeover nearer central Southport need different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Southport?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Does Southport have additional HMO licensing?", "Yes. Sefton's 2023–2028 additional licensing scheme covers qualifying HMOs in designated parts of Southport."],
    ["Does every Southport rental need an HMO licence?", "No. Licensing depends on the property type, occupancy and whether the address falls within a designated licensing area. Check the exact address with Sefton Council."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Southport?",
    copy: "Describe the property and cleaning checklist once, then compare interested Southport cleaners and their quotes.",
    buttonLabel: "Get Southport cleaning quotes",
  },
});
