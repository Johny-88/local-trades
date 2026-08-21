import type { Metadata } from "next";
import HomePageBase from "../HomePageBase";
import { JsonLd } from "../../components/JsonLd";
import { createPageMetadata } from "../../lib/seo";
import { homePageStructuredData } from "../../lib/schema";

const title = "Find Local Tradespeople Near You | Local Trades";
const description =
  "Describe your home job once. Relevant local tradespeople can review it, and up to 3 interested trades can get in touch. Compare their profiles, quotes and verified customer reviews before you hire.";
const socialDescription =
  "Post your job once. Up to 3 interested local trades can get in touch, then you can compare their profiles, verified reviews and quotes before choosing who to hire.";

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
