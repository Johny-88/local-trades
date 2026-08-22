import { makePlymouthProfile } from "./plymouthProfileBase";

export const plasterersPlymouth = makePlymouthProfile("plasterers", {
  heroCopy: "Need plastering, skimming, patch repairs or rendering work in Plymouth? Describe the surfaces, condition and finish once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Plymouth?",
    copy: "Enter the postcode, rooms or elevations involved, approximate area and existing surface condition. Mention cracks, blown plaster, damp damage, lath-and-plaster, old finishes or listed-building status so suitable Plymouth plasterers can judge preparation properly.",
  },
  localContext: {
    eyebrow: "Plymouth heritage and interior-fabric context",
    title: "Historic fabric can change the correct repair method and the permissions needed",
    intro: "Plymouth has 15 conservation areas and many listed buildings across the Barbican, Devonport and other parts of the city. On listed property, alterations affecting historic fabric or character can require Listed Building Consent, so old plaster and finishes should not automatically be stripped out or replaced with modern materials.",
    items: [
      {
        title: "Listed Building Consent can apply to internal as well as external alterations",
        text: "Plymouth City Council says listed buildings are protected as a whole, including interiors and fixed features, and consent is needed where proposed changes affect the building's special architectural or historic character. If plastering involves removing historic lime plaster, mouldings or other original fabric, check the heritage position before work begins.",
        source: {
          label: "Plymouth City Council — alterations to listed buildings",
          url: "https://www.plymouth.gov.uk/carry-out-alterations-listed-building",
        },
      },
      {
        title: "Plymouth's 15 conservation areas include both historic and post-war townscape",
        text: "The council's conservation-area guidance covers areas such as the Barbican, Devonport and the City Centre. Conservation status does not make every internal plaster repair a planning matter, but it is a useful warning to check whether the property is listed or whether wider external work is controlled.",
        source: {
          label: "Plymouth City Council — conservation areas",
          url: "https://www.plymouth.gov.uk/conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Plymouth by postcode, surface type and job size. Example areas include:",
    sideTitle: "Tell the plasterer what is underneath",
    sideCopy: "Modern plasterboard, old lime plaster, cracked masonry and damp-damaged backgrounds need different preparation. Photos of exposed areas and the age of the property help avoid a misleading skim-only quote.",
    noteLead: "Do not hide the cause of damage.",
    noteText: "If cracking or blown plaster follows leaks, movement or damp, deal with the underlying issue before paying for a cosmetic finish that may fail again.",
  },
  faq: [
    ["How much does plastering cost in Plymouth?", "Cost depends on area, access, preparation, substrate, decorative detail and whether old material needs removal. Compare like-for-like preparation, not just a skim rate."],
    ["Can I skim over old plaster in a listed Plymouth property?", "Possibly, but listed-building protection can extend to interior historic fabric. Check before removing or covering significant original material."],
    ["Does being in a conservation area automatically control internal plastering?", "Not usually by itself, but the building may also be listed and wider alterations can be controlled. Check the property status if the fabric is historic."],
    ["Should damp be fixed before plastering?", "Yes. If the plaster failure is caused by a leak, defective drainage or another moisture source, that cause should be addressed first."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Plymouth?",
    copy: "Describe the surfaces, defects and required finish once, then compare interested Plymouth plasterers and their quotes.",
    buttonLabel: "Get Plymouth plastering quotes",
  },
});

export const kitchenFittersPlymouth = makePlymouthProfile("kitchen-fitters", {
  heroCopy: "Planning a kitchen replacement or refurbishment in Plymouth? Describe the room, units, worktops, appliances and services once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Plymouth?",
    copy: "Enter the postcode, kitchen size and whether you need units only or a full refit. Mention electrical changes, gas appliances, plumbing, wall removal, flooring and waste so suitable Plymouth kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Plymouth kitchen-fit and compliance context",
    title: "The kitchen units may be simple joinery, but the services around them can be regulated work",
    intro: "Plymouth City Council lists electrical installation associated with kitchen work, gas appliances, plumbing and heating among areas that may use competent-person certification. Structural changes and wider alterations can also fall within Building Regulations.",
    items: [
      {
        title: "Electrical, gas and plumbing elements may need competent-person certification",
        text: "The council says competent-person schemes can cover electrical work associated with kitchen installations, gas appliances, hot-water and heating systems, and plumbing or water-supply work. Ask the fitter exactly who is carrying out and certifying each regulated element rather than assuming one trade covers everything.",
        source: {
          label: "Plymouth City Council — competent person scheme",
          url: "https://www.plymouth.gov.uk/competent-person-scheme",
        },
      },
      {
        title: "Structural alterations remain a separate Building Regulations issue",
        text: "Plymouth Building Control explains that alterations must satisfy Building Regulations requirements covering matters such as structure, fire safety, ventilation and services. If the kitchen plan removes a wall, changes openings or significantly alters services, establish the approval route before fitting starts.",
        source: {
          label: "Plymouth City Council — Building Control and Building Regulations",
          url: "https://www.plymouth.gov.uk/who-are-building-control-and-when-do-i-need-them",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Plymouth by postcode, kitchen type and scope. Example areas include:",
    sideTitle: "Separate cabinetry from regulated services",
    sideCopy: "A dry unit swap is very different from a full kitchen moving sockets, gas, plumbing and walls. List every trade element so quotes can be compared on the same basis.",
    noteLead: "Ask who signs off the services.",
    noteText: "Where electrical, gas, plumbing or structural work is included, confirm the responsible installer and what certification or approval evidence will be provided.",
  },
  faq: [
    ["How much does kitchen fitting cost in Plymouth?", "Cost depends on kitchen size, unit type, worktops, preparation, services, appliances and whether walls or floors are altered. Compare quotes using the same full scope."],
    ["Can a kitchen fitter certify electrical work?", "Only if the person doing that work is registered under an appropriate competent-person scheme for the work involved."],
    ["Will removing a kitchen wall need Building Regulations approval?", "It can, especially where structure or fire safety is affected. Check the approval route before work starts."],
    ["Should waste removal be included in the quote?", "Yes if you want it handled. Ask whether old units, worktops, packaging and other waste are included or charged separately."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Plymouth?",
    copy: "Describe the kitchen, services and finish once, then compare interested Plymouth kitchen fitters and their quotes.",
    buttonLabel: "Get Plymouth kitchen quotes",
  },
});
