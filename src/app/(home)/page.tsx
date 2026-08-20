import type { Metadata } from "next";
import HomePageBase from "../HomePageBase";
import { JsonLd } from "../../components/JsonLd";
import { homePageStructuredData } from "../../lib/schema";
import { createPageMetadata } from "../../lib/seo";

const title="Find Local Tradespeople Near You | Local Trades";
const description="Describe your home job once, receive up to 3 local quotes and compare verified customer reviews before you decide who to hire.";
export const metadata:Metadata=createPageMetadata({title,description,path:"/",ogImage:"/og/home.jpg"});
export default function HomePage(){return <><JsonLd data={homePageStructuredData}/><HomePageBase/></>}
