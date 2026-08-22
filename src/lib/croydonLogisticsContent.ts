import { makeCroydonProfile } from "./croydonProfileBase";

export const removalCompaniesCroydon = makeCroydonProfile("removal-companies", {
  heroCopy: "Moving home in Croydon or further across London and the UK? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Croydon?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, narrow access, parking restrictions and bulky items so suitable Croydon removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Croydon moving-day access",
    title: "Parking suspensions need advance notice, and several major Croydon roads operate as red routes",
    intro: "Croydon Council allows residents and businesses to request parking dispensations or bay suspensions where restricted kerb space is needed, but currently requires at least 10 working days' notice. The borough also contains the A22, A23 and A232 red routes, where stopping and loading rules can be tighter than on ordinary streets.",
    items: [
      {
        title: "Parking suspensions and dispensations need at least 10 working days' notice",
        text: "Croydon Council says a dispensation can allow parking on yellow lines and a suspension can temporarily lift the restrictions on a parking bay. Both normally require at least 10 working days' notice, so a move that depends on kerbside loading should be planned before the removal company commits to a vehicle position.",
        source: {
          label: "Croydon Council — parking suspensions and dispensations",
          url: "https://www.croydon.gov.uk/parking/parking-restrictions/how-get-parking-restrictions-suspended",
        },
      },
      {
        title: "The A22, A23 and A232 are red routes in Croydon",
        text: "Croydon Council identifies three red routes in the borough: the A22, A23 and A232. Red-line restrictions mean no stopping except where signed bays allow it, so tell the mover if either address fronts one of these roads or if loading space depends on a red-route bay.",
        source: {
          label: "Croydon Council — red routes",
          url: "https://www.croydon.gov.uk/parking/parking-restrictions/red-routes",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Croydon by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from vehicle to front door",
    sideCopy: "A central Croydon flat, a terraced home in Thornton Heath and a larger property in Purley or Coulsdon can involve very different lifts, stairs, driveways and kerb access. Give access details at both ends.",
    noteLead: "Do not assume the van can wait outside.",
    noteText: "If loading depends on a controlled bay, yellow line or red route, check the restriction and arrange any council permission early enough for moving day.",
  },
  faq: [
    ["How much does a removal company cost in Croydon?", "There is no single local rate. Volume, distance, crew size, stairs, lifts, parking, packing, storage and clearance all affect the quote."],
    ["Can I suspend a parking bay for a removal van in Croydon?", "Potentially. Croydon Council accepts requests for parking suspensions and currently asks for at least 10 working days' notice."],
    ["Which Croydon roads are red routes?", "Croydon Council identifies the A22, A23 and A232 as red routes in the borough. Check the signed loading rules if your move uses one of them."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Croydon?",
    copy: "Describe the move, access and parking once, then compare interested Croydon removal companies and their quotes.",
    buttonLabel: "Get Croydon removal quotes",
  },
});

export const cleanersCroydon = makeCroydonProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Croydon? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Croydon?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Croydon cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Croydon rental-cleaning context",
    title: "New borough-wide HMO licensing starts in September 2026, alongside selective licensing in specified wards",
    intro: "Croydon's new Additional HMO Licensing Scheme comes into force on 25 September 2026 and will cover smaller HMOs across the whole borough. On the same date, selective licensing starts for qualifying privately rented homes in a defined group of wards, making accurate property type and room details particularly useful for landlord and changeover cleaning work.",
    items: [
      {
        title: "Smaller HMOs across Croydon will need additional licensing from 25 September 2026",
        text: "Croydon Council says the borough-wide scheme will cover HMOs occupied by three or more people forming two or more households where the property is not already subject to mandatory HMO licensing. For a tenancy changeover, state the bedroom count, shared facilities and whether the property is an HMO so cleaners can price the actual layout.",
        source: {
          label: "Croydon Council — Additional HMO Licensing Scheme 2026",
          url: "https://www.croydon.gov.uk/housing/landlords/selective-and-additional-hmo-licensing-schemes-2026/additional-hmo-licensing-scheme-2026",
        },
      },
      {
        title: "Selective licensing also starts in specified Croydon wards on the same date",
        text: "Croydon Council's selective scheme will apply to qualifying privately rented homes in wards including South Croydon, Thornton Heath, South Norwood, Waddon, Broad Green and others. If a landlord or agent is preparing a licensed property for occupation, make the required cleaning and repair checklist explicit rather than treating it as an ordinary domestic clean.",
        source: {
          label: "Croydon Council — Selective Licensing Scheme 2026",
          url: "https://www.croydon.gov.uk/housing/landlords/selective-and-additional-hmo-licensing-schemes-2026/selective-licensing-scheme-2026",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Croydon by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Addiscombe, a central flat and an HMO changeover in Thornton Heath or South Norwood need different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Croydon?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["When does Croydon's new additional HMO licensing scheme start?", "Croydon Council says the scheme comes into force on 25 September 2026 and will apply borough-wide to qualifying smaller HMOs."],
    ["Does selective licensing cover every privately rented home in Croydon?", "No. The 2026 selective scheme applies only in the designated wards and subject to the scheme's property rules."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Croydon?",
    copy: "Describe the property and cleaning checklist once, then compare interested Croydon cleaners and their quotes.",
    buttonLabel: "Get Croydon cleaning quotes",
  },
});
