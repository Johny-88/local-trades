import { makePlymouthProfile } from "./plymouthProfileBase";

export const locksmithsPlymouth = makePlymouthProfile("locksmiths", {
  heroCopy: "Locked out, need a lock changed or want to improve home security in Plymouth? Describe the door, lock and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Plymouth?",
    copy: "Enter the postcode, door type and problem. Mention whether it is an emergency lockout, failed mechanism, snapped key, cylinder upgrade or wider security improvement so suitable Plymouth locksmiths can respond accurately.",
  },
  localContext: {
    eyebrow: "Plymouth home-security context",
    title: "Devon & Cornwall Police recommends accredited door and window security rather than cosmetic upgrades",
    intro: "Local police guidance stresses that a home is only as secure as its weakest access point. For replacement doors, cylinders and windows, the practical standard is to focus on tested security products and correct locking habits rather than simply fitting a new-looking component.",
    items: [
      {
        title: "Police advice recommends PAS 24:2022 for new security doors",
        text: "Devon & Cornwall Police advises that new doors should use security-accredited products tested to British Standards and specifically points homeowners toward PAS 24:2022. It also recommends checking hinges, frames and vulnerable euro-profile cylinders rather than treating the lock in isolation.",
        source: {
          label: "Devon & Cornwall Police — door security",
          url: "https://www.devon-cornwall.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Accessible windows need the same security attention as doors",
        text: "The force recommends suitable window locks, laminated glass or security film where appropriate and PAS 24:2022 security-accredited products when windows are being replaced. If a locksmith is upgrading several access points, include windows and patio doors in the scope rather than focusing only on the front door.",
        source: {
          label: "Devon & Cornwall Police — window security",
          url: "https://www.devon-cornwall.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Plymouth by postcode, urgency and lock type. Example areas include:",
    sideTitle: "Identify the actual door and mechanism",
    sideCopy: "A traditional timber door in the Barbican, a uPVC multipoint system in Plymstock and a communal flat entrance can need completely different parts and methods. Photos of the lock and door edge help.",
    noteLead: "Security is more than the cylinder.",
    noteText: "Ask whether the frame, hinges, keeps, multipoint mechanism and glass also need attention rather than replacing one part in isolation.",
  },
  faq: [
    ["How much does a locksmith cost in Plymouth?", "Costs depend on urgency, time of day, lock type, parts and whether the job is opening, repair or replacement. Ask for the call-out and parts basis before work starts."],
    ["What security standard should I ask about for a new door?", "Devon & Cornwall Police points homeowners toward security-accredited products and specifically references PAS 24:2022 for new doors."],
    ["Can a locksmith improve a uPVC door without replacing it?", "Often yes. Depending on the fault, cylinders, handles, keeps or the multipoint mechanism may be repairable or replaceable."],
    ["Should accessible windows be upgraded too?", "Yes. Police advice treats windows as an important entry point and recommends suitable locks and accredited products when replacing them."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Plymouth?",
    copy: "Describe the lock, door and urgency once, then compare interested Plymouth locksmiths and their quotes.",
    buttonLabel: "Get Plymouth locksmith quotes",
  },
});

export const pestControllersPlymouth = makePlymouthProfile("pest-controllers", {
  heroCopy: "Need help with rats, mice, wasps, fleas or another pest in Plymouth? Describe where you have seen activity and how long it has been happening, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Plymouth?",
    copy: "Enter the postcode, pest type, affected rooms or outside areas and any signs such as droppings, gnawing, nests or burrows. Mention repeat infestations and nearby drains so suitable Plymouth pest controllers can investigate the source as well as treat activity.",
  },
  localContext: {
    eyebrow: "Plymouth pest and drainage context",
    title: "The council's own rodent guidance repeatedly points homeowners back to drains, pipework and building defects",
    intro: "Plymouth City Council runs a professional pest-control service and its rat and mouse guidance emphasises proofing and repair alongside treatment. That matters where an infestation keeps returning after baiting alone.",
    items: [
      {
        title: "Broken drains and pipework are specifically identified as rodent-entry risks",
        text: "The council's rat guidance says rats are found in sewers, substandard buildings, lofts, wall cavities, cellars and under floors, and advises repairing broken drains and pipework as part of prevention. A recurring rat problem may therefore need drainage or proofing investigation as well as pest treatment.",
        source: {
          label: "Plymouth City Council — rats",
          url: "https://www.plymouth.gov.uk/rats",
        },
      },
      {
        title: "Plymouth offers treatment for a broad range of domestic and commercial pests",
        text: "The council lists one-off treatments for rats, mice, fleas, insects, wasps, bed bugs and squirrels, alongside routine inspection services. When comparing private pest controllers, ask whether the quote includes follow-up visits, proofing advice and investigation of the source.",
        source: {
          label: "Plymouth City Council — pest control",
          url: "https://www.plymouth.gov.uk/pest-control",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Plymouth by postcode, pest type and infestation severity. Example areas include:",
    sideTitle: "Describe where the activity starts",
    sideCopy: "Droppings under a kitchen unit, scratching beneath floors, burrows near drains and wasp traffic at roof level point to different investigations. Photos and a simple timeline help the contractor arrive prepared.",
    noteLead: "Treat the route in, not only the pest.",
    noteText: "For recurring rodents, ask whether drains, pipe penetrations, air bricks, gaps and neighbouring sources need to be checked after treatment.",
  },
  faq: [
    ["How much does pest control cost in Plymouth?", "Cost depends on the pest, property size, infestation level and number of visits. Compare quotes on the same treatment and follow-up basis."],
    ["Does Plymouth City Council provide pest control?", "Yes. The council operates a paid pest-control service for a range of domestic and commercial pests."],
    ["Can broken drains cause rat problems?", "They can contribute. Plymouth's own rat guidance specifically recommends repairing broken drains and pipework as part of prevention."],
    ["Should I ask about proofing after treatment?", "Yes. Sealing entry points and correcting food, waste or drainage issues can be important where pests keep returning."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Plymouth?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Plymouth pest controllers and their quotes.",
    buttonLabel: "Get Plymouth pest-control quotes",
  },
});
