import type { ServiceSlug } from "./serviceIframe";

export type LocalServiceSource = {
  label: string;
  url: string;
};

export type LocalServicePageContent = {
  serviceSlug: ServiceSlug;
  serviceName: string;
  servicePlural: string;
  locationSlug: string;
  locationName: string;
  region: string;
  postcodeExample: string;
  hero: {
    eyebrow: string;
    title: string;
    copy: string;
    points: readonly string[];
  };
  answer: {
    title: string;
    copy: string;
  };
  jobs: readonly {
    title: string;
    text: string;
    paths: readonly string[];
  }[];
  costs: {
    title: string;
    intro: string;
    prices: readonly { value: string; label: string }[];
    sourceNote: string;
    quoteTitle: string;
    quoteIntro: string;
    quoteTips: readonly string[];
  };
  localContext: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly {
      title: string;
      text: string;
      source: LocalServiceSource;
    }[];
  };
  areas: {
    title: string;
    intro: string;
    items: readonly string[];
    sideTitle: string;
    sideCopy: string;
    noteLead: string;
    noteText: string;
  };
  how: {
    title: string;
    intro: string;
    steps: readonly { title: string; text: string }[];
  };
  choose: {
    title: string;
    intro: string;
    benefits: readonly { title: string; text: string; paths: readonly string[] }[];
  };
  faq: readonly [question: string, answer: string][];
  cta: {
    title: string;
    copy: string;
    buttonLabel: string;
  };
};

