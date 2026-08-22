import { makeWestBromwichProfile } from "./westBromwichProfileBase";

export const removalCompaniesWestBromwich = makeWestBromwichProfile("removal-companies", {
  heroCopy: "Moving home in West Bromwich, elsewhere in the West Midlands or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in West Bromwich?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable West Bromwich removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "West Bromwich moving-day parking",
    title: "Restricted kerb space may need a Sandwell parking waiver before the van arrives",
    intro: "Sandwell Council can issue parking dispensations where a vehicle genuinely needs to wait on a restriction close to premises. That matters for moves where ordinary legal loading space is not available.",
    items: [
      {
        title: "Sandwell can issue waivers from parking restrictions",
        text: "The council says its Parking Control Office may issue a waiver where it is essential for a vehicle to park on a restriction close to adjacent premises. The waiver identifies the vehicle, time, purpose and authorised location.",
        source: {
          label: "Sandwell Council — parking restrictions and waivers",
          url: "https://www.sandwell.gov.uk/roads-travel-parking/traffic-management-act-2004-parking/4",
        },
      },
      {
        title: "A waiver only covers the approved vehicle, place and purpose",
        text: "Sandwell Council warns that the vehicle must be parked in accordance with the approved times, location and purpose or a Penalty Charge Notice may still be issued. Arrange any required dispensation before moving day rather than assuming loading rights override restrictions.",
        source: {
          label: "Sandwell Council — parking restrictions and waivers",
          url: "https://www.sandwell.gov.uk/roads-travel-parking/traffic-management-act-2004-parking/4",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover West Bromwich by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door",
    sideCopy: "A town-centre flat, a terrace in Greets Green and a family home near Great Barr can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not assume the closest kerb space can legally be used all day.",
    noteText: "Mention yellow lines, permit controls, loading restrictions, narrow access and likely carrying distance so vehicle size and crew can be planned properly.",
  },
  faq: [
    ["How much does a removal company cost in West Bromwich?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing and storage all affect the quote."],
    ["Can a removal van park on a restriction in Sandwell?", "Only where the normal rules allow it or where the council has granted the appropriate waiver or dispensation for that vehicle, place and purpose."],
    ["Should I arrange parking before moving day?", "Yes. If legal loading space is uncertain, resolve it before the van arrives so the crew can plan access and timings."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in West Bromwich?",
    copy: "Describe the move, access and parking once, then compare interested West Bromwich removal companies and their quotes.",
    buttonLabel: "Get West Bromwich removal quotes",
  },
});

export const cleanersWestBromwich = makeWestBromwichProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in West Bromwich? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in West Bromwich?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable West Bromwich cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "West Bromwich HMO cleaning",
    title: "Sandwell's borough-wide additional licensing means even smaller HMOs can need a licence",
    intro: "Shared homes can create a larger cleaning brief than ordinary domestic properties. Sandwell expanded additional HMO licensing across the whole borough from October 2024.",
    items: [
      {
        title: "Additional HMO licensing has applied borough-wide since 1 October 2024",
        text: "Sandwell Council says the borough-wide scheme requires a licence for small HMOs, including properties occupied by three or four people from two or more households who share amenities.",
        source: {
          label: "Sandwell Council — Additional Licensing",
          url: "https://www.sandwell.gov.uk/additionallicensing",
        },
      },
      {
        title: "Licensed HMOs must meet property and management standards",
        text: "The council says licence holders must comply with standard licence conditions and may also be required to complete works to bring an individual property up to the required standard. For changeover cleaning, give the real bedroom, bathroom and communal-space layout.",
        source: {
          label: "Sandwell Council — HMO licence conditions",
          url: "https://www.sandwell.gov.uk/find-home/housing-multiple-occupation-hmo/10",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover West Bromwich by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Charlemont, an end-of-tenancy clean in Hateley Heath and an HMO changeover near the town centre can need very different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover or post-build clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in West Bromwich?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Do small HMOs need a licence in Sandwell?", "Yes. Sandwell's borough-wide additional licensing scheme covers small HMOs with three or four occupiers from two or more households sharing amenities."],
    ["Should I list communal HMO areas separately?", "Yes. Kitchens, bathrooms, hallways and shared living spaces can materially change the cleaning time and price."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in West Bromwich?",
    copy: "Describe the property and cleaning checklist once, then compare interested West Bromwich cleaners and their quotes.",
    buttonLabel: "Get West Bromwich cleaning quotes",
  },
});
