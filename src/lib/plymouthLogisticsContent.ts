import { makePlymouthProfile } from "./plymouthProfileBase";

export const removalCompaniesPlymouth = makePlymouthProfile("removal-companies", {
  heroCopy: "Moving home in Plymouth or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Plymouth?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, narrow access, long carries and bulky items so suitable Plymouth removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Plymouth moving-day context",
    title: "Controlled parking and restricted access can materially change the moving-day plan",
    intro: "Plymouth has resident parking zones and separate business permits for trades working at properties, so van access should be checked before moving day rather than assumed. The council also makes clear that a parking permit does not guarantee an available space.",
    items: [
      {
        title: "Permit zones can affect where a removal van can legally wait",
        text: "Plymouth City Council says some residential streets require permits and vehicles must always be legally parked within the bay markings. If either address sits in a controlled zone, give the removal company the exact street and check the loading or parking arrangement before the move.",
        source: {
          label: "Plymouth City Council — resident parking permits",
          url: "https://www.plymouth.gov.uk/resident-parking-permit",
        },
      },
      {
        title: "The council has specific permits for trades needing a works vehicle close to a property",
        text: "Plymouth's business parking permit guidance expressly includes builders and other trades carrying out work at properties in resident parking zones where a works vehicle needs to stay close for tools and materials. A removal firm should still confirm which parking or loading rules apply to its vehicle and job.",
        source: {
          label: "Plymouth City Council — business parking permits",
          url: "https://www.plymouth.gov.uk/business-parking-permit",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Plymouth by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to front door",
    sideCopy: "A Barbican or Devonport property, a flat near Mutley and a house in Plymstock can involve very different parking, stairs and carrying distances. Give access details at both ends of the move.",
    noteLead: "Check controlled parking early.",
    noteText: "If either address is in a permit zone or on a street with limited loading, confirm the legal stopping arrangement before the moving date.",
  },
  faq: [
    ["How much does a removal company cost in Plymouth?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Do Plymouth parking zones matter on moving day?", "They can. Some streets require permits or have other restrictions, so give the removal company the exact addresses and check where the van can legally stop."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work can be posted alongside full household removals."],
    ["Should I mention difficult access?", "Yes. Stairs, narrow streets, long carries, lifts and restricted parking can change the vehicle, crew and time needed."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Plymouth?",
    copy: "Describe the move, access and parking once, then compare interested Plymouth removal companies and their quotes.",
    buttonLabel: "Get Plymouth removal quotes",
  },
});

export const cleanersPlymouth = makePlymouthProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Plymouth? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Plymouth?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows, post-build dust or rubbish removal so suitable Plymouth cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Plymouth rental and HMO context",
    title: "HMO planning controls cover eleven neighbourhood groups around central Plymouth",
    intro: "Plymouth removes the normal permitted-development route for changing a house to a small HMO in eleven named neighbourhood groups, while mandatory HMO licensing generally starts at five occupiers from more than one household. That is useful context for landlord handovers and communal cleaning jobs.",
    items: [
      {
        title: "Small HMO conversions need planning permission in the Article 4 neighbourhoods",
        text: "The council lists Beacon Park and Pennycross, City Centre, East End, Efford, Hartley and Mannamead, Higher Compton, Lipson and Laira, Mount Gould, Mutley and Greenbank, Peverell, and Stoke and Stonehouse. In those areas, changing a C3 house to a small C4 HMO requires planning permission.",
        source: {
          label: "Plymouth City Council — HMO planning and Article 4",
          url: "https://www.plymouth.gov.uk/planning-permission-and-houses-multiple-occupation-hmo",
        },
      },
      {
        title: "Plymouth's HMO standards include cleanliness, drainage and refuse-management duties",
        text: "The council's HMO guidance requires managers to maintain the property, including drainage and refuse arrangements, and says accommodation should be clean at the beginning of occupation. For an HMO clean, say whether the job covers private rooms, shared spaces or a complete tenant changeover.",
        source: {
          label: "Plymouth City Council — HMO standards and management",
          url: "https://www.plymouth.gov.uk/standards-and-managing-hmo",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Plymouth by postcode, property type and schedule. Example areas include:",
    sideTitle: "State the real room count and condition",
    sideCopy: "A shared property around Mutley or Peverell, a waterfront flat and a family house in Plympton can need very different visit lengths. Give bedrooms, bathrooms, communal areas and any specialist tasks.",
    noteLead: "Separate routine cleaning from clearance.",
    noteText: "Ovens, carpets, internal windows, heavy build-up, post-build dust and rubbish removal are often priced separately from an ordinary recurring clean.",
  },
  faq: [
    ["How much does a cleaner cost in Plymouth?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Do small HMOs always need planning permission in Plymouth?", "No. The extra Article 4 control applies in the council's specified neighbourhoods; larger HMOs have separate planning requirements across the city."],
    ["When does mandatory HMO licensing generally apply?", "The council says an HMO is likely to be licensable where at least five people from more than one household live there and the property meets the HMO test."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Plymouth?",
    copy: "Describe the property and cleaning checklist once, then compare interested Plymouth cleaners and their quotes.",
    buttonLabel: "Get Plymouth cleaning quotes",
  },
});
