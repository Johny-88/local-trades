import { makeBromleyProfile } from "./bromleyProfileBase";

export const locksmithsBromley = makeBromleyProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving door security in Bromley? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Bromley?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing keys after a move or upgrading security. Add a clear photo of the lock or door if possible so suitable Bromley locksmiths can judge the likely work.",
  },
  localContext: {
    eyebrow: "Bromley home-security context",
    title: "Metropolitan Police guidance gives useful standards to compare when upgrading locks and doors",
    intro: "Bromley is policed by the Metropolitan Police, whose current home-security guidance distinguishes simple lock replacement from a wider door-security upgrade. That makes the lock standard, frame and door construction worth describing in the job brief.",
    items: [
      {
        title: "The Met recommends TS007 3-star euro cylinders when changing this lock type",
        text: "Metropolitan Police lock guidance recommends a 3-star rated euro cylinder meeting TS007 when replacing euro-cylinder locks, helping resist common attack methods including snapping, drilling and bumping. Ask what standard is being fitted rather than comparing only the call-out price.",
        source: {
          label: "Metropolitan Police — door and window lock advice",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "New doors should use tested security products",
        text: "The Met advises using security-accredited products for new doors and points homeowners to PAS 24:2022. Its guidance also highlights frames, hinges, letterboxes and patio-door anti-lift protection, so an upgrade can involve more than the cylinder alone.",
        source: {
          label: "Metropolitan Police — door security",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Bromley by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send a photo of the lock and door",
    sideCopy: "A mortice lock, night latch, euro cylinder and multi-point uPVC mechanism are different jobs. A clear photo from inside and outside can help a locksmith bring the right parts.",
    noteLead: "Ask what is actually being fitted.",
    noteText: "For a security upgrade, compare the proposed lock or door standard as well as the call-out price and make sure replacement hardware is identified in the quote.",
  },
  faq: [
    ["How much does a locksmith cost in Bromley?", "The price depends on time of day, urgency, lock type, parts and whether the job is entry only or replacement. Ask for the likely call-out and parts cost before agreeing where possible."],
    ["What euro-cylinder standard does the Met recommend?", "Metropolitan Police guidance recommends a 3-star euro cylinder meeting TS007 when changing this type of lock."],
    ["What should I ask about for a new front door?", "The Met recommends security-accredited products and points to PAS 24:2022 for new doors."],
    ["Can I post an urgent lockout?", "Yes. State clearly that the job is urgent, the postcode, door type and whether keys are lost, inside or broken in the lock."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Bromley?",
    copy: "Describe the lock, door and urgency once, then compare interested Bromley locksmiths and their quotes.",
    buttonLabel: "Get Bromley locksmith quotes",
  },
});

export const pestControllersBromley = makeBromleyProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps, insects or another pest problem in Bromley? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Bromley?",
    copy: "Enter the postcode and describe the pest, signs, rooms or outdoor areas affected and any treatment already attempted. Photos of droppings, damage, entry points or nests can help suitable Bromley pest controllers judge the problem.",
  },
  localContext: {
    eyebrow: "Bromley pest-control context",
    title: "Bromley's own guidance stresses prevention, proofing and diagnosis rather than poison alone",
    intro: "The council's pest guidance explains that rodents can enter through broken drains, doors, windows and gaps in the building. That makes a proper inspection and proofing plan particularly important where a pest problem keeps returning.",
    items: [
      {
        title: "Broken drains and small structural gaps can provide rodent access",
        text: "Bromley's rodent guidance says rats can enter through broken drains and that rodents can exploit small gaps around doors, roofs, pipes and cables. Tell the pest controller about drainage smells, damaged vents, gaps or recurring activity so the inspection looks beyond baiting alone.",
        source: {
          label: "London Borough of Bromley — pest control in a food business: rodents",
          url: "https://www.bromley.gov.uk/leaflet/260989/11/755/d",
        },
      },
      {
        title: "A good pest contractor should inspect, advise and monitor",
        text: "Bromley's contractor guidance says pest control should focus on preventing access and that a good contractor should inspect conditions, highlight problems and suggest improvements rather than simply put down traps or poison. Ask whether proofing and follow-up visits are included in the quoted service.",
        source: {
          label: "London Borough of Bromley — choosing a pest control contractor",
          url: "https://www.bromley.gov.uk/leaflet/261476/11/730/d",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Bromley by postcode, pest type and treatment programme. Example areas include:",
    sideTitle: "Describe signs, not just the pest name",
    sideCopy: "Say where droppings, scratching, gnaw marks, nests or insect activity appear and when they are most noticeable. Mention pets, children, food areas and neighbouring properties where relevant.",
    noteLead: "Proofing can matter as much as treatment.",
    noteText: "For recurring rodents, ask whether the quote includes identifying entry points and structural causes or whether proofing will be priced separately.",
  },
  faq: [
    ["How much does pest control cost in Bromley?", "The price depends on the pest, extent of infestation, number of visits, access and whether proofing or repair work is included."],
    ["Can rats enter through damaged drains?", "Yes. Bromley's guidance specifically notes that rats can gain access from sewers through broken drains."],
    ["Should pest control include proofing advice?", "Bromley's guidance recommends a preventative approach in which contractors identify access and maintenance problems as well as treating the infestation."],
    ["Can I post a wasp or insect job?", "Yes. Pest-control requests can cover rodents, wasps and other common domestic pests."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Bromley?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Bromley pest controllers and their treatment plans.",
    buttonLabel: "Get Bromley pest-control quotes",
  },
});
