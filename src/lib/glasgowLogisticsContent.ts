import { makeGlasgowProfile } from "./glasgowProfileBase";

export const removalCompaniesGlasgow = makeGlasgowProfile("removal-companies", {
  heroCopy: "Moving home within Glasgow, elsewhere in Scotland or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Glasgow?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, tenement access, lifts, long carries and city-centre vehicle access so suitable Glasgow removal companies can plan the right crew and van.",
  },
  localContext: {
    eyebrow: "Glasgow moving-day context",
    title: "City-centre vehicle access and lawful waste removal can change the practical moving plan",
    intro: "Glasgow's Low Emission Zone is enforced in the city centre, so the vehicle being used can matter on some moves. If a removal also includes clearance or disposal, Scottish waste-transport rules are another practical point to confirm before the job starts.",
    items: [
      {
        title: "Glasgow's Low Emission Zone can affect vehicles entering the city centre",
        text: "Glasgow's LEZ came into force on 1 June 2023 and is enforced within the city-centre zone. For a move involving an address inside the zone, ask the removal company whether the planned vehicle is compliant and factor loading access into the timetable rather than discovering a restriction on moving day.",
        source: {
          label: "Scottish Government — Glasgow Low Emission Zone context",
          url: "https://www.gov.scot/publications/agglomerations-noise-action-plan-scotland/pages/2/",
        },
      },
      {
        title: "Trades taking waste away from a house job need the correct Scottish authorisation",
        text: "Scottish environmental guidance says waste produced by work at private households becomes business waste for the contractor, and businesses transporting waste need the relevant SEPA authorisation. If unwanted furniture, packaging or renovation debris is being removed, ask who is responsible for it and where it will go.",
        source: {
          label: "NetRegs Scotland — waste duty of care",
          url: "https://www.netregs.org.uk/environmental-topics/waste/duty-of-care-your-waste-responsibilities/what-is-the-duty-of-care-for-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Glasgow by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to front door",
    sideCopy: "A tenement flat in Hillhead or Partick, a property in Dennistoun and a house in Cathcart can involve very different stairs, closes, lifts, parking and carrying distances. Give access details at both ends of the move.",
    noteLead: "Check city-centre vehicle access early.",
    noteText: "If either address sits inside Glasgow's LEZ or has restricted loading, confirm the planned vehicle and access arrangement before the moving date.",
  },
  faq: [
    ["How much does a removal company cost in Glasgow?", "There is no single Glasgow rate. Volume, distance, crew size, stairs, lifts, parking, packing, storage and clearance all affect the quote."],
    ["Does Glasgow's Low Emission Zone matter for a house move?", "It can. If the van needs to enter the city-centre LEZ, the removal company should use a compliant vehicle or plan the job accordingly."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["What if I want unwanted furniture taken away too?", "Include it in the job description. Waste removed as part of paid work is subject to Scottish business-waste and transport requirements, so ask who will handle disposal."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Glasgow?",
    copy: "Describe the move, access and vehicle constraints once, then compare interested Glasgow removal companies and their quotes.",
    buttonLabel: "Get Glasgow removal quotes",
  },
});

export const cleanersGlasgow = makeGlasgowProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Glasgow? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Glasgow?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Glasgow cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Glasgow rental and HMO context",
    title: "Glasgow's HMO rules make the type and use of a shared property worth identifying clearly",
    intro: "In Scotland, HMOs are licensed from three unrelated occupiers sharing facilities, and Glasgow also applies planning controls to certain HMO uses. That does not create a general requirement to hire a cleaner, but it matters when a job is part of a landlord handover, communal clean or property refurbishment.",
    items: [
      {
        title: "Three or more unrelated occupiers can bring a Glasgow property into HMO licensing",
        text: "Glasgow City Council's HMO guidance says a licence is required where living accommodation is occupied by three or more unrelated people from three or more families as their main residence and they share sanitary and cooking facilities. For an HMO clean, say whether the job covers private rooms, shared areas or a complete tenant changeover.",
        source: {
          label: "Glasgow City Council — licensing houses in multiple occupation",
          url: "https://onlineservices.glasgow.gov.uk/CouncillorsandCommittees/viewSelectedDocument.asp?c=P62AFQDN2U0GNTZ3NT",
        },
      },
      {
        title: "Planning rules can also apply to HMO use in Glasgow",
        text: "Glasgow planning guidance distinguishes HMO use by property type, including flats occupied by three or more unrelated people and larger shared houses. If cleaning is linked to a conversion or change of use, the homeowner or landlord should confirm the property's lawful use separately from the cleaning contract.",
        source: {
          label: "Glasgow City Council — defining what requires planning permission",
          url: "https://onlineservices.glasgow.gov.uk/CouncillorsandCommittees/viewSelectedDocument.asp?c=P62AFQDNT181Z3DNDN",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Glasgow by postcode, property type and schedule. Example areas include:",
    sideTitle: "State the real room count and condition",
    sideCopy: "A student flat in Hillhead, a tenement in Pollokshields and a family house in Cathcart can need very different visit lengths. Give bedrooms, bathrooms, floor area where known and any specialist tasks.",
    noteLead: "Separate routine cleaning from clearance.",
    noteText: "Ovens, carpets, internal windows, heavy build-up, post-build dust and rubbish removal are often priced separately from an ordinary recurring clean.",
  },
  faq: [
    ["How much does a cleaner cost in Glasgow?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, rooms, condition and any landlord or agent checklist so cleaners quote for the same standard."],
    ["When does a shared Glasgow property need an HMO licence?", "Scottish HMO rules generally apply where three or more unrelated people from three or more families share facilities, subject to statutory definitions and exemptions."],
    ["Does an HMO licence mean I must use a professional cleaner?", "No. HMO licensing regulates the property and its management; it does not create a general requirement to hire a professional cleaning company."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Glasgow?",
    copy: "Describe the property and cleaning checklist once, then compare interested Glasgow cleaners and their quotes.",
    buttonLabel: "Get Glasgow cleaning quotes",
  },
});
