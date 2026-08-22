import { makeRomfordProfile } from "./romfordProfileBase";

export const removalCompaniesRomford = makeRomfordProfile("removal-companies", {
  heroCopy: "Moving home in Romford, elsewhere in Greater London or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Romford?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Romford removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Romford moving-day parking",
    title: "Check the right Havering parking route before assuming the removal van can wait outside",
    intro: "Havering has specific parking arrangements for builders, deliveries and home removals. In busier parts of Romford or controlled streets, sorting this before moving day can prevent a long carry or a last-minute parking problem.",
    items: [
      {
        title: "Havering virtual permits include home removals",
        text: "Havering says its virtual permit system includes permits for visitors, deliveries, builders and home removals. If the collection or delivery address sits within a permit-controlled area, check the correct permit option before the move rather than assuming ordinary parking will be available.",
        source: {
          label: "London Borough of Havering — parking permits",
          url: "https://www.havering.gov.uk/parking-permits",
        },
      },
      {
        title: "Parking-bay suspensions are not the normal household-removal route",
        text: "Havering's parking-bay suspension service is for utility companies or on-street works and requires at least five working days' notice. The council directs tradespeople and removals needing to use restricted parking to its dispensation or permit routes instead.",
        source: {
          label: "London Borough of Havering — parking bay suspensions",
          url: "https://www.havering.gov.uk/parking-2/parking-bay-suspensions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Romford by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A flat near central Romford, a suburban house in Gidea Park and a move from Harold Hill can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not leave controlled-street parking until moving morning.",
    noteText: "If the van needs a permit, dispensation or other parking arrangement, confirm it in advance and tell the removal company exactly where the vehicle can legally wait.",
  },
  faq: [
    ["How much does a removal company cost in Romford?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can I get a parking permit for a home removal in Havering?", "Havering says its virtual permit system includes permits for home removals, subject to the relevant permit rules for the address."],
    ["Can I reserve a council parking bay for my house move?", "Do not assume so. Havering says its bay-suspension service is for utility and on-street work companies, while removals are directed to the appropriate permit or dispensation route."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Romford?",
    copy: "Describe the move, access and parking once, then compare interested Romford removal companies and their quotes.",
    buttonLabel: "Get Romford removal quotes",
  },
});

export const cleanersRomford = makeRomfordProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Romford? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Romford?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Romford cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Romford private-rental context",
    title: "Havering's 2026 licensing schemes can matter for landlord and HMO cleaning jobs",
    intro: "Havering introduced new selective and additional HMO licensing schemes from 18 March 2026. For end-of-tenancy, communal-area or HMO cleaning, identifying how the property is occupied helps define the true scope of the job.",
    items: [
      {
        title: "Additional HMO licensing now applies borough-wide",
        text: "From 18 March 2026, Havering's additional licensing scheme applies across all wards to homes rented to three or four unrelated people who share amenities. Mandatory HMO licensing continues to apply to qualifying larger HMOs.",
        source: {
          label: "London Borough of Havering — private rented property licensing",
          url: "https://www.havering.gov.uk/information-landlords/private-rented-property-licensing",
        },
      },
      {
        title: "Selective licensing also covers several Havering wards",
        text: "The 2026 selective scheme covers seven wards, including Harold Wood, Rush Green and Crowlands, Squirrels Heath and St Edwards. For a landlord clean, check the exact address and room use rather than treating every Romford-area rental as the same type of property.",
        source: {
          label: "London Borough of Havering — private rented property licensing",
          url: "https://www.havering.gov.uk/HMOs",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Romford by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and the standard required",
    sideCopy: "A weekly clean in Rise Park, a family home in Harold Wood and an HMO changeover near central Romford need different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Romford?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Does Havering have additional HMO licensing in 2026?", "Yes. Havering says its additional HMO licensing scheme has applied across all wards since 18 March 2026."],
    ["Does every privately rented home in Romford need selective licensing?", "No. Havering's selective scheme applies only in designated wards, so check the exact property address and ward."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Romford?",
    copy: "Describe the property and cleaning checklist once, then compare interested Romford cleaners and their quotes.",
    buttonLabel: "Get Romford cleaning quotes",
  },
});
