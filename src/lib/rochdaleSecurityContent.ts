import { makeRochdaleProfile } from "./rochdaleProfileBase";

export const locksmithsRochdale = makeRochdaleProfile("locksmiths", {
  heroCopy: "Locked out or need locks, cylinders, handles or door-security work in Rochdale? Describe the door, lock type and problem once, then compare locksmiths who cover your postcode.",
  answer: {
    title: "Looking for a locksmith near you in Rochdale?",
    copy: "Enter the postcode, door or window type, lock problem and whether the job is an emergency, repair or security upgrade. Photos of the handle, cylinder and door edge can help suitable Rochdale locksmiths identify the hardware before attending.",
  },
  localContext: {
    eyebrow: "Rochdale lock and door security",
    title: "Greater Manchester Police recommends specific standards for replacement cylinders and new doors",
    intro: "A lock replacement is an opportunity to improve the whole entry point rather than simply fit the cheapest cylinder. GMP publishes current guidance for euro cylinders, multipoint doors and new security-accredited doors.",
    items: [
      {
        title: "GMP recommends 3-star TS007 euro cylinders when locks are changed",
        text: "Greater Manchester Police advises choosing a 3-star rated euro cylinder meeting TS007 standards. The guidance is intended to resist common attack methods including snapping, drilling and bumping.",
        source: {
          label: "Greater Manchester Police — door and window lock advice",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "Multipoint doors only secure properly when they are fully locked",
        text: "GMP's advice for modern multi-locking and uPVC doors is to lift the handle, lock the door and remove the key. For new doors, GMP also recommends security-accredited products tested to standards such as PAS 24:2022.",
        source: {
          label: "Greater Manchester Police — door security",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Rochdale by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Tell the locksmith what the door actually does",
    sideCopy: "A snapped euro cylinder in Middleton, a failed multipoint mechanism in Milnrow and a mortice-lock change in Rochdale need different parts and tools. Send clear photos where possible.",
    noteLead: "A cylinder is only one part of the door's security.",
    noteText: "Ask whether the quote covers the cylinder, handles, gearbox or multipoint mechanism, strike plates, frame adjustment and any security-standard upgrade you want.",
  },
  faq: [
    ["How much does a locksmith cost in Rochdale?", "Cost depends on urgency, time of attendance, lock type, parts, door condition and whether the job is opening, repair or replacement."],
    ["What euro-cylinder standard does Greater Manchester Police recommend?", "GMP recommends a 3-star rated euro cylinder meeting TS007 standards when changing this type of lock."],
    ["What does lift, lock and remove mean?", "For many multipoint and uPVC doors, GMP advises lifting the handle, locking the mechanism and removing the key so all locking points are engaged."],
    ["Should I mention if the door is uPVC or composite?", "Yes. The door construction, cylinder and multipoint mechanism determine the likely parts and repair method."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Rochdale?",
    copy: "Describe the lock, door and fault once, then compare interested Rochdale locksmiths and their quotes.",
    buttonLabel: "Get Rochdale locksmith quotes",
  },
});

export const pestControllersRochdale = makeRochdaleProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps, bed bugs, fleas or another pest problem in Rochdale? Describe the signs, location and property once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Rochdale?",
    copy: "Enter the postcode, pest or suspected pest, where activity has been seen and how long it has been happening. Mention lofts, drains, kitchens, gardens, wall cavities and any previous treatment so suitable Rochdale pest controllers can assess the likely scope.",
  },
  localContext: {
    eyebrow: "Rochdale pest treatment and proofing",
    title: "The council treats several common pests, while proofing gaps is part of preventing repeat mouse problems",
    intro: "Treatment alone may not solve an infestation if the entry route remains open. Rochdale Council currently offers domestic and commercial treatment for several pests and also publishes practical mouse-proofing advice.",
    items: [
      {
        title: "Rochdale Council currently treats rats, mice, cockroaches, fleas, bed bugs, ants and wasp nests",
        text: "The council's pest-control service covers those common domestic and commercial pests. When comparing private quotes, state the suspected species and whether you need identification, treatment, follow-up visits or proofing.",
        source: {
          label: "Rochdale Borough Council — pest control and treatment",
          url: "https://www.rochdale.gov.uk/pestcontrol",
        },
      },
      {
        title: "Mouse prevention includes sealing gaps around pipes and protecting ventilation openings",
        text: "Rochdale Council notes that mice can enter through very small gaps and recommends sealing openings around heating and water pipes and protecting air bricks or ventilation slots with suitable fine mesh.",
        source: {
          label: "Rochdale Borough Council — identify and control mice",
          url: "https://www.rochdale.gov.uk/pest-control-treatment/identify-control-mice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Rochdale by postcode, pest type and urgency. Example areas include:",
    sideTitle: "Describe evidence and access, not just the animal name",
    sideCopy: "Mice in a kitchen in Heywood, rat activity around drains in Castleton and a wasp nest in a Littleborough roof space need different access and treatment plans. Photos and exact locations help.",
    noteLead: "Ask what happens after the first treatment.",
    noteText: "Compare the number of visits, monitoring, proofing, bait or treatment method and any exclusions. Repeat infestations often come from unresolved entry points or food sources.",
  },
  faq: [
    ["How much does pest control cost in Rochdale?", "Cost varies by pest, infestation size, access, treatment method, number of visits and whether proofing or repair work is included."],
    ["Which pests does Rochdale Council treat?", "The council currently lists rats, mice, cockroaches, fleas, bed bugs, ants and wasp nests among its treatment services."],
    ["Can mice get in around pipework?", "Yes. Rochdale Council specifically recommends sealing gaps around heating and water pipes and protecting ventilation openings."],
    ["Should I tell a pest controller about previous treatment?", "Yes. Say what was used, where it was placed and whether activity stopped temporarily or continued."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Rochdale?",
    copy: "Describe the pest signs, access and previous treatment once, then compare interested Rochdale pest controllers and their quotes.",
    buttonLabel: "Get Rochdale pest-control quotes",
  },
});
