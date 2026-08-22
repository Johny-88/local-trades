import { makeCardiffProfile } from "./cardiffProfileBase";

export const plasterersCardiff = makeCardiffProfile("plasterers", {
  heroCopy: "Need skimming, patch repairs, rendering or larger plastering work in Cardiff? Describe the rooms, surfaces and condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Cardiff?",
    copy: "Enter the postcode, rooms or elevations involved and the current surface condition. Mention blown plaster, cracks, damp staining, lath and plaster, artex, new boarding or external render so suitable Cardiff plasterers can judge preparation as well as finish.",
  },
  localContext: {
    eyebrow: "Cardiff plastering and heritage context",
    title: "Historic interiors and waste from refurbishment need different handling from a standard skim",
    intro: "Cardiff has a large stock of protected buildings and conservation areas. Internal work to listed buildings can require Listed Building Consent if it affects character, while stripped plasterboard and other building waste from paid work must follow commercial waste rules.",
    items: [
      {
        title: "Listed-building controls can extend to internal fabric",
        text: "Cardiff Council says Listed Building Consent is needed where demolition, alteration or extension affects the character of a statutory listed building, and the requirement can apply to work on parts of the building whether or not the feature is specifically described in the list entry. For historic plaster, cornices or wall finishes, check before stripping out.",
        source: {
          label: "Cardiff Council — making a planning application / listed buildings",
          url: "https://cardiff.gov.uk/makingaplanningapplication",
        },
      },
      {
        title: "Refurbishment waste is not ordinary household waste when produced commercially",
        text: "Cardiff Council says businesses and landlords have a duty of care for waste from repairs and alterations and must use an authorised route with appropriate documentation. If a plastering job includes removing old plasterboard, render or other debris, confirm who is responsible for disposal.",
        source: {
          label: "Cardiff Council — business waste responsibilities",
          url: "https://www.cardiff.gov.uk/businessesresponsibility",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Cardiff by postcode, surface type and job size. Example areas include:",
    sideTitle: "Show the existing background, not just the room",
    sideCopy: "A clean plasterboard wall, cracked solid plaster and damaged historic finish need different preparation. Close-up photos of cracks and wide shots of the whole surface help avoid vague quotes.",
    noteLead: "Find the cause before covering the symptom.",
    noteText: "Where plaster has failed because of movement, moisture or a leak, ask whether the underlying defect needs repair before replastering starts.",
  },
  faq: [
    ["How much does plastering cost in Cardiff?", "Price depends on area, background condition, preparation, access, finish and whether old material must be removed and disposed of."],
    ["Can I skim over old plaster?", "Sometimes, but loose, damp, contaminated or unstable backgrounds need preparation or removal first."],
    ["Does internal plastering in a listed building need consent?", "It can if the work affects the building's special character. Check with Cardiff's conservation team before removing historic fabric."],
    ["Who deals with plasterboard waste?", "For paid or landlord refurbishment work, confirm the lawful commercial waste route and who is responsible for it."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Cardiff?",
    copy: "Describe the surfaces, condition and finish once, then compare interested Cardiff plasterers and their quotes.",
    buttonLabel: "Get Cardiff plastering quotes",
  },
});

export const kitchenFittersCardiff = makeCardiffProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen replacement or full refit in Cardiff? Describe the layout, units, services and finish once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Cardiff?",
    copy: "Enter the postcode and explain whether you need a dry fit, worktops, appliances, plumbing, electrics, flooring, plastering or structural changes. Add a plan and photos so suitable Cardiff kitchen fitters can compare the same scope.",
  },
  localContext: {
    eyebrow: "Cardiff kitchen-fit context",
    title: "A kitchen refit can combine Welsh Building Regulations, heritage controls and commercial waste duties",
    intro: "Cabinet fitting alone may be straightforward, but moving services, altering structure or working in a protected property can trigger separate approvals. Strip-out waste from paid work also needs a lawful commercial route.",
    items: [
      {
        title: "Controlled services and material alterations can require Building Regulations approval",
        text: "Cardiff Council says approval is required for material alterations and for extending or altering controlled services or fittings. A kitchen project involving structural openings, drainage, significant electrical work or other regulated elements should establish the approval and certification route before installation begins.",
        source: {
          label: "Cardiff Council — when Building Regulations approval is needed",
          url: "https://www.cardiff.gov.uk/doineedbuildingregapproval",
        },
      },
      {
        title: "Protected buildings can restrict visible and historic alterations",
        text: "Cardiff has 27 conservation areas and around 1,000 listed buildings. If a kitchen project changes protected windows, doors, historic interiors or other character-defining fabric, planning or Listed Building Consent may be separate from Building Regulations approval.",
        source: {
          label: "Cardiff Council — conservation of the built environment",
          url: "https://cardiff.gov.uk/conservation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Cardiff by postcode, supplier and project size. Example areas include:",
    sideTitle: "Separate the dry fit from the regulated work",
    sideCopy: "List who is supplying units, worktops, appliances, plumbing, electrics, gas work, flooring and decoration. A single headline 'kitchen fit' can hide several different trades and compliance responsibilities.",
    noteLead: "Compare quotes against the same scope.",
    noteText: "Ask who removes the old kitchen, who disposes of waste, who certifies regulated work and what is excluded from the fitting price.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Cardiff?", "Cost depends on kitchen size, supplier, worktops, services, preparation, structural work and how many trades are included."],
    ["Will a kitchen refit need Building Regulations approval?", "Some do, particularly where controlled services, structural alterations or other regulated work are involved."],
    ["Can a kitchen fitter handle electrics and gas too?", "Only where the people carrying out those regulated elements have the appropriate competence and certification route. Ask who is responsible for each trade."],
    ["What if my Cardiff property is listed?", "Check conservation and Listed Building Consent requirements before altering protected fabric, even if the kitchen work itself is internal."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Cardiff?",
    copy: "Describe the layout, units and services once, then compare interested Cardiff kitchen fitters and their quotes.",
    buttonLabel: "Get Cardiff kitchen quotes",
  },
});
