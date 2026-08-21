import { makeBristolProfile } from "./bristolProfileBase";

export const bathroomSpecialistsBristol = makeBristolProfile("bathroom-specialists", {
  heroCopy: "Planning a new bathroom, shower room or refurbishment in Bristol? Describe the room, fittings and finish once, then compare bathroom specialists interested in the job.",
  answer: {
    title: "Looking for a bathroom specialist near you in Bristol?",
    copy: "Enter the postcode, room size and whether you are keeping or changing the layout. Include sanitaryware, shower, tiling and ventilation requirements so suitable Bristol bathroom specialists can judge the full installation scope.",
  },
  localContext: {
    eyebrow: "Bristol bathroom context",
    title: "Waterproofing, ventilation and approval checks matter before the final finish",
    intro: "Bristol's housing guidance links failed wet-area finishes with penetrating damp, while the council also lists bathroom improvements among work that may need Building Regulations consideration.",
    items: [
      {
        title: "Failed grout and sealant can let water into the building fabric",
        text: "Bristol City Council's private-renting guide says penetrating damp can be caused by damaged areas around sinks, showers and baths, including cracked grouting and worn-out sealant. A bathroom quote should therefore cover preparation, waterproofing and sealing rather than only visible tiles and fittings.",
        source: {
          label: "Bristol City Council — Private Renting in Bristol",
          url: "https://www.bristol.gov.uk/files/documents/8548-final-private-housing-service-tenant-guide/file",
        },
      },
      {
        title: "Bathroom improvements can involve Building Regulations",
        text: "Bristol City Council says Building Regulations apply to most building work and specifically lists home improvements such as a bathroom among projects that may require approval. Layout changes, ventilation, drainage and electrical work can all alter what needs to be checked.",
        source: {
          label: "Bristol City Council — approvals for building work",
          url: "https://www.bristol.gov.uk/residents/planning-and-building-regulations/check-what-approval-you-need-for-your-building-work",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Bathroom specialists may cover Bristol by postcode and project size. Example areas include:",
    sideTitle: "List the whole room scope before comparing prices",
    sideCopy: "Strip-out, plumbing changes, electrics, ventilation, waterproofing, tiling, flooring, decorating and waste can make two bathroom quotes look similar when they actually include very different work.",
    noteLead: "Agree who coordinates specialist work.",
    noteText: "Electrical and other regulated work should be carried out by appropriately competent professionals, and the quote should say who is arranging them.",
  },
  faq: [
    ["How much does a bathroom refurbishment cost in Bristol?", "The total depends heavily on room size, product choice, layout changes and how much plumbing, tiling, electrical and preparation work is required. Compare quotes for the same specification."],
    ["Why does waterproofing matter behind the tiles?", "Bristol's housing guidance identifies failed grout and sealant around baths and showers as possible routes for penetrating damp. A durable bathroom needs the underlying wet-area preparation to be right as well as the finish."],
    ["Do bathroom improvements need Building Regulations approval?", "They can. Bristol City Council lists bathrooms among home improvements that may need Building Regulations consideration, especially when services, ventilation or structure are being changed."],
    ["Should I buy the sanitaryware before getting quotes?", "You can, but share exact sizes and specifications. Product dimensions can affect pipe positions, framing, tiling and whether the proposed layout actually fits."],
    ["Do I have to hire a bathroom specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare bathroom specialists in Bristol?",
    copy: "Describe the room and full refurbishment scope once, then compare interested Bristol bathroom specialists and their quotes.",
    buttonLabel: "Get Bristol bathroom quotes",
  },
});

export const drainageSpecialistsBristol = makeBristolProfile("drainage-specialists", {
  heroCopy: "Blocked drain, recurring smell, slow waste pipe or external drainage problem in Bristol? Describe the symptoms and property once, then compare drainage specialists interested in the job.",
  answer: {
    title: "Looking for a drainage specialist near you in Bristol?",
    copy: "Enter the postcode and explain which fixtures or drains are affected, whether neighbours have the same problem and whether the issue is recurring. Suitable Bristol drainage specialists can then judge whether jetting, CCTV or repair work may be needed.",
  },
  localContext: {
    eyebrow: "Bristol drainage context",
    title: "First establish who owns the pipe, then consider the wider surface-water picture",
    intro: "Wessex Water is responsible for most public and shared sewers in the Bristol area, while householders remain responsible for private pipework. Bristol also has mapped areas of surface-water flood risk, which matters for external drainage design.",
    items: [
      {
        title: "Public and shared sewers are often Wessex Water's responsibility",
        text: "Wessex Water says it maintains the public sewer network beyond the property boundary and most shared sewer pipes connecting two or more properties. Homeowners are usually responsible for pipes serving only their property up to the boundary or the point where they join shared pipework, whichever comes first.",
        source: {
          label: "Wessex Water — sewer pipe responsibility",
          url: "https://www.wessexwater.co.uk/your-wastewater/sewer-pipe-responsibility",
        },
      },
      {
        title: "Surface-water flood risk varies across Bristol",
        text: "Bristol City Council's planning evidence includes citywide surface-water flood-risk mapping, and its drainage guidance says surface-water management should be considered early so runoff does not increase flood risk elsewhere. For persistent external flooding, the solution may need to address levels and surface-water routes rather than only clearing a pipe.",
        source: {
          label: "Bristol City Council — flood risk and drainage",
          url: "https://www.bristol.gov.uk/residents/planning-and-building-regulations/planning-policy-and-guidance/flood-risk-and-drainage-for-developers",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Drainage specialists may cover Bristol by postcode and urgency. Example areas include:",
    sideTitle: "Describe exactly where the water backs up",
    sideCopy: "Say whether toilets, sinks, gullies or external drains are affected and whether the problem happens after rain. If neighbours have the same symptoms, mention that too because it can help locate the problem.",
    noteLead: "Do not pay for private work on a public sewer without checking.",
    noteText: "If the blockage appears to be on Wessex Water's network, report it to the utility first; private contractors are normally for pipework that remains the property owner's responsibility.",
  },
  faq: [
    ["Who is responsible for a blocked drain in Bristol?", "It depends where the blockage is. Wessex Water says it maintains public sewers and most shared sewer pipes, while homeowners are usually responsible for private pipework serving only their property."],
    ["How can I tell if the blockage is on the public sewer?", "If neighbours have similar symptoms, that can indicate a shared or public problem. Wessex Water recommends checking who else is affected and contacting it if the blockage appears to be on its network."],
    ["When is a CCTV drain survey useful?", "A survey can be useful for recurring blockages, suspected damage, root ingress or before committing to excavation, because it can identify the location and type of defect."],
    ["Does Bristol have surface-water flood-risk areas?", "Yes. Bristol City Council publishes surface-water flood-risk mapping and advises that drainage should be designed so runoff does not worsen flooding elsewhere."],
    ["Do I have to hire a drainage specialist who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare drainage specialists in Bristol?",
    copy: "Describe the blockage or drainage symptoms once, then compare interested Bristol drainage specialists and their proposed solutions.",
    buttonLabel: "Get Bristol drainage quotes",
  },
});
