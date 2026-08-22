import { makeBuryProfile } from "./buryProfileBase";

export const locksmithsBury = makeBuryProfile("locksmiths", {
  heroCopy: "Locked out, need a lock changed or want to improve home security in Bury? Describe the door, lock and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Bury?",
    copy: "Enter the postcode, door type, lock type if known and whether the job is an emergency, repair, replacement or security upgrade. Photos can help suitable Bury locksmiths identify likely parts before travelling.",
  },
  localContext: {
    eyebrow: "Greater Manchester Police lock advice",
    title: "For euro cylinders, GMP recommends a TS007 3-star rated replacement",
    intro: "A lock change is not only about making the key turn again. Greater Manchester Police highlights standards intended to resist common attack methods and advises households to treat doors and windows as the home's main points of entry.",
    items: [
      {
        title: "GMP recommends TS007 3-star euro cylinders",
        text: "Greater Manchester Police says that if you change a euro-cylinder lock, choose a 3-star rated cylinder meeting TS007. The standard is intended to resist common attacks including snapping, drilling and bumping.",
        source: {
          label: "Greater Manchester Police — door and window lock advice",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "New doors should use security-accredited products",
        text: "GMP's door-security guidance recommends security-accredited products for replacement doors and tells homeowners to discuss PAS 24:2022 with their locksmith. Ask what standard the quoted hardware or door actually meets.",
        source: {
          label: "Greater Manchester Police — door security",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Bury by postcode, lock type and urgency. Example areas include:",
    sideTitle: "A clear photo can save an unnecessary first visit",
    sideCopy: "A snapped euro cylinder in Fishpool, a night latch in Chesham and a multi-point uPVC mechanism in Brandlesholme may require different parts. Send photos of the lock face, door edge and handles if safe to do so.",
    noteLead: "Ask what is actually being replaced.",
    noteText: "Cylinder, gearbox, handles, keeps and the complete multi-point strip are different components. A quote should state the part and security standard being supplied.",
  },
  faq: [
    ["How much does a locksmith cost in Bury?", "Pricing depends on urgency, travel, lock type, required parts, time on site and whether the job is entry, repair or replacement."],
    ["What euro-cylinder standard does Greater Manchester Police recommend?", "GMP recommends a 3-star rated euro cylinder meeting TS007 when this type of lock is being changed."],
    ["Can a locksmith repair a multi-point uPVC door?", "Many locksmiths work on multi-point mechanisms. Describe whether the handle lifts, the key turns and which locking points fail."],
    ["Can I post a non-emergency security upgrade?", "Yes. You can compare locksmiths for planned lock changes and security improvements as well as lockouts."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Bury?",
    copy: "Describe the door, lock and urgency once, then compare interested Bury locksmiths and their quotes.",
    buttonLabel: "Get Bury locksmith quotes",
  },
});

export const pestControllersBury = makeBuryProfile("pest-controllers", {
  heroCopy: "Found rats, mice, bed bugs, cockroaches, wasps or another pest problem in Bury? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Bury?",
    copy: "Enter the postcode, pest if known, property type and signs such as droppings, bites, nests, noises or sightings. Mention children, pets, food premises and previous treatments so suitable Bury pest controllers can assess the job.",
  },
  localContext: {
    eyebrow: "Bury pest-control scope",
    title: "Bury Council publishes a clear list of pests its service treats — and pests it does not",
    intro: "Correct identification matters because treatment, proofing and follow-up differ by species. Bury Council's current domestic pest-control service provides a useful local benchmark for what is normally treated as a pest-control job.",
    items: [
      {
        title: "The council treatment list includes rodents, bed bugs, cockroaches and wasps",
        text: "Bury Council says its service can treat rats, mice, fleas, bedbugs, ants, cockroaches, flies, wasps and squirrels. Use sightings and photos where possible rather than guessing the species.",
        source: {
          label: "Bury Council — about our Pest Control Service",
          url: "https://www.bury.gov.uk/pests-pollution-and-food-hygiene/pests-pest-control-service/about-our-pest-control-service",
        },
      },
      {
        title: "Bees, bats, foxes and several other species are outside the council's domestic treatment list",
        text: "The same Bury Council guidance says its domestic service does not treat bats, bees, birds, foxes, mites, moles, moths, spiders and several other categories. The correct response depends on the species involved.",
        source: {
          label: "Bury Council — about our Pest Control Service",
          url: "https://www.bury.gov.uk/pests-pollution-and-food-hygiene/pests-pest-control-service/about-our-pest-control-service",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Bury by postcode, pest type and treatment requirements. Example areas include:",
    sideTitle: "Describe evidence, not only the pest name",
    sideCopy: "Scratching in a loft in Walmersley, droppings in Pimhole and a wasp nest in Elton need different inspections. State where signs appear, when they started and whether treatment has already been attempted.",
    noteLead: "Proofing can be as important as treatment.",
    noteText: "Gaps around pipes, damaged vents, food sources and shared drainage routes can allow repeat infestations. Ask whether the quote includes identifying likely entry points and follow-up visits.",
  },
  faq: [
    ["How much does pest control cost in Bury?", "Cost varies by species, property size, infestation level, treatment method, number of visits and proofing required."],
    ["Which pests does Bury Council say its domestic service treats?", "The current list includes rats, mice, fleas, bedbugs, ants, cockroaches, flies, wasps and squirrels."],
    ["Does Bury Council treat bees?", "No. Bees are among the species excluded from the council's domestic pest-control treatment list."],
    ["Should I identify the pest before posting?", "Give your best description and evidence, but do not guess if unsure. Photos, droppings, noises, bite patterns and the location can help a professional identify it."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Bury?",
    copy: "Describe the pest signs and property once, then compare interested Bury pest controllers and their quotes.",
    buttonLabel: "Get Bury pest-control quotes",
  },
});
