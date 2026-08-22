import { makeSheffieldProfile } from "./sheffieldProfileBase";

export const plasterersSheffield = makeSheffieldProfile("plasterers", {
  heroCopy: "Need skimming, patching, ceiling repairs or rendering in Sheffield? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Sheffield?",
    copy: "Enter the postcode, say which walls or ceilings need work and describe the existing surface. Mention cracks, staining, damp or loose plaster so suitable Sheffield plasterers can judge preparation as well as the final finish.",
  },
  localContext: {
    eyebrow: "Sheffield plastering and repair context",
    title: "The defect behind damaged plaster and the disposal plan matter as much as the final skim",
    intro: "A cosmetic finish should not hide unresolved structural, moisture or service problems. Where plastering follows regulated alterations, Sheffield Building Control may need to inspect the wider work, while removed plaster and boards handled by a contractor need lawful business-waste disposal.",
    items: [
      {
        title: "Wider domestic alterations can need Building Regulations procedures",
        text: "Sheffield City Council's Building Notice guidance includes load-bearing-wall alterations, bathroom installation, heating changes and certain electrical work among domestic projects that can require Building Regulations oversight. If plaster repair follows structural or service work, establish the compliance route before the finish covers it.",
        source: {
          label: "Sheffield City Council — apply for a Building Notice",
          url: "https://www.sheffield.gov.uk/planning-development/building-regulations/apply-building-notice",
        },
      },
      {
        title: "Removed plaster, boards and rubble need lawful contractor disposal",
        text: "Sheffield requires businesses to use registered waste arrangements and keep evidence of lawful disposal. If old plaster, plasterboard, render or rubble is stripped out, ask who takes it away and whether the disposal cost is included rather than assuming the material can go into household bins.",
        source: {
          label: "Sheffield City Council — commercial and business waste",
          url: "https://www.sheffield.gov.uk/bins-waste-recycling/other-services/commercial-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Sheffield by postcode and job size. Example areas include:",
    sideTitle: "Show the existing surface clearly",
    sideCopy: "Photos of cracks, loose areas, previous finishes and damp staining help a plasterer decide whether the job needs patching, boarding, bonding or a straightforward skim.",
    noteLead: "A smooth finish needs a sound background.",
    noteText: "Ask what preparation, protection, boarding, beads and waste removal are included rather than comparing only the final skim price.",
  },
  faq: [
    ["How much does plastering cost in Sheffield?", "The price depends on surface condition, room size, access and whether boarding or repairs are needed before skimming. Compare quotes for the same preparation and finish."],
    ["Should I skim over damaged or damp plaster?", "Not until the underlying cause is understood. A new finish can fail again if a leak, moisture problem or defective background has not been resolved."],
    ["Can plastering be part of Building Regulations work?", "The plaster finish itself is often straightforward, but structural alterations, insulation and service changes underneath it can be regulated and may need inspection before they are covered."],
    ["Who removes old plaster and rubble?", "Agree this in the quote. Waste created and removed through paid building work needs lawful business-waste handling."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Sheffield?",
    copy: "Describe the surfaces and preparation once, then compare interested Sheffield plasterers and their quotes.",
    buttonLabel: "Get Sheffield plastering quotes",
  },
});

export const kitchenFittersSheffield = makeSheffieldProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or refurbishment in Sheffield? Describe the units, worktops, room and any service changes once, then compare kitchen fitters interested in the job.",
  answer: {
    title: "Looking for a kitchen fitter near you in Sheffield?",
    copy: "Enter the postcode and share the kitchen plan, dimensions and product list if you have them. Mention whether walls, plumbing, electrics, gas, flooring or tiling are changing so suitable Sheffield fitters can judge the full scope.",
  },
  localContext: {
    eyebrow: "Sheffield kitchen-refit context",
    title: "Cabinet fitting can sit alongside regulated structural and service work",
    intro: "Sheffield Building Control's domestic guidance makes clear that load-bearing-wall changes, heating work and electrical alterations outside competent-person schemes can require Building Regulations procedures. A kitchen strip-out also creates contractor waste that should have an agreed disposal route.",
    items: [
      {
        title: "Structural and service changes need their own compliance plan",
        text: "If a kitchen project removes a load-bearing wall, alters heating or includes electrical work outside a competent-person self-certification scheme, Sheffield's Building Notice guidance shows that Building Regulations procedures can apply. Confirm who is responsible for structural design, specialist trades, notification and completion paperwork before fitting begins.",
        source: {
          label: "Sheffield City Council — apply for a Building Notice",
          url: "https://www.sheffield.gov.uk/planning-development/building-regulations/apply-building-notice",
        },
      },
      {
        title: "Old units and renovation debris need a lawful disposal route",
        text: "Sheffield requires businesses to use registered waste companies and retain evidence that waste was disposed of lawfully. Confirm how old cabinets, worktops, packaging, tiles and demolition debris will be removed so the quote does not leave disposal as an unexpected extra.",
        source: {
          label: "Sheffield City Council — commercial and business waste",
          url: "https://www.sheffield.gov.uk/bins-waste-recycling/other-services/commercial-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Sheffield by postcode, kitchen size and project scope. Example areas include:",
    sideTitle: "Share the plan and product list before asking for a fixed price",
    sideCopy: "The same number of cabinets can be a very different project if a wall moves, worktops need specialist fabrication or plumbing, gas and electrics are being relocated.",
    noteLead: "Separate fitting from specialist services.",
    noteText: "Confirm who is responsible for electrical, gas, plumbing, tiling, decorating, worktop templating and waste so gaps do not appear after strip-out.",
  },
  faq: [
    ["How much does kitchen fitting cost in Sheffield?", "The cost depends on kitchen size, product type, worktops, preparation and how much plumbing, electrical, gas or structural work is included. Compare the same scope rather than only a fitting figure."],
    ["Can a Sheffield kitchen project need Building Regulations approval?", "Yes. Cabinets themselves are not usually the issue, but structural changes and certain heating or electrical alterations can require Building Regulations compliance."],
    ["Who removes the old kitchen?", "Agree this in writing. Strip-out and disposal may be included, priced separately or left to the homeowner, so compare quotes on the same basis."],
    ["Can I post a supply-and-fit job?", "Yes. Explain whether the kitchen is already purchased or whether you want design, supply and fitting included."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Sheffield?",
    copy: "Describe the kitchen, products and service changes once, then compare interested Sheffield kitchen fitters and their quotes.",
    buttonLabel: "Get Sheffield kitchen quotes",
  },
});
