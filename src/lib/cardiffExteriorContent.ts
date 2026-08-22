import { makeCardiffProfile } from "./cardiffProfileBase";

export const drivewaySpecialistsCardiff = makeCardiffProfile("driveway-specialists", {
  heroCopy: "Planning a driveway, hardstanding or vehicle crossover in Cardiff? Describe the frontage, surface and access once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Cardiff?",
    copy: "Enter the postcode and explain the existing frontage, proposed surface, approximate area and whether a new or wider dropped kerb is needed. Add photos from the road and property so suitable Cardiff driveway specialists can identify highway, drainage and planning constraints.",
  },
  localContext: {
    eyebrow: "Cardiff driveway and highway context",
    title: "The private driveway and the public vehicle crossover are separate parts of the job",
    intro: "Cardiff requires permission for a vehicle crossover and says the council or its nominated contractor is the only provider of the dropped-kerb works on the public highway. Surface-water rules also affect how a new hardstanding is designed.",
    items: [
      {
        title: "Cardiff must approve the vehicle crossover before work starts",
        text: "Cardiff Council says anyone driving across the pavement to park on private property must have an authorised vehicle crossover. Planning permission is required for crossovers on classified roads, and the council or its nominated contractor carries out the public-highway crossover work. The standard maximum widths are 3m for a single and 4.8m for a double crossover, with a minimum 4.8m forecourt depth.",
        source: {
          label: "Cardiff Council — vehicle crossover licence",
          url: "https://www.cardiff.gov.uk/vehiclecrossovers",
        },
      },
      {
        title: "Runoff must stay off the highway and impermeable surfacing can need planning permission",
        text: "Cardiff's crossover conditions say private surface water must be directed to drainage within the property and that non-porous hardstanding can require planning permission. Cardiff also notes that local ground conditions can make infiltration unsuitable, so drainage design should be considered before choosing the final surface build-up.",
        source: {
          label: "Cardiff Council — managing rainwater using infiltration and soakaways",
          url: "https://www.cardiff.gov.uk/article/4723/Managing-rainwater-using-infiltration-and-soakaways",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Cardiff by postcode, surface type and access. Example areas include:",
    sideTitle: "Show the pavement, street furniture and full frontage",
    sideCopy: "Trees, junction distance, existing parking bays, utility covers, gradients and the available forecourt depth can determine whether the highway crossover is viable before driveway materials are ordered.",
    noteLead: "Do not build the private drive first and assume the kerb will be approved.",
    noteText: "Check crossover eligibility, planning needs and drainage strategy before committing to levels, gates or an impermeable surface.",
  },
  faq: [
    ["How much does a driveway cost in Cardiff?", "Cost depends on area, excavation, sub-base, drainage, surface material, access and whether a council vehicle crossover is also required."],
    ["Can my driveway contractor drop the kerb in Cardiff?", "Cardiff Council says the council or its nominated contractor is the only provider of vehicle crossovers on the public highway."],
    ["When does a Cardiff crossover need planning permission?", "The council says planning permission is required for crossovers on classified roads, and non-porous hardstanding can also require planning permission."],
    ["Can driveway water run onto the pavement?", "No. Cardiff's crossover conditions say surface water from private property must be directed to drainage within the property."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Cardiff?",
    copy: "Describe the frontage, surface and crossover needs once, then compare interested Cardiff driveway specialists and their quotes.",
    buttonLabel: "Get Cardiff driveway quotes",
  },
});

export const windowSpecialistsCardiff = makeCardiffProfile("window-specialists", {
  heroCopy: "Need replacement windows, repairs or glazing upgrades in Cardiff? Describe the property, window type and work required once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Cardiff?",
    copy: "Enter the postcode and describe the frame material, approximate number of windows, glazing issue and whether you want repair or replacement. Add photos of the elevations and existing details so suitable Cardiff window specialists can identify security, heritage and Building Regulations requirements.",
  },
  localContext: {
    eyebrow: "Cardiff window and heritage context",
    title: "Replacement windows can sit under both Welsh Building Regulations and Cardiff heritage controls",
    intro: "Cardiff Building Control requires approval for replacement windows where the installer is not using an appropriate self-certification route, while conservation areas, Article 4 directions and listed buildings can separately restrict changes to visible window design.",
    items: [
      {
        title: "Non-self-certified replacement windows require Building Regulations approval",
        text: "Cardiff Council lists replacement windows or doors installed by a person or company that is not FENSA registered among work requiring Building Regulations approval. Ask the installer what self-certification or Building Control route will be used and what certificate you will receive.",
        source: {
          label: "Cardiff Council — when Building Regulations approval is needed",
          url: "https://www.cardiff.gov.uk/doineedbuildingregapproval",
        },
      },
      {
        title: "Many conservation areas have extra Article 4 controls over windows",
        text: "Cardiff Council says the city has 27 conservation areas, around 1,000 listed buildings and many Article 4 directions imposing additional controls on minor alterations such as windows. For a protected property, establish whether repair, like-for-like replacement or a consented design is required before ordering frames.",
        source: {
          label: "Cardiff Council — conservation of the built environment",
          url: "https://cardiff.gov.uk/conservation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Cardiff by postcode, frame type and project size. Example areas include:",
    sideTitle: "Photograph the whole elevation as well as the failed unit",
    sideCopy: "A misted double-glazed unit, failing sash, modern uPVC replacement and protected historic window can need completely different solutions. Wide elevation photos help show pattern and character.",
    noteLead: "Do not order first and check permission later.",
    noteText: "For conservation-area, Article 4 or listed properties, establish the acceptable design before manufacture; for ordinary replacements, confirm the Building Regulations certification route.",
  },
  faq: [
    ["How much do replacement windows cost in Cardiff?", "Cost depends on frame material, glazing, size, opening style, access, security specification and whether heritage detailing is required."],
    ["Do replacement windows need Building Regulations approval in Cardiff?", "They can. Cardiff Council says approval is required where the installer is not using the relevant registered self-certification route."],
    ["Can I replace windows freely in a Cardiff conservation area?", "Not always. Many Cardiff conservation areas have Article 4 controls affecting window alterations, and listed buildings have separate consent requirements."],
    ["What security standard should I consider?", "South Wales Police recommends security-accredited replacement windows and identifies PAS 24:2022 as a good standard."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Cardiff?",
    copy: "Describe the windows, property and required finish once, then compare interested Cardiff window specialists and their quotes.",
    buttonLabel: "Get Cardiff window quotes",
  },
});
