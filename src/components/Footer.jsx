import COLORS from "../colors";

const FOOTER_LINKS = [
  { label: "GitHub", url: "https://github.com/noahtb03" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/noah-bennett-0067a2278" },
  { label: "Email", url: "mailto:noahtimothybennett@gmail.com" },
];

function Footer() {
  return (
    <footer
      style={{
        padding: "32px clamp(20px, 5vw, 80px)",
        borderTop: `1px solid ${COLORS.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ fontSize: 13, color: COLORS.textDim }}>
        © 2026 Noah Bennett
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              color: COLORS.textMuted,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
            onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
