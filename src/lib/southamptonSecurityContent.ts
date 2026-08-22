import { makeSouthamptonProfile } from "./southamptonProfileBase";

export const locksmithsSouthampton = makeSouthamptonProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or upgrading home security in Southampton? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Southampton?",
    copy: "Enter the postcode, explain whether the job is an emergency lockout, failed mechanism, lost key or security upgrade, and describe the door or window type so suitable Southampton locksmiths can respond accurately.",
  },
  localContext: {
    eyebrow: "Southampton home-security context",
    title: "The right lock upgrade should address the actual weak point, not just replace a cylinder like for like",
    intro: "Hampshire and Isle of Wight Constabulary publishes detailed door and window security advice, including recommendations relevant to common uPVC, composite and accessible-window setups.",
    items: [
      {
        title: "Police guidance highlights secure cylinders and accredited door standards",
        text: "Hampshire and Isle of Wight Constabulary advises checking that euro-profile cylinders do not protrude where they can be snapped and recommends security-accredited replacement doors tested to standards such as PAS 24:2022. A locksmith can assess the cylinder, multipoint mechanism, frame and hinges together rather than changing only the visible lock.",
        source: {
          label: "Hampshire and Isle of Wight Constabulary — door security",
          url: "https://www.hampshire.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Recent Southampton burglary advice stresses doors, windows and key security",
        text: "In a Southampton burglary appeal, Hampshire and Isle of Wight Constabulary reminded residents to correctly lock uPVC doors, secure windows and keep keys away from doors and letterboxes. If the job follows a break-in or attempted entry, ask the locksmith to review the wider entry point instead of simply fitting the same hardware again.",
        source: {
          label: "Hampshire and Isle of Wight Constabulary — Southampton burglary prevention advice",
          url: "https://www.hampshire.police.uk/news/hampshire/news/appeals/2025/july/appeal-for-cctv-or-dash-cam-footage-following-burglary-in-southampton/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Southampton by postcode, job type and urgency. Example areas include:",
    sideTitle: "Describe the whole door, not only the key problem",
    sideCopy: "Say whether the door is timber, uPVC, composite or aluminium and whether the handle lifts, the key turns, the mechanism jams or the frame has been damaged. Photos can help identify likely parts before arrival.",
    noteLead: "After forced entry, ask for a security review.",
    noteText: "A stronger cylinder will not solve a weak frame, damaged keeps or vulnerable glazing, so compare the whole repair specification.",
  },
  faq: [
    ["Can I find an emergency locksmith in Southampton?", "Yes. State that the job is urgent, describe the lock and door and explain whether you are locked out or the property cannot be secured."],
    ["What should I ask for when upgrading a uPVC door lock?", "Ask the locksmith to assess the cylinder, multipoint mechanism, handles, keeps and frame. Hampshire Police also recommends considering security-accredited products and appropriate cylinder length."],
    ["Should I change locks after losing keys?", "If the keys can be linked to your address or you cannot account for who may have them, changing or re-keying the relevant locks can be sensible. Explain the circumstances to the locksmith."],
    ["Can a locksmith improve window security too?", "Many can. Hampshire Police recommends suitable locks or sash stops for accessible windows and security-accredited products when windows are replaced."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Southampton?",
    copy: "Describe the lock, door and urgency once, then compare interested Southampton locksmiths and their quotes.",
    buttonLabel: "Get Southampton locksmith quotes",
  },
});

export const pestControllersSouthampton = makeSouthamptonProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, bedbugs, wasps or another pest problem in Southampton? Describe the signs, rooms and property type once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Southampton?",
    copy: "Enter the postcode, identify the pest if you can and explain where activity has been seen, how long it has been happening and whether children, pets or food areas are involved so suitable Southampton pest controllers can plan the right treatment.",
  },
  localContext: {
    eyebrow: "Southampton pest-control context",
    title: "Identify the pest and where the activity originates before choosing a treatment",
    intro: "Southampton City Council operates its own pest-control service and publishes separate advice for private properties, public spaces and pests it does not treat.",
    items: [
      {
        title: "The council treats many common pests but not every species",
        text: "Southampton City Council's pest-control service covers problems including mice, bedbugs and pigeon-related issues. It says it does not remove or treat bee swarms and directs residents to local bee-swarm collectors instead. Correct identification matters before chemicals or proofing work are booked.",
        source: {
          label: "Southampton City Council — pest control services",
          url: "https://www.southampton.gov.uk/environment/pest-control/pest-control-services/",
        },
      },
      {
        title: "Rat reports are handled differently depending on where the problem is",
        text: "Southampton asks residents who repeatedly see rats from a neighbouring property to encourage the owner to act and provides a confidential reporting route if they do not. Rats in public spaces can also be reported to the council. For activity inside your own property, a pest controller should inspect entry points and harbourage as well as placing treatment.",
        source: {
          label: "Southampton City Council — report a rat problem",
          url: "https://www.southampton.gov.uk/environmental-issues/pest-control/rats/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Southampton by postcode, pest type and treatment needs. Example areas include:",
    sideTitle: "Describe evidence rather than guessing the species",
    sideCopy: "Droppings, gnawing, bites, sounds, nest location and the time activity is seen can all help a professional identify the problem. Include clear photos where safe to do so.",
    noteLead: "Treatment without proofing can leave the cause in place.",
    noteText: "For rodents and recurring insects, ask what inspection, exclusion, follow-up visits and monitoring are included rather than comparing only the first treatment visit.",
  },
  faq: [
    ["How much does pest control cost in Southampton?", "It depends on the pest, property size, severity and number of visits. Southampton City Council publishes its own current treatment fees, while private contractors set their own prices."],
    ["Can I post a rat or mouse problem?", "Yes. Explain where evidence is appearing, whether neighbours are affected and any likely entry points so the contractor can assess both treatment and proofing."],
    ["Does Southampton City Council remove bee swarms?", "No. The council says it does not remove or treat bee swarms and directs residents to local bee-swarm collectors."],
    ["What if rats are coming from a neighbouring property?", "Southampton City Council recommends first discussing the issue with the neighbour and provides a confidential reporting route if they will not act."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Southampton?",
    copy: "Describe the pest signs and property once, then compare interested Southampton pest controllers and their treatment plans.",
    buttonLabel: "Get Southampton pest-control quotes",
  },
});
