import { makeOldhamProfile } from "./oldhamProfileBase";

export const removalCompaniesOldham = makeOldhamProfile("removal-companies", {
  heroCopy: "Moving home in Oldham, elsewhere in Greater Manchester or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Oldham?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries, bulky items and whether a skip or container is part of the move so suitable Oldham removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Oldham moving-day access",
    title: "Highway space and waiting restrictions need checking before vans, skips or containers arrive",
    intro: "Oldham Council's highway rules matter when a move needs more than an ordinary legal parking space. A skip on the public highway needs a permit, and waiting restrictions can require separate parking permission.",
    items: [
      {
        title: "Skips on Oldham's public highway need a council permit",
        text: "Oldham Council says the skip operator must be registered or obtain the appropriate one-off permit before a skip is placed on a highway it maintains. The permit is obtained by the skip company rather than the householder.",
        source: {
          label: "Oldham Council — skips",
          url: "https://www.oldham.gov.uk/info/200204/licensing/1050/skips",
        },
      },
      {
        title: "Waiting restrictions can need a separate parking dispensation",
        text: "The council's skip guidance says a skip must not be placed on waiting restrictions without the proper dispensation from the parking department. For a move involving a skip, container or unusually long loading period, establish the legal kerb-space arrangement before moving day.",
        source: {
          label: "Oldham Council — skips",
          url: "https://www.oldham.gov.uk/info/200204/licensing/1050/skips",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Oldham by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A terrace in Hollinwood, a family home in Royton and a flat near Oldham town centre can involve very different kerb access, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not assume a convenient space outside the property is legally available.",
    noteText: "Give the removal company any yellow-line restrictions, narrow access, permit issues, stairs and likely carrying distance so vehicle size and crew can be planned correctly.",
  },
  faq: [
    ["How much does a removal company cost in Oldham?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Who applies for an Oldham skip permit if I need one during a move?", "Oldham Council says the skip operator applies for the highway permit, not the individual householder."],
    ["Can a skip be placed on waiting restrictions in Oldham?", "Only with the appropriate parking dispensation. The council says the highway permit alone does not override waiting restrictions."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Oldham?",
    copy: "Describe the move, access and parking once, then compare interested Oldham removal companies and their quotes.",
    buttonLabel: "Get Oldham removal quotes",
  },
});

export const cleanersOldham = makeOldhamProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Oldham? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Oldham?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Oldham cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Oldham HMO and landlord cleaning",
    title: "Borough-wide HMO planning control means occupancy and property use matter for landlord work",
    intro: "Shared homes can create a much larger cleaning brief than ordinary domestic properties. Oldham has mandatory licensing for larger HMOs and a borough-wide Article 4 direction for new small HMOs.",
    items: [
      {
        title: "Larger shared homes can require mandatory HMO licensing",
        text: "Oldham Council says a property must be licensed where five or more people from two or more households occupy it and share facilities such as bathrooms or kitchens. For changeover cleaning, give the actual room and shared-space layout.",
        source: {
          label: "Oldham Council — Houses in Multiple Occupation",
          url: "https://www.oldham.gov.uk/info/201198/help_for_landlords/258/houses_in_multiple_occupation",
        },
      },
      {
        title: "Small HMO conversions now need planning permission across Oldham",
        text: "Oldham's borough-wide Article 4 direction took effect on 1 January 2026. It removes the normal permitted-development right for a C3 dwellinghouse to become a C4 small HMO for up to six residents.",
        source: {
          label: "Oldham Council — Article 4 Direction",
          url: "https://www.oldham.gov.uk/article_4_direction",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Oldham by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Chadderton, an end-of-tenancy clean in Failsworth and an HMO changeover near Oldham town centre can need very different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover or post-build clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Oldham?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Which HMOs need a licence in Oldham?", "Oldham Council says mandatory licensing applies where five or more people from two or more households share facilities."],
    ["Do new small HMOs need planning permission in Oldham?", "Yes. A borough-wide Article 4 direction took effect on 1 January 2026 for C3-to-C4 small-HMO conversions."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Oldham?",
    copy: "Describe the property and cleaning checklist once, then compare interested Oldham cleaners and their quotes.",
    buttonLabel: "Get Oldham cleaning quotes",
  },
});
