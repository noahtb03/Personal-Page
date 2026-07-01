import COLORS from "../colors";

function GradientOrb({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.accent}1a 0%, transparent 70%)`,
        filter: "blur(90px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

export default GradientOrb;
