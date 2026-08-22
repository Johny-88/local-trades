import { makeBootleProfile } from "./bootleProfileBase";

export const removalCompaniesBootle = makeBootleProfile("removal-companies", {
  heroCopy: "Moving home in Bootle, elsewhere in Merseyside or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Bootle?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, restricted parking, long carries and bulky items so suitable Bootle removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Bootle moving-day parking",
    title: "Sefton specifically allows parking suspensions for house moves, but they need arranging before moving day",
    intro: "Moves around Bootle town centre, Linacre, Seaforth and other restricted streets can depend on where the removal vehicle is legally allowed to wait. Sefton Council has separate suspension and dispensation processes for reserved or restricted parking.",
    items: [
      {
        title: "House moves are an accepted reason for a parking suspension",
        text: "Sefton Council lists house moves among the reasons parking bays may be suspended. The council asks for suspension applications at least four working days before the space is needed, so access should be checked before the moving timetable is fixed.",
        source: {
          label: "Sefton Council — suspensions and dispensations",
          url: "https://www.sefton.gov.uk/parking-roads-travel/parking/suspensions-and-dispensations/",
        },
      },
      {
        title: "A dispensation is separate if the removal vehicle must park in the suspended space",
        text: "Sefton says a parking restriction must be suspended before a dispensation is requested to park in that space. This matters when the van needs to remain close to the property longer than ordinary loading rules allow.",
        source: {
          label: "Sefton Council — suspensions and dispensations",
          url: "https://www.sefton.gov.uk/parking-roads-travel/parking/suspensions-and-dispensations/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Bootle by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A flat near Bootle Strand, a terrace in Litherland and a house in Netherton can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not leave restricted-street access until moving morning.",
    noteText: "If the van needs reserved road space or permission to wait beyond normal restrictions, arrange the suspension or dispensation in advance and tell the removal company exactly where it can stop.",
  },
  faq: [
    ["How much does a removal company cost in Bootle?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can parking be suspended for a house move in Bootle?", "Yes. Sefton Council specifically lists house moves as an accepted reason for a parking suspension."],
    ["How much notice should I allow for a Sefton parking suspension?", "Sefton asks for normal suspension applications at least four working days before the space is needed."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Bootle?",
    copy: "Describe the move, access and parking once, then compare interested Bootle removal companies and their quotes.",
    buttonLabel: "Get Bootle removal quotes",
  },
});

export const cleanersBootle = makeBootleProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Bootle? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Bootle?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Bootle cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Bootle private-rental licensing",
    title: "Bootle has a live Selective Licensing scheme, so landlord cleans should reflect the actual condition and management standard of the property",
    intro: "End-of-tenancy and landlord cleaning in Bootle often sits within a more regulated private-rental environment than an ordinary one-off domestic clean. Sefton has operated Selective Licensing in the Bootle area since 2018 and the current designation runs to 2028.",
    items: [
      {
        title: "Privately rented homes in the designated Bootle area can require a Selective Licence",
        text: "Sefton Council says its Selective Licensing scheme applies to privately rented properties within the designated Bootle area, subject to the statutory exemptions. A landlord handover clean should therefore be scoped around the actual rooms, shared spaces and property condition rather than treated as a generic domestic visit.",
        source: {
          label: "Sefton Council — Selective and Additional HMO Licensing 2023–2028",
          url: "https://www.sefton.gov.uk/housing/private-sector-housing/landlord-licensing-and-accreditation/selective-and-additional-hmo-licensing-schemes-2023-2028/",
        },
      },
      {
        title: "Sefton is actively enforcing licensing in Bootle",
        text: "In June 2026 Sefton Council publicised a successful prosecution involving an unlicensed rented property in Bootle. For landlords, that reinforces the value of giving cleaners a clear inventory, handover standard and any communal-area requirements.",
        source: {
          label: "Sefton Council — Bootle landlord licensing prosecution, June 2026",
          url: "https://www.sefton.gov.uk/mysefton-news/latest-news/sefton-landlord-faces-fine-approaching-7-000-for-failing-to-license-a-rented-property/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Bootle by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Netherton, a terrace in Linacre and an end-of-tenancy clean near Bootle town centre can need very different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Bootle?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Does Bootle have Selective Licensing for rented homes?", "Yes. Sefton Council operates a Selective Licensing scheme in a designated Bootle area, with the current scheme running to February 2028."],
    ["Should I list communal areas for a landlord clean?", "Yes. Shared halls, kitchens, bathrooms, stairwells and bin areas can materially change the cleaning time and price."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Bootle?",
    copy: "Describe the property and cleaning checklist once, then compare interested Bootle cleaners and their quotes.",
    buttonLabel: "Get Bootle cleaning quotes",
  },
});
