import { makeSuttonProfile } from "./suttonProfileBase";

export const locksmithsSutton = makeSuttonProfile("locksmiths", {
  heroCopy: "Locked out or need locks, doors or home security upgraded in Sutton? Describe the door or window type, the problem and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Sutton?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing cylinders after a move or upgrading door and window security. Add photos where useful so suitable Sutton locksmiths can assess the hardware before attending.",
  },
  localContext: {
    eyebrow: "Sutton home-security guidance",
    title: "Metropolitan Police guidance gives useful standards to ask about when replacing locks or doors",
    intro: "Sutton sits within the Metropolitan Police area, whose home-security guidance focuses on the complete door and window assembly rather than the lock alone. That is useful when comparing an emergency repair with a longer-term security upgrade.",
    items: [
      {
        title: "Three-star TS007 euro cylinders are recommended for replacement locks",
        text: "Metropolitan Police lock guidance recommends a 3-star euro cylinder meeting TS007 where a euro-profile cylinder is being changed. That standard is designed to resist common attack methods including snapping, drilling and bumping.",
        source: {
          label: "Metropolitan Police — door and window lock advice",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "PAS 24:2022 is a useful benchmark for a replacement door",
        text: "Met Police door-security guidance recommends security-accredited products for new doors and identifies PAS 24:2022 as a good standard. It also highlights frame strength, hinges, anti-lift protection and correctly sized euro cylinders as part of the overall security picture.",
        source: {
          label: "Metropolitan Police — door security",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Sutton by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Describe the actual door, frame and lock before asking for a price",
    sideCopy: "A failed euro cylinder in Wallington, a timber front door in Cheam and a patio-door problem in Carshalton may need different parts and labour. Photos of the lock face, handles and door edge can help.",
    noteLead: "A new cylinder alone does not fix every weak door.",
    noteText: "Ask whether the proposed repair deals with the frame, hinges, cylinder, multipoint mechanism or glazing as needed, and whether replacement hardware meets an appropriate recognised standard.",
  },
  faq: [
    ["How much does a locksmith cost in Sutton?", "Cost depends on urgency, time of day, lock type, parts and whether the job is entry, repair or a security upgrade. Ask for the call-out and parts basis before agreeing."],
    ["What euro-cylinder standard should I ask about?", "Metropolitan Police guidance recommends a 3-star euro cylinder meeting TS007 when replacing this type of lock."],
    ["What standard should I ask about for a new door?", "Met Police guidance identifies PAS 24:2022 as a good standard for security-accredited replacement doors."],
    ["Can a locksmith upgrade a uPVC door without replacing it?", "Often yes. Depending on the fault, work may involve the cylinder, multipoint mechanism, handles, keeps or alignment rather than the whole door."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Sutton?",
    copy: "Describe the lock, door or window problem once, then compare interested Sutton locksmiths and their quotes.",
    buttonLabel: "Get Sutton locksmith quotes",
  },
});

export const pestControllersSutton = makeSuttonProfile("pest-controllers", {
  heroCopy: "Need pest control in Sutton for rats, mice, wasps, bed bugs or another infestation? Describe the signs, affected rooms and how long the problem has been present once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Sutton?",
    copy: "Enter the postcode, pest type if known and where you have seen activity. Mention droppings, noises, nests, bites, entry holes, loft or drain involvement and whether neighbouring properties are affected so suitable Sutton pest controllers can plan the inspection.",
  },
  localContext: {
    eyebrow: "Sutton pest-control guidance",
    title: "Sutton directs householders toward professional pest control and gives useful checks for comparing contractors",
    intro: "The council's pest guidance tells residents what to look for in a professional service and explains that treatment may involve repeat visits rather than a single call-out. That makes the treatment plan and follow-up just as important as the initial price.",
    items: [
      {
        title: "Sutton recommends comparing quotations, qualifications and guarantees",
        text: "The council advises householders looking for professional pest control to obtain quotations, ask about call-out or fixed charges, understand the service and guarantee, and check insurance and relevant pest-control qualifications.",
        source: {
          label: "London Borough of Sutton — pest control",
          url: "https://www.sutton.gov.uk/environment/environmental-health/pest-control",
        },
      },
      {
        title: "Bait programmes can require several visits and a final inspection",
        text: "Sutton's guidance says a pest controller using bait may need to return several times to inspect and top it up, followed by a final inspection and removal of bait. Where rodenticide is used, the contractor should also assess risks to wildlife and domestic animals.",
        source: {
          label: "London Borough of Sutton — pest control",
          url: "https://www.sutton.gov.uk/environment/environmental-health/pest-control",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Sutton by postcode, pest type and urgency. Example areas include:",
    sideTitle: "Describe evidence, not just the pest name",
    sideCopy: "Scratching in a loft in Belmont, mouse droppings in Hackbridge and wasp activity around a Cheam roofline need different inspections. Note where and when activity appears and whether you can see likely entry points.",
    noteLead: "Ask what happens after the first treatment visit.",
    noteText: "For rodents and recurring pests, clarify follow-up visits, bait removal, proofing advice and whether drains or building defects may need a separate trade.",
  },
  faq: [
    ["How much does pest control cost in Sutton?", "Cost depends on the pest, infestation size, treatment method, access, number of visits and whether proofing work is included."],
    ["Should I compare more than one Sutton pest-control quote?", "Yes. Sutton Council specifically advises getting quotations and checking charges, qualifications, insurance and the service or guarantee offered."],
    ["Will pest treatment always be completed in one visit?", "No. Sutton notes that bait programmes may require several visits plus a final inspection and removal of bait."],
    ["Who should a private tenant contact about pests?", "Sutton advises private tenants to contact their landlord first, while recognising that responsibility can depend on the cause of the problem."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Sutton?",
    copy: "Describe the pest signs and affected areas once, then compare interested Sutton pest controllers and their quotes.",
    buttonLabel: "Get Sutton pest-control quotes",
  },
});
