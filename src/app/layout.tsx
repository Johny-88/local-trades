import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SITE_LANGUAGE, SITE_NAME, SITE_URL, THEME_COLOR } from "../lib/site";
import "./globals.css";
import "./architecture.css";
import "./service-home.css";
import "./info-pages.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  icons: {
    icon: [{ url: "/assets/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: THEME_COLOR,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={SITE_LANGUAGE}>
      <body>
        <a className="skip-link" href="#top">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
