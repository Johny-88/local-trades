import { makeLeicesterProfile } from "./leicesterProfileBase";

export const removalCompaniesLeicester = makeLeicesterProfile("removal-companies", {
  heroCopy: "Moving home within Leicester or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Leicester?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, long carries and parking restrictions so suitable Leicester removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Leicester moving-day context",
    title: "Parking arrangements can be part of the moving plan in Leicester",
    intro: "A removal van often needs reliable kerbside access. Leicester's current parking framework allows suspensions and recognises removal vehicles, so access should be checked before moving day rather than left to chance.",
    items: [
      {
        title: "Leicester can suspend parking bays where an agreed suspension is needed",
        text: "Leicester City Council's highway guidance says parking bays may be suspended by agreement with the city and normally requires advance notice. If a move depends on occupying a restricted bay, confirm the correct arrangement before the removal date.",
        source: {
          label: "Leicester City Council — highway permissions guidance",
          url: "https://www.leicester.gov.uk/sites/default/files/2026-02/Guidance%20scaffolding%20skips%20hoarding%20deposits%202025.pdf",
        },
      },
      {
        title: "Leicester's parking order specifically recognises removal vehicles",
        text: "The city's 2025 parking consolidation order includes an exemption for vehicles genuinely being used to remove or deliver furniture to or from nearby homes or offices. That does not mean every location is automatically available, so the exact street restrictions still need checking.",
        source: {
          label: "Leicester City Council — parking consolidation order 2025",
          url: "https://www.leicester.gov.uk/media/1h1flk50/pkng-cnsldtn-order-2025-sealed-articles.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Leicester by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to front door",
    sideCopy: "A terrace in Westcotes, a larger property in Stoneygate and a home in Braunstone can involve very different parking, carrying distance, stairs and vehicle access. Give details at both ends of the move.",
    noteLead: "Check loading access before moving day.",
    noteText: "If the van will need a controlled bay or restricted street, confirm whether a suspension, dispensation or other arrangement is needed.",
  },
  faq: [
    ["How much does a removal company cost in Leicester?", "There is no single Leicester rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can a removal van use a restricted parking space in Leicester?", "Sometimes specific exemptions or arrangements apply, but the exact street and restriction must be checked before the move."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["Should I mention stairs and long carries?", "Yes. These can change crew size, timing and price, so include them before comparing quotes."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Leicester?",
    copy: "Describe the move, access and parking once, then compare interested Leicester removal companies and their quotes.",
    buttonLabel: "Get Leicester removal quotes",
  },
});

export const cleanersLeicester = makeLeicesterProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Leicester? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Leicester?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Leicester cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Leicester rental-property context",
    title: "HMO and selective licensing can matter when cleaning is part of a landlord handover",
    intro: "Leicester has mandatory HMO licensing for qualifying shared homes and selective licensing in parts of several wards. These rules do not require a professional cleaner, but they make the property's use and management context worth identifying clearly.",
    items: [
      {
        title: "Large HMOs require a licence",
        text: "Leicester City Council says mandatory HMO licensing applies where at least five tenants form more than one household and share facilities. For an HMO clean, state whether the job covers bedrooms, communal areas, kitchens, bathrooms or a complete tenant changeover.",
        source: {
          label: "Leicester City Council — houses in multiple occupation",
          url: "https://www.leicester.gov.uk/housing/landlords/property-licensing/houses-multiple-occupation-hmo",
        },
      },
      {
        title: "Selective licensing applies in parts of several Leicester wards",
        text: "The council's selective licensing scheme covers parts of Braunstone Park and Rowley Fields, Fosse, Westcotes, Stoneygate and Saffron. If a cleaning job forms part of rental-property management, the landlord should keep licensing and property-condition obligations separate from the cleaning contract.",
        source: {
          label: "Leicester City Council — selective licensing",
          url: "https://www.leicester.gov.uk/housing/landlords/property-licensing/selective-licensing",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Leicester by postcode, property type and schedule. Example areas include:",
    sideTitle: "State the real room count and condition",
    sideCopy: "A shared property in Westcotes, a period home in Stoneygate and a family house in Evington can need very different visit lengths. Give bedrooms, bathrooms and any specialist tasks.",
    noteLead: "Separate routine cleaning from clearance.",
    noteText: "Ovens, carpets, heavy build-up, post-build dust and rubbish removal are often priced separately from an ordinary recurring clean.",
  },
  faq: [
    ["How much does a cleaner cost in Leicester?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, rooms, condition and any landlord or agent checklist."],
    ["When does a Leicester HMO need a licence?", "Mandatory licensing applies to qualifying large HMOs, while other property licensing can also apply depending on area and use."],
    ["Does property licensing mean I must use a professional cleaner?", "No. Licensing governs the property and its management; it does not create a general requirement to hire a professional cleaning company."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Leicester?",
    copy: "Describe the property and cleaning checklist once, then compare interested Leicester cleaners and their quotes.",
    buttonLabel: "Get Leicester cleaning quotes",
  },
});
