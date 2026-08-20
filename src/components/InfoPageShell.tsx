import type { ReactNode } from "react";
import type { BreadcrumbItem } from "../lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";

export function InfoPageShell({eyebrow,title,intro,breadcrumbItems,summaryTitle,summary,children}:{eyebrow:string;title:string;intro:string;breadcrumbItems:BreadcrumbItem[];summaryTitle:string;summary:ReactNode;children:ReactNode;}){return <div className="local-trade-page"><Breadcrumbs items={breadcrumbItems}/><main><section className="seo-hero"><div className="wrap narrow"><span className="smallcap">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section><section className="answer-strip"><div className="wrap narrow answer-box"><h2>{summaryTitle}</h2><div>{summary}</div></div></section>{children}</main></div>}

export function InfoSection({id,eyebrow,title,intro,soft=false,children}:{id?:string;eyebrow?:string;title:string;intro?:string;soft?:boolean;children:ReactNode;}){return <section className={`seo-section${soft?" soft":""}`} id={id}><div className="wrap narrow">{eyebrow?<span className="smallcap">{eyebrow}</span>:null}<h2>{title}</h2>{intro?<p>{intro}</p>:null}<div className="content-card">{children}</div></div></section>}
