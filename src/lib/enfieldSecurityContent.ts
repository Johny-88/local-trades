import { makeEnfieldProfile } from "./enfieldProfileBase";

export const locksmithsEnfield = makeEnfieldProfile("locksmiths", {
  heroCopy: "Locked out, need a lock changed or want to improve home security in Enfield? Describe the door, lock and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Enfield?",
    copy: "Enter the postcode, door type, lock type if known and whether the job is an emergency, repair, replacement or security upgrade. Photos can help suitable Enfield locksmiths identify likely parts before travelling.",
  },
  localContext: {
    eyebrow: "Met Police lock advice for Enfield homes",
    title: "For euro-cylinder replacements, the Metropolitan Police recommends TS007 3-star rated locks",
    intro: "A lock change is not only about making the key turn again. The Metropolitan Police advises London residents to secure doors and windows properly and highlights standards intended to resist common attack methods.",
    items: [
      {
        title: "Met Police advice says to choose a TS007 3-star euro cylinder",
        text: "The Metropolitan Police recommends a 3-star rated euro cylinder meeting TS007 when changing this type of lock. It says the standard helps protect against common methods including lock snapping, drilling and bumping.",
        source: {
          label: "Metropolitan Police — door and window lock advice",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "Multi-point doors still need the final lock action",
        text: "Met Police guidance notes that modern multi-point uPVC doors rely on the user lifting the handle, turning the key and removing it. When a door is being repaired, ask the locksmith to check the full mechanism rather than only the cylinder.",
        source: {
          label: "Metropolitan Police — door and window lock advice",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Enfield by postcode, lock type and urgency. Example areas include:",
    sideTitle: "A clear photo can save an unnecessary first visit",
    sideCopy: "A snapped euro cylinder in Ponders End, a night latch in Southgate and a multi-point uPVC mechanism in Enfield Town may require different parts. Send photos of the lock face, door edge and handles if safe to do so.",
    noteLead: "Ask what is actually being replaced.",
    noteText: "Cylinder, gearbox, handles, keeps and the complete multi-point strip are different components. A quote should state the part and security standard being supplied.",
  },
  faq: [
    ["How much does a locksmith cost in Enfield?", "Pricing depends on urgency, travel, lock type, required parts, time on site and whether the job is entry, repair or replacement."],
    ["What euro-cylinder standard does the Metropolitan Police recommend?", "The Met recommends a 3-star rated euro cylinder that meets TS007 when changing this type of lock."],
    ["Can a locksmith repair a multi-point uPVC door?", "Many locksmiths work on multi-point mechanisms. Describe whether the handle lifts, the key turns and which locking points fail."],
    ["Can I post a non-emergency security upgrade?", "Yes. You can compare locksmiths for planned lock changes and security improvements as well as lockouts."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Enfield?",
    copy: "Describe the door, lock and urgency once, then compare interested Enfield locksmiths and their quotes.",
    buttonLabel: "Get Enfield locksmith quotes",
  },
});

export const pestControllersEnfield = makeEnfieldProfile("pest-controllers", {
  heroCopy: "Found rats, mice, bed bugs, cockroaches, wasps or another pest problem in Enfield? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Enfield?",
    copy: "Enter the postcode, pest if known, property type and signs such as droppings, bites, nests, noises or sightings. Mention children, pets, food premises and previous treatments so suitable Enfield pest controllers can assess the job.",
  },
  localContext: {
    eyebrow: "Enfield pest-control scope",
    title: "Enfield Council lists the pests its local service treats — and explicitly excludes several others",
    intro: "Correct identification matters because treatment, proofing and follow-up differ by species. Enfield Council publishes a useful local list of pests it treats and pests it does not.",
    items: [
      {
        title: "The council treatment list includes rodents, bed bugs and cockroaches",
        text: "Enfield Council lists rats and mice, bed bugs, cockroaches, fleas, red or pharaoh ants, wasps, pigeons and squirrels among the pests its service treats. Use sightings and photos where possible rather than guessing the species.",
        source: {
          label: "Enfield Council — estate operation services, pest control",
          url: "https://www.enfield.gov.uk/services/housing/council-housing/estate-operation-services",
        },
      },
      {
        title: "Foxes are not treated as a pest-control removal job by the council",
        text: "Enfield separately explains that foxes are classed as wild animals rather than vermin and the council does not remove them from private or public property. The right response depends on the animal involved.",
        source: {
          label: "Enfield Council — foxes",
          url: "https://www.enfield.gov.uk/services/environment/foxes",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Enfield by postcode, pest type and treatment requirements. Example areas include:",
    sideTitle: "Describe evidence, not only the pest name",
    sideCopy: "Scratching in a loft in Winchmore Hill, droppings in Edmonton and a wasp nest in Palmers Green need different inspections. State where signs appear, when they started and whether treatment has already been attempted.",
    noteLead: "Proofing can be as important as treatment.",
    noteText: "Gaps around pipes, damaged vents, food sources and shared drainage routes can allow repeat infestations. Ask whether the quote includes identifying likely entry points and follow-up visits.",
  },
  faq: [
    ["How much does pest control cost in Enfield?", "Cost varies by species, property size, infestation level, treatment method, number of visits and proofing required."],
    ["Which pests does Enfield Council say its service treats?", "The council lists rats and mice, bed bugs, cockroaches, fleas, red or pharaoh ants, wasps, pigeons and squirrels."],
    ["Will Enfield Council remove foxes?", "No. Enfield Council says foxes are wild animals rather than pests and it does not remove them from private or public property."],
    ["Should I identify the pest before posting?", "Give your best description and evidence, but do not guess if unsure. Photos, droppings, noises, bite patterns and the location can help a professional identify it."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Enfield?",
    copy: "Describe the pest signs and property once, then compare interested Enfield pest controllers and their quotes.",
    buttonLabel: "Get Enfield pest-control quotes",
  },
});
