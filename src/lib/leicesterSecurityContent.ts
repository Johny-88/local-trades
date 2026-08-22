import { makeLeicesterProfile } from "./leicesterProfileBase";

export const locksmithsLeicester = makeLeicesterProfile("locksmiths", {
  heroCopy: "Locked out, replacing locks or upgrading home security in Leicester? Describe the door, lock and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Leicester?",
    copy: "Enter the postcode and explain whether the job is an emergency lockout, failed lock, key replacement or security upgrade. Add photos of the door and lock where possible so suitable Leicester locksmiths can judge the work.",
  },
  localContext: {
    eyebrow: "Leicester home-security context",
    title: "Police lock standards and Leicester heritage controls can both affect the right solution",
    intro: "For an ordinary home, the security standard is the main consideration. In some Leicester conservation areas or Article 4 properties, changing a traditional external door or its appearance can also trigger planning constraints.",
    items: [
      {
        title: "Leicestershire Police recommends TS007 3-star euro cylinders",
        text: "Police guidance says replacement euro cylinders should be 3-star TS007 rated to resist common attacks such as snapping, drilling and bumping. Ask a locksmith what standard the proposed lock meets rather than comparing price alone.",
        source: {
          label: "Leicestershire Police — door and window lock advice",
          url: "https://www.leics.police.uk/cp/crime-prevention/protect-home-crime/door-window-lock-advice/",
        },
      },
      {
        title: "Article 4 directions can control external door alterations",
        text: "Leicester City Council says Article 4 directions remove some permitted-development rights and can require planning permission for changes to windows and doors. If a security upgrade changes a protected external door materially, check the property's planning status before replacement.",
        source: {
          label: "Leicester City Council — Article 4 directions",
          url: "https://www.leicester.gov.uk/planning-environment-and-building-control/planning-applications/check-if-you-need-planning-permission/article-4-directions-leicester",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Leicester by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Send a clear photo of the door and lock",
    sideCopy: "A uPVC door in Humberstone, a flat entrance in Westcotes and a traditional external door in Stoneygate can need very different cylinders, mechanisms, hardware and planning care.",
    noteLead: "Ask what security standard is being fitted.",
    noteText: "For replacement cylinders or doors, compare the proposed product standard as well as labour and call-out cost.",
  },
  faq: [
    ["How much does a locksmith cost in Leicester?", "Cost varies by urgency, time of day, lock type, parts and whether the job is entry, repair or replacement. Ask for the call-out and parts basis before work begins."],
    ["What euro-cylinder standard does Leicestershire Police recommend?", "Its current guidance recommends a 3-star euro cylinder meeting TS007 standards."],
    ["Can I replace an external door in a Leicester conservation area?", "Possibly, but Article 4 or listed-building controls can remove normal permitted-development assumptions. Check the exact property first."],
    ["Should I send photos before booking?", "Yes. A clear photo of the full door and close-up of the lock or mechanism can help a locksmith identify likely parts."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Leicester?",
    copy: "Describe the lock, door and urgency once, then compare interested Leicester locksmiths and their quotes.",
    buttonLabel: "Get Leicester locksmith quotes",
  },
});

export const pestControllersLeicester = makeLeicesterProfile("pest-controllers", {
  heroCopy: "Need help with rats, mice, wasps, cockroaches or another pest problem in Leicester? Describe what you have seen, where and when once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Leicester?",
    copy: "Enter the postcode and describe the pest, signs, affected rooms or garden areas and how long the problem has been present. Add photos where useful so suitable Leicester pest controllers can judge treatment and proofing needs.",
  },
  localContext: {
    eyebrow: "Leicester pest-control context",
    title: "The council treats several common pests and has specifically investigated rat ingress through drains",
    intro: "Leicester City Council operates a domestic pest-control service for common infestations. Council service evidence also shows that drain investigations form part of rat-ingress work, which is useful when treatment alone does not solve a recurring problem.",
    items: [
      {
        title: "Leicester City Council treats rats, mice, cockroaches and wasps",
        text: "The council currently offers domestic treatment for rats, mice, cockroaches and wasps, with different charges and response times. A private pest-control quote should still state the number of visits, treatment method and any proofing work included.",
        source: {
          label: "Leicester City Council — pest control",
          url: "https://www.leicester.gov.uk/planning-environment-and-building-control/pollution-and-pests-leicester/pest-control",
        },
      },
      {
        title: "Recurring rat problems can require drain investigation",
        text: "Leicester council service reports describe rat-ingress and nest-drain investigations for private homes. If rats keep returning after baiting, ask whether broken drainage, open connections or another structural route should be investigated rather than repeating treatment indefinitely.",
        source: {
          label: "Leicester City Council — pest and dog control service report",
          url: "https://cabinet.leicester.gov.uk/documents/s134220/CMB%20-%2022-08-09%20-%20Pest%20and%20Dog%20Control%20Services%20v2.0.pdf",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Leicester by postcode, pest type and property layout. Example areas include:",
    sideTitle: "Describe signs and likely access routes",
    sideCopy: "A terrace in Belgrave, a shared house in Westcotes and a larger property in Evington can have very different roof voids, drains, yards, bins and neighbouring access routes.",
    noteLead: "Treatment and proofing are different jobs.",
    noteText: "Ask whether the quote covers only treatment or also finding and closing entry points, drain defects or other causes of repeat infestation.",
  },
  faq: [
    ["How much does pest control cost in Leicester?", "It depends on the pest, infestation size, number of visits, treatment method and whether proofing or drain investigation is required."],
    ["Does Leicester City Council provide pest control?", "Yes. The council currently treats several common domestic pests, including rats, mice, cockroaches and wasps."],
    ["Why might rats keep coming back after treatment?", "Food sources, gaps, neighbouring activity or drain defects can allow re-entry. Recurring cases may need proofing or drainage investigation as well as baiting."],
    ["Should I identify the pest before posting?", "Give the best description you can, including droppings, noises, damage and photos, but do not guess if you are unsure."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Leicester?",
    copy: "Describe the pest, signs and access points once, then compare interested Leicester pest controllers and their quotes.",
    buttonLabel: "Get Leicester pest-control quotes",
  },
});