const removalCompaniesBirmingham: LocalServicePageContent = {
  serviceSlug: "removal-companies",
  serviceName: "Removal Company",
  servicePlural: "Removal Companies",
  locationSlug: "birmingham",
  locationName: "Birmingham",
  region: "West Midlands",
  postcodeExample: "B15 2TT",
  hero: {
    eyebrow: "Removal Companies Birmingham",
    title: "Find removal companies in Birmingham",
    copy:
      "Planning a house move, flat move or smaller man-with-a-van job? Post your move once and suitable removal companies covering Birmingham can express interest. Check their profiles, genuine verified customer reviews and quotes before deciding who you want to hire.",
    points: ["Free for homeowners", "Up to 3 local responses", "No obligation to hire"],
  },
  answer: {
    title: "Looking for a removal company near you in Birmingham?",
    copy:
      "Use the quote form to enter the postcode for the property and describe what needs moving. Your request can then be shown to suitable removal companies, and interested professionals can respond so you can compare the options rather than contacting a long list one by one.",
  },
  jobs: [
    {
      title: "House removals",
      text: "Full moves between houses, including loading, transport and unloading of furniture, boxes and household belongings.",
      paths: ["M4 20h16", "M6 20V9l6-5 6 5v11", "M9 14h6"],
    },
    {
      title: "Flat & apartment moves",
      text: "Moves where stairs, lifts, loading access and building rules may need to be considered before the day of the move.",
      paths: ["M5 21V4h14v17", "M9 8h2", "M13 8h2", "M9 12h2", "M13 12h2", "M9 16h6"],
    },
    {
      title: "Man with a van",
      text: "Smaller local moves, single-room moves, furniture collections and jobs that do not require a full-size removal crew.",
      paths: ["M3 8h11v9H3z", "M14 11h4l3 3v3h-7z", "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4", "M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"],
    },
    {
      title: "Packing services",
      text: "Optional packing and unpacking help, including boxing belongings and preparing fragile or awkward items for transport.",
      paths: ["M4 7h16v13H4z", "M4 7l8 5 8-5", "M12 12v8"],
    },
    {
      title: "Storage & staged moves",
      text: "Short- or longer-term storage can help when completion dates do not line up or a move needs to happen in stages.",
      paths: ["M4 5h16v15H4z", "M7 9h10", "M7 13h10", "M7 17h10"],
    },
    {
      title: "Specialist removals",
      text: "Moves involving unusually heavy, delicate or high-value items where the company may need specialist equipment or extra planning.",
      paths: ["M12 3 4 7v5c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7z", "M9 12h6"],
    },
  ],
  costs: {
    title: "How much do removals cost?",
    intro:
      "Removal prices depend on the amount being moved, distance, crew size, access, parking and whether you add packing or storage. Current 2026 UK guides give these useful benchmarks for moves of up to around 50 miles:",
    prices: [
      { value: "£320–£420", label: "1-bedroom move — MyJobQuote" },
      { value: "£520–£640", label: "2-bedroom move — MyJobQuote" },
      { value: "£800–£950", label: "3-bedroom move — MyJobQuote" },
      { value: "£1,000–£1,150", label: "4-bedroom move — MyJobQuote" },
    ],
    sourceNote:
      "Indicative UK guidance checked August 2026. MyJobQuote says its cost data is gathered from real UK quotes. Checkatrade separately puts a standard local move at roughly £500–£700 and a two-person team plus van at about £50–£80 per hour. Actual Birmingham quotes can be higher or lower.",
    quoteTitle: "Make removal quotes easier to compare",
    quoteIntro:
      "Give each company the same practical information. A cheap headline price is not useful if one quote excludes packing, dismantling, waiting time or difficult access that another quote includes.",
    quoteTips: [
      "Give both collection and delivery postcodes and the expected moving date.",
      "Describe the property size and roughly how much furniture and boxed belongings will be moved.",
      "Mention stairs, lifts, narrow access, long carrying distances or restricted parking.",
      "Say whether packing, furniture dismantling, storage or disposal is needed.",
    ],
  },
  localContext: {
    eyebrow: "Birmingham move planning",
    title: "Two Birmingham details worth planning before moving day",
    intro:
      "This is the part of the page that changes with the location. Birmingham has a mixed housing stock and city-specific parking rules that can directly affect how a removal is planned.",
    items: [
      {
        title: "Birmingham has a very mixed housing stock",
        text:
          "Birmingham City Observatory's Census 2021 housing briefing reports that 35.6% of households were in semi-detached homes, 27.8% in terraced homes and 21.0% in purpose-built flats or tenements. For removals, that mix matters: the same size move can involve very different carrying distances, stairs, lift access and vehicle positioning depending on the property.",
        source: {
          label: "Birmingham City Observatory — Census 2021 Housing",
          url: "https://www.cityobservatory.birmingham.gov.uk/explore/dataset/census-2021-factsheets/files/d3acd16ff3a7a90a5882446174cb4d1b/download/",
        },
      },
      {
        title: "Check parking access before the van arrives",
        text:
          "Birmingham City Council says parking bay suspensions and dispensations require at least 48 hours' notice for consideration. If the removal vehicle needs controlled space close to the property, checking the restrictions early can prevent a long carry from the van or a last-minute access problem.",
        source: {
          label: "Birmingham City Council — parking suspensions and dispensations",
          url: "https://www.birmingham.gov.uk/info/20109/parking/516/",
        },
      },
    ],
  },
  areas: {
    title: "Removal companies covering Birmingham",
    intro:
      "Enter the postcode where the move starts so the request can be matched to professionals who cover that part of Birmingham. Examples of areas homeowners may be moving from or to include:",
    items: ["Edgbaston", "Harborne", "Selly Oak", "Kings Heath", "Hall Green", "Erdington", "Yardley", "Sutton Coldfield"],
    sideTitle: "The postcode matters for removals",
    sideCopy:
      "Travel time, parking and access can change significantly across Birmingham. Giving the real collection and destination details helps a removal company judge vehicle size, crew time and the likely duration of the move.",
    noteLead: "Do not assume every company covers every route.",
    noteText: "Availability can depend on the date, the starting postcode, the destination and the size of the move.",
  },
  how: {
    title: "Post the move once, then compare interested companies",
    intro:
      "The process is designed to avoid calling removal firms one by one while still leaving the hiring decision with you.",
    steps: [
      {
        title: "Describe your move",
        text: "Open the Removal Companies quote form, add the postcode and explain the property size, destination, date and any extra services you need.",
      },
      {
        title: "Hear from interested local professionals",
        text: "Your request can be matched with suitable professionals. Up to three who are interested in the job can respond and get in touch.",
      },
      {
        title: "Check reviews, compare and choose",
        text: "Review profiles, genuine verified customer feedback and quotes, ask any final questions, then choose who you want to hire. There is no obligation to proceed.",
      },
    ],
  },
  choose: {
    title: "What should you check before hiring a removal company?",
    intro:
      "Price matters, but the cheapest figure is not automatically the best fit. Check what the quote covers and whether the company is comfortable with the practical details of your particular move.",
    benefits: [
      {
        title: "Compare the same scope",
        text: "Check whether labour, transport, fuel, packing materials, dismantling and waiting time are included or charged separately.",
        paths: ["M4 6h16", "M4 12h10", "M4 18h16"],
      },
      {
        title: "Read verified customer feedback",
        text: "MyJobQuote operates a closed-loop feedback system: reviews are submitted by homeowners who had work completed through the service by a verified trade member.",
        paths: ["M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"],
      },
      {
        title: "Confirm access and timing",
        text: "Make sure the company knows about stairs, lifts, keys, parking, completion-time uncertainty and any building access restrictions before moving day.",
        paths: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18", "M12 7v5l3 2"],
      },
    ],
  },
  faq: [
    [
      "How much does a removal company cost in Birmingham?",
      "There is no single Birmingham price because the quote depends heavily on property size, volume, distance and access. As UK guidance, MyJobQuote lists about £320–£420 for a 1-bedroom move up to 50 miles, £520–£640 for 2 bedrooms and £800–£950 for 3 bedrooms. Get a tailored quote for the actual route and inventory.",
    ],
    [
      "Can I find a man with a van in Birmingham through this page?",
      "Yes. Man with a Van is one of the services within MyJobQuote's Removal Companies category, alongside house removals, specialist removals and storage.",
    ],
    [
      "Should I arrange parking before moving day?",
      "If the van cannot park legally and close enough to the property, the move can take longer. Birmingham City Council says parking bay suspensions and dispensations need at least 48 hours' notice for consideration, so check local restrictions well before the move.",
    ],
    [
      "Are the reviews genuine?",
      "MyJobQuote says reviews on trade profiles come from users who had a job completed by a verified trade member and that it operates a closed-loop feedback system designed to protect users from fake reviews.",
    ],
    [
      "How many removal companies can respond?",
      "Up to three interested local professionals can get in touch about the same job, giving you options to compare without creating an open-ended stream of responses.",
    ],
    [
      "Do I have to hire one of the companies that responds?",
      "No. Posting the job is free for homeowners and there is no obligation to hire. Compare the profiles, feedback and quotes and proceed only if one of the options suits you.",
    ],
  ],
  cta: {
    title: "Ready to compare removal companies in Birmingham?",
    copy: "Post the move once, hear from interested local professionals and check their reviews and quotes before deciding who to hire.",
    buttonLabel: "Get Birmingham removal quotes",
  },
};

const profiles: readonly LocalServicePageContent[] = [removalCompaniesBirmingham];

export function getLocalServiceContent(service: string, city: string) {
  return profiles.find((profile) => profile.serviceSlug === service && profile.locationSlug === city);
}
