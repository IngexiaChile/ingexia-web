import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Simplified, bolder isotype for legibility at favicon size — same
// hexagon + node network as the brand mark, without the fine satellite
// detail that would alias away at 32px.
export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width={32}
        height={32}
        viewBox="0 0 120 120"
        fill="none"
        style={{ display: "flex" }}
      >
        <path
          d="M60 6 L104 32 V88 L60 114 L16 88 V32 Z"
          stroke="#0D1B2A"
          strokeWidth="11"
          strokeLinejoin="round"
        />
        <line
          x1="16"
          y1="32"
          x2="104"
          y2="88"
          stroke="#2563EB"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <line
          x1="104"
          y1="32"
          x2="16"
          y2="88"
          stroke="#0D1B2A"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <circle cx="16" cy="32" r="10" fill="#2563EB" />
        <circle cx="104" cy="88" r="10" fill="#2563EB" />
        <circle cx="104" cy="32" r="10" fill="#0D1B2A" />
        <circle cx="16" cy="88" r="10" fill="#0D1B2A" />
      </svg>
    ),
    { ...size },
  );
}
