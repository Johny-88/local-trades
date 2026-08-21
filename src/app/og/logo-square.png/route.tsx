import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf6f0",
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 96,
            background: "#294c3f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="250"
            height="250"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 31 32 18l16 13" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 29v17h22V29" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" opacity=".95" />
            <path d="m26 36 4 4 8-9" stroke="#d9936e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    ),
    {
      width: 512,
      height: 512,
    },
  );
}
