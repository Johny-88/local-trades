import { makeReadingProfile } from "./readingProfileBase";

export const tilersReading = makeReadingProfile("tilers", {
  heroCopy: "Need wall tiling, floor tiling, a bathroom finish or kitchen splashback in Reading? Describe the surfaces, tile type and preparation once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Reading?",
    copy: "Enter the postcode, approximate square metres and tile type. Mention old tiles, uneven surfaces, waterproofing, underfloor heating or damaged backgrounds so suitable Reading tilers can judge preparation as well as laying.",
  },
  localContext: {
    eyebrow: "Reading tiling and refurbishment context",
    title: "Tiling can be simple finish work, but the surrounding refurbishment may need approvals",
    intro: "A straightforward splashback is very different from a bathroom or kitchen refurbishment involving structure, drainage, electrics or other regulated work. Reading's building-control guidance makes that distinction worth checking before the finish is priced.",
    items: [
      {
        title: "Building control is separate from planning permission",
        text: "Reading Borough Council explains that Building Regulations set minimum standards for construction and alterations and that many building works require building-control approval even where planning permission is not needed. If the tiling forms part of a larger bathroom, kitchen or structural project, confirm which elements need approval before work is covered up.",
        source: {
          label: "Reading Borough Council — about building control",
          url: "https://www.reading.gov.uk/planning-and-building-control/building-control/about-building-control/",
        },
      },
      {
        title: "Trade waste should not be mixed into ordinary household rubbish",
        text: "Reading Borough Council's waste guidance excludes builders' rubble and construction waste from normal household rubbish. If old tiles, adhesive, boards or broken sanitaryware are being removed, agree who takes them away and whether disposal is included in the quote.",
        source: {
          label: "Reading Borough Council — what goes in each bin",
          url: "https://www.reading.gov.uk/waste-and-recycling/what-do-i-put-in-each-bin/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Reading by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background as well as the tile",
    sideCopy: "Photos of the existing walls or floor, corners, levels and any previous finish help a tiler judge preparation. State whether tiles and trims are already supplied and whether waterproofing or floor levelling is required.",
    noteLead: "Preparation changes the price.",
    noteText: "Removing old tiles, repairing plaster, boarding, tanking and levelling can take as much planning as laying the new finish.",
  },
  faq: [
    ["How much does tiling cost in Reading?", "The price depends on tile size and material, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish rather than only a labour rate per square metre."],
    ["Does ordinary tiling need building-control approval?", "Usually the tile finish itself is not the issue, but a wider bathroom or kitchen project can include regulated structural, drainage, electrical or ventilation work. Check the full scope rather than the tiles alone."],
    ["Who removes the old tiles and rubble?", "Agree this before work starts. Construction waste should be handled separately from normal household rubbish, so ask whether removal and lawful disposal are included."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted as well as full bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Reading?",
    copy: "Describe the surfaces, tile type and preparation once, then compare interested Reading tilers and their quotes.",
    buttonLabel: "Get Reading tiling quotes",
  },
});

export const heatingEngineersReading = makeReadingProfile("heating-engineers", {
  heroCopy: "Need boiler work, radiator changes, heating repairs or a system upgrade in Reading? Describe the property, symptoms and existing system once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Reading?",
    copy: "Enter the postcode, boiler or system type and the problem you are seeing. Mention error codes, cold radiators, pressure loss, hot-water issues or planned upgrades so suitable Reading heating engineers can judge the likely visit.",
  },
  localContext: {
    eyebrow: "Reading heating and rental safety",
    title: "Gas safety and HMO heating standards matter in Reading's large rented sector",
    intro: "Reading's landlord guidance requires gas appliances supplied in rented homes to be safely installed and maintained, while the borough's HMO guidance sets a local expectation for adequate fixed space heating.",
    items: [
      {
        title: "Landlords must use a Gas Safe registered engineer for gas work",
        text: "Reading Borough Council's landlord safety guidance says gas equipment supplied by a landlord must be safely installed and maintained by a Gas Safe registered engineer, with annual gas-safety checks for appliances and flues. If the job is in a rented property, say so when requesting quotes.",
        source: {
          label: "Reading Borough Council — landlord safety responsibilities",
          url: "https://www.reading.gov.uk/housing/private-renting/landlords/landlord-safety-responsibilities/",
        },
      },
      {
        title: "Reading's HMO guidance expects controllable fixed heating",
        text: "The council's HMO guidance says bedrooms or bedsits should have adequate fixed heating capable of maintaining 19°C when it is -1°C outside, with occupier control such as thermostatic radiator valves. This is useful context for heating upgrades in shared rented houses.",
        source: {
          label: "Reading Borough Council — HMO management pack",
          url: "https://www.reading.gov.uk/housing/private-renting/landlords/houses-in-multiple-occupation-hmos/houses-in-multiple-occupation-management-pack/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Reading by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the system details before the visit",
    sideCopy: "Share the boiler make and model if known, fuel type, number of radiators and any error code or pressure reading. Photos of the boiler controls can help an engineer understand the system before attending.",
    noteLead: "Gas work needs the right registration.",
    noteText: "For work on gas appliances or pipework, check that the engineer is appropriately Gas Safe registered for the work being carried out.",
  },
  faq: [
    ["How much does a heating engineer cost in Reading?", "Costs vary with the fault, system type, parts and whether the visit is planned or urgent. A clear description of the boiler, symptoms and access helps engineers quote or explain likely diagnostic charges."],
    ["Does a landlord need a Gas Safe engineer?", "Yes for gas work. Reading Borough Council states that landlords must ensure supplied gas equipment is safely installed and maintained by a Gas Safe registered engineer."],
    ["Can I use this page for radiator work?", "Yes. Radiator replacement, balancing, valves, cold spots and planned heating upgrades can be posted alongside boiler and central-heating repairs."],
    ["What should I include for a boiler fault?", "Give the make and model if known, any error code, pressure reading, whether heating or hot water still works and when the fault started."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Reading?",
    copy: "Describe the system and problem once, then compare interested Reading heating engineers and their quotes.",
    buttonLabel: "Get Reading heating quotes",
  },
});
