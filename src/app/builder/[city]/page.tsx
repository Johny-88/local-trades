import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalTradeLandingPage } from "../../../components/LocalTradeLandingPage";
import { buildLocalCityPageContent } from "../../../lib/localPageContentFactory";
import { LOCAL_LOCATIONS, PUBLISHED_LOCAL_PAGES, isPublishedLocalPage, type LocalCityKey } from "../../../lib/localPages";
import { createPageMetadata } from "../../../lib/seo";

const TRADE = "builder" as const;
export const dynamicParams = false;
type PageProps = { params: Promise<{ city: string }> };
function resolveCity(value: string): LocalCityKey | null { return value in LOCAL_LOCATIONS ? (value as LocalCityKey) : null; }
export function generateStaticParams() { return PUBLISHED_LOCAL_PAGES.filter((page) => page.trade === TRADE && page.city !== "birmingham").map((page) => ({ city: page.city })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: value } = await params; const city = resolveCity(value);
  if (!city || !isPublishedLocalPage(TRADE, city) || city === "birmingham") return {};
  const content = buildLocalCityPageContent(TRADE, city);
  return createPageMetadata({ title: content.title, description: content.webPageDescription, path: content.canonicalPath, openGraphDescription: content.webPageDescription, twitterDescription: content.webPageDescription });
}
export default async function BuilderCityPage({ params }: PageProps) {
  const { city: value } = await params; const city = resolveCity(value);
  if (!city || !isPublishedLocalPage(TRADE, city) || city === "birmingham") notFound();
  return <LocalTradeLandingPage content={buildLocalCityPageContent(TRADE, city)} />;
}
