import { makeLondonProfile } from "./londonProfileBase";

export const plasterersLondon = makeLondonProfile("plasterers", {
  heroCopy: "Need skimming, ceiling work, repairs or rendering in London? Describe the surfaces and their condition once, then compare plasterers who cover your area.",
  answer: { title: "Looking for a plasterer near you in London?", copy: "Enter the postcode and show the walls or ceilings with clear photos. Say whether the surface is old plaster, plasterboard, brick, painted render or affected by cracks or moisture so London plasterers can judge preparation." },
  localContext: {
    eyebrow: "London plastering context",
    title: "A large share of London's homes are old, and moisture should be understood before cosmetic repair",
    intro: "Age does not automatically mean a wall needs special treatment, but older construction and existing moisture can change the right preparation.",
    items: [
      { title: "More than a quarter of London homes date from before 1919", text: "The London Assembly Research Unit reports that 27.6% of London's housing stock is pre-1919. Older homes can contain lime plaster, solid masonry and layers of past repair, so the existing construction should be identified before specifying modern boards, gypsum or render systems.", source: { label: "London Assembly Research Unit — age of London's homes", url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" } },
      { title: "The housing survey still finds damp and mould in London homes", text: "The same report says 3.7% of London homes were found to have damp or mould in 2022. Plaster can be damaged by moisture, but new plaster is not a cure for an active leak, condensation problem or penetrating damp. The source should be understood first.", source: { label: "London Assembly Research Unit — housing quality", url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" } },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover London selectively by postcode and job size. Example areas include:",
    sideTitle: "Show stains and cracks before they are covered",
    sideCopy: "Photos of the whole wall or ceiling plus close-ups of damage help distinguish a straightforward skim from a job needing repair or investigation first.",
    noteLead: "Older walls may need different materials.",
    noteText: "If the property has traditional lime or solid-wall construction, ask whether the proposed system is compatible rather than automatically using a modern impermeable finish.",
  },
  faq: [
    ["How much does plastering cost in London?", "A small repair may be around £150–£300, while full-room skimming and ceilings can run several hundred pounds or more depending on size, height and preparation."],
    ["Should damp plaster just be skimmed over?", "Not until the moisture source is understood. New plaster can fail if there is an active leak, penetrating damp or unresolved condensation."],
    ["Does the age of my London house matter?", "It can. More than a quarter of London homes are pre-1919, and some older walls use traditional materials that need compatible repairs."],
    ["How long before I can paint new plaster?", "Drying time depends on thickness, ventilation, temperature and the substrate. Ask the plasterer for the appropriate drying and mist-coat guidance for the job."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare plasterers in London?", copy: "Show the surfaces and condition once, then compare interested London plasterers and their preparation and finish quotes.", buttonLabel: "Get London plastering quotes" },
});

export const kitchenFittersLondon = makeLondonProfile("kitchen-fitters", {
  heroCopy: "Installing a new kitchen or refurbishing an existing one in London? Share the plan, units, worktops and room details once, then compare kitchen fitters interested in the project.",
  answer: { title: "Looking for a kitchen fitter near you in London?", copy: "Enter the postcode and explain whether the kitchen is supply-and-fit, fit-only or a partial refurbishment. Upload plans and product lists if available, and mention whether the property is a flat or leasehold home." },
  localContext: {
    eyebrow: "London kitchen projects",
    title: "Flats and leasehold ownership can add building-level constraints to a kitchen refit",
    intro: "Kitchen work inside a London flat may be physically straightforward but still subject to access, lease and building-management requirements.",
    items: [
      { title: "More than half of London households live in flats", text: "The London Assembly Research Unit reports that 54% of London households lived in flats, maisonettes or apartments at the 2021 Census. Deliveries, lift protection, permitted working hours and waste removal through common areas can therefore be important parts of a London kitchen programme.", source: { label: "London Assembly Research Unit — types of home", url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" } },
      { title: "More than a third of London's housing stock is leasehold", text: "The same report estimates that 36.1% of London dwellings were leasehold in 2022-23, and the vast majority of those leasehold homes were flats. Before changing layouts, services or ventilation in a leasehold property, check the lease and any freeholder or managing-agent requirements rather than assuming internal work is unrestricted.", source: { label: "London Assembly Research Unit — leasehold homes", url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" } },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover London by postcode, project size and access. Example areas include:",
    sideTitle: "Check deliveries and building rules before strip-out",
    sideCopy: "Large kitchen deliveries, old-unit removal and stone worktops can be difficult in buildings with small lifts, narrow stairs or protected common areas.",
    noteLead: "Fit-only and full-project quotes are different.",
    noteText: "Make clear who supplies the kitchen and who coordinates plumbing, electrics, gas, tiling, flooring and decoration.",
  },
  faq: [
    ["How much does kitchen fitting cost in London?", "A straightforward fit-only job may be around £1,500–£3,000 in broad UK guidance, while a complete kitchen project can rise well beyond £10,000 depending on products, services and room changes."],
    ["Does being leasehold affect a kitchen refit?", "Potentially. More than a third of London housing is leasehold. Check the lease and building-management rules if the work changes services, ventilation, structure or affects common areas."],
    ["Should I buy the kitchen before finding a fitter?", "You can, but have the room and plan checked carefully. A fitter may spot access, service or tolerance issues before non-returnable products are ordered."],
    ["Who should do gas and electrical changes?", "Use appropriately qualified or registered professionals for regulated work. Confirm whether the kitchen fitter coordinates them or you need separate appointments."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare kitchen fitters in London?", copy: "Share the plan, products and project scope once, then compare interested London kitchen fitters and quotes.", buttonLabel: "Get London kitchen quotes" },
});
