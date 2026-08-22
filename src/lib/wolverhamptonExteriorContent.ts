import { makeWolverhamptonProfile } from "./wolverhamptonProfileBase";

export const drivewaySpecialistsWolverhampton = makeWolverhamptonProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or dropped-kerb access in Wolverhampton? Describe the frontage, dimensions and preferred finish once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Wolverhampton?",
    copy: "Enter the postcode, approximate area, current surface and preferred material. Mention whether you need a new or wider dropped kerb, drainage, retaining work or boundary changes so suitable Wolverhampton driveway specialists can quote the whole job.",
  },
  localContext: {
    eyebrow: "Wolverhampton driveway and highway-access context",
    title: "A new driveway and the public-highway crossing are separate pieces of work",
    intro: "City of Wolverhampton Council requires highways approval for every dropped kerb and can also require planning approval depending on the road or property. The council separately expects driveway works to prevent water or loose material running onto the highway.",
    items: [
      {
        title: "Every dropped kerb needs council highways permission",
        text: "The council says permission from its Highways Assets team is required in every case. Planning approval can also be needed for classified roads, conservation-area properties, listed buildings, flats and some non-residential premises, so check both routes before constructing the driveway around an assumed crossing position.",
        source: {
          label: "City of Wolverhampton Council — dropped kerbs",
          url: "https://www.wolverhampton.gov.uk/parking-and-roads/dropped-kerbs",
        },
      },
      {
        title: "Only accredited contractors can work on the public highway",
        text: "Wolverhampton states that dropped-kerb work on the public highway must be carried out by an accredited contractor who has the required insurance and obtains the council's Permit to Dig. Keep this separate from the contractor's work inside the property boundary.",
        source: {
          label: "City of Wolverhampton Council — dropped-kerb contractor requirements",
          url: "https://www.wolverhampton.gov.uk/parking-and-roads/dropped-kerbs",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Wolverhampton by postcode, surface and access requirements. Example areas include:",
    sideTitle: "Show the full frontage and pavement",
    sideCopy: "A straightforward resurfacing job is different from a new vehicular access with trees, street furniture, a classified road or conservation constraints. Include photos from the house and from across the street.",
    noteLead: "Do not build the driveway around an unapproved crossing.",
    noteText: "The council specifically advises residents to obtain the necessary permissions and dropped-kerb acceptance before creating the driveway in the garden.",
  },
  faq: [
    ["How much does a driveway cost in Wolverhampton?", "Cost depends on area, excavation, sub-base, surface material, drainage, edging, access and whether a dropped kerb or retaining work is needed."],
    ["Do I need permission for a dropped kerb in Wolverhampton?", "Yes. Wolverhampton requires Highways Assets permission in every case, and some properties also need planning approval."],
    ["Can my driveway contractor install the dropped kerb?", "Only if the contractor meets the council's highway accreditation and insurance requirements and obtains the required Permit to Dig."],
    ["Does driveway drainage matter?", "Yes. The council says works should prevent water or loose material running into the road, so the design should deal with runoff within the property."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Wolverhampton?",
    copy: "Describe the frontage, surface and access requirements once, then compare interested Wolverhampton driveway specialists and their quotes.",
    buttonLabel: "Get Wolverhampton driveway quotes",
  },
});

export const windowSpecialistsWolverhampton = makeWolverhamptonProfile("window-specialists", {
  heroCopy: "Need replacement windows, glazing repairs or new external doors in Wolverhampton? Describe the property, openings and preferred specification once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Wolverhampton?",
    copy: "Enter the postcode, number and type of windows or doors, frame material and whether the property is listed or in a conservation area. Include photos so suitable Wolverhampton window specialists can judge access, style and compliance.",
  },
  localContext: {
    eyebrow: "Wolverhampton windows and heritage context",
    title: "Replacement windows can involve both Building Regulations and local heritage controls",
    intro: "Wolverhampton's current Building Regulation charges explicitly include replacement windows where the installer is outside a competent-person scheme, while the city's 31 conservation areas and Article 4 directions can restrict external changes on protected properties.",
    items: [
      {
        title: "Replacement windows sit within the Building Regulations system",
        text: "The council's current domestic-alteration schedule includes window replacement where work is not carried out through a competent-person scheme. Ask the installer what self-certification or Building Control route applies and what completion evidence you will receive.",
        source: {
          label: "City of Wolverhampton Council — Building Regulation charges",
          url: "https://www.wolverhampton.gov.uk/sites/default/files/2025-11/fee-charges-from-1st-December-2025.pdf",
        },
      },
      {
        title: "Conservation areas and Article 4 directions can restrict replacement appearance",
        text: "Wolverhampton currently has 31 conservation areas, and the council states that permitted-development rights are reduced in conservation areas and reduced further where an Article 4 direction applies. If replacement windows or doors change external character, check the property's designation before ordering frames.",
        source: {
          label: "City of Wolverhampton Council — conservation",
          url: "https://www.wolverhampton.gov.uk/planning/conservation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Wolverhampton by postcode, frame type and number of openings. Example areas include:",
    sideTitle: "Give the property status before choosing a frame",
    sideCopy: "A standard uPVC replacement in an unrestricted house is different from work on a listed building or a property in an Article 4 conservation area. Check designation before finalising style and materials.",
    noteLead: "Ask what certification comes with the installation.",
    noteText: "For regulated replacement work, confirm whether the installer self-certifies through a recognised scheme or uses Building Control and keep the completion evidence with the property records.",
  },
  faq: [
    ["How much do replacement windows cost in Wolverhampton?", "Price depends on opening size, frame material, glazing, style, access, number of units and any repairs to reveals or surrounding fabric."],
    ["Do replacement windows need Building Regulations approval?", "They are controlled work. A registered competent installer may self-certify; otherwise Building Control can be required."],
    ["Can conservation-area controls affect new windows?", "Yes. Wolverhampton says conservation areas have reduced permitted-development rights, with additional restrictions in areas covered by Article 4 directions."],
    ["What security standard should I consider for new windows?", "West Midlands Police recommends security-accredited replacement products and cites PAS 24:2022 as a good standard for new windows and doors."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Wolverhampton?",
    copy: "Describe the openings, property status and preferred specification once, then compare interested Wolverhampton window specialists and their quotes.",
    buttonLabel: "Get Wolverhampton window quotes",
  },
});
