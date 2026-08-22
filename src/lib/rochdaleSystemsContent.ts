import { makeRochdaleProfile } from "./rochdaleProfileBase";

export const tilersRochdale = makeRochdaleProfile("tilers", {
  heroCopy: "Planning wall or floor tiling in Rochdale? Describe the rooms, approximate area, tile type, substrate and preparation once, then compare tilers who cover your postcode.",
  answer: {
    title: "Looking for a tiler near you in Rochdale?",
    copy: "Enter the postcode, room dimensions or approximate square metres, tile size and material, current surface and whether removal, levelling, waterproofing or underfloor-heating preparation is required.",
  },
  localContext: {
    eyebrow: "Rochdale tiling and renovation checks",
    title: "Bathroom and kitchen tiling can sit inside wider work that needs Building Regulations approval",
    intro: "Replacing tiles alone may be straightforward, but changing drainage, electrical work, fittings or the room layout can turn it into a regulated refurbishment. Rochdale Council lists several common home-improvement works that need approval.",
    items: [
      {
        title: "New drainage, waste appliances and some electrical work can require approval",
        text: "Rochdale Council lists installation of new waste appliances, new drainage and electrical works among common proposals requiring Building Regulations approval, unless an applicable competent-person route covers the work.",
        source: {
          label: "Rochdale Borough Council — work requiring Building Regulations approval",
          url: "https://www.rochdale.gov.uk/building-control-regulations/building-regulation-approval-requirements",
        },
      },
      {
        title: "Moisture problems should be fixed before new finishes hide them",
        text: "Rochdale Council says penetrating damp can come from leaking roofs, gutters or pipework, and that the source of rising damp must be treated before internal walls are repaired. That is relevant where tiles or plaster are failing because the substrate is still damp.",
        source: {
          label: "Rochdale Borough Council — damp, mould and condensation",
          url: "https://www.rochdale.gov.uk/housing/damp-mould-condensation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Rochdale by postcode, tile type and room. Example areas include:",
    sideTitle: "Describe preparation, not just the finished tiles",
    sideCopy: "A splashback in Middleton, a bathroom in Milnrow and a large-format floor in Norden can require completely different preparation. State the substrate, existing covering and whether levels, moisture or waterproofing need correction.",
    noteLead: "Poor preparation is usually more expensive than the tiles themselves.",
    noteText: "Ask each tiler to price removal, disposal, levelling, membranes, trims, grout and sealing on the same basis so quotes are genuinely comparable.",
  },
  faq: [
    ["How much does tiling cost in Rochdale?", "Cost depends on tile size and material, layout, substrate condition, preparation, access and whether old finishes need removing."],
    ["Does replacing tiles always need Building Control approval?", "Not necessarily, but wider bathroom or kitchen work involving new drainage, waste appliances or electrical work can require approval."],
    ["Should damp be fixed before retiling?", "Yes. Rochdale Council advises treating the source of damp rather than simply repairing or covering the affected internal finish."],
    ["Should I tell the tiler about underfloor heating?", "Yes. It affects preparation, adhesives, movement joints and the installation sequence."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Rochdale?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Rochdale tilers and their quotes.",
    buttonLabel: "Get Rochdale tiling quotes",
  },
});

export const heatingEngineersRochdale = makeRochdaleProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control, cylinder or heating-system work in Rochdale? Describe the system, fault and property once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Rochdale?",
    copy: "Enter the postcode, current boiler or heating type, symptoms, property size and whether you need repair, replacement or a new installation. Mention any chimney, flue or solid-fuel element so the scope is clear.",
  },
  localContext: {
    eyebrow: "Rochdale heating and smoke control",
    title: "Most occupied properties in the borough sit inside smoke-control areas, while heating installations can also trigger Building Regulations",
    intro: "The exact fuel, appliance and address matter in Rochdale. The council says most occupied properties are within smoke-control orders, while heating-appliance installation is also listed as work that may need Building Regulations approval.",
    items: [
      {
        title: "The majority of occupied properties are within Rochdale's smoke-control area",
        text: "Rochdale Council says the only settlements of more than two dwellings excluded are Red Lumb and Lanehead, with open moorland around Littleborough and Milnrow also outside. In controlled areas, authorised fuel or an exempt appliance is required.",
        source: {
          label: "Rochdale Borough Council — smoke control areas",
          url: "https://www.rochdale.gov.uk/environment-pests/smoke-control-areas",
        },
      },
      {
        title: "Heating-appliance installation can require Building Regulations approval",
        text: "Rochdale Council lists installation and fitting of heating appliances as work that may need approval, unless the work is carried out by a member of an applicable competent-person scheme.",
        source: {
          label: "Rochdale Borough Council — work requiring Building Regulations approval",
          url: "https://www.rochdale.gov.uk/building-control-regulations/building-regulation-approval-requirements",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Rochdale by postcode, system type and urgency. Example areas include:",
    sideTitle: "Give the engineer the fuel, appliance and flue details",
    sideCopy: "A boiler fault in Castleton, radiator changes in Heywood and a solid-fuel installation near Littleborough are different jobs. State the fuel type, controls, flue route and symptoms before comparing quotes.",
    noteLead: "Do not assume every Rochdale address has identical smoke-control status.",
    noteText: "If the project involves a stove, chimney or solid fuel, give the exact postcode and appliance details so the engineer can check the relevant restrictions and installation route.",
  },
  faq: [
    ["How much does a heating engineer cost in Rochdale?", "Cost depends on the fault, appliance, parts, system condition, access and whether the job is repair, replacement or installation."],
    ["Is Rochdale covered by smoke-control rules?", "Most occupied properties are. Rochdale Council lists limited exclusions including Red Lumb, Lanehead and open moorland around Littleborough and Milnrow."],
    ["Can heating work need Building Regulations approval?", "Yes. Rochdale Council lists heating-appliance installation as work that may need approval unless an applicable competent-person scheme covers it."],
    ["Can I post a radiator or heating-controls job?", "Yes. Smaller heating jobs can be posted alongside boiler and full-system work."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Rochdale?",
    copy: "Describe the heating system, fault and fuel requirements once, then compare interested Rochdale heating engineers and their quotes.",
    buttonLabel: "Get Rochdale heating quotes",
  },
});
