import type { Metadata } from "next";
import HomePageBase from "../HomePageBase";
import { JsonLd } from "../../components/JsonLd";
import { createPageMetadata } from "../../lib/seo";
import { homePageStructuredData } from "../../lib/schema";

const title = "Find Local Tradespeople and Property Maintenance Specialists | Local Trades";
const description =
  "Find local tradespeople and home maintenance specdialists across the UK. Choose a service, post your job once, compare verified reviews and up to 3 interested professionals.";
const socialDescription =
  "Post your job once, hear from up to 3 interested local professionals, check genuine verified reviews and compare your options before choosing who to hire.";

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
