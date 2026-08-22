import { makeWalsallProfile } from "./walsallProfileBase";

export const removalCompaniesWalsall = makeWalsallProfile("removal-companies", {
  heroCopy: "Moving home in Walsall, elsewhere in the West Midlands or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Walsall?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Walsall removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Walsall moving-day access",
    title: "Restricted parking may need a council dispensation before the removal vehicle arrives",
    intro: "Some streets and parking areas in Walsall restrict waiting, access, loading or unloading. If the move relies on a vehicle staying close to the property, check the restriction early rather than assuming normal parking will be available on moving day.",
    items: [
      {
        title: "Walsall asks for at least three working days' notice",
        text: "Walsall Council says applications for a parking dispensation must be submitted at least three working days before the date required. A dispensation can cover eligible limited-wait bays, single or double yellow lines, permit bays and loading areas where there is no reasonable alternative.",
        source: {
          label: "Walsall Council — apply for a parking dispensation",
          url: "https://go.walsall.gov.uk/roads-parking-and-travel/parking-and-travel/apply-for-a-parking-dispensation",
        },
      },
      {
        title: "A dispensation does not reserve a space",
        text: "The council says a dispensation does not guarantee a parking space and may offer an alternative nearby. It also only grants access to pedestrian areas, red routes and loading-ban areas in exceptional circumstances, so describe the exact vehicle position when comparing removal quotes.",
        source: {
          label: "Walsall Council — apply for a parking dispensation",
          url: "https://go.walsall.gov.uk/roads-parking-and-travel/parking-and-travel/apply-for-a-parking-dispensation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Walsall by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both addresses before comparing quotes",
    sideCopy: "A town-centre flat in Walsall, a house in Aldridge and a terrace in Bloxwich can involve very different stairs, driveways and vehicle positions. Give the walking distance from van to door at both ends.",
    noteLead: "Do not assume the removal vehicle can wait directly outside.",
    noteText: "If the job depends on restricted parking, check whether a dispensation is needed and allow at least the council's stated application notice period.",
  },
  faq: [
    ["How much does a removal company cost in Walsall?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can a removal van park on yellow lines in Walsall?", "Not automatically. Walsall can issue dispensations in eligible circumstances, and the council asks for at least three working days' notice."],
    ["Does a parking dispensation reserve a space?", "No. Walsall Council says a dispensation does not guarantee that a space will be available and an alternative nearby may be offered."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Walsall?",
    copy: "Describe the move, access and parking once, then compare interested Walsall removal companies and their quotes.",
    buttonLabel: "Get Walsall removal quotes",
  },
});

export const cleanersWalsall = makeWalsallProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Walsall? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Walsall?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Walsall cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Walsall shared-rental context",
    title: "HMO licensing can change the practical cleaning scope in shared rented homes",
    intro: "For landlord, changeover or communal-area cleaning, identify whether the property is an HMO and how many people and shared facilities it contains. Walsall has both mandatory HMO licensing and an additional licensing scheme in specific wards.",
    items: [
      {
        title: "Larger HMOs need mandatory licensing across the borough",
        text: "Walsall Council says an HMO occupied by five or more tenants from more than one household requires a mandatory HMO licence. Giving the cleaner the bedroom count, shared kitchens, bathrooms and communal areas produces a more realistic scope than floor area alone.",
        source: {
          label: "Walsall Council — licensing for houses in multiple occupation",
          url: "https://go.walsall.gov.uk/housing/information-landlords/houses-multiple-occupation-hmo/licensing-houses-multiple-occupation",
        },
      },
      {
        title: "Some smaller HMOs also need a licence",
        text: "Walsall's additional licensing scheme applies to HMOs with three or more tenants from more than one household in Palfrey, Paddock, Pleck and St Matthews. The council states that this scheme runs from 1 September 2022 until 31 August 2027.",
        source: {
          label: "Walsall Council — additional HMO licensing",
          url: "https://go.walsall.gov.uk/housing/information-landlords/houses-multiple-occupation-hmo/additional-hmo-licensing",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Walsall by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Streetly, a family home in Pelsall and an HMO changeover nearer Walsall town centre need different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Walsall?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["When does an HMO need a mandatory licence in Walsall?", "Walsall says mandatory licensing applies where five or more tenants from more than one household occupy the HMO."],
    ["Do smaller HMOs ever need a licence in Walsall?", "Yes. Walsall has an additional licensing scheme for qualifying HMOs with three or more tenants in Palfrey, Paddock, Pleck and St Matthews."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Walsall?",
    copy: "Describe the property and cleaning checklist once, then compare interested Walsall cleaners and their quotes.",
    buttonLabel: "Get Walsall cleaning quotes",
  },
});
