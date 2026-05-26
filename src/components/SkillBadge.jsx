import COLORS from "../colors";

function SkillBadge({ name }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 14px",
        borderRadius: 100,
        fontSize: 13,
        fontWeight: 500,
        color: COLORS.text,
        background: "#b8bcc5",
        border: "1px solid #a8acb6",
        fontFamily: "'DM Sans', sans-serif",
        whiteSpace: "nowrap",
      }}
    >
      {name}
    </span>
  );
}

export default SkillBadge;
