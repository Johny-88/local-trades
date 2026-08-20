import type { TradeSlug } from "./affiliateLinks";

export type TradeCategory = {
  slug: TradeSlug;
  name: string;
  plural: string;
  description: string;
  hero: string;
  commonJobs: string[];
  ogImage: string;
};

export const tradeCategories: TradeCategory[] = [
  {slug:"handyman",name:"Handyman",plural:"Handymen",description:"Odd jobs, repairs, fitting and general household maintenance.",hero:"Find a local handyman for repairs, fitting and the jobs that keep getting pushed down the list.",commonJobs:["Furniture and fixture fitting","Minor repairs","General maintenance","Small household jobs"],ogImage:"/og/handyman.jpg"},
  {slug:"plumber",name:"Plumber",plural:"Plumbers",description:"Leaks, taps, toilets, pipework and plumbing jobs.",hero:"Find a local plumber and compare quotes for repairs, replacements and installations.",commonJobs:["Leaks and pipe repairs","Taps and toilets","Bathroom plumbing","Radiators and pipework"],ogImage:"/og/plumber.jpg"},
  {slug:"electrician",name:"Electrician",plural:"Electricians",description:"Lighting, sockets, wiring, faults and installations.",hero:"Find a local electrician for safe repairs, fault finding and electrical installations.",commonJobs:["Sockets and switches","Lighting","Fault finding","New electrical installations"],ogImage:"/og/electrician.jpg"},
  {slug:"roofer",name:"Roofer",plural:"Roofers",description:"Roof repairs, leaks, tiles and replacements.",hero:"Find a local roofer for leaks, damaged roofs, tiles and replacement work.",commonJobs:["Roof leak repairs","Tiles and slates","Flat roofing","Gutters and roofline work"],ogImage:"/og/roofer.jpg"},
  {slug:"painter-decorator",name:"Painter & Decorator",plural:"Painters & Decorators",description:"Interior, exterior and finishing work.",hero:"Find local painters and decorators for a cleaner finish inside or outside your home.",commonJobs:["Interior painting","Exterior painting","Wallpapering","Preparation and finishing"],ogImage:"/og/painter-decorator.jpg"},
  {slug:"flooring-fitter",name:"Flooring Fitter",plural:"Flooring Fitters",description:"Laminate, wood, vinyl and floor fitting.",hero:"Find a local flooring fitter for laminate, wood, vinyl and other fitted flooring.",commonJobs:["Laminate fitting","Wood flooring","Vinyl flooring","Floor preparation"],ogImage:"/og/flooring-fitter.jpg"},
  {slug:"builder",name:"Builder",plural:"Builders",description:"Renovations, extensions and general building work.",hero:"Find a local builder and compare options for repairs, renovations and larger projects.",commonJobs:["Renovations","Extensions","Brickwork and structural work","General building repairs"],ogImage:"/og/builder.jpg"},
  {slug:"gardener",name:"Gardener",plural:"Gardeners",description:"Maintenance, planting and landscaping.",hero:"Find a local gardener for regular maintenance, tidy-ups, planting and landscaping.",commonJobs:["Garden maintenance","Hedge and shrub work","Planting","Landscaping and tidy-ups"],ogImage:"/og/gardener.jpg"},
];

export function getTradeCategory(slug: string) {
  return tradeCategories.find((trade) => trade.slug === slug);
}
