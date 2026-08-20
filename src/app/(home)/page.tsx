import type { Metadata } from "next";
import HomePageBase from "../HomePageBase";
import { JsonLd } from "../../components/JsonLd";
import { createPageMetadata } from "../../lib/seo";
import { homePageStructuredData } from "../../lib/schema";

const title = "Find Local Tradespeople Near You | Local Trades";
const description =
  "Describe your home job once, receive up to 3 local quotes and compare verified customer reviews before you decide who to hire.";
const socialDescription =
  "Describe your job once, hear from suitable local tradespeople and compare your options before choosing who to hire.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/",
  openGraphDescription: socialDescription,
  twitterDescription: socialDescription,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageStructuredData} />
      <HomePageBase />
    </>
  );
}
