import { makeEnfieldProfile } from "./enfieldProfileBase";

export const tilersEnfield = makeEnfieldProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Enfield? Describe the room, surface condition, tile type, approximate area and finish once, then compare tilers who cover your postcode.",
  answer: {
    title: "Looking for a tiler near you in Enfield?",
    copy: "Share the room dimensions, tile size and material, existing surface, pattern, trims and whether old tiles need removing. Suitable Enfield tilers can then price preparation and fitting against the same brief.",
  },
  localContext: {
    eyebrow: "Enfield alterations and Building Control",
    title: "A tiling job can sit inside a larger alteration that needs Building Control even when the tiles themselves do not",
    intro: "Straightforward retiling is usually a finish rather than a structural project, but bathrooms, kitchens and floor rebuilds can include drainage, structural or other building work. Enfield Council separates Building Control approval from planning permission.",
    items: [
      {
        title: "Building Control and planning permission are different approvals",
        text: "Enfield Council says building control is different from planning permission and a project may need both. If your tiling forms part of a larger alteration, establish which approvals apply before covering work that may need inspection.",
        source: {
          label: "Enfield Council — building control applications",
          url: "https://www.enfield.gov.uk/services/planning/building-control/building-control-applications",
        },
      },
      {
        title: "Full Plans can require drawings, specifications and calculations",
        text: "For work using the Full Plans route, Enfield lists plans, relevant drawings, material or construction specifications and calculations where needed. Give your tiler the wider project specification so the finished surfaces match the approved build-up.",
        source: {
          label: "Enfield Council — building control applications",
          url: "https://www.enfield.gov.uk/services/planning/building-control/building-control-applications",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Enfield by postcode, project size and tile type. Example areas include:",
    sideTitle: "Preparation usually matters more than the postcode",
    sideCopy: "A splashback in Palmers Green, a bathroom floor in Enfield Lock and a large-format tiled kitchen in Winchmore Hill can require very different levelling, waterproofing and cutting time.",
    noteLead: "Describe what is underneath the tiles.",
    noteText: "Loose boards, cracked screed, old adhesive, uneven walls and wet-area tanking can materially change the job. Photos of the existing surface make quotes more comparable.",
  },
  faq: [
    ["How much does a tiler cost in Enfield?", "Pricing depends on area, tile material and size, pattern, preparation, access, removal and finishing details. Compare like-for-like scopes."],
    ["Do I need Building Control just to replace tiles?", "Simple like-for-like tiling is normally a finishing job, but a larger alteration involving structure, drainage or other regulated work may require Building Control."],
    ["Should I buy tiles before choosing a tiler?", "You can, but confirm quantities, wastage, trims, adhesive and grout requirements first, especially for patterned or large-format tiles."],
    ["Can I post a small splashback job?", "Yes. Small repairs and splashbacks can be posted alongside complete bathroom, kitchen and floor tiling jobs."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Enfield?",
    copy: "Describe the surfaces, tile choice and preparation once, then compare interested Enfield tilers and their quotes.",
    buttonLabel: "Get Enfield tiling quotes",
  },
});

export const heatingEngineersEnfield = makeEnfieldProfile("heating-engineers", {
  heroCopy: "Need a heating engineer in Enfield for a boiler, radiator, heating fault or system upgrade? Describe the system, symptoms and timing once, then compare professionals who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Enfield?",
    copy: "Enter the postcode, heating type, boiler or appliance details and the problem. Mention loss of heat or hot water, unusual pressure, leaks, radiator issues and any planned changes so suitable Enfield heating engineers can assess the same brief.",
  },
  localContext: {
    eyebrow: "Enfield smoke-control rules",
    title: "The whole borough is a Smoke Control Area, which matters for solid-fuel heating choices",
    intro: "Most household heating jobs involve gas, electricity or heat pumps, but solid-fuel stoves and burners have an extra local consideration. Enfield Council states that the whole borough is a smoke control area.",
    items: [
      {
        title: "The whole borough of Enfield is a smoke control area",
        text: "Enfield Council says only smokeless fuel can be burned in fireplaces within the borough unless an exempt appliance, such as an approved stove or burner, is being used. Check the appliance and fuel before planning solid-fuel work.",
        source: {
          label: "Enfield Council — pollution and smoke control",
          url: "https://www.enfield.gov.uk/services/environment/pollution",
        },
      },
      {
        title: "Smoke-control rules are separate from general heating competence",
        text: "A compliant fuel or exempt appliance does not replace the need for the correct qualified installer and any other approvals that apply to the work. Give the engineer the exact appliance and proposed fuel rather than describing it only as a stove.",
        source: {
          label: "Enfield Council — pollution and smoke control",
          url: "https://www.enfield.gov.uk/services/environment/pollution",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Enfield by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the appliance details before asking for a price",
    sideCopy: "A combi-boiler fault in Edmonton, radiator balancing in Bush Hill Park and a planned stove installation near Enfield Town are different jobs. Include make, model, age and symptoms where known.",
    noteLead: "Do not treat every heating job as a generic boiler callout.",
    noteText: "Fuel type, controls, cylinder setup, system pressure, existing pipework and whether the property has any heat at all can change the engineer and visit required.",
  },
  faq: [
    ["How much does a heating engineer cost in Enfield?", "Cost depends on diagnosis, system type, parts, access, urgency and whether the job is repair, servicing or installation."],
    ["Is Enfield a Smoke Control Area?", "Yes. Enfield Council states that the whole borough is a smoke control area."],
    ["Can I burn ordinary fuel in a fireplace in Enfield?", "Enfield says only smokeless fuel may be burned in fireplaces unless an exempt appliance is being used."],
    ["Can I post a no-heating or no-hot-water fault?", "Yes. Describe the symptoms, boiler or appliance details and whether the issue is intermittent or complete."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Enfield?",
    copy: "Describe the heating system and problem once, then compare interested Enfield heating engineers and their quotes.",
    buttonLabel: "Get Enfield heating quotes",
  },
});
