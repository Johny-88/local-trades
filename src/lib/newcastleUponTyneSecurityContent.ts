import { makeNewcastleUponTyneProfile } from "./newcastleUponTyneProfileBase";

export const locksmithsNewcastleUponTyne = makeNewcastleUponTyneProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or improving door security in Newcastle upon Tyne? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Newcastle upon Tyne?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing keys after a move or upgrading security. Add a clear photo of the lock or door if possible so suitable Newcastle locksmiths can judge the likely work.",
  },
  localContext: {
    eyebrow: "Newcastle home-security context",
    title: "Northumbria Police recommends treating the door, frame and lock as one security system",
    intro: "Northumbria Police publishes practical home-security guidance covering robust doors, British Standard locks, vulnerable euro cylinders and security-accredited replacement products.",
    items: [
      {
        title: "Check more than the visible lock",
        text: "Northumbria Police advises that a locksmith can assess whether a door is solid timber or robust composite, reinforce the frame and check whether locks and hinges are British Standard approved. For a security upgrade, ask what is being improved beyond simply replacing the cylinder.",
        source: {
          label: "Northumbria Police — door security",
          url: "https://www.northumbria.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "New doors should use tested security products",
        text: "Northumbria Police recommends security-accredited products for new doors and refers homeowners to PAS 24:2022. Its guidance also warns that protruding euro-profile cylinders can be vulnerable to snapping, so the exact replacement hardware matters.",
        source: {
          label: "Northumbria Police — protecting your home from crime",
          url: "https://www.northumbria.police.uk/cp/crime-prevention/protect-home-crime/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Newcastle upon Tyne by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send a photo of the lock and whole door",
    sideCopy: "A mortice lock, night latch, euro cylinder and multi-point uPVC mechanism are different jobs. Clear photos from inside and outside can help identify likely parts before the locksmith arrives.",
    noteLead: "Ask what standard is being fitted.",
    noteText: "For a security upgrade, compare the replacement lock, cylinder, frame and hinge specification as well as the call-out price.",
  },
  faq: [
    ["How much does a locksmith cost in Newcastle upon Tyne?", "The price depends on time of day, urgency, lock type, whether parts are needed and whether the job is entry only or replacement. Ask for the call-out and likely parts cost before agreeing where possible."],
    ["Can a locksmith improve a weak door as well as change the lock?", "Many can assess frames, hinges, cylinders and multi-point mechanisms as well as the lock itself. Explain whether you want entry, repair or a broader security upgrade."],
    ["What should I look for in a new door?", "Northumbria Police recommends security-accredited products and refers homeowners to PAS 24:2022 for new doors."],
    ["Can I post an urgent lockout?", "Yes. State clearly that the job is urgent, give the postcode and door type and explain whether keys are lost, inside the property or broken in the lock."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Newcastle upon Tyne?",
    copy: "Describe the lock, door and urgency once, then compare interested Newcastle locksmiths and their quotes.",
    buttonLabel: "Get Newcastle locksmith quotes",
  },
});

export const pestControllersNewcastleUponTyne = makeNewcastleUponTyneProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, wasps, insects or another pest problem in Newcastle upon Tyne? Describe what you have seen, where and for how long once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Newcastle upon Tyne?",
    copy: "Enter the postcode and describe the pest, signs, rooms or outdoor areas affected and any treatment already attempted. Photos of droppings, damage, entry points or nests can help suitable Newcastle pest controllers judge the problem.",
  },
  localContext: {
    eyebrow: "Newcastle pest-control context",
    title: "Treatment and proofing are separate parts of a recurring pest problem",
    intro: "Newcastle City Council operates its own qualified pest-control service, but its guidance is clear that treatment does not include building repairs such as filling holes, repairing drains or replacing damaged building components.",
    items: [
      {
        title: "Newcastle's pest team treats rodents and insects but does not carry out building repairs",
        text: "The council says its technicians provide rodent, insect and bird-proofing pest-control services but do not carry out joinery or building work such as filling holes, removing kitchen units or replacing missing roof tiles. When comparing private pest-control quotes, ask whether proofing or repairs are included or need a separate trade.",
        source: {
          label: "Newcastle City Council — pest control",
          url: "https://www.newcastle.gov.uk/services/environment-and-waste/pest-control",
        },
      },
      {
        title: "Broken drains and holes can be rat entry points",
        text: "Newcastle's rat guidance says technicians try to identify causes and possible entry points such as holes or broken drains, while the owner or occupier remains responsible for repairs. For recurring rodents, ask for inspection of access points as well as treatment.",
        source: {
          label: "Newcastle City Council — rats",
          url: "https://www.newcastle.gov.uk/services/environment-and-waste/pest-control/rats",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Newcastle upon Tyne by postcode, pest type and treatment programme. Example areas include:",
    sideTitle: "Describe signs, not just the pest name",
    sideCopy: "Say where droppings, scratching, gnaw marks, nests or insect activity appear and when they are most noticeable. Mention pets, children, food areas and neighbouring properties where relevant.",
    noteLead: "Proofing may need separate work.",
    noteText: "For recurring rodents, ask whether the quote includes identifying entry points and whether repairs or proofing are included or will need a builder, drainage specialist or other trade.",
  },
  faq: [
    ["Does Newcastle City Council provide pest-control treatment?", "Yes. The council provides a paid pest-control service for a range of rodents and insects, while private pest controllers can also be compared through this page."],
    ["Can damaged drains let rats into a property?", "Yes. Newcastle City Council specifically identifies holes and broken drains as possible rat entry points."],
    ["Does pest treatment include repairing holes or damaged building fabric?", "Not necessarily. Newcastle's own service explicitly separates pest treatment from building and joinery repairs, so check what a private quote includes."],
    ["Can I post a wasp or insect job?", "Yes. Pest-control requests can cover rodents, wasps and a range of common domestic insect problems."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Newcastle upon Tyne?",
    copy: "Describe the pest, signs and affected areas once, then compare interested Newcastle pest controllers and their treatment plans.",
    buttonLabel: "Get Newcastle pest-control quotes",
  },
});
