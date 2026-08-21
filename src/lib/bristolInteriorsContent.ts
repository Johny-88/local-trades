import { makeBristolProfile } from "./bristolProfileBase";

export const plasterersBristol = makeBristolProfile("plasterers", {
  heroCopy: "Need skimming, ceiling repairs, patching or rendering in Bristol? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Bristol?",
    copy: "Enter the postcode, say which walls or ceilings need work and describe the existing surface. Mention cracks, staining, damp or loose plaster so suitable Bristol plasterers can judge preparation as well as the final finish.",
  },
  localContext: {
    eyebrow: "Bristol plastering context",
    title: "Damp causes and waste disposal should be understood before the skim goes on",
    intro: "Bristol's housing guidance distinguishes several causes of damp, while the city's recycling rules treat waste created by paid building work as trade waste rather than ordinary household rubbish.",
    items: [
      {
        title: "Do not hide an active damp problem behind fresh plaster",
        text: "Bristol City Council's private-renting guide explains that penetrating damp can result from damaged roofs or render, blocked gutters, leaking pipes and failed areas around wet fittings. It also distinguishes condensation and rising damp. If staining or blown plaster is moisture-related, identify and fix the cause before paying for a cosmetic skim.",
        source: {
          label: "Bristol City Council — Private Renting in Bristol",
          url: "https://www.bristol.gov.uk/files/documents/8548-final-private-housing-service-tenant-guide/file",
        },
      },
      {
        title: "Plaster and construction waste from paid work is not household recycling-centre waste",
        text: "Bristol City Council says business, trade and construction waste cannot be taken to household recycling centres. If old plaster, plasterboard or rubble is being removed as part of the job, agree whether disposal is included and how the contractor will handle it legally.",
        source: {
          label: "Bristol City Council — recycling-centre permit rules",
          url: "https://www.bristol.gov.uk/residents/bins-and-recycling/tips-and-recycling-centres/reuse-and-recycling-centres-permit-scheme",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Bristol by postcode and job size. Example areas include:",
    sideTitle: "Show the existing surface clearly",
    sideCopy: "Photos of cracks, loose areas, previous finishes and any damp staining help a plasterer decide whether the job needs patching, boarding, bonding or a straightforward skim.",
    noteLead: "A smooth finish starts with a sound background.",
    noteText: "Ask what preparation, protection, beads, boarding and waste removal are included rather than comparing only a square-metre figure.",
  },
  faq: [
    ["How much does plastering cost in Bristol?", "The price depends on surface condition, room size, access and whether boarding or repairs are needed before skimming. Compare quotes for the same preparation and finish rather than only the headline labour price."],
    ["Should I plaster over a damp wall?", "Not until the cause is understood. Bristol's housing guidance identifies penetrating damp, rising damp and condensation as different problems, and fresh plaster will not solve an active moisture source."],
    ["Who deals with old plaster and rubble?", "Agree this in the quote. Bristol says waste created through paid building work is trade or construction waste and cannot be taken to household recycling centres as ordinary household waste."],
    ["Can I post a small patch repair?", "Yes. Plasterers can respond to smaller repairs as well as full-room skimming, ceilings, boarding and rendering work."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Bristol?",
    copy: "Describe the surfaces and preparation once, then compare interested Bristol plasterers and their quotes.",
    buttonLabel: "Get Bristol plastering quotes",
  },
});

export const kitchenFittersBristol = makeBristolProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or refurbishment in Bristol? Describe the units, worktops, room and any service changes once, then compare kitchen fitters interested in the job.",
  answer: {
    title: "Looking for a kitchen fitter near you in Bristol?",
    copy: "Enter the postcode and share the kitchen plan, dimensions and product list if you have them. Mention whether walls, plumbing, electrics, gas, flooring or tiling are changing so suitable Bristol fitters can judge the full scope.",
  },
  localContext: {
    eyebrow: "Bristol kitchen-fit planning",
    title: "Structural changes and trade-waste responsibility can sit outside the cabinet installation itself",
    intro: "A kitchen refit can range from a straightforward unit swap to a project involving walls, services and large amounts of demolition waste. Bristol's local guidance makes those distinctions important to price early.",
    items: [
      {
        title: "Structural alterations may need building-regulation approval",
        text: "Bristol City Council lists structural alterations such as removing all or part of a load-bearing wall as building work that requires attention under the Building Regulations. If a kitchen layout involves opening rooms up or changing structure, establish the approval and design route before cabinets are ordered.",
        source: {
          label: "Bristol City Council — building-regulation approval",
          url: "https://www.bristol.gov.uk/residents/planning-and-building-regulations/building-regulations/check-if-you-need-building-regulations-approval",
        },
      },
      {
        title: "Old units and construction waste from the job are trade waste",
        text: "Bristol says businesses must make their own arrangements for commercial waste and use a registered waste carrier or authorised facility. Household recycling centres cannot be used for waste generated by a business or tradesperson, so check whether removal of old units, worktops and packaging is included in the quote.",
        source: {
          label: "Bristol City Council — business waste disposal",
          url: "https://www.bristol.gov.uk/business/health-and-safety/business-waste-recycling/business-waste-and-recycling-disposal",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Bristol by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Share the plan and product list before asking for a fixed price",
    sideCopy: "The same number of cabinets can be a very different job if walls move, worktops need specialist fabrication or plumbing and electrics are being relocated.",
    noteLead: "Separate fitting from specialist services.",
    noteText: "Confirm who is responsible for electrical, gas, plumbing, tiling, decorating, worktop templating and waste so gaps do not appear after strip-out.",
  },
  faq: [
    ["How much does a kitchen fitter cost in Bristol?", "The price depends on cabinet count, worktops, room condition and how much plumbing, electrical, tiling or structural work is included. Share the plan so each fitter prices the same scope."],
    ["Do I need building regulations if I remove a wall for a new kitchen?", "Potentially yes. Bristol City Council specifically lists structural alterations such as removing a load-bearing wall as building work that can require approval."],
    ["Who should remove the old kitchen?", "That should be stated in the quote. If the fitter creates and removes the waste as part of paid work, Bristol treats it as business or trade waste rather than ordinary household waste."],
    ["Can one kitchen fitter coordinate other trades?", "Some do and some price only the fitting. Ask exactly who is arranging plumbing, electrics, gas work, tiling and decorating and whether those costs are included."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Bristol?",
    copy: "Share the kitchen plan and scope once, then compare interested Bristol kitchen fitters and their quotes.",
    buttonLabel: "Get Bristol kitchen quotes",
  },
});
