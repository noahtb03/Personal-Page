import COLORS from "../colors";
import FadeIn from "./FadeIn";

function OrgCard({ role, org, date, description, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          padding: "24px 28px",
          borderRadius: 14,
          background: COLORS.bgCard,
          border: `1px solid ${COLORS.border}`,
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 600,
                color: COLORS.dark,
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {role}
            </h3>
            <div
              style={{
                fontSize: 14,
                color: COLORS.accent,
                fontWeight: 500,
                marginTop: 4,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {org}
            </div>
          </div>
          <div
            style={{
              fontSize: 13,
              color: COLORS.textMuted,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {date}
          </div>
        </div>

        <p
          style={{
            margin: 0,
            marginTop: 10,
            fontSize: 14,
            lineHeight: 1.7,
            color: COLORS.textMuted,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {description}
        </p>
      </div>
    </FadeIn>
  );
}

export default OrgCard;
