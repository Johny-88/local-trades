import { makeWolverhamptonProfile } from "./wolverhamptonProfileBase";

export const locksmithsWolverhampton = makeWolverhamptonProfile("locksmiths", {
  heroCopy: "Locked out or planning a security upgrade in Wolverhampton? Describe the door, lock and problem once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Wolverhampton?",
    copy: "Enter the postcode and explain whether you need emergency entry, a lock change, a snapped key, uPVC or composite-door repair, or a wider security upgrade. Photos of the door and lock help suitable Wolverhampton locksmiths identify the likely parts.",
  },
  localContext: {
    eyebrow: "Wolverhampton home-security context",
    title: "West Midlands Police recommends standards-based door and cylinder upgrades rather than cosmetic changes",
    intro: "For security work, the useful local benchmark is not simply a newer lock. West Midlands Police advises residents to use robust doors and windows, British Standard-approved locks and security-accredited replacement products, including PAS 24:2022 for new doors.",
    items: [
      {
        title: "Police guidance specifically flags vulnerable euro-profile cylinders",
        text: "West Midlands Police advises that protruding euro cylinders on uPVC doors can be vulnerable and suggests having a locksmith assess whether a shorter, more secure cylinder is appropriate. For an upgrade job, include the door type and photos so the quote can cover the correct cylinder, handles and reinforcement.",
        source: {
          label: "West Midlands Police — door security advice",
          url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Listed buildings and conservation controls can matter before replacing historic doors",
        text: "Wolverhampton has 31 conservation areas, some with additional Article 4 controls, and listed buildings have separate consent requirements. If a security upgrade involves replacing a character door, frame or external appearance rather than only changing the lock, check the planning or listed-building position first.",
        source: {
          label: "City of Wolverhampton Council — conservation",
          url: "https://www.wolverhampton.gov.uk/planning/conservation",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Wolverhampton by postcode and urgency. Example areas include:",
    sideTitle: "Send a clear photo of the door and lock",
    sideCopy: "A timber mortice lock, euro cylinder, multipoint uPVC mechanism and communal flat entrance are different jobs. A photo can prevent the wrong parts or skillset arriving.",
    noteLead: "Security upgrades should match the whole door set.",
    noteText: "A high-spec cylinder fitted to a weak door, frame or handle set can still leave a vulnerable entry point. Ask what standard the completed assembly is intended to meet.",
  },
  faq: [
    ["How much does a locksmith cost in Wolverhampton?", "Emergency call-outs, lock type, time of day, replacement parts and door repairs all affect price. Describe the lock and send photos where possible."],
    ["What security standard should I ask about?", "West Midlands Police recommends security-accredited products and references PAS 24:2022 for new doors. The correct lock standard depends on the existing door and insurance requirements."],
    ["Can a locksmith upgrade a uPVC euro cylinder?", "Yes. Police guidance specifically warns about vulnerable protruding cylinders, so ask for an assessment of the cylinder, handles and complete multipoint system."],
    ["Can I replace a historic front door without checking planning?", "Not always. Listed buildings and some conservation-area properties can have controls over external alterations, so check before replacing the whole door or frame."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Wolverhampton?",
    copy: "Describe the door, lock and problem once, then compare interested Wolverhampton locksmiths and their quotes.",
    buttonLabel: "Get Wolverhampton locksmith quotes",
  },
});

export const pestControllersWolverhampton = makeWolverhamptonProfile("pest-controllers", {
  heroCopy: "Need help with rats, mice, bed bugs, fleas, cockroaches, ants or wasps in Wolverhampton? Describe the pest, property and signs once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Wolverhampton?",
    copy: "Enter the postcode, pest type, where activity is being seen and how long it has been happening. Mention pets, children, food areas, lofts, drains or neighbouring properties so suitable Wolverhampton pest controllers can plan the treatment and proofing work.",
  },
  localContext: {
    eyebrow: "Wolverhampton pest-control context",
    title: "The council provides paid domestic treatments, which gives homeowners a useful local benchmark for common pests",
    intro: "Wolverhampton City Council currently treats rats, mice, bed bugs, fleas, cockroaches, ants and wasps. For recurring rodent problems, treatment should still be paired with proofing and investigation of likely entry routes rather than relying on bait alone.",
    items: [
      {
        title: "The council publishes current domestic treatment options and charges",
        text: "The council's pest-control service lists domestic treatments for rats and mice, bed bugs, fleas, cockroaches, ants and wasps, with follow-up arrangements for some infestations. This gives homeowners a local public-service alternative and a useful reference point when comparing private pest-control quotes.",
        source: {
          label: "City of Wolverhampton Council — pest control",
          url: "https://www.wolverhampton.gov.uk/environment-and-climate/pest-control",
        },
      },
      {
        title: "Recurring rodent jobs should include access and building-condition checks",
        text: "If activity returns after treatment, ask the pest controller to identify how rodents are entering and whether defects around drains, service penetrations, air bricks, doors or adjoining properties need separate repair. Treatment without proofing can leave the underlying route open.",
        source: {
          label: "City of Wolverhampton Council — pest control service context",
          url: "https://www.wolverhampton.gov.uk/environment-and-climate/pest-control",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Wolverhampton by postcode, pest type and property. Example areas include:",
    sideTitle: "Describe where the signs are appearing",
    sideCopy: "Droppings in a kitchen, scratching in a loft, activity around drains and bed-bug bites need very different inspections and treatments. Include photos and the rooms or external areas affected.",
    noteLead: "Ask what happens after the first treatment.",
    noteText: "For pests that often need repeat visits, compare the follow-up plan, proofing recommendations and what is included if activity continues.",
  },
  faq: [
    ["Does Wolverhampton Council offer pest control?", "Yes. The council currently lists paid domestic treatments for several common pests including rats, mice, bed bugs, fleas, cockroaches, ants and wasps."],
    ["How much does private pest control cost in Wolverhampton?", "It depends on the pest, severity, property size, number of visits and proofing work. Compare quotes that describe the same treatment and follow-up plan."],
    ["Why do rats or mice sometimes come back after treatment?", "If entry points or food sources remain, activity can recur. Ask whether the job includes proofing advice and investigation of likely access routes."],
    ["Can I post a wasp-nest job?", "Yes. Wasps are one of the common pest-control jobs that can be posted through this category."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Wolverhampton?",
    copy: "Describe the pest, property and signs once, then compare interested Wolverhampton pest controllers and their quotes.",
    buttonLabel: "Get Wolverhampton pest-control quotes",
  },
});
