import { makeLeedsProfile } from "./leedsProfileBase";

export const locksmithsLeeds = makeLeedsProfile("locksmiths", {
  "heroCopy": "Locked out, replacing locks or improving door security in Leeds? Describe the door, lock and urgency once, then compare locksmiths who cover your area.",
  "answer": {
    "title": "Looking for a locksmith near you in Leeds?",
    "copy": "Enter the postcode and explain the door type, lock or cylinder, whether access is urgent and whether replacement hardware may be needed. Suitable Leeds locksmiths can respond with a clearer idea of the likely work."
  },
  "localContext": {
    "eyebrow": "Leeds home security",
    "title": "West Yorkshire Police gives specific guidance for euro-cylinder upgrades",
    "intro": "If you are replacing a cylinder rather than simply gaining entry, use the opportunity to compare the security standard of the proposed hardware as well as the labour charge.",
    "items": [
      {
        "title": "West Yorkshire Police recommends a three-star cylinder solution",
        "text": "West Yorkshire Police recommends TS 007 three-star or Sold Secure Diamond Standard (SS312) cylinders when upgrading euro-cylinder locks. It says a three-star cylinder is the preferred option, or three stars can be achieved with a one-star cylinder plus a two-star security handle.",
        "source": {
          "label": "West Yorkshire Police — euro-cylinder advice",
          "url": "https://www.westyorkshire.police.uk/advice/home-security/home-security/euro-cylinder-advice"
        }
      },
      {
        "title": "Police guidance also stresses door, window and frame condition",
        "text": "West Yorkshire Police's home-security guidance advises checking whether doors, windows and frames are in good condition and whether accessible windows have adequate locks. A new cylinder will not solve a weak or badly aligned door, so ask the locksmith to explain the whole-door issue.",
        "source": {
          "label": "West Yorkshire Police — home security",
          "url": "https://www.westyorkshire.police.uk/advice/home-security/home-security"
        }
      }
    ]
  },
  "areaCopy": {
    "intro": "Locksmiths may cover Leeds by postcode and urgency. Example areas include:",
    "sideTitle": "Send a clear photo if it is safe to do so",
    "sideCopy": "A photo of the lock, handle and full door can help identify whether the issue is a euro cylinder, multipoint mechanism, mortice lock or alignment problem.",
    "noteLead": "Ask what will be fitted.",
    "noteText": "For an upgrade, compare the actual cylinder or lock standard and not just a vague description such as 'high security'."
  },
  "faq": [
    [
      "How much does a locksmith cost in Leeds?",
      "Emergency call-out, labour, time of day and replacement hardware all affect the price. Ask for the call-out structure and likely parts cost before authorising non-emergency work."
    ],
    [
      "What euro-cylinder standard does West Yorkshire Police recommend?",
      "West Yorkshire Police recommends a three-star solution under TS 007 or a Sold Secure Diamond Standard SS312 cylinder when upgrading."
    ],
    [
      "Can a locksmith repair a multipoint door mechanism?",
      "Many locksmiths work on multipoint uPVC and composite-door mechanisms, but describe the symptoms and door type so the right specialist responds."
    ],
    [
      "Should I replace the whole lock after losing keys?",
      "It depends on the lock and security risk. Explain what happened and ask the locksmith whether the cylinder, lock body or another part actually needs replacing."
    ],
    [
      "Do I have to hire a locksmith who responds?",
      "No. There is no obligation to hire."
    ]
  ],
  "cta": {
    "title": "Ready to compare locksmiths in Leeds?",
    "copy": "Describe the lock, door and urgency once, then compare interested Leeds locksmiths and the proposed repair or upgrade.",
    "buttonLabel": "Get Leeds locksmith quotes"
  }
});

export const pestControllersLeeds = makeLeedsProfile("pest-controllers", {
  "heroCopy": "Rats, mice, insects, wasps or another pest problem in Leeds? Describe the signs, rooms or outdoor areas affected and how long it has been happening, then compare pest controllers suited to the job.",
  "answer": {
    "title": "Looking for pest control near you in Leeds?",
    "copy": "Enter the postcode and explain what you have seen or heard, where activity occurs and whether children, pets or food areas are involved. Suitable Leeds pest-control professionals can judge the likely treatment and follow-up."
  },
  "localContext": {
    "eyebrow": "Leeds pest-control context",
    "title": "Leeds has a council treatment service and practical proofing guidance",
    "intro": "Correct identification and proofing are important because the visible pest may be only part of the problem. Leeds City Council publishes both treatment options and prevention advice.",
    "items": [
      {
        "title": "Leeds City Council provides pest treatment for residents and businesses",
        "text": "The council operates a pest-control service with BASIS Prompt-registered officers and says its standard treatment price includes the visits needed to eradicate the current problem, except for bedbugs and wasps where different arrangements apply. This gives homeowners a local benchmark alongside private quotes.",
        "source": {
          "label": "Leeds City Council — pest control",
          "url": "https://www.leeds.gov.uk/environmental-health/pest-control"
        }
      },
      {
        "title": "Rat control often needs proofing as well as treatment",
        "text": "Leeds City Council advises repairing structural faults that can let rats into a home, including gaps beneath external doors, holes around pipes and damaged vents. Ask whether the proposed pest-control work includes identifying likely entry points or only treating the current activity.",
        "source": {
          "label": "Leeds City Council — rat prevention advice",
          "url": "https://www.leeds.gov.uk/environmental-health/pest-control"
        }
      }
    ]
  },
  "areaCopy": {
    "intro": "Pest controllers may cover Leeds by postcode and pest type. Example areas include:",
    "sideTitle": "Describe the evidence, not just the pest name",
    "sideCopy": "Droppings, noises, bite marks, nesting material, insects seen and the rooms affected can help a professional decide what inspection and treatment are likely to be needed.",
    "noteLead": "Ask about follow-up.",
    "noteText": "Some infestations need repeat treatment, monitoring or proofing after the immediate activity has been reduced."
  },
  "faq": [
    [
      "Does Leeds City Council offer pest control?",
      "Yes. Leeds City Council provides a pest-control service for residents and businesses, with charges and availability depending on the pest."
    ],
    [
      "How do I know whether I have rats or mice?",
      "Dropping size, noises, gnawing, burrows and where activity occurs can help, but if you are unsure describe the evidence rather than guessing so the professional can identify it."
    ],
    [
      "Should holes around pipes be sealed?",
      "Leeds City Council specifically recommends repairing external structural faults such as gaps beneath doors, holes around pipes and damaged vents to help stop rat entry."
    ],
    [
      "Will one visit always solve a pest problem?",
      "Not necessarily. Some infestations require several visits, monitoring or proofing, so ask what follow-up is included in the quote."
    ],
    [
      "Do I have to hire a pest controller who responds?",
      "No. There is no obligation to hire."
    ]
  ],
  "cta": {
    "title": "Ready to compare pest controllers in Leeds?",
    "copy": "Describe the pest signs and affected areas once, then compare interested Leeds pest-control professionals and treatment plans.",
    "buttonLabel": "Get Leeds pest-control quotes"
  }
});
