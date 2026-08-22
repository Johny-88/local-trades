import { makeStockportProfile } from "./stockportProfileBase";

export const locksmithsStockport = makeStockportProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving door and window security in Stockport? Describe the door, lock type, problem and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Stockport?",
    copy: "Enter the postcode, door or window type and whether the issue is a lockout, failed mechanism, lost key or planned upgrade. Photos of the lock and door edge can help suitable Stockport locksmiths identify the likely parts before attending.",
  },
  localContext: {
    eyebrow: "Greater Manchester home security",
    title: "Lock replacement is a chance to improve resistance to common entry methods",
    intro: "Greater Manchester Police advises homeowners to look beyond simply making a lock operate again. Its current crime-prevention guidance covers secure cylinders, door construction, frames, hinges and accredited replacement products.",
    items: [
      {
        title: "GMP recommends 3-star TS007 euro cylinders when upgrading this lock type",
        text: "Greater Manchester Police says 3-star rated euro cylinders meeting TS007 standards help protect against common attacks such as snapping, drilling and bumping. If a uPVC or composite door needs a new cylinder, ask what standard is being fitted.",
        source: {
          label: "Greater Manchester Police — door and window lock advice",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "New doors should use security-accredited products",
        text: "GMP advises that new doors should use security-accredited products tested to British standards and specifically points homeowners to PAS 24:2022. It also recommends checking frames, hinges and protruding euro cylinders rather than assessing the lock in isolation.",
        source: {
          label: "Greater Manchester Police — door security",
          url: "https://www.gmp.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Stockport by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Describe the door and mechanism before the locksmith sets off",
    sideCopy: "A night latch in Heaton Moor, a multipoint uPVC mechanism in Cheadle and a snapped cylinder in Hazel Grove need different tools and parts. Send clear photos where possible and say whether the door is open or shut.",
    noteLead: "A working replacement is not automatically the best security upgrade.",
    noteText: "If you are already changing cylinders, locks or a complete door, ask the locksmith to explain the security standard of the proposed parts and whether the frame and hinges also need attention.",
  },
  faq: [
    ["How much does a locksmith cost in Stockport?", "Cost depends on urgency, time of day, lock type, parts and whether the door is locked shut. Ask for the call-out and likely parts basis before agreeing work."],
    ["What euro cylinder standard does Greater Manchester Police recommend?", "GMP advises choosing a 3-star euro cylinder that meets TS007 standards when changing this type of lock."],
    ["What should I look for when replacing a complete door?", "GMP recommends security-accredited products tested to British standards and points to PAS 24:2022 as a good standard."],
    ["Can I post a non-emergency lock upgrade?", "Yes. Planned lock changes, multipoint mechanism repairs and door-security upgrades can be posted as well as emergency lockouts."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Stockport?",
    copy: "Describe the lock, door and urgency once, then compare interested Stockport locksmiths and their quotes.",
    buttonLabel: "Get Stockport locksmith quotes",
  },
});

export const pestControllersStockport = makeStockportProfile("pest-controllers", {
  heroCopy: "Found rats, mice, wasps, bed bugs or another pest in Stockport? Describe the signs, affected rooms and how long the problem has been present once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Stockport?",
    copy: "Enter the postcode, pest type if known and where activity has been seen. Mention droppings, noises, nests, bites, damaged food or entry points so suitable Stockport pest controllers can assess the likely treatment and number of visits.",
  },
  localContext: {
    eyebrow: "Stockport pest-control options",
    title: "The council provides a paid domestic pest-control service for several common pests",
    intro: "Stockport Council currently offers domestic treatment for a range of pests including rats, mice, wasps, cockroaches, bed bugs and squirrels. Knowing what the council does and does not treat gives homeowners another benchmark when comparing private pest-control options.",
    items: [
      {
        title: "Council rat and mouse treatment includes follow-up visits",
        text: "Stockport's published domestic pest-control service includes two revisits for rat and mouse treatments. The treatment guidance also stresses removing food and rubbish so rodents do not continue feeding away from bait.",
        source: {
          label: "Stockport Council — pest control prices",
          url: "https://www.stockport.gov.uk/pest-control-prices",
        },
      },
      {
        title: "The council does not treat bees",
        text: "Stockport states that its pest-control service does not treat bees and instead recommends seeking beekeeper advice. Correct identification matters before treatment, especially when the insect is not clearly a wasp.",
        source: {
          label: "Stockport Council — pest control prices",
          url: "https://www.stockport.gov.uk/pest-control-prices",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Stockport by postcode, pest type and urgency. Example areas include:",
    sideTitle: "Describe evidence and entry points, not just the pest name",
    sideCopy: "Rodent activity in Reddish, wasps around a roof in Bramhall and bed bugs in a Stockport flat require very different treatment plans. State where signs appear, when they are noticed and whether children or pets live at the property.",
    noteLead: "Identification comes before treatment.",
    noteText: "Photos of droppings, insects, damage or nests can help. For rodents, also mention drains, gaps, food sources and recent building work that might have opened an entry route.",
  },
  faq: [
    ["How much does pest control cost in Stockport?", "It depends on the pest, property size, treatment method and number of visits. Stockport Council publishes its own domestic charges, while private providers set their own prices."],
    ["Does Stockport Council treat rats and mice?", "Yes. Its current domestic service includes rat and mouse treatment with follow-up visits included in the published service."],
    ["Does Stockport Council remove bees?", "No. The council says it does not treat bees and recommends seeking advice from a beekeeper."],
    ["Should I clean before a rodent treatment?", "Stockport's guidance says rubbish and food debris should be removed so rodents do not keep feeding away from the treatment bait."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Stockport?",
    copy: "Describe the signs and affected areas once, then compare interested Stockport pest controllers and their quotes.",
    buttonLabel: "Get Stockport pest-control quotes",
  },
});
