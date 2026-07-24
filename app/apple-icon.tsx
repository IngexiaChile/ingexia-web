import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#12171B",
        }}
      >
        <svg
          width={120}
          height={120}
          viewBox="0 0 120 120"
          fill="none"
          style={{ display: "flex" }}
        >
          <path
            d="M60 6 L104 32 V88 L60 114 L16 88 V32 Z"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinejoin="round"
          />
          <line
            x1="16"
            y1="32"
            x2="104"
            y2="88"
            stroke="#2554D6"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <line
            x1="104"
            y1="32"
            x2="16"
            y2="88"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle cx="16" cy="32" r="9" fill="#2554D6" />
          <circle cx="104" cy="88" r="9" fill="#2554D6" />
          <circle cx="104" cy="32" r="9" fill="#FFFFFF" />
          <circle cx="16" cy="88" r="9" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
