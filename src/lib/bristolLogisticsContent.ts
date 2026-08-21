import { makeBristolProfile } from "./bristolProfileBase";

export const removalCompaniesBristol = makeBristolProfile("removal-companies", {
  heroCopy: "Moving within Bristol, across the South West or further afield? Describe the route, property access and amount being moved once, then compare removal companies that cover your part of Bristol.",
  answer: {
    title: "Looking for a removal company near you in Bristol?",
    copy: "Enter the collection postcode, destination and moving date, then explain the property type, stairs or lifts, parking and approximate volume. Suitable Bristol removal companies can judge whether the route, crew and vehicle requirements fit their availability.",
  },
  localContext: {
    eyebrow: "Bristol move planning",
    title: "Parking space and the Clean Air Zone can affect moving-day logistics",
    intro: "Bristol has controlled parking in busy neighbourhoods and a Clean Air Zone in and around the city centre. Both can affect where a removal vehicle waits and what the journey costs.",
    items: [
      {
        title: "Domestic removals are an accepted reason to suspend a parking bay",
        text: "Bristol City Council allows temporary suspension of residents', shared-use, pay-and-display and other designated bays for domestic removals. The current charge is £38 per day for one vehicle up to five metres long, and the council asks applicants to allow three working days for processing.",
        source: {
          label: "Bristol City Council — suspend a parking bay",
          url: "https://www.bristol.gov.uk/business/licences-and-permits/roads-and-highway-licences/apply-to-suspend-a-parking-bay",
        },
      },
      {
        title: "Older vans and larger removal vehicles may face Clean Air Zone charges",
        text: "Bristol's Clean Air Zone operates 24 hours a day, every day of the year. Non-compliant light goods vehicles under 3.5 tonnes are currently charged £9 per day and non-compliant heavy goods vehicles £100 per day. Give the exact route so a company can price any relevant vehicle charge rather than discovering it on moving day.",
        source: {
          label: "Bristol City Council — Clean Air Zone charges",
          url: "https://www.bristol.gov.uk/residents/streets-travel/bristols-caz/charges-and-vehicle-checker",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover Bristol by postcode, moving date and destination. Example areas include:",
    sideTitle: "Give both postcodes and the real access details",
    sideCopy: "A Clifton flat, a terrace in Easton and a family home in Brislington can require very different carrying distances and vehicle positioning. Floor level, stairs, lifts and parking are worth stating clearly.",
    noteLead: "Check the vehicle route as well as the front door.",
    noteText: "A parking suspension or Clean Air Zone charge can be a real part of the job, so agree who is responsible before the quote is finalised.",
  },
  faq: [
    ["How much does a removal company cost in Bristol?", "There is no single Bristol price because volume, distance, access and crew size change the job. MyJobQuote's current UK guide gives roughly £320–£420 for a 1-bedroom move up to 50 miles, £520–£640 for 2 bedrooms and £800–£950 for 3 bedrooms."],
    ["Can I find a man with a van in Bristol?", "Yes. Smaller transport jobs and man-with-a-van work sit within the Removal Companies category alongside full household moves, packing and storage."],
    ["Can I reserve a parking bay for a removal van in Bristol?", "Bristol City Council allows designated bays to be suspended for domestic removals. It currently charges £38 per day for one vehicle up to five metres long and asks for three working days to process an application."],
    ["Can Bristol's Clean Air Zone affect a removal quote?", "Yes. A non-compliant van or HGV entering the zone may attract a daily charge, so give the exact collection and destination route before agreeing the final price."],
    ["Do I have to hire a company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare removal companies in Bristol?",
    copy: "Describe the move and access once, then compare interested Bristol removal companies, verified reviews and quotes.",
    buttonLabel: "Get Bristol removal quotes",
  },
});

export const cleanersBristol = makeBristolProfile("cleaners", {
  heroCopy: "Need regular cleaning, a deep clean, an end-of-tenancy clean or specialist help in Bristol? Describe the property and required standard once, then compare cleaners interested in the job.",
  answer: {
    title: "Looking for a cleaner near you in Bristol?",
    copy: "Enter the postcode, property size and cleaning type. Include ovens, carpets, windows or other extras so cleaners covering that part of Bristol can judge the time, products and equipment required.",
  },
  localContext: {
    eyebrow: "Bristol cleaning context",
    title: "Rental licensing and waste rules can change the brief",
    intro: "Bristol has citywide additional HMO licensing plus selective licensing in several wards, while rubbish removed as part of paid work is treated as business or trade waste rather than ordinary household waste.",
    items: [
      {
        title: "Bristol expanded private-rental licensing in August 2024",
        text: "Bristol City Council introduced a citywide additional licensing scheme for most HMOs occupied by three or four unrelated people, alongside selective licensing for most other privately rented homes in Bishopston and Ashley Down, Cotham and Easton. This does not require professional cleaning, but it is useful context for managed rental properties and time-sensitive tenancy handovers.",
        source: {
          label: "Bristol City Council — property licensing",
          url: "https://www.bristol.gov.uk/business/licences-and-permits/property-licences/check-if-you-need-a-property-licence-and-apply",
        },
      },
      {
        title: "Waste taken away through paid work must be handled as business waste",
        text: "Bristol City Council says businesses have a legal duty of care for their waste and household recycling centres cannot be used for business, trade or construction waste. If a cleaner is also clearing rubbish, agree whether disposal is included and how it will be handled legally.",
        source: {
          label: "Bristol City Council — business waste disposal",
          url: "https://www.bristol.gov.uk/business/health-and-safety/business-waste-recycling/business-waste-and-recycling-disposal",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Cleaning companies and independent cleaners may cover Bristol by postcode and schedule. Example areas include:",
    sideTitle: "Describe the property, not just the postcode",
    sideCopy: "A student house in Redland, a flat in Clifton and a family home in Brislington can require very different visit lengths. Give the room count, condition and any specialist tasks.",
    noteLead: "List extras separately.",
    noteText: "Ovens, carpets, windows, appliances, rubbish removal and heavy build-up are often priced differently from a routine clean.",
  },
  faq: [
    ["How much does a cleaner cost in Bristol?", "There is no single Bristol rate. MyJobQuote currently shows a broad cleaner rate of about £20–£40 per hour, while end-of-tenancy work commonly falls around £100–£350 depending on property size and condition."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Give the property size, handover date and any landlord or agent checklist so interested cleaners can price the same scope."],
    ["Does Bristol property licensing mean I must hire a professional cleaner?", "No. The licensing schemes regulate certain private-rented properties; they do not create a general rule that a professional cleaner must be hired."],
    ["What if the cleaner is taking rubbish away?", "Agree the disposal arrangement first. Bristol says business, trade and construction waste cannot be taken to household recycling centres, and businesses have a duty of care to dispose of waste correctly."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare cleaners in Bristol?",
    copy: "Describe the property and cleaning checklist once, then compare interested Bristol cleaners and their quotes.",
    buttonLabel: "Get Bristol cleaning quotes",
  },
});
