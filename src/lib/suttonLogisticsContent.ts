import { makeSuttonProfile } from "./suttonProfileBase";

export const removalCompaniesSutton = makeSuttonProfile("removal-companies", {
  heroCopy: "Moving home in Sutton, elsewhere in Greater London or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Sutton?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Sutton removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Sutton moving-day parking",
    title: "Domestic removals can use Sutton's dispensation and suspension routes when the van needs restricted space",
    intro: "A move in central Sutton, Carshalton or another controlled street can depend on where the removal vehicle can legally wait. Sutton Council has separate dispensation and suspension processes, and both need arranging before moving day.",
    items: [
      {
        title: "Domestic removals are an accepted reason for a parking dispensation",
        text: "Sutton says a parking dispensation can allow a vehicle to wait on a restriction when it must stay close to a specific location, including for domestic removals. The council asks for normal dispensation applications at least two working days before they are needed.",
        source: {
          label: "London Borough of Sutton — parking dispensations and suspensions",
          url: "https://www.sutton.gov.uk/streets-transport-and-parking/parking/street-parking-and-enforcement/parking-dispensations-and-suspensions",
        },
      },
      {
        title: "A suspension can reserve bays or road space for the move",
        text: "Sutton also lists removals among the reasons for suspending parking bays or areas. Normal suspension applications should be made at least seven working days in advance, so access should be checked before the final moving schedule is agreed.",
        source: {
          label: "London Borough of Sutton — parking dispensations and suspensions",
          url: "https://www.sutton.gov.uk/streets-transport-and-parking/parking/street-parking-and-enforcement/parking-dispensations-and-suspensions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Sutton by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A flat near Sutton town centre, a house in Cheam and a move from Carshalton can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not assume normal loading rules will cover the whole move.",
    noteText: "If the van must remain on a restricted street or needs reserved space for longer than ordinary loading allows, arrange the correct dispensation or suspension in advance.",
  },
  faq: [
    ["How much does a removal company cost in Sutton?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can a removal van get a parking dispensation in Sutton?", "Yes. Sutton Council specifically lists domestic removals as a reason a parking dispensation may be granted."],
    ["How much notice should I allow for a Sutton parking suspension?", "Sutton asks for normal suspension applications at least seven working days before they are required."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Sutton?",
    copy: "Describe the move, access and parking once, then compare interested Sutton removal companies and their quotes.",
    buttonLabel: "Get Sutton removal quotes",
  },
});

export const cleanersSutton = makeSuttonProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Sutton? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Sutton?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Sutton cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Sutton HMO and landlord cleaning",
    title: "Borough-wide HMO licensing makes occupancy and shared-space detail especially important for landlord cleans",
    intro: "Sutton's additional HMO licensing scheme is now live across the whole borough. For a changeover, communal-area or landlord clean, the number of unrelated occupiers and the shared kitchens, bathrooms and circulation spaces can change the real cleaning scope.",
    items: [
      {
        title: "Additional HMO licensing now applies across the whole borough",
        text: "Sutton says its borough-wide additional licensing scheme applies to HMOs that do not meet the five-person threshold for mandatory licensing, subject to the scheme's exemptions. This means many smaller shared homes now sit within a formal licensing regime as well.",
        source: {
          label: "London Borough of Sutton — Houses in Multiple Occupation",
          url: "https://www.sutton.gov.uk/businesses-and-licensing/licensing/houses-multiple-occupation/houses-multiple-occupation-hmo",
        },
      },
      {
        title: "New small HMOs also face a borough-wide planning check",
        text: "Sutton's HMO Article 4 Direction came into force on 22 February 2025 and removes the permitted-development route from a normal dwellinghouse to a small HMO across the borough. For landlord work, confirm the property's actual use and occupancy rather than assuming every shared house has the same status.",
        source: {
          label: "London Borough of Sutton — Article 4 Directions",
          url: "https://www.sutton.gov.uk/planning-and-building/planning/planning-policy/article-4-directions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Sutton by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Belmont, a family home in Cheam and an HMO changeover in Sutton can need very different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Sutton?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Does Sutton have additional HMO licensing?", "Yes. Sutton says its additional HMO licensing scheme is now live across the whole borough."],
    ["Does converting a house to a small HMO need planning permission in Sutton?", "Sutton's borough-wide Article 4 Direction removes the usual permitted-development right for a C3 dwelling to become a C4 small HMO, so planning permission is required."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Sutton?",
    copy: "Describe the property and cleaning checklist once, then compare interested Sutton cleaners and their quotes.",
    buttonLabel: "Get Sutton cleaning quotes",
  },
});
