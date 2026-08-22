import { makeLeicesterProfile } from "./leicesterProfileBase";

export const tilersLeicester = makeLeicesterProfile("tilers", {
  heroCopy: "Need wall or floor tiling in Leicester? Describe the room, tile type, surface condition and approximate area once, then compare tilers who cover your area.",
  answer: {
    title: "Looking for a tiler near you in Leicester?",
    copy: "Enter the postcode and describe the room, tile size, approximate square metres and substrate. Mention removal of old tiles, levelling, waterproofing or underfloor heating so suitable Leicester tilers can price the same scope.",
  },
  localContext: {
    eyebrow: "Leicester renovation context",
    title: "Tiling is often part of wider regulated bathroom or kitchen work",
    intro: "Tiling itself is usually straightforward, but the surrounding project may involve structural alteration, ventilation, drainage, electrical work or replacement windows. Leicester's Building Control guidance makes it worth separating decorative tiling from the wider regulated scope.",
    items: [
      {
        title: "Structural and many other alterations can need Building Regulations approval",
        text: "Leicester City Council's housing design guidance states that new build work, extensions and structural alterations generally require Building Regulations approval, while some reroofing, rendering, replacement-window and domestic-electrical work can also require approval.",
        source: {
          label: "Leicester City Council — achieving well-designed homes",
          url: "https://consultations.leicester.gov.uk/communications/urban-planning/user_uploads/achieving-well-designed-homes-2019.pdf",
        },
      },
      {
        title: "Business waste from renovation work must use the correct disposal route",
        text: "Leicester's recycling-centre guidance says business waste must go to a trade-waste facility rather than being treated as ordinary household waste. If old tiles, adhesive, boards or packaging are being removed, confirm who is responsible for lawful disposal.",
        source: {
          label: "Leicester City Council — recycling centres and business waste",
          url: "https://www.leicester.gov.uk/bins-waste-and-recycling/recycling-centres",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Leicester by postcode, tile type and project size. Example areas include:",
    sideTitle: "Describe the substrate, not just the finished tile",
    sideCopy: "A bathroom refurbishment in Clarendon Park, a kitchen in Evington and a period property in Stoneygate can involve different floors, walls, movement and preparation. Good quotes depend on knowing what the tile is being fixed to.",
    noteLead: "Waterproofing and preparation can dominate the job.",
    noteText: "Loose floors, damaged plaster, uneven screeds and wet-room tanking should be identified before comparing headline tiling rates.",
  },
  faq: [
    ["How much does a tiler cost in Leicester?", "Price depends on tile size, pattern, substrate condition, preparation, waterproofing, cuts and room complexity. Compare quotes for the same scope."],
    ["Does tiling itself need Building Regulations approval?", "Usually not on its own, but the wider bathroom or kitchen project can involve regulated structural, drainage, ventilation or electrical work."],
    ["Should old-tile removal be included in the quote?", "Only if specified. Removal, disposal, levelling and repairs can materially change the price."],
    ["Can I post a small splashback job?", "Yes. Small wall-tile jobs sit within the same Tilers category as full bathrooms and larger floor projects."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Leicester?",
    copy: "Describe the tiles, surfaces and preparation once, then compare interested Leicester tilers and their quotes.",
    buttonLabel: "Get Leicester tiling quotes",
  },
});

export const heatingEngineersLeicester = makeLeicesterProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-system or related work in Leicester? Describe the existing system and required outcome once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Leicester?",
    copy: "Enter the postcode and explain the boiler or heating system, symptoms and work required. Include make, model and photos where possible so suitable Leicester heating engineers can judge the job.",
  },
  localContext: {
    eyebrow: "Leicester heating and clean-air context",
    title: "The whole city is a smoke-control area",
    intro: "Leicester re-declared the entire city as one Smoke Control Area in 2018. That matters particularly where heating work includes a solid-fuel stove, fireplace or other combustion appliance rather than a normal gas-boiler repair.",
    items: [
      {
        title: "Leicester's Smoke Control Area covers the whole city",
        text: "Leicester City Council re-declared the whole city as a single Smoke Control Area from 1 June 2018. Homeowners considering wood or solid-fuel appliances should check the current authorised-fuel and exempt-appliance rules before choosing equipment.",
        source: {
          label: "Leicester City Council — single smoke control area",
          url: "https://consultations.leicester.gov.uk/communications/single-smoke-control-area/",
        },
      },
      {
        title: "Heating alterations can sit within Building Regulations",
        text: "Leicester's Building Control guidance covers building standards including boilers, chimneys, ventilation, energy conservation and related safety issues. Ask the engineer which certification or notification route applies to the exact installation.",
        source: {
          label: "Leicester City Council — achieving well-designed homes",
          url: "https://consultations.leicester.gov.uk/communications/urban-planning/user_uploads/achieving-well-designed-homes-2019.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Leicester by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the system details before the visit",
    sideCopy: "A boiler fault in Westcotes, a radiator upgrade in Knighton and heating work in a period Stoneygate property can involve different access, controls, flues and existing pipework.",
    noteLead: "Solid-fuel work needs an extra clean-air check.",
    noteText: "If the job involves a stove, fireplace or other solid-fuel appliance, confirm smoke-control compliance as well as installation requirements.",
  },
  faq: [
    ["How much does a heating engineer cost in Leicester?", "Cost depends on the fault or installation, appliance type, parts, system condition, access and whether certification work is included."],
    ["Is Leicester a smoke-control area?", "Yes. The whole city was re-declared as a single Smoke Control Area from 1 June 2018."],
    ["Can I install a wood-burning stove in Leicester?", "Potentially, but smoke-control rules apply and the appliance/fuel must meet the relevant requirements. Check before purchasing equipment."],
    ["Should I include the boiler make and model?", "Yes. Photos of the appliance, controls and fault codes can help engineers judge the likely job before attending."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Leicester?",
    copy: "Describe the system and required work once, then compare interested Leicester heating engineers and their quotes.",
    buttonLabel: "Get Leicester heating quotes",
  },
});
