import { makeSolihullProfile } from "./solihullProfileBase";

export const locksmithsSolihull = makeSolihullProfile("locksmiths", {
  heroCopy: "Locked out or need locks, doors or window security upgraded in Solihull? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Solihull?",
    copy: "Enter the postcode and explain whether the job is an emergency lockout, failed lock, cylinder change, new hardware or wider security upgrade. Add door and lock photos where safe so suitable Solihull locksmiths can judge the parts and urgency.",
  },
  localContext: {
    eyebrow: "Solihull home-security context",
    title: "West Midlands Police recommends accredited doors, windows and locks rather than judging security by appearance alone",
    intro: "Police guidance for the West Midlands recommends security-accredited replacement products and specifically points homeowners toward PAS 24:2022 for new doors and windows. That gives Solihull homeowners a concrete standard to discuss with a locksmith rather than relying only on brand names.",
    items: [
      {
        title: "New doors should use security-accredited products tested to recognised standards",
        text: "West Midlands Police says a new door should use security-accredited products tested to British standards and tells homeowners to discuss PAS 24:2022 with their locksmith. It also highlights issues such as protruding euro cylinders, weak frames and vulnerable sliding doors.",
        source: {
          label: "West Midlands Police — door security",
          url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Accessible windows need more than a basic latch",
        text: "West Midlands Police recommends measures such as laminated glass or security film, key-operated locks, sash stops and suitable opening restrictors for accessible windows. For replacement windows, it says PAS 24:2022 is a good security standard to consider.",
        source: {
          label: "West Midlands Police — window security",
          url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Solihull by postcode, urgency and lock type. Example areas include:",
    sideTitle: "Photograph the lock and door before buying parts",
    sideCopy: "A failed multipoint uPVC mechanism, mortice lock, euro cylinder and communal entrance need different hardware. Clear photos help reduce guesswork before attendance.",
    noteLead: "Ask what standard the replacement meets.",
    noteText: "For a security upgrade, compare the specification of the lock, cylinder, door or window set as well as the labour price.",
  },
  faq: [
    ["How much does a locksmith cost in Solihull?", "Cost depends on urgency, time of attendance, lock type, parts and whether the door mechanism or frame also needs repair."],
    ["What standard should I ask about for a new door?", "West Midlands Police recommends security-accredited products and specifically points homeowners toward PAS 24:2022 for new doors."],
    ["Can a locksmith improve uPVC door security?", "Yes. Depending on the problem, work can include cylinders, multipoint mechanisms, handles, keeps and frame reinforcement."],
    ["Can I post a non-emergency lock upgrade?", "Yes. The category covers planned security upgrades as well as urgent lockouts and failed locks."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Solihull?",
    copy: "Describe the lock, door and urgency once, then compare interested Solihull locksmiths and their quotes.",
    buttonLabel: "Get Solihull locksmith quotes",
  },
});

export const pestControllersSolihull = makeSolihullProfile("pest-controllers", {
  heroCopy: "Need help with rats, mice, wasps, bedbugs or another pest in Solihull? Describe what you have seen and where once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Solihull?",
    copy: "Enter the postcode, pest if known, affected rooms or outdoor areas and how long the problem has been present. Add photos of droppings, damage or insects where useful so suitable Solihull pest controllers can judge the likely treatment and follow-up.",
  },
  localContext: {
    eyebrow: "Solihull pest-control context",
    title: "The council-backed service covers a broad range of domestic pests and publishes current treatment expectations",
    intro: "Solihull's council pest service is managed by SCH Better Places and covers rats, mice, bedbugs, cockroaches, fleas, wasps and other common pests. Its published service details are useful for homeowners comparing the scope of private treatment and follow-up visits.",
    items: [
      {
        title: "Solihull's council-backed service treats both rodents and common insect pests",
        text: "The council lists rats, mice, bedbugs, cockroaches, fleas, ants, wasps and hornets among the pests its partner service can treat. When posting a job, describe whether activity is indoors, outdoors or both and whether there are repeated sightings after previous treatment.",
        source: {
          label: "Solihull Council — pest control",
          url: "https://www.solihull.gov.uk/environment-and-animals/pest-control",
        },
      },
      {
        title: "Rodent treatment is normally a multi-visit process rather than a one-off spray",
        text: "The council's current charge schedule describes rat and mouse treatments as a call-out plus follow-up treatment and, where necessary, a final treatment. That is a useful reminder to compare pest-control quotes on inspection, proofing advice and follow-up as well as the first visit.",
        source: {
          label: "Solihull Council — pest control charges",
          url: "https://www.solihull.gov.uk/environment-and-animals/pest-control/pest-control-charges",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Solihull by postcode, pest and property type. Example areas include:",
    sideTitle: "Describe evidence, not just the suspected pest",
    sideCopy: "Droppings, gnawing, noises, entry holes, nest location and time of activity can be more useful than a guess at the species. Add photos where possible.",
    noteLead: "Ask what happens after the first visit.",
    noteText: "For recurring pests, compare inspection, treatment, follow-up and proofing recommendations rather than only the initial call-out price.",
  },
  faq: [
    ["Does Solihull Council offer pest control?", "Yes. The council's service is delivered by SCH Better Places and covers a range of rodents and insects."],
    ["How many visits might rat or mouse treatment need?", "The council's current service schedule describes rodent treatment as an initial call-out plus follow-up and, if necessary, a final treatment."],
    ["Can I post a wasp-nest job?", "Yes. Wasps and hornets are included within the pest-control category."],
    ["What if I do not know what the pest is?", "Describe the signs and upload clear photos. Solihull's own service also offers pest identification when the species is uncertain."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Solihull?",
    copy: "Describe the pest signs, affected areas and history once, then compare interested Solihull pest controllers and their quotes.",
    buttonLabel: "Get Solihull pest-control quotes",
  },
});
