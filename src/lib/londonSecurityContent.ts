import { makeLondonProfile } from "./londonProfileBase";

export const locksmithsLondon = makeLondonProfile("locksmiths", {
  heroCopy: "Locked out, replacing a cylinder or improving door security in London? Describe the door, lock and urgency once, then compare locksmiths who cover your area.",
  answer: { title: "Looking for a locksmith near you in London?", copy: "Enter the postcode, door type and what has happened. Photos of the lock or multipoint mechanism can help London locksmiths identify likely parts before travel, especially for urgent work." },
  localContext: {
    eyebrow: "London home security",
    title: "Security standards and flat fire doors both matter when locks are changed",
    intro: "A lock upgrade should improve security without damaging a door's other safety functions.",
    items: [
      { title: "The Metropolitan Police recommends 3-star TS007 euro cylinders", text: "The Met's current door and window lock advice says that when changing euro-cylinder locks, homeowners should choose a 3-star cylinder meeting TS007 standards to protect against common attack methods such as snapping, drilling and bumping.", source: { label: "Metropolitan Police — door and window lock advice", url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/" } },
      { title: "Many London flat entrance doors are fire doors", text: "London Fire Brigade explains that a flat front door opening onto a common area needs to be a fire door and warns against unauthorised alterations to the door or its components. If a locksmith is working on a flat entrance door, the replacement hardware must not compromise the fire-door assembly.", source: { label: "London Fire Brigade — fire doors", url: "https://www.london-fire.gov.uk/safety/the-home/fire-doors/" } },
    ],
  },
  areaCopy: {
    intro: "Locksmiths often cover defined London postcodes and emergency radiuses. Example areas include:",
    sideTitle: "Send a photo before the locksmith travels",
    sideCopy: "London has many different door types, from timber mortice-lock doors to modern multipoint apartment doors. A photo can help identify likely tools and parts.",
    noteLead: "Do not treat a flat fire door like an ordinary door.",
    noteText: "If the entrance door is fire-rated, replacement locks and hardware should remain compatible with the door's fire-safety requirements.",
  },
  faq: [
    ["How much does a locksmith cost in London?", "There is no fixed London rate. A simple daytime job may be around £80–£120, while replacement parts, difficult mechanisms and out-of-hours attendance can push the total higher."],
    ["What lock standard does the Met recommend for euro cylinders?", "The Metropolitan Police advises choosing a 3-star euro cylinder that meets TS007 when changing this type of lock."],
    ["Can a locksmith change the lock on my flat front door?", "Yes where appropriate, but if the door opens onto a common area it is likely to be a fire door. The replacement hardware and work should not compromise its fire performance."],
    ["Should I send a lock photo first?", "Yes. A clear photo of the lock face, handle and door edge can help a locksmith identify the likely mechanism and parts."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare locksmiths in London?", copy: "Describe the door, lock and urgency once, then compare interested London locksmiths and their proposed prices.", buttonLabel: "Get London locksmith quotes" },
});

export const pestControllersLondon = makeLondonProfile("pest-controllers", {
  heroCopy: "Seeing rats, mice, insects or another pest problem in London? Describe the signs, rooms and access points once, then compare pest-control professionals who cover your area.",
  answer: { title: "Looking for a pest controller near you in London?", copy: "Enter the postcode and explain what you have seen or heard, where activity appears and whether the property is a house, flat or commercial unit. Photos of droppings, damage or insects can help with identification before treatment." },
  localContext: {
    eyebrow: "London pest-control context",
    title: "Sewer routes and dense housing can make the source more important than the sighting",
    intro: "In London, pest activity can cross property boundaries, drains and communal spaces, so the first task is often identifying where it originates.",
    items: [
      { title: "Thames Water says sewers can provide a route for rodents", text: "Thames Water advises property owners with rodents to contact the local council or an approved pest controller first. It notes that public sewers can provide habitat and routes for rats, while pipes within the property boundary are generally the owner's responsibility. If a sewer defect is confirmed as the source, Thames Water can investigate.", source: { label: "Thames Water — rats, rodents and pest control", url: "https://www.thameswater.co.uk/help/water-and-waste-help/rodents" } },
      { title: "London has unusually high housing density", text: "The London Assembly Research Unit reports 24.1 dwellings per hectare across London in 2023, rising to 50.99 in inner London. Dense terraces, flats and shared service routes mean a pest problem can involve adjacent units or communal areas rather than a single room in isolation.", source: { label: "London Assembly Research Unit — London's Housing Stock", url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" } },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover London by postcode and pest type. Example areas include:",
    sideTitle: "Tell the controller whether the problem crosses boundaries",
    sideCopy: "In flats and terraces, activity in communal cupboards, bin stores, neighbouring units or drains can change the investigation and proofing plan.",
    noteLead: "Treatment alone may not solve the cause.",
    noteText: "Ask what entry points, food sources, drainage defects or building gaps need addressing after the initial treatment.",
  },
  faq: [
    ["How much does pest control cost in London?", "A simple visit may start around £80–£150, while rodents, bed bugs and other infestations that need repeated visits or proofing can cost substantially more."],
    ["What should I do if rats seem to be coming from a drain?", "Thames Water recommends contacting the local council or an approved pest controller first. If they confirm a public sewer defect is the source, Thames Water can investigate its network."],
    ["Does living in a flat change pest treatment?", "It can. Communal voids, bin stores, neighbouring units and shared pipe routes can all matter, so tell the controller if activity appears outside your own flat."],
    ["Will one visit always solve the problem?", "No. Some pests need staged treatment, monitoring or proofing after the initial visit. Ask what follow-up is included."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare pest controllers in London?", copy: "Describe the signs and affected areas once, then compare interested London pest-control professionals and treatment plans.", buttonLabel: "Get London pest-control quotes" },
});
