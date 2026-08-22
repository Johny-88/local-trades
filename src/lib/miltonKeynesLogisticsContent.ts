import { makeMiltonKeynesProfile } from "./miltonKeynesProfileBase";

export const removalCompaniesMiltonKeynes = makeMiltonKeynesProfile("removal-companies", {
  heroCopy: "Moving within Milton Keynes, across Buckinghamshire or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your part of the city.",
  answer: {
    title: "Looking for a removal company near you in Milton Keynes?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, long carries and parking restrictions so suitable Milton Keynes removal companies can judge the crew, vehicle and timing required.",
  },
  localContext: {
    eyebrow: "Milton Keynes move planning",
    title: "Parking suspensions and legal waste disposal can affect moving-day logistics",
    intro: "Milton Keynes has formal parking-suspension and dispensation procedures, while unwanted-item clearance carried out by a business falls under commercial waste rules. Both are worth settling before moving day.",
    items: [
      {
        title: "Parking bays can be suspended for removals",
        text: "Milton Keynes City Council allows parking bays to be temporarily suspended and specifically lists furniture removals as a valid reason. The current charge is £15 per bay per day and the council asks for around 10 days' notice, so check the street early if the van needs guaranteed kerb space.",
        source: {
          label: "Milton Keynes City Council — temporarily suspending parking restrictions",
          url: "https://www.milton-keynes.gov.uk/parking/parking-permits/temporarily-suspending-parking-restrictions",
        },
      },
      {
        title: "Waste removed by a business must use lawful commercial arrangements",
        text: "Milton Keynes City Council says businesses moving or disposing of waste must use a registered waste carrier or licensed disposal point and keep duty-of-care documentation. If the removal job includes clearing unwanted furniture or rubbish, ask how disposal is handled and whether it is included in the quote.",
        source: {
          label: "Milton Keynes City Council — waste collections from business premises",
          url: "https://www.milton-keynes.gov.uk/waste-and-recycling/commercial-and-business-waste/waste-collections-business-premises",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Milton Keynes by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both properties",
    sideCopy: "A central apartment, a townhouse in Bletchley and a house in Newport Pagnell can involve very different carrying distances and parking. Give the route from vehicle to door at both addresses.",
    noteLead: "Check parking before the van arrives.",
    noteText: "If you need a suspended bay or parking dispensation, allow enough time and confirm who will make the application.",
  },
  faq: [
    ["How much does a removal company cost in Milton Keynes?", "There is no single rate. Volume, distance, access, crew size, packing, storage and disposal all affect the price, so compare quotes against the same moving brief."],
    ["Can a parking bay be suspended for a removal van in Milton Keynes?", "Yes. Milton Keynes City Council lists furniture removals as a valid reason for a temporary bay suspension or parking dispensation."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["What if I need old furniture taken away too?", "Say so clearly. A business carrying waste must use lawful commercial waste arrangements, so ask whether disposal and any charges are included."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Milton Keynes?",
    copy: "Describe the move, access and parking once, then compare interested Milton Keynes removal companies and their quotes.",
    buttonLabel: "Get Milton Keynes removal quotes",
  },
});

export const cleanersMiltonKeynes = makeMiltonKeynesProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Milton Keynes? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Milton Keynes?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Milton Keynes cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Milton Keynes rental and cleaning context",
    title: "Shared-rental rules make clear property details especially useful",
    intro: "Milton Keynes has borough-wide planning controls for HMO conversions and mandatory licensing for larger HMOs. Those rules do not require a professional cleaner, but they make property type and handover standard important context for landlord and agent cleaning jobs.",
    items: [
      {
        title: "HMO conversions need planning permission across Milton Keynes",
        text: "Milton Keynes City Council says its Article 4 Direction removes permitted development rights for changing a dwellinghouse to HMO use, so planning permission is required in all cases. If the clean is for a shared rental, state whether it is a routine visit, tenant turnover or preparation for inspection.",
        source: {
          label: "Milton Keynes City Council — Houses in Multiple Occupation",
          url: "https://www.milton-keynes.gov.uk/housing/private-sector-housing/houses-multiple-occupation-hmo",
        },
      },
      {
        title: "Rubbish clearance is separate from ordinary cleaning",
        text: "Milton Keynes City Council explains that waste arising through a business or property-maintenance activity is commercial waste and must be transferred lawfully. If the cleaner is also removing furniture, renovation debris or large amounts of rubbish, agree that service separately.",
        source: {
          label: "Milton Keynes City Council — waste responsibilities for landlords and tenants",
          url: "https://www.milton-keynes.gov.uk/waste-and-recycling/environmental-crime/waste-responsibilities-landlords-and-tenants",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Milton Keynes by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count and actual condition",
    sideCopy: "A shared rental in Wolverton, a central Milton Keynes flat and a family home in Shenley Church End can require very different visit lengths. State bedrooms, bathrooms, condition and specialist tasks.",
    noteLead: "List extras separately.",
    noteText: "Ovens, carpets, inside windows, appliances, heavy build-up and rubbish removal are commonly priced differently from routine cleaning.",
  },
  faq: [
    ["How much does a cleaner cost in Milton Keynes?", "Rates vary with property size, condition, frequency and the type of clean. Compare quotes using the same room count and checklist so the prices mean the same thing."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Include the handover date, property size and any landlord or agent checklist so responding cleaners can price the same standard."],
    ["Does HMO licensing mean I must use a professional cleaner?", "No. HMO planning and licensing rules regulate the property and its management; they do not create a general requirement to hire a professional cleaner."],
    ["Can a cleaner take rubbish away too?", "Some can, but ask specifically. Waste removal is a separate service and commercial disposal rules apply when a business removes the waste."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Milton Keynes?",
    copy: "Describe the property and cleaning checklist once, then compare interested Milton Keynes cleaners and their quotes.",
    buttonLabel: "Get Milton Keynes cleaning quotes",
  },
});
