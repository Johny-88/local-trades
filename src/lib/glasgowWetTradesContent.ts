import { makeGlasgowProfile } from "./glasgowProfileBase";

export const bathroomSpecialistsGlasgow = makeGlasgowProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refurbishment, new shower room or bathroom repair in Glasgow? Describe the room, layout, fittings and any plumbing or structural changes once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Glasgow?",
    copy: "Enter the postcode and explain whether the job is a like-for-like refit or a larger remodel. Include photos, room dimensions and details of drainage, ventilation, electrics, tiling and wall changes so suitable Glasgow bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Glasgow bathroom and building-standards context",
    title: "Scottish building-warrant rules depend on the type of property and the extent of the alteration",
    intro: "Glasgow Building Standards administers the Scottish building-warrant system locally. Some bathroom work in houses can be exempt from a warrant, but more significant structural, external-wall or wastewater changes can fall outside those exemptions, and flats can require a different assessment.",
    items: [
      {
        title: "Not every bathroom refit needs a warrant, but the wider work still matters",
        text: "Scottish building-standards guidance allows some bathroom and shower work in houses to proceed without a warrant, while identifying important exceptions for structural elements, external walls and changes affecting wastewater discharge. A Glasgow bathroom specialist should distinguish a simple refit from alterations that need Building Standards involvement.",
        source: {
          label: "Scottish Government — building standards guidance",
          url: "https://www.gov.scot/policies/building-standards/",
        },
      },
      {
        title: "Wastewater systems still have to meet Scottish building standards",
        text: "Scottish technical guidance requires wastewater drainage to remove wastewater safely and, where reasonably practicable, discharge to the public sewer or treatment system. If a bathroom is being moved or a new soil or waste connection is proposed, ask how the drainage route will be designed and whether a warrant is required for the particular property.",
        source: {
          label: "Scottish Government — wastewater drainage standard",
          url: "https://www.gov.scot/publications/building-standards-technical-handbook-2022-domestic/3-environment/3-7-wastewater-drainage/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Glasgow by postcode, room type and project size. Example areas include:",
    sideTitle: "Describe the plumbing route as well as the visible finish",
    sideCopy: "A like-for-like bathroom in Cathcart is a different job from moving a shower room across a tenement flat in Hillhead or altering drainage in a property in Dennistoun. Give the existing and proposed layout where possible.",
    noteLead: "Separate cosmetic work from regulated alterations.",
    noteText: "Tiling and sanitaryware can be straightforward, but structural, ventilation, electrical and wastewater changes can alter the compliance route and the final price.",
  },
  faq: [
    ["How much does a bathroom refurbishment cost in Glasgow?", "Cost depends on room size, fittings, tiling, plumbing changes, drainage, electrics, ventilation and structural work. Compare quotes against the same specification."],
    ["Does every Glasgow bathroom refit need a building warrant?", "No. Some work in houses can be exempt, but the exact property type and scope matter. Structural or significant drainage changes can require a warrant."],
    ["Can I move a toilet or shower to another part of the room?", "Often yes, but the drainage route, floor structure, ventilation and building-standards implications should be checked before the layout is fixed."],
    ["Who removes the old bathroom suite and rubble?", "Agree this before work starts. Waste created by paid trade work is business waste in Scotland, so disposal should be clear in the quote."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Glasgow?",
    copy: "Describe the room, fittings and plumbing changes once, then compare interested Glasgow bathroom specialists and their quotes.",
    buttonLabel: "Get Glasgow bathroom quotes",
  },
});

export const drainageSpecialistsGlasgow = makeGlasgowProfile("drainage-specialists", {
  heroCopy: "Need help with blocked drains, recurring wastewater problems, damaged pipework or drainage investigation in Glasgow? Describe the symptoms, location and history once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Glasgow?",
    copy: "Enter the postcode and explain whether the problem is a blockage, smell, slow drainage, flooding, recurring rodent route or suspected damaged pipe. Mention internal and external symptoms and any previous repairs so suitable Glasgow specialists can assess the likely investigation.",
  },
  localContext: {
    eyebrow: "Glasgow drainage and flood-management context",
    title: "Glasgow actively manages surface-water flood risk, while older drainage defects can also contribute to property problems",
    intro: "Glasgow's planning and flood-management work uses Sustainable Drainage Systems and surface-water planning across the city. Separately, the council's pest-control reporting identifies broken pipes and drain covers as routes that can allow rats to escape from sewers into older buildings.",
    items: [
      {
        title: "Glasgow planning policy requires active management of surface-water runoff",
        text: "Glasgow's Sustainable Drainage Systems policy requires development proposals to make satisfactory provision for managing and safely disposing of surface-water runoff, including flood routing and coordination with Scottish Water where appropriate. For recurring external flooding or new drainage work, the route for surface water matters as much as the immediate blockage.",
        source: {
          label: "Glasgow City Council — Sustainable Drainage Systems policy",
          url: "https://onlineservices.glasgow.gov.uk/CouncillorsandCommittees/viewSelectedDocument.asp?c=P62AFQDNDNZ3DXDNNT",
        },
      },
      {
        title: "Broken drains can also be part of repeated rodent problems",
        text: "Glasgow City Council has linked recurring rodent issues to ageing sewer infrastructure, broken pipes and missing or defective drain covers. If rats repeatedly appear after pest treatment, a drainage inspection may be worth discussing rather than treating baiting and drainage as completely separate problems.",
        source: {
          label: "Glasgow City Council — pest-control and drainage evidence",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDN81ZLDXDNZL",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Glasgow by postcode, system type and urgency. Example areas include:",
    sideTitle: "Describe whether the problem is internal, external or recurring",
    sideCopy: "A blocked sink, overflowing gully, recurring basement smell and suspected collapsed external drain are different jobs. State when the issue happens, what fixtures are affected and whether heavy rain changes it.",
    noteLead: "Ask what the investigation includes.",
    noteText: "For repeated problems, compare whether quotes include CCTV inspection, jetting, tracing, excavation, repair and a written report rather than only a first attempt to clear the line.",
  },
  faq: [
    ["How much does drainage work cost in Glasgow?", "Price depends on whether the job needs simple clearance, CCTV inspection, jetting, excavation, pipe repair or larger drainage redesign. Compare the same investigation scope."],
    ["Can recurring rats indicate a drainage problem?", "They can. Glasgow City Council identifies broken pipes and drain covers as possible routes from sewers into buildings, although other entry points can also be responsible."],
    ["What is SuDS and why does it matter in Glasgow?", "Sustainable Drainage Systems manage surface-water runoff closer to where it falls and are part of Glasgow's planning approach to reducing flood risk and pressure on drainage networks."],
    ["Can I post an urgent blocked-drain job?", "Yes. State the postcode, affected fixtures, whether sewage is backing up and whether the problem is inside or outside so specialists can judge urgency."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Glasgow?",
    copy: "Describe the symptoms and drainage history once, then compare interested Glasgow drainage specialists and their proposed solution.",
    buttonLabel: "Get Glasgow drainage quotes",
  },
});
