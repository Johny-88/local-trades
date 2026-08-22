import { makeMiltonKeynesProfile } from "./miltonKeynesProfileBase";

export const locksmithsMiltonKeynes = makeMiltonKeynesProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or upgrading home security in Milton Keynes? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Milton Keynes?",
    copy: "Enter the postcode, explain whether the job is an emergency lockout, failed mechanism, lost key or security upgrade, and describe the door or window type so suitable Milton Keynes locksmiths can respond accurately.",
  },
  localContext: {
    eyebrow: "Milton Keynes home-security context",
    title: "The lock, door and frame should be treated as one security system",
    intro: "Thames Valley Police publishes practical guidance on euro cylinders, multi-point doors and tested replacement products. That makes the exact hardware specification worth checking when comparing locksmith quotes.",
    items: [
      {
        title: "Police guidance recommends secure euro cylinders",
        text: "Thames Valley Police recommends a 3-star euro cylinder meeting TS007 when replacing this type of lock, helping resist common attack methods such as snapping, drilling and bumping. Ask what standard is being fitted rather than comparing only the call-out price.",
        source: {
          label: "Thames Valley Police — door and window lock advice",
          url: "https://www.thamesvalley.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "Replacement doors should use tested security products",
        text: "Thames Valley Police advises considering security-accredited replacement doors tested to standards such as PAS 24:2022. A locksmith can assess cylinders, multipoint mechanisms, frames, hinges and keeps together rather than replacing only the visible lock.",
        source: {
          label: "Thames Valley Police — door security",
          url: "https://www.thamesvalley.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Milton Keynes by postcode, job type and urgency. Example areas include:",
    sideTitle: "Describe the whole door, not only the key problem",
    sideCopy: "Say whether the door is timber, uPVC, composite or aluminium and whether the key, handle or multipoint mechanism is failing. Clear photos can help identify likely parts before arrival.",
    noteLead: "After forced entry, ask for a security review.",
    noteText: "A stronger cylinder will not solve a weak frame, damaged keeps or vulnerable hinges, so compare the whole repair specification.",
  },
  faq: [
    ["Can I find an emergency locksmith in Milton Keynes?", "Yes. State that the job is urgent, describe the lock and door and explain whether you are locked out or the property cannot be secured."],
    ["What euro-cylinder standard should I ask about?", "Thames Valley Police recommends a 3-star euro cylinder meeting TS007 when replacing this type of lock."],
    ["Can a locksmith improve a weak door as well as change the lock?", "Many can assess frames, hinges, cylinders, multipoint mechanisms and other door-security weaknesses. Explain whether you want repair, entry or a security upgrade."],
    ["Should I change locks after losing keys?", "If the keys can be linked to your address or you cannot account for who may have them, changing or re-keying the relevant locks can be sensible."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Milton Keynes?",
    copy: "Describe the lock, door and urgency once, then compare interested Milton Keynes locksmiths and their quotes.",
    buttonLabel: "Get Milton Keynes locksmith quotes",
  },
});

export const pestControllersMiltonKeynes = makeMiltonKeynesProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps, insects or another pest problem in Milton Keynes? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Milton Keynes?",
    copy: "Enter the postcode, identify the pest if you can and explain where activity has been seen, how long it has been happening and whether children, pets or food areas are involved so suitable Milton Keynes pest controllers can plan the right treatment.",
  },
  localContext: {
    eyebrow: "Milton Keynes pest-control context",
    title: "The council recommends professional treatment and stresses the cause of rodent activity",
    intro: "Milton Keynes City Council recommends using a professional pest controller for domestic infestations and separately explains how food sources and harbourage can sustain rat and mouse problems.",
    items: [
      {
        title: "MK City Council recommends accredited professional pest control",
        text: "The council advises residents to contact a professional pest controller and points to the British Pest Control Association and National Pest Technicians Association as sources of registered contractors. Compare what inspection, treatment, follow-up and proofing are included in the quoted price.",
        source: {
          label: "Milton Keynes City Council — pest control",
          url: "https://www.milton-keynes.gov.uk/environmental-health/animals-and-pests/pest-control",
        },
      },
      {
        title: "Food and harbourage can keep rat problems active",
        text: "Milton Keynes Environmental Health says officers investigating rat and mouse complaints look for food sources and harbourage that may be encouraging vermin. For recurring rodents, ask the pest controller to identify these causes and entry points as well as applying treatment.",
        source: {
          label: "Milton Keynes City Council — rats and mice",
          url: "https://www.milton-keynes.gov.uk/environmental-health/animals-and-pests/rats-and-mice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Milton Keynes by postcode, pest type and treatment needs. Example areas include:",
    sideTitle: "Describe evidence rather than guessing the species",
    sideCopy: "Droppings, gnawing, bites, sounds, nest location and the time activity is seen can all help a professional identify the problem. Include clear photos where safe to do so.",
    noteLead: "Treatment without proofing can leave the cause in place.",
    noteText: "For rodents and recurring insects, ask what inspection, exclusion, follow-up visits and monitoring are included rather than comparing only the first treatment visit.",
  },
  faq: [
    ["How much does pest control cost in Milton Keynes?", "It depends on the pest, property size, severity and number of visits. Ask what inspection, treatment and follow-up are included before comparing prices."],
    ["Does Milton Keynes City Council provide domestic pest treatment?", "The council recommends residents contact a professional pest controller and provides links to recognised pest-control associations."],
    ["Can I post a rat or mouse problem?", "Yes. Explain where evidence is appearing, whether neighbours are affected and any likely food sources or entry points."],
    ["What if rats are coming from neighbouring land?", "Milton Keynes Environmental Health can investigate certain complaints involving rats or mice from land or property not occupied by you, while treatment on your own land remains your responsibility."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Milton Keynes?",
    copy: "Describe the pest signs and property once, then compare interested Milton Keynes pest controllers and their treatment plans.",
    buttonLabel: "Get Milton Keynes pest-control quotes",
  },
});
