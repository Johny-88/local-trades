import { makeNottinghamProfile } from "./nottinghamProfileBase";

export const plasterersNottingham = makeNottinghamProfile("plasterers", {
  heroCopy: "Need plastering, skimming, patch repairs or wall and ceiling preparation in Nottingham? Describe the rooms, condition and finish required once, then compare plasterers who cover your area.",
  answer: {
    title: "Looking for a plasterer near you in Nottingham?",
    copy: "Enter the postcode and explain the number of rooms, wall or ceiling condition, existing finish and whether the job follows rewiring, damp repair or structural work. Photos help suitable Nottingham plasterers judge preparation accurately.",
  },
  localContext: {
    eyebrow: "Nottingham interiors and heritage context",
    title: "Internal finishes can become a heritage issue in Nottingham's listed-building stock",
    intro: "Ordinary skimming is usually straightforward, but Nottingham has more than 800 nationally listed buildings and the council says most internal and external works affecting a listed building need Listed Building Consent. Traditional fabric should therefore be identified before modern finishes are specified.",
    items: [
      {
        title: "Listed Building Consent can apply to internal work as well as façades",
        text: "Nottingham City Council states that most building work, internal and external, to a listed building needs Listed Building Consent. If plastering involves removing historic plaster, covering decorative details or replacing traditional lime finishes, confirm the heritage position before stripping out or using incompatible materials.",
        source: {
          label: "Nottingham City Council — conservation areas and listed buildings",
          url: "https://nottinghamcity.gov.uk/information-for-business/planning-and-building-control/planning-policy/conservation-areas-and-listed-buildings/",
        },
      },
      {
        title: "Wider alterations can also trigger Building Regulations",
        text: "Nottingham Building Control explains that structural alterations and work affecting regulated services or fire performance can require approval. If plastering is the finishing stage after a wall alteration, rewiring or other regulated work, make sure the underlying compliance route is complete before it is covered.",
        source: {
          label: "Nottingham City Council — check approval needed for building work",
          url: "https://www.nottinghamcity.gov.uk/buildingwork",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Plasterers may cover Nottingham by postcode, room count and finish. Example areas include:",
    sideTitle: "Show cracks, substrates and previous finishes",
    sideCopy: "A modern room in Clifton, an older terrace in Sneinton and a protected property in The Park can require different preparation and materials. Photos help identify whether the job is a skim, repair or deeper substrate problem.",
    noteLead: "Do not hide unresolved movement or damp.",
    noteText: "If cracking, blown plaster or staining has an underlying structural, leak or damp cause, fix that first rather than paying for a cosmetic finish that may fail again.",
  },
  faq: [
    ["How much does plastering cost in Nottingham?", "Price depends on room size, substrate condition, preparation, access and whether the job is patching, skimming or full re-plastering."],
    ["Can internal plaster work need listed-building consent?", "Potentially, yes. On listed buildings, removing or materially altering historic internal fabric can require Listed Building Consent."],
    ["Should plastering wait until electrical or structural work is signed off?", "Yes where regulated work sits behind the finish. Avoid covering work before required inspection or certification is complete."],
    ["Can I post a small ceiling or patch repair?", "Yes. Small repairs can be posted alongside full-room skims and larger refurbishment work."],
    ["Do I have to hire a plasterer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare plasterers in Nottingham?",
    copy: "Describe the surfaces, condition and finish once, then compare interested Nottingham plasterers and their quotes.",
    buttonLabel: "Get Nottingham plastering quotes",
  },
});

export const kitchenFittersNottingham = makeNottinghamProfile("kitchen-fitters", {
  heroCopy: "Planning a new kitchen in Nottingham? Describe the existing room, new layout, units, worktops and service changes once, then compare kitchen fitters who cover your area.",
  answer: {
    title: "Looking for a kitchen fitter near you in Nottingham?",
    copy: "Enter the postcode and explain whether the job is units and worktops only or includes electrics, gas, plumbing, structural changes, flooring and decoration. Add plans and photos so suitable Nottingham kitchen fitters can price the same scope.",
  },
  localContext: {
    eyebrow: "Nottingham kitchen-refurbishment context",
    title: "Kitchen fitting can combine several regulated services behind one visible finish",
    intro: "Nottingham Building Control treats structural alterations and controlled services as regulated work, while protected historic properties can need additional consent for changes that affect their special interest. The fitter's quote should separate straightforward installation from regulated alterations.",
    items: [
      {
        title: "Structural, gas, electrical and drainage changes need the right compliance route",
        text: "The council's Building Regulations guidance covers alterations and controlled services such as sanitary fittings, drainage and fuel-burning appliances. Ask who is responsible for structural calculations, electrical notification, gas work and Building Control where the kitchen layout changes more than cabinets and worktops.",
        source: {
          label: "Nottingham City Council — check approval needed for building work",
          url: "https://www.nottinghamcity.gov.uk/buildingwork",
        },
      },
      {
        title: "Listed kitchens can have an additional heritage layer",
        text: "Nottingham City Council says most internal and external works affecting a listed building need Listed Building Consent. If a kitchen project removes historic partitions, joinery, fireplaces or other significant fabric, establish consent requirements before demolition begins.",
        source: {
          label: "Nottingham City Council — conservation areas and listed buildings",
          url: "https://nottinghamcity.gov.uk/information-for-business/planning-and-building-control/planning-policy/conservation-areas-and-listed-buildings/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Kitchen fitters may cover Nottingham by postcode, project size and service scope. Example areas include:",
    sideTitle: "Separate the visible fit-out from the hidden work",
    sideCopy: "A straight unit replacement in Wollaton is different from opening a wall in Sherwood or altering services in an older property in The Park. Give plans and identify every service move before comparing prices.",
    noteLead: "Ask who coordinates each trade.",
    noteText: "Electrical, gas, plumbing, plastering, flooring and structural work may be carried out by different people. Confirm responsibility and certification in the quote.",
  },
  faq: [
    ["How much does kitchen fitting cost in Nottingham?", "It varies with kitchen size, units, worktops, service moves, structural work and finishing trades. Compare like-for-like scopes."],
    ["Does replacing kitchen units need Building Regulations approval?", "A simple like-for-like cabinet replacement usually is not the issue, but structural, electrical, gas, drainage and ventilation changes can be regulated."],
    ["Can kitchen work need listed-building consent?", "Yes where the property is listed and the work affects historic fabric or the building's special architectural or historic interest."],
    ["Should I provide the fitter with the kitchen plan?", "Yes. Plans, appliance specifications and photos make it much easier to compare quotes on the same layout and service requirements."],
    ["Do I have to hire a kitchen fitter who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare kitchen fitters in Nottingham?",
    copy: "Describe the layout, units and service changes once, then compare interested Nottingham kitchen fitters and their quotes.",
    buttonLabel: "Get Nottingham kitchen quotes",
  },
});
