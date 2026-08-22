import { makeSouthamptonProfile } from "./southamptonProfileBase";

export const removalCompaniesSouthampton = makeSouthamptonProfile("removal-companies", {
  heroCopy: "Moving within Southampton, across Hampshire or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your part of the city.",
  answer: {
    title: "Looking for a removal company near you in Southampton?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, lifts, long carries and parking restrictions so suitable Southampton removal companies can judge the crew, vehicle and timing required.",
  },
  localContext: {
    eyebrow: "Southampton move planning",
    title: "Parking reservations and disposal arrangements can affect moving-day logistics",
    intro: "Southampton has controlled parking across busy parts of the city, while unwanted-item disposal is a separate issue from simply transporting belongings. Both are worth clarifying before the quote is finalised.",
    items: [
      {
        title: "A pay-and-display bay can be suspended for sole use",
        text: "Southampton City Council currently allows a pay-and-display bay to be suspended for 24 hours at £14 per bay, per day. If a removal vehicle needs to stand directly outside a flat or terraced property, check the street restrictions early rather than assuming the kerb will be available on moving day.",
        source: {
          label: "Southampton City Council — suspend a pay and display bay",
          url: "https://www.southampton.gov.uk/travel-transport/apply-pay/parking/permits/suspend-pay-display",
        },
      },
      {
        title: "Clearance waste is different from ordinary household moving",
        text: "Southampton's household recycling centre publishes separate trade-waste arrangements and pay-by-load charges for commercial vehicles. If the job includes taking unwanted furniture, packaging or other waste away, ask the removal company whether disposal is included and how it will be handled lawfully.",
        source: {
          label: "Southampton City Council — Southampton household waste recycling centre",
          url: "https://www.southampton.gov.uk/bins-recycling/recycling/centre/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Southampton by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both ends of the move",
    sideCopy: "A flat near the city centre, a terrace in Portswood and a house in Bitterne can involve very different carrying distances, parking and stair access. Give the real route from vehicle to door at both addresses.",
    noteLead: "Check parking before the van arrives.",
    noteText: "If a controlled bay needs to be reserved, arrange it early and confirm who is responsible for the application and charge.",
  },
  faq: [
    ["How much does a removal company cost in Southampton?", "There is no single Southampton rate. The price changes with volume, distance, access, packing, crew size and whether storage or disposal is included, so compare quotes against the same moving brief."],
    ["Can I reserve a parking bay for a removal van in Southampton?", "Southampton City Council allows pay-and-display bays to be suspended for sole use. The council currently lists the charge as £14 per bay for 24 hours."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["What if I also need unwanted furniture taken away?", "Say so clearly. Waste disposal is different from transporting possessions, and the contractor should explain whether lawful disposal and any charges are included."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Southampton?",
    copy: "Describe the move, access and parking once, then compare interested Southampton removal companies and their quotes.",
    buttonLabel: "Get Southampton removal quotes",
  },
});

export const cleanersSouthampton = makeSouthamptonProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Southampton? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Southampton?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Southampton cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Southampton rental and cleaning context",
    title: "The city's HMO licensing expansion makes clear property details especially useful",
    intro: "Southampton has a large private-rental and student market. Its current HMO licensing rules and trade-waste arrangements can matter when cleaning is part of a managed rental handover or property clearance.",
    items: [
      {
        title: "Additional HMO licensing expanded from October 2025",
        text: "Southampton City Council's additional HMO licensing scheme runs from 1 October 2025 to 30 September 2030 and covers smaller HMOs in nine wards including Portswood, Swaythling, Shirley, Bassett and Bargate. The scheme does not create a general requirement to hire a cleaner, but it is useful context for landlords and agents managing shared-house turnovers.",
        source: {
          label: "Southampton City Council — HMO licensing criteria",
          url: "https://www.southampton.gov.uk/housing/landlords/houses-in-multiple-occupation-hmo/licences/",
        },
      },
      {
        title: "Rubbish clearance should be separated from ordinary cleaning",
        text: "Southampton's recycling-centre guidance distinguishes household DIY waste from trade waste and publishes commercial disposal charges. If a cleaner is also removing furniture, renovation debris or large amounts of rubbish, agree the disposal method and price rather than treating it as part of a routine clean.",
        source: {
          label: "Southampton City Council — Southampton household waste recycling centre",
          url: "https://www.southampton.gov.uk/bins-recycling/recycling/centre/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Southampton by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count and condition, not just the postcode",
    sideCopy: "A student HMO in Portswood, a city-centre flat and a family home in Bitterne can require very different visit lengths. State bedrooms, bathrooms, condition and any specialist tasks.",
    noteLead: "List extras separately.",
    noteText: "Ovens, carpets, inside windows, appliances, heavy build-up and rubbish removal are commonly priced differently from routine cleaning.",
  },
  faq: [
    ["How much does a cleaner cost in Southampton?", "Rates vary with the type of clean, property size, condition, frequency and extras. Compare quotes using the same room count and checklist so the prices are meaningful."],
    ["Can I use this for an end-of-tenancy clean?", "Yes. Include the handover date, property size and any landlord or agent checklist so responding cleaners can price the same standard."],
    ["Does Southampton HMO licensing mean I need a professional cleaner?", "No. HMO licensing regulates qualifying shared properties; it does not create a general rule requiring professional cleaning."],
    ["Can a cleaner take rubbish away too?", "Some can, but ask specifically. Waste removal is a separate service and commercial disposal rules can apply when a business removes the waste."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Southampton?",
    copy: "Describe the property and cleaning checklist once, then compare interested Southampton cleaners and their quotes.",
    buttonLabel: "Get Southampton cleaning quotes",
  },
});
