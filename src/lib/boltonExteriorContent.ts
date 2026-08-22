import { makeBoltonProfile } from "./boltonProfileBase";

export const drivewaySpecialistsBolton = makeBoltonProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or dropped-kerb access in Bolton? Describe the area, surface, drainage and access once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Bolton?",
    copy: "Enter the postcode, approximate area, existing surface and preferred finish. Mention drainage, levels, retaining edges, vehicle numbers and whether a new or wider dropped kerb is needed so suitable Bolton driveway specialists can quote the same scope.",
  },
  localContext: {
    eyebrow: "Bolton vehicle-access rules",
    title: "A driveway and the vehicle crossing are separate parts of the project",
    intro: "Bolton Council manages and constructs domestic vehicle access crossings over the pavement or verge. It also sets minimum driveway-depth and planning checks, so a new front drive should be designed around the legal access before the surface is finished.",
    items: [
      {
        title: "Bolton requires at least 4.8 metres of driveway depth for a vehicle crossing",
        text: "The council says an off-road driveway must have at least 4.8 metres between the back of the footway and the building so a vehicle can sit wholly within the drive. Applications below that minimum are not considered.",
        source: {
          label: "Bolton Council — dropped kerbs: things to consider",
          url: "https://www.bolton.gov.uk/roads-pavements/dropped-kerbs/6",
        },
      },
      {
        title: "Some accesses need planning permission before the crossing can be built",
        text: "Bolton says planning permission may be required where access is from an A, B or C classified road or where the crossing is linked to other development requiring permission. Written confirmation may be needed before highway work begins.",
        source: {
          label: "Bolton Council — dropped kerbs and planning permission",
          url: "https://www.bolton.gov.uk/roads-pavements/dropped-kerbs/4?documentId=549",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Bolton by postcode, surface and project size. Example areas include:",
    sideTitle: "Measure the usable parking depth before choosing the finish",
    sideCopy: "A narrow frontage in Farnworth, a larger drive in Heaton and a new access in Horwich can have very different kerb, drainage and level constraints. Measure from the back of the footway to the building and identify any trees, covers or street furniture.",
    noteLead: "Do not build the surface around an assumed dropped-kerb approval.",
    noteText: "Check the crossing and planning position first, especially on classified roads or where the available parking depth is close to Bolton's minimum requirement.",
  },
  faq: [
    ["How much does a driveway cost in Bolton?", "Cost depends on area, excavation, sub-base, drainage, surface material, edging, access and whether a vehicle crossing or other highway work is required."],
    ["How deep does a driveway need to be for a dropped kerb in Bolton?", "Bolton Council says there must be at least 4.8 metres between the back of the footway and the building."],
    ["Can I build my own dropped kerb in Bolton?", "Bolton Council says domestic vehicle access crossings are managed and constructed by the council."],
    ["When might planning permission be needed?", "Bolton says access from an A, B or C classified road, or a crossing linked to other development requiring permission, can trigger a planning check."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Bolton?",
    copy: "Describe the area, surface, drainage and access once, then compare interested Bolton driveway specialists and their quotes.",
    buttonLabel: "Get Bolton driveway quotes",
  },
});

export const windowSpecialistsBolton = makeBoltonProfile("window-specialists", {
  heroCopy: "Need replacement windows, doors, glazing repairs or a window upgrade in Bolton? Describe the property, openings and required work once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Bolton?",
    copy: "Enter the postcode, number and type of openings, frame material and whether the job is repair or replacement. Mention listed status, conservation area, unusual glazing, access and any changes to opening style so suitable Bolton window specialists can quote the same scope.",
  },
  localContext: {
    eyebrow: "Bolton window compliance",
    title: "Replacement windows need the right Building Regulations route, and historic properties can need extra consent",
    intro: "Bolton Building Control says replacement windows and doors require an application where the installer is not registered with a relevant competent-person scheme. Conservation-area or listed-building status can add a separate planning or heritage check.",
    items: [
      {
        title: "Non-registered installers need a Building Control application",
        text: "Bolton Council states that if replacement windows or doors are installed by someone who is not registered with a competent-person scheme, a Building Control application must be submitted. Ask how compliance will be certified before accepting a quote.",
        source: {
          label: "Bolton Council — building control applications",
          url: "https://www.bolton.gov.uk/building-control/building-control-applications",
        },
      },
      {
        title: "Historic designations can restrict external changes",
        text: "Bolton says conservation-area properties may need planning permission for external work that would otherwise be permitted development, while listed-building alterations affecting character require listed building consent.",
        source: {
          label: "Bolton Council — conservation areas",
          url: "https://www.bolton.gov.uk/conservation/conservation-areas/8",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Bolton by postcode, frame type and number of openings. Example areas include:",
    sideTitle: "Match the quote to both the opening and the compliance route",
    sideCopy: "A misted unit in Little Lever, full-house replacement in Westhoughton and new windows to a historic property in Bolton town centre are different jobs. State whether frames are being repaired, reglazed or fully replaced and whether the property has heritage status.",
    noteLead: "Ask who provides the compliance certificate.",
    noteText: "For full replacement work, establish whether the installer self-certifies through a competent-person scheme or whether a Building Control application is required.",
  },
  faq: [
    ["How much do replacement windows cost in Bolton?", "Cost depends on opening size, frame material, glazing specification, access, number of units and whether repair, reglazing or full replacement is required."],
    ["Do replacement windows need Building Regulations approval?", "Bolton Council says an application is needed where the installer is not registered with a competent-person scheme that can self-certify the work."],
    ["Can conservation-area status affect window replacement?", "Yes. Bolton says external work in conservation areas can require planning permission even where similar work elsewhere may be permitted development."],
    ["Do listed buildings need extra consent for window changes?", "Potentially yes. Bolton says alterations that affect the character of a listed building require listed building consent."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Bolton?",
    copy: "Describe the openings, frames and compliance context once, then compare interested Bolton window specialists and their quotes.",
    buttonLabel: "Get Bolton window quotes",
  },
});
