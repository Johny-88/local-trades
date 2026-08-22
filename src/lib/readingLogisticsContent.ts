import { makeReadingProfile } from "./readingProfileBase";

export const removalCompaniesReading = makeReadingProfile("removal-companies", {
  heroCopy: "Moving within Reading, across Berkshire or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your part of Reading.",
  answer: {
    title: "Looking for a removal company near you in Reading?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, long carries and parking restrictions so suitable Reading removal companies can judge the crew, vehicle and timing required.",
  },
  localContext: {
    eyebrow: "Reading move planning",
    title: "Parking restrictions and clearance waste can change the practical job",
    intro: "Reading has controlled on-street parking and permit arrangements across busy parts of the borough. If a move also includes clearing unwanted items, commercial waste rules can apply to the company taking them away.",
    items: [
      {
        title: "Check the kerb before planning where the removal vehicle will stand",
        text: "Reading Borough Council publishes separate information for on-street parking, permits and parking restrictions. For city-centre flats and controlled streets, confirm the loading position and any restrictions before moving day rather than assuming a large van can wait directly outside.",
        source: {
          label: "Reading Borough Council — parking",
          url: "https://www.reading.gov.uk/vehicles-roads-and-transport/parking/",
        },
      },
      {
        title: "Waste removed by a business must be handled as commercial waste",
        text: "Reading Borough Council says businesses have a duty of care for commercial waste and must use authorised disposal arrangements. If a removal job includes clearing unwanted furniture or rubbish, ask whether disposal is included and whether the contractor is authorised to carry the waste.",
        source: {
          label: "Reading Borough Council — commercial waste advice",
          url: "https://www.reading.gov.uk/waste-and-recycling/commercial-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Reading by postcode, moving date and destination. Example areas include:",
    sideTitle: "Give access details at both ends",
    sideCopy: "A flat near central Reading, a terrace in Newtown and a house in Caversham can involve very different parking, carrying distances and stairs. Describe the route from vehicle to door at both addresses.",
    noteLead: "Separate moving from clearance.",
    noteText: "If unwanted furniture or rubbish is being taken away, confirm the disposal arrangement as well as the transport price.",
  },
  faq: [
    ["How much does a removal company cost in Reading?", "There is no single Reading rate. Volume, distance, access, crew size, packing, storage and disposal can all change the price, so compare quotes against the same moving brief."],
    ["Can I post a man-with-a-van job in Reading?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["Should I check parking before moving day?", "Yes. Reading has controlled on-street parking and permit arrangements, so check the collection and destination streets before relying on a particular loading position."],
    ["What if I need old furniture cleared as well?", "Say so clearly. A company taking waste away as part of paid work must use lawful commercial waste arrangements, so ask whether disposal is included."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Reading?",
    copy: "Describe the move, access and parking once, then compare interested Reading removal companies and their quotes.",
    buttonLabel: "Get Reading removal quotes",
  },
});

export const cleanersReading = makeReadingProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Reading? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Reading?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Reading cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Reading rental and cleaning context",
    title: "Borough-wide HMO licensing makes clear property details especially useful",
    intro: "Reading introduced additional HMO licensing across the whole borough from 1 March 2026. That does not create a general requirement to hire a cleaner, but it makes clear property condition and handover details especially relevant for shared rented homes.",
    items: [
      {
        title: "Most smaller HMOs now need a Reading licence too",
        text: "Reading Borough Council says its additional licensing scheme applies borough-wide to many HMOs occupied by three or four people from two or more households. For landlord or agent cleaning jobs, state whether the property is a shared house and whether the work is a routine clean, turnover clean or preparation for inspection.",
        source: {
          label: "Reading Borough Council — extension of property licensing",
          url: "https://www.reading.gov.uk/housing/private-renting/extension-of-property-licensing/",
        },
      },
      {
        title: "Rubbish removal is not the same as ordinary cleaning",
        text: "Reading's commercial waste guidance says waste produced or removed through business activity must be handled under commercial waste rules. If the cleaning brief includes large amounts of rubbish, old furniture or renovation debris, agree the disposal method separately.",
        source: {
          label: "Reading Borough Council — commercial waste advice",
          url: "https://www.reading.gov.uk/waste-and-recycling/commercial-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Reading by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count and the actual condition",
    sideCopy: "A shared rental in Redlands, a central Reading flat and a family home in Tilehurst can require very different visit lengths. State bedrooms, bathrooms, condition and any specialist tasks.",
    noteLead: "List extras separately.",
    noteText: "Ovens, carpets, inside windows, appliances, heavy build-up and rubbish removal are commonly priced differently from routine cleaning.",
  },
  faq: [
    ["How much does a cleaner cost in Reading?", "Rates vary with property size, condition, frequency and the type of clean. Compare quotes using the same room count and checklist so the prices mean the same thing."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Include the handover date, property size and any landlord or agent checklist so responding cleaners can price the same standard."],
    ["Does Reading HMO licensing mean I must hire a professional cleaner?", "No. HMO licensing regulates qualifying shared rented properties; it does not create a general requirement to use a professional cleaner."],
    ["Can a cleaner take rubbish away too?", "Some can, but ask specifically. Waste removal is a separate service and commercial disposal rules can apply when a business removes the waste."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Reading?",
    copy: "Describe the property and cleaning checklist once, then compare interested Reading cleaners and their quotes.",
    buttonLabel: "Get Reading cleaning quotes",
  },
});
