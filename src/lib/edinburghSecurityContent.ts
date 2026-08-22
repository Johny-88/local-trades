import { makeEdinburghProfile } from "./edinburghProfileBase";

export const locksmithsEdinburgh = makeEdinburghProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving home security in Edinburgh? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Edinburgh?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing keys after a move or upgrading security. Add a clear photo of the lock and whole door if possible so suitable Edinburgh locksmiths can judge the likely work.",
  },
  localContext: {
    eyebrow: "Edinburgh home-security context",
    title: "Security upgrades should strengthen the whole entry point without ignoring protected-building constraints",
    intro: "Police Scotland recommends locking doors and windows, fitting extra locks where appropriate and choosing certified security products. In Edinburgh's protected historic buildings, however, changing an external door can also raise listed-building consent questions, so security and conservation sometimes need to be considered together.",
    items: [
      {
        title: "Police Scotland recommends certified security products and stronger door and window protection",
        text: "Police Scotland's housebreaking guidance recommends locking doors and windows, fitting extra locks, using a security bar and choosing products certified through schemes such as Secured by Design or Sold Secure. For an upgrade, ask the locksmith to assess the cylinder or lock together with the door, frame, keeps and hinges rather than replacing one weak component in isolation.",
        source: {
          label: "Police Scotland — break-in and housebreaking prevention",
          url: "https://www.scotland.police.uk/advice/your-home/your-house/",
        },
      },
      {
        title: "Alterations to a listed Edinburgh building may need listed-building consent",
        text: "The City of Edinburgh Council advises owners to check listed-building consent before altering a listed property and notes that other permissions, including a building warrant, can also apply. If a security upgrade changes the appearance or fabric of a historic entrance door rather than simply repairing a lock, confirm the consent position before irreversible work.",
        source: {
          label: "City of Edinburgh Council — listed building consent",
          url: "https://www.edinburgh.gov.uk/planning-applications-1/apply-listed-building-consent",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Edinburgh by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send photos of the lock, handle and whole door",
    sideCopy: "A mortice lock, night latch, euro cylinder and multi-point uPVC mechanism are different jobs. Older timber doors in areas such as the New Town or Stockbridge may also need a more repair-led approach than a modern composite entrance.",
    noteLead: "Ask what security standard is being fitted.",
    noteText: "For an upgrade, compare the lock or cylinder standard, door condition, frame, keeps and hinges as well as the call-out price.",
  },
  faq: [
    ["How much does a locksmith cost in Edinburgh?", "The price depends on time of day, urgency, lock type, parts and whether the job is entry only or includes repair or replacement. Ask for the call-out and likely parts cost before agreeing where possible."],
    ["What should I ask about when replacing a front-door lock?", "Ask what standard is being fitted, whether the door and frame are sound and whether any hinges, keeps or multi-point components also need attention."],
    ["What does Police Scotland recommend for home security?", "Its guidance includes keeping doors and windows locked, considering extra locks or security bars and using recognised certified security products."],
    ["Can a lock or door change need consent on a listed Edinburgh property?", "Potentially. A simple lock repair is different from altering the fabric or appearance of a protected door, so check the listed-building position for substantial changes."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Edinburgh?",
    copy: "Describe the lock, door and urgency once, then compare interested Edinburgh locksmiths and their quotes.",
    buttonLabel: "Get Edinburgh locksmith quotes",
  },
});

export const pestControllersEdinburgh = makeEdinburghProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, insects or another pest problem in Edinburgh? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Edinburgh?",
    copy: "Enter the postcode and describe the pest, signs, rooms or outdoor areas affected and any treatment already attempted. Photos of droppings, damage, entry points or insects can help suitable Edinburgh pest controllers judge the problem.",
  },
  localContext: {
    eyebrow: "Edinburgh pest-control context",
    title: "The council operates a qualified pest-control service and has a specific route for public-land rat sightings",
    intro: "Edinburgh City Council has its own pest-control technicians and provides advice on public-health pests, insect identification and rat sightings on council-owned land. That gives homeowners a useful local benchmark: identify the pest properly and compare the whole inspection and treatment plan, not just the first visit.",
    items: [
      {
        title: "Edinburgh has a council pest-control team with professional pest-industry memberships",
        text: "The council says its qualified technicians use professional-grade products to control pests of public-health significance and that the service is associated with the British Pest Control Association and National Pest Technicians Association. When comparing private quotes, ask what the price includes for identification, treatment, repeat visits and monitoring.",
        source: {
          label: "City of Edinburgh Council — pest control",
          url: "https://www.edinburgh.gov.uk/pests/pest-control",
        },
      },
      {
        title: "Rat sightings on council-owned land should be reported with precise location details",
        text: "The council asks residents to report rat sightings on council-owned land and to say whether the sighting was in a garden or public communal area. For a private-property job, similarly record where activity is appearing, when it happens and whether it involves a shared close, garden, bin area, cellar or another access route.",
        source: {
          label: "City of Edinburgh Council — pest control and rat sightings",
          url: "https://www.edinburgh.gov.uk/pests/pest-control",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Edinburgh by postcode, pest type and treatment programme. Example areas include:",
    sideTitle: "Describe signs, entry points and repeat activity",
    sideCopy: "Say where droppings, scratching, gnaw marks, nests or insect activity appear and when they are most noticeable. Mention shared closes, basements, roof spaces, gardens, drains, food areas and neighbouring properties where relevant.",
    noteLead: "Compare the whole treatment plan.",
    noteText: "Ask whether inspection, repeat visits, monitoring and proofing are included rather than comparing only the first treatment visit.",
  },
  faq: [
    ["Does the City of Edinburgh Council provide pest-control advice or treatment?", "Yes. The council operates a pest-control service with qualified technicians and also provides advice, insect identification and a route for reporting rat sightings on council-owned land."],
    ["How much does pest control cost in Edinburgh?", "It depends on the pest, property size, severity and number of visits. Compare the complete treatment scope rather than only the first call-out."],
    ["What if rats or mice keep coming back?", "Recurring activity can point to access routes, food sources or shared-building issues. Ask whether inspection and proofing are included instead of repeatedly treating symptoms only."],
    ["Can I post an insect-identification or treatment job?", "Yes. Describe what you have seen and include clear photos where possible; the category can cover rodents and a range of insect problems."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Edinburgh?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Edinburgh pest controllers and their treatment plans.",
    buttonLabel: "Get Edinburgh pest-control quotes",
  },
});
