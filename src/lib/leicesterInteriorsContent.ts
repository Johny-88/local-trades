import { makeLeicesterProfile } from "./leicesterProfileBase";

export const plasterersLeicester = makeLeicesterProfile("plasterers", {
  heroCopy: "Need skimming, patch repairs, rendering or other plastering work in Leicester? Describe the rooms, surfaces and condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Leicester?",
    copy: "Enter the postcode and describe the walls or ceilings, approximate area and existing finish. Mention cracks, damp damage, stripped walls, old lath or external rendering so suitable Leicester plasterers can price the same scope.",
  },
  localContext: {
    eyebrow: "Leicester period-property context",
    title: "Heritage controls can matter when plastering forms part of a wider alteration",
    intro: "Internal plaster repair is usually straightforward, but Leicester has a substantial stock of listed and conservation-area properties. Where work changes historic fabric, external finishes or forms part of structural alteration, the wider consent position matters.",
    items: [
      {
        title: "Leicester records 396 listed buildings and 25 conservation areas",
        text: "The current Local Plan heritage section records 396 listed buildings and 25 conservation areas. On a designated property, ask whether the job is simple repair or whether it affects protected historic fabric or external appearance.",
        source: {
          label: "Leicester City Council — Local Plan heritage",
          url: "https://www.leicester.gov.uk/leicester-local-plan/heritage",
        },
      },
      {
        title: "Article 4 directions can control external finishes",
        text: "Leicester City Council says Article 4 directions can remove permitted-development rights for work including rendering or painting brickwork. If plastering includes external rendering, check the address before assuming the finish can be changed freely.",
        source: {
          label: "Leicester City Council — Article 4 directions",
          url: "https://www.leicester.gov.uk/planning-environment-and-building-control/planning-applications/check-if-you-need-planning-permission/article-4-directions-leicester",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Leicester by postcode, property type and job size. Example areas include:",
    sideTitle: "Describe what is under the damaged finish",
    sideCopy: "A period wall in Stoneygate, a terrace in Westcotes and a modern room in Humberstone can need very different preparation, backing, drying time and finish.",
    noteLead: "Repair the cause before covering the symptom.",
    noteText: "If plaster has failed because of damp, leaks, movement or defective background, identify that cause before paying for a cosmetic skim alone.",
  },
  faq: [
    ["How much does plastering cost in Leicester?", "Cost depends on area, preparation, ceiling height, substrate, damage, access and whether old finishes need removal. Compare the same preparation and finish."],
    ["Does internal plastering need planning permission?", "Ordinary repair usually does not, but listed-building work and wider structural alterations can have separate consent or Building Regulations requirements."],
    ["Can I render the outside of a house in a Leicester Article 4 area?", "You may need planning permission where the relevant Article 4 direction removes normal permitted-development rights for rendering or external finishes."],
    ["Should I skim over damp plaster?", "Not before the moisture source is understood and corrected. Otherwise the new finish may fail again."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Leicester?",
    copy: "Describe the surfaces, preparation and finish once, then compare interested Leicester plasterers and their quotes.",
    buttonLabel: "Get Leicester plastering quotes",
  },
});

export const kitchenFittersLeicester = makeLeicesterProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen refit in Leicester? Describe the existing room, new units, worktops and service changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Leicester?",
    copy: "Enter the postcode and explain whether you need dry fitting only or a complete refit including removal, plumbing, electrics, flooring and decoration. Add plans or supplier drawings so suitable Leicester kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Leicester kitchen-refit context",
    title: "A kitchen refit can cross into Building Regulations and waste responsibilities",
    intro: "Replacing units like-for-like is different from altering structure, drainage, ventilation or electrics. Leicester's Building Control guidance covers those wider elements, while removed cabinets and construction debris need a proper business-waste route when taken away by a contractor.",
    items: [
      {
        title: "Structural and service changes can need Building Regulations approval",
        text: "Leicester City Council guidance says structural alterations generally require Building Regulations approval and the regulations cover subjects including ventilation, drainage, boilers, energy conservation and domestic electrical work.",
        source: {
          label: "Leicester City Council — achieving well-designed homes",
          url: "https://consultations.leicester.gov.uk/communications/urban-planning/user_uploads/achieving-well-designed-homes-2019.pdf",
        },
      },
      {
        title: "Business waste must use a trade-waste route",
        text: "Leicester's recycling-centre guidance states that business waste must be disposed of at a trade-waste facility. If the fitter removes old units, worktops, appliances or packaging, confirm disposal is included and lawful.",
        source: {
          label: "Leicester City Council — recycling centres and business waste",
          url: "https://www.leicester.gov.uk/bins-waste-and-recycling/recycling-centres",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Leicester by postcode, room size and project scope. Example areas include:",
    sideTitle: "Separate fitting from the supporting trades",
    sideCopy: "A kitchen in Clarendon Park, Evington or Braunstone may need very different electrical, plumbing, flooring and structural work even when the cabinets come from the same supplier.",
    noteLead: "Make one scope for every quote.",
    noteText: "State who is removing the old kitchen, moving services, fitting worktops, connecting appliances, tiling, decorating and disposing of waste.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Leicester?", "Cost depends on kitchen size, cabinet system, worktops, removal, service changes, flooring, tiling and finishing. Compare quotes against the same scope."],
    ["Does a kitchen refit need Building Regulations approval?", "Simple unit replacement may not, but structural changes and certain electrical, ventilation, drainage or other service work can."],
    ["Should removal of the old kitchen be included?", "Only if specified. Strip-out and lawful disposal can add significant labour and waste cost."],
    ["Can one fitter organise the other trades?", "Some do and some only fit cabinets. Ask exactly which plumbing, electrical, gas, tiling and decorating work is included."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Leicester?",
    copy: "Describe the kitchen and full fitting scope once, then compare interested Leicester kitchen fitters and their quotes.",
    buttonLabel: "Get Leicester kitchen quotes",
  },
});
