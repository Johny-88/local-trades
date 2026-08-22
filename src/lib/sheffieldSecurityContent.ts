import { makeSheffieldProfile } from "./sheffieldProfileBase";

export const locksmithsSheffield = makeSheffieldProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving home security in Sheffield? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Sheffield?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing keys after a move or upgrading security. Add a clear photo of the lock and whole door if possible so suitable Sheffield locksmiths can judge the likely work.",
  },
  localContext: {
    eyebrow: "Sheffield home-security context",
    title: "South Yorkshire Police advises treating the lock, door and frame as one security system",
    intro: "South Yorkshire Police publishes specific guidance on door and window security, including reinforcing frames, checking British Standard-approved locks and hinges, avoiding vulnerable protruding euro cylinders and choosing security-accredited products for replacement doors.",
    items: [
      {
        title: "A locksmith can assess more than the cylinder",
        text: "South Yorkshire Police says a locksmith can check whether a door is robust, reinforce the frame and assess whether locks and hinges meet recognised standards. If a job follows forced entry or a failed multi-point mechanism, ask for the keeps, hinges, frame and door condition to be checked as well as the lock itself.",
        source: {
          label: "South Yorkshire Police — door security",
          url: "https://www.southyorkshire.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Replacement doors should use security-accredited products",
        text: "South Yorkshire Police recommends security-accredited replacement doors and tells homeowners to discuss PAS 24:2022 with their locksmith. It also highlights the risk of euro-profile cylinders that protrude beyond the outside furniture, which can be vulnerable to snapping.",
        source: {
          label: "South Yorkshire Police — door and window lock advice",
          url: "https://www.southyorkshire.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Sheffield by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send photos of the lock, handle and whole door",
    sideCopy: "A mortice lock, night latch, euro cylinder and multi-point uPVC mechanism are different jobs. Clear photos from inside and outside can help identify likely parts before the locksmith arrives.",
    noteLead: "Ask what security standard is being fitted.",
    noteText: "For an upgrade, compare the cylinder, lock case, frame, keeps and hinges as well as the call-out price rather than replacing one weak component in isolation.",
  },
  faq: [
    ["How much does a locksmith cost in Sheffield?", "The price depends on time of day, urgency, lock type, parts and whether the job is entry only or includes repair or replacement. Ask for the call-out and likely parts cost before agreeing where possible."],
    ["What should I ask about when replacing a front door lock?", "Ask what lock or cylinder standard is being fitted, whether the door and frame are sound and whether any hinges, keeps or multi-point components also need attention."],
    ["What does South Yorkshire Police say about new doors?", "Its crime-prevention guidance recommends security-accredited products and suggests discussing PAS 24:2022 with the locksmith when fitting a new door."],
    ["Can I post an urgent lockout?", "Yes. State clearly that the job is urgent, give the postcode and door type and explain whether keys are lost, inside the property or broken in the lock."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Sheffield?",
    copy: "Describe the lock, door and urgency once, then compare interested Sheffield locksmiths and their quotes.",
    buttonLabel: "Get Sheffield locksmith quotes",
  },
});

export const pestControllersSheffield = makeSheffieldProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps, insects or another pest problem in Sheffield? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Sheffield?",
    copy: "Enter the postcode and describe the pest, signs, rooms or outdoor areas affected and any treatment already attempted. Photos of droppings, damage, entry points or nests can help suitable Sheffield pest controllers judge the problem.",
  },
  localContext: {
    eyebrow: "Sheffield pest-control context",
    title: "Sheffield City Council operates its own charged pest-control service, giving homeowners a useful local benchmark for treatment scope",
    intro: "Unlike councils that no longer provide treatment, Sheffield runs domestic, commercial and HMO pest-control services. The council publishes treatment charges and explains that visits are based on an assessment of the risks and pest involved, which makes the number of visits and proofing work worth comparing in private quotes too.",
    items: [
      {
        title: "The council currently treats a wide range of domestic pests",
        text: "Sheffield City Council publishes treatments for rats, mice, cockroaches, fleas, bed bugs, wasps, ants, beetles and other pests, with different charges and visit allowances. When comparing private contractors, ask whether the price covers identification, the initial treatment, repeat visits and monitoring rather than comparing only a headline call-out.",
        source: {
          label: "Sheffield City Council — pest control",
          url: "https://www.sheffield.gov.uk/public-health/cleaning-pest-control/pest-control",
        },
      },
      {
        title: "Long-term rodent control can require proofing and drainage investigation",
        text: "The council's pest advice notes that rats can escape from sewers through broken drains, missing covers and other defects, while its commercial service lists proofing and basic smoke testing of drains among available work. If rodents keep returning, ask whether the quote deals with entry points and the underlying route as well as baiting.",
        source: {
          label: "Sheffield City Council — pest-control advice and information",
          url: "https://www.sheffield.gov.uk/public-health/pest-control-advice",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Sheffield by postcode, pest type and treatment programme. Example areas include:",
    sideTitle: "Describe signs, entry points and repeat activity",
    sideCopy: "Say where droppings, scratching, gnaw marks, nests or insect activity appear and when they are most noticeable. Mention drains, lofts, cellars, food areas, pets and neighbouring properties where relevant.",
    noteLead: "Compare the whole treatment plan.",
    noteText: "Ask whether inspection, repeat visits, monitoring, proofing and any drain investigation are included rather than comparing only the first treatment visit.",
  },
  faq: [
    ["Does Sheffield City Council provide pest-control treatment?", "Yes. The council currently operates charged domestic, commercial and HMO pest-control services for a range of pests, with some discounted or free treatment in specified circumstances."],
    ["How much does pest control cost in Sheffield?", "It depends on the pest, property size, severity and number of visits. The council publishes its own current charges, while private contractors set their own prices, so compare the complete treatment scope."],
    ["What if rats keep coming back?", "Recurring activity can point to access, food sources or drainage defects. Ask whether inspection and proofing are included rather than repeatedly treating the symptoms only."],
    ["Can I post a wasp, bed-bug or insect job?", "Yes. Pest-control requests can cover rodents, wasps, bed bugs and a range of other domestic pest problems."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Sheffield?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Sheffield pest controllers and their treatment plans.",
    buttonLabel: "Get Sheffield pest-control quotes",
  },
});
