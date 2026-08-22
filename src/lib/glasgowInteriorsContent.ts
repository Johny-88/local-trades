import { makeGlasgowProfile } from "./glasgowProfileBase";

export const plasterersGlasgow = makeGlasgowProfile("plasterers", {
  heroCopy: "Need plastering, skimming, patch repairs or interior wall preparation in Glasgow? Describe the rooms, existing surfaces and finish required once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Glasgow?",
    copy: "Enter the postcode and describe the walls or ceilings, approximate area, existing finish, cracks, blown plaster or previous water damage. Photos help suitable Glasgow plasterers judge preparation before quoting.",
  },
  localContext: {
    eyebrow: "Glasgow older-home and conservation context",
    title: "Glasgow's large pre-1919 tenement stock makes the existing wall build-up and external heritage controls worth checking",
    intro: "Glasgow City Council continues to prioritise the repair of pre-1919 tenements, and conservation-area controls can also apply to external finishes. For plastering and render-related work, it is important to separate an internal cosmetic skim from repairs tied to damp, structural movement or protected external fabric.",
    items: [
      {
        title: "Pre-1919 tenements remain a major part of Glasgow's housing stock",
        text: "Glasgow's housing strategy identifies tens of thousands of pre-1919 tenement homes, while more recent council reporting continues to prioritise repair of older tenement stock. In these properties, cracked or loose plaster can sometimes be a symptom of roof, stonework or moisture problems, so establish the cause before simply covering the surface.",
        source: {
          label: "Glasgow City Council — private-sector housing and pre-1919 tenement repairs",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDNNT81DXDNDN",
        },
      },
      {
        title: "External painting and stone-cleaning can face extra control in conservation areas",
        text: "Glasgow's conservation-area guidance explains that designation brings certain external works, including stone cleaning and exterior painting, under planning control. If a plastering quote includes external render or façade work rather than internal plaster only, check the property's planning status before specifying the finish.",
        source: {
          label: "Glasgow City Council — conservation-area controls",
          url: "https://onlineservices.glasgow.gov.uk/CouncillorsandCommittees/viewSelectedDocument.asp?c=P62AFQDNDNDN0GT1UT",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Glasgow by postcode, surface type and job size. Example areas include:",
    sideTitle: "Explain what is underneath the damaged finish",
    sideCopy: "A straightforward skim in a modern room is different from failed old plaster in a tenement, cracked lath-and-plaster or surfaces affected by previous leaks. Photos of the whole wall and close-ups help.",
    noteLead: "Treat the cause before the finish.",
    noteText: "If cracks, damp staining or blown plaster are recurring, ask whether the underlying leak, movement or substrate problem needs separate repair before replastering.",
  },
  faq: [
    ["How much does plastering cost in Glasgow?", "Cost depends on area, ceiling height, surface condition, preparation, access and whether old plaster must be removed. Compare quotes for the same preparation and finish."],
    ["Are old Glasgow tenement walls different to plaster?", "They can be. Older properties may have traditional plaster systems, previous repairs or moisture-related defects, so the existing build-up should be checked before choosing a repair method."],
    ["Does internal plastering need planning permission?", "Ordinary internal cosmetic plastering normally does not, but listed-building, structural or external works can raise separate consent questions."],
    ["Can exterior render or painting be restricted in a Glasgow conservation area?", "Yes. Glasgow guidance notes that conservation-area designation can bring external painting, stone cleaning and other façade work under planning control."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Glasgow?",
    copy: "Describe the surfaces, damage and finish once, then compare interested Glasgow plasterers and their quotes.",
    buttonLabel: "Get Glasgow plastering quotes",
  },
});

export const kitchenFittersGlasgow = makeGlasgowProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen or kitchen refurbishment in Glasgow? Describe the layout, units, appliances and any structural or service changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Glasgow?",
    copy: "Enter the postcode and explain whether the job is a like-for-like replacement or a larger remodel. Include plans, photos and details of plumbing, electrics, gas, ventilation and wall changes so suitable Glasgow kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Glasgow kitchen-refurbishment context",
    title: "A simple cabinet replacement is very different from a tenement remodel involving structure or shared building fabric",
    intro: "Glasgow Building Standards is the local verifier for Scottish building warrants, while the city also has a substantial stock of pre-1919 tenements with common fabric and shared ownership issues. Kitchen quotes should therefore distinguish finish work from regulated or common-property alterations.",
    items: [
      {
        title: "Structural alterations can move a kitchen project into the building-warrant system",
        text: "Scottish building-standards guidance identifies structural-wall alterations, changes to external walls and certain drainage changes among work where the warrant exemptions for minor house work do not apply. If a Glasgow kitchen remodel removes walls or substantially relocates services, establish the warrant route before demolition starts.",
        source: {
          label: "Scottish Government — building standards and warrant guidance",
          url: "https://www.gov.scot/policies/building-standards/",
        },
      },
      {
        title: "Common tenement fabric can require coordination beyond the individual flat",
        text: "Glasgow City Council's housing reporting highlights the continuing importance of common repair and maintenance arrangements in pre-1919 tenements. If kitchen work affects shared stacks, common walls, external vents or other common fabric, confirm ownership and permissions rather than assuming everything within the visible kitchen is solely the flat owner's responsibility.",
        source: {
          label: "Glasgow City Council — private-sector tenement maintenance",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDNNT81DXDNDN",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Glasgow by postcode, project size and installation scope. Example areas include:",
    sideTitle: "Separate the fit from the building work",
    sideCopy: "Replacing units in the same layout is a different job from opening a wall, moving drainage, adding new ventilation or changing gas and electrical services. Give the full scope so quotes can be compared fairly.",
    noteLead: "Confirm who coordinates the specialist trades.",
    noteText: "Ask whether plumbing, electrics, gas, ventilation, plastering, tiling and waste removal are included or whether you need to arrange them separately.",
  },
  faq: [
    ["How much does kitchen fitting cost in Glasgow?", "It varies with kitchen size, unit type, worktops, appliances, service alterations, structural work and finishing. Compare quotes against the same plans and inclusions."],
    ["Does a new kitchen need a building warrant in Glasgow?", "A like-for-like kitchen replacement may not, but structural changes, significant alterations or some service changes can require a Scottish building warrant. Check the exact scope."],
    ["Can a kitchen fitter remove a wall in a Glasgow tenement?", "Only after confirming whether it is structural or common fabric and what approvals are needed. Do not treat wall removal as ordinary cabinet fitting."],
    ["Who disposes of the old kitchen?", "Agree this in writing. Waste produced by paid trade work is business waste in Scotland, so removal and disposal should be clear in the quote."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Glasgow?",
    copy: "Describe the layout, units and wider alterations once, then compare interested Glasgow kitchen fitters and their quotes.",
    buttonLabel: "Get Glasgow kitchen quotes",
  },
});
