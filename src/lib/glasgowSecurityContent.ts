import { makeGlasgowProfile } from "./glasgowProfileBase";

export const locksmithsGlasgow = makeGlasgowProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving home security in Glasgow? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Glasgow?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing keys after a move or upgrading security. Add clear photos of the lock, handle and whole door where possible.",
  },
  localContext: {
    eyebrow: "Glasgow home-security and heritage context",
    title: "Police Scotland recommends certified security products, while some traditional Glasgow doors have heritage constraints",
    intro: "For ordinary security upgrades, Police Scotland advises locking doors and windows and using security products certified by recognised schemes. In Glasgow's listed buildings and conservation areas, however, original external doors and close entrances can also contribute to protected architectural character.",
    items: [
      {
        title: "Police Scotland points homeowners toward recognised security standards",
        text: "Police Scotland recommends keeping doors and windows locked, fitting extra locks where needed and choosing security products certified by Secured by Design or Sold Secure. For a lock upgrade, compare the cylinder or lock, door, frame, keeps and hinges rather than judging the job only by the call-out price.",
        source: {
          label: "Police Scotland — break-in and housebreaking prevention",
          url: "https://www.scotland.police.uk/advice/your-home/",
        },
      },
      {
        title: "Original external doors can be important features in Glasgow's historic buildings",
        text: "Glasgow planning guidance says original external doors, including storm doors, front entrance doors, close doors and rear entrance doors, contribute to the character of listed buildings and conservation areas and should generally be retained where possible. If a security job involves replacing an entire external door rather than just the lock, check the property's planning and listed-building status first.",
        source: {
          label: "Glasgow City Council — historic environment guidance on external doors",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDN810GDNUTZ3",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Glasgow by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send photos of the lock and whole door",
    sideCopy: "A mortice lock, euro cylinder, night latch, multi-point uPVC mechanism and traditional close door are different jobs. Clear photos can help identify likely parts before the locksmith arrives.",
    noteLead: "Separate a lock change from a full door replacement.",
    noteText: "If the door itself is original to a listed building or conservation-area property, replacing it can raise planning issues that an ordinary cylinder or lock repair does not.",
  },
  faq: [
    ["How much does a locksmith cost in Glasgow?", "The price depends on urgency, time of day, lock type, parts and whether the job is entry only or includes repair or replacement. Ask for likely call-out and parts costs where possible."],
    ["What should I ask about when upgrading a front door lock?", "Ask what security standard is being fitted and whether the door, frame, hinges and keeps are sound as well as the lock itself."],
    ["Can conservation-area rules affect a Glasgow door replacement?", "Yes. Glasgow guidance protects original external doors in listed buildings and conservation areas. A full replacement can need more care than changing the lock hardware."],
    ["Can I post an urgent lockout?", "Yes. State clearly that the job is urgent, give the postcode and door type and explain whether keys are lost, inside or broken in the lock."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Glasgow?",
    copy: "Describe the lock, door and urgency once, then compare interested Glasgow locksmiths and their quotes.",
    buttonLabel: "Get Glasgow locksmith quotes",
  },
});

export const pestControllersGlasgow = makeGlasgowProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps, insects or another pest problem in Glasgow? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Glasgow?",
    copy: "Enter the postcode and describe the pest, signs, rooms or outdoor areas affected and any treatment already attempted. Photos of droppings, damage, entry points or nests can help suitable Glasgow pest controllers judge the problem.",
  },
  localContext: {
    eyebrow: "Glasgow pest-control context",
    title: "Glasgow's own pest-control reporting highlights drainage defects and older building fabric as recurring rodent routes",
    intro: "Glasgow City Council has reported rising rat and mouse cases and identifies ageing sewer infrastructure, Victorian and Edwardian buildings, broken pipes, drain covers and voids in older buildings as factors that can help rodents enter and remain in properties.",
    items: [
      {
        title: "Council data shows substantial rat and mouse reporting in Glasgow",
        text: "A Glasgow City Council public-health report recorded 9,066 rat cases and 3,430 indoor mouse cases in 2023/24. That does not predict the risk at an individual address, but it shows why contractors should diagnose the source of repeated activity rather than treating every rodent call as a one-visit baiting job.",
        source: {
          label: "Glasgow City Council — environmental health and pest-control report",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDN81ZLDXDNZL",
        },
      },
      {
        title: "Broken drains and older building voids are specifically identified as access routes",
        text: "The same council report links rodent problems to ageing infrastructure, including sewers, broken pipes and drain covers, as well as voids in Victorian and Edwardian buildings. If rats or mice return after treatment, ask whether proofing and possible drainage defects are being investigated as part of the plan.",
        source: {
          label: "Glasgow City Council — rodent causes and proofing work",
          url: "https://onlineservices.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDN81ZLDXDNZL",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Glasgow by postcode, pest type and treatment programme. Example areas include:",
    sideTitle: "Describe signs, drains and repeat activity",
    sideCopy: "Say where droppings, scratching, gnaw marks, nests or insect activity appear and when they are most noticeable. Mention basements, closes, back courts, drains, lofts and neighbouring properties where relevant.",
    noteLead: "Compare the whole treatment plan.",
    noteText: "Ask whether inspection, repeat visits, monitoring, proofing and any recommended drainage investigation are included rather than comparing only the first visit.",
  },
  faq: [
    ["How much does pest control cost in Glasgow?", "It depends on the pest, property size, severity, access and number of visits. Compare the complete treatment scope, not only the first call-out."],
    ["Why might rats or mice keep returning in a Glasgow property?", "Glasgow City Council identifies broken drains, ageing sewer infrastructure and voids in older buildings among possible routes, alongside food and waste sources."],
    ["Should a pest controller block holes immediately?", "The correct timing depends on the pest and treatment plan. Ask the contractor how proofing fits with treatment so pests are not simply trapped or redirected elsewhere."],
    ["Can I post a wasp, bed-bug or insect job?", "Yes. Pest-control requests can cover rodents, wasps, bed bugs and other domestic pest problems."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Glasgow?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Glasgow pest controllers and their treatment plans.",
    buttonLabel: "Get Glasgow pest-control quotes",
  },
});
