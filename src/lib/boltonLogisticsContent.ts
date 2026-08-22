import { makeBoltonProfile } from "./boltonProfileBase";

export const removalCompaniesBolton = makeBoltonProfile("removal-companies", {
  heroCopy: "Moving home in Bolton, elsewhere in Greater Manchester or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Bolton?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Bolton removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Bolton moving-day parking",
    title: "A controlled parking bay may need to be suspended before the removal van arrives",
    intro: "Bolton Council allows parking bays to be suspended in circumstances such as contractors needing repeated loading and unloading. If a move depends on keeping a controlled bay clear, arrange the restriction rather than assuming the van can wait there on the day.",
    items: [
      {
        title: "Parking-bay suspensions need at least two working days' notice",
        text: "Bolton Council says applications for a parking bay suspension must be made at least two working days before the required start date. That lead time matters where a removal vehicle needs a reliable loading position close to the property.",
        source: {
          label: "Bolton Council — parking bay suspension",
          url: "https://www.bolton.gov.uk/parking-permits/parking-permits-1/4",
        },
      },
      {
        title: "Current road restrictions can affect the route as well as the doorstep",
        text: "Bolton Council publishes current road closures and restrictions, including temporary parking-place suspensions. For a larger move, check both the immediate parking arrangement and the access route for the planned date.",
        source: {
          label: "Bolton Council — road closures and restrictions",
          url: "https://www.bolton.gov.uk/roads-pavements/road-closures-restrictions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Bolton by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both addresses before comparing quotes",
    sideCopy: "A town-centre flat, a terrace in Farnworth and a larger house around Heaton or Horwich can need very different vehicle positions and carrying distances. State stairs, lifts, driveways, narrow streets and the distance from parking to the door.",
    noteLead: "Do not leave controlled-bay access until moving morning.",
    noteText: "If a reserved loading position is important, check the council process early enough to meet its notice period and tell the removal company what has been arranged.",
  },
  faq: [
    ["How much does a removal company cost in Bolton?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can I suspend a parking bay for a move in Bolton?", "Bolton Council permits parking-bay suspensions in suitable circumstances, including repeated loading and unloading."],
    ["How much notice does a Bolton parking-bay suspension need?", "The council says you must apply at least two working days before the suspension is required."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Bolton?",
    copy: "Describe the move, access and parking once, then compare interested Bolton removal companies and their quotes.",
    buttonLabel: "Get Bolton removal quotes",
  },
});

export const cleanersBolton = makeBoltonProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Bolton? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Bolton?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Bolton cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Bolton shared-rental context",
    title: "HMO licensing and planning are separate checks for shared rented homes",
    intro: "Bolton has mandatory HMO licensing for qualifying larger shared homes and, since June 2025, a boroughwide Article 4 Direction requiring planning permission for conversion of a dwelling to a small HMO. For landlord or changeover cleaning, identify the actual property use and room count.",
    items: [
      {
        title: "Qualifying HMOs with five or more tenants require a licence",
        text: "Bolton Council says mandatory licensing covers HMOs occupied by five or more tenants forming two or more households who share facilities. For a shared-house clean, give the cleaner the bedroom count, shared kitchens, bathrooms and communal spaces rather than only the floor area.",
        source: {
          label: "Bolton Council — HMO licence",
          url: "https://www.bolton.gov.uk/private-rented-owner-occupied-housing/home-multiple-occupation-licence",
        },
      },
      {
        title: "New HMO conversions also have a boroughwide planning check",
        text: "Bolton Council introduced an immediate Article 4 Direction on 13 June 2025 removing the normal permitted-development right to convert a dwellinghouse to a small HMO. Licensing and planning are separate requirements.",
        source: {
          label: "Bolton Council — planning and immediate Article 4 Direction",
          url: "https://www.bolton.gov.uk/planning",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Bolton by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Westhoughton, a family home in Heaton and an HMO changeover near central Bolton need different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Bolton?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["When does an HMO need a licence in Bolton?", "Bolton says mandatory licensing applies to qualifying HMOs occupied by five or more tenants from two or more households who share facilities."],
    ["Does an HMO licence replace planning permission?", "No. Bolton treats licensing and planning separately, and the boroughwide Article 4 Direction means new small-HMO conversions require planning permission."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Bolton?",
    copy: "Describe the property and cleaning checklist once, then compare interested Bolton cleaners and their quotes.",
    buttonLabel: "Get Bolton cleaning quotes",
  },
});
