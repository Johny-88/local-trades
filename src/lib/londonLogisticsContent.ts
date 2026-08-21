import { makeLondonProfile } from "./londonProfileBase";

export const removalCompaniesLondon = makeLondonProfile("removal-companies", {
  heroCopy: "Moving into, out of or across London? Describe the property, route, access and amount being moved once, then compare removal companies that cover your part of the capital.",
  answer: { title: "Looking for a removal company near you in London?", copy: "Enter the collection postcode, destination and moving date, then explain the property type, floor level, lifts, parking and approximate volume. Suitable London removal companies can decide whether the route and access fit their crew and vehicle." },
  localContext: {
    eyebrow: "London move planning",
    title: "Flats, loading restrictions and road charges can change the moving-day plan",
    intro: "London moves often involve high-density housing and tightly controlled road space. Two London-wide details are worth checking before the final quote.",
    items: [
      { title: "More than half of London households live in flats", text: "The London Assembly Research Unit reports that 54% of London households lived in a flat, maisonette or apartment at the 2021 Census. For removals that can mean lift reservations, stair carries, concierge rules and limited loading space even for a relatively small home.", source: { label: "London Assembly Research Unit — London's Housing Stock", url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" } },
      { title: "Driving and loading rules can affect the route and cost", text: "TfL says vehicles in London may be affected by the Congestion Charge, ULEZ, LEZ and tunnel charges depending on the vehicle and journey. TfL also manages red routes, where loading and stopping are tightly controlled. A removal firm should understand the actual addresses before fixing vehicle and access assumptions.", source: { label: "Transport for London — pay to drive in London", url: "https://tfl.gov.uk/modes/driving/pay-to-drive-in-london" } },
    ],
  },
  areaCopy: {
    intro: "Removal companies may cover London by postcode, route and moving date. Example areas include:",
    sideTitle: "Give the exact collection and destination postcodes",
    sideCopy: "A fifth-floor flat in Camden and a house in Croydon can require very different loading plans. Give the real floor levels, lift details and parking situation.",
    noteLead: "Do not assume the van can stop outside.",
    noteText: "Check loading restrictions, building rules and any road-user charges before the move.",
  },
  faq: [
    ["How much does a removal company cost in London?", "There is no single London price because volume, distance, floor level and access change the job. MyJobQuote's current UK guide gives roughly £320–£420 for a 1-bedroom move up to 50 miles, £520–£640 for 2 bedrooms and £800–£950 for 3 bedrooms."],
    ["Can I find a man with a van in London?", "Yes. Smaller transport jobs and man-with-a-van work sit within the Removal Companies category alongside full household moves, packing and storage."],
    ["Do London road charges affect removal quotes?", "They can. Depending on the vehicle and route, TfL road-user charges may apply, and parking or loading restrictions can add time. Give the exact addresses so the company can plan accurately."],
    ["Why does a London flat need more access information?", "More than half of London households live in flats, so lifts, stairs, concierge rules and loading bays are common practical factors."],
    ["Do I have to hire a company that responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare removal companies in London?", copy: "Describe the route and access once, then compare interested London removal companies, verified reviews and quotes.", buttonLabel: "Get London removal quotes" },
});

export const cleanersLondon = makeLondonProfile("cleaners", {
  heroCopy: "Need regular cleaning, an end-of-tenancy clean, a deep clean or specialist help in London? Describe the property and required standard once, then compare cleaners interested in the job.",
  answer: { title: "Looking for a cleaner near you in London?", copy: "Enter the postcode, property size and cleaning type. Include ovens, carpets, windows or other extras so cleaners covering that part of London can judge the time, products and equipment required." },
  localContext: {
    eyebrow: "London cleaning context",
    title: "Rental turnover and flat living shape many London cleaning jobs",
    intro: "London has a larger rented sector and far more flats than the rest of England, which makes handover dates and building access especially relevant.",
    items: [
      { title: "Thirty per cent of London households privately rent", text: "The London Assembly Research Unit reports that 30% of London households were privately renting at the 2021 Census, with 53% renting overall. That does not create a requirement to hire a professional cleaner, but it helps explain why end-of-tenancy and move-in cleaning is a common time-sensitive job in the capital.", source: { label: "London Assembly Research Unit — tenure and ownership", url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" } },
      { title: "Fifty-four per cent of London households live in flats", text: "The same housing report says 54% of London households lived in a flat, maisonette or apartment. Cleaners may therefore need to plan around communal entrances, concierge access, lifts, parking and restrictions on bringing equipment through shared areas.", source: { label: "London Assembly Research Unit — types of home", url: "https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" } },
    ],
  },
  areaCopy: {
    intro: "Cleaning companies and independent cleaners may cover London by postcode and schedule. Example areas include:",
    sideTitle: "Give the real property type and access details",
    sideCopy: "A studio flat, a shared rental house and a family home can all require very different visit lengths. Room count and condition are more useful than postcode alone.",
    noteLead: "Be specific about extras.",
    noteText: "Ovens, carpets, windows, appliances and heavy build-up are often priced separately from a standard clean.",
  },
  faq: [
    ["How much does a cleaner cost in London?", "There is no single London rate. MyJobQuote currently shows a broad cleaner rate of about £20–£40 per hour, while end-of-tenancy work commonly falls around £100–£350 depending on size and condition."],
    ["Can I use this page for an end-of-tenancy clean?", "Yes. Give the property size, handover date and any landlord or agent checklist so interested cleaners can price the same scope."],
    ["Does renting mean I must book a professional cleaner?", "No. The fact that 30% of London households privately rent is local market context, not a rule requiring a professional cleaner."],
    ["Why should I mention lifts or concierge access?", "More than half of London households live in flats, so access to shared buildings can affect arrival, equipment and the time available for a clean."],
    ["Do I have to hire a cleaner who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: { title: "Ready to compare cleaners in London?", copy: "Describe the property and cleaning checklist once, then compare interested London cleaners and their quotes.", buttonLabel: "Get London cleaning quotes" },
});
