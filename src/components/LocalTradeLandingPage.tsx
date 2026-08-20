import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { LocalTradeFinderForm } from "./LocalTradeFinderForm";
import type { LocalPage } from "../lib/localPages";
import { getTradeCategory } from "../lib/tradeCategoryContent";
import { createServicePageStructuredData, type BreadcrumbItem } from "../lib/schema";

export function LocalTradeLandingPage({page}:{page:LocalPage}){const trade=getTradeCategory(page.tradeSlug);if(!trade)return null;const path=`/${page.tradeSlug}/${page.locationSlug}/`;const breadcrumbs:BreadcrumbItem[]=[{name:"Home",href:"/"},{name:trade.plural,href:`/${trade.slug}/`},{name:page.locationName,href:path}];const schema=createServicePageStructuredData({canonicalPath:path,title:page.title,description:page.description,serviceName:`${trade.name} quote requests in ${page.locationName}`,serviceType:trade.name,breadcrumbItems:breadcrumbs,areaServed:{"@type":"City",name:page.locationName}});return <><JsonLd data={schema}/><Breadcrumbs items={breadcrumbs}/><main className="local-trade-page"><section className="seo-hero"><div className="wrap narrow"><span className="smallcap">{trade.plural} in {page.locationName}</span><h1>{page.title}</h1><p>{page.intro}</p></div></section><section className="seo-section soft"><div className="wrap"><div className="intro"><h2>Describe the job once</h2><p>Open the quote form with {trade.name.toLowerCase()} already selected.</p></div><LocalTradeFinderForm tradeSlug={trade.slug}/></div></section></main></>}
