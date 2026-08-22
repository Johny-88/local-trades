import { makeBrightonHoveProfile } from "./brightonHoveProfileBase";

export const locksmithsBrightonHove = makeBrightonHoveProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving home security in Brighton & Hove? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Brighton & Hove?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing keys after a move or upgrading security. Add a clear photo of the lock and door if possible so suitable Brighton & Hove locksmiths can judge the likely work.",
  },
  localContext: {
    eyebrow: "Brighton & Hove home-security context",
    title: "Sussex Police recommends checking the lock, door and frame as one security system",
    intro: "Sussex Police publishes practical guidance on euro cylinders, door locks and tested replacement products. That makes the exact hardware specification worth checking rather than comparing only the call-out price.",
    items: [
      {
        title: "Sussex Police recommends TS007 3-star euro cylinders",
        text: "Police guidance recommends a 3-star euro cylinder meeting TS007 when replacing this type of lock, helping resist common attacks such as snapping, drilling and bumping. Ask what standard is being fitted and whether the cylinder is correctly sized for the door furniture.",
        source: {
          label: "Sussex Police — door and window lock advice",
          url: "https://www.sussex.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "Security upgrades should include the whole door",
        text: "Sussex Police advises using appropriate accredited locks and securing both primary and secondary access points. If the job follows forced entry or a failed multi-point mechanism, ask the locksmith to assess the frame, keeps, hinges and door condition as well as the cylinder.",
        source: {
          label: "Sussex Police — protecting your home from crime",
          url: "https://www.sussex.police.uk/cp/crime-prevention/protect-home-crime/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Brighton & Hove by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send a photo of the lock and whole door",
    sideCopy: "A mortice lock, night latch, euro cylinder and multi-point uPVC mechanism are different jobs. Clear photos from inside and outside can help identify likely parts before the locksmith arrives.",
    noteLead: "Ask what standard is being fitted.",
    noteText: "For a security upgrade, compare the replacement lock, cylinder, frame and hinge specification as well as the call-out price.",
  },
  faq: [
    ["How much does a locksmith cost in Brighton & Hove?", "The price depends on time of day, urgency, lock type, whether parts are needed and whether the job is entry only or replacement. Ask for the call-out and likely parts cost before agreeing where possible."],
    ["What euro-cylinder standard should I ask about?", "Sussex Police recommends a 3-star euro cylinder meeting TS007 when replacing this type of lock."],
    ["Can a locksmith improve a weak door as well as change the lock?", "Many can assess frames, hinges, cylinders and multi-point mechanisms as well as the lock itself. Explain whether you want entry, repair or a broader security upgrade."],
    ["Can I post an urgent lockout?", "Yes. State clearly that the job is urgent, give the postcode and door type and explain whether keys are lost, inside the property or broken in the lock."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Brighton & Hove?",
    copy: "Describe the lock, door and urgency once, then compare interested Brighton & Hove locksmiths and their quotes.",
    buttonLabel: "Get Brighton & Hove locksmith quotes",
  },
});

export const pestControllersBrightonHove = makeBrightonHoveProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps, insects or another pest problem in Brighton & Hove? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Brighton & Hove?",
    copy: "Enter the postcode and describe the pest, signs, rooms or outdoor areas affected and any treatment already attempted. Photos of droppings, damage, entry points or nests can help suitable Brighton & Hove pest controllers judge the problem.",
  },
  localContext: {
    eyebrow: "Brighton & Hove pest-control context",
    title: "The council does not operate a pest-treatment service, so the private treatment scope matters",
    intro: "Brighton & Hove City Council directs residents to private pest-control providers rather than running its own treatment service. That makes it especially important to compare whether inspection, treatment, follow-up and proofing are included in each quote.",
    items: [
      {
        title: "Brighton & Hove does not provide a council pest-control service",
        text: "The council says it does not operate a pest-control treatment service and points residents toward private providers. When comparing contractors, ask what pest identification, treatment visits, monitoring and follow-up are included before choosing on price alone.",
        source: {
          label: "Brighton & Hove City Council — pest control",
          url: "https://www.brighton-hove.gov.uk/pest-control",
        },
      },
      {
        title: "Contaminated clearance or rubbish removal still needs a lawful waste route",
        text: "If pest treatment also involves a business removing contaminated contents, rubbish or other waste, Brighton & Hove's trade-waste rules require lawful storage, transfer and disposal. Ask whether clearance is included or needs a separate service.",
        source: {
          label: "Brighton & Hove City Council — how to manage your business waste",
          url: "https://www.brighton-hove.gov.uk/rubbish-recycling-and-streets/business-and-trade-waste/how-manage-your-business-waste",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Brighton & Hove by postcode, pest type and treatment programme. Example areas include:",
    sideTitle: "Describe signs, not just the pest name",
    sideCopy: "Say where droppings, scratching, gnaw marks, nests or insect activity appear and when they are most noticeable. Mention pets, children, food areas and neighbouring properties where relevant.",
    noteLead: "Compare the whole treatment plan.",
    noteText: "Ask whether inspection, repeat visits, monitoring, proofing advice and any clearance are included rather than comparing only the first visit.",
  },
  faq: [
    ["Does Brighton & Hove City Council provide pest-control treatment?", "No. The council says it does not operate a pest-control service and directs residents toward private providers."],
    ["How much does pest control cost in Brighton & Hove?", "It depends on the pest, property size, severity and number of visits. Compare what inspection, treatment and follow-up are included rather than only the first-visit price."],
    ["Can I post a rat or mouse problem?", "Yes. Explain where evidence is appearing, whether neighbours are affected and any likely entry points so the contractor can assess treatment and proofing."],
    ["Can I post a wasp or insect job?", "Yes. Pest-control requests can cover rodents, wasps and a range of common domestic insect problems."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Brighton & Hove?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Brighton & Hove pest controllers and their treatment plans.",
    buttonLabel: "Get Brighton & Hove pest-control quotes",
  },
});
