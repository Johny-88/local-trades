import { makeGlasgowProfile } from "./glasgowProfileBase";

export const drivewaySpecialistsGlasgow = makeGlasgowProfile("driveway-specialists", {
  heroCopy: "Planning a new driveway, resurfacing or front-garden parking in Glasgow? Describe the area, existing surface, drainage and whether a new road access is needed once, then compare driveway specialists who cover your area.",
  answer: {
    title: "Looking for a driveway specialist near you in Glasgow?",
    copy: "Enter the postcode, approximate area and preferred surface. Say whether the job needs excavation, drainage, retaining work, a new dropped kerb or changes to a front garden so suitable Glasgow driveway specialists can assess the full scope.",
  },
  localContext: {
    eyebrow: "Glasgow driveway and road-access context",
    title: "Paving the garden does not by itself create an approved vehicle crossing onto a Glasgow road",
    intro: "Glasgow City Council requires permission before a footway crossing is installed, and it warns that planning permission may also be needed for the driveway itself. Surface-water management and conservation-area controls can add further design constraints.",
    items: [
      {
        title: "A dropped kerb or footway crossing needs Roads Authority permission",
        text: "Glasgow City Council says permission is required under the Roads (Scotland) Act 1984 before a footway crossing can be installed. The council assesses the proposed location for road-safety and construction suitability, and planning issues for the driveway should be resolved before the crossing application is made. If the job needs new vehicle access, include that in the quote rather than pricing paving alone.",
        source: {
          label: "Glasgow City Council — footway crossing application",
          url: "https://onlineservices.glasgow.gov.uk/forms/footwaycrossing/OnlineForm.aspx",
        },
      },
      {
        title: "Conservation areas and surface water can change the driveway design",
        text: "Scottish Government conservation-area guidance says forming a parking space in a conservation area will probably need planning permission. Glasgow also uses Sustainable Drainage Systems policy to manage surface-water runoff. Before replacing a front garden with hard surfacing, check planning status and how rainwater will be managed rather than assuming an impermeable finish is suitable everywhere.",
        source: {
          label: "Scottish Government — guide to conservation areas in Scotland",
          url: "https://www.gov.scot/publications/guide-to-conservation-areas-in-scotland/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Driveway specialists may cover Glasgow by postcode, surface type and access requirements. Example areas include:",
    sideTitle: "Describe the road access as well as the paving",
    sideCopy: "Resurfacing an existing driveway in Cathcart is different from creating new front-garden parking in Pollokshields or adding a first vehicle crossing in another part of Glasgow. State whether a legal dropped kerb already exists.",
    noteLead: "Do not assume the contractor can simply lower the kerb.",
    noteText: "A new footway crossing needs council permission, and planning permission may also be required for the driveway. Resolve those issues before committing to excavation or paving.",
  },
  faq: [
    ["How much does a driveway cost in Glasgow?", "The price depends on area, excavation depth, sub-base, surface material, drainage, retaining work, access and whether a new footway crossing is needed. Compare quotes against the same specification."],
    ["Do I need permission for a dropped kerb in Glasgow?", "Yes. Glasgow City Council says permission must be obtained from the Roads Authority before a footway crossing is installed."],
    ["Can I turn a front garden into parking in a Glasgow conservation area?", "Possibly, but Scottish conservation-area guidance says forming a parking space will probably require planning permission. Check the exact property before work starts."],
    ["Why does drainage matter when installing a driveway?", "Replacing soil or planting with hard surfacing changes where rainwater goes. The driveway should manage runoff without creating problems for the property, pavement, road or neighbours."],
    ["Do I have to hire a driveway specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare driveway specialists in Glasgow?",
    copy: "Describe the surface, drainage and road-access requirements once, then compare interested Glasgow driveway specialists and their quotes.",
    buttonLabel: "Get Glasgow driveway quotes",
  },
});

export const windowSpecialistsGlasgow = makeGlasgowProfile("window-specialists", {
  heroCopy: "Need replacement windows, repairs or glazing work in Glasgow? Describe the property, existing windows and required change once, then compare window specialists who cover your area.",
  answer: {
    title: "Looking for a window specialist near you in Glasgow?",
    copy: "Enter the postcode and describe the frame material, opening style, number of windows and whether the property is listed or in a conservation area. Add photos of the elevations so suitable Glasgow window specialists can judge both installation and planning constraints.",
  },
  localContext: {
    eyebrow: "Glasgow window and heritage context",
    title: "Scotland's 2024 permitted-development change means old blanket advice about conservation-area windows can now be misleading",
    intro: "Glasgow encourages repair and retention of original windows in its historic buildings, while the 2024 Scottish permitted-development amendment created rights for some replacement windows. Certain principal-elevation replacements in conservation areas still require prior approval where their appearance or operation materially differs.",
    items: [
      {
        title: "Certain conservation-area window replacements require prior approval rather than a simple blanket rule",
        text: "Glasgow City Council planning reports applying the 2024 Class 7A rules state that prior approval is required for replacement windows on a principal elevation in a conservation area where they are not the same, or substantially the same, in opening method, pane arrangement or colour, or frame and astragal dimensions or colour. Check the current route for the exact elevation and design before ordering units.",
        source: {
          label: "Glasgow City Council — application of 2024 replacement-window permitted-development rules",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDNNTZ3DXZL2U",
        },
      },
      {
        title: "Glasgow still encourages repair and accurate matching of historic windows",
        text: "Glasgow's historic-environment guidance encourages retention and repair of original windows wherever possible. Where replacement is justified in listed buildings or sensitive conservation-area settings, design, profile, method of opening and materials can be important. Ask a window specialist to separate energy-performance goals from the planning and heritage specification rather than choosing frames on price alone.",
        source: {
          label: "Glasgow City Council — historic-environment window guidance",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDN810GDNUTZ3",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Window specialists may cover Glasgow by postcode, frame type and project size. Example areas include:",
    sideTitle: "Give the elevation and heritage status",
    sideCopy: "Replacing rear windows on an ordinary property can be a different planning job from changing principal-elevation sash-and-case windows in Glasgow West, Pollokshields or another conservation area. Photos of the full elevation help establish context.",
    noteLead: "Check permission before ordering bespoke units.",
    noteText: "The 2024 Scottish rules changed the position for some replacements, but prior approval or listed-building consent can still matter. Confirm the route before paying for made-to-measure windows.",
  },
  faq: [
    ["How much do replacement windows cost in Glasgow?", "Cost depends on size, frame material, glazing, opening style, access, number of units and any heritage specification. Compare quotes for the same window design and installation scope."],
    ["Do replacement windows in every Glasgow conservation area need full planning permission?", "No blanket answer is safe now. Scotland introduced permitted-development rights for some replacement windows in 2024, while certain principal-elevation changes in conservation areas require prior approval. Listed buildings have separate controls."],
    ["Can I replace timber sash windows with uPVC?", "That depends on the property and elevation. Glasgow's historic-environment guidance strongly favours retaining original windows and accurate matching in sensitive historic settings, so check planning status before choosing the frame material."],
    ["Should I repair old sash-and-case windows instead of replacing them?", "It can be worth assessing repair first. Glasgow guidance specifically encourages retention and repair of original windows where possible, particularly in historic buildings and conservation areas."],
    ["Do I have to hire a window specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare window specialists in Glasgow?",
    copy: "Describe the windows, elevation and property status once, then compare interested Glasgow window specialists and their quotes.",
    buttonLabel: "Get Glasgow window quotes",
  },
});
