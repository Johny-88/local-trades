import { makeRomfordProfile } from "./romfordProfileBase";

export const locksmithsRomford = makeRomfordProfile("locksmiths", {
  heroCopy: "Locked out or need locks, doors or home security upgraded in Romford? Describe the door or window type, the problem and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Romford?",
    copy: "Enter the postcode and explain whether you are locked out, replacing a failed lock, changing cylinders after a move or upgrading door and window security. Add photos where useful so suitable Romford locksmiths can assess the hardware before attending.",
  },
  localContext: {
    eyebrow: "Romford home-security guidance",
    title: "Use recognised door and window security standards rather than choosing replacement hardware on appearance alone",
    intro: "Romford is policed by the Metropolitan Police, whose home-security guidance recommends checking the complete door or window assembly, not just the lock. That is useful when comparing an emergency repair with a more permanent security upgrade.",
    items: [
      {
        title: "The Metropolitan Police points to PAS 24:2022 for new doors",
        text: "Met Police guidance recommends security-accredited products for new doors and says PAS 24:2022 is a good standard. It also highlights solid door construction, reinforced frames, approved locks and hinges, anti-lift protection for patio doors and correctly sized euro cylinders.",
        source: {
          label: "Metropolitan Police — door security",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Accessible windows need more than a basic latch",
        text: "Met Police guidance recommends laminated glass or security film for accessible windows, suitable key-operated locks or sash stops, and opening restrictors where appropriate. It also points to PAS 24:2022 when replacing windows.",
        source: {
          label: "Metropolitan Police — window security",
          url: "https://www.met.police.uk/cp/crime-prevention/protect-home-crime/window-security/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Romford by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Describe the actual door, frame and lock before asking for a price",
    sideCopy: "A failed euro cylinder in Harold Wood, a timber front door in Gidea Park and a patio-door problem in Collier Row may need different parts and labour. Photos of the lock face, handles and door edge can help.",
    noteLead: "A cheap cylinder alone does not make a weak door secure.",
    noteText: "Ask whether the proposed repair deals with the frame, hinges, cylinder, multipoint mechanism or glazing as needed, and whether the replacement meets an appropriate recognised standard.",
  },
  faq: [
    ["How much does a locksmith cost in Romford?", "Cost depends on urgency, time of day, lock type, parts and whether the job is entry, repair or a security upgrade. Ask for the call-out and parts basis before agreeing."],
    ["What security standard should I ask about for a new door?", "Metropolitan Police guidance identifies PAS 24:2022 as a good standard for security-accredited replacement doors."],
    ["Can a locksmith upgrade uPVC door security?", "Yes. Depending on the problem, work may involve the cylinder, multipoint mechanism, handles, keeps or alignment rather than replacing the whole door."],
    ["Should ground-floor windows have locks?", "Met Police guidance recommends suitable locks or sash stops for accessible windows and also suggests laminated glass or security film where appropriate."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Romford?",
    copy: "Describe the lock, door or window problem once, then compare interested Romford locksmiths and their quotes.",
    buttonLabel: "Get Romford locksmith quotes",
  },
});

export const pestControllersRomford = makeRomfordProfile("pest-controllers", {
  heroCopy: "Need pest control in Romford for rats, mice, wasps, bed bugs or another infestation? Describe the signs, affected rooms and how long the problem has been present once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Romford?",
    copy: "Enter the postcode, pest type if known and where you have seen activity. Mention droppings, noises, nests, bites, entry holes, loft or drain involvement and whether neighbouring properties are affected so suitable Romford pest controllers can plan the inspection.",
  },
  localContext: {
    eyebrow: "Romford pest-control responsibility",
    title: "Havering does not provide a general household pest-control service, so private-property infestations normally need a contractor",
    intro: "Havering Council directs residents with household pest or vermin problems to pest-control companies rather than offering a general council treatment service. That makes it especially useful to describe the evidence clearly before comparing private quotes.",
    items: [
      {
        title: "The council tells residents to contact a pest-control company",
        text: "Havering states that it does not offer a general pest-control service and cannot identify pests for residents. It directs householders to pest-control companies and points to recognised directories for finding providers.",
        source: {
          label: "London Borough of Havering — pest control",
          url: "https://www.havering.gov.uk/pestcontrol",
        },
      },
      {
        title: "Entry-point and hygiene work can be part of preventing a repeat infestation",
        text: "Havering's pest fact sheet advises blocking mouse entry gaps, securing food and rubbish, reducing clutter and fixing damp or leaks that encourage pests such as silverfish. Ask whether the quote covers proofing and prevention as well as treatment.",
        source: {
          label: "London Borough of Havering — pest control fact sheet",
          url: "https://www.havering.gov.uk/downloads/file/1797/pest-control-fact-sheet",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Romford by postcode, pest type and urgency. Example areas include:",
    sideTitle: "Describe evidence, not just the pest name",
    sideCopy: "Scratching in a loft in Harold Hill, mouse droppings in Rush Green and wasp activity around a Gidea Park roofline need different inspections. Note where and when activity appears and whether you can see likely entry points.",
    noteLead: "Treatment without proofing can leave the route back in place.",
    noteText: "Ask whether the job includes follow-up visits, sealing entry points, advice on food or waste storage and any drain or building defects that need a separate trade.",
  },
  faq: [
    ["Does Havering Council provide pest control for private homes?", "Havering says it does not offer a general pest-control service, so private householders are directed to pest-control companies."],
    ["How much does pest control cost in Romford?", "Cost depends on the pest, infestation size, treatment method, access, number of visits and whether proofing work is included."],
    ["Should I seal mouse entry points?", "Yes, where safe and appropriate. Havering's advice specifically recommends blocking gaps and entry points as part of mouse prevention."],
    ["Can I post a wasp-nest or bed-bug job?", "Yes. Give the suspected pest, affected area and any evidence so responding professionals can assess the likely treatment."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Romford?",
    copy: "Describe the pest signs and affected areas once, then compare interested Romford pest controllers and their quotes.",
    buttonLabel: "Get Romford pest-control quotes",
  },
});
