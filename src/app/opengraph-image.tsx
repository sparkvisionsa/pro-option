import { ImageResponse } from "next/og";

export const alt =
  "Pro Option for Professional Consultant in Saudi Arabia";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #070d18 0%, #101b2f 58%, #162541 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(232,98,42,0.28), transparent 28%), radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 32%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 180,
            height: 180,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            opacity: 0.3,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -40,
            width: 340,
            height: 340,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(232,98,42,0.38) 0%, rgba(232,98,42,0.04) 58%, transparent 72%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "52px 56px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                maxWidth: 800,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "#ffb08c",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    background: "#e8622a",
                  }}
                />
                Pro Option for Professional Consultant
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    fontSize: 58,
                    fontWeight: 800,
                    lineHeight: 1.15,
                    maxWidth: 900,
                  }}
                >
                  Pro Option for Professional Consultant
                </div>
                <div
                  style={{
                    fontSize: 30,
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.35,
                  }}
                >
                  Professional consulting, IVS-aligned valuation, and nationwide
                  asset advisory in Saudi Arabia.
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-end",
                textAlign: "right",
              }}
            >
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontSize: 22,
                  color: "rgba(255,255,255,0.84)",
                }}
              >
                Riyadh, Saudi Arabia
              </div>
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 999,
                  background: "rgba(232,98,42,0.14)",
                  border: "1px solid rgba(232,98,42,0.28)",
                  color: "#ffd2bf",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                IVS • Real Estate • Advisory
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 14,
              }}
            >
              {["Machinery Valuation", "Consulting", "Nationwide Coverage"].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      padding: "12px 16px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontSize: 20,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {label}
                  </div>
                )
              )}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              www.pro-option.sa
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
