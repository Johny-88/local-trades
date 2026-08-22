import { makeLeicesterProfile } from "./leicesterProfileBase";

export const bathroomSpecialistsLeicester = makeLeicesterProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom, shower room or wet-room project in Leicester? Describe the existing room and required work once, then compare bathroom specialists who cover your area.",
  answer: {
    title: "Looking for a bathroom specialist near you in Leicester?",
    copy: "Enter the postcode and explain whether the job is a like-for-like refit or includes layout changes, new drainage, ventilation, electrics or structural work. Add photos or plans so suitable Leicester bathroom specialists can price the same scope.",
  },
  localContext: {
    eyebrow: "Leicester bathroom-refit context",
    title: "Bathroom work can involve several Building Regulations topics at once",
    intro: "A cosmetic refit is different from moving wastes, adding ventilation, altering electrics or changing structure. Leicester's Building Control guidance covers drainage, ventilation, electrical work, moisture and other safety issues that can sit behind the visible bathroom finish.",
    items: [
      {
        title: "Building Regulations cover drainage, ventilation and domestic electrical work",
        text: "Leicester City Council's housing design guidance lists drainage, ventilation, moisture resistance, sanitary conveniences and electrical work among the subjects covered by Building Regulations. Ask which elements of the bathroom project require notification or competent-person certification.",
        source: {
          label: "Leicester City Council — achieving well-designed homes",
          url: "https://consultations.leicester.gov.uk/communications/urban-planning/user_uploads/achieving-well-designed-homes-2019.pdf",
        },
      },
      {
        title: "HMO management includes shared facilities and communal areas",
        text: "Leicester's HMO guidance says landlords of licensed HMOs must keep shared facilities and communal areas adequate, clean and in good repair. For a bathroom job in a shared property, identify the occupancy and management context before agreeing downtime and access.",
        source: {
          label: "Leicester City Council — houses in multiple occupation",
          url: "https://www.leicester.gov.uk/housing/landlords/property-licensing/houses-multiple-occupation-hmo",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Leicester by postcode, room type and project size. Example areas include:",
    sideTitle: "Describe every service that is moving",
    sideCopy: "A compact bathroom in Westcotes, a larger room in Stoneygate and a family bathroom in Evington can involve very different drainage runs, ventilation, access and waterproofing.",
    noteLead: "Layout changes are not the same as a like-for-like refit.",
    noteText: "Moving a WC, shower, basin, walls or electrical points can expand the regulated and technical scope significantly.",
  },
  faq: [
    ["How much does a bathroom refit cost in Leicester?", "Cost depends on room size, fittings, layout changes, tiling, waterproofing, plumbing, electrics, ventilation and finishing. Compare the same scope."],
    ["Does a bathroom refit need Building Regulations approval?", "Some elements can, especially structural, drainage, ventilation and electrical work. The exact requirement depends on the project."],
    ["Can I move the toilet to another wall?", "Often yes, but the drainage route, falls, ventilation and Building Regulations implications should be checked before fixing the layout."],
    ["Should waterproofing be included in a wet-room quote?", "Yes. Specify the intended tanking or waterproofing system and who is responsible for substrate preparation."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Leicester?",
    copy: "Describe the room, layout and complete refit scope once, then compare interested Leicester bathroom specialists and their quotes.",
    buttonLabel: "Get Leicester bathroom quotes",
  },
});

export const drainageSpecialistsLeicester = makeLeicesterProfile("drainage-specialists", {
  heroCopy: "Need help with blocked, damaged or recurring drainage problems in Leicester? Describe the symptoms, location and history once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in Leicester?",
    copy: "Enter the postcode and explain whether the issue is a blockage, slow drainage, smell, flooding, damaged pipe or recurring problem. Add any previous survey findings and photos so suitable Leicester drainage specialists can judge the next step.",
  },
  localContext: {
    eyebrow: "Leicester drainage and flood-risk context",
    title: "Leicester is a Lead Local Flood Authority and records significant surface-water risk",
    intro: "Drainage problems can sit at the boundary between private pipework, public sewers and wider surface-water flood risk. Leicester's current guidance identifies who is responsible and places strong emphasis on managing runoff through sustainable drainage.",
    items: [
      {
        title: "Property owners maintain private drains and sewers on their land",
        text: "Leicester City Council says property owners are responsible for maintaining and repairing private drains and sewers on their land, while Severn Trent Water manages public sewers and the council manages highway drains, gullies and local surface-water risk.",
        source: {
          label: "Leicester City Council — who does what in a flood",
          url: "https://www.leicester.gov.uk/planning-environment-and-building-control/flooding-and-watercourses/who-does-what-flood",
        },
      },
      {
        title: "Leicester identifies significant surface-water flood risk",
        text: "The current Local Plan says Leicester is at particularly high risk from surface-water flooding and requires SuDS considerations for new development and larger front parking areas. For recurring external drainage or paving problems, runoff should be considered alongside the pipework itself.",
        source: {
          label: "Leicester City Council — climate change and flood risk",
          url: "https://www.leicester.gov.uk/leicester-local-plan/climate-change-and-flood-risk",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Leicester by postcode, problem type and urgency. Example areas include:",
    sideTitle: "Say whether the problem is one-off or recurring",
    sideCopy: "A blocked waste in Clarendon Park, an external drain in Belgrave and repeated surface-water problems in another part of the city can require very different investigation and equipment.",
    noteLead: "Responsibility changes with the pipe location.",
    noteText: "Before paying for major excavation, establish whether the defect is on private drainage, a shared/public sewer or highway drainage and who is responsible for that asset.",
  },
  faq: [
    ["How much does drainage work cost in Leicester?", "Cost depends on whether the job needs simple clearance, CCTV survey, jetting, root cutting, excavation, lining or pipe replacement."],
    ["Who is responsible for private drains in Leicester?", "The council says property owners are responsible for private drains and sewers on their land, while Severn Trent Water manages public sewers."],
    ["Is Leicester affected by surface-water flood risk?", "Yes. Leicester's current Local Plan identifies the city as being at particularly high risk from surface-water flooding."],
    ["Should I get a CCTV drain survey?", "For recurring blockages, suspected damage or before major excavation, a CCTV survey can help establish the defect and location."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Leicester?",
    copy: "Describe the symptoms and drainage history once, then compare interested Leicester drainage specialists and their quotes.",
    buttonLabel: "Get Leicester drainage quotes",
  },
});
