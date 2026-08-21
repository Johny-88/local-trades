import type { ServiceSlug } from "./serviceIframe";

export type ServiceCategory = {
  slug: ServiceSlug;
  name: string;
  plural: string;
  description: string;
  iconPaths: readonly string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "removal-companies",
    name: "Removal Company",
    plural: "Removal Companies",
    description: "House moves, man with a van, storage and specialist removals.",
    iconPaths: ["M8 22h31v22H8z", "M39 29h9l8 9v6H39z", "M16 48a4 4 0 1 0 0 .01", "M48 48a4 4 0 1 0 0 .01", "M16 17h18v11H16z"],
  },
  {
    slug: "cleaners",
    name: "Cleaner",
    plural: "Cleaners",
    description: "Domestic, commercial, carpet and window cleaning services.",
    iconPaths: ["M25 10h14l-2 11H27z", "M32 21v24", "M20 45h24", "M16 51h32", "M48 13l2 4 4 2-4 2-2 4-2-4-4-2 4-2z"],
  },
  {
    slug: "tilers",
    name: "Tiler",
    plural: "Tilers",
    description: "Wall, floor and external tiling for kitchens, bathrooms and more.",
    iconPaths: ["M12 12h17v17H12z", "M35 12h17v17H35z", "M12 35h17v17H12z", "M35 35h17v17H35z"],
  },
  {
    slug: "heating-engineers",
    name: "Heating Engineer",
    plural: "Heating Engineers",
    description: "Boilers, radiators, heating systems and heat-pump work.",
    iconPaths: ["M13 18h38v28H13z", "M20 22v20", "M28 22v20", "M36 22v20", "M44 22v20", "M18 50v4", "M46 50v4"],
  },
  {
    slug: "locksmiths",
    name: "Locksmith",
    plural: "Locksmiths",
    description: "Emergency access, lock fitting, repairs and door security.",
    iconPaths: ["M23 34a10 10 0 1 1 7-17 10 10 0 0 1-7 17z", "M30 27h25", "M45 27v7", "M51 27v5"],
  },
  {
    slug: "pest-controllers",
    name: "Pest Controller",
    plural: "Pest Controllers",
    description: "Residential and commercial pest-control treatments.",
    iconPaths: ["M32 20c8 0 13 7 13 16s-5 16-13 16-13-7-13-16 5-16 13-16z", "M32 20v32", "M21 28l-8-6", "M43 28l8-6", "M19 38H9", "M45 38h10", "M21 47l-8 6", "M43 47l8 6", "M27 14h10"],
  },
  {
    slug: "tree-surgeons",
    name: "Tree Surgeon",
    plural: "Tree Surgeons",
    description: "Tree felling, pruning, crown work and stump grinding.",
    iconPaths: ["M32 51V31", "M32 34c-12 0-18-7-18-15 9 0 15 3 18 9", "M32 31c0-11 7-19 18-19 0 10-6 18-18 19", "M22 53h20"],
  },
  {
    slug: "architects",
    name: "Architect",
    plural: "Architects",
    description: "Extensions, remodels, inspections and new-build design work.",
    iconPaths: ["M14 12h30v40H14z", "M21 20h16", "M21 27h16", "M21 34h11", "M46 18l8 8-17 17-10 2 2-10z"],
  },
  {
    slug: "plasterers",
    name: "Plasterer",
    plural: "Plasterers",
    description: "Skimming, rendering, coving, screeding and plaster repairs.",
    iconPaths: ["M11 19h31l-8 13H17z", "M25 32v19", "M20 51h18", "M43 18l10-6"],
  },
  {
    slug: "kitchen-fitters",
    name: "Kitchen Fitter",
    plural: "Kitchen Fitters",
    description: "Kitchen installation, worktops, cupboards, sinks and refurbishments.",
    iconPaths: ["M10 16h44v32H10z", "M10 30h44", "M26 16v32", "M38 16v32", "M17 22h2", "M45 22h2", "M30 36h4"],
  },
  {
    slug: "bathroom-specialists",
    name: "Bathroom Specialist",
    plural: "Bathroom Specialists",
    description: "Bathroom fitting, showers, tiling, repairs and refurbishments.",
    iconPaths: ["M11 34h43", "M15 34v6c0 8 6 13 14 13h12c8 0 11-5 11-13v-6", "M20 28V17a6 6 0 0 1 12 0", "M32 18h7", "M20 53v4", "M48 53v4"],
  },
  {
    slug: "drainage-specialists",
    name: "Drainage Specialist",
    plural: "Drainage Specialists",
    description: "Blocked drains, sewerage, soakaways and drainage problems.",
    iconPaths: ["M14 14v16h22v12h14", "M14 22h22", "M50 42v9", "M44 51h12", "M24 37c0 5-4 8-8 8s-8-3-8-8c0-4 8-12 8-12s8 8 8 12z"],
  },
  {
    slug: "driveway-specialists",
    name: "Driveway Specialist",
    plural: "Driveway Specialists",
    description: "Block paving, resin, tarmac, gravel, concrete and paths.",
    iconPaths: ["M20 10h24l10 44H10z", "M25 18h14", "M23 27h18", "M20 38h24", "M16 49h32"],
  },
  {
    slug: "window-specialists",
    name: "Window Specialist",
    plural: "Window Specialists",
    description: "Glazing, replacement windows, doors, skylights and conservatories.",
    iconPaths: ["M12 12h40v40H12z", "M32 12v40", "M12 32h40", "M18 18l8 8", "M38 38l8 8"],
  },
];

export function getServiceCategory(slug: string) {
  return serviceCategories.find((service) => service.slug === slug);
}
