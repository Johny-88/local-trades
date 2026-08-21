import { makeLondonProfile } from "./londonProfileBase";

export const bathroomSpecialistsLondon = makeLondonProfile("bathroom-specialists", {
  heroCopy: "Planning a bathroom refit, shower upgrade or complete renovation in London? Describe the room, products and layout once, then compare bathroom specialists interested in the project.",
  answer: {
    title: "Looking for a bathroom specialist near you in London?",
    copy: "Enter the postcode and explain whether fixtures stay in the same positions or the layout changes. Include room dimensions, photos and any products already bought so London specialists can price plumbing, waterproofing, tiling and finishing consistently.",
  },
  localContext: {
    eyebrow: "London bathroom context",
    title: "Hard water and moisture deserve attention in London bathrooms",
    intro: "The right products and ventilation details can reduce avoidable maintenance after the new bathroom is finished.",
    items: [
      {
        title: "Thames Water says the region has hard water",
        text: "Thames Water explains that all water in its region is hard and that hard water can leave limescale. Around showers, taps and glass, this makes surface finish, cleaning access and sealant or grout maintenance worth considering when products are selected.",
        source: {
          label: "Thames Water — hard water",
          url: "https://www.thameswater.co.uk/help/water-and-waste-help/water-quality/hard-water",
        },
      },
      {
        title: "Damp and mould still affect a measurable share of London homes",
        text: "The London Assembly Research Unit reports that 3.7% of London homes were found to have damp or mould in 2022. A bathroom refit should not simply cover existing moisture damage: ventilation, leaks, cold surfaces and the underlying cause should be addressed before new finishes are sealed in.",
        source: {
          label: "London Assembly Research Unit — housing quality",
          url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover London selectively by postcode and project size. Example areas include:",
    sideTitle: "Tell the specialist whether the layout changes",
    sideCopy: "Moving a toilet, shower or bath can change drainage falls, boxing and floor build-up. A same-layout replacement is usually a different project from a full reconfiguration.",
    noteLead: "Ventilation is part of the bathroom, not an afterthought.",
    noteText: "Discuss extraction and moisture control before tiling and decorating are completed.",
  },
  faq: [
    ["How much does a bathroom refit cost in London?", "A standard bathroom refit may be around £4,000–£6,000 in broad UK guidance, while layout changes, premium products and complex wet-room work can push the total substantially higher."],
    ["Does London's hard water matter when choosing bathroom products?", "It can affect maintenance because Thames Water says its region has hard water that can leave limescale. Easy-clean glass, accessible fittings and appropriate finishes can help."],
    ["Should damp be fixed before a bathroom refit?", "Yes. New tiles or plaster should not be used to hide an active moisture problem. Identify leaks, condensation or other causes first."],
    ["Can I move the toilet to the other side of the room?", "Sometimes, but soil-pipe routes and drainage falls can make this much more complex. Show the proposed layout before ordering products."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in London?",
    copy: "Share the room, products and layout once, then compare interested London bathroom specialists and complete refit quotes.",
    buttonLabel: "Get London bathroom quotes",
  },
});

export const drainageSpecialistsLondon = makeLondonProfile("drainage-specialists", {
  heroCopy: "Blocked drain, recurring smell, backing-up water or suspected pipe damage in London? Describe the symptoms once, then compare drainage specialists who cover your area.",
  answer: {
    title: "Looking for a drainage specialist near you in London?",
    copy: "Enter the postcode and explain which fixtures, gullies or manholes are affected, whether the issue is constant or intermittent and whether neighbouring properties have the same problem. That helps London specialists judge whether clearance, CCTV or a wider network check is needed.",
  },
  localContext: {
    eyebrow: "London drainage context",
    title: "Surface-water risk and pipe ownership both matter before major drainage work",
    intro: "London's dense, heavily paved environment can overload drainage during intense rain, while the legal responsibility for a pipe can change along its route.",
    items: [
      {
        title: "Almost 320,000 London properties are at high risk of surface-water flooding",
        text: "The London Surface Water Strategy says almost 320,000 properties — around one in 13 — are at high risk of surface-water flooding. It also notes that impermeable surfaces and London's clay soils can slow infiltration. If a drainage problem appears mainly during heavy rain, the cause may be wider than a simple household blockage.",
        source: {
          label: "London City Hall — London Surface Water Strategy",
          url: "https://www.london.gov.uk/sites/default/files/2025-05/The_London_Surface_Water_Strategy.pdf",
        },
      },
      {
        title: "Thames Water does not own every drain inside a property boundary",
        text: "Thames Water's current service code explains that property owners are responsible for private drains within their property that did not transfer to the water company, while Thames Water is responsible for many public and transferred sewers. Establishing the boundary matters before paying for a major repair.",
        source: {
          label: "Thames Water — your water and wastewater services",
          url: "https://www.thameswater.co.uk/media-library/home/about-us/governance/our-policies/codes-of-practice/your-water-and-wastewater-services.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage firms may cover London by postcode and emergency rota. Example areas include:",
    sideTitle: "Tell the specialist whether neighbours are affected",
    sideCopy: "If several flats or nearby properties back up at the same time, that can point to a shared or public network issue rather than a defect entirely within one private drain.",
    noteLead: "Diagnose before excavating.",
    noteText: "CCTV or clear evidence of the defect can prevent unnecessary repair and help establish who is responsible.",
  },
  faq: [
    ["How much does it cost to unblock a drain in London?", "MyJobQuote's current guide gives roughly £80–£100 for drain cleaning, £80–£145 for rodding and £70–£175 for jetting as broad UK figures. Emergency attendance can cost more."],
    ["When is a CCTV drain survey useful?", "It is especially useful for recurring blockages, suspected damage, roots or when evidence is needed before a repair. MyJobQuote's current average survey guide is around £250."],
    ["Who is responsible for a drain in London?", "It depends on the pipe. Private drains within the property may be the owner's responsibility, while Thames Water is responsible for many public and transferred sewers. Establish the actual boundary before major work."],
    ["Could heavy rain be the reason my drain backs up?", "Yes. London's Surface Water Strategy identifies major surface-water flood risk, so problems that occur specifically during intense rain may involve capacity or surface-water issues as well as local blockages."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in London?",
    copy: "Describe the blockage or drainage symptoms once, then compare interested London drainage specialists and their proposed next steps.",
    buttonLabel: "Get London drainage quotes",
  },
});
