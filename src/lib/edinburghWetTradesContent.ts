import { makeEdinburghProfile } from "./edinburghProfileBase";

export const bathroomSpecialistsEdinburgh = makeEdinburghProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit in Edinburgh? Describe the room, layout, fittings, finishes and any drainage or ventilation changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Edinburgh?",
    copy: "Enter the postcode and explain whether the job is a like-for-like replacement or a full redesign. Include photos or plans and say if walls, drainage, electrics, ventilation or windows are changing so suitable Edinburgh bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Edinburgh bathroom-refit context",
    title: "Scottish building-warrant exemptions cover some refits, but structural and drainage changes can change the position",
    intro: "Edinburgh's Building Standards guidance gives bathroom and en-suite refits as examples of domestic work that can be warrant-exempt when the project stays within defined limits. Larger changes to structure, floor area, external walls or wastewater discharge are different, so the exact scope should be established before work starts.",
    items: [
      {
        title: "A straightforward bathroom refit can fall within the domestic warrant exemptions",
        text: "The council's Building Standards FAQs say alteration and refit of a bathroom, or forming an en-suite bathroom or shower room, can be carried out without a warrant where the work does not involve excluded matters such as structural alterations or changing the method of wastewater discharge. Ask the fitter to identify whether the proposed layout stays within that simple-refit category.",
        source: {
          label: "City of Edinburgh Council — Building Standards FAQs",
          url: "https://www.edinburgh.gov.uk/downloads/file/31474/building-standards-faqs",
        },
      },
      {
        title: "Listed buildings can add a separate consent question",
        text: "Edinburgh advises that alterations to a listed building may need listed-building consent and may also require a building warrant. In a protected property, changes to significant historic finishes, windows, partitions or other fabric should be checked before the room is stripped out.",
        source: {
          label: "City of Edinburgh Council — listed building consent",
          url: "https://www.edinburgh.gov.uk/planning-applications-1/apply-listed-building-consent",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Edinburgh by postcode, room size and project scope. Example areas include:",
    sideTitle: "Describe what is moving, not just what is being replaced",
    sideCopy: "A like-for-like suite replacement is different from moving a WC, adding a shower, changing ventilation or altering walls in an older flat. Mark the existing and proposed positions of the main fittings if possible.",
    noteLead: "Waterproofing and ventilation matter as much as the visible finish.",
    noteText: "Ask what preparation, tanking, extraction, plumbing, electrics, tiling, disposal and making-good work are included in each quote.",
  },
  faq: [
    ["How much does a bathroom refit cost in Edinburgh?", "Costs vary with room size, fittings, tiling, plumbing changes, ventilation, electrics and preparation. Compare itemised quotes for the same scope."],
    ["Does an Edinburgh bathroom refit need a building warrant?", "Some straightforward domestic bathroom and en-suite work can be warrant-exempt, but structural changes or changes to wastewater discharge can alter that position."],
    ["Can listed-building status affect a bathroom project?", "Potentially. If the work affects protected historic fabric or other listed features, listed-building consent may be needed separately from any building-warrant question."],
    ["Can I post a small shower or suite replacement?", "Yes. Smaller replacements and repairs can be posted alongside complete bathroom redesigns."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Edinburgh?",
    copy: "Describe the room, fittings and layout changes once, then compare interested Edinburgh bathroom specialists and their quotes.",
    buttonLabel: "Get Edinburgh bathroom quotes",
  },
});

export const drainageSpecialistsEdinburgh = makeEdinburghProfile("drainage-specialists", {
  heroCopy: "Dealing with a blocked drain, recurring drainage problem or planned drainage work in Edinburgh? Describe the symptoms, property type and affected area once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Edinburgh?",
    copy: "Enter the postcode and explain where the problem appears, how often it happens and whether it affects one fitting, the whole property or a shared system. Include photos or previous survey information so suitable Edinburgh drainage specialists can judge the likely investigation.",
  },
  localContext: {
    eyebrow: "Edinburgh drainage and shared-repair context",
    title: "Private, shared and public drainage responsibilities can differ across Edinburgh properties",
    intro: "The council distinguishes private building drains from street drains and main sewers, and many Edinburgh flats and tenements have shared maintenance responsibilities. Historical drainage records are also available, which can be useful when the route of an older system is unclear.",
    items: [
      {
        title: "Private drains, street drains and main sewers do not have the same owner",
        text: "Edinburgh's emergency-repairs guidance says main sewers and drains in the street are maintained by Scottish Water, while other drains are privately owned by building owners. For a blockage or collapse, establish whether the affected section is inside the property, shared between owners or part of the public network before assuming who should pay for repair.",
        source: {
          label: "City of Edinburgh Council — drainage problems and emergency repairs",
          url: "https://www.edinburgh.gov.uk/shared-repairs/unsafe-buildings-emergency-repairs/2",
        },
      },
      {
        title: "Edinburgh provides historical drainage records for properties",
        text: "The council's drainage-record service lets owners search records showing the location of sewerage pipes and drains, while warning that the records come from different historical sources. For recurring or hard-to-trace problems in an older property, existing records can help a contractor plan CCTV, tracing or excavation more intelligently.",
        source: {
          label: "City of Edinburgh Council — drainage records",
          url: "https://www.edinburgh.gov.uk/building-warrant-records/drainage-records",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Edinburgh by postcode, system type and urgency. Example areas include:",
    sideTitle: "Say whether the problem is private or shared",
    sideCopy: "A blockage serving one flat, a shared tenement stack and a problem outside the property boundary can involve different responsibilities and investigation methods. State which fixtures are affected and whether neighbours have the same symptoms.",
    noteLead: "Recurring blockages need diagnosis, not repeated clearing only.",
    noteText: "Ask whether the quote includes CCTV, tracing, jetting, excavation, repair and a report, and clarify which owner or authority is responsible for the affected section.",
  },
  faq: [
    ["How much does drain unblocking cost in Edinburgh?", "Price depends on access, blockage type, equipment, CCTV needs and whether repair or excavation is required. Compare quotes for the same investigation scope."],
    ["Who is responsible for a blocked drain in Edinburgh?", "It depends where the problem is. The council says street drains and main sewers are maintained by Scottish Water, while other drains are generally privately owned by building owners."],
    ["What if the drain serves several flats?", "Shared systems can involve joint owner responsibility. State whether neighbours have the same problem and whether a factor or shared-repairs arrangement exists."],
    ["Can old drainage plans help?", "Yes. The council provides historical drainage records that may help identify older pipe and sewer routes, although the records vary in age and detail."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Edinburgh?",
    copy: "Describe the symptoms, property and drainage route once, then compare interested Edinburgh drainage specialists and their quotes.",
    buttonLabel: "Get Edinburgh drainage quotes",
  },
});
