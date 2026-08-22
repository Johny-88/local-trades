import { makeSolihullProfile } from "./solihullProfileBase";

export const removalCompaniesSolihull = makeSolihullProfile("removal-companies", {
  heroCopy: "Moving home in Solihull or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Solihull?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, narrow access, restricted parking, long carries and bulky items so suitable Solihull removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Solihull moving-day access",
    title: "Controlled parking and red routes can need advance permission before the removal van arrives",
    intro: "Solihull Council offers parking dispensations for essential works and a separate red-route permit that specifically mentions moving house. On a restricted street, sorting the vehicle position before moving day can avoid delays and enforcement problems.",
    items: [
      {
        title: "Parking dispensations should normally be requested at least three working days ahead",
        text: "The council says a dispensation can allow a vehicle to park in a restricted area where there is a valid reason, including essential works, and advises applying at least three working days before it is needed. If a removal van must stay close to the property, confirm the exact restriction and obtain approval before relying on the space.",
        source: {
          label: "Solihull Council — parking dispensation permits",
          url: "https://www.solihull.gov.uk/parking/apply-parking-dispensation-permit",
        },
      },
      {
        title: "Residents on red routes have a separate moving-house permit option",
        text: "Solihull Council says residents who live on a red route and need to park on the lines outside their home, including for moving house, can apply for a red-route permit. Red-route stopping rules are stricter than ordinary yellow-line restrictions, so give the removal company any approved location and times in advance.",
        source: {
          label: "Solihull Council — red route parking permits",
          url: "https://www.solihull.gov.uk/parking/getting-red-route-parking-permit",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Solihull by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to front door",
    sideCopy: "A town-centre flat, a house in Shirley and a property in Knowle or Dorridge can involve very different parking and carrying distances. Give access details at both addresses.",
    noteLead: "Do not assume the van can stop outside.",
    noteText: "If there are red lines, resident restrictions or limited kerb space, check the council permit route early and tell the mover what has actually been approved.",
  },
  faq: [
    ["How much does a removal company cost in Solihull?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can a removal van get a parking dispensation in Solihull?", "Potentially. The council has a dispensation process for restricted areas and advises applying at least three working days before the permit is needed."],
    ["What if my home is on a red route?", "Solihull has a separate red-route permit process for residents who need access outside their home, including for moving house."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Solihull?",
    copy: "Describe the move, access and parking once, then compare interested Solihull removal companies and their quotes.",
    buttonLabel: "Get Solihull removal quotes",
  },
});

export const cleanersSolihull = makeSolihullProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Solihull? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Solihull?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Solihull cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Solihull rental and cleaning context",
    title: "Shared houses and paid clearance work can bring separate licensing and waste responsibilities",
    intro: "Solihull requires mandatory HMO licensing where the statutory five-person threshold is met. The council also treats rubbish arising from a paid service as commercial rubbish, which matters if a clean includes removal of unwanted material rather than cleaning alone.",
    items: [
      {
        title: "Larger HMOs require a council licence",
        text: "Solihull Council says an HMO needs a mandatory licence where five or more people from more than one household occupy the property. For a landlord or shared-house clean, state whether the job covers private rooms, communal areas, a full changeover or post-refurbishment work so cleaners can price the actual scope.",
        source: {
          label: "Solihull Council — homes in multiple occupation",
          url: "https://www.solihull.gov.uk/housing/homes-multiple-occupation",
        },
      },
      {
        title: "Waste produced by a paid clearance service is commercial rubbish",
        text: "The council says rubbish that comes from a service you have paid for is commercial rubbish and cannot be taken to the Bickenhill Household Waste Recycling Centre. If a cleaner is also removing bags, furnishings or post-build waste, confirm who is legally taking responsibility for disposal.",
        source: {
          label: "Solihull Council — commercial rubbish",
          url: "https://www.solihull.gov.uk/environment-and-animals/commercial-rubbish",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Solihull by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and condition",
    sideCopy: "A regular clean in Olton, a larger family home in Dorridge and an HMO changeover in Shirley need very different visit lengths. State bedrooms, bathrooms, communal areas and specialist tasks.",
    noteLead: "Separate cleaning from waste removal.",
    noteText: "Ovens, carpets, post-build dust and clearance are often priced separately. If rubbish is being removed as part of paid work, make sure the disposal route is lawful.",
  },
  faq: [
    ["How much does a cleaner cost in Solihull?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["When does an HMO need a licence in Solihull?", "Solihull Council says mandatory HMO licensing applies where five or more people from more than one household occupy the property, subject to the statutory definition."],
    ["Can a cleaner take rubbish to Bickenhill tip for me?", "Not as ordinary household waste if the rubbish arises from a paid service. Solihull treats that material as commercial rubbish, so confirm the lawful disposal route."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Solihull?",
    copy: "Describe the property and cleaning checklist once, then compare interested Solihull cleaners and their quotes.",
    buttonLabel: "Get Solihull cleaning quotes",
  },
});
