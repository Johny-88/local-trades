import type { Metadata } from "next";
import HomePageBase from "../HomePageBase";
import { JsonLd } from "../../components/JsonLd";
import { createPageMetadata } from "../../lib/seo";
import { homePageStructuredData } from "../../lib/schema";

const title = "Find Local Home & Property Specialists | Local Trades";
const description =
  "Find local cleaners, removal companies, locksmiths, heating engineers, tilers, pest controllers and other property specialists. Post your job once, check verified reviews and compare up to 3 interested professionals before you hire.";
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
