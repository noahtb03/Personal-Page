import COLORS from "../colors";

function SectionTitle({ label, title }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: COLORS.accent,
          marginBottom: 10,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontSize: "clamp(26px, 4vw, 38px)",
          fontWeight: 700,
          color: COLORS.dark,
          margin: 0,
          letterSpacing: "-0.03em",
          fontFamily: "'Syne', sans-serif",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
