import { makeLondonProfile } from "./londonProfileBase";

export const drivewaySpecialistsLondon = makeLondonProfile("driveway-specialists", {
  heroCopy: "Planning block paving, resin, tarmac, gravel or a new hardstanding in London? Describe the frontage, area, access and preferred surface once, then compare driveway specialists interested in the project.",
  answer: {
    title: "Looking for a driveway specialist near you in London?",
    copy: "Enter the postcode, approximate square metres and preferred surface. Include photos from the road, current levels, drainage and whether a dropped kerb already exists so London driveway specialists can understand the full job.",
  },
  localContext: {
    eyebrow: "London driveway planning",
    title: "Surface-water drainage and the vehicle crossing should be checked before paving starts",
    intro: "London's flood-risk strategy places strong emphasis on keeping rainwater out of overloaded drains, while permission to drive across the pavement is separate from the driveway itself.",
    items: [
      {
        title: "London has significant surface-water flood risk",
        text: "The London Surface Water Strategy says almost 320,000 properties — around one in 13 — are at high risk of surface-water flooding. It identifies impermeable surfaces as part of the problem and promotes sustainable drainage measures such as permeable paving. The drainage approach should be designed before the finished driveway is laid.",
        source: {
          label: "London City Hall — London Surface Water Strategy",
          url: "https://www.london.gov.uk/sites/default/files/2025-05/The_London_Surface_Water_Strategy.pdf",
        },
      },
      {
        title: "Impermeable front-garden paving can require planning permission",
        text: "Planning Portal guidance says paving a front garden with a permeable surface, or directing runoff to a permeable area within the property, generally does not need planning permission. A traditional impermeable surface over more than five square metres generally does. A new or altered dropped kerb is a separate application handled by the relevant highway authority or London borough.",
        source: {
          label: "Planning Portal — paving your front garden",
          url: "https://www.planningportal.co.uk/permission/common-projects/paving-your-front-garden/planning-permission/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover London by postcode and project size. Example areas include:",
    sideTitle: "Check the borough and highway requirements before excavation",
    sideCopy: "A new driveway within the boundary and permission to cross the public pavement are related but separate. Give the specialist photos of the frontage and confirm the dropped-kerb position before finalising levels.",
    noteLead: "Drainage belongs in the specification.",
    noteText: "Ask where rainfall will go and how the design avoids simply sending runoff onto the pavement or road.",
  },
  faq: [
    ["How much does a driveway cost in London?", "For a 30m² one-car driveway, MyJobQuote's current broad UK ranges are about £1,000–£2,500 for gravel, £1,200–£2,000 for resin, £1,300–£3,200 for tarmac and £1,200–£4,000 for block paving. London access and disposal can move the price."],
    ["Do I need planning permission to pave a London front garden?", "Planning Portal guidance says permeable paving, or an arrangement that drains to a permeable area within the property, generally does not need planning permission. Traditional impermeable paving over more than five square metres generally does."],
    ["Is a dropped kerb included in a driveway quote?", "Do not assume so. A vehicle crossing over the public footway normally involves a separate application and approval process through the relevant London borough or highway authority."],
    ["Why does permeability matter in London?", "London's Surface Water Strategy identifies widespread flood risk and promotes sustainable drainage. Permeable paving can help keep rainfall out of overloaded drainage systems."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in London?",
    copy: "Share the frontage, dimensions, drainage and preferred surface once, then compare interested London driveway specialists and quotes.",
    buttonLabel: "Get London driveway quotes",
  },
});

export const windowSpecialistsLondon = makeLondonProfile("window-specialists", {
  heroCopy: "Replacing windows, repairing failed double glazing or planning new sash, bay or uPVC units in London? Describe the property and openings once, then compare window specialists interested in the work.",
  answer: {
    title: "Looking for a window specialist near you in London?",
    copy: "Enter the postcode, number and approximate style of windows and whether you need full frames or only failed sealed units replaced. Mention listed-building, conservation-area or Article 4 status if known before products are ordered.",
  },
  localContext: {
    eyebrow: "London window permissions",
    title: "Heritage designations can change what replacement window is acceptable",
    intro: "Many London homes can use standard replacement routes, but the capital also has an unusually large concentration of conservation areas and listed buildings.",
    items: [
      {
        title: "London has more than 1,000 conservation areas and around 19,000 listed-building entries",
        text: "The London Plan records more than 1,000 conservation areas and around 19,000 list entries for historic buildings. Individual boroughs can also use Article 4 directions to remove normal permitted-development rights. Check the exact property before assuming a standard replacement frame is acceptable.",
        source: {
          label: "London City Hall — London Plan heritage and culture",
          url: "https://www.london.gov.uk/programmes-strategies/planning/london-plan/the-london-plan-2021-online/chapter-7-heritage-and-culture",
        },
      },
      {
        title: "Historic England recommends retaining significant historic windows where possible",
        text: "Historic England explains that works to listed buildings can require listed-building consent, while Article 4 directions can introduce planning controls in conservation areas. Its retrofit guidance generally favours repairing and sensitively upgrading significant historic windows rather than automatically replacing them.",
        source: {
          label: "Historic England — modifying historic windows",
          url: "https://historicengland.org.uk/advice/technical-advice/retrofit-and-energy-efficiency-in-historic-buildings/modifying-windows-and-doors-in-historic-buildings/modifying-historic-windows-as-part-of-retrofitting-energy-saving-measures/?ContensisTextOnly=true",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover London by survey area and product type. Example areas include:",
    sideTitle: "Check heritage status before ordering non-returnable frames",
    sideCopy: "If a home is listed or subject to conservation-area controls, frame material, glazing bars, colour and sightlines may matter. Establish the approval position before manufacture.",
    noteLead: "A failed sealed unit does not always require a whole new frame.",
    noteText: "Where the frame and hardware remain serviceable, replacing only a blown double-glazed unit can be a much smaller repair.",
  },
  faq: [
    ["How much do replacement windows cost in London?", "MyJobQuote's current broad UK examples are about £350–£600 for a standard uPVC casement, £600–£1,100 for a uPVC sash and £1,200–£2,800 for a bay-window project. Access and heritage requirements can increase London quotes."],
    ["Can I replace only a blown double-glazed unit?", "Often yes if the existing frame and hardware are sound. MyJobQuote's current guide places a standard replacement sealed unit around £55–£145 depending on size and specification."],
    ["Can a London conservation area restrict replacement windows?", "Yes. London has more than 1,000 conservation areas, and some boroughs use Article 4 directions that remove normal permitted-development rights. Check the exact property before ordering."],
    ["What if my London property is listed?", "Alterations affecting the special interest of a listed building can require listed-building consent. Historic England generally encourages retention and repair of significant historic windows where feasible."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in London?",
    copy: "Describe the openings and property once, then compare interested London window specialists and their product and fitting quotes.",
    buttonLabel: "Get London window quotes",
  },
});
