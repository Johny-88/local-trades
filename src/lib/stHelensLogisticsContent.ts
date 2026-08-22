import { makeStHelensProfile } from "./stHelensProfileBase";

export const removalCompaniesStHelens = makeStHelensProfile("removal-companies", {
  heroCopy: "Moving home in St Helens, elsewhere in Merseyside or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in St Helens?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable St Helens removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "St Helens moving-day parking",
    title: "Restricted-street parking needs checking before the removal vehicle arrives",
    intro: "St Helens Council operates parking suspensions and dispensations for restricted highway locations. For a move where the van needs to stay close to the property, confirm the correct parking route in advance rather than assuming ordinary loading rules will cover the whole visit.",
    items: [
      {
        title: "Applications should normally be made at least two working days ahead",
        text: "The council's current suspension and dispensation form says applications should be submitted two working days before the requested start date, with extra charges for later applications. Approval is not automatic and local highway conditions are considered.",
        source: {
          label: "St Helens Borough Council — suspension or dispensation application",
          url: "https://www.sthelens.gov.uk/media/12124/St-Helens-Council-application-for-suspension-or-dispensation-form/pdf/St_Helens_Council_Application_for_Suspension_or_Dispensation.pdf?m=1749113817983",
        },
      },
      {
        title: "A parking dispensation is not a general loading permit",
        text: "St Helens Council says dispensations are intended for vehicles that must remain at a restricted location to carry out works and that they are not issued simply for loading or unloading. If a move needs a bay kept clear or another special arrangement, ask Parking Services what type of permission is appropriate.",
        source: {
          label: "St Helens Borough Council — apply for dispensation to park",
          url: "https://sthelens.gov.uk/article/3116/Apply-for-dispensation-to-park",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover St Helens by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A town-centre flat, a house in Rainhill and a move from Haydock can involve very different parking, stairs and carrying distances. Give the crew the walking distance, access width and any parking restrictions at both ends.",
    noteLead: "Do not leave restricted-street access until moving morning.",
    noteText: "If the van cannot legally remain close to the property without a council arrangement, resolve that before the move and tell the removal company exactly where it can wait.",
  },
  faq: [
    ["How much does a removal company cost in St Helens?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can I get permission for a removal van to stay on a restricted street?", "Possibly, but the correct route depends on the restriction and why the vehicle must remain there. St Helens Council assesses suspensions and dispensations individually."],
    ["How much notice should I allow for a parking application?", "The council's current form says applications should normally be submitted at least two working days before the requested start date."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in St Helens?",
    copy: "Describe the move, access and parking once, then compare interested St Helens removal companies and their quotes.",
    buttonLabel: "Get St Helens removal quotes",
  },
});

export const cleanersStHelens = makeStHelensProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in St Helens? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in St Helens?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable St Helens cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "St Helens HMO cleaning context",
    title: "Shared rented homes can need a different cleaning brief from an ordinary domestic property",
    intro: "St Helens has mandatory HMO licensing for qualifying shared homes. For landlord, communal-area and changeover cleaning, identifying the occupancy and shared facilities helps define the real room count and the standard expected at handover.",
    items: [
      {
        title: "Mandatory licensing applies to qualifying five-person HMOs",
        text: "St Helens Council says mandatory HMO licensing applies where a property is occupied by five or more people from two or more separate households who share facilities such as a kitchen or bathroom. The number of storeys is no longer the deciding factor.",
        source: {
          label: "St Helens Borough Council — mandatory HMO licensing laws",
          url: "https://www.sthelens.gov.uk/article/5207/Mandatory-licensing-laws-for-HMOs",
        },
      },
      {
        title: "HMO standards cover shared kitchens, bathrooms and ventilation",
        text: "The council's HMO standards require appropriate kitchen and bathroom facilities and address matters such as ventilation, hot and cold water and safe shared accommodation. For a landlord clean, list communal rooms and high-use facilities separately rather than quoting only by bedroom count.",
        source: {
          label: "St Helens Borough Council — HMO standards and enforcement",
          url: "https://www.sthelens.gov.uk/article/5209/HMO-standards-and-enforcement",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover St Helens by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and the standard required",
    sideCopy: "A weekly clean in Eccleston, a family home in Rainford and a shared-house changeover nearer central St Helens need different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in St Helens?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["When does an HMO need mandatory licensing in St Helens?", "The council says qualifying HMOs occupied by five or more people from two or more households who share facilities require mandatory licensing."],
    ["Should communal HMO areas be listed separately?", "Yes. Shared kitchens, bathrooms, halls and living areas can materially change the time and scope of a clean."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in St Helens?",
    copy: "Describe the property and cleaning checklist once, then compare interested St Helens cleaners and their quotes.",
    buttonLabel: "Get St Helens cleaning quotes",
  },
});
