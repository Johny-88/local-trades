import { SITE_NAME, SITE_URL } from "./site";

export type BreadcrumbItem = { name: string; href: string };

const organization = {"@type":"Organization","@id":`${SITE_URL}/#organization`,name:SITE_NAME,url:`${SITE_URL}/`,description:"UK homeowner information and referral website helping people describe a home job and compare local trade options.",logo:{"@type":"ImageObject",url:`${SITE_URL}/assets/logo.svg`}} as const;
const website = {"@type":"WebSite","@id":`${SITE_URL}/#website`,url:`${SITE_URL}/`,name:SITE_NAME,publisher:{"@id":`${SITE_URL}/#organization`},inLanguage:"en-GB"} as const;

export const homePageStructuredData = {"@context":"https://schema.org","@graph":[organization,website]} as const;

function absoluteUrl(path:string){return new URL(path,`${SITE_URL}/`).toString();}
function breadcrumbList(id:string,items:BreadcrumbItem[]){return {"@type":"BreadcrumbList","@id":id,itemListElement:items.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.name,item:absoluteUrl(item.href)}))};}

export function createServicePageStructuredData({canonicalPath,title,description,serviceName,serviceType,breadcrumbItems,areaServed={"@type":"Country",name:"United Kingdom"}}:{canonicalPath:string;title:string;description:string;serviceName:string;serviceType:string;breadcrumbItems:BreadcrumbItem[];areaServed?:Record<string,unknown>;}){
  const canonical=absoluteUrl(canonicalPath); const pageId=`${canonical}#webpage`; const serviceId=`${canonical}#service`; const breadcrumbId=`${canonical}#breadcrumb`;
  return {"@context":"https://schema.org","@graph":[organization,website,{"@type":"Service","@id":serviceId,name:serviceName,serviceType,areaServed,url:canonical},{"@type":"WebPage","@id":pageId,url:canonical,name:title,description,isPartOf:{"@id":`${SITE_URL}/#website`},about:{"@id":serviceId},breadcrumb:{"@id":breadcrumbId},inLanguage:"en-GB"},breadcrumbList(breadcrumbId,breadcrumbItems)]};
}

export function createInfoPageStructuredData(path:string,title:string,description:string,breadcrumbItems:BreadcrumbItem[]){const canonical=absoluteUrl(path);const breadcrumbId=`${canonical}#breadcrumb`;return {"@context":"https://schema.org","@graph":[organization,website,{"@type":"WebPage","@id":`${canonical}#webpage`,url:canonical,name:title,description,isPartOf:{"@id":`${SITE_URL}/#website`},breadcrumb:{"@id":breadcrumbId},inLanguage:"en-GB"},breadcrumbList(breadcrumbId,breadcrumbItems)]};}
