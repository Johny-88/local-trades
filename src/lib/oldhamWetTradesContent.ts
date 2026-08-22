import { makeOldhamProfile } from "./oldhamProfileBase";

export const bathroomSpecialistsOldham = makeOldhamProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower-room conversion or new bathroom in Oldham? Describe the room, fixtures and layout once, then compare bathroom specialists who cover your postcode.",
  answer: {
    title: "Looking for a bathroom specialist near you in Oldham?",
    copy: "Enter the postcode, room size, current layout, sanitaryware, shower or bath requirements and whether plumbing, drainage, electrics, tiling, plastering or ventilation changes are needed.",
  },
  localContext: {
    eyebrow: "Oldham bathroom and drainage approval",
    title: "New or relocated bathroom drainage is regulated, and the application route can depend on sewer proximity",
    intro: "Oldham Council's Building Control guidance is unusually clear on drainage changes: new or relocated bathrooms need approval, and a Building Notice is not the right route for domestic work within three metres of a sewer.",
    items: [
      {
        title: "Installing or relocating bathroom drainage requires Building Control approval",
        text: "Oldham Council says new drainage facilities, including installation or relocation of toilets and bathrooms, require Building Control approval.",
        source: {
          label: "Oldham Council — drainage",
          url: "https://www.oldham.gov.uk/info/200412/apply_for_approval/916/drainage",
        },
      },
      {
        title: "Domestic work within three metres of a sewer should use Full Plans",
        text: "Oldham's online Building Control application guidance says Building Notice is for domestic alterations and extensions not within three metres of a sewer, while Full Plans is the route for domestic extensions within three metres of a sewer.",
        source: {
          label: "Oldham Council — Building Control application",
          url: "https://adt.oldham.gov.uk/buildingcontrol/introduction.aspx",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Oldham by postcode, room size and scope. Example areas include:",
    sideTitle: "Give the proposed layout, not just a list of fittings",
    sideCopy: "A like-for-like suite in Chadderton, a shower-room conversion in Shaw and a bathroom moved within a house in Saddleworth can have very different drainage and ventilation implications.",
    noteLead: "Waterproofing and drainage are core scope items.",
    noteText: "Ask each quote to identify plumbing alterations, waste routes, tanking or membranes, tiling preparation, ventilation, electrics and making good so cheaper quotes are not simply excluding work.",
  },
  faq: [
    ["How much does a bathroom refit cost in Oldham?", "Cost depends on room size, sanitaryware, layout changes, drainage, tiling, electrics, ventilation, access and finish."],
    ["Does moving a toilet or bathroom drainage need Building Control approval?", "Yes. Oldham Council says new or relocated toilets and bathroom drainage require Building Control approval."],
    ["Can I use a Building Notice when work is close to a sewer?", "Oldham's application guidance says domestic Building Notices are for work not within three metres of a sewer; Full Plans is used for domestic extensions within that distance."],
    ["Can I post a shower replacement only?", "Yes. Smaller repair or replacement jobs can be posted alongside full bathroom refits."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Oldham?",
    copy: "Describe the bathroom, layout and drainage changes once, then compare interested Oldham bathroom specialists and their quotes.",
    buttonLabel: "Get Oldham bathroom quotes",
  },
});

export const drainageSpecialistsOldham = makeOldhamProfile("drainage-specialists", {
  heroCopy: "Blocked drain, recurring backup, damaged pipework or drainage investigation needed in Oldham? Describe the symptoms and property once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Oldham?",
    copy: "Enter the postcode, fixtures affected, whether neighbours are affected, how quickly water drains and any previous jetting, CCTV or repair work. Mention flooding or external gully problems separately.",
  },
  localContext: {
    eyebrow: "Oldham drains and flood responsibility",
    title: "Private blockages, public sewers and highway gullies sit with different parties",
    intro: "Oldham Council separates responsibility between property owners, United Utilities and council highway drainage. Identifying which system is affected can avoid paying the wrong contractor to investigate.",
    items: [
      {
        title: "Private drains are usually the property owner's responsibility",
        text: "Oldham Council says clearance and repair of blockages in private drains usually lies with the property owner. If neighbours are also affected, the fault is more likely to be on the sewer and responsibility lies with United Utilities.",
        source: {
          label: "Oldham Council — drains and sewers",
          url: "https://www.oldham.gov.uk/info/200236/properties_and_environmental_health/153/drains_and_sewers",
        },
      },
      {
        title: "Oldham has more than 47,500 highway gullies in its borough-wide cleaning programme",
        text: "The council says its borough has 47,595 gullies and has a priority-based clearing operation to help road water drain and reduce flood risk. Gullies inside private property remain the homeowner's responsibility.",
        source: {
          label: "Oldham Council — gully cleaning and flood guidance",
          url: "https://www.oldham.gov.uk/info/201043/flooding/886/flood_guidance/4",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Oldham by postcode, blockage type and urgency. Example areas include:",
    sideTitle: "Check whether only your property is affected",
    sideCopy: "A single slow drain in Lees, several fixtures backing up in Royton and multiple neighbouring homes affected in Hollinwood point to different likely responsibilities. Tell the contractor exactly what else is happening.",
    noteLead: "Diagnosis should come before excavation.",
    noteText: "For recurring problems, ask whether the quote includes CCTV, jetting, root cutting, tracing, written findings and repair recommendations rather than jumping straight to replacement.",
  },
  faq: [
    ["How much does drain unblocking cost in Oldham?", "Cost depends on blockage location, access, equipment, urgency and whether CCTV, jetting or repair work is needed."],
    ["Who is responsible for a blocked private drain in Oldham?", "Oldham Council says the property owner is usually responsible for private drains."],
    ["What if my neighbours are blocked too?", "Oldham Council says that if neighbours are also affected, the problem is likely to involve the sewer, which is the responsibility of United Utilities."],
    ["Does Oldham Council clean road gullies?", "Yes. The council runs a borough-wide gully-clearing programme, while gullies within private property remain the homeowner's responsibility."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Oldham?",
    copy: "Describe the blockage, affected fixtures and drainage history once, then compare interested Oldham drainage specialists and their quotes.",
    buttonLabel: "Get Oldham drainage quotes",
  },
});
