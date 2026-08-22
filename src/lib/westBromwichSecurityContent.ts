import { makeWestBromwichProfile } from "./westBromwichProfileBase";

export const locksmithsWestBromwich = makeWestBromwichProfile("locksmiths", {
  heroCopy: "Locked out or need better door, window or cylinder security in West Bromwich? Describe the lock, door type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in West Bromwich?",
    copy: "Enter the postcode, whether the job is emergency or planned, the door or window type and any visible lock details. If security is the goal rather than a lockout, describe the weak points you want upgraded.",
  },
  localContext: {
    eyebrow: "West Bromwich home security",
    title: "West Midlands Police recommends accredited doors and anti-snap cylinder standards",
    intro: "The current police guidance is useful when the job is an upgrade rather than simply replacing like-for-like hardware.",
    items: [
      {
        title: "New doors should use security-accredited products",
        text: "West Midlands Police recommends security-accredited replacement doors tested to recognised British standards and specifically points homeowners to PAS 24:2022 when discussing a new door with a locksmith.",
        source: {
          label: "West Midlands Police — door security",
          url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Police guidance highlights TS007 3-star or Sold Secure Diamond cylinders",
        text: "West Midlands Police's 2026 burglary advice says uPVC doors and Euro cylinders should meet DHF TS007 3 Star or Sold Secure Diamond anti-bump protection because badly fitted cylinders can be vulnerable to snapping.",
        source: {
          label: "West Midlands Police — 2026 burglary prevention",
          url: "https://www.westmidlands.police.uk/news/west-midlands/news/news/2026/february/over-340-people-arrested-for-burglary-and-vehicle-crime/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover West Bromwich by postcode, urgency and lock type. Example areas include:",
    sideTitle: "Tell the locksmith what the door and cylinder actually are",
    sideCopy: "A night latch near the town centre, a multipoint uPVC door in Yew Tree and a patio-door issue in Great Barr require different parts and tools. Photos can help identify the hardware before arrival.",
    noteLead: "For planned upgrades, compare security standard as well as price.",
    noteText: "Ask what cylinder, lock or door standard is proposed and whether the installation addresses frame, hinges and glazing as well as the lock itself.",
  },
  faq: [
    ["How much does a locksmith cost in West Bromwich?", "Emergency timing, lock type, parts, access and whether the lock can be opened non-destructively all affect the price."],
    ["What cylinder standard does West Midlands Police mention?", "Its 2026 advice points to DHF TS007 3 Star or Sold Secure Diamond protection for uPVC and Euro cylinders."],
    ["What standard does police guidance suggest for a new door?", "West Midlands Police points homeowners to PAS 24:2022 security-accredited products."],
    ["Can I use this page for a non-emergency security upgrade?", "Yes. Lock changes, anti-snap cylinders, patio-door security and wider door or window security can all be described."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in West Bromwich?",
    copy: "Describe the lock, door and urgency once, then compare interested West Bromwich locksmiths and their quotes.",
    buttonLabel: "Get West Bromwich locksmith quotes",
  },
});

export const pestControllersWestBromwich = makeWestBromwichProfile("pest-controllers", {
  heroCopy: "Need help with rats, mice, wasps, bedbugs, cockroaches, fleas or another pest in West Bromwich? Describe what you have seen and where, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in West Bromwich?",
    copy: "Enter the postcode, pest or signs, where activity is happening, how long it has been present and whether the property is occupied. Photos and details of entry points can help professionals assess treatment and proofing needs.",
  },
  localContext: {
    eyebrow: "West Bromwich pest treatment",
    title: "Sandwell Council currently treats a defined range of household pests",
    intro: "The council's own service provides a useful local benchmark for which infestations are commonly treated and where proofing still remains the property owner's responsibility.",
    items: [
      {
        title: "Sandwell offers treatments for rats, mice, wasps, cockroaches, fleas and bedbugs",
        text: "The council's current service lists treatments for those pests plus selected indoor insects. Some treatments are chargeable, while rat treatment in gardens is currently free.",
        source: {
          label: "Sandwell Council — pest control",
          url: "https://www.sandwell.gov.uk/pestcontrol",
        },
      },
      {
        title: "Rat proofing and repairs remain the owner or landlord's responsibility",
        text: "Sandwell Council says its rat treatment does not replace repairs or proofing and warns that failure to close entry points can allow the problem to recur. Ask any pest controller to separate treatment from proofing work in the quote.",
        source: {
          label: "Sandwell Council — rat treatment",
          url: "https://www.sandwell.gov.uk/environmental-health/book-pest-control-treatment/4",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover West Bromwich by postcode, pest type and property. Example areas include:",
    sideTitle: "Describe where the activity is happening",
    sideCopy: "Rats in a Greets Green garden, mice in a Charlemont kitchen and bedbugs near West Bromwich centre need different treatment plans. State whether the activity is indoors, outdoors, in a loft, wall void or shared building.",
    noteLead: "Treatment and proofing are different parts of the job.",
    noteText: "Ask whether the quote includes follow-up visits, entry-point proofing, carcass removal where relevant and advice for adjoining or shared areas.",
  },
  faq: [
    ["How much does pest control cost in West Bromwich?", "It depends on the pest, infestation size, property type, treatment method, follow-up visits and proofing required."],
    ["Does Sandwell Council provide pest control?", "Yes. Its current service covers several common pests including rats, mice, wasps, bedbugs, cockroaches and fleas."],
    ["Is rat treatment in gardens free through Sandwell Council?", "The council currently lists garden-rat treatment as free, while indoor rat treatment is chargeable."],
    ["Should proofing be included in a private pest-control quote?", "Ask explicitly. Sandwell Council notes that repairs and proofing are the owner or landlord's responsibility and recurrence is possible if entry points remain."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in West Bromwich?",
    copy: "Describe the pest, evidence and affected areas once, then compare interested West Bromwich pest controllers and their quotes.",
    buttonLabel: "Get West Bromwich pest-control quotes",
  },
});
