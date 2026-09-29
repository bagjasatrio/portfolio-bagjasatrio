import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";
export const alt = SITE_CONFIG.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          backgroundColor: "#F9FDFF",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #0081E1, #65B2F5)",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#1E1E22",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          {SITE_CONFIG.name}
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#0081E1",
            marginBottom: "24px",
          }}
        >
          Full-Stack Web Developer & AI Engineer
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: "20px",
            color: "#52525B",
          }}
        >
          bagjasatrio.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
