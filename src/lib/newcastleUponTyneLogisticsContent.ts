import { makeNewcastleUponTyneProfile } from "./newcastleUponTyneProfileBase";

export const removalCompaniesNewcastleUponTyne = makeNewcastleUponTyneProfile("removal-companies", {
  heroCopy: "Moving within Newcastle upon Tyne, elsewhere in the North East or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your part of the city.",
  answer: {
    title: "Looking for a removal company near you in Newcastle upon Tyne?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, long carries and parking restrictions so suitable Newcastle removal companies can judge the crew, vehicle and timing required.",
  },
  localContext: {
    eyebrow: "Newcastle move planning",
    title: "Parking controls and lawful waste disposal can affect moving-day logistics",
    intro: "Newcastle City Council has formal parking dispensation and suspension procedures, including provision for furniture removals. If a move also includes clearing unwanted items, the business removing them has separate commercial-waste responsibilities.",
    items: [
      {
        title: "Parking dispensations and suspensions can be used for removals",
        text: "Newcastle City Council says parking dispensations can cover loading and unloading such as furniture deliveries or removals, while a parking suspension can reserve a bay and specifically lists removing furniture from buildings as an example. The council asks for suspension applications at least three working days in advance, so check access early on controlled streets.",
        source: {
          label: "Newcastle City Council — parking dispensations and suspensions",
          url: "https://new.newcastle.gov.uk/parking/dispensations-and-suspensions",
        },
      },
      {
        title: "Waste taken away by a business has a legal duty-of-care route",
        text: "Newcastle City Council says businesses must store, move and dispose of business waste responsibly under their duty of care. If the removal job includes old furniture, rubbish or clearance items, ask who is carrying the waste and whether lawful disposal is included in the quote.",
        source: {
          label: "Newcastle City Council — business waste duty of care",
          url: "https://new.newcastle.gov.uk/recycling-waste/commercial-waste-businesses/your-business-waste-responsibilities-or-duty-care",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Newcastle upon Tyne by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both ends",
    sideCopy: "A flat near the city centre, a terrace in Heaton and a house in Gosforth can involve very different parking, stairs and carrying distances. Give access details at both collection and delivery addresses.",
    noteLead: "Check controlled parking before moving day.",
    noteText: "If a removal vehicle needs reserved kerb space or a dispensation, allow time for the council process rather than assuming the van can wait directly outside.",
  },
  faq: [
    ["How much does a removal company cost in Newcastle upon Tyne?", "There is no single Newcastle rate. Volume, distance, access, crew size, packing, storage and disposal all affect the price, so compare quotes against the same moving brief."],
    ["Can I get a parking suspension for a removal van in Newcastle?", "Newcastle City Council allows parking suspensions for reasons including removing furniture from buildings and asks applicants to apply at least three working days before the space is needed."],
    ["Can I post a man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["What if I need old furniture cleared too?", "Say so clearly. A business taking waste away has a legal duty of care, so ask how disposal is handled and whether it is included in the quote."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Newcastle upon Tyne?",
    copy: "Describe the move, access and parking once, then compare interested Newcastle removal companies and their quotes.",
    buttonLabel: "Get Newcastle removal quotes",
  },
});

export const cleanersNewcastleUponTyne = makeNewcastleUponTyneProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Newcastle upon Tyne? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Newcastle upon Tyne?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Newcastle cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Newcastle rental and cleaning context",
    title: "Property-licensing rules make clear handover details useful for rented homes",
    intro: "Newcastle operates mandatory HMO licensing alongside selective and additional property-licensing schemes in parts of the city. These rules do not create a general requirement to hire a cleaner, but they make the type of rented property and the required handover standard useful context for landlord and agent jobs.",
    items: [
      {
        title: "Newcastle has several property-licensing schemes",
        text: "Newcastle City Council says the city uses selective licensing, mandatory HMO licensing and additional HMO licensing. Mandatory HMO licensing applies to qualifying properties with five or more occupants in two or more households, while selective licensing covers designated private-rental areas. State whether the job is a routine clean, tenant turnover or preparation for inspection.",
        source: {
          label: "Newcastle City Council — property licensing schemes",
          url: "https://new.newcastle.gov.uk/property-licensing-schemes-newcastle",
        },
      },
      {
        title: "Rubbish clearance is separate from ordinary cleaning",
        text: "Newcastle City Council defines trade waste as waste produced by business activity and says businesses have a duty to manage it legally. If the cleaner is also taking away old furniture, renovation debris or large amounts of rubbish, agree that service separately rather than assuming it is part of a standard clean.",
        source: {
          label: "Newcastle City Council — commercial waste for businesses",
          url: "https://new.newcastle.gov.uk/recycling-waste/commercial-waste-businesses",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Newcastle upon Tyne by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count and actual condition",
    sideCopy: "A shared rental in Jesmond, a city-centre flat and a family home in Gosforth can require very different visit lengths. State bedrooms, bathrooms, condition and specialist tasks rather than asking for a generic house-clean price.",
    noteLead: "List extras separately.",
    noteText: "Ovens, carpets, inside windows, appliances, heavy build-up and rubbish removal are commonly priced differently from routine cleaning.",
  },
  faq: [
    ["How much does a cleaner cost in Newcastle upon Tyne?", "Rates vary with property size, condition, frequency and the type of clean. Compare quotes using the same room count and checklist so the prices mean the same thing."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Include the handover date, property size and any landlord or agent checklist so responding cleaners can price the same standard."],
    ["Does Newcastle property licensing mean I must use a professional cleaner?", "No. Property licensing regulates qualifying rented properties and their management; it does not create a general requirement to hire a professional cleaner."],
    ["Can a cleaner take rubbish away too?", "Some can, but ask specifically. Waste removal is a separate service and commercial waste rules apply when a business removes the waste."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Newcastle upon Tyne?",
    copy: "Describe the property and cleaning checklist once, then compare interested Newcastle cleaners and their quotes.",
    buttonLabel: "Get Newcastle cleaning quotes",
  },
});
