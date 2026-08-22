import { makeDudleyProfile } from "./dudleyProfileBase";

export const locksmithsDudley = makeDudleyProfile("locksmiths", {
  heroCopy: "Locked out or need locks, doors or home security upgraded in Dudley? Describe the door or window type, the problem and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Dudley?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing cylinders after a move or upgrading door and window security. Add photos where useful so suitable Dudley locksmiths can assess the hardware before attending.",
  },
  localContext: {
    eyebrow: "Dudley home-security guidance",
    title: "West Midlands Police recommends checking the whole door and window assembly, not just the lock",
    intro: "For a lasting security upgrade, the cylinder, multipoint mechanism, frame, hinges and glazing can all matter. West Midlands Police guidance is useful when comparing an emergency repair with a more permanent upgrade.",
    items: [
      {
        title: "New doors should use security-accredited products",
        text: "West Midlands Police recommends robust doors, reinforced frames and approved locks and hinges, and identifies PAS 24:2022 as a good standard for new security-accredited doors. It also warns that protruding euro-profile cylinders can be vulnerable to snapping.",
        source: {
          label: "West Midlands Police — door security",
          url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Accessible windows need appropriate locks and glazing",
        text: "Police guidance recommends suitable key-operated locks or sash stops for accessible windows, opening restrictors where appropriate and laminated glass or security film for vulnerable glazing. Replacement windows should also be considered against recognised security standards.",
        source: {
          label: "West Midlands Police — window security",
          url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Dudley by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Describe the actual door, frame and lock before asking for a price",
    sideCopy: "A failed euro cylinder in Netherton, a timber front door in Sedgley and a patio-door problem in Coseley may need different parts and labour. Photos of the lock face, handles and door edge can help.",
    noteLead: "A new cylinder alone does not strengthen a weak frame or failed mechanism.",
    noteText: "Ask whether the proposed repair addresses the frame, hinges, cylinder, multipoint mechanism or glazing as needed, and whether replacement hardware meets an appropriate recognised standard.",
  },
  faq: [
    ["How much does a locksmith cost in Dudley?", "Cost depends on urgency, time of day, lock type, parts and whether the job is entry, repair or a security upgrade. Ask for the call-out and parts basis before agreeing."],
    ["What security standard should I ask about for a new door?", "West Midlands Police identifies PAS 24:2022 as a good standard for security-accredited replacement doors."],
    ["Can a locksmith upgrade uPVC door security?", "Yes. Depending on the fault, work may involve the cylinder, multipoint mechanism, handles, keeps or alignment rather than replacing the whole door."],
    ["Should ground-floor windows have locks?", "Police guidance recommends suitable locks or sash stops for accessible windows, alongside stronger glazing or security film where appropriate."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Dudley?",
    copy: "Describe the lock, door or window problem once, then compare interested Dudley locksmiths and their quotes.",
    buttonLabel: "Get Dudley locksmith quotes",
  },
});

export const pestControllersDudley = makeDudleyProfile("pest-controllers", {
  heroCopy: "Need pest control in Dudley for rats, mice, wasps, bed bugs or another infestation? Describe the signs, affected rooms and how long the problem has been present once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Dudley?",
    copy: "Enter the postcode, pest type if known and where you have seen activity. Mention droppings, noises, nests, bites, entry holes, loft or drain involvement and whether neighbouring properties are affected so suitable Dudley pest controllers can plan the inspection.",
  },
  localContext: {
    eyebrow: "Dudley pest-control options",
    title: "The council operates its own pest-control service, so private quotes can be compared against a local public option",
    intro: "Dudley Council treats several common household pests and also gives prevention advice. If you choose a private contractor instead, use the same evidence and treatment scope so the quotes are genuinely comparable.",
    items: [
      {
        title: "Dudley Council treats rats, mice, wasps and several other pests",
        text: "The council's pest-control service is a British Pest Control Association member and provides treatment for common household pests including rats, mice, wasps, ants, bed bugs, cockroaches and fleas, while some wildlife species are advice-only.",
        source: {
          label: "Dudley Council — pest control",
          url: "https://www.dudley.gov.uk/residents/environment/pest-control/",
        },
      },
      {
        title: "Evidence helps determine whether treatment is needed",
        text: "Dudley's guidance suggests looking for repeated rat sightings, holes or disturbed refuse, and for mice checking for droppings, chewing and noises. Give the contractor those signs rather than guessing the species from a single sighting.",
        source: {
          label: "Dudley Council — pest-control FAQs",
          url: "https://www.dudley.gov.uk/residents/environment/pest-control/pest-control-frequently-asked-questions-faqs/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Dudley by postcode, pest type and urgency. Example areas include:",
    sideTitle: "Describe evidence, not just the pest name",
    sideCopy: "Scratching in a loft in Upper Gornal, mouse droppings in Woodsetton and wasp activity around a Brierley Hill roofline need different inspections. Note where and when activity appears and whether you can see likely entry points.",
    noteLead: "Treatment without proofing can leave the route back in place.",
    noteText: "Ask whether the job includes follow-up visits, sealing entry points, advice on food or waste storage and any drain or building defects that need a separate trade.",
  },
  faq: [
    ["Does Dudley Council provide household pest control?", "Yes. The council offers treatment for several common household pests within Dudley borough, with fees and booking arrangements depending on the pest."],
    ["How much does pest control cost in Dudley?", "Cost depends on the pest, infestation size, treatment method, access, number of visits and whether proofing work is included."],
    ["What evidence should I include for rats or mice?", "Include repeated sightings, droppings, chewing, noises, holes and disturbed waste, plus the rooms or external areas affected."],
    ["Can I post a wasp-nest or bed-bug job?", "Yes. Give the suspected pest, affected area and any evidence so responding professionals can assess the likely treatment."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Dudley?",
    copy: "Describe the pest signs and affected areas once, then compare interested Dudley pest controllers and their quotes.",
    buttonLabel: "Get Dudley pest-control quotes",
  },
});
