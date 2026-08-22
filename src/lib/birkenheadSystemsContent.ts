import { makeBirkenheadProfile } from "./birkenheadProfileBase";

export const tilersBirkenhead = makeBirkenheadProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Birkenhead? Describe the room, surface condition, tile type, approximate area and finish once, then compare tilers who cover your postcode.",
  answer: {
    title: "Looking for a tiler near you in Birkenhead?",
    copy: "Share the room dimensions, tile size and material, existing surface, pattern, trims and whether old tiles need removing. Suitable Birkenhead tilers can then price preparation and fitting against the same brief.",
  },
  localContext: {
    eyebrow: "Wirral Building Control and tiling projects",
    title: "Simple tiling is usually a finish, but the wider alteration can still need Building Control",
    intro: "A splashback or like-for-like floor finish is different from a bathroom rebuild, structural floor change or major kitchen alteration. Wirral Council has separate Full Plans and Building Notice routes for work that falls under the Building Regulations.",
    items: [
      {
        title: "Wirral offers Full Plans and Building Notice routes for proposed work",
        text: "Wirral Council lists Full Plans and Building Notice as the two application types for building work that has not yet started. If tiling is part of a wider regulated alteration, establish the correct route before finishes cover work that may need checking.",
        source: {
          label: "Wirral Council — types of Building Control application",
          url: "https://www.wirral.gov.uk/planning-and-building/building-control/types-applications",
        },
      },
      {
        title: "Full Plans applications include detailed drawings and specifications",
        text: "Wirral says Full Plans applications should include detailed drawings, specifications and structural calculations where applicable. Give the tiler the approved build-up and waterproofing details when the finish forms part of a larger project.",
        source: {
          label: "Wirral Council — Full Plans applications",
          url: "https://www.wirral.gov.uk/planning-and-building/building-control/types-applications/full-plans-applications",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Birkenhead by postcode, project size and tile type. Example areas include:",
    sideTitle: "Preparation usually matters more than the postcode",
    sideCopy: "A splashback in Claughton, a bathroom floor in Tranmere and large-format kitchen tiles in Oxton can require very different levelling, waterproofing and cutting time.",
    noteLead: "Describe what is underneath the tiles.",
    noteText: "Loose boards, cracked screed, old adhesive, uneven walls and wet-area tanking can materially change the job. Photos of the existing surface make quotes more comparable.",
  },
  faq: [
    ["How much does a tiler cost in Birkenhead?", "Pricing depends on area, tile material and size, pattern, preparation, access, removal and finishing details. Compare like-for-like scopes."],
    ["Do I need Building Control just to replace tiles?", "Simple like-for-like tiling is normally a finishing job, but a larger alteration involving structure, drainage or other regulated work may require Building Control."],
    ["What Building Control routes does Wirral use for proposed work?", "Wirral Council lists Full Plans and Building Notice applications for work that has not yet started."],
    ["Can I post a small splashback job?", "Yes. Small repairs and splashbacks can be posted alongside complete bathroom, kitchen and floor tiling jobs."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Birkenhead?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Birkenhead tilers and their quotes.",
    buttonLabel: "Get Birkenhead tiling quotes",
  },
});

export const heatingEngineersBirkenhead = makeBirkenheadProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Birkenhead for a boiler, radiator, heating fault or system upgrade? Describe the system, symptoms and timing once, then compare professionals who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Birkenhead?",
    copy: "Enter the postcode, heating type, boiler or appliance details and the problem. Mention loss of heat or hot water, unusual pressure, leaks, radiator issues and any planned changes so suitable Birkenhead heating engineers can assess the same brief.",
  },
  localContext: {
    eyebrow: "Wirral smoke-control rules",
    title: "The whole of Wirral is now one Smoke Control Area, which matters for solid-fuel heating choices",
    intro: "Most household heating jobs involve gas, electricity or heat pumps, but solid-fuel stoves, fireplaces and boilers have an extra local consideration. Wirral's new borough-wide Smoke Control Order took effect in August 2025.",
    items: [
      {
        title: "The whole of Wirral has been a Smoke Control Area since 1 August 2025",
        text: "Wirral Council revoked its older fragmented orders and replaced them with one Smoke Control Order covering the whole borough. That means Birkenhead properties fall within the same smoke-control rules as the rest of Wirral.",
        source: {
          label: "Wirral Council — smoke control",
          url: "https://www.wirral.gov.uk/environmental-problems/pollution-control/smoke-control-areas",
        },
      },
      {
        title: "Authorised fuel or a Defra-approved appliance is required",
        text: "In the Smoke Control Area, Wirral says smoke must not be released from a chimney and only authorised fuel can be burned unless the appliance is Defra approved. Give the heating engineer the exact stove, boiler or fireplace specification before planning solid-fuel work.",
        source: {
          label: "Wirral Council — smoke control commonly asked questions",
          url: "https://www.wirral.gov.uk/environmental-problems/pollution-control/smoke-control-areas/smoke-control-commonly-asked-questions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Birkenhead by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the appliance details before asking for a price",
    sideCopy: "A combi-boiler fault in Rock Ferry, radiator balancing in Prenton and a planned stove installation in Oxton are different jobs. Include make, model, age and symptoms where known.",
    noteLead: "Do not treat every heating job as a generic boiler callout.",
    noteText: "Fuel type, controls, cylinder setup, system pressure, existing pipework and whether the property has any heat at all can change the engineer and visit required.",
  },
  faq: [
    ["How much does a heating engineer cost in Birkenhead?", "Cost depends on diagnosis, system type, parts, access, urgency and whether the job is repair, servicing or installation."],
    ["Is Birkenhead in a Smoke Control Area?", "Yes. Wirral Council says one Smoke Control Area has covered the whole borough since 1 August 2025."],
    ["Can I burn ordinary wood in an open fireplace in Birkenhead?", "Not normally. In a smoke control area you must use authorised fuel unless you are using an exempt Defra-approved appliance."],
    ["Can I post a no-heating or no-hot-water fault?", "Yes. Describe the symptoms, boiler or appliance details and whether the issue is intermittent or complete."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Birkenhead?",
    copy: "Describe the heating system and problem once, then compare interested Birkenhead heating engineers and their quotes.",
    buttonLabel: "Get Birkenhead heating quotes",
  },
});
