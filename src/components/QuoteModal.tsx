"use client";

import { useEffect, useRef } from "react";
import { buildQuoteIframeUrl, type TradeSlug } from "../lib/affiliateLinks";

export function QuoteModal({open,onClose,tradeSlug,tradeName}:{open:boolean;onClose:()=>void;tradeSlug?:TradeSlug;tradeName?:string;}){
  const frameRef=useRef<HTMLIFrameElement>(null);
  useEffect(()=>{if(!open)return;const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")onClose();};document.body.classList.add("quote-open");window.addEventListener("keydown",onKey);return()=>{document.body.classList.remove("quote-open");window.removeEventListener("keydown",onKey);};},[open,onClose]);
  useEffect(()=>{const onMessage=(event:MessageEvent)=>{if(event.origin!=="https://www.myjobquote.co.uk")return;const data=event.data;if(!data||typeof data!=="object")return;if(data.name==="heightChange"&&frameRef.current){const height=Number(data.value);if(Number.isFinite(height)&&height>=200&&height<=5000)frameRef.current.style.height=`${height}px`;}if(data.name==="pageChange")document.querySelector(".quote-box")?.scrollTo({top:0,behavior:"smooth"});};window.addEventListener("message",onMessage);return()=>window.removeEventListener("message",onMessage);},[]);
  if(!open)return null;
  return <div className="modal open" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget)onClose();}}><div className="quote-box" role="dialog" aria-modal="true" aria-label="Quote request"><div className="box-top"><div><span className="smallcap">Your quote request</span><h3>{tradeName?`Find a local ${tradeName}`:"Tell us what needs doing"}</h3><p>{tradeName?`${tradeName} is already selected. Just tell us a little about the job.`:"Choose the type of work and tell us a little about your job."}</p></div><button className="close" onClick={onClose} aria-label="Close quote form">×</button></div><div className="quote-frame-wrap"><iframe ref={frameRef} src={buildQuoteIframeUrl(tradeSlug)} width="100%" height="760" frameBorder="0" scrolling="no" className="quote-frame ready" title="Local trade quote request"/></div><div className="quote-footer">Free for homeowners · Up to 3 local quotes · No obligation to hire</div></div></div>;
}
