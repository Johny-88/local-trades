import { makeStockportProfile } from "./stockportProfileBase";

export const plasterersStockport = makeStockportProfile("plasterers", {
  heroCopy: "Need a plasterer in Stockport for skimming, patch repairs, ceilings or renovation work? Describe the surfaces, condition and room sizes once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Stockport?",
    copy: "Enter the postcode, rooms and approximate wall or ceiling areas. Mention blown plaster, cracks, damp staining, lath-and-plaster, artex, removed tiles or structural work so suitable Stockport plasterers can assess preparation as well as the finish.",
  },
  localContext: {
    eyebrow: "Stockport renovation checks",
    title: "Older and protected properties can need more than a straightforward skim",
    intro: "Stockport has 37 conservation areas and hundreds of listed buildings, including older housing where original fabric can matter. If plastering is part of a larger alteration, check heritage and Building Regulations constraints before historic material or structural work is covered over.",
    items: [
      {
        title: "Listed-building controls can apply to internal alterations",
        text: "Stockport Council says internal as well as external alterations to a listed building are subject to listed-building consent. If the job affects historic plaster, cornices, wall finishes or other character-forming fabric, establish the consent position before removal.",
        source: {
          label: "Stockport Council — heritage assets: listed buildings",
          url: "https://www.stockport.gov.uk/heritage-assets/listed-buildings",
        },
      },
      {
        title: "Internal and structural alterations can fall within Building Regulations",
        text: "Stockport's Building Control fee schedule specifically covers internal alterations and structural alterations. Where plastering follows wall removal, new openings or structural repairs, make sure the wider regulated work is dealt with before the final finish hides it.",
        source: {
          label: "Stockport Council — Building Control fees: Section B",
          url: "https://www.stockport.gov.uk/building-control-fees/section-b",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Stockport by postcode, property type and job size. Example areas include:",
    sideTitle: "Describe what is underneath the finish",
    sideCopy: "A patch repair in Reddish, a ceiling skim in Hazel Grove and renovation plastering in a period home around Heaton Moor can need different preparation. Say whether surfaces are plasterboard, old solid plaster, lath, masonry or previously tiled.",
    noteLead: "Damp staining should be diagnosed before it is simply skimmed over.",
    noteText: "If there is active moisture, leaking plumbing or movement cracking, identify and fix the cause first. Ask whether preparation, bonding, mesh, beads and waste removal are included in the quote.",
  },
  faq: [
    ["How much does a plasterer cost in Stockport?", "Pricing depends on area, preparation, ceiling height, substrate condition and whether boarding or repairs are needed before skimming."],
    ["Can internal plaster work affect a listed building?", "Yes. Stockport says internal alterations to listed buildings can require listed-building consent, especially where historic fabric or character is affected."],
    ["Do Building Regulations ever matter for plastering?", "The plaster finish itself may be simple, but the wider job can matter. Stockport's Building Control schedule includes internal and structural alterations."],
    ["Can I post a small patch repair?", "Yes. Small repairs can be posted alongside full-room skimming and larger renovation jobs."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Stockport?",
    copy: "Describe the surfaces and preparation once, then compare interested Stockport plasterers and their quotes.",
    buttonLabel: "Get Stockport plastering quotes",
  },
});

export const kitchenFittersStockport = makeStockportProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen refit in Stockport? Describe the room, units, worktops, appliances and any plumbing, electrical or layout changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Stockport?",
    copy: "Enter the postcode, kitchen size and whether units are supplied. Mention demolition, plastering, flooring, worktops, sinks, gas, electrical work, ventilation and wall changes so suitable Stockport kitchen fitters can quote the same project.",
  },
  localContext: {
    eyebrow: "Stockport kitchen project checks",
    title: "A kitchen refit can involve several separate compliance routes",
    intro: "Kitchen projects often combine fitting with electrical work, plumbing, ventilation and sometimes internal alterations. Stockport Building Control distinguishes these work types, so a full quote should make clear who is responsible for each regulated element and its certification.",
    items: [
      {
        title: "Internal alterations can require Building Regulations approval",
        text: "Stockport lists internal and structural alterations within its Building Control charging schedule. If a kitchen design removes or changes walls, creates openings or alters structure, check the approval route before the work starts.",
        source: {
          label: "Stockport Council — Building Control fees: Section B",
          url: "https://www.stockport.gov.uk/building-control-fees/section-b",
        },
      },
      {
        title: "Electrical work is covered by Part P requirements",
        text: "Stockport's Building Control guidance explains that Part P electrical safety applies to domestic electrical installations and that work must provide reasonable protection from fire or injury. Ask who will carry out and certify any notifiable electrical work in the new kitchen.",
        source: {
          label: "Stockport Council — building notice for electrical work",
          url: "https://www.stockport.gov.uk/building-regs-application-process/building-notice-for-electrical-work",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Stockport by postcode, project size and installation scope. Example areas include:",
    sideTitle: "Separate the cabinet fit from the whole-room project",
    sideCopy: "A unit swap in Cheadle, a full redesign in Bramhall and a kitchen with wall changes in Marple can involve very different trades. List demolition, electrics, plumbing, gas, plastering, flooring, decorating and waste removal separately.",
    noteLead: "Clarify who coordinates the specialist trades.",
    noteText: "If the fitter is managing electricians, gas engineers, plumbers or structural work, ask which items are included in the price and what certificates or completion documents you should receive.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Stockport?", "Cost varies with unit count, worktops, appliances, preparation and how much plumbing, electrical, plastering or structural work is included."],
    ["Do kitchen wall changes need Building Regulations approval?", "They can. Stockport's Building Control schedule specifically includes internal and structural alterations."],
    ["Does kitchen electrical work need certification?", "Domestic electrical work is subject to Part P requirements. Ask the installer how any notifiable work will be carried out and certified."],
    ["Should I say whether the kitchen is already supplied?", "Yes. State whether units, worktops and appliances are on site or whether you need supply as well as installation."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Stockport?",
    copy: "Describe the kitchen and full installation scope once, then compare interested Stockport kitchen fitters and their quotes.",
    buttonLabel: "Get Stockport kitchen quotes",
  },
});
