import { makeBrightonHoveProfile } from "./brightonHoveProfileBase";

export const removalCompaniesBrightonHove = makeBrightonHoveProfile("removal-companies", {
  heroCopy: "Moving within Brighton & Hove, elsewhere in Sussex or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Brighton & Hove?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, long carries and controlled parking so suitable Brighton & Hove removal companies can judge the crew, vehicle and timing required.",
  },
  localContext: {
    eyebrow: "Brighton & Hove move planning",
    title: "Parking suspensions and lawful waste disposal can change the practical plan for moving day",
    intro: "Brighton & Hove has extensive controlled parking and the council specifically allows parking suspensions for moving house. If the move also includes clearing unwanted belongings, the business taking them away has separate trade-waste responsibilities.",
    items: [
      {
        title: "Moving house is an accepted reason for a parking suspension",
        text: "Brighton & Hove City Council allows residents and businesses to apply to suspend parking bays for moving house. If a removal vehicle needs reliable kerb access, check the restriction and apply early rather than assuming a van can wait immediately outside the property.",
        source: {
          label: "Brighton & Hove City Council — apply for a parking suspension",
          url: "https://www.brighton-hove.gov.uk/apply-parking-suspension",
        },
      },
      {
        title: "Clearance waste taken away by a business must follow duty-of-care rules",
        text: "The council says business and trade waste includes waste from commercial activity and requires it to be stored, transferred and documented lawfully. If the removal company is also clearing unwanted furniture or rubbish, ask who carries it and whether legal disposal is included in the quote.",
        source: {
          label: "Brighton & Hove City Council — how to manage your business waste",
          url: "https://www.brighton-hove.gov.uk/rubbish-recycling-and-streets/business-and-trade-waste/how-manage-your-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Brighton & Hove by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both properties",
    sideCopy: "A Kemptown flat, a Hanover terrace and a house in Hove or Patcham can involve very different stairs, carrying distances and parking. Give the real route from vehicle to door at both ends.",
    noteLead: "Check the kerb before moving day.",
    noteText: "Where controlled bays limit loading, confirm whether a parking suspension is needed and who will arrange it.",
  },
  faq: [
    ["How much does a removal company cost in Brighton & Hove?", "There is no single local rate. Volume, distance, access, crew size, packing, storage and disposal all change the price, so compare quotes against the same moving brief."],
    ["Can I reserve parking for a removal van in Brighton & Hove?", "Yes. Brighton & Hove City Council lists moving house as an eligible reason to apply for a parking suspension."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["What if I need unwanted furniture taken away too?", "Say so clearly. Waste taken away as part of paid work must use a lawful trade-waste route, so ask whether disposal is included."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Brighton & Hove?",
    copy: "Describe the move, access and parking once, then compare interested Brighton & Hove removal companies and their quotes.",
    buttonLabel: "Get Brighton & Hove removal quotes",
  },
});

export const cleanersBrightonHove = makeBrightonHoveProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Brighton & Hove? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Brighton & Hove?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Brighton & Hove cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Brighton & Hove rental and cleaning context",
    title: "The city's large HMO sector makes property type useful context for landlord and agent cleaning jobs",
    intro: "Brighton & Hove has around 4,000 licensed HMOs, a citywide Article 4 direction for C3-to-C4 HMO changes and an additional licensing scheme for smaller qualifying HMOs. Those rules do not require a professional cleaner, but they make the exact property and handover purpose worth stating.",
    items: [
      {
        title: "Brighton & Hove has citywide HMO planning controls and local licensing",
        text: "The council says planning permission is required across the city for changing a dwellinghouse to a small HMO because of the citywide Article 4 direction. Its additional licensing scheme also covers many smaller HMOs occupied by three or four unrelated people. If the job is for a shared rental, say whether it is routine cleaning, tenant turnover or preparation for inspection.",
        source: {
          label: "Brighton & Hove City Council — planning permission for HMOs",
          url: "https://www.brighton-hove.gov.uk/planning/planning-applications/planning-permission-houses-multiple-occupation",
        },
      },
      {
        title: "Rubbish clearance is separate from ordinary cleaning",
        text: "Brighton & Hove City Council says businesses must manage trade waste lawfully and use registered carriers where waste is transferred. If a cleaner is also taking away old furniture, renovation debris or large quantities of rubbish, agree that service separately.",
        source: {
          label: "Brighton & Hove City Council — how to manage your business waste",
          url: "https://www.brighton-hove.gov.uk/rubbish-recycling-and-streets/business-and-trade-waste/how-manage-your-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Brighton & Hove by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count and actual condition",
    sideCopy: "A shared rental near Seven Dials, a Kemptown flat and a family home in Hove or Patcham can require very different visit lengths. State bedrooms, bathrooms, condition and specialist tasks.",
    noteLead: "List extras separately.",
    noteText: "Ovens, carpets, inside windows, appliances, heavy build-up and rubbish removal are commonly priced differently from routine cleaning.",
  },
  faq: [
    ["How much does a cleaner cost in Brighton & Hove?", "Rates vary with property size, condition, frequency and the type of clean. Compare quotes using the same room count and checklist so the prices mean the same thing."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Include the handover date, property size and any landlord or agent checklist so responding cleaners can price the same standard."],
    ["Does HMO licensing mean I must hire a professional cleaner?", "No. HMO planning and licensing rules regulate qualifying shared properties and their management; they do not create a general requirement to use a professional cleaner."],
    ["Can a cleaner take rubbish away too?", "Some can, but ask specifically. Waste removal is a separate service and trade-waste rules apply when a business removes the waste."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Brighton & Hove?",
    copy: "Describe the property and cleaning checklist once, then compare interested Brighton & Hove cleaners and their quotes.",
    buttonLabel: "Get Brighton & Hove cleaning quotes",
  },
});
