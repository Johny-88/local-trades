import { makeCardiffProfile } from "./cardiffProfileBase";

export const removalCompaniesCardiff = makeCardiffProfile("removal-companies", {
  heroCopy: "Moving home in Cardiff or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Cardiff?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, controlled parking, long carries and bulky items so suitable Cardiff removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Cardiff moving-day context",
    title: "Controlled parking and trade-waste rules can materially affect a Cardiff move",
    intro: "Cardiff has several controlled parking zones and a digital contractor-permit system. If a move also includes paid clearance, the waste becomes commercial responsibility rather than ordinary household disposal.",
    items: [
      {
        title: "Contractor permits can be needed after loading or unloading",
        text: "Cardiff Council says tradespeople and landlords can apply for contractor permits where work requires parking in marked resident bays or Permit Parking Areas. Loading and unloading is allowed without the permit, but the vehicle must then move to a lawful parking place unless an appropriate permit is in force. Plan this before moving day on controlled streets.",
        source: {
          label: "Cardiff Council — contractor permits (trade waivers)",
          url: "https://www.cardiff.gov.uk/contractorpermit",
        },
      },
      {
        title: "Paid clearance waste needs a lawful commercial route",
        text: "Cardiff Council says businesses have a duty of care to use an authorised waste route and retain appropriate paperwork. Landlords are also responsible for waste created by repairs and for waste left after a tenancy ends. If a removal includes disposal, confirm who is carrying it and where it will go.",
        source: {
          label: "Cardiff Council — business waste responsibilities",
          url: "https://www.cardiff.gov.uk/businessesresponsibility",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Cardiff by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe kerb access at both addresses",
    sideCopy: "A flat in Cathays, a terrace in Canton and a larger home in Llandaff can involve very different parking, stairs and carrying distances. Give the route from van to front door at both ends.",
    noteLead: "Do not assume a resident bay is available to the van.",
    noteText: "Where controlled parking applies, tell the removal company what loading access exists and whether a contractor or other parking arrangement is needed after loading finishes.",
  },
  faq: [
    ["How much does a removal company cost in Cardiff?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can a removal van use resident parking in Cardiff?", "Loading and unloading can take place, but longer parking in resident or permit areas may need a valid contractor permit or another lawful parking option."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Small furniture moves and man-with-a-van work can be posted alongside full household removals."],
    ["What if I need old furniture removed too?", "Include it in the job description and confirm that any paid clearance will use an authorised commercial waste route."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Cardiff?",
    copy: "Describe the move, access and parking once, then compare interested Cardiff removal companies and their quotes.",
    buttonLabel: "Get Cardiff removal quotes",
  },
});

export const cleanersCardiff = makeCardiffProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Cardiff? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Cardiff?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows, post-build dust or rubbish removal so suitable Cardiff cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Cardiff rental and HMO context",
    title: "Cardiff combines citywide HMO planning controls with Welsh landlord regulation",
    intro: "Since 2016, Cardiff requires planning permission for new HMOs from three unrelated occupiers. HMO licensing and the separate Rent Smart Wales registration/licensing regime can also matter for landlord handovers and shared-house cleaning work.",
    items: [
      {
        title: "New HMOs from three unrelated occupiers need planning permission",
        text: "Cardiff Council says C4 HMOs for three to six unrelated people and larger sui generis HMOs require planning permission. The council also assesses concentrations of existing HMOs, including specific thresholds around proposed properties. For landlord or changeover cleaning, describe the actual property use rather than treating every shared house as an ordinary family dwelling.",
        source: {
          label: "Cardiff Council — houses in multiple occupation planning",
          url: "https://www.cardiff.gov.uk/HMOlicence",
        },
      },
      {
        title: "Rental property in Wales also sits under Rent Smart Wales",
        text: "Rent Smart Wales says landlords of privately rented domestic property in Wales must register, while landlords or agents carrying out letting or management activities may also need a licence. This is separate from any HMO licence and is useful context for landlords arranging cleans, inspections or maintenance between occupancies.",
        source: {
          label: "Rent Smart Wales — landlord registration",
          url: "https://rentsmart.gov.wales/en/landlord/landlord-registration/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Cardiff by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and tenancy type",
    sideCopy: "A shared house in Cathays, a flat in Roath and a family property in Llanishen can need very different visit lengths. State bedrooms, bathrooms, communal areas and specialist tasks.",
    noteLead: "Separate ordinary cleaning from clearance.",
    noteText: "Ovens, carpets, internal windows, post-build dust and waste removal are often priced separately from a normal recurring clean, and landlord waste has separate disposal responsibilities.",
  },
  faq: [
    ["How much does a cleaner cost in Cardiff?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Do new HMOs need planning permission in Cardiff?", "Yes. Cardiff Council says planning permission is required for HMOs from three unrelated occupiers."],
    ["Is Rent Smart Wales the same as an HMO licence?", "No. Rent Smart Wales registration and licensing are Wales-wide landlord/agent requirements, while HMO licensing is a separate property-licensing regime."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Cardiff?",
    copy: "Describe the property and cleaning checklist once, then compare interested Cardiff cleaners and their quotes.",
    buttonLabel: "Get Cardiff cleaning quotes",
  },
});
