import { Fragment } from "react";
import type { BreadcrumbItem } from "../lib/schema";

export function Breadcrumbs({items}:{items:BreadcrumbItem[]}){
  return <div className="breadcrumb-wrap"><nav className="wrap" aria-label="Breadcrumb"><ol className="breadcrumb">{items.map((item,index)=>{const last=index===items.length-1;return <Fragment key={`${item.name}-${item.href}`}>{index>0?<li className="breadcrumb-sep" aria-hidden="true">›</li>:null}<li aria-current={last?"page":undefined}>{last?item.name:<a href={item.href}>{item.name}</a>}</li></Fragment>;})}</ol></nav></div>;
}
