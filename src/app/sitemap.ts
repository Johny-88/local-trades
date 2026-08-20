import type { MetadataRoute } from "next";
import { localPages, localPagePath } from "../lib/localPages";
import { tradeCategories } from "../lib/tradeCategoryContent";
import { SITE_URL } from "../lib/site";
const absolute=(path:string)=>new URL(path,`${SITE_URL}/`).toString();
export default function sitemap():MetadataRoute.Sitemap{return [{url:absolute("/"),priority:1,changeFrequency:"weekly"},...tradeCategories.map((trade)=>({url:absolute(`/${trade.slug}/`),priority:.9,changeFrequency:"weekly" as const})),...localPages.map((page)=>({url:absolute(localPagePath(page)),priority:.8,changeFrequency:"monthly" as const})),...['/about/','/privacy/','/cookies/','/terms/'].map((path)=>({url:absolute(path),priority:.3,changeFrequency:"yearly" as const}))]}
