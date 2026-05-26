import COLORS from "../colors";
import FadeIn from "./FadeIn";

function ExperienceCard({ role, company, date, location, description, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          padding: "24px 28px",
          borderRadius: 14,
          background: COLORS.bgCard,
          border: `1px solid ${COLORS.border}`,
          transition: "all 0.3s ease",
          cursor: "default",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${COLORS.accent}55`;
          e.currentTarget.style.boxShadow = `0 4px 20px ${COLORS.accent}0d`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = COLORS.border;
          e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
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
              {company}
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: 13,
                color: COLORS.textMuted,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {date}
            </div>
            {location && (
              <div
                style={{
                  fontSize: 12,
                  color: COLORS.textDim,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {location}
              </div>
            )}
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

export default ExperienceCard;
