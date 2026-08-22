import { makeBootleProfile } from "./bootleProfileBase";

export const locksmithsBootle = makeBootleProfile("locksmiths", {
  heroCopy: "Locked out, need a lock changed or want to improve home security in Bootle? Describe the door, lock and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Bootle?",
    copy: "Enter the postcode, door type, lock type if known and whether the job is an emergency, repair, replacement or security upgrade. Photos can help suitable Bootle locksmiths identify likely parts before travelling.",
  },
  localContext: {
    eyebrow: "Bootle home-security guidance",
    title: "Merseyside Police is actively urging residents to check doors, windows and access points rather than relying on simply pulling the door shut",
    intro: "A lock repair should restore the whole security function of the door, not just make the key turn. Merseyside Police's current burglary-prevention advice stresses properly locking doors and windows and using quality locks and secure hinges.",
    items: [
      {
        title: "Multi-point doors only secure properly when the final locking action is completed",
        text: "Merseyside Police advises users of modern multi-locking and uPVC doors to lift the handle, turn the key and remove it. If a Bootle door is difficult to lock, ask the locksmith to check the cylinder, gearbox, keeps and full multi-point mechanism rather than changing one part by assumption.",
        source: {
          label: "Merseyside Police — door and window lock advice",
          url: "https://www.merseyside.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "Bootle is specifically included in the force's 2026 burglary-prevention messaging",
        text: "Merseyside Police highlighted a July 2026 burglary case in Bootle while promoting its 'Think Like a Thief' campaign. The campaign advises residents to secure gates, doors and windows, use quality locks and keep tools and ladders secured.",
        source: {
          label: "Merseyside Police — Bootle burglary and Think Like a Thief campaign",
          url: "https://www.merseyside.police.uk/news/merseyside/news/2026/july-2026/man-charged-following-burglary-in-bootle/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Bootle by postcode, lock type and urgency. Example areas include:",
    sideTitle: "A clear photo can save an unnecessary first visit",
    sideCopy: "A snapped cylinder in Seaforth, a night latch near Bootle town centre and a multi-point uPVC mechanism in Netherton may require different parts. Send photos of the lock face, door edge and handles if safe to do so.",
    noteLead: "Ask what is actually being replaced.",
    noteText: "Cylinder, gearbox, handles, keeps and the complete multi-point strip are different components. A quote should state the part and security standard being supplied.",
  },
  faq: [
    ["How much does a locksmith cost in Bootle?", "Pricing depends on urgency, travel, lock type, required parts, time on site and whether the job is entry, repair or replacement."],
    ["What does Merseyside Police advise for multi-point uPVC doors?", "Lift the handle, turn the key and remove it so the full locking mechanism is engaged."],
    ["Can a locksmith repair a multi-point uPVC door?", "Many locksmiths work on multi-point mechanisms. Describe whether the handle lifts, the key turns and which locking points fail."],
    ["Can I post a non-emergency security upgrade?", "Yes. You can compare locksmiths for planned lock changes and security improvements as well as lockouts."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Bootle?",
    copy: "Describe the door, lock and urgency once, then compare interested Bootle locksmiths and their quotes.",
    buttonLabel: "Get Bootle locksmith quotes",
  },
});

export const pestControllersBootle = makeBootleProfile("pest-controllers", {
  heroCopy: "Found rats, mice, bed bugs, cockroaches, wasps or another pest problem in Bootle? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Bootle?",
    copy: "Enter the postcode, pest if known, property type and signs such as droppings, bites, nests, noises or sightings. Mention children, pets, food premises and previous treatments so suitable Bootle pest controllers can assess the job.",
  },
  localContext: {
    eyebrow: "Sefton pest control in Bootle",
    title: "Sefton's 2026 in-house service now treats a wider range of pests, while recurring rodent problems can also point to drainage defects",
    intro: "Correct identification matters because treatment and proofing differ by pest. Sefton Council currently offers domestic treatment for rats, mice, bed bugs, cockroaches, fleas, wasps and ants, with different visit patterns depending on the species.",
    items: [
      {
        title: "Sefton expanded its in-house pest-control service in May 2026",
        text: "The council's current service lists rats, mice, bed bugs, cockroaches, fleas, wasps and ants among the pests it can treat at domestic properties. It does not treat every species, so photos and clear evidence help avoid booking the wrong service.",
        source: {
          label: "Sefton Council — pest control",
          url: "https://sefton.gov.uk/environment/pests-pollution-and-food-hygiene/pest-control/",
        },
      },
      {
        title: "Sefton links some rodent activity to drainage defects and also baits the sewer network",
        text: "Sefton's Environmental Public Health guidance says its pest team works with United Utilities to treat the sewer system and investigates drainage defects where rats may be escaping. A repeat rodent problem in Bootle may therefore need proofing or drainage investigation as well as baiting.",
        source: {
          label: "Sefton Council — environmental public health",
          url: "https://www.sefton.gov.uk/environment/pests-pollution-and-food-hygiene/environmental-public-health/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Bootle by postcode, pest type and treatment requirements. Example areas include:",
    sideTitle: "Describe evidence, not only the pest name",
    sideCopy: "Scratching in a loft in Litherland, droppings in Linacre and a wasp nest in Netherton need different inspections. State where signs appear, when they started and whether treatment has already been attempted.",
    noteLead: "Proofing can be as important as treatment.",
    noteText: "Gaps around pipes, damaged vents, food sources and drainage defects can allow repeat infestations. Ask whether the quote includes identifying likely entry points and follow-up visits.",
  },
  faq: [
    ["How much does pest control cost in Bootle?", "Cost varies by species, property size, infestation level, treatment method, number of visits and proofing required."],
    ["Which pests does Sefton Council currently treat?", "Its 2026 domestic service includes rats, mice, bed bugs, cockroaches, fleas, wasps and ants, subject to the council's service terms."],
    ["Can drainage defects contribute to rat problems?", "Yes. Sefton says its environmental health investigations can look for drainage defects that allow rodents to escape from sewers."],
    ["Should I identify the pest before posting?", "Give your best description and evidence, but do not guess if unsure. Photos, droppings, noises, bite patterns and the location can help a professional identify it."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Bootle?",
    copy: "Describe the pest signs and property once, then compare interested Bootle pest controllers and their quotes.",
    buttonLabel: "Get Bootle pest-control quotes",
  },
});
