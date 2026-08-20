import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./architecture.css";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SITE_NAME, SITE_URL } from "../lib/site";

export const metadata: Metadata = {metadataBase:new URL(SITE_URL),applicationName:SITE_NAME,icons:{icon:"/assets/favicon.svg"}};
export const viewport: Viewport = {width:"device-width",initialScale:1,themeColor:"#faf6f0"};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body><SiteHeader/>{children}<SiteFooter/></body></html>}
