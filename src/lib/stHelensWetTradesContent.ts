import { makeStHelensProfile } from "./stHelensProfileBase";

export const bathroomSpecialistsStHelens = makeStHelensProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom, shower room or wet room in St Helens? Describe the layout, sanitaryware, tiling and any plumbing, ventilation or electrical changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in St Helens?",
    copy: "Enter the postcode and explain whether the room is a like-for-like refit or a layout change. Include photos or plans, shower type, sanitaryware, tile areas and any drainage, ventilation or electrical changes so suitable St Helens bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "St Helens bathroom Building Control",
    title: "A bathroom refit can become regulated work when services or the room layout change",
    intro: "St Helens Council specifically lists a new bathroom among home improvements that will probably need Building Regulations approval. The key question is the real scope behind the finished tiles: drainage, electrics, ventilation, structure and plumbing can all change the approval and certification required.",
    items: [
      {
        title: "The council lists bathrooms among common Building Regulations projects",
        text: "St Helens Council's planning guidance says Building Regulations approval will probably be needed for home improvements such as a new bathroom, electrical work, windows, doors, boilers and radiators. Ask the specialist which parts of the proposed bathroom work need notification or certification.",
        source: {
          label: "St Helens Borough Council — how to apply for planning permission",
          url: "https://www.sthelens.gov.uk/article/1916/How-to-apply-for-planning-permission",
        },
      },
      {
        title: "Shared rented accommodation has explicit bathroom and ventilation standards",
        text: "St Helens HMO guidance requires appropriate bathroom facilities, hot and cold water and adequate lighting and ventilation in shared rented accommodation. If the bathroom is in an HMO or landlord property, identify the occupancy and intended use before finalising the specification.",
        source: {
          label: "St Helens Borough Council — HMO accommodation standards",
          url: "https://www.sthelens.gov.uk/media/2778/St-Helens-HMO-standards-Flats/pdf/Self_Contained_Flats.pdf?m=1647006801723",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover St Helens by postcode, room size and project scope. Example areas include:",
    sideTitle: "Describe whether fixtures stay in the same positions",
    sideCopy: "A like-for-like bathroom in Thatto Heath, a wet room in Rainford and a full layout change in Eccleston can involve very different plumbing and waterproofing. Mark where the toilet, basin, bath and shower are now and where they are moving.",
    noteLead: "The hidden work is often the expensive part.",
    noteText: "Ask whether the quote includes strip-out, disposal, plumbing, electrics, ventilation, tanking, tiling, plastering, flooring, decorating and any certification or Building Control work.",
  },
  faq: [
    ["How much does a bathroom refit cost in St Helens?", "Cost depends on room size, sanitaryware, tiling, layout changes, plumbing, electrics, ventilation and the condition of the existing room. Compare quotes against the same specification."],
    ["Does bathroom work need Building Regulations approval in St Helens?", "Some work can. St Helens Council specifically lists a new bathroom among home improvements that will probably require Building Regulations approval."],
    ["Can I move the toilet or shower?", "Usually this is possible, but it can change drainage runs, floor build-up and ventilation requirements. Describe the proposed layout clearly before comparing quotes."],
    ["Should waterproofing be included in a wet-room quote?", "Yes. Ask exactly what tanking or waterproofing system is proposed and whether it is included in the quoted price."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in St Helens?",
    copy: "Describe the bathroom layout and finish once, then compare interested St Helens bathroom specialists and their quotes.",
    buttonLabel: "Get St Helens bathroom quotes",
  },
});

export const drainageSpecialistsStHelens = makeStHelensProfile("drainage-specialists", {
  heroCopy: "Need a drainage specialist in St Helens for a blockage, overflowing drain, CCTV survey or recurring drainage problem? Describe the symptoms and affected fixtures once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in St Helens?",
    copy: "Enter the postcode and explain whether the problem affects one fixture, several drains, an external manhole or the whole property. Mention smells, slow flow, backing-up water, flooding and any recent building work so suitable St Helens drainage specialists can assess the likely cause.",
  },
  localContext: {
    eyebrow: "St Helens drainage responsibility",
    title: "First identify whether the problem is a private drain, public sewer or highway drainage issue",
    intro: "Different drainage problems in St Helens have different owners. The council distinguishes private drains, United Utilities public sewers and council-managed highway drainage, so locating where the problem begins can prevent paying a private contractor to investigate infrastructure owned by someone else.",
    items: [
      {
        title: "Private drains and shared/public sewers have different responsibility",
        text: "St Helens Council says an owner-occupier is generally responsible for private drains serving only their property within its boundary, while United Utilities is the wastewater provider for St Helens and is responsible for shared drains and sewer pipes that run beyond the property boundary.",
        source: {
          label: "St Helens Borough Council — blocked drains",
          url: "https://sthelens.gov.uk/article/5435/Blocked-drains",
        },
      },
      {
        title: "Highway flooding is managed by the council, while sewer flooding goes to United Utilities",
        text: "The council's flood guidance says St Helens Borough Council manages highway drainage and local surface-water flood risk on roads, while United Utilities manages flood risk from public sewers. Describe whether the problem starts inside the property, at a shared manhole or on the highway.",
        source: {
          label: "St Helens Borough Council — types of flooding and who to contact",
          url: "https://www.sthelens.gov.uk/article/7551/Types-of-flooding-and-who-to-contact",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover St Helens by postcode, blockage type and urgency. Example areas include:",
    sideTitle: "Describe exactly what backs up and when",
    sideCopy: "A single blocked sink in Sutton, repeated external drain flooding in Parr and several toilets backing up in Rainhill point to different likely causes. Note which fixtures are affected and whether the problem changes during heavy rain.",
    noteLead: "A quick unblock may not explain a recurring problem.",
    noteText: "For repeated blockages, ask whether the quote includes CCTV inspection, jetting, root or scale removal, locating defects and a written recommendation for repair if damage is found.",
  },
  faq: [
    ["Who is responsible for a blocked drain in St Helens?", "It depends where the blockage is. Private drains solely serving one property are generally the owner's responsibility, while United Utilities manages shared and public sewers."],
    ["Who deals with a flooded highway drain?", "St Helens Borough Council says it is responsible for highway drainage and highway flooding within the borough."],
    ["How much does drain unblocking cost in St Helens?", "Cost depends on access, blockage severity, equipment, emergency timing and whether CCTV, jetting or repair work is needed."],
    ["When is a CCTV drain survey useful?", "It is especially useful for recurring blockages, suspected cracks, roots, displaced joints or before major drainage repair work."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in St Helens?",
    copy: "Describe the drainage symptoms and access once, then compare interested St Helens drainage specialists and their quotes.",
    buttonLabel: "Get St Helens drainage quotes",
  },
});
