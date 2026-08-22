import { makeLiverpoolProfile } from "./liverpoolProfileBase";

export const locksmithsLiverpool = makeLiverpoolProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving home security in Liverpool? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Liverpool?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing keys after a move or upgrading security. Add clear photos of the lock and whole door if possible so suitable Liverpool locksmiths can judge the likely work.",
  },
  localContext: {
    eyebrow: "Liverpool home-security context",
    title: "Merseyside Police recommends security-accredited products and proper locking hardware rather than treating the cylinder alone",
    intro: "Merseyside Police publishes practical home-security guidance covering doors and windows. Its window advice recommends security-accredited replacement products, key-operated locks where appropriate and PAS 24:2022 as a good benchmark for new windows.",
    items: [
      {
        title: "Accessible windows need more than ordinary glass and a basic latch",
        text: "Merseyside Police recommends measures such as laminated glass or security film, sash stops, key-operated locks and opening restrictors for vulnerable windows. If a security job follows a burglary attempt or includes window hardware, ask the locksmith to assess the opening as a whole rather than changing one component in isolation.",
        source: {
          label: "Merseyside Police — window security",
          url: "https://www.merseyside.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
      {
        title: "Security-accredited replacement products are worth specifying",
        text: "Merseyside Police says replacement windows should use security-accredited products tested to British standards and identifies PAS 24:2022 as a good standard. When upgrading doors or windows, ask the locksmith or installer what tested standard applies to the complete product and locking system.",
        source: {
          label: "Merseyside Police — protecting your home from crime",
          url: "https://www.merseyside.police.uk/cp/crime-prevention/protect-home-crime/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Liverpool by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send photos of the lock, handle and whole door",
    sideCopy: "A mortice lock, night latch, euro cylinder and multi-point uPVC mechanism are different jobs. Clear photos from inside and outside can help identify likely parts before the locksmith arrives.",
    noteLead: "Ask what security standard is being fitted.",
    noteText: "For an upgrade, compare the cylinder, lock case, frame, keeps and hinges as well as the call-out price rather than replacing one weak component in isolation.",
  },
  faq: [
    ["How much does a locksmith cost in Liverpool?", "The price depends on time of day, urgency, lock type, parts and whether the job is entry only or includes repair or replacement. Ask for the call-out and likely parts cost before agreeing where possible."],
    ["What should I ask about when upgrading home security?", "Ask what standard applies to the complete door or window, whether the frame and keeps are sound and whether the proposed hardware addresses the actual weak point."],
    ["What does Merseyside Police recommend for replacement windows?", "Its guidance recommends security-accredited products and identifies PAS 24:2022 as a good standard to consider."],
    ["Can I post an urgent lockout?", "Yes. State clearly that the job is urgent, give the postcode and door type and explain whether keys are lost, inside the property or broken in the lock."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Liverpool?",
    copy: "Describe the lock, door and urgency once, then compare interested Liverpool locksmiths and their quotes.",
    buttonLabel: "Get Liverpool locksmith quotes",
  },
});

export const pestControllersLiverpool = makeLiverpoolProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps or another pest problem in Liverpool? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Liverpool?",
    copy: "Enter the postcode and describe the pest, signs, rooms or outdoor areas affected and any treatment already attempted. Photos of droppings, damage, entry points or nests can help suitable Liverpool pest controllers judge the problem.",
  },
  localContext: {
    eyebrow: "Liverpool pest-control context",
    title: "Liverpool City Council runs its own domestic pest-control service, giving homeowners a useful local comparison point",
    intro: "Liverpool City Council currently provides domestic treatment for ants, mice, rats and wasps, as well as commercial pest-control services. That makes it useful to compare not only price but also whether a private contractor includes identification, treatment, follow-up and proofing.",
    items: [
      {
        title: "The council currently treats common domestic pests",
        text: "Liverpool City Council's domestic pest service covers ants, mice, rats and wasps. If you compare private contractors, ask whether the quoted price includes diagnosis, the first treatment, any repeat visits and what happens if activity continues after the initial appointment.",
        source: {
          label: "Liverpool City Council — pest control",
          url: "https://liverpool.gov.uk/environmental-problems/pest-control/",
        },
      },
      {
        title: "Recurring pests may need the underlying access route fixed",
        text: "A treatment can fail if gaps, damaged vents, drains, food sources or structural access points remain. When rats or mice keep returning, ask whether the contractor will inspect and advise on proofing rather than simply repeating bait or traps.",
        source: {
          label: "Liverpool City Council — pest identification and prevention",
          url: "https://liverpool.gov.uk/environmental-problems/pest-control/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Liverpool by postcode, pest type and treatment programme. Example areas include:",
    sideTitle: "Describe signs, entry points and repeat activity",
    sideCopy: "Say where droppings, scratching, gnaw marks, nests or insect activity appear and when they are most noticeable. Mention drains, lofts, cellars, food areas, pets and neighbouring properties where relevant.",
    noteLead: "Compare the whole treatment plan.",
    noteText: "Ask whether inspection, repeat visits, monitoring and proofing advice are included rather than comparing only the first visit.",
  },
  faq: [
    ["Does Liverpool City Council provide pest-control treatment?", "Yes. The council currently provides domestic treatment for ants, mice, rats and wasps and also offers commercial pest-control services."],
    ["How much does pest control cost in Liverpool?", "It depends on the pest, severity, property size and number of visits. Compare what inspection, treatment and follow-up are included rather than only the first-visit price."],
    ["What if rats or mice keep returning?", "Recurring activity can point to unresolved entry points, food sources or drainage issues. Ask whether inspection and proofing advice are included as well as treatment."],
    ["Can I post a wasp job?", "Yes. Liverpool City Council itself treats wasps domestically, and private pest controllers can also respond to wasp and other pest-control requests."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Liverpool?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Liverpool pest controllers and their treatment plans.",
    buttonLabel: "Get Liverpool pest-control quotes",
  },
});
