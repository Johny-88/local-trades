import { makeBoltonProfile } from "./boltonProfileBase";

export const locksmithsBolton = makeBoltonProfile("locksmiths", {
  heroCopy: "Locked out, replacing locks or improving door security in Bolton? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Bolton?",
    copy: "Enter the postcode, door material, lock type and problem. Add photos where possible and say whether the job is an emergency lockout, failed mechanism, key issue or planned security upgrade.",
  },
  localContext: {
    eyebrow: "Bolton home-security guidance",
    title: "Greater Manchester Police recommends security-accredited doors and correctly sized locks",
    intro: "For planned lock upgrades, the cheapest replacement is not always the best security improvement. Greater Manchester Police advises checking the whole door, frame, hinges and lock specification rather than treating the cylinder alone as the security system.",
    items: [
      {
        title: "PAS 24:2022 is a useful benchmark for new doors",
        text: "Greater Manchester Police recommends security-accredited products for new doors and specifically points householders to PAS 24:2022. If a locksmith is replacing more than the lock, ask what security standard the complete door set meets.",
        source: {
          label: "Greater Manchester Police — door security",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Protruding euro cylinders can be vulnerable",
        text: "GMP advises that euro-profile locks which protrude from the outside of a uPVC door should be changed to a shorter lock that cannot be snapped off as easily. Give the locksmith a clear photo of the exterior handle and cylinder before the visit if possible.",
        source: {
          label: "Greater Manchester Police — door security",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Bolton by postcode, lock type and urgency. Example areas include:",
    sideTitle: "A clear photo can prevent the wrong parts arriving",
    sideCopy: "A failed multipoint mechanism in Horwich, a nightlatch in Farnworth and a snapped key in Heaton can need very different parts and tools. Photograph the lock edge, handles and cylinder where safe to do so.",
    noteLead: "Emergency and planned security work are different jobs.",
    noteText: "For a lockout, explain whether anyone is vulnerable or the property is unsecured. For an upgrade, ask about the door, frame and lock standard rather than only the cheapest cylinder.",
  },
  faq: [
    ["How much does a locksmith cost in Bolton?", "Price depends on urgency, time of day, lock type, parts and whether the door mechanism or frame also needs repair. Ask for the likely call-out and parts basis before attendance."],
    ["What door-security standard does GMP recommend?", "For new doors, Greater Manchester Police points householders toward security-accredited products tested to PAS 24:2022."],
    ["Should a euro cylinder stick out beyond the handle?", "GMP warns that protruding euro-profile locks can be vulnerable and suggests asking a locksmith about a correctly sized replacement."],
    ["Can I post a non-emergency lock upgrade?", "Yes. Planned lock changes, door-security improvements and mechanism repairs can be posted as well as emergency lockouts."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Bolton?",
    copy: "Describe the lock, door and urgency once, then compare interested Bolton locksmiths and their quotes.",
    buttonLabel: "Get Bolton locksmith quotes",
  },
});

export const pestControllersBolton = makeBoltonProfile("pest-controllers", {
  heroCopy: "Need pest control in Bolton for rats, mice, wasps, insects or another infestation? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Bolton?",
    copy: "Enter the postcode, pest type if known, affected rooms or outdoor areas and any signs such as droppings, damage, nests or noises. Mention children, pets and previous treatments so suitable Bolton pest controllers can assess the job safely.",
  },
  localContext: {
    eyebrow: "Bolton council pest service",
    title: "Bolton Council provides its own pest-control service, including free rat and mouse treatment for some residents",
    intro: "Before paying privately, it is worth checking whether the council service covers the pest and occupancy type. Bolton's current scheme distinguishes owner-occupiers and private renters from housing-association and social-housing tenants.",
    items: [
      {
        title: "Rat and mouse treatment is free for eligible owner-occupiers and private renters",
        text: "Bolton Council says residents who own or privately rent their property can receive one free rat or mouse treatment within a three-month period, consisting of an initial treatment and one follow-up appointment.",
        source: {
          label: "Bolton Council — rats and mice pest control",
          url: "https://www.bolton.gov.uk/animals-pests/pest-control/2",
        },
      },
      {
        title: "The council also treats a wider range of pests for a fee",
        text: "Bolton's pest-control service lists treatments or surveys for pests including ants, wasps, fleas, squirrels, bed bugs and cockroaches. Housing-association and social-housing tenants are told to contact their housing provider for rat or mouse incidents.",
        source: {
          label: "Bolton Council — domestic pest-control fees",
          url: "https://www.bolton.gov.uk/animals-pests/pest-control/3",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Bolton by postcode, pest type and infestation level. Example areas include:",
    sideTitle: "Describe evidence, not just the suspected pest",
    sideCopy: "Scratching in a loft in Blackrod, droppings in a kitchen in Little Lever and a wasp nest in Westhoughton need different inspection and treatment. State where signs appear, when they are noticed and whether neighbouring properties are affected.",
    noteLead: "Do not hide previous treatment attempts.",
    noteText: "Tell the professional what bait, spray, traps or proofing have already been used. That helps them avoid duplicated or unsafe treatment and focus on the source of the problem.",
  },
  faq: [
    ["How much does pest control cost in Bolton?", "It depends on the pest, property, infestation size, number of visits and proofing required. Bolton Council also offers some treatments directly, including free rat and mouse treatment for eligible residents."],
    ["Does Bolton Council treat rats and mice for free?", "For owner-occupiers and private renters, the council says one treatment within a three-month period is free and includes an initial visit plus one follow-up."],
    ["What if I am a housing-association tenant?", "Bolton Council tells housing-association and social-housing tenants to contact their housing provider for rat and mouse incidents."],
    ["Should I mention pets and children?", "Yes. Pest controllers need to know about occupants and pets so they can choose safe treatment and placement methods."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Bolton?",
    copy: "Describe the pest signs and affected areas once, then compare interested Bolton pest controllers and their quotes.",
    buttonLabel: "Get Bolton pest-control quotes",
  },
});
