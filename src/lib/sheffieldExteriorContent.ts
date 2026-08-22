import { makeSheffieldProfile } from "./sheffieldProfileBase";

export const drivewaySpecialistsSheffield = makeSheffieldProfile("driveway-specialists", {
  heroCopy: "Planning block paving, resin, tarmac, gravel or a new parking area in Sheffield? Describe the frontage, dimensions and existing surface once, then compare driveway specialists interested in the job.",
  answer: {
    title: "Looking for a driveway specialist near you in Sheffield?",
    copy: "Enter the postcode, approximate square metres and preferred finish. Add photos from the road and say whether a dropped kerb already exists so suitable Sheffield driveway specialists can judge excavation, drainage and access requirements.",
  },
  localContext: {
    eyebrow: "Sheffield driveway and access rules",
    title: "The private driveway, surface-water plan and legal vehicle crossing are separate parts of the job",
    intro: "Sheffield City Council requires permission before a vehicle crosses the pavement via a new dropped kerb, and some sites need planning permission before the crossover application. The council also promotes sustainable drainage because Sheffield's topography can make poorly managed runoff contribute to flooding downstream.",
    items: [
      {
        title: "A new dropped kerb needs Sheffield City Council permission",
        text: "The council says permission is required before installing a dropped kerb so vehicles can legally access a driveway or off-street parking. If the proposed crossing is on a classified road, in a conservation area or serves a listed building, planning permission is required first. Once approved, the kerb work must be carried out by a suitably qualified highway contractor.",
        source: {
          label: "Sheffield City Council — request a dropped kerb",
          url: "https://www.sheffield.gov.uk/parking/request-adjustments/request-dropped-kerb",
        },
      },
      {
        title: "Surface water should be controlled close to where it falls",
        text: "Sheffield's sustainability guidance promotes SuDS and says they are particularly appropriate to the city's topography, where poorly managed runoff can cause local and downstream flooding. Ask how falls, permeable construction, channels or other drainage will keep water on a lawful route rather than simply sending it onto the pavement or neighbouring land.",
        source: {
          label: "Sheffield City Council — environment and resources sustainability guidance",
          url: "https://www.sheffield.gov.uk/planning-development/sustainability-toolkit/environment-and-resources",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Sheffield by postcode, surface and job size. Example areas include:",
    sideTitle: "Measure the frontage and show the highway edge",
    sideCopy: "Give width, depth, approximate square metres and photos showing the pavement, road and existing drainage. Sheffield's slopes can make levels and runoff direction especially important on some streets.",
    noteLead: "Do not assume the quote includes a dropped kerb.",
    noteText: "The highway crossing and private driveway are separate jobs. Establish council permission, planning constraints and who is responsible for each before rebuilding the frontage.",
  },
  faq: [
    ["How much does a driveway cost in Sheffield?", "The price depends on area, excavation, sub-base, drainage, edging and the chosen surface. Compare quotes against the same square metres and preparation specification."],
    ["Do I need permission for a dropped kerb in Sheffield?", "Yes. Sheffield City Council requires permission for a vehicle crossing, and planning permission is needed first in some cases including classified roads, conservation areas and listed buildings."],
    ["Who can carry out the dropped-kerb work?", "After permission is granted, Sheffield requires the work to be carried out by a qualified highway contractor with the required Street Works qualifications and public-liability insurance."],
    ["Why should drainage be designed into the driveway?", "Sheffield City Council promotes SuDS and highlights the city's topography as a reason to control runoff near its source rather than allowing poorly managed surface water to flow downstream."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Sheffield?",
    copy: "Share the frontage, dimensions, drainage and preferred surface once, then compare interested Sheffield driveway specialists and their quotes.",
    buttonLabel: "Get Sheffield driveway quotes",
  },
});

export const windowSpecialistsSheffield = makeSheffieldProfile("window-specialists", {
  heroCopy: "Replacing windows, repairing failed double glazing or upgrading sash, bay, timber or uPVC units in Sheffield? Describe the property and openings once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Sheffield?",
    copy: "Enter the postcode, number and style of windows and whether you need full frames or only failed sealed units replaced. Mention listed-building, conservation-area or Article 4 status if known so suitable Sheffield specialists can respond accurately.",
  },
  localContext: {
    eyebrow: "Sheffield window, heritage and security checks",
    title: "Heritage designations and local Article 4 directions can change what replacement windows are allowed",
    intro: "Sheffield has 38 conservation areas and around 1,100 listed buildings. The council also says Broomhill and Nether Edge Conservation Areas have additional Article 4 restrictions, so the exact address should be checked before non-returnable replacement frames are ordered.",
    items: [
      {
        title: "Conservation and Article 4 controls can remove normal freedoms to alter a frontage",
        text: "Sheffield City Council says certain work in conservation areas requires planning permission and that Broomhill and Nether Edge have further Article 4 restrictions. Listed buildings have separate consent requirements. For period windows, check the property's status before deciding on frame material, glazing pattern or full replacement rather than repair.",
        source: {
          label: "Sheffield City Council — find out if you need planning permission",
          url: "https://www.sheffield.gov.uk/planning-development/applications-advice/need-planning-permission",
        },
      },
      {
        title: "Replacement windows can also have a Building Regulations route",
        text: "Sheffield's Building Notice guidance lists replacement windows where a FENSA-registered company is not used as work that can require a Building Notice. Separately, South Yorkshire Police advises homeowners to prioritise secure doors and windows and security-accredited products, so compare both compliance and security specification when choosing frames.",
        source: {
          label: "Sheffield City Council — apply for a Building Notice",
          url: "https://www.sheffield.gov.uk/planning-development/building-regulations/apply-building-notice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Sheffield by postcode, frame type and project size. Example areas include:",
    sideTitle: "Check the property's planning status before ordering frames",
    sideCopy: "A modern house in Hillsborough and a period property in Broomhill, Nether Edge or another conservation area can have very different product and planning constraints. Confirm listing, conservation and Article 4 status first.",
    noteLead: "Repair may be an alternative to full replacement.",
    noteText: "For timber or period windows, ask whether repair, draught-proofing, sealed-unit replacement or secondary glazing can meet the goal without unnecessarily changing the whole frame.",
  },
  faq: [
    ["How much do replacement windows cost in Sheffield?", "The price depends on material, style, size, glazing specification, access and whether repairs to surrounding finishes are included. Compare the same product specification and installation scope."],
    ["Can conservation-area rules affect replacement windows in Sheffield?", "Yes. Sheffield has 38 conservation areas, and some external alterations can require planning permission depending on the property and proposal."],
    ["Are Broomhill and Nether Edge different?", "They can be. Sheffield City Council says these conservation areas have additional Article 4 directions that further restrict permitted-development rights."],
    ["Do replacement windows need Building Regulations paperwork?", "They can. Sheffield's guidance says a Building Notice can apply where replacement windows are installed without using a FENSA-registered company, subject to the wider regulations and circumstances."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Sheffield?",
    copy: "Describe the openings, property status and preferred product once, then compare interested Sheffield window specialists and their quotes.",
    buttonLabel: "Get Sheffield window quotes",
  },
});
