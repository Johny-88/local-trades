import type { ServiceSlug } from "./serviceIframe";

export type ServiceCostSource = {
  label: string;
  url: string;
};

export const SERVICE_COST_SOURCES: Record<ServiceSlug, readonly ServiceCostSource[]> = {
  "removal-companies": [
    { label: "MyJobQuote 2026 removal cost guide", url: "https://www.myjobquote.co.uk/costs/removals-cost" },
    { label: "Checkatrade 2026 house removal cost guide", url: "https://www.checkatrade.com/blog/cost-guides/house-removal-costs/" },
  ],
  cleaners: [
    { label: "MyJobQuote cleaner pricing overview", url: "https://www.myjobquote.co.uk/cleaner" },
    { label: "MyJobQuote 2026 end-of-tenancy cleaning guide", url: "https://www.myjobquote.co.uk/costs/end-of-tenancy-cleaning-costs" },
    { label: "MyJobQuote 2026 carpet cleaning guide", url: "https://www.myjobquote.co.uk/costs/carpet-cleaning" },
  ],
  tilers: [
    { label: "MyJobQuote 2026 floor tiling cost guide", url: "https://www.myjobquote.co.uk/costs/tiling-a-floor" },
    { label: "MyJobQuote 2026 bathroom tiling cost guide", url: "https://www.myjobquote.co.uk/costs/tiling-a-bathroom" },
  ],
  "heating-engineers": [
    { label: "MyJobQuote 2026 boiler service cost guide", url: "https://www.myjobquote.co.uk/costs/cost-to-get-your-boiler-serviced" },
    { label: "MyJobQuote 2026 power flush cost guide", url: "https://www.myjobquote.co.uk/costs/power-flush-cost" },
    { label: "MyJobQuote 2026 central heating cost guide", url: "https://www.myjobquote.co.uk/costs/new-central-heating-cost" },
  ],
  locksmiths: [
    { label: "MyJobQuote 2026 lock replacement cost guide", url: "https://www.myjobquote.co.uk/costs/get-your-locks-changed" },
  ],
  "pest-controllers": [
    { label: "MyJobQuote 2026 pest control cost guide", url: "https://www.myjobquote.co.uk/costs/pest-control" },
  ],
  "tree-surgeons": [
    { label: "MyJobQuote 2026 tree felling cost guide", url: "https://www.myjobquote.co.uk/costs/tree-felling" },
    { label: "MyJobQuote 2026 stump removal cost guide", url: "https://www.myjobquote.co.uk/costs/remove-a-tree-stump" },
  ],
  architects: [
    { label: "MyJobQuote 2026 architect cost guide", url: "https://www.myjobquote.co.uk/costs/architect-prices" },
  ],
  plasterers: [
    { label: "MyJobQuote 2026 plastering cost guide", url: "https://www.myjobquote.co.uk/costs/plastering-an-indoor-wall-cost" },
  ],
  "kitchen-fitters": [
    { label: "MyJobQuote 2026 kitchen remodelling cost guide", url: "https://www.myjobquote.co.uk/costs/remodel-a-kitchen" },
  ],
  "bathroom-specialists": [
    { label: "MyJobQuote 2026 bathroom cost guide", url: "https://www.myjobquote.co.uk/costs/full-bathroom-cost" },
  ],
  "drainage-specialists": [
    { label: "MyJobQuote 2026 drain clearance cost guide", url: "https://www.myjobquote.co.uk/costs/clean-and-unclog-drains" },
    { label: "MyJobQuote 2026 drain survey cost guide", url: "https://www.myjobquote.co.uk/costs/drain-survey-cost" },
  ],
  "driveway-specialists": [
    { label: "MyJobQuote 2026 driveway cost guide", url: "https://www.myjobquote.co.uk/costs/new-driveway" },
  ],
  "window-specialists": [
    { label: "MyJobQuote 2026 uPVC window cost guide", url: "https://www.myjobquote.co.uk/costs/upvc-windows-cost" },
    { label: "MyJobQuote 2026 blown-window repair guide", url: "https://www.myjobquote.co.uk/costs/blown-windows" },
  ],
};
