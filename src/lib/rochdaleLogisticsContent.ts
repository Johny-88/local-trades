import { makeRochdaleProfile } from "./rochdaleProfileBase";

export const removalCompaniesRochdale = makeRochdaleProfile("removal-companies", {
  heroCopy: "Moving home in Rochdale, elsewhere in Greater Manchester or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Rochdale?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, narrow access, permit streets, long carries and bulky items so suitable Rochdale removal companies can plan the right crew and vehicle.",
  },
  localContext: {
    eyebrow: "Rochdale moving-day parking",
    title: "Permit streets and loading rules can change how a removal van uses the kerb",
    intro: "Rochdale has resident parking schemes as well as signed loading restrictions. If the van cannot simply park legally outside, establish the access plan before moving day rather than leaving it to the driver on arrival.",
    items: [
      {
        title: "A resident's visitor permit can be used by a tradesperson or contractor",
        text: "Rochdale Council says eligible households in resident parking schemes receive a visitor permit, and a tradesperson or contractor working at the property can borrow it. A permit does not guarantee a space directly outside the house.",
        source: {
          label: "Rochdale Borough Council — resident parking permits",
          url: "https://www.rochdale.gov.uk/residential-streets-parking-home/residents-parking-permit",
        },
      },
      {
        title: "Loading bays are for active loading or unloading of large, bulky items",
        text: "The council's current parking guidance says loading bays are only for vehicles actively loading or unloading large, bulky items. For a removal van, distinguish genuine loading time from ordinary parking and check the signs at the address.",
        source: {
          label: "Rochdale Borough Council — parking fines and loading",
          url: "https://www.rochdale.gov.uk/parking-roads-transport/parking-fines/2",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Rochdale by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the route from van to door at both addresses",
    sideCopy: "A terrace in Rochdale, a family home in Norden and a flat in Middleton can involve very different parking, stairs and carrying distances. Give both access routes before comparing quotes.",
    noteLead: "Do not assume the nearest kerb space is available for the whole move.",
    noteText: "Tell the removal company about permit zones, loading restrictions, narrow streets, stairs and likely carrying distance so vehicle size and crew can be planned correctly.",
  },
  faq: [
    ["How much does a removal company cost in Rochdale?", "There is no single local rate. Volume, distance, crew size, stairs, parking, packing, storage and clearance all affect the quote."],
    ["Can a removal contractor use my Rochdale visitor parking permit?", "Rochdale Council says a tradesperson or contractor working at the property can borrow the household visitor permit where the address is in an eligible resident scheme."],
    ["Can a removal van simply stay in a loading bay?", "No. The council says loading bays are for active loading or unloading of large, bulky items rather than ordinary parking."],
    ["Can I post a small man-with-a-van job?", "Yes. Smaller furniture moves can be posted alongside full household removals."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Rochdale?",
    copy: "Describe the move, access and parking once, then compare interested Rochdale removal companies and their quotes.",
    buttonLabel: "Get Rochdale removal quotes",
  },
});

export const cleanersRochdale = makeRochdaleProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Rochdale? Describe the property and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Rochdale?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, internal windows, post-build dust or rubbish removal so suitable Rochdale cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Rochdale HMO and landlord cleaning",
    title: "Rochdale's HMO licensing rules make the real occupancy and shared-space layout important",
    intro: "A shared-house changeover can be a much larger job than an ordinary domestic clean. Rochdale has both mandatory and additional HMO licensing criteria, so landlords should describe bedrooms, bathrooms, kitchens and communal areas accurately.",
    items: [
      {
        title: "Mandatory licensing applies from five occupants in two or more households",
        text: "Rochdale Council says mandatory HMO licensing applies where a property has five or more occupants forming two or more households. For cleaning quotes, give the actual room count and all shared facilities rather than just the number of bedrooms.",
        source: {
          label: "Rochdale Borough Council — HMO licensing",
          url: "https://www.rochdale.gov.uk/hmo",
        },
      },
      {
        title: "Additional licensing also covers smaller shared homes and some converted flats",
        text: "The council says additional licensing applies where there are three or more unrelated occupants forming two or more households, and also to qualifying Section 257 buildings converted into self-contained flats.",
        source: {
          label: "Rochdale Borough Council — apply for a landlord licence",
          url: "https://www.rochdale.gov.uk/private-landlords/apply-landlord-licence",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Rochdale by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the real room count and cleaning standard",
    sideCopy: "A weekly clean in Castleton, an end-of-tenancy clean in Heywood and an HMO changeover in Rochdale can need very different visit lengths. State bedrooms, bathrooms, communal rooms and specialist tasks.",
    noteLead: "Separate routine cleaning from a handover or post-build clean.",
    noteText: "Ovens, carpets, post-build dust, internal windows and clearance are often priced separately. A clear checklist gives every cleaner the same scope to quote.",
  },
  faq: [
    ["How much does a cleaner cost in Rochdale?", "Rates vary with property size, condition, frequency and cleaning type. Compare quotes using the same room count and checklist."],
    ["Can I use this page for end-of-tenancy cleaning?", "Yes. Include the handover date, room count, condition and any landlord or agent checklist."],
    ["Which HMOs need mandatory licensing in Rochdale?", "Rochdale Council says mandatory licensing applies where five or more occupants form two or more households."],
    ["Does Rochdale also license some smaller HMOs?", "Yes. The council's additional licensing criteria include properties with three or more unrelated occupants forming two or more households and qualifying Section 257 buildings."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Rochdale?",
    copy: "Describe the property and cleaning checklist once, then compare interested Rochdale cleaners and their quotes.",
    buttonLabel: "Get Rochdale cleaning quotes",
  },
});
