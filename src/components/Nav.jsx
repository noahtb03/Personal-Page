import { useState, useEffect } from "react";
import COLORS from "../colors";

const NAV_ITEMS = ["Home", "Projects", "Contact"];

function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 clamp(16px, 5vw, 80px)",
        height: 64,
        background: scrolled ? COLORS.navBg : "#d6d9e0ee",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? `1px solid ${COLORS.border}`
          : "1px solid transparent",
        transition: "all 0.4s ease",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        onClick={() => setPage("Home")}
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: COLORS.dark,
          cursor: "pointer",
          letterSpacing: "-0.02em",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        NB
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            style={{
              background: page === item ? COLORS.accent : "transparent",
              color: page === item ? "#fff" : COLORS.textMuted,
              border: "none",
              padding: "7px 16px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              if (page !== item) {
                e.target.style.color = COLORS.dark;
                e.target.style.background = COLORS.accent + "11";
              }
            }}
            onMouseLeave={(e) => {
              if (page !== item) {
                e.target.style.color = COLORS.textMuted;
                e.target.style.background = "transparent";
              }
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
