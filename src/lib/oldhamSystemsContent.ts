import { makeOldhamProfile } from "./oldhamProfileBase";

export const tilersOldham = makeOldhamProfile("tilers", {
  heroCopy: "Planning wall or floor tiling in Oldham? Describe the rooms, approximate area, tile type, substrate and preparation once, then compare tilers who cover your postcode.",
  answer: {
    title: "Looking for a tiler near you in Oldham?",
    copy: "Enter the postcode, room dimensions or approximate square metres, tile size and material, current surface and whether removal, levelling, waterproofing or underfloor-heating preparation is required.",
  },
  localContext: {
    eyebrow: "Oldham tiling and renovation checks",
    title: "Bathroom and kitchen tiling can sit inside wider work that triggers Building Control and creates DIY waste",
    intro: "A simple tile replacement may be straightforward, but altering rooms, fittings or drainage changes the regulatory and waste scope. Oldham Council publishes separate guidance for alterations and household DIY waste.",
    items: [
      {
        title: "Internal alterations and additional fittings can require Building Regulations approval",
        text: "Oldham Council says internal alterations, installation of fittings and structural alterations are all likely to require Building Regulations approval. This matters when tiling forms part of a bigger bathroom, kitchen or room-remodelling project.",
        source: {
          label: "Oldham Council — alterations",
          url: "https://www.oldham.gov.uk/info/200412/apply_for_approval/912/alterations",
        },
      },
      {
        title: "Oldham's recycling centres accept household DIY waste",
        text: "Oldham Council says household waste and recycling centres can be used free of charge for normal household waste and DIY-project waste. Contractor-generated waste should be agreed separately as part of the quote.",
        source: {
          label: "Oldham Council — household waste and recycling centres",
          url: "https://www.oldham.gov.uk/info/200281/bins_rubbish_and_recycling/968/household_waste_and_recycling_centres",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tilers may cover Oldham by postcode, tile type and room. Example areas include:",
    sideTitle: "Describe preparation, not just the finished tiles",
    sideCopy: "A splashback in Lees, a bathroom in Royton and a large-format floor in Saddleworth can require completely different preparation. State the substrate, existing covering and whether levels or waterproofing need correction.",
    noteLead: "Poor preparation is usually more expensive than the tiles themselves.",
    noteText: "Ask each tiler to price removal, disposal, levelling, membranes, trims, grout and sealing on the same basis so quotes are genuinely comparable.",
  },
  faq: [
    ["How much does tiling cost in Oldham?", "Cost depends on tile size and material, layout, substrate condition, preparation, access and whether old finishes need removing."],
    ["Does replacing tiles always need Building Control approval?", "Not necessarily. But Oldham Council says internal alterations and installation of additional fittings can require approval, so wider bathroom or kitchen works should be checked."],
    ["Can household DIY tiles and rubble go to an Oldham recycling centre?", "Oldham Council says its household recycling centres accept waste from DIY projects. Check current site rules and quantities before travelling."],
    ["Should I tell the tiler about underfloor heating?", "Yes. It affects preparation, adhesives, movement joints and the installation sequence."],
    ["Do I have to hire a tiler who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tilers in Oldham?",
    copy: "Describe the surfaces, tiles and preparation once, then compare interested Oldham tilers and their quotes.",
    buttonLabel: "Get Oldham tiling quotes",
  },
});

export const heatingEngineersOldham = makeOldhamProfile("heating-engineers", {
  heroCopy: "Need boiler, radiator, heating-control, cylinder or heating-system work in Oldham? Describe the system, fault and property once, then compare heating engineers who cover your area.",
  answer: {
    title: "Looking for a heating engineer near you in Oldham?",
    copy: "Enter the postcode, current boiler or heating type, symptoms, property size and whether you need repair, replacement or a new installation. Mention any chimney, flue or solid-fuel element so the scope is clear.",
  },
  localContext: {
    eyebrow: "Oldham heating, smoke control and flues",
    title: "Smoke-control boundaries and Building Control rules can affect solid-fuel and flue work",
    intro: "Oldham Council publishes a smoke-control-order map and separate Building Control guidance for chimneys and flues. The exact address and appliance type therefore matter before changing a heating or solid-fuel system.",
    items: [
      {
        title: "Oldham has mapped Smoke Control Orders",
        text: "Oldham Council's web map shows the borough's Smoke Control Order boundaries and notes that some historic boundaries were digitised from paper orders. Check the exact property rather than assuming every Oldham address has the same status.",
        source: {
          label: "Oldham Council — Smoke Control Orders map",
          url: "https://map.oldham.gov.uk/map?name=Smoke+Control+Orders",
        },
      },
      {
        title: "Chimney and flue work can require Building Control approval",
        text: "Oldham Council says a new masonry chimney and removal or partial removal of a chimney breast require approval. Certain metal flue work can instead be self-certified where the installer belongs to an applicable competent-person scheme.",
        source: {
          label: "Oldham Council — chimneys and flues",
          url: "https://www.oldham.gov.uk/info/200412/apply_for_approval/905/chimneys_and_flues",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Heating engineers may cover Oldham by postcode, system type and urgency. Example areas include:",
    sideTitle: "Describe the system and any flue route",
    sideCopy: "A boiler fault in Chadderton, radiator changes in Shaw and a solid-fuel installation in Saddleworth are different jobs. Give appliance details, fuel type, controls, flue route and symptoms.",
    noteLead: "Do not treat a flue or chimney as an afterthought.",
    noteText: "If a replacement changes the flue position, chimney, ventilation or fuel type, make that clear before quoting so engineers can assess the complete installation.",
  },
  faq: [
    ["How much does a heating engineer cost in Oldham?", "Cost depends on the fault, appliance, parts, system condition, access and whether the job is repair, replacement or installation."],
    ["Is all of Oldham one Smoke Control Area?", "Do not assume that. Oldham Council provides a map of Smoke Control Orders and advises checking the mapped boundary for the address."],
    ["Can chimney or flue work need Building Control approval?", "Yes. Oldham Council lists several chimney and flue works that require approval, with competent-person self-certification available for some work."],
    ["Can I post a radiator or heating-controls job?", "Yes. Smaller heating jobs can be posted alongside boiler and full-system work."],
    ["Do I have to hire a heating engineer who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare heating engineers in Oldham?",
    copy: "Describe the heating system, fault and flue requirements once, then compare interested Oldham heating engineers and their quotes.",
    buttonLabel: "Get Oldham heating quotes",
  },
});
