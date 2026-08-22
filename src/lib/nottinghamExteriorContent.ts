import { makeNottinghamProfile } from "./nottinghamProfileBase";

export const drivewaySpecialistsNottingham = makeNottinghamProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or vehicle access in Nottingham? Describe the area, existing surface, drainage and kerb situation once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Nottingham?",
    copy: "Enter the postcode and explain the approximate area, current surface, proposed material, drainage and whether a new or wider dropped kerb is needed. Photos from the road and property help suitable Nottingham driveway specialists judge the full job.",
  },
  localContext: {
    eyebrow: "Nottingham driveway and highway-access context",
    title: "A driveway and the public footway crossing are two separate pieces of work in Nottingham",
    intro: "Nottingham City Council requires approval before a vehicle crossing is installed and issues a Section 184 licence for approved dropped-kerb work. The private driveway itself must also deal properly with surface water rather than simply sending runoff onto the highway or neighbouring land.",
    items: [
      {
        title: "A dropped kerb needs Nottingham City Council approval before work starts",
        text: "The council says it is illegal to drive over a standard raised kerb without an authorised crossing and requires a pre-application enquiry followed by a Section 184 licence if the site is suitable. The council does not install the crossing, so the homeowner must use a suitably qualified third-party contractor after approval.",
        source: {
          label: "Nottingham City Council — apply for a dropped kerb",
          url: "https://www.nottinghamcity.gov.uk/information-for-residents/transport-parking-and-streets/roads-pavements-and-highways/apply-for-a-dropped-kerb/",
        },
      },
      {
        title: "Nottingham's dropped-kerb process also checks hardstanding and drainage suitability",
        text: "The council requires a suitable driveway or hardstanding and says the area must use permeable, bound materials, with loose gravel not accepted for the crossing application. Ask the driveway contractor how the surface, falls and drainage will satisfy the property and highway requirements before choosing the finish.",
        source: {
          label: "Nottingham City Council — dropped-kerb eligibility requirements",
          url: "https://www.nottinghamcity.gov.uk/information-for-residents/transport-parking-and-streets/roads-pavements-and-highways/apply-for-a-dropped-kerb/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Nottingham by postcode, area and surfacing type. Example areas include:",
    sideTitle: "Separate the private surface from the highway crossing",
    sideCopy: "A resurfacing job in Wollaton is different from creating first-time vehicle access in Sherwood or altering a frontage in a conservation setting. State whether a dropped kerb already exists and its width.",
    noteLead: "Do not build the driveway first and assume the crossing will be approved later.",
    noteText: "If new highway access is needed, establish Nottingham City Council's pre-application and Section 184 position before committing to the final layout.",
  },
  faq: [
    ["How much does a driveway cost in Nottingham?", "Cost depends on area, excavation depth, sub-base, material, drainage, edging, access and whether dropped-kerb work is needed. Compare quotes on the same specification."],
    ["Do I need permission for a dropped kerb in Nottingham?", "Yes. Nottingham City Council requires approval and, if suitable, a Section 184 licence before the public footway crossing is installed."],
    ["Can the driveway contractor install the dropped kerb?", "The council does not install it, but any third-party contractor must meet the council's requirements and the work still needs a valid Section 184 licence."],
    ["Does drainage matter for a new driveway?", "Yes. The surface and falls should control runoff appropriately, and the council's dropped-kerb process requires suitable permeable bound hardstanding rather than loose gravel."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Nottingham?",
    copy: "Describe the surface, drainage and access once, then compare interested Nottingham driveway specialists and their quotes.",
    buttonLabel: "Get Nottingham driveway quotes",
  },
});

export const windowSpecialistsNottingham = makeNottinghamProfile("window-specialists", {
  heroCopy: "Need replacement windows, repairs or new glazing in Nottingham? Describe the property, window type and scope once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Nottingham?",
    copy: "Enter the postcode and explain whether the job is repair, sealed-unit replacement, full-frame replacement or new openings. Add photos of the windows and exterior elevation so suitable Nottingham specialists can judge both the product and any planning constraints.",
  },
  localContext: {
    eyebrow: "Nottingham windows and heritage context",
    title: "Building Regulations apply to replacement windows, while some Nottingham properties have tighter planning controls",
    intro: "Nottingham Building Control treats replacement windows as regulated work, although FENSA and other competent-person routes can self-certify qualifying installations. Separately, conservation-area Article 4 Directions and listed-building status can restrict changes to appearance and fabric.",
    items: [
      {
        title: "Replacement windows need Building Regulations compliance or competent-person certification",
        text: "Nottingham City Council says replacement windows are controlled by the Building Regulations and explains that a FENSA-registered installer can self-certify qualifying work. If the installer is not using an appropriate competent-person scheme, confirm the Building Control route and completion evidence before work starts.",
        source: {
          label: "Nottingham City Council — competent person schemes",
          url: "https://nottinghamcity.gov.uk/information-for-business/planning-and-building-control/building-control-service/check-the-approval-you-need-for-building-work/registered-trades-person-competent-persons-scheme/",
        },
      },
      {
        title: "Some conservation-area properties have extra Article 4 controls on windows and doors",
        text: "Nottingham City Council lists specific Article 4 Directions, mostly in conservation areas, that restrict otherwise permitted minor works including changes to windows and doors. Listed buildings have a separate consent regime, so check the property's status before ordering frames based only on modern performance specifications.",
        source: {
          label: "Nottingham City Council — Article 4 Directions",
          url: "https://www.nottinghamcity.gov.uk/information-for-business/planning-and-building-control/planning-policy/article-4-directions/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Nottingham by postcode, frame material and property type. Example areas include:",
    sideTitle: "Photograph the whole elevation, not just the failed pane",
    sideCopy: "A sealed-unit repair in Clifton, full-frame replacement in Sherwood and work to a protected façade in The Park can be very different jobs. Exterior photos help expose planning and access issues early.",
    noteLead: "Check planning and certification separately.",
    noteText: "FENSA or Building Control deals with Building Regulations; it does not replace any planning or listed-building consent that may also be needed for the property.",
  },
  faq: [
    ["How much do replacement windows cost in Nottingham?", "Price depends on frame material, size, glazing specification, access, number of openings and whether repairs or heritage-style products are needed."],
    ["Do replacement windows need Building Regulations approval?", "Yes, but qualifying work can usually be self-certified by an installer registered with an approved competent-person scheme such as FENSA."],
    ["Can Article 4 rules affect windows in Nottingham?", "Yes. Several specific Nottingham properties and conservation-area streets have Article 4 Directions restricting changes to windows and doors."],
    ["Does FENSA approval mean I do not need planning permission?", "No. Building Regulations certification and planning or listed-building consent are separate legal issues."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Nottingham?",
    copy: "Describe the windows, property and scope once, then compare interested Nottingham specialists and their quotes.",
    buttonLabel: "Get Nottingham window quotes",
  },
});
