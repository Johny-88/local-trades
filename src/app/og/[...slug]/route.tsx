import { ImageResponse } from "next/og";
import { getServiceCategory } from "../../../lib/serviceCategoryContent";
import { SITE_NAME } from "../../../lib/site";

export const runtime = "edge";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const raw = slug.join("/");
  const serviceSlug = raw.replace(/\.png$/i, "");
  const service = getServiceCategory(serviceSlug);

  if (!service) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "74px 82px",
          background: "#faf6f0",
          color: "#294c3f",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 20,
              background: "#294c3f",
              color: "#faf6f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Arial, sans-serif",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            LT
          </div>
          <div style={{ display: "flex", fontSize: 42, letterSpacing: "-1px" }}>
            Local <span style={{ color: "#b16a44", marginLeft: 10 }}>Trades</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              textTransform: "uppercase",
              letterSpacing: "5px",
              color: "#b16a44",
              fontSize: 22,
              fontWeight: 800,
              marginBottom: 22,
            }}
          >
            Find local {service.plural.toLowerCase()}
          </div>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.02, letterSpacing: "-3px" }}>
            {service.plural} near you
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontFamily: "Arial, sans-serif",
              fontSize: 29,
              lineHeight: 1.35,
              color: "#5d6962",
              maxWidth: 940,
            }}
          >
            Post your job, hear from interested local professionals, check verified reviews and compare your options before you hire.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#52645b",
          }}
        >
          <span>100% genuine verified reviews</span>
          <span>{SITE_NAME} · getlocaltrades.uk</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
