import { makePortsmouthProfile } from "./portsmouthProfileBase";

export const locksmithsPortsmouth = makePortsmouthProfile("locksmiths", {
  heroCopy: "Locked out, changing locks or upgrading home security in Portsmouth? Describe the door, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Portsmouth?",
    copy: "Enter the postcode, explain whether the job is an emergency lockout, failed mechanism, lost key or security upgrade, and describe the door or window type so suitable Portsmouth locksmiths can respond accurately.",
  },
  localContext: {
    eyebrow: "Portsmouth home-security context",
    title: "The lock, door and frame should be treated as one security system",
    intro: "Hampshire and Isle of Wight Constabulary publishes detailed door-security advice and has repeatedly reminded Portsmouth residents to secure uPVC and multi-point doors correctly. That makes the hardware standard and whole-door condition worth checking when comparing quotes.",
    items: [
      {
        title: "Police guidance recommends secure doors and correctly sized euro cylinders",
        text: "Hampshire and Isle of Wight Constabulary advises checking that euro-profile cylinders do not protrude where they can be snapped and recommends security-accredited replacement doors tested to standards such as PAS 24:2022. Ask the locksmith to assess the cylinder, mechanism, frame, hinges and keeps together.",
        source: {
          label: "Hampshire and Isle of Wight Constabulary — door security",
          url: "https://www.hampshire.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Portsmouth burglary advice stresses correctly locking uPVC doors",
        text: "In Portsmouth burglary prevention advice, local police specifically remind residents to lift the handle and turn the key on uPVC doors, lock windows and keep keys away from letterboxes. If the job follows a break-in or attempted entry, ask for a wider security review rather than a like-for-like lock change only.",
        source: {
          label: "Hampshire and Isle of Wight Constabulary — Portsmouth burglary advice",
          url: "https://www.hampshire.police.uk/news/hampshire/news/news/2019/december/arrest-made-after-house-burglaries-in-portsmouth/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Portsmouth by postcode, job type and urgency. Example areas include:",
    sideTitle: "Describe the whole door, not only the key problem",
    sideCopy: "Say whether the door is timber, uPVC, composite or aluminium and whether the key, handle or multipoint mechanism is failing. Clear photos can help identify likely parts before arrival.",
    noteLead: "After forced entry, ask for a security review.",
    noteText: "A stronger cylinder will not solve a weak frame, damaged keeps or vulnerable glazing, so compare the whole repair specification.",
  },
  faq: [
    ["Can I find an emergency locksmith in Portsmouth?", "Yes. State that the job is urgent, describe the lock and door and explain whether you are locked out or the property cannot be secured."],
    ["What should I ask for when upgrading a uPVC door?", "Ask the locksmith to assess the cylinder, multipoint mechanism, handles, keeps and frame rather than changing only the visible lock."],
    ["Should I change locks after losing keys?", "If the keys can be linked to your address or you cannot account for who may have them, changing or re-keying the relevant locks can be sensible."],
    ["Can a locksmith improve window security too?", "Many can. Police guidance recommends appropriate locks or sash stops for accessible windows and security-accredited products when windows are replaced."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Portsmouth?",
    copy: "Describe the lock, door and urgency once, then compare interested Portsmouth locksmiths and their quotes.",
    buttonLabel: "Get Portsmouth locksmith quotes",
  },
});

export const pestControllersPortsmouth = makePortsmouthProfile("pest-controllers", {
  heroCopy: "Dealing with rats, mice, bed bugs, wasps or another pest problem in Portsmouth? Describe the signs, rooms and property type once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Portsmouth?",
    copy: "Enter the postcode, identify the pest if you can and explain where activity has been seen, how long it has been happening and whether children, pets or food areas are involved so suitable Portsmouth pest controllers can plan the right treatment.",
  },
  localContext: {
    eyebrow: "Portsmouth pest-control context",
    title: "Portsmouth treats many common pests, and its rodent guidance strongly emphasises proofing after treatment",
    intro: "Portsmouth City Council runs its own pest-control service for many common domestic pests. Its detailed rat and mouse guidance is useful context when comparing private treatment plans because it distinguishes treatment from the repairs needed to stop re-entry.",
    items: [
      {
        title: "The council treats rats, mice, bed bugs, cockroaches, fleas and wasps among other pests",
        text: "Portsmouth City Council lists a broad range of pests it treats, while excluding some species such as bees and swarms. Correct identification matters before treatment is booked, especially where the visible insects or noises could have more than one cause.",
        source: {
          label: "Portsmouth City Council — which pests we treat",
          url: "https://www.portsmouth.gov.uk/services/environmental-health/pest-control/which-pests-we-treat/",
        },
      },
      {
        title: "Rodent treatment should be followed by repairs to access points",
        text: "Portsmouth's rat and mouse guidance highlights damaged airbricks, pipe holes, gaps and old drainage systems as access routes. It advises repairing defects after treatment, so for recurring rodents ask what inspection, treatment, proofing advice and follow-up are included in the quote.",
        source: {
          label: "Portsmouth City Council — rats",
          url: "https://www.portsmouth.gov.uk/services/environmental-health/pest-control/rats/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Portsmouth by postcode, pest type and treatment needs. Example areas include:",
    sideTitle: "Describe evidence rather than guessing the species",
    sideCopy: "Droppings, gnawing, bites, sounds, nest location and the time activity is seen can all help a professional identify the problem. Include clear photos where safe to do so.",
    noteLead: "Treatment without proofing can leave the cause in place.",
    noteText: "For rodents and recurring insects, ask what inspection, exclusion, follow-up visits and monitoring are included rather than comparing only the first treatment visit.",
  },
  faq: [
    ["How much does pest control cost in Portsmouth?", "It depends on the pest, property size, severity and number of visits. Portsmouth City Council publishes its own current treatment prices, while private contractors set their own rates."],
    ["Can I post a rat or mouse problem?", "Yes. Explain where evidence is appearing, whether neighbours are affected and any likely entry points so the contractor can assess treatment and proofing."],
    ["Does Portsmouth City Council treat bees?", "No. The council says it does not treat bees and swarms, so correct identification matters before booking a treatment."],
    ["Why do rodents keep coming back?", "Recurring infestations can be linked to food, waste, damaged drains, airbricks or structural gaps. Ask for inspection and proofing advice as well as treatment."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Portsmouth?",
    copy: "Describe the pest signs and property once, then compare interested Portsmouth pest controllers and their treatment plans.",
    buttonLabel: "Get Portsmouth pest-control quotes",
  },
});
