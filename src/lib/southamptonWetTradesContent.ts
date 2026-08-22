import { makeSouthamptonProfile } from "./southamptonProfileBase";

export const bathroomSpecialistsSouthampton = makeSouthamptonProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower-room conversion or repair in Southampton? Describe the room, layout and products once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Southampton?",
    copy: "Enter the postcode, room dimensions and whether the layout is changing. Mention drainage, ventilation, tiling, electrics and accessibility requirements so suitable Southampton bathroom specialists can judge the whole project rather than only the suite fitting.",
  },
  localContext: {
    eyebrow: "Southampton bathroom standards",
    title: "Drainage, ventilation and HMO standards can change the brief",
    intro: "Bathroom work can range from a simple suite replacement to a controlled building project. Southampton's Building Regulations guidance and HMO standards both highlight practical issues that can matter on more complex properties.",
    items: [
      {
        title: "Building Regulations cover moisture, ventilation and drainage",
        text: "Southampton City Council says Building Regulations cover moisture resistance, ventilation, drainage and waste disposal. If the project moves sanitaryware, adds a new shower room or changes ventilation, ask who is responsible for the relevant design and compliance work.",
        source: {
          label: "Southampton City Council — building-control permissions",
          url: "https://www.southampton.gov.uk/planning/building-control/permissions/",
        },
      },
      {
        title: "Licensed HMOs have specific bathroom and washing-facility standards",
        text: "Southampton's 2025 HMO standards set bathroom and toilet provision according to occupancy and require amenities to be properly connected to hot and cold water and drainage. Those rules are relevant to qualifying shared properties, not ordinary owner-occupied bathrooms, so tell the specialist if the property is an HMO.",
        source: {
          label: "Southampton City Council — HMO standards 2025",
          url: "https://www.southampton.gov.uk/media/tympl3pz/guidance-on-hmo-standards-2025.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Southampton by postcode and project scope. Example areas include:",
    sideTitle: "Say whether the layout is staying in the same place",
    sideCopy: "Keeping the toilet, basin and shower positions can be very different from relocating drainage or creating a new room. Share dimensions and a simple sketch if the layout is changing.",
    noteLead: "Separate products from installation.",
    noteText: "Confirm who supplies sanitaryware, brassware, tiles, screens, furniture and extraction, and what happens if hidden floor or wall damage is found after strip-out.",
  },
  faq: [
    ["How much does a bathroom refit cost in Southampton?", "The total depends on room size, product specification, layout changes, tiling, plumbing, electrics and hidden repairs. Compare quotes against the same product and labour scope."],
    ["Do I need Building Regulations for a bathroom refit?", "Not every like-for-like replacement needs approval, but drainage, ventilation, structural and certain electrical changes can bring Building Regulations into the project."],
    ["Do Southampton HMO bathroom standards apply to every home?", "No. They apply to qualifying HMOs. If the property is licensed or being converted to shared accommodation, tell the specialist so the relevant occupancy standards can be checked."],
    ["Can I keep the existing layout to save money?", "Often yes, because keeping existing drainage positions can reduce labour and disruption, but the existing pipework and floor condition still need to be suitable."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Southampton?",
    copy: "Describe the room, layout and products once, then compare interested Southampton bathroom specialists and their quotes.",
    buttonLabel: "Get Southampton bathroom quotes",
  },
});

export const drainageSpecialistsSouthampton = makeSouthamptonProfile("drainage-specialists", {
  heroCopy: "Dealing with a blocked drain, recurring smells, slow flow or drainage repairs in Southampton? Describe the symptoms and where they appear once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Southampton?",
    copy: "Enter the postcode and explain which toilets, sinks, gullies or inspection chambers are affected, whether neighbours have the same problem and whether the issue is recurring. Suitable Southampton drainage specialists can then judge whether investigation, jetting, CCTV or repair is likely to be needed.",
  },
  localContext: {
    eyebrow: "Southampton drainage responsibility",
    title: "Check whether the blockage is private before paying a contractor",
    intro: "Responsibility changes depending on where the blockage sits. Southampton City Council and Southern Water both distinguish private drains serving one property from public sewers and shared lateral drains.",
    items: [
      {
        title: "A blockage affecting only your property is likely to be your drain",
        text: "Southampton City Council advises checking whether neighbours are affected. If they are not, the blockage is likely within your private drain and is normally your responsibility. Problems outside the property boundary or affecting public sewers usually need Southern Water instead of a private contractor.",
        source: {
          label: "Southampton City Council — blocked drains",
          url: "https://www.southampton.gov.uk/environment/neighbourhood-nuisances-and-property-concerns/concern-about-property/blocked-drain/",
        },
      },
      {
        title: "New connections or drainage alterations may need Southern Water approval",
        text: "Southern Water says connecting to a public sewer requires approval and that property owners are usually responsible for private drains within their boundary where those drains are not shared. For extensions or major drainage alterations, establish ownership and connection requirements before excavation starts.",
        source: {
          label: "Southern Water — sewer connections",
          url: "https://www.southernwater.co.uk/building-and-developing/our-services/wastewater-services/sewer-connection/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Southampton by postcode and problem type. Example areas include:",
    sideTitle: "Describe the pattern of the blockage",
    sideCopy: "Say which fixtures are affected, whether water backs up elsewhere, whether an outside chamber is full and whether neighbours have symptoms. That information can help separate a private-drain issue from a wider sewer problem.",
    noteLead: "Do not pay privately for a public-sewer blockage.",
    noteText: "If the affected pipe is Southern Water's responsibility, contact the water company rather than authorising private work on the public sewer.",
  },
  faq: [
    ["Who is responsible for a blocked drain in Southampton?", "If the problem affects only your property and is within your private drain, it is normally your responsibility. Shared or public sewer problems can be Southern Water's responsibility."],
    ["Should I ask my neighbours if their drains are blocked?", "Yes. Southampton City Council specifically recommends this because it helps indicate whether the issue is confined to your private drain or affects a wider sewer."],
    ["Can a drainage specialist use CCTV?", "Yes. CCTV surveys can help locate recurring blockages, damaged pipes, root ingress and other defects before repair work is quoted."],
    ["Do I need permission to connect new drainage to a public sewer?", "Southern Water says a new connection to the public sewer requires its approval, so check the route before starting substantial drainage alterations."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Southampton?",
    copy: "Describe the blockage or drainage issue once, then compare interested Southampton drainage specialists and their quotes.",
    buttonLabel: "Get Southampton drainage quotes",
  },
});
