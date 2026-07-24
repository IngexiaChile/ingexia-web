import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#12171B",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg
            width={100}
            height={108}
            viewBox="0 0 120 138"
            fill="none"
            style={{ display: "flex" }}
          >
            <path
              d="M60 30 L103 55 V105 L60 130 L17 105 V55 Z"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <line
              x1="17"
              y1="55"
              x2="103"
              y2="105"
              stroke="#2554D6"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <line
              x1="103"
              y1="55"
              x2="17"
              y2="105"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle cx="17" cy="55" r="8" fill="#2554D6" />
            <circle cx="103" cy="105" r="8" fill="#2554D6" />
            <circle cx="103" cy="55" r="8" fill="#FFFFFF" />
            <circle cx="17" cy="105" r="8" fill="#FFFFFF" />
            <line
              x1="60"
              y1="30"
              x2="60"
              y2="12"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="60" cy="8" r="5.5" fill="#2554D6" />
          </svg>

          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: -2,
              display: "flex",
            }}
          >
            INGEX
            <span style={{ color: "#2554D6" }}>IA</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#6E93F2",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
