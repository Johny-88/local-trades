import { makeBirkenheadProfile } from "./birkenheadProfileBase";

export const removalCompaniesBirkenhead = makeBirkenheadProfile("removal-companies", {
  heroCopy: "Moving home in Birkenhead, elsewhere on the Wirral or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Birkenhead?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Birkenhead removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Birkenhead moving-day parking",
    title: "Central Birkenhead has a Controlled Parking Zone, so van access should be checked before moving day",
    intro: "Moves around Hamilton Square, Argyle Street, Conway Street and the town centre can involve controlled on-street parking. Wirral Council publishes the Birkenhead CPZ hours and the streets where paid bays operate.",
    items: [
      {
        title: "Birkenhead's Controlled Parking Zone operates from 8am to 6.30pm",
        text: "Wirral Council says the central Birkenhead CPZ restricts on-street parking except in designated bays or where signs say otherwise. During operating hours, drivers must follow the signed restrictions rather than assuming a removal van can wait on any convenient stretch of road.",
        source: {
          label: "Wirral Council — parking restrictions",
          url: "https://www.wirral.gov.uk/parking-roads-and-travel/parking/parking-restrictions",
        },
      },
      {
        title: "Many central streets have paid on-street bays",
        text: "Wirral's on-street parking list includes Hamilton Square, Argyle Street, Conway Street, Chester Street, Grange Road East and other central Birkenhead streets. Check the exact address and loading position before fixing the van plan.",
        source: {
          label: "Wirral Council — on-street parking",
          url: "https://www.wirral.gov.uk/parking-roads-and-travel/parking/where-can-i-park-wirral/street-parking",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Birkenhead by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A flat near Hamilton Square, a terrace in Tranmere and a house in Oxton can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not assume town-centre parking will sort itself out on the day.",
    noteText: "If the collection or destination is in controlled streets, tell the removal company what bays, loading space or private access are actually available and check the signs in advance.",
  },
  faq: [
    ["How much does a removal company cost in Birkenhead?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Is there a Controlled Parking Zone in Birkenhead?", "Yes. Wirral Council says central Birkenhead has a CPZ operating from 8am to 6.30pm each day."],
    ["Are there paid on-street bays near Birkenhead town centre?", "Yes. Wirral Council lists paid bays on streets including Hamilton Square, Argyle Street, Conway Street and others."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Birkenhead?",
    copy: "Describe the move, access and parking once, then compare interested Birkenhead removal companies and their quotes.",
    buttonLabel: "Get Birkenhead removal quotes",
  },
});

export const cleanersBirkenhead = makeBirkenheadProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Birkenhead? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Birkenhead?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Birkenhead cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Birkenhead landlord and HMO cleaning",
    title: "Several Birkenhead neighbourhoods are inside current selective-licensing areas, so landlord cleans should reflect the real property use",
    intro: "A normal family home, a licensed HMO and a selectively licensed private rental can create very different handover and communal-area cleaning briefs. Wirral Council's current licensing notices cover multiple parts of Birkenhead and Tranmere.",
    items: [
      {
        title: "Current selective licensing includes Birkenhead Central and several Tranmere areas",
        text: "Wirral Council's 2025 to 2030 designation includes Birkenhead Central, Lower Tranmere, Tranmere North, Hamilton Square B and Tranmere Lairds among its six areas. Landlords should check the exact address rather than assuming every Birkenhead rental has the same licensing position.",
        source: {
          label: "Wirral Council — selective licensing public notice 2025 to 2030",
          url: "https://www.wirral.gov.uk/housing/housing-information-and-advice/private-landlords-and-managing-agents/selective-licensing-2",
        },
      },
      {
        title: "Larger HMOs have separate mandatory licensing rules",
        text: "Wirral says a property occupied by five or more unrelated people forming two or more households who share amenities normally requires a mandatory HMO licence. For a landlord or communal-area clean, state the actual bedroom and shared-space count.",
        source: {
          label: "Wirral Council — Houses in multiple occupation licence",
          url: "https://www.wirral.gov.uk/business/licences-and-permits/houses-multiple-occupation-licence",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Birkenhead by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Prenton, a family home in Oxton and a landlord changeover in Tranmere can need very different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Birkenhead?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Does selective licensing apply in parts of Birkenhead?", "Yes. Wirral's current scheme includes Birkenhead Central and several Tranmere and Hamilton Square areas."],
    ["When does a Birkenhead HMO need mandatory licensing?", "Wirral says mandatory HMO licensing generally applies where five or more unrelated people in two or more households share amenities."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Birkenhead?",
    copy: "Describe the property and cleaning checklist once, then compare interested Birkenhead cleaners and their quotes.",
    buttonLabel: "Get Birkenhead cleaning quotes",
  },
});
