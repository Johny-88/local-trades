import { makeNottinghamProfile } from "./nottinghamProfileBase";

export const locksmithsNottingham = makeNottinghamProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving home security in Nottingham? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Nottingham?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing keys after a move or upgrading security. Add clear photos of the lock, handle and whole door if possible.",
  },
  localContext: {
    eyebrow: "Nottingham home-security context",
    title: "Nottinghamshire Police recommends upgrading vulnerable cylinders and treating doors and windows as the weak points to secure",
    intro: "Local police crime-prevention guidance specifically recommends secure door and window hardware and TS007-rated euro cylinders. In parts of Nottingham with historic planning controls, external door or window changes can also need separate planning consideration.",
    items: [
      {
        title: "Police guidance recommends 3-star TS007 euro cylinders when locks are changed",
        text: "Nottinghamshire Police advises homeowners replacing euro-profile cylinders to choose 3-star TS007-rated locks, which are designed to resist common attacks such as snapping, drilling and bumping. For an upgrade, ask the locksmith what standard is being fitted rather than comparing only the cheapest cylinder price.",
        source: {
          label: "Nottinghamshire Police — door and window lock advice",
          url: "https://www.nottinghamshire.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "Some Nottingham properties have extra planning controls on doors and windows",
        text: "Nottingham City Council has property-specific Article 4 Directions, mostly in conservation areas, that can restrict changes to windows and doors. If a security upgrade involves replacing the whole external door, altering openings or changing the appearance of a protected property, check the planning position before ordering the final product.",
        source: {
          label: "Nottingham City Council — Article 4 Directions",
          url: "https://www.nottinghamcity.gov.uk/information-for-business/planning-and-building-control/planning-policy/article-4-directions/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Nottingham by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send photos of the lock, handle and whole door",
    sideCopy: "A mortice lock, night latch, euro cylinder and multi-point uPVC mechanism are different jobs. Clear photos from inside and outside can help identify likely parts before arrival.",
    noteLead: "Ask what security standard is being fitted.",
    noteText: "For an upgrade, compare the lock, cylinder, frame, keeps and hinges as well as the call-out price rather than replacing one weak component in isolation.",
  },
  faq: [
    ["How much does a locksmith cost in Nottingham?", "The price depends on urgency, time of day, lock type, parts and whether the job is entry only or includes repair or replacement."],
    ["What cylinder standard does Nottinghamshire Police recommend?", "Its current crime-prevention guidance recommends a 3-star euro cylinder that meets TS007 when changing that type of lock."],
    ["Can changing a front door need planning permission in Nottingham?", "Sometimes. Some properties, particularly in conservation areas with Article 4 Directions or listed status, have tighter controls over external doors and windows."],
    ["Can I post an urgent lockout?", "Yes. State clearly that the job is urgent, give the postcode and door type and explain whether keys are lost, inside the property or broken in the lock."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Nottingham?",
    copy: "Describe the lock, door and urgency once, then compare interested Nottingham locksmiths and their quotes.",
    buttonLabel: "Get Nottingham locksmith quotes",
  },
});

export const pestControllersNottingham = makeNottinghamProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps, insects or another pest problem in Nottingham? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Nottingham?",
    copy: "Enter the postcode and describe the pest, signs, rooms or outdoor areas affected and any treatment already attempted. Photos of droppings, damage, entry points or nests can help suitable Nottingham pest controllers judge the problem.",
  },
  localContext: {
    eyebrow: "Nottingham pest-control context",
    title: "Nottingham City Council does not provide treatment, but it does enforce owner and occupier duties around rats and mice",
    intro: "The council directs residents to professional pest specialists rather than operating a treatment service. Its guidance is especially useful for recurring rodent problems because it highlights food, harbourage, proofing and access through drains or sewers.",
    items: [
      {
        title: "Recurring rats or mice can point to drains, sewers and access defects",
        text: "Nottingham City Council says owners or occupiers are responsible where their property provides food, harbourage or access to drains and sewers for rats and mice. If activity returns after baiting, ask whether the contractor will inspect entry points, drainage routes and proofing needs rather than treating the symptom only.",
        source: {
          label: "Nottingham City Council — pest advice for residents and businesses",
          url: "https://nottinghamcity.gov.uk/information-for-residents/community/environmental-health-and-public-protection/pest-control/pests-advice-for-nottingham-residents-and-businesses/",
        },
      },
      {
        title: "The council can require owners or occupiers to deal with rodent problems",
        text: "The same guidance explains that the council can enforce the legal duty to keep land and property free from rats and mice. For landlords or shared properties, document where activity is occurring and whether the quote includes inspection, treatment, repeat visits and proofing so responsibilities are clear.",
        source: {
          label: "Nottingham City Council — pest advice for residents and businesses",
          url: "https://nottinghamcity.gov.uk/information-for-residents/community/environmental-health-and-public-protection/pest-control/pests-advice-for-nottingham-residents-and-businesses/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Nottingham by postcode, pest type and treatment programme. Example areas include:",
    sideTitle: "Describe signs, routes and repeat activity",
    sideCopy: "Say where droppings, scratching, gnaw marks, nests or insect activity appear and when they are most noticeable. Mention drains, cellars, lofts, food areas, pets and neighbouring properties where relevant.",
    noteLead: "Compare the whole treatment plan.",
    noteText: "Ask whether inspection, repeat visits, monitoring, proofing and any drainage investigation are included rather than comparing only the first treatment visit.",
  },
  faq: [
    ["Does Nottingham City Council provide pest-control treatment?", "No. The council currently provides advice and enforcement but directs residents and businesses to professional pest-control specialists for treatment."],
    ["How much does pest control cost in Nottingham?", "It depends on the pest, property size, severity, number of visits and proofing required. Compare the complete treatment scope rather than a headline call-out."],
    ["What if rats keep coming back?", "Recurring activity can indicate food sources, access holes or drainage and sewer defects. Ask whether the contractor will investigate the route as well as use bait or traps."],
    ["Can I post a wasp, bed-bug or insect job?", "Yes. Pest-control requests can cover rodents, wasps, bed bugs and a range of other domestic pest problems."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Nottingham?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Nottingham pest controllers and their treatment plans.",
    buttonLabel: "Get Nottingham pest-control quotes",
  },
});
