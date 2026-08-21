import { makeLondonProfile } from "./londonProfileBase";

export const tilersLondon = makeLondonProfile("tilers", {
  heroCopy: "Planning bathroom tiling, a kitchen splashback, a new tiled floor or repairs in London? Describe the surface, tile type and area once, then compare tilers interested in the job.",
  answer: { title: "Looking for a tiler near you in London?", copy: "Enter the postcode and explain what needs tiling, the approximate square metres, tile material and condition of the existing surface. Photos help London tilers judge preparation, cutting and access before responding." },
  localContext: {
    eyebrow: "London tiling context",
    title: "Hard water and high-density housing are worth considering before tiling starts",
    intro: "The finish is visual, but London-specific water and building conditions can influence material choice, maintenance and access.",
    items: [
      { title: "Thames Water supplies a hard-water region", text: "Thames Water says all the water in its region is hard and explains that hard water can leave limescale deposits. In bathrooms and kitchens this makes grout colour, sealants, tile finish and cleaning expectations worth discussing, especially around showers and taps.", source: { label: "Thames Water — hard water", url: "https://www.thameswater.co.uk/help/water-and-waste-help/water-quality/hard-water" } },
      { title: "Most London households live in flats", text: "The London Assembly Research Unit reports that 54% of London households live in flats, maisonettes or apartments. For floor tiling in a flat, access, working hours, noise and the effect of floor build-up on thresholds and doors can need more planning than in a detached house.", source: { label: "London Assembly Research Unit — London's Housing Stock", url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" } },
    ],
  },
  areaCopy: {
    intro: "Tilers can cover London selectively by postcode and job size. Example areas include:",
    sideTitle: "Show the surface, not just the tiles",
    sideCopy: "Photos of the existing floor or wall, room dimensions and any cracks or uneven areas help a tiler understand preparation before visiting.",
    noteLead: "Large-format tiles change the job.",
    noteText: "Tile size, weight and pattern affect cutting, handling and substrate requirements.",
  },
  faq: [
    ["How much does tiling cost in London?", "MyJobQuote's current UK guidance gives roughly £400–£500 for around 8m² of floor tiling, £500–£600 for around 12m² and £500–£800 for a typical bathroom, before unusual preparation or premium materials."],
    ["Does London's hard water matter for bathroom tiles?", "It can affect maintenance because Thames Water says its region has hard water that can leave limescale. Tile finish, grout and sealant choices can make cleaning easier."],
    ["Should I tell the tiler I live in a flat?", "Yes. Lift access, working hours, noise, thresholds and moving heavy materials through common areas can all affect the plan."],
    ["Can a tiler fix an uneven floor first?", "Often, but do not assume it is included. Share photos and ask whether levelling, boarding or other preparation is part of the quote."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare tilers in London?", copy: "Share the room, surface and tile details once, then compare interested London tilers and their quotes.", buttonLabel: "Get London tiling quotes" },
});

export const heatingEngineersLondon = makeLondonProfile("heating-engineers", {
  heroCopy: "Boiler problem, cold radiators, controls upgrade or a larger heating change in London? Describe the system and symptoms once, then compare heating engineers interested in the work.",
  answer: { title: "Looking for a heating engineer near you in London?", copy: "Enter the postcode, property type, boiler or heating system details and what is going wrong. For upgrades, include the number of rooms, current emitters and whether the home is a flat or house so London heating engineers can judge the likely scope." },
  localContext: {
    eyebrow: "London heating transition",
    title: "London homes are being pushed toward better efficiency and lower-carbon heat",
    intro: "The capital includes old housing, flats and newer developments, so the right heating solution depends heavily on the building and existing system.",
    items: [
      { title: "London is funding another major wave of home energy upgrades", text: "In July 2026 the Mayor announced more than £58 million for energy-efficiency improvements to up to 5,000 London homes. City Hall noted that much of London's housing stock is decades old and can be difficult to heat in winter or keep cool in hot weather. For heating work, fabric condition and heat loss should be considered alongside the appliance itself.", source: { label: "London City Hall — 2026 energy-efficiency funding", url: "https://www.london.gov.uk/mayor-helps-londoners-bills-ps58m-fund-boosting-energy-efficiency-and-living-conditions-across" } },
      { title: "Heat networks are an important part of London's heating mix", text: "The London Assembly reported in June 2026 that Ofgem became the heat-network regulator in January 2026 and that London Plan policy has promoted heat networks, particularly in new development. If a flat is supplied by communal or district heating, the homeowner may not have the same choices as someone with an individual boiler.", source: { label: "London Assembly — heat networks", url: "https://www.london.gov.uk/who-we-are/what-london-assembly-does/london-assembly-press-releases/protect-londoners-bad-deal-heat-networks" } },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover London by postcode, job type and emergency availability. Example areas include:",
    sideTitle: "Tell the engineer what system the building actually has",
    sideCopy: "A Victorian terrace with an individual gas boiler and a modern apartment connected to a heat network are completely different jobs. Give the actual system details before arranging work.",
    noteLead: "Check gas registration where relevant.",
    noteText: "Gas work must be carried out by someone appropriately registered for the work being undertaken.",
  },
  faq: [
    ["How much does a boiler service cost in London?", "MyJobQuote's current UK guide is broadly around £80–£120 for a standard boiler service. London call-outs and repairs can cost more depending on timing, travel and parts."],
    ["Can I use this page for a heat-pump job?", "Yes. Heating Engineers includes larger heating upgrades, but make the property details clear because heat-pump suitability depends on heat loss, emitters, hot-water needs and available space."],
    ["What if my London flat uses a heat network?", "Say so before booking. A communal heat network changes which equipment is inside the flat and which parts are controlled by the building operator."],
    ["Do I need a Gas Safe engineer?", "For work on regulated gas appliances or gas pipework, use a professional who is Gas Safe registered for the relevant category of work."],
    ["Do I have to hire an engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare heating engineers in London?", copy: "Describe the system and heating problem once, then compare interested London heating engineers and quotes.", buttonLabel: "Get London heating quotes" },
});
