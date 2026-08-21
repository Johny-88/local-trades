import type { Metadata } from "next";
import HomePageBase from "../HomePageBase";
import { JsonLd } from "../../components/JsonLd";
import { createPageMetadata } from "../../lib/seo";
import { homePageStructuredData } from "../../lib/schema";

const title = "Find Local Home & Property Specialists | Local Trades";
const description =
  "Find cleaners, removal companies, locksmiths, heating engineers, tilers, pest controllers and other local specialists. Post your job once and compare up to 3 responses.";
const socialDescription =
  "Choose the service you need, describe the job once and hear from up to 3 interested local professionals before deciding who to hire.";

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
