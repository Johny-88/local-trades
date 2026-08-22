import { makeWalsallProfile } from "./walsallProfileBase";

export const drivewaySpecialistsWalsall = makeWalsallProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or dropped kerb in Walsall? Describe the area, surface, drainage and access once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Walsall?",
    copy: "Enter the postcode, approximate driveway size, current surface and preferred finish. Mention whether a new or extended dropped kerb is needed, any level changes and how rainwater will drain so suitable Walsall driveway specialists can quote the same scope.",
  },
  localContext: {
    eyebrow: "Walsall dropped-kerb rules",
    title: "Driving over the pavement needs an approved domestic vehicle crossing",
    intro: "A driveway surface and the highway crossing are separate parts of the project. Walsall Council requires permission for a dropped kerb and says driving over a pavement without a properly constructed crossing is unlawful.",
    items: [
      {
        title: "You must obtain permission before the kerb is dropped",
        text: "Walsall Council says householders must apply for permission to construct a dropped kerb. The process includes an assessment and, if approved, a road-opening permit before construction can take place.",
        source: {
          label: "Walsall Council — get a dropped kerb for your home",
          url: "https://go.walsall.gov.uk/roads-parking-and-travel/roadworks-and-road-maintenance/get-a-dropped-kerb-for-your-home",
        },
      },
      {
        title: "Some properties also need planning permission",
        text: "Walsall says planning permission is needed for a dropped kerb where the property is on a classified road, in a conservation area or is a house divided into flats. Check this before finalising a driveway design or contractor programme.",
        source: {
          label: "Walsall Council — get a dropped kerb for your home",
          url: "https://go.walsall.gov.uk/roads-parking-and-travel/roadworks-and-road-maintenance/get-a-dropped-kerb-for-your-home",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Walsall by postcode, surface and project size. Example areas include:",
    sideTitle: "Separate the private driveway from the highway crossing",
    sideCopy: "A resurfacing job in Aldridge, a new front drive in Pelsall and a dropped-kerb project in Bloxwich can have different permissions and construction stages. State whether the existing crossing already matches the planned driveway width.",
    noteLead: "Do not assume a contractor can simply lower the kerb.",
    noteText: "The highway crossing needs council approval and the correct permit process. Ask the driveway contractor to make clear what they are quoting for on private land and what needs separate highway approval.",
  },
  faq: [
    ["How much does a driveway cost in Walsall?", "Cost depends on area, excavation, sub-base, drainage, edging, surface material, access and whether a dropped kerb is also required. Compare quotes against the same specification."],
    ["Do I need permission for a dropped kerb in Walsall?", "Yes. Walsall Council requires permission before a domestic vehicle crossing is constructed."],
    ["Can I drive over the pavement without a dropped kerb?", "No. Walsall Council says driving over a pavement without a properly constructed dropped crossing is against the law."],
    ["When does a dropped kerb also need planning permission?", "Walsall says this applies where the property is on a classified road, in a conservation area or is a house divided into flats."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Walsall?",
    copy: "Describe the driveway, surface and crossing requirements once, then compare interested Walsall driveway specialists and their quotes.",
    buttonLabel: "Get Walsall driveway quotes",
  },
});

export const windowSpecialistsWalsall = makeWalsallProfile("window-specialists", {
  heroCopy: "Need replacement windows, glazing repairs or window upgrades in Walsall? Describe the property, window type and required work once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Walsall?",
    copy: "Enter the postcode, number and type of windows, frame material and whether the job is repair or replacement. Mention listed-building, conservation-area or Article 4 status where relevant so suitable Walsall window specialists can quote the correct specification.",
  },
  localContext: {
    eyebrow: "Walsall window approvals",
    title: "Replacement windows can involve both Building Regulations and heritage controls",
    intro: "For an ordinary home, replacement windows can often be certified through a Competent Person Scheme. Protected buildings and Article 4 areas need extra care because planning rights may be restricted and historic materials or appearance may matter.",
    items: [
      {
        title: "Replacement windows are covered by Competent Person Schemes",
        text: "Walsall Council says Competent Person Schemes allow registered installers to self-certify Building Regulations compliance and specifically lists replacement windows among the types of work covered. Ask how the installer will provide the compliance certificate.",
        source: {
          label: "Walsall Council — Competent Person Scheme",
          url: "https://go.walsall.gov.uk/planning-and-building-control/building-control/competent-person-scheme",
        },
      },
      {
        title: "Article 4 Directions can restrict window alterations",
        text: "Walsall Council says some local Article 4 Directions withdraw permitted-development rights for changes such as removing timber windows, doors and chimneys. If the property is in a protected area, check the exact direction before ordering replacement frames.",
        source: {
          label: "Walsall Council — buildings and areas covered by Article 4 Directions",
          url: "https://go.walsall.gov.uk/planning-and-building-control/listed-buildings-conservation-and-environment/buildings-and-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Walsall by postcode, frame type and number of openings. Example areas include:",
    sideTitle: "Give the installer the property status before choosing frames",
    sideCopy: "A sealed-unit repair in Willenhall, replacement uPVC windows in Brownhills and timber-window work in a protected part of Walsall can follow different routes. State whether the building is listed, locally listed, in a conservation area or subject to Article 4 controls.",
    noteLead: "Certification and planning permission solve different problems.",
    noteText: "A Competent Person certificate covers Building Regulations compliance; it does not override listed-building, conservation-area or Article 4 planning controls where those apply.",
  },
  faq: [
    ["How much do replacement windows cost in Walsall?", "Cost depends on size, number, frame material, glazing specification, access and whether openings or surrounding finishes need repair. Compare like-for-like specifications."],
    ["Can a window installer self-certify Building Regulations compliance?", "Yes, if they are registered with an appropriate Competent Person Scheme. Walsall lists replacement windows as work that can be covered this way."],
    ["Can Article 4 controls affect replacement windows?", "Yes. Walsall says some Article 4 Directions restrict changes such as removing timber windows, so the specific property controls should be checked first."],
    ["What security standard should I consider for new windows?", "West Midlands Police advises considering security-accredited products and identifies PAS 24:2022 as a good standard for replacement windows."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Walsall?",
    copy: "Describe the windows, property status and required work once, then compare interested Walsall window specialists and their quotes.",
    buttonLabel: "Get Walsall window quotes",
  },
});
