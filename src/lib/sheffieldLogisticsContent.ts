import { makeSheffieldProfile } from "./sheffieldProfileBase";

export const removalCompaniesSheffield = makeSheffieldProfile("removal-companies", {
  heroCopy: "Moving home within Sheffield, across South Yorkshire or further afield? Describe both addresses, access, parking and the amount being moved once, then compare removal companies that cover your area.",
  answer: {
    title: "Looking for a removal company near you in Sheffield?",
    copy: "Enter the collection and destination postcodes, moving date and property details. Mention stairs, steep approaches, long carries and controlled parking so suitable Sheffield removal companies can judge the crew, vehicle and timing required.",
  },
  localContext: {
    eyebrow: "Sheffield move-planning context",
    title: "Parking controls and Sheffield's hilly streets can materially change the moving-day plan",
    intro: "Sheffield City Council can suspend certain controlled parking bays for essential works and activities, but applications normally need advance notice. Across a city with steep streets and dense terraces, the distance and gradient between van and door can also matter to crew size and timing.",
    items: [
      {
        title: "Controlled parking bays can be suspended where the council accepts the need",
        text: "Sheffield City Council allows requests to suspend Pay and Display, permit-holder and loading bays for accepted reasons, including access needed for work at an adjacent property. Applications should normally be submitted at least 14 days in advance, so identify parking constraints before the move date rather than leaving vehicle access until the morning itself.",
        source: {
          label: "Sheffield City Council — request a parking bay suspension",
          url: "https://www.sheffield.gov.uk/parking/request-adjustments/parking-bay-suspension",
        },
      },
      {
        title: "Clearance waste taken away as part of paid work needs a lawful business-waste route",
        text: "Sheffield requires businesses to use a registered waste company and keep evidence of lawful disposal such as a waste transfer note, contract or receipt. If the move also includes unwanted furniture, packaging or rubbish clearance, ask who will carry that material and whether disposal is included in the quote.",
        source: {
          label: "Sheffield City Council — commercial and business waste",
          url: "https://www.sheffield.gov.uk/bins-waste-recycling/other-services/commercial-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Sheffield by postcode, moving date and destination. Example areas include:",
    sideTitle: "Describe the real route from van to door",
    sideCopy: "A flat in Broomhill, a Crookes terrace and a house in Dore can involve very different stairs, gradients, parking and carrying distances. Give access details at both addresses, not just the number of bedrooms.",
    noteLead: "Check controlled parking early.",
    noteText: "If the van needs a controlled bay or work access on a restricted street, establish whether a suspension or other parking arrangement is required before moving day.",
  },
  faq: [
    ["How much does a removal company cost in Sheffield?", "There is no single Sheffield rate. Volume, distance, access, crew size, packing, storage, parking and disposal all affect price, so compare quotes against the same moving brief."],
    ["Can parking restrictions affect a Sheffield house move?", "Yes. Sheffield City Council can suspend some controlled parking bays for accepted reasons, but applications normally require advance notice and approval is not automatic."],
    ["Can I post a smaller man-with-a-van job?", "Yes. Smaller furniture moves and man-with-a-van work sit within the Removal Companies category alongside full household removals."],
    ["What if I need unwanted furniture taken away too?", "Say so clearly. If a business removes waste as part of paid work, lawful waste-carrier and disposal requirements apply, so ask whether that service is included."],
    ["Do I have to hire a removal company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Sheffield?",
    copy: "Describe the move, access and parking once, then compare interested Sheffield removal companies and their quotes.",
    buttonLabel: "Get Sheffield removal quotes",
  },
});

export const cleanersSheffield = makeSheffieldProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, end-of-tenancy work or specialist cleaning in Sheffield? Describe the property, rooms and required standard once, then compare cleaners who cover your area.",
  answer: {
    title: "Looking for a cleaner near you in Sheffield?",
    copy: "Enter the postcode, property size and cleaning type. List extras such as ovens, carpets, windows or rubbish removal so suitable Sheffield cleaners can price the same scope.",
  },
  localContext: {
    eyebrow: "Sheffield rental and HMO context",
    title: "Shared housing is subject to Sheffield-specific HMO planning and licensing rules",
    intro: "Parts of Sheffield sit inside an HMO Article 4 area, and qualifying HMOs with five or more occupiers forming two or more households require a licence. Those rules do not create a general requirement to hire a cleaner, but they make property type and handover purpose useful context for landlord and agent cleaning jobs.",
    items: [
      {
        title: "Small-HMO planning rules are tighter inside Sheffield's Article 4 area",
        text: "Within Sheffield's HMO Article 4 area, changing a C3 dwellinghouse to a C4 HMO for three to six unrelated people requires planning permission. The council also applies a policy that generally resists new HMOs where 20% or more of homes within 200 metres are already shared housing. If a cleaning job is part of a conversion, refurbishment or tenant handover, identify the actual use of the property rather than treating every shared house as the same.",
        source: {
          label: "Sheffield City Council — planning permission for HMOs",
          url: "https://www.sheffield.gov.uk/planning-development/applications-advice/planning-permission-hmo",
        },
      },
      {
        title: "Five-or-more-person HMOs can require mandatory licensing",
        text: "Sheffield City Council says an HMO licence is required where five or more people forming two or more households occupy the property, subject to the statutory definitions and exemptions. If the clean is for a licensed shared property, tell the cleaner whether it is routine communal cleaning, a tenant changeover or preparation for inspection.",
        source: {
          label: "Sheffield City Council — apply for an HMO licence",
          url: "https://www.sheffield.gov.uk/housing/houses-multiple-occupation/apply",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaners may cover Sheffield by postcode, property type and schedule. Example areas include:",
    sideTitle: "Give the room count and actual condition",
    sideCopy: "A student rental in Broomhill, a terrace in Walkley and a family house in Ecclesall or Dore can need very different visit lengths. State bedrooms, bathrooms, condition and specialist tasks.",
    noteLead: "Separate routine cleaning from clearance.",
    noteText: "Ovens, carpets, inside windows, heavy build-up and rubbish removal are often priced differently from ordinary recurring cleaning.",
  },
  faq: [
    ["How much does a cleaner cost in Sheffield?", "Rates vary with property size, condition, frequency and the type of clean. Compare quotes using the same room count and checklist so the prices cover the same work."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Include the handover date, property size and any landlord or agent checklist so responding cleaners can quote for the same standard."],
    ["Does Sheffield HMO licensing mean I must use a professional cleaner?", "No. HMO planning and licensing rules regulate qualifying shared properties and their management; they do not impose a general requirement to hire a professional cleaner."],
    ["Does every small HMO in Sheffield need planning permission?", "No. The C3-to-C4 Article 4 restriction applies within the council's defined Article 4 area. Larger HMOs and other changes of use can have different planning requirements."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Sheffield?",
    copy: "Describe the property and cleaning checklist once, then compare interested Sheffield cleaners and their quotes.",
    buttonLabel: "Get Sheffield cleaning quotes",
  },
});
