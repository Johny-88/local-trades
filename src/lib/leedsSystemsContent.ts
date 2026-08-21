import { makeLeedsProfile } from "./leedsProfileBase";

export const tilersLeeds = makeLeedsProfile("tilers", {
  "heroCopy": "Planning bathroom tiles, a kitchen splashback, a tiled floor or repairs in Leeds? Describe the surfaces, tile type and preparation once, then compare tilers who cover your area.",
  "answer": {
    "title": "Looking for a tiler near you in Leeds?",
    "copy": "Enter the postcode and explain what needs tiling, the approximate area, tile material and condition of the existing surface. Interested Leeds tilers can judge the preparation, cutting and finish required."
  },
  "localContext": {
    "eyebrow": "Leeds tiling context",
    "title": "Older homes and disposal rules can change the job before tiling starts",
    "intro": "Surface condition matters as much as the tile itself. Leeds' older housing stock can mean more preparation, and removed tiles or plaster from paid work need a proper trade-waste route.",
    "items": [
      {
        "title": "Leeds has a large amount of older housing",
        "text": "The Leeds Housing Strategy notes that the city has a large amount of older housing. On a tiling job that can mean uneven floors, old plaster, previous layers of tile, movement or moisture that should be understood before adhesive and tile layout are specified.",
        "source": {
          "label": "Leeds City Council — Leeds Housing Strategy",
          "url": "https://www.leeds.gov.uk/housing/housing-strategy/leeds-housing-strategy"
        }
      },
      {
        "title": "Removed tiles and building waste from paid work are trade waste",
        "text": "Leeds City Council says waste produced by tradespeople carrying out improvements cannot be disposed of through household recycling centres as ordinary household waste. Ask whether old tiles, adhesive, plasterboard and rubble removal are included in the tiler's quote.",
        "source": {
          "label": "Leeds City Council — waste disposal guidance",
          "url": "https://www.leeds.gov.uk/bins-and-recycling/recycling-sites"
        }
      }
    ]
  },
  "areaCopy": {
    "intro": "Tilers may cover Leeds by postcode and job size. Example areas include:",
    "sideTitle": "Show the existing surface before comparing quotes",
    "sideCopy": "Photos of the floor or wall, approximate square metres and the tile size help a tiler decide whether removal, levelling, boarding or waterproofing is needed.",
    "noteLead": "Preparation can dominate labour.",
    "noteText": "If one quote assumes a ready-to-tile surface and another includes strip-out and levelling, the totals are not directly comparable."
  },
  "faq": [
    [
      "How much does tiling cost in Leeds?",
      "The exact quote depends on tile size, material and preparation. MyJobQuote's current UK guidance gives broad examples around £400–£500 for roughly 8m² of floor tiling and £500–£800 for a typical bathroom tiling job."
    ],
    [
      "Why does the age of a Leeds property matter for tiling?",
      "Older properties can have uneven or previously altered substrates, so the wall or floor may need more preparation before new tiles are laid."
    ],
    [
      "Who disposes of old tiles and rubble?",
      "Agree this in the quote. Leeds treats waste created by paid tradespeople as trade waste, so it should use an appropriate commercial disposal route rather than ordinary household recycling facilities."
    ],
    [
      "Should I mention waterproofing?",
      "Yes. In showers and other wet areas, ask what waterproofing or tanking is proposed and whether it is included."
    ],
    [
      "Do I have to hire a tiler who responds?",
      "No. There is no obligation to hire."
    ]
  ],
  "cta": {
    "title": "Ready to compare tilers in Leeds?",
    "copy": "Describe the surfaces, tiles and preparation once, then compare interested Leeds tilers and quotes.",
    "buttonLabel": "Get Leeds tiling quotes"
  }
});

export const heatingEngineersLeeds = makeLeedsProfile("heating-engineers", {
  "heroCopy": "Boiler fault, cold radiators, controls problem or a larger heating upgrade in Leeds? Describe the system and symptoms once, then compare heating engineers suited to the job.",
  "answer": {
    "title": "Looking for a heating engineer near you in Leeds?",
    "copy": "Enter the postcode, fuel type, boiler or heating-system details and the symptoms. Suitable Leeds heating engineers can decide whether the job matches their registration, equipment and availability."
  },
  "localContext": {
    "eyebrow": "Leeds heating context",
    "title": "Leeds is expanding low-carbon heat while many homes still rely on individual systems",
    "intro": "The city now has a substantial district-heating network and is planning further expansion. That makes it especially important to identify whether a property has an individual boiler, communal system or heat-network connection before quoting.",
    "items": [
      {
        "title": "Leeds PIPES already serves thousands of homes",
        "text": "Leeds City Council reported in March 2026 that the Leeds PIPES network had more than 30 kilometres of pipework and connected over 4,100 residential properties plus 30 public and commercial buildings. A new city-centre phase is expected to reach up to 8,000 more residents.",
        "source": {
          "label": "Leeds City Council — next phase of Leeds PIPES",
          "url": "https://news.leeds.gov.uk/news/next-phase-of-low-carbon-heat-network-set-to-reach-thousands-more-residents"
        }
      },
      {
        "title": "Some Leeds flats and maisonettes use district heating instead of individual boilers",
        "text": "Leeds City Council explains that some blocks of flats and maisonettes use shared district heating supplied through hot water from the Recycling and Energy Recovery Facility. If the property is on a communal or district system, say so before requesting a conventional boiler repair.",
        "source": {
          "label": "Leeds City Council — district heating",
          "url": "https://www.leeds.gov.uk/housing/housing-strategy/district-heating"
        }
      }
    ]
  },
  "areaCopy": {
    "intro": "Heating engineers may cover Leeds according to postcode, fuel type and urgency. Example areas include:",
    "sideTitle": "Identify the heating system before the visit",
    "sideCopy": "Boiler make, fuel, error code, controls, property type and whether the heating is communal all help an engineer judge the right type of appointment.",
    "noteLead": "Registration still matters.",
    "noteText": "Gas work should be carried out by an appropriately Gas Safe registered engineer; other systems may require different specialist competence."
  },
  "faq": [
    [
      "How much does a heating engineer cost in Leeds?",
      "The price depends on whether the job is diagnosis, repair, replacement or a larger system change. Use the quote form for the actual system and symptoms rather than relying on a single city-wide figure."
    ],
    [
      "Does Leeds have district heating?",
      "Yes. Leeds PIPES already connects thousands of residential properties and the council is expanding the network. Tell the engineer if your home uses communal or district heating."
    ],
    [
      "Can any heating engineer work on a gas boiler?",
      "No. Gas work in the UK should be carried out by an engineer registered for the relevant work on the Gas Safe Register."
    ],
    [
      "What information should I include for a boiler fault?",
      "Give the boiler make and model if known, fuel type, any error code, what the heating and hot water are doing and when the problem started."
    ],
    [
      "Do I have to hire an engineer who responds?",
      "No. There is no obligation to hire."
    ]
  ],
  "cta": {
    "title": "Ready to compare heating engineers in Leeds?",
    "copy": "Describe the system and symptoms once, then compare interested Leeds heating engineers, reviews and quotes.",
    "buttonLabel": "Get Leeds heating quotes"
  }
});
