import { makeEdinburghProfile } from "./edinburghProfileBase";

export const removalCompaniesEdinburgh = makeEdinburghProfile("removal-companies", {
  heroCopy: "Moving home within Edinburgh, elsewhere in Scotland or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Edinburgh?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, tenement access, lifts, long carries and controlled parking so suitable Edinburgh removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Edinburgh moving-day context",
    title: "Controlled parking can need advance arrangements for home removals",
    intro: "Edinburgh City Council specifically lists furniture and home removals as a reason to request a parking dispensation. Depending on the street, a bay suspension may also be needed, so access should be checked before moving day rather than left to the driver on arrival.",
    items: [
      {
        title: "A parking dispensation can cover longer loading on a single yellow line",
        text: "The council says a dispensation may be needed when loading or unloading on a single yellow line for longer than 30 minutes, including for furniture or home removals, and asks for at least 24 hours' notice. Give the removal company the exact address and expected loading window early so they can decide whether a dispensation is appropriate.",
        source: {
          label: "City of Edinburgh Council — parking dispensations and suspensions",
          url: "https://www.edinburgh.gov.uk/parking-spaces/dispensations-suspensions",
        },
      },
      {
        title: "Resident and public parking bays have different suspension notice periods",
        text: "Edinburgh says resident permit spaces require three days' notice excluding weekends, while public parking bays require two days' notice excluding weekends, with suspension charges based on the street or area. If the van needs a specific bay outside the property, establish that before confirming the move timetable.",
        source: {
          label: "City of Edinburgh Council — parking dispensations and suspensions",
          url: "https://www.edinburgh.gov.uk/parking-spaces/dispensations-suspensions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Edinburgh by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the real route from van to door",
    sideCopy: "A tenement in Marchmont, a New Town flat, a property in Leith and a house in Corstorphine can involve very different stairs, closes, parking and carrying distances. Give access details at both addresses.",
    noteLead: "Check parking before the move date.",
    noteText: "If loading needs a controlled bay or a longer stop on a restricted street, confirm whether a dispensation or suspension is required and who will arrange it.",
  },
  faq: [
    ["How much does a removal company cost in Edinburgh?", "There is no single Edinburgh rate. Volume, distance, stairs, lifts, crew size, parking, packing, storage and clearance can all change the quote."],
    ["Can Edinburgh parking restrictions affect a house move?", "Yes. The council offers parking dispensations for some longer loading and unloading, including home removals, and separate bay suspensions where a specific parking space is needed."],
    ["How much notice is needed for a parking suspension?", "The council currently states three days excluding weekends for resident permit spaces and two days excluding weekends for public parking bays."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Edinburgh?",
    copy: "Describe the move, access and parking once, then compare interested Edinburgh removal companies and their quotes.",
    buttonLabel: "Get Edinburgh removal quotes",
  },
});

export const cleanersEdinburgh = makeEdinburghProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Edinburgh? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Edinburgh?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows, post-build dust or rubbish removal so suitable Edinburgh cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Edinburgh rental-property context",
    title: "Shared homes and short-term lets are both subject to Edinburgh-specific controls",
    intro: "Edinburgh's rental market includes licensed HMOs and a citywide short-term-let control area. These rules do not require a professional cleaner, but they make the property's actual use important when the clean is tied to a tenant changeover, inspection or holiday-let turnaround.",
    items: [
      {
        title: "Three or more unrelated people sharing a home can bring it into HMO licensing",
        text: "The City of Edinburgh Council defines HMO accommodation as the main home of three or more unrelated people who share facilities. If the cleaning job is for an HMO, say whether the scope is private rooms, communal areas, a full changeover or preparation for a landlord or licensing inspection.",
        source: {
          label: "City of Edinburgh Council — HMO licence",
          url: "https://www.edinburgh.gov.uk/directory-record/1099558/houses-in-multiple-occupation-hmo-licence",
        },
      },
      {
        title: "The whole council area is a short-term-let control area",
        text: "Edinburgh's control area means using an entire dwelling that is not the host's principal home as a short-term let is treated as a material change of use requiring planning permission. For turnaround or deep-clean work, identify whether the property is a normal tenancy, HMO, home-share or secondary short-term let rather than assuming every rental operates the same way.",
        source: {
          label: "City of Edinburgh Council — short-term-let control area",
          url: "https://www.edinburgh.gov.uk/downloads/file/31823/short-term-let-designation-map",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Edinburgh by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count, condition and property use",
    sideCopy: "A student HMO in Marchmont, a New Town flat, a short-term let near the centre and a family house in Morningside can need very different cleaning schedules and standards. State what the property is used for and what handover is expected.",
    noteLead: "Separate cleaning from clearance.",
    noteText: "Ovens, carpets, internal windows, heavy build-up, post-build dust and rubbish removal are often priced differently from an ordinary recurring clean.",
  },
  faq: [
    ["How much does a cleaner cost in Edinburgh?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy or short-term-let cleaning?", "Yes. Include the handover time, room count, laundry or linen requirements if relevant and any landlord, agent or host checklist."],
    ["When can an Edinburgh shared property need an HMO licence?", "The council describes HMOs as the main home of three or more unrelated people sharing facilities, subject to the statutory rules and exemptions."],
    ["Does HMO or short-term-let status mean I must hire a professional cleaner?", "No. Those regimes regulate the property and its use; they do not create a general requirement to use a professional cleaning company."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Edinburgh?",
    copy: "Describe the property, use and cleaning checklist once, then compare interested Edinburgh cleaners and their quotes.",
    buttonLabel: "Get Edinburgh cleaning quotes",
  },
});
