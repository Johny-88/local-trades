import { makeBoltonProfile } from "./boltonProfileBase";

export const plasterersBolton = makeBoltonProfile("plasterers", {
  heroCopy: "Need a plasterer in Bolton for skimming, patch repairs, ceilings or a larger renovation? Describe the rooms, surfaces and condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Bolton?",
    copy: "Enter the postcode, rooms, approximate wall or ceiling area and existing finish. Mention cracks, blown plaster, damp staining, artex, exposed brick or recent electrical and plumbing work so suitable Bolton plasterers can quote the same preparation.",
  },
  localContext: {
    eyebrow: "Bolton historic-building context",
    title: "Listed-building work can need consent even when the alteration is inside",
    intro: "For most ordinary homes, plaster repairs are straightforward. In a listed building, however, Bolton Council says the listing covers interiors and fixed features as well as the exterior. Replacing historic plaster or changing fabric can therefore need heritage advice before work begins.",
    items: [
      {
        title: "Listed status covers the whole building",
        text: "Bolton Council explains that listed buildings are protected in their entirety, including interiors, layouts and fixed features. If plasterwork is historic or the repair changes significant fabric, check the consent position first.",
        source: {
          label: "Bolton Council — listed buildings",
          url: "https://www.bolton.gov.uk/conservation/listed-buildings",
        },
      },
      {
        title: "Unauthorised listed-building work can be a criminal offence",
        text: "Bolton Council warns that unauthorised works to a listed building can lead to prosecution and can be required to be reversed. For older or protected properties, establish what is being removed before stripping walls or ceilings back.",
        source: {
          label: "Bolton Council — unauthorised work on listed buildings",
          url: "https://www.bolton.gov.uk/conservation/listed-buildings/10",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Bolton by postcode, room count and job size. Example areas include:",
    sideTitle: "Describe what is under the damaged finish",
    sideCopy: "A skim in Kearsley, a cracked ceiling in Farnworth and repairs to an older property in Bolton town centre can require different preparation. Say whether the background is plasterboard, old lime plaster, masonry or an unknown existing finish.",
    noteLead: "Fix the cause before covering the symptom.",
    noteText: "If staining, blown plaster or cracking is linked to a leak, damp or movement, deal with the source first. Fresh plaster over an unresolved defect is unlikely to last.",
  },
  faq: [
    ["How much does a plasterer cost in Bolton?", "Price depends on room size, preparation, access, ceiling height, background condition and whether old material must be removed."],
    ["Can interior work need listed building consent?", "Yes. Bolton Council says listed status covers the inside of the building as well as the exterior, and alterations affecting its character can require consent."],
    ["Should damp be repaired before plastering?", "Yes. The underlying leak, penetration or condensation problem should be identified before damaged finishes are replaced."],
    ["Can I post a small plaster repair?", "Yes. Patch repairs, ceiling sections and single-wall skims can be posted as well as full-room or whole-property work."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Bolton?",
    copy: "Describe the surfaces and preparation once, then compare interested Bolton plasterers and their quotes.",
    buttonLabel: "Get Bolton plastering quotes",
  },
});

export const kitchenFittersBolton = makeBoltonProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen installation or replacement in Bolton? Describe the room, units, worktops, appliances and services once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Bolton?",
    copy: "Enter the postcode, kitchen size and whether units are supplied. Mention worktops, flooring, tiling, plumbing, gas, electrics, ventilation and any wall changes so suitable Bolton kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Bolton kitchen and rental standards",
    title: "Kitchen work can involve Building Regulations and, in rented homes, minimum property standards",
    intro: "A simple cabinet swap is different from a project that moves walls, gas, electrics or drainage. Bolton Building Control provides approval routes for regulated work, while the council's private-rental standards require suitable cooking facilities, water, ventilation and working services.",
    items: [
      {
        title: "Building Control approval may be needed for the wider kitchen project",
        text: "Bolton Council offers full plans and building-notice applications for work requiring Building Regulations approval. If the project includes structural alterations or regulated services, agree who is responsible for applications and certificates before installation starts.",
        source: {
          label: "Bolton Council — building control applications",
          url: "https://www.bolton.gov.uk/building-control/building-control-applications",
        },
      },
      {
        title: "Private rented kitchens are expected to have suitable facilities and ventilation",
        text: "Bolton Council's landlord standards say rented homes should have satisfactory food-preparation facilities, a sink with hot and cold water, working services and mechanical extraction in kitchens and bathrooms.",
        source: {
          label: "Bolton Council — private landlord property standards",
          url: "https://www.bolton.gov.uk/private-rented-owner-occupied-housing/private-landlords/2",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Bolton by postcode, layout and project size. Example areas include:",
    sideTitle: "Separate supply, fitting and specialist trades in the quote",
    sideCopy: "A dry-fit kitchen in Westhoughton, a full refit in Horwich and a layout change in Little Lever can involve very different labour. State who supplies units and worktops and whether plumbing, gas, electrical, plastering and tiling are included.",
    noteLead: "A single headline price can hide several separate trades.",
    noteText: "Ask the fitter to state what is included, what is subcontracted and which certificates or Building Control steps are expected for regulated work.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Bolton?", "Cost depends on kitchen size, unit type, worktops, demolition, service changes, flooring, tiling and whether specialist trades are included."],
    ["Does a kitchen replacement always need Building Regulations approval?", "Not necessarily. A simple like-for-like fit may not, but structural, electrical, gas, drainage or ventilation changes can bring additional requirements."],
    ["Do rented kitchens need mechanical extraction?", "Bolton Council's landlord property standards say kitchens and bathrooms in rented homes require mechanical extraction."],
    ["Should I say whether the units are already supplied?", "Yes. Supply-only, dry-fit and full installation quotes are not directly comparable unless the scope is clear."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Bolton?",
    copy: "Describe the kitchen, supplied items and service changes once, then compare interested Bolton kitchen fitters and their quotes.",
    buttonLabel: "Get Bolton kitchen quotes",
  },
});
