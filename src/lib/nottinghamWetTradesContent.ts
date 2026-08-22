import { makeNottinghamProfile } from "./nottinghamProfileBase";

export const bathroomSpecialistsNottingham = makeNottinghamProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refurbishment in Nottingham? Describe the existing room, proposed layout, fittings and service changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Nottingham?",
    copy: "Enter the postcode and explain whether the job is a like-for-like refit or includes moving drainage, electrics, ventilation, walls or floors. Add photos and a fitting list so suitable Nottingham bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Nottingham bathroom and rental-property context",
    title: "Bathrooms can combine regulated drainage, electrical and ventilation work, especially in licensed shared housing",
    intro: "Nottingham Building Control treats sanitary facilities, drainage and other controlled services as part of the Building Regulations framework. In HMOs and other licensed rentals, bathroom provision and ongoing property standards can also be relevant to landlords and managers.",
    items: [
      {
        title: "Bathroom service changes can require Building Regulations compliance",
        text: "Nottingham City Council lists washing and sanitary facilities, foul and rainwater drainage and other controlled services among work covered by Building Regulations. If the new layout moves waste pipes, adds electrical work or changes ventilation, ask who is responsible for notification, inspection and certification.",
        source: {
          label: "Nottingham City Council — check approval needed for building work",
          url: "https://www.nottinghamcity.gov.uk/buildingwork",
        },
      },
      {
        title: "Licensed HMOs are assessed against bathroom and amenity standards",
        text: "Nottingham's HMO licensing guidance includes published bathing and amenity standards and assesses whether a property is suitable for its number of occupiers. For a bathroom refurbishment in a shared rental, give the occupancy and landlord requirements so the contractor understands whether the job is cosmetic or part of a compliance upgrade.",
        source: {
          label: "Nottingham City Council — mandatory HMO licensing",
          url: "https://nottinghamcity.gov.uk/HMOLicensing",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Nottingham by postcode, room size and project scope. Example areas include:",
    sideTitle: "Describe what is moving, not just what is being replaced",
    sideCopy: "A like-for-like refit in Clifton is very different from relocating a WC, shower or soil connection in a terrace in Sneinton or a shared rental in Lenton. Mark every service move on the brief.",
    noteLead: "Waterproofing and hidden services matter.",
    noteText: "Ask what tanking, subfloor repair, ventilation, electrical certification, plumbing alterations and waste removal are included before comparing headline bathroom prices.",
  },
  faq: [
    ["How much does a bathroom refurbishment cost in Nottingham?", "Price depends on room size, fittings, tiling, plumbing moves, electrical work, ventilation and hidden repairs. Compare quotes for the same specification."],
    ["Does a bathroom refit need Building Regulations approval?", "A simple cosmetic replacement may not, but drainage, electrical, ventilation, structural and other controlled work can require compliance or certification."],
    ["Do Nottingham HMO bathroom standards matter for landlords?", "Yes. Licensed HMOs are assessed against local amenity requirements, so a landlord should confirm the standard needed for the number of occupiers."],
    ["Should I include fittings in the job description?", "Yes. List the bath, shower, WC, basin, taps, tiles and any furniture or screens so contractors price the same specification."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Nottingham?",
    copy: "Describe the bathroom, fittings and service changes once, then compare interested Nottingham specialists and their quotes.",
    buttonLabel: "Get Nottingham bathroom quotes",
  },
});

export const drainageSpecialistsNottingham = makeNottinghamProfile("drainage-specialists", {
  heroCopy: "Dealing with blocked drains, recurring smells, damaged pipework or surface-water problems in Nottingham? Describe the symptoms and affected area once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Nottingham?",
    copy: "Enter the postcode and explain where the problem appears, whether it is internal or external, how often it returns and any previous work. Photos, drain plans or CCTV findings can help suitable Nottingham drainage specialists judge the next step.",
  },
  localContext: {
    eyebrow: "Nottingham drainage and flood-risk context",
    title: "Drainage work can involve Building Regulations, public sewers and Nottingham's surface-water policy",
    intro: "The council treats foul and rainwater drainage as controlled building work and advises checking public sewer constraints with Severn Trent before relevant building work. Nottingham planning policy also promotes SuDS and runoff reduction so surface water is not simply pushed elsewhere.",
    items: [
      {
        title: "Public sewers should be checked before building work affects drainage",
        text: "Nottingham Building Control advises contacting Severn Trent Water before starting building work to check whether public sewers may affect the proposal. For extensions, new bathrooms, rerouted drains or repeated external blockages, clarify whether the affected pipe is private, shared or public before agreeing excavation or alteration work.",
        source: {
          label: "Nottingham City Council — apply for Building Regulations approval",
          url: "https://www.nottinghamcity.gov.uk/information-for-business/planning-and-building-control/building-control-service/apply-for-building-regulations-approval/",
        },
      },
      {
        title: "Nottingham policy expects surface-water runoff to be managed rather than displaced",
        text: "The city's planning policy encourages Sustainable Drainage Systems and requires development not to increase flood risk elsewhere, with brownfield schemes expected to reduce runoff where possible. For recurring garden, driveway or extension-related water problems, ask whether the proposed fix deals with the source and discharge route rather than moving the problem to a neighbour or highway.",
        source: {
          label: "Nottingham City Council — Local Plan surface-water and SuDS policy",
          url: "https://www.nottinghamcity.gov.uk/media/ivyf4yrc/lapp-web-version.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Nottingham by postcode, symptom and drainage system. Example areas include:",
    sideTitle: "Describe whether the problem is one-off or recurring",
    sideCopy: "A single sink blockage, repeated rat access through a drain, a collapsed external pipe and surface-water pooling need different investigation. Mention previous jetting, CCTV or excavation work.",
    noteLead: "Diagnosis before excavation saves money.",
    noteText: "For recurring or unclear problems, ask whether CCTV, tracing, jetting or other investigation is included before agreeing major groundworks.",
  },
  faq: [
    ["How much does drainage work cost in Nottingham?", "It depends on whether the job needs simple clearance, CCTV, jetting, excavation, pipe repair or public-sewer involvement. Compare the same diagnostic and repair scope."],
    ["When should Severn Trent be involved?", "If building work may affect a public sewer or the issue appears to involve the public network, check the relevant responsibility and approvals before altering pipework."],
    ["Do surface-water rules matter for a new driveway or extension?", "They can. Nottingham planning policy promotes SuDS and expects development not to increase flood risk elsewhere."],
    ["Can recurring rats be linked to drainage defects?", "Yes. Nottingham City Council's pest guidance specifically notes that properties can provide rats access to drains or sewers, so recurring activity may justify checking the drainage route."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Nottingham?",
    copy: "Describe the symptoms, history and affected drainage once, then compare interested Nottingham specialists and their proposed solutions.",
    buttonLabel: "Get Nottingham drainage quotes",
  },
});
