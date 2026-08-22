import { makePortsmouthProfile } from "./portsmouthProfileBase";

export const removalCompaniesPortsmouth = makePortsmouthProfile("removal-companies", {
  heroCopy: "Moving within Portsmouth, across Hampshire or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your part of the city.",
  answer: {
    title: "Looking for a removal company near you in Portsmouth?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, long carries and parking restrictions so suitable Portsmouth removal companies can judge the crew, vehicle and timing required.",
  },
  localContext: {
    eyebrow: "Portsmouth move planning",
    title: "Parking suspensions and lawful disposal can materially affect moving-day logistics",
    intro: "Portsmouth has tightly managed on-street parking across many residential areas, and the council specifically allows parking suspensions for home and business removals. If the move also includes clearing unwanted items, commercial waste rules matter too.",
    items: [
      {
        title: "Home removals are an eligible reason for a parking suspension",
        text: "Portsmouth City Council says parking spaces in residents' zones and on-street bays can be suspended for removal vans. Current standard suspension charges are £1 per metre per day, subject to a £38 minimum, so check the street early if the vehicle needs guaranteed kerb space.",
        source: {
          label: "Portsmouth City Council — parking suspensions",
          url: "https://www.portsmouth.gov.uk/services/parking-roads-and-travel/parking/parking-suspensions/",
        },
      },
      {
        title: "Waste removed by a business must follow commercial waste rules",
        text: "Portsmouth City Council says businesses must minimise, sort and store waste safely, complete transfer notes and use registered carriers. If the removal company is also clearing unwanted furniture or rubbish, ask how disposal is handled and whether that cost is included.",
        source: {
          label: "Portsmouth City Council — business waste",
          url: "https://www.portsmouth.gov.uk/services/recycling-and-rubbish/guide-to-waste-in-portsmouth/business-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Portsmouth by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both ends of the move",
    sideCopy: "A Southsea terrace, a Fratton flat and a house in Cosham can involve very different parking, stairs and carrying distances. Give the real route from vehicle to door at both properties.",
    noteLead: "Check the kerb before moving day.",
    noteText: "If a controlled bay needs to be suspended, allow enough time and confirm who will arrange it.",
  },
  faq: [
    ["How much does a removal company cost in Portsmouth?", "There is no single Portsmouth rate. Volume, distance, access, crew size, packing, storage and disposal all change the price, so compare quotes against the same moving brief."],
    ["Can I reserve space for a removal van in Portsmouth?", "Portsmouth City Council allows eligible parking suspensions for home and business removals in designated bays and parking zones."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["What if I need old furniture taken away too?", "Say so clearly. Waste removed as part of paid work must be handled through lawful commercial waste arrangements."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Portsmouth?",
    copy: "Describe the move, access and parking once, then compare interested Portsmouth removal companies and their quotes.",
    buttonLabel: "Get Portsmouth removal quotes",
  },
});

export const cleanersPortsmouth = makePortsmouthProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Portsmouth? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Portsmouth?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Portsmouth cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Portsmouth rental and cleaning context",
    title: "Portsmouth's city-wide HMO licensing makes property type especially relevant for landlord and agent cleaning jobs",
    intro: "Portsmouth has one of the clearest local HMO regimes in the country: all HMOs in the city require a licence. That does not create a general rule to hire a cleaner, but it makes accurate property and handover details important for shared-rental work.",
    items: [
      {
        title: "All HMOs in Portsmouth require a licence",
        text: "Portsmouth City Council says all HMOs in the city have required a licence since 1 September 2023, including many properties occupied by three or four unrelated people. If the job is for a shared rental, say whether it is routine cleaning, a tenant turnover or preparation for inspection.",
        source: {
          label: "Portsmouth City Council — about HMO licences",
          url: "https://www.portsmouth.gov.uk/services/housing/landlords/houses-in-multiple-occupation/faqs/about-hmo-licences/",
        },
      },
      {
        title: "Rubbish removal is separate from ordinary cleaning",
        text: "Portsmouth City Council does not collect business waste and requires businesses to use lawful commercial disposal arrangements. If the cleaner is also removing furniture, renovation debris or large quantities of rubbish, agree that service separately.",
        source: {
          label: "Portsmouth City Council — business waste",
          url: "https://www.portsmouth.gov.uk/services/recycling-and-rubbish/guide-to-waste-in-portsmouth/business-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Portsmouth by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count and actual condition",
    sideCopy: "A shared house in Southsea, a Fratton flat and a family home in North End can require very different visit lengths. State bedrooms, bathrooms, condition and any specialist tasks.",
    noteLead: "List extras separately.",
    noteText: "Ovens, carpets, inside windows, heavy build-up and rubbish removal are often priced differently from routine cleaning.",
  },
  faq: [
    ["How much does a cleaner cost in Portsmouth?", "Rates vary with property size, condition, frequency and the type of clean. Compare quotes using the same room count and checklist."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Include the handover date, property size and any landlord or agent checklist."],
    ["Does Portsmouth HMO licensing mean I must hire a professional cleaner?", "No. HMO licensing regulates qualifying shared properties and their management; it does not create a general requirement to use a professional cleaner."],
    ["Can a cleaner take rubbish away too?", "Some can, but ask specifically. Waste removal is a separate service and business-waste rules apply when a company removes the waste."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Portsmouth?",
    copy: "Describe the property and cleaning checklist once, then compare interested Portsmouth cleaners and their quotes.",
    buttonLabel: "Get Portsmouth cleaning quotes",
  },
});
