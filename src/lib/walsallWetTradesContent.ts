import { makeWalsallProfile } from "./walsallProfileBase";

export const bathroomSpecialistsWalsall = makeWalsallProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom, shower room or wet-room project in Walsall? Describe the room, fittings, layout changes and current problems once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Walsall?",
    copy: "Enter the postcode, room size and required work. Mention plumbing changes, showers, baths, toilets, tiling, ventilation, electrics, flooring and any damp or leak damage so suitable Walsall bathroom specialists can quote the same scope.",
  },
  localContext: {
    eyebrow: "Walsall shared-home bathroom standards",
    title: "Bathroom provision matters more when the property is a shared rented home",
    intro: "For HMOs, Walsall sets occupancy-related standards for bathrooms and toilets. A refurbishment should therefore be planned around how many people the facilities serve, not just the room's appearance.",
    items: [
      {
        title: "Up to four HMO tenants need at least one bathroom and toilet",
        text: "Walsall Council's HMO management guidance says that for up to four tenants there must be at least one bathroom and toilet, which can be in the bathroom. If the room is being refurbished in a shared property, tell the contractor how many occupiers rely on it.",
        source: {
          label: "Walsall Council — managing houses in multiple occupation",
          url: "https://go.walsall.gov.uk/housing/information-landlords/houses-multiple-occupation-hmo/managing-houses-multiple-occupation",
        },
      },
      {
        title: "Larger HMOs need at least one bathroom for every five people",
        text: "For five or more tenants, Walsall says there must be at least one bathroom for every five people. This can affect whether a refurbishment is a simple replacement or whether extra facilities are needed to meet the property's occupancy standard.",
        source: {
          label: "Walsall Council — managing houses in multiple occupation",
          url: "https://go.walsall.gov.uk/housing/information-landlords/houses-multiple-occupation-hmo/managing-houses-multiple-occupation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Walsall by postcode, layout and project size. Example areas include:",
    sideTitle: "Describe the hidden work behind the finishes",
    sideCopy: "A shower replacement in Pelsall, a full bathroom in Aldridge and a wet-room conversion in Walsall can require different plumbing, waterproofing, ventilation and electrical work. State whether walls or floors are already damaged or uneven.",
    noteLead: "Leaks and damp should be diagnosed before new finishes go on.",
    noteText: "Ask whether the quote includes strip-out, plumbing alterations, tanking, ventilation, electrical work, tiling, flooring, plastering and disposal so each contractor prices the same project.",
  },
  faq: [
    ["How much does a bathroom renovation cost in Walsall?", "Cost depends on room size, fittings, plumbing changes, waterproofing, tiling, electrics and finishing work. Compare quotes against the same specification."],
    ["How many bathrooms does a Walsall HMO need?", "Walsall says up to four tenants need at least one bathroom and toilet, while properties with five or more tenants need at least one bathroom for every five people."],
    ["Should I fix a leak before tiling?", "Yes. The source of ongoing moisture or leakage should be identified and repaired before new finishes hide the problem."],
    ["Can I post a small shower or toilet replacement?", "Yes. Individual fixture replacements can be posted as well as full bathroom and wet-room refurbishments."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Walsall?",
    copy: "Describe the room, fittings and associated work once, then compare interested Walsall bathroom specialists and their quotes.",
    buttonLabel: "Get Walsall bathroom quotes",
  },
});

export const drainageSpecialistsWalsall = makeWalsallProfile("drainage-specialists", {
  heroCopy: "Need a drainage specialist in Walsall for a blockage, recurring overflow, damaged pipe or surface-water problem? Describe the symptoms and location once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Walsall?",
    copy: "Enter the postcode, affected fixtures or external drains, when the problem occurs and whether neighbouring properties are affected. Mention flooding after rain, bad smells, slow drainage or previous repairs so suitable Walsall drainage specialists can assess the likely cause.",
  },
  localContext: {
    eyebrow: "Walsall drainage responsibilities",
    title: "Surface-water flooding and sewer problems can involve different authorities",
    intro: "A drainage fault at one property can sit within a wider network of private drains, public sewers, surface-water systems and ordinary watercourses. Walsall is the Lead Local Flood Authority for local flood risks, while Severn Trent is relevant to sewer and water-network information.",
    items: [
      {
        title: "Walsall is the Lead Local Flood Authority",
        text: "Walsall Council's highways management plan states that the council is the Lead Local Flood Authority and is responsible for managing risks from surface water, groundwater and ordinary watercourses, including investigation of serious flooding incidents that meet local criteria.",
        source: {
          label: "Walsall Council — Highway Maintenance Management Plan",
          url: "https://go.walsall.gov.uk/sites/default/files/2024-05/Highway%20Maintenance%20Management%20Plan%20April%202024.pdf",
        },
      },
      {
        title: "Sewer and drain searches are handled through Severn Trent",
        text: "Walsall Council's local-land-charges guidance tells property owners to ask Severn Trent for a drainage and water search when they need information about sewers and drains. For recurring or boundary-related problems, identifying who owns the affected pipe is important before agreeing repair work.",
        source: {
          label: "Walsall Council — check local land charges",
          url: "https://go.walsall.gov.uk/planning-and-building-control/planning-householders/check-local-land-charges",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Walsall by postcode, symptom and urgency. Example areas include:",
    sideTitle: "Describe when the problem happens and who else is affected",
    sideCopy: "A blocked kitchen drain in Willenhall, garden flooding in Brownhills and repeated sewer smells in Bloxwich may point to very different causes. Say whether the problem is constant, rain-related or shared with neighbours.",
    noteLead: "Diagnosis should come before excavation where possible.",
    noteText: "Ask whether the contractor expects to use rodding, jetting, CCTV inspection, tracing or excavation and whether the quote includes making good after any access work.",
  },
  faq: [
    ["How much does a drainage specialist cost in Walsall?", "Pricing depends on the fault, access, equipment, urgency and whether the job needs jetting, CCTV inspection or excavation. Compare quotes against the same diagnostic scope."],
    ["Who deals with surface-water flooding in Walsall?", "Walsall Council is the Lead Local Flood Authority for local risks including surface water, groundwater and ordinary watercourses."],
    ["Who can provide information about sewers and drains?", "Walsall Council directs property owners to Severn Trent for drainage and water searches concerning sewers and drains."],
    ["Should I request a CCTV drain survey?", "For recurring blockages, suspected damage or unclear pipe routes, a CCTV survey can help identify the problem before excavation."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Walsall?",
    copy: "Describe the drainage problem and symptoms once, then compare interested Walsall drainage specialists and their quotes.",
    buttonLabel: "Get Walsall drainage quotes",
  },
});
