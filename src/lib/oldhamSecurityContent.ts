import { makeOldhamProfile } from "./oldhamProfileBase";

export const locksmithsOldham = makeOldhamProfile("locksmiths", {
  heroCopy: "Locked out or need locks, cylinders, handles or door security upgraded in Oldham? Describe the door, lock type and urgency once, then compare locksmiths who cover your postcode.",
  answer: {
    title: "Looking for a locksmith near you in Oldham?",
    copy: "Enter the postcode, door material, lock or cylinder type, fault and whether access is currently possible. Add photos where safe so suitable Oldham locksmiths can bring the right parts.",
  },
  localContext: {
    eyebrow: "Greater Manchester lock security",
    title: "GMP recommends recognised security standards when locks or doors are being upgraded",
    intro: "A lock replacement can be an opportunity to improve the weak point rather than simply replace like-for-like. Greater Manchester Police publishes specific advice for new doors and anti-snap cylinder upgrades.",
    items: [
      {
        title: "GMP recommends PAS 24:2022 for new security doors",
        text: "Greater Manchester Police says that when fitting a new door, homeowners should use security-accredited products tested to British standards and specifically points to PAS 24:2022 as a standard to discuss with a locksmith.",
        source: {
          label: "Greater Manchester Police — door security",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "GMP advises TS 007 anti-snap protection for euro cylinders",
        text: "GMP's lock-snap burglary guidance recommends upgrading euro cylinders to a three-star TS 007 anti-snap cylinder or a Sold Secure Diamond-rated alternative, and also mentions two-star TS 007 door handles.",
        source: {
          label: "Greater Manchester Police — lock snap burglary prevention",
          url: "https://www.gmp.police.uk/news/greater-manchester/news/news/2023/september/officers-across-the-force-investigating-an-increase-in-lock-snap-burglaries-share-advice-on-how-to-prevent-yourself-from-being-a-victim/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Oldham by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Tell the locksmith exactly what door and cylinder you have",
    sideCopy: "A failed uPVC multipoint lock in Failsworth, a night latch in Oldham town centre and an anti-snap upgrade in Royton need different parts. Photos of the door edge, handle and cylinder can save a wasted visit.",
    noteLead: "Emergency access and security upgrades are different jobs.",
    noteText: "State whether the priority is non-destructive entry, a broken mechanism, lost keys, a cylinder change or a full security upgrade so quotes are comparable.",
  },
  faq: [
    ["How much does a locksmith cost in Oldham?", "Price depends on urgency, time of day, lock type, parts, access method and whether the job is entry, repair or upgrade."],
    ["What standard does GMP recommend for a new security door?", "Greater Manchester Police points homeowners to security-accredited products and PAS 24:2022."],
    ["What anti-snap cylinder should I consider?", "GMP recommends a three-star TS 007 anti-snap euro cylinder or a Sold Secure Diamond-rated alternative."],
    ["Can I post a non-emergency lock upgrade?", "Yes. Planned cylinder, handle and door-security upgrades can be posted alongside emergency lockouts."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Oldham?",
    copy: "Describe the lock, door and urgency once, then compare interested Oldham locksmiths and their quotes.",
    buttonLabel: "Get Oldham locksmith quotes",
  },
});

export const pestControllersOldham = makeOldhamProfile("pest-controllers", {
  heroCopy: "Need help with rats, mice, bed bugs, cockroaches, fleas, wasps or another pest in Oldham? Describe the signs, rooms affected and property type once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Oldham?",
    copy: "Enter the postcode, pest or suspected pest, where activity is seen, how long it has been present and any previous treatment. Photos of droppings, damage or entry points can help professionals assess the job.",
  },
  localContext: {
    eyebrow: "Oldham pest-control options",
    title: "Oldham Council currently treats a broad range of household pests and publishes specific rat guidance",
    intro: "The council's live pest-control pages are useful benchmarks for identifying the pest and understanding what treatment may involve before comparing private contractors.",
    items: [
      {
        title: "Oldham Council offers chargeable domestic treatments for a wide range of pests",
        text: "The council currently lists treatments for ants, bed bugs, beetles, cockroaches, fleas, mice, moles, rats, silverfish, squirrels and wasps. Some residents receiving Council Tax Reduction can qualify for one free treatment a year for specified public-health pests.",
        source: {
          label: "Oldham Council — pest control",
          url: "https://www.oldham.gov.uk/info/200521/pest_control",
        },
      },
      {
        title: "Rat treatment can require more than one visit",
        text: "Oldham Council says its rat programme involves up to two visits in a four-week period and notes that severe infestations may require more than one treatment programme. That is a useful reminder to compare treatment plans, not only first-visit prices.",
        source: {
          label: "Oldham Council — rats",
          url: "https://www.oldham.gov.uk/info/200521/pest_control/2120/rats",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Oldham by postcode, pest type and property. Example areas include:",
    sideTitle: "Describe evidence and likely entry points",
    sideCopy: "Rat activity in Hollinwood, mice in a loft in Chadderton and wasps in Royton require different treatment plans. State where activity occurs, whether neighbours are affected and any drainage or building defects already noticed.",
    noteLead: "Compare treatment plans, follow-up and proofing separately.",
    noteText: "A low first-visit price is not necessarily cheaper if follow-up, entry-point proofing or monitoring is excluded. Ask what the quoted programme actually includes.",
  },
  faq: [
    ["How much does pest control cost in Oldham?", "Cost depends on pest type, infestation size, property, number of visits, access and whether proofing or repair work is included."],
    ["Does Oldham Council provide pest control?", "Yes. The council currently offers chargeable domestic treatment for a range of common pests, with limited free eligibility for specified residents and pests."],
    ["How many visits can rat treatment take?", "Oldham Council's own programme involves up to two visits over four weeks, and it notes that severe infestations may need more than one programme."],
    ["Should I mention drains or holes when posting a rat job?", "Yes. Entry points and drainage defects can be important to the cause, so include anything already observed."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Oldham?",
    copy: "Describe the pest, evidence and affected areas once, then compare interested Oldham pest controllers and their quotes.",
    buttonLabel: "Get Oldham pest-control quotes",
  },
});
