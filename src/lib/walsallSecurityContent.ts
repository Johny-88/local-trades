import { makeWalsallProfile } from "./walsallProfileBase";

export const locksmithsWalsall = makeWalsallProfile("locksmiths", {
  heroCopy: "Locked out, replacing a damaged lock or improving home security in Walsall? Describe the door or window, lock type and urgency once, then compare locksmiths who cover your area.",
  answer: {
    title: "Looking for a locksmith near you in Walsall?",
    copy: "Enter the postcode, access problem and door or window type. Add photos where useful and say whether the job is an emergency, a repair after damage or a planned security upgrade so suitable Walsall locksmiths can respond accurately.",
  },
  localContext: {
    eyebrow: "West Midlands home-security guidance",
    title: "A lock change should match the door, frame and current security standard",
    intro: "West Midlands Police advises homeowners to look at the whole entry point rather than the cylinder alone. Door construction, frame strength, hinges and the way a multi-point lock is used can all affect security.",
    items: [
      {
        title: "New doors should use security-accredited products",
        text: "West Midlands Police recommends security-accredited products for new doors and specifically points homeowners to PAS 24:2022. For an upgrade rather than an emergency opening, ask the locksmith what standard the proposed door or lock system is designed to meet.",
        source: {
          label: "West Midlands Police — door security",
          url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
      {
        title: "Protruding euro cylinders can be a weak point",
        text: "West Midlands Police says some uPVC doors have euro-profile locks that protrude outside the frame and advises considering a shorter replacement that cannot be snapped off. It also recommends checking frames, hinges and approved lock standards as part of the same security review.",
        source: {
          label: "West Midlands Police — door security",
          url: "https://www.westmidlands.police.uk/cp/crime-prevention/protect-home-crime/door-security-advice/",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Locksmiths may cover Walsall by postcode, lock type and urgency. Example areas include:",
    sideTitle: "Describe the full door setup, not just the key problem",
    sideCopy: "A failed night latch in Walsall, a uPVC multi-point lock in Aldridge and a damaged patio door in Streetly need different parts and tools. Photos of the handle, cylinder and door edge can help a locksmith identify the system.",
    noteLead: "For upgrades, ask what security standard is being achieved.",
    noteText: "A cheap cylinder fitted into a weak frame may not solve the underlying security problem. Compare the proposed lock, cylinder, frame reinforcement and any door hardware as one package.",
  },
  faq: [
    ["How much does a locksmith cost in Walsall?", "Price depends on urgency, travel, lock type, parts and whether the job is opening, repair or replacement. Give the lock and door details before comparing quotes."],
    ["What door standard does West Midlands Police recommend?", "For new doors, West Midlands Police points homeowners to security-accredited products and PAS 24:2022."],
    ["Should a euro cylinder stick out beyond the door handle?", "West Midlands Police warns that protruding euro-profile locks can be vulnerable and suggests considering a shorter replacement that cannot be snapped off."],
    ["Can I post a non-emergency security upgrade?", "Yes. You can compare locksmiths for planned lock upgrades as well as lockouts and repairs."],
    ["Do I have to hire a locksmith who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare locksmiths in Walsall?",
    copy: "Describe the lock, door and urgency once, then compare interested Walsall locksmiths and their quotes.",
    buttonLabel: "Get Walsall locksmith quotes",
  },
});

export const pestControllersWalsall = makeWalsallProfile("pest-controllers", {
  heroCopy: "Need help with rats, mice, wasps, insects or another pest problem in Walsall? Describe the pest, where you have seen activity and how urgent it is once, then compare pest controllers who cover your area.",
  answer: {
    title: "Looking for pest control near you in Walsall?",
    copy: "Enter the postcode, suspected pest and where signs have appeared. Mention droppings, nests, noises, entry points, pets and previous treatment so suitable Walsall pest controllers can assess the likely scope.",
  },
  localContext: {
    eyebrow: "Walsall pest-control arrangements",
    title: "The council no longer provides a general pest-treatment service",
    intro: "Walsall Council has withdrawn its pest-control treatment service, so householders normally need to arrange a private pest controller. The council still has powers in some cases where rubbish on private land creates a nuisance or health risk.",
    items: [
      {
        title: "Householders are directed to private pest-control companies",
        text: "Walsall Council says its pest-control service has closed and advises residents with a pest problem to contact a pest-control company. It recommends looking for providers connected with professional organisations such as the BPCA or NPTA.",
        source: {
          label: "Walsall Council — pest control",
          url: "https://go.walsall.gov.uk/people-and-communities/pest-control",
        },
      },
      {
        title: "Waste that harbours rats or mice can become a council issue",
        text: "The council says its community protection team may act where rubbish on private land creates a nuisance or health risk, including waste that provides harbourage or food for rats and mice. Treatment and removal of the underlying attraction may therefore need to be considered together.",
        source: {
          label: "Walsall Council — pest control",
          url: "https://go.walsall.gov.uk/people-and-communities/pest-control",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Pest controllers may cover Walsall by postcode, pest type and urgency. Example areas include:",
    sideTitle: "Describe signs, access and likely entry points",
    sideCopy: "Scratching in a loft in Bloxwich, rat activity around an outbuilding in Darlaston and a wasp nest near a roofline in Pelsall require different inspection and treatment methods. State where activity is seen and whether children or pets are present.",
    noteLead: "Treat the cause as well as the visible pest problem.",
    noteText: "Food sources, gaps around services, drainage defects, damaged vents and accumulated rubbish can all contribute to repeat activity. Ask what proofing or follow-up is included alongside treatment.",
  },
  faq: [
    ["Does Walsall Council still provide pest treatment?", "No. Walsall Council says it has withdrawn its pest-control service and directs residents to private pest-control companies."],
    ["What should I tell a pest controller before they visit?", "Describe the suspected pest, where you have seen signs, when activity occurs, previous treatments and any pets or children in the property."],
    ["Can the council act if rubbish is attracting rats?", "Potentially. Walsall says it may intervene where rubbish on private land creates a nuisance or health risk, including harbourage or food for rats and mice."],
    ["Should I ask about proofing as well as treatment?", "Yes. Closing entry points and removing food or harbourage can be important in preventing repeat infestations."],
    ["Do I have to hire a pest controller who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare pest controllers in Walsall?",
    copy: "Describe the pest problem and signs once, then compare interested Walsall pest controllers and their quotes.",
    buttonLabel: "Get Walsall pest-control quotes",
  },
});
