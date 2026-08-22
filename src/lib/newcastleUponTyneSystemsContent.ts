import { makeNewcastleUponTyneProfile } from "./newcastleUponTyneProfileBase";

export const tilersNewcastleUponTyne = makeNewcastleUponTyneProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Newcastle upon Tyne? Describe the room, surfaces, tile type and approximate area once, then compare tilers who cover your part of the city.",
  answer: {
    title: "Looking for a tiler near you in Newcastle upon Tyne?",
    copy: "Enter the postcode, room type, approximate square metres and tile format. Mention old tiles, uneven surfaces, waterproofing, underfloor heating or damaged backgrounds so suitable Newcastle tilers can judge preparation as well as laying.",
  },
  localContext: {
    eyebrow: "Newcastle tiling and refurbishment context",
    title: "The wider bathroom or kitchen project can bring Building Regulations into the job",
    intro: "Straightforward tiling is normally finish work, but Newcastle Building Control says projects such as moving or creating bathrooms, electrical work and many alterations can require Building Regulations compliance. Strip-out also creates trade waste that needs a lawful disposal route.",
    items: [
      {
        title: "Building Regulations can apply to the wider refurbishment",
        text: "Newcastle City Council says most alterations, extensions and new building work need to comply with Building Regulations and specifically lists moving or creating a new toilet or bathroom and electrical work among common examples. If the tiling is part of a larger refit, establish the compliance route before regulated work is covered up.",
        source: {
          label: "Newcastle City Council — apply for Building Regulations",
          url: "https://www.newcastle.gov.uk/services/planning-building-and-development/building-regulations/apply-building-regulations",
        },
      },
      {
        title: "Old tiles and building debris are not ordinary household waste when produced by a trade",
        text: "Newcastle City Council says businesses have a legal duty of care for the waste they produce, move and dispose of. If old tiles, adhesive, boards or rubble are being removed as part of paid work, agree who takes them away and whether disposal is included in the quote.",
        source: {
          label: "Newcastle City Council — business waste duty of care",
          url: "https://new.newcastle.gov.uk/recycling-waste/commercial-waste-businesses/your-business-waste-responsibilities-or-duty-care",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Newcastle upon Tyne by postcode, tile type and job size. Example areas include:",
    sideTitle: "Show the background as clearly as the tiles",
    sideCopy: "Large-format porcelain on a flat prepared wall is different from mosaics, damaged plaster or a bathroom that needs boarding and tanking first. Photos help expose preparation before quoting.",
    noteLead: "Preparation changes the price.",
    noteText: "Ask what levelling, boarding, priming, tanking, trims, grout and waste removal are included rather than comparing only a labour rate per square metre.",
  },
  faq: [
    ["How much does tiling cost in Newcastle upon Tyne?", "The price depends on tile material and size, pattern, surface condition, preparation and access. Compare quotes for the same preparation and finish rather than only the laying rate."],
    ["Does ordinary tiling need Building Regulations approval?", "Usually the tile finish itself is not the issue, but a wider bathroom or kitchen project can include regulated drainage, electrical, ventilation or structural work."],
    ["Who removes the old tiles and rubble?", "Agree this before work starts. Waste produced through paid trade work must be handled lawfully, so ask whether strip-out and disposal are included."],
    ["Can I post a small splashback job?", "Yes. Small splashbacks and repairs can be posted as well as complete bathrooms, floors and larger tiling projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Newcastle upon Tyne?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Newcastle tilers and their quotes.",
    buttonLabel: "Get Newcastle tiling quotes",
  },
});

export const heatingEngineersNewcastleUponTyne = makeNewcastleUponTyneProfile("heating-engineers", {
  heroCopy: "Need boiler work, radiator changes, heating repairs or a system upgrade in Newcastle upon Tyne? Describe the property, symptoms and existing system once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Newcastle upon Tyne?",
    copy: "Enter the postcode, boiler or system type and the problem you are seeing. Mention error codes, cold radiators, pressure loss, hot-water issues or planned upgrades so suitable Newcastle heating engineers can judge the likely visit.",
  },
  localContext: {
    eyebrow: "Newcastle heating and clean-air context",
    title: "The whole city is a smoke control area, while heating alterations can also need Building Regulations compliance",
    intro: "Newcastle upon Tyne is entirely covered by smoke-control rules. For gas, boiler and other heating work, the installation also needs to follow the relevant Building Regulations and competent-person requirements.",
    items: [
      {
        title: "The whole Newcastle upon Tyne district is a smoke control area",
        text: "Newcastle City Council says the entire district is a smoke control area. That means authorised fuel must be used unless the appliance is exempt, and smoke emissions from chimneys are controlled. If the job involves a stove or solid-fuel appliance, check the proposed appliance and fuel before installation.",
        source: {
          label: "Newcastle City Council — smoke control areas",
          url: "https://newcastle.gov.uk/services/environment-and-waste/environmental-health-and-pollution/air-pollution/smoke-control-areas",
        },
      },
      {
        title: "Building Regulations cover many heating and service alterations",
        text: "Newcastle City Council explains that Building Regulations set health, safety and energy-efficiency standards for building work and apply to many alterations. Ask who will handle any required notification, certification and completion paperwork for the heating work being carried out.",
        source: {
          label: "Newcastle City Council — apply for Building Regulations",
          url: "https://www.newcastle.gov.uk/services/planning-building-and-development/building-regulations/apply-building-regulations",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Newcastle upon Tyne by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the exact appliance and system details",
    sideCopy: "Share the boiler make and model if known, fuel type, number of radiators and any error code or pressure reading. Photos of controls can help an engineer understand the system before attending.",
    noteLead: "Match the engineer to the appliance and fuel.",
    noteText: "Gas, solid-fuel and other systems can require different qualifications and compliance routes, so check the engineer is appropriately registered for the work being carried out.",
  },
  faq: [
    ["How much does a heating engineer cost in Newcastle upon Tyne?", "Costs vary with the fault, system type, parts and whether the visit is planned or urgent. A clear description of the appliance and symptoms helps engineers quote or explain diagnostic charges."],
    ["Is Newcastle a smoke control area?", "Yes. Newcastle City Council says the whole Newcastle upon Tyne district is a smoke control area."],
    ["Can I use this page for radiator work?", "Yes. Radiator replacement, balancing, valves, cold spots and planned heating upgrades can be posted alongside boiler and central-heating repairs."],
    ["What should I include for a boiler fault?", "Give the make and model if known, any error code, pressure reading, whether heating or hot water still works and when the fault started."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Newcastle upon Tyne?",
    copy: "Describe the system, fault or upgrade once, then compare interested Newcastle heating engineers and their quotes.",
    buttonLabel: "Get Newcastle heating quotes",
  },
});
