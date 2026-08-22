import { makeLiverpoolProfile } from "./liverpoolProfileBase";

export const removalCompaniesLiverpool = makeLiverpoolProfile("removal-companies", {
  heroCopy: "Moving home within Liverpool, across Merseyside or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Liverpool?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, long carries, loading restrictions and controlled parking so suitable Liverpool removal companies can judge the crew, vehicle and timing required.",
  },
  localContext: {
    eyebrow: "Liverpool move-planning context",
    title: "A house move can need a formal parking-bay suspension rather than simply relying on kerb space",
    intro: "Liverpool City Council specifically allows parking bays to be suspended to complete a removal. The council asks applicants to calculate the required bay length, provide vehicle details and apply at least 10 working days before the work, so vehicle access is worth planning before moving day.",
    items: [
      {
        title: "Liverpool explicitly allows bay suspensions for removals",
        text: "The council says pay-and-display parking bays can be suspended for essential work, removals, filming or scaffolding. One bay is treated as five metres and applications should be submitted at least 10 working days in advance, so tell the removal company early if the property depends on controlled kerb access.",
        source: {
          label: "Liverpool City Council — apply to suspend parking bays",
          url: "https://liverpool.gov.uk/parking-roads-and-travel/parking-permits/apply-to-suspend-pay-and-display-parking-bays/",
        },
      },
      {
        title: "Clearance waste taken away by a business needs a lawful trade-waste route",
        text: "Liverpool says businesses have a duty to organise their own commercial waste removal and use a legally authorised carrier, with documentation retained as evidence. If the move includes furniture, packaging or rubbish clearance, ask who is responsible for disposal and whether it is included in the quote.",
        source: {
          label: "Liverpool City Council — commercial waste",
          url: "https://liverpool.gov.uk/bins-and-recycling/commercial-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Liverpool by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe access at both ends",
    sideCopy: "A city-centre flat, a Wavertree terrace and a house in Woolton or West Derby can involve very different stairs, carrying distances and parking. Give the actual route from vehicle to door at both properties.",
    noteLead: "Check parking before the move date.",
    noteText: "Where a controlled bay is needed, establish whether a formal suspension is required and who will apply for it.",
  },
  faq: [
    ["How much does a removal company cost in Liverpool?", "There is no single local rate. Volume, distance, access, crew size, packing, storage, parking and disposal can all change the price, so compare quotes against the same moving brief."],
    ["Can I reserve a parking bay for a removal van in Liverpool?", "Liverpool City Council allows applications to suspend certain parking bays for removals. Applications should normally be submitted at least 10 working days in advance."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["What if I need unwanted furniture taken away too?", "Say so clearly. If a business removes waste as part of the job, lawful waste-carrier and disposal requirements apply, so ask whether that service is included."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Liverpool?",
    copy: "Describe the move, access and parking once, then compare interested Liverpool removal companies and their quotes.",
    buttonLabel: "Get Liverpool removal quotes",
  },
});

export const cleanersLiverpool = makeLiverpoolProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Liverpool? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Liverpool?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Liverpool cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Liverpool rental and HMO context",
    title: "HMO planning and licensing rules vary by occupancy and by whether the property falls inside Liverpool's Article 4 area",
    intro: "Liverpool requires planning permission for HMOs of seven or more people anywhere in the city, and for conversion to an HMO for three or more people inside the defined Article 4 area. Separately, qualifying HMOs with five or more occupiers from more than one household require a licence.",
    items: [
      {
        title: "Small-HMO planning rules are tighter inside the Article 4 area",
        text: "Liverpool City Council says a property inside the HMO Article 4 area needs planning permission when converted to an HMO for three or more people. If cleaning is tied to a refurbishment, tenant handover or change of use, state the actual occupancy and purpose rather than treating every shared property as the same type of job.",
        source: {
          label: "Liverpool City Council — planning permission for HMOs",
          url: "https://liverpool.gov.uk/planning-and-building-control/planning-permission/planning-permission-for-hmos/",
        },
      },
      {
        title: "Five-or-more-person HMOs can require mandatory licensing",
        text: "Liverpool's HMO guidance says a property with five or more people forming unrelated households and sharing amenities such as a kitchen or bathroom must have an HMO licence. For a licensed shared property, tell the cleaner whether the job is routine communal cleaning, a tenant changeover or preparation for inspection.",
        source: {
          label: "Liverpool City Council — HMO licence guidance",
          url: "https://liverpool.gov.uk/business/licences-and-permits/landlord-licensing/houses-in-multiple-occupancy/hmo-licence-guidance/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Liverpool by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count and actual condition",
    sideCopy: "A shared rental in Wavertree, a flat near the centre and a family home in Allerton or Woolton can need very different visit lengths. State bedrooms, bathrooms, condition and specialist tasks.",
    noteLead: "List extras separately.",
    noteText: "Ovens, carpets, inside windows, heavy build-up and rubbish removal are commonly priced differently from routine cleaning.",
  },
  faq: [
    ["How much does a cleaner cost in Liverpool?", "Rates vary with property size, condition, frequency and the type of clean. Compare quotes using the same room count and checklist so the prices cover the same work."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Include the handover date, property size and any landlord or agent checklist so responding cleaners can quote for the same standard."],
    ["Does Liverpool HMO licensing mean I must use a professional cleaner?", "No. HMO planning and licensing rules regulate qualifying shared properties and their management; they do not create a general requirement to hire a professional cleaner."],
    ["Does every small HMO in Liverpool need planning permission?", "No. Liverpool's three-or-more-person restriction applies within the defined Article 4 area. HMOs of seven or more people require planning permission anywhere in the city."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Liverpool?",
    copy: "Describe the property and cleaning checklist once, then compare interested Liverpool cleaners and their quotes.",
    buttonLabel: "Get Liverpool cleaning quotes",
  },
});
