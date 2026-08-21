import { makeBristolProfile } from "./bristolProfileBase";

export const locksmithsBristol = makeBristolProfile("locksmiths", {
  heroCopy: "Locked out, replacing a failed lock or improving door security in Bristol? Describe the door, lock and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Bristol?",
    copy: "Enter the postcode, explain whether you are locked out or planning a security upgrade, and describe the door and lock if you can. Photos can help Bristol locksmiths identify the likely mechanism before travelling.",
  },
  localContext: {
    eyebrow: "Bristol lock and door security",
    title: "Local police guidance is useful when choosing replacement locks and doors",
    intro: "Avon and Somerset Police publishes specific advice for door and window security, including independently tested products and practical checks for cylinders and multi-point locking systems.",
    items: [
      {
        title: "Police recommend security-accredited replacement doors",
        text: "Avon and Somerset Police advises homeowners replacing an external door to choose a security-accredited product tested to a recognised standard such as PAS 24:2022. For uPVC and multi-point doors, the force also reminds residents to lift the handle and fully turn the key rather than relying on the latch alone.",
        source: {
          label: "Avon and Somerset Police — door security",
          url: "https://www.avonandsomerset.police.uk/crime-prevention-advice/home-protection/door-security/",
        },
      },
      {
        title: "A protruding cylinder is worth checking before it is replaced like-for-like",
        text: "The same police guidance says older patio, sliding and bi-fold doors should be checked for secure cylinder locks and recommends replacing a cylinder that protrudes beyond the frame handle with a shorter, more snap-resistant one. Ask the locksmith what cylinder standard and length they propose to fit.",
        source: {
          label: "Avon and Somerset Police — door security and cylinders",
          url: "https://www.avonandsomerset.police.uk/crime-prevention-advice/home-protection/door-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Bristol by postcode and urgency. Example areas include:",
    sideTitle: "Photos can save time on a lock job",
    sideCopy: "A clear photo of the door edge, handles and cylinder can help a locksmith distinguish a euro cylinder, mortice lock or multi-point mechanism before arriving.",
    noteLead: "Ask what is being fitted, not just what it costs.",
    noteText: "For replacement work, confirm the lock or cylinder specification and whether the quoted price includes parts, labour and any call-out charge.",
  },
  faq: [
    ["How much does a locksmith cost in Bristol?", "Emergency access, mechanism repairs and planned lock changes are priced differently. Confirm the call-out charge, labour and replacement-part cost before authorising work where possible."],
    ["What should I look for in a replacement front door lock?", "Avon and Somerset Police recommends security-accredited door products and highlights secure cylinders and properly used multi-point locking systems. Ask the locksmith what standard suits your specific door."],
    ["Why does cylinder length matter?", "Police guidance warns that a cylinder protruding beyond the handle can be more vulnerable and recommends a shorter, more snap-resistant replacement where appropriate."],
    ["Can a locksmith help with a uPVC multi-point mechanism?", "Yes. Many locksmiths repair and replace cylinders, gearboxes and multi-point locking mechanisms, but describe the symptoms and door type before they travel."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Bristol?",
    copy: "Describe the door, lock and urgency once, then compare interested Bristol locksmiths and their quotes.",
    buttonLabel: "Get Bristol locksmith quotes",
  },
});

export const pestControllersBristol = makeBristolProfile("pest-controllers", {
  heroCopy: "Seeing rats, mice, wasps, cockroaches or another pest problem in Bristol? Describe the signs, location and property once, then compare pest controllers interested in the job.",
  answer: {
    title: "Looking for pest control near you in Bristol?",
    copy: "Enter the postcode and explain what you have seen or heard, where the activity is happening and how long it has been going on. Photos, droppings, entry points or nest locations can help suitable Bristol pest controllers assess the likely treatment.",
  },
  localContext: {
    eyebrow: "Bristol pest-control context",
    title: "The council offers some treatments, but prevention and proofing still matter",
    intro: "Bristol City Council runs a pest-control service for certain residents and commercial customers, and its private-renting guidance also stresses practical steps that reduce the conditions pests use for food and shelter.",
    items: [
      {
        title: "Bristol City Council treats several common public-health pests",
        text: "The council's pest-control service lists rats, mice, cockroaches, wasps and insects among the pests it treats. Current published charges for people who need to pay include £140.45 for up to three rat or mouse visits and £114.44 for one wasp nest, although eligibility and charges can differ by circumstances.",
        source: {
          label: "Bristol City Council — pest control",
          url: "https://www.bristol.gov.uk/ask?id=606",
        },
      },
      {
        title: "Food, waste and damaged wet areas can all contribute to pest problems",
        text: "Bristol's private-renting guide advises residents to keep food and waste in suitable containers, close bins and keep properties clean to avoid attracting pests. The same guide notes that damaged plumbing, grouting and sealant can create damp conditions, so treatment is more effective when entry points and underlying property defects are also addressed.",
        source: {
          label: "Bristol City Council — Private Renting in Bristol",
          url: "https://www.bristol.gov.uk/files/documents/8548-final-private-housing-service-tenant-guide/file",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Bristol by postcode, pest type and urgency. Example areas include:",
    sideTitle: "Describe the evidence, not only the suspected pest",
    sideCopy: "Droppings, scratching noises, sightings, damaged food packaging, nest activity and the rooms affected can help a professional decide what inspection and treatment are likely to be needed.",
    noteLead: "Ask what happens after the first visit.",
    noteText: "Rodent and insect problems may need repeat treatment, monitoring or proofing, so compare the full treatment plan rather than a single visit price.",
  },
  faq: [
    ["What pests does Bristol City Council treat?", "Its current service lists rats, mice, cockroaches, wasps and insects, although who can book, eligibility and charges depend on the circumstances."],
    ["How much is council rat or mouse treatment in Bristol?", "The council currently publishes a charge of £140.45 for up to three rat or mouse visits for customers who need to pay. Private pest-control quotes can differ, so compare the exact scope and follow-up plan."],
    ["Should a pest controller also look for entry points?", "Yes. Treatment without proofing or removing food and harbourage can leave the underlying cause in place. Ask what prevention advice and follow-up are included."],
    ["What information should I include in the job?", "Say what you have seen or heard, when activity occurs, which rooms or external areas are affected and whether children or pets are present."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Bristol?",
    copy: "Describe the pest signs and property once, then compare interested Bristol pest-control professionals and their treatment plans.",
    buttonLabel: "Get Bristol pest-control quotes",
  },
});
