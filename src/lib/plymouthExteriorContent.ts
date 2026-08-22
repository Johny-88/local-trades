import { makePlymouthProfile } from "./plymouthProfileBase";

export const drivewaySpecialistsPlymouth = makePlymouthProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, hardstanding or dropped kerb in Plymouth? Describe the frontage, levels, surface and access once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Plymouth?",
    copy: "Enter the postcode, approximate area, preferred surface and whether a new or altered vehicle crossing is needed. Mention drainage, gradients, walls, trees and existing utilities so suitable Plymouth driveway specialists can assess the whole job.",
  },
  localContext: {
    eyebrow: "Plymouth driveway and highways context",
    title: "Dropped kerbs have specific size, planning and accredited-contractor requirements in Plymouth",
    intro: "Plymouth City Council has a detailed domestic vehicle-crossing process. A driveway is not automatically usable from the highway just because private hardstanding exists, and impermeable surfacing can also bring planning and drainage issues into scope.",
    items: [
      {
        title: "Domestic hardstanding must meet Plymouth's minimum dimensions for a vehicle crossing",
        text: "The council says a domestic vehicle crossing normally requires hardstanding at least 4.8 metres deep by 2.7 metres wide. Planning permission is required before the crossing application in several situations, including classified roads, listed buildings, conservation areas and where the hardstanding is impermeable.",
        source: {
          label: "Plymouth City Council — dropped kerbs",
          url: "https://www.plymouth.gov.uk/dropped-kerbs",
        },
      },
      {
        title: "The highway work must be done by an accredited contractor with a Section 171 permit",
        text: "Plymouth requires the approved contractor to hold the relevant accreditation and submit a Section 171 highway permit before constructing the crossing. The council also carries out a final inspection, so include the crossing and permit responsibilities clearly in the driveway quote.",
        source: {
          label: "Plymouth City Council — dropped kerbs and highway permits",
          url: "https://www.plymouth.gov.uk/dropped-kerbs",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Plymouth by postcode, surface and access requirements. Example areas include:",
    sideTitle: "Treat drainage and highway access as part of the same job",
    sideCopy: "A front garden in Peverell, a sloping plot in Mannamead and a larger frontage in Plymstock can have very different levels, drainage and crossing constraints. Give dimensions and photos from the road.",
    noteLead: "Impermeable paving can trigger extra checks.",
    noteText: "Plymouth says impermeable hardstanding is one of the situations where planning permission may be needed before a domestic vehicle-crossing application, so surface choice matters early.",
  },
  faq: [
    ["How much does a driveway cost in Plymouth?", "Cost depends on area, excavation, sub-base, drainage, edging, surface material, walls and whether a dropped kerb or highway work is needed. Compare quotes for the same full specification."],
    ["What size hardstanding does Plymouth require for a domestic dropped kerb?", "The council currently states at least 4.8 metres deep by 2.7 metres wide for a domestic vehicle crossing."],
    ["Will I need planning permission before a dropped kerb?", "Sometimes. Plymouth lists several triggers including classified roads, listed buildings, conservation areas, major level changes and impermeable hardstanding."],
    ["Can any driveway contractor build the pavement crossing?", "No. Plymouth requires the highway crossing work to be carried out by an accredited contractor with the relevant Section 171 permit."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Plymouth?",
    copy: "Describe the frontage, drainage, surface and vehicle-crossing needs once, then compare interested Plymouth driveway specialists and their quotes.",
    buttonLabel: "Get Plymouth driveway quotes",
  },
});

export const windowSpecialistsPlymouth = makePlymouthProfile("window-specialists", {
  heroCopy: "Need replacement windows, glazing repairs or new external doors in Plymouth? Describe the openings, materials and property type once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Plymouth?",
    copy: "Enter the postcode, number and type of windows or doors, frame material and whether the property is listed or in a conservation area. Mention security, ventilation, glazing and any change in opening style so suitable Plymouth window specialists can quote accurately.",
  },
  localContext: {
    eyebrow: "Plymouth windows, heritage and security context",
    title: "Replacement windows sit at the intersection of Building Regulations, heritage controls and security standards",
    intro: "Plymouth allows competent-person certification for replacement windows and doors, but listed buildings and conservation areas can add a separate planning or heritage layer. Devon & Cornwall Police also recommends PAS 24:2022 security-accredited products for replacement windows and doors.",
    items: [
      {
        title: "Registered installers can self-certify qualifying replacement-window work",
        text: "Plymouth City Council lists windows, doors, roof windows and roof lights in dwellings among work that can be covered by competent-person schemes. If you use that route, ask the installer what compliance certificate will be provided when the work is complete.",
        source: {
          label: "Plymouth City Council — competent person scheme",
          url: "https://www.plymouth.gov.uk/competent-person-scheme",
        },
      },
      {
        title: "Listed buildings and conservation areas can restrict apparently simple replacements",
        text: "Plymouth has 15 conservation areas and says listed-building consent is required where alterations affect a listed building's historic fabric or character. Before changing frame material, glazing pattern or opening style on protected property, check whether planning or listed-building consent is needed as well as Building Regulations compliance.",
        source: {
          label: "Plymouth City Council — listed building consent",
          url: "https://www.plymouth.gov.uk/apply-listed-building-consent",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Plymouth by postcode, frame type and number of openings. Example areas include:",
    sideTitle: "Match the specification to the building",
    sideCopy: "A sash window in the Barbican, a twentieth-century façade in the City Centre conservation area and a modern uPVC installation in Plympton can require very different detailing. Share elevation photos and property status before quoting.",
    noteLead: "Security and heritage should be checked together.",
    noteText: "Devon & Cornwall Police recommends PAS 24:2022 security-accredited products for replacements, while protected buildings may require a design that preserves historic character.",
  },
  faq: [
    ["How much do replacement windows cost in Plymouth?", "Cost depends on size, frame material, glazing, opening style, access, number of units and heritage requirements. Compare quotes using the same specification."],
    ["Can replacement windows be self-certified?", "Yes, qualifying work can be certified by an installer registered under an appropriate competent-person scheme."],
    ["Do conservation-area windows always need planning permission?", "Not automatically in every case, but conservation status can restrict permitted development and listed buildings have separate consent requirements. Check the exact property before ordering."],
    ["What security standard should I ask about?", "Devon & Cornwall Police recommends security-accredited replacement products and identifies PAS 24:2022 as a good standard."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Plymouth?",
    copy: "Describe the openings, property status and required specification once, then compare interested Plymouth window specialists and their quotes.",
    buttonLabel: "Get Plymouth window quotes",
  },
});
