import { makeCroydonProfile } from "./croydonProfileBase";

export const locksmithsCroydon = makeCroydonProfile("locksmiths", {
  heroCopy: "Locked out or need locks, doors or window security upgraded in Croydon? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Croydon?",
    copy: "Enter the postcode and explain whether the job is an emergency lockout, failed lock, cylinder change, new hardware or wider security upgrade. Add door and lock photos where safe so suitable Croydon locksmiths can judge the parts and urgency.",
  },
  localContext: {
    eyebrow: "Croydon home-security context",
    title: "Metropolitan Police guidance points homeowners toward tested doors, cylinders and window security rather than appearance alone",
    intro: "Croydon is policed by the Metropolitan Police, whose home-security guidance recommends British-standard hardware and security-accredited replacement products. For planned upgrades, that gives homeowners a practical specification to discuss with a locksmith instead of comparing only brands and call-out prices.",
    items: [
      {
        title: "New doors should use security-accredited products tested to recognised standards",
        text: "Metropolitan Police guidance recommends security-accredited replacement doors and specifically points homeowners toward PAS 24:2022. It also highlights weak frames, exposed euro cylinders, letterboxes and vulnerable patio doors as issues worth assessing during a security upgrade.",
        source: {
          label: "Metropolitan Police — door security",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Accessible windows need appropriate locks and glazing as well",
        text: "Metropolitan Police guidance recommends measures such as laminated glass or security film, sash stops, key-operated locks and opening restrictors for accessible windows. For complete home-security work, ask the locksmith whether the quote covers the vulnerable window and door points rather than only the failed lock.",
        source: {
          label: "Metropolitan Police — window security",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Croydon by postcode, urgency and lock type. Example areas include:",
    sideTitle: "Photograph the lock and door before buying parts",
    sideCopy: "A failed multipoint uPVC mechanism, mortice lock, euro cylinder and communal entrance need different hardware. Clear photos help reduce guesswork before attendance.",
    noteLead: "Ask what standard the replacement meets.",
    noteText: "For a security upgrade, compare the specification of the lock, cylinder, door or window set as well as the labour price.",
  },
  faq: [
    ["How much does a locksmith cost in Croydon?", "Cost depends on urgency, time of attendance, lock type, parts and whether the door mechanism or frame also needs repair."],
    ["What standard should I ask about for a new door?", "Metropolitan Police guidance recommends security-accredited products and specifically points homeowners toward PAS 24:2022 for new doors."],
    ["Can a locksmith improve uPVC door security?", "Yes. Depending on the problem, work can include cylinders, multipoint mechanisms, handles, keeps and frame reinforcement."],
    ["Can I post a non-emergency lock upgrade?", "Yes. The category covers planned security upgrades as well as urgent lockouts and failed locks."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Croydon?",
    copy: "Describe the lock, door and urgency once, then compare interested Croydon locksmiths and their quotes.",
    buttonLabel: "Get Croydon locksmith quotes",
  },
});

export const pestControllersCroydon = makeCroydonProfile("pest-controllers", {
  heroCopy: "Need help with rats, mice, wasps, bedbugs or another pest in Croydon? Describe what you have seen and where once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Croydon?",
    copy: "Enter the postcode, pest if known, affected rooms or outdoor areas and how long the problem has been present. Add photos of droppings, damage or insects where useful so suitable Croydon pest controllers can judge the likely treatment and follow-up.",
  },
  localContext: {
    eyebrow: "Croydon pest-control context",
    title: "Croydon has a council-backed treatment service, but homeowners can still compare private contractors",
    intro: "Croydon Council works with Southwark Council as its pest-control contractor and offers treatment for rat infestations across residential properties as well as a range of other pests. Private tenants and owner-occupiers are charged, and the council explicitly says residents can choose other contractors instead.",
    items: [
      {
        title: "Croydon's service treats rats across residential properties and covers other common pests",
        text: "The council says it provides treatment for rat infestations whether the rats are inside or outside the home, alongside treatment for a range of other pests. When posting a job, describe the pest signs, rooms or external areas affected and whether activity is recurring after earlier treatment.",
        source: {
          label: "Croydon Council — pest control",
          url: "https://www.croydon.gov.uk/environment/animals-and-pest-control/pest-control",
        },
      },
      {
        title: "Private residents are not required to use the council's contractor",
        text: "Croydon Council states that private tenants and owner-occupiers pay for council-arranged treatment and do not have to use the council service. That makes it sensible to compare inspection, treatment, follow-up and proofing rather than judging a pest-control quote only on the first visit.",
        source: {
          label: "Croydon Council — treatment choices and charges",
          url: "https://www.croydon.gov.uk/environment/animals-and-pest-control/pest-control",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Croydon by postcode, pest and property type. Example areas include:",
    sideTitle: "Describe evidence, not just the suspected pest",
    sideCopy: "Droppings, gnawing, noises, entry holes, nest location and time of activity can be more useful than a guess at the species. Add photos where possible.",
    noteLead: "Ask what happens after the first visit.",
    noteText: "For recurring pests, compare inspection, treatment, follow-up and proofing recommendations rather than only the initial call-out price.",
  },
  faq: [
    ["Does Croydon Council offer pest control?", "Yes. Croydon works with Southwark Council as its pest-control contractor and offers residential treatment for rats and a range of other pests."],
    ["Do private tenants and homeowners have to use the council service?", "No. Croydon Council says private residents can choose other pest-control contractors, although council-arranged treatments are also available for a charge."],
    ["Can I post a wasp-nest or bedbug job?", "Yes. The pest-control category can be used for common domestic insects and rodents as well as other household pest problems."],
    ["What if I do not know what the pest is?", "Describe the signs and upload clear photos. A pest controller can often identify likely species from evidence and an inspection."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Croydon?",
    copy: "Describe the pest signs, affected areas and history once, then compare interested Croydon pest controllers and their quotes.",
    buttonLabel: "Get Croydon pest-control quotes",
  },
});
