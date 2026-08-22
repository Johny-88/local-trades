import { makeReadingProfile } from "./readingProfileBase";

export const locksmithsReading = makeReadingProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving door security in Reading? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Reading?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing keys after a move or upgrading security. Add a clear photo of the lock or door if possible so suitable Reading locksmiths can judge the likely work.",
  },
  localContext: {
    eyebrow: "Reading home-security context",
    title: "The right lock standard matters as much as getting the door open",
    intro: "Thames Valley Police publishes practical lock guidance for the Reading area, including advice on euro cylinders, multi-point doors and security-accredited replacement products.",
    items: [
      {
        title: "Thames Valley Police recommends TS007 3-star euro cylinders",
        text: "Police guidance for replacement euro-cylinder locks recommends choosing a 3-star cylinder meeting TS007 to resist common attack methods such as snapping, drilling and bumping. If you are upgrading rather than simply replacing like for like, ask what standard is being fitted.",
        source: {
          label: "Thames Valley Police — door and window lock advice",
          url: "https://www.thamesvalley.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "New doors should use tested security products",
        text: "Thames Valley Police advises people fitting a new door to consider security-accredited products tested to standards such as PAS 24:2022. A locksmith can also assess hinges, frames, letterboxes and multi-point locking rather than looking only at the cylinder.",
        source: {
          label: "Thames Valley Police — door security",
          url: "https://www.thamesvalley.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Reading by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send a photo of the lock and door",
    sideCopy: "A mortice lock, night latch, euro cylinder and multi-point uPVC mechanism are different jobs. A clear photo from inside and outside can help a locksmith bring the right parts.",
    noteLead: "Ask what is being fitted.",
    noteText: "For security upgrades, compare the lock or door standard as well as the call-out price and make sure the quote explains the replacement hardware.",
  },
  faq: [
    ["How much does a locksmith cost in Reading?", "The price depends on time of day, urgency, lock type, whether parts are needed and whether the job is entry only or replacement. Ask for the call-out and likely parts cost before agreeing where possible."],
    ["What euro-cylinder standard should I ask about?", "Thames Valley Police recommends a 3-star euro cylinder meeting TS007 when replacing this type of lock."],
    ["Can a locksmith improve a weak door as well as change the lock?", "Many can assess frames, hinges, cylinders, multi-point mechanisms and other door-security weaknesses. Explain whether you want repair, entry or a security upgrade."],
    ["Can I post an urgent lockout?", "Yes. State clearly that the job is urgent, the postcode, door type and whether keys are lost, inside the property or broken in the lock."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Reading?",
    copy: "Describe the lock, door and urgency once, then compare interested Reading locksmiths and their quotes.",
    buttonLabel: "Get Reading locksmith quotes",
  },
});

export const pestControllersReading = makeReadingProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps, insects or another pest problem in Reading? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Reading?",
    copy: "Enter the postcode and describe the pest, signs, rooms or outdoor areas affected and any treatment already attempted. Photos of droppings, damage, entry points or nests can help suitable Reading pest controllers judge the problem.",
  },
  localContext: {
    eyebrow: "Reading pest-control context",
    title: "Reading recommends professional rodent control and fixing the access problem too",
    intro: "Reading Borough Council does not provide a general pest-control treatment service. Its local rat guidance strongly encourages professional help and stresses proofing, waste control and drainage condition alongside treatment.",
    items: [
      {
        title: "Reading advises using an accredited professional for rats",
        text: "The council says over-the-counter rat bait is not recommended and strongly advises using professional pest control, such as a contractor accredited by BASIS PROMPT, BPCA or NPTA. A good service should include inspection, an action plan and advice on structural repairs where needed.",
        source: {
          label: "Reading Borough Council — rat prevention",
          url: "https://www.reading.gov.uk/nuisance-animals-and-pests/pest-control/rat-prevention/",
        },
      },
      {
        title: "Treatment alone may not solve an entry-point problem",
        text: "Reading's pest-control guidance tells residents to be clear whether they want baiting only, a survey and advice, or treatment plus proofing work. For rodents especially, ask the contractor to identify gaps, damaged drains, vents or other access routes rather than pricing bait alone.",
        source: {
          label: "Reading Borough Council — pest control",
          url: "https://www.reading.gov.uk/nuisance-animals-and-pests/pest-control/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Reading by postcode, pest type and treatment programme. Example areas include:",
    sideTitle: "Describe signs, not just the pest name",
    sideCopy: "Say where droppings, scratching, gnaw marks, nests or insect activity appear and when they are most noticeable. Mention pets, children, food areas and neighbouring properties where relevant.",
    noteLead: "Proofing can matter as much as baiting.",
    noteText: "For recurring rodents, ask whether the quote includes identifying and addressing entry points or whether proofing will be priced separately.",
  },
  faq: [
    ["Does Reading Borough Council provide pest-control treatment?", "No general treatment service is provided. The council gives advice and recommends using a private pest-control contractor where treatment is needed."],
    ["Should I use a professional for rats?", "Reading Borough Council strongly advises professional rodent control and points residents toward accredited pest-control organisations."],
    ["Why do rats keep coming back?", "Recurring infestations can be linked to food, waste, damaged drains or structural entry points. Ask for inspection and proofing advice as well as treatment."],
    ["Can I post a wasp or insect job?", "Yes. Pest-control requests can cover rodents, wasps and other insects as well as other common domestic pest problems."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Reading?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Reading pest controllers and their treatment plans.",
    buttonLabel: "Get Reading pest-control quotes",
  },
});
