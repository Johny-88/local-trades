import type { TradeSlug } from "../lib/affiliateLinks";
import { TradeFinderForm } from "./TradeFinderForm";

export function LocalTradeFinderForm({tradeSlug}:{tradeSlug:TradeSlug}){return <TradeFinderForm initialTradeSlug={tradeSlug}/>}
