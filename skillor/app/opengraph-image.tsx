import { ImageResponse } from "next/og";

export const alt = "Skillor — DTC marketing skills, executable.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1f2228",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "monospace",
          border: "8px solid #ffffff",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          skillor.app
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 200,
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
            }}
          >
            SKILLOR
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 36,
              opacity: 0.85,
              maxWidth: 900,
            }}
          >
            DTC marketing skills, executable.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            opacity: 0.7,
          }}
        >
          <span>24 skills</span>
          <span>$19 each / $99 bundle</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
