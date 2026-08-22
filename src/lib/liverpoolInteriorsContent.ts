import { makeLiverpoolProfile } from "./liverpoolProfileBase";

export const plasterersLiverpool = makeLiverpoolProfile("plasterers", {
  heroCopy: "Need skimming, patching, ceiling repairs or rendering in Liverpool? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Liverpool?",
    copy: "Enter the postcode, say which walls or ceilings need work and describe the existing surface. Mention cracks, staining, damp or loose plaster so suitable Liverpool plasterers can judge preparation as well as the final finish.",
  },
  localContext: {
    eyebrow: "Liverpool plastering and repair context",
    title: "The defect behind damaged plaster and the disposal plan matter as much as the final skim",
    intro: "A cosmetic finish should not hide unresolved structural, drainage or moisture problems. Liverpool Building Control requires approval for many structural and drainage alterations, while old plaster and boards removed by a contractor need an agreed business-waste route.",
    items: [
      {
        title: "Wider repairs can need Building Regulations approval",
        text: "Liverpool City Council says structural alterations and changes to a building's drainage system are among works that generally need Building Regulations approval. If failed plaster follows structural movement, a major leak repair or another regulated alteration, establish the wider compliance route before the finish covers the work.",
        source: {
          label: "Liverpool City Council — Building Regulations approval",
          url: "https://liverpool.gov.uk/planning-and-building-control/building-control/building-regulations-approval",
        },
      },
      {
        title: "Removed plaster and rubble need lawful contractor disposal",
        text: "Liverpool says businesses must arrange commercial waste removal through an authorised carrier and keep records. If old plaster, plasterboard, render or rubble is stripped out, ask who removes it and whether disposal is included in the quote.",
        source: {
          label: "Liverpool City Council — commercial waste",
          url: "https://liverpool.gov.uk/bins-and-recycling/commercial-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Liverpool by postcode and job size. Example areas include:",
    sideTitle: "Show the existing surface clearly",
    sideCopy: "Photos of cracks, loose areas, previous finishes and damp staining help a plasterer decide whether the job needs patching, boarding, bonding or a straightforward skim.",
    noteLead: "A smooth finish needs a sound background.",
    noteText: "Ask what preparation, protection, boarding, beads and waste removal are included rather than comparing only the final skim price.",
  },
  faq: [
    ["How much does plastering cost in Liverpool?", "The price depends on surface condition, room size, access and whether boarding or repairs are needed before skimming. Compare quotes for the same preparation and finish."],
    ["Should I skim over damaged or damp plaster?", "Not until the underlying cause is understood. A new finish can fail again if a leak, moisture problem or defective background has not been resolved."],
    ["Can plastering be part of Building Regulations work?", "The plaster finish itself is often straightforward, but structural or drainage alterations underneath it can be regulated and may need inspection before they are covered."],
    ["Who removes old plaster and rubble?", "Agree this in the quote. Waste created and removed through paid building work needs lawful business-waste handling."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Liverpool?",
    copy: "Describe the surfaces and preparation once, then compare interested Liverpool plasterers and their quotes.",
    buttonLabel: "Get Liverpool plastering quotes",
  },
});

export const kitchenFittersLiverpool = makeLiverpoolProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or refurbishment in Liverpool? Describe the units, worktops, room and any service changes once, then compare kitchen fitters interested in the job.",
  answer: {
    title: "Looking for a kitchen fitter near you in Liverpool?",
    copy: "Enter the postcode and share the kitchen plan, dimensions and product list if you have them. Mention whether walls, plumbing, electrics, gas, flooring or tiling are changing so suitable Liverpool fitters can judge the full scope.",
  },
  localContext: {
    eyebrow: "Liverpool kitchen-refit context",
    title: "Cabinet fitting can sit alongside regulated structural and service work",
    intro: "Liverpool Building Control says approval is needed for many structural and drainage changes and for home improvements such as electrics, boilers, windows and doors where competent-person self-certification does not apply. Kitchen strip-out also creates contractor waste that should have an agreed disposal route.",
    items: [
      {
        title: "Structural and service changes need their own compliance plan",
        text: "If the kitchen project removes a load-bearing wall, changes drainage or includes electrical, heating, window or door work outside an applicable Competent Person Scheme, Liverpool's Building Control guidance shows that Building Regulations approval can apply. Confirm who is responsible for specialist work, notification and completion paperwork before fitting begins.",
        source: {
          label: "Liverpool City Council — Building Regulations approval",
          url: "https://liverpool.gov.uk/planning-and-building-control/building-control/building-regulations-approval",
        },
      },
      {
        title: "Old units and renovation debris need a lawful disposal route",
        text: "Liverpool requires businesses to arrange their commercial waste through an authorised carrier and keep documentation. Confirm how old cabinets, worktops, packaging, tiles and demolition debris will be removed so disposal does not appear as an unexpected extra after strip-out.",
        source: {
          label: "Liverpool City Council — commercial waste",
          url: "https://liverpool.gov.uk/bins-and-recycling/commercial-waste/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Liverpool by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Share the plan and product list before asking for a fixed price",
    sideCopy: "The same number of cabinets can be a very different project if a wall moves, worktops need specialist fabrication or plumbing, gas and electrics are being relocated.",
    noteLead: "Separate fitting from specialist services.",
    noteText: "Confirm who is responsible for electrical, gas, plumbing, tiling, decorating, worktop templating and waste so gaps do not appear after strip-out.",
  },
  faq: [
    ["How much does kitchen fitting cost in Liverpool?", "The cost depends on kitchen size, product type, worktops, preparation and how much plumbing, electrical, gas or structural work is included. Compare the same scope rather than only a fitting figure."],
    ["Can a Liverpool kitchen project need Building Regulations approval?", "Yes. Cabinets themselves are not usually the issue, but structural, drainage, electrical and heating alterations can require compliance depending on how the work is carried out."],
    ["Who removes the old kitchen?", "Agree this in writing. Strip-out and disposal may be included, priced separately or left to the homeowner, so compare quotes on the same basis."],
    ["Can I post a supply-and-fit job?", "Yes. Explain whether the kitchen is already purchased or whether you want design, supply and fitting included."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Liverpool?",
    copy: "Describe the kitchen, products and service changes once, then compare interested Liverpool kitchen fitters and their quotes.",
    buttonLabel: "Get Liverpool kitchen quotes",
  },
});
