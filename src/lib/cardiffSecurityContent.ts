import { makeCardiffProfile } from "./cardiffProfileBase";

export const locksmithsCardiff = makeCardiffProfile("locksmiths", {
  heroCopy: "Locked out, replacing locks or upgrading home security in Cardiff? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Cardiff?",
    copy: "Enter the postcode, door or window type and what has happened. Mention whether it is an emergency lockout, failed mechanism, lost key, burglary repair or planned security upgrade so suitable Cardiff locksmiths can judge the job.",
  },
  localContext: {
    eyebrow: "Cardiff home-security context",
    title: "South Wales Police recommends security-rated doors, windows and locks rather than cosmetic upgrades",
    intro: "For planned security work, the useful question is not simply how many locks are fitted but whether the complete door or window system meets an appropriate security standard. Heritage controls can also matter where external joinery is protected.",
    items: [
      {
        title: "New doors should use security-accredited products",
        text: "South Wales Police advises homeowners fitting a new door to choose security-accredited products tested to British standards and specifically points to PAS 24:2022. For uPVC and multi-point doors, the police also stresses that the handle must be lifted and the key turned and removed for the locking system to be fully engaged.",
        source: {
          label: "South Wales Police — door security advice",
          url: "https://www.south-wales.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Protected external doors may need planning or listed-building consent",
        text: "Cardiff has 27 conservation areas, around 1,000 listed buildings and numerous Article 4 controls. If a locksmith job changes a historic front door, frame, glazing pattern or other protected feature rather than simply repairing the lock, check the property status before replacing visible fabric.",
        source: {
          label: "Cardiff Council — conservation of the built environment",
          url: "https://cardiff.gov.uk/conservation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Cardiff by postcode, urgency and lock type. Example areas include:",
    sideTitle: "Describe the complete door or window",
    sideCopy: "A euro-cylinder on a modern uPVC door, a mortice lock in a timber door and an older protected entrance can require very different parts and methods. Photos help the locksmith bring the right equipment.",
    noteLead: "Upgrade the weak point, not just the key cylinder.",
    noteText: "Ask whether the proposed repair improves the complete door or window assembly and whether any visible heritage fabric needs to be retained.",
  },
  faq: [
    ["How much does a locksmith cost in Cardiff?", "Prices depend on urgency, time of day, lock type, parts and whether drilling or mechanism replacement is required. Describe the hardware before asking for a quote."],
    ["Can I use this page for an emergency lockout?", "Yes. State that it is urgent, give the postcode and describe the door and lock as accurately as possible."],
    ["What security standard does South Wales Police recommend for new doors?", "Its current guidance points homeowners toward security-accredited products and PAS 24:2022."],
    ["Can I replace a front door in a Cardiff conservation area?", "Possibly, but conservation-area, Article 4 or listed-building controls can affect visible alterations. Check the property's status before changing protected joinery."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Cardiff?",
    copy: "Describe the lock, door and urgency once, then compare interested Cardiff locksmiths and their quotes.",
    buttonLabel: "Get Cardiff locksmith quotes",
  },
});

export const pestControllersCardiff = makeCardiffProfile("pest-controllers", {
  heroCopy: "Need help with rats, mice, wasps, fleas or another pest in Cardiff? Describe the signs, rooms affected and how long the problem has been present once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Cardiff?",
    copy: "Enter the postcode and describe sightings, droppings, noises, damage, nests or entry points. Mention whether the issue is indoors, in a loft, garden, drain or shared building so suitable Cardiff pest controllers can assess treatment and proofing.",
  },
  localContext: {
    eyebrow: "Cardiff pest and proofing context",
    title: "Cardiff's own rat guidance links infestations to damaged drains and building defects",
    intro: "Effective pest work is not just baiting. Cardiff Council's current advice explicitly identifies damaged drainage, gaps in brickwork, defective vents, food and standing water as routes that can sustain rat activity, so proofing and defect repair matter alongside treatment.",
    items: [
      {
        title: "Damaged drainage can provide a direct route into properties",
        text: "Cardiff Council says breaks in drainage pipes can give rats easy access from drainage systems into gardens and buildings. If rat activity is concentrated near drains, under floors or around external pipework, ask whether a drainage inspection or repair should be included rather than repeating bait-only treatment.",
        source: {
          label: "Cardiff Council — rats",
          url: "https://www.cardiff.gov.uk/article/3022/Rats",
        },
      },
      {
        title: "The council currently treats several common domestic pests",
        text: "Cardiff Council operates a pest-control service covering rats, mice, fleas, cockroaches, bedbugs, wasps and squirrels, subject to current service availability. That gives homeowners a useful benchmark for the types of infestations that may need professional treatment and follow-up visits.",
        source: {
          label: "Cardiff Council — pest control services",
          url: "https://cardiff.gov.uk/pestcontrol",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Cardiff by postcode and pest type. Example areas include:",
    sideTitle: "Show where the activity starts",
    sideCopy: "Droppings behind a kitchen unit, noise under a floor and rats emerging near an external drain point to different entry routes. Photos and a simple timeline can make the first visit more useful.",
    noteLead: "Treatment without proofing can become repeat treatment.",
    noteText: "Ask what entry-point, drainage or hygiene defects were found and what needs to change after the immediate infestation is controlled.",
  },
  faq: [
    ["How much does pest control cost in Cardiff?", "Cost depends on the pest, infestation size, number of visits, access and proofing work. Cardiff Council publishes its own treatment charges, while private quotes may differ."],
    ["Does Cardiff Council treat rats and mice?", "Yes. Its current pest-control service lists rats and mice among the pests it treats."],
    ["Can rats come through damaged drains?", "Yes. Cardiff Council specifically identifies damaged drainage systems as a possible route from drains into gardens and properties."],
    ["Should I repair holes after treatment?", "Usually yes. Proofing gaps, vents, pipe penetrations and other entry points is an important part of reducing repeat infestations."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Cardiff?",
    copy: "Describe the pest, signs and likely entry points once, then compare interested Cardiff pest controllers and their quotes.",
    buttonLabel: "Get Cardiff pest-control quotes",
  },
});
