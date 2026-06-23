import { useState } from "react";
import COLORS from "../colors";
import FadeIn from "../components/FadeIn";
import GradientOrb from "../components/GradientOrb";
import SectionTitle from "../components/SectionTitle";

const CONTACT_INFO = [
  { label: "Email", value: "noahtimothybennett@gmail.com", href: "mailto:noahtimothybennett@gmail.com" },
  { label: "LinkedIn", value: "noah-bennett-0067a2278", href: "https://www.linkedin.com/in/noah-bennett-0067a2278" },
  { label: "GitHub", value: "noahtb03", href: "https://github.com/noahtb03" },
  { label: "Phone", value: "(513) 655-9336", href: "tel:5136559336" },
];

const INPUT_STYLE = {
  width: "100%", padding: "12px 16px", borderRadius: 10,
  border: "1px solid #c5c8d0", background: "#cdd0d8",
  color: "#111827", fontSize: 15, fontFamily: "'DM Sans', sans-serif",
  outline: "none", transition: "border-color 0.3s", boxSizing: "border-box",
};

const LABEL_STYLE = {
  fontSize: 12, fontWeight: 600, color: "#6b7280",
  marginBottom: 6, display: "block", fontFamily: "'DM Sans', sans-serif",
  textTransform: "uppercase", letterSpacing: "0.08em",
};


function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) { setStatus("error"); return; }
    const subject = form.subject || "Message from " + form.name;
    const body = "From: " + form.name + " (" + form.email + ")\n\n" + form.message;
    window.open("mailto:noahtimothybennett@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body), "_blank");
    setStatus("sent");
  };

  const updateField = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const focusBorder = (e) => (e.target.style.borderColor = COLORS.accent);
  const blurBorder = (e) => (e.target.style.borderColor = COLORS.border);

  return (
    <div style={{ position: "relative" }}>
      <GradientOrb style={{ top: 0, right: -200 }} />
      <section
        style={{
          padding: "120px clamp(20px, 5vw, 80px) 100px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: 48,
            maxWidth: 960,
          }}
        >
          <FadeIn delay={100}>
            <div>
              <SectionTitle label="Contact" title="Let's Connect" />
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: COLORS.textMuted,
                  margin: "0 0 32px 0",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                I'm always open to new opportunities, collaborations, and
                conversations. Whether you have a project idea, a job
                opportunity, or just want to say hello — I'd love to hear
                from you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {CONTACT_INFO.map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: COLORS.textDim,
                        marginBottom: 3,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.label}
                    </div>
                    
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 14,
                        color: COLORS.text,
                        textDecoration: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        transition: "color 0.2s",
                        wordBreak: "break-all",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                      onMouseLeave={(e) => (e.target.style.color = COLORS.text)}
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 32,
                  padding: 20,
                  borderRadius: 12,
                  background: "#2563eb08",
                  border: "1px solid #2563eb18",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: COLORS.dark,
                    marginBottom: 6,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  Based in New York, NY
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: COLORS.textMuted,
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.6,
                  }}
                >
                  Open to opportunities in the greater New York area and
                  remote positions nationwide.
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div
              style={{
                padding: 28,
                borderRadius: 16,
                background: COLORS.bgCard,
                border: "1px solid " + COLORS.border,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 24px 0",
                  fontSize: 19,
                  fontWeight: 700,
                  color: COLORS.dark,
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                Send a Message
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label style={LABEL_STYLE}>Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={updateField("name")}
                    style={INPUT_STYLE}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>

                <div>
                  <label style={LABEL_STYLE}>Email *</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={updateField("email")}
                    style={INPUT_STYLE}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>

                <div>
                  <label style={LABEL_STYLE}>Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={updateField("subject")}
                    style={INPUT_STYLE}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>

                <div>
                  <label style={LABEL_STYLE}>Message *</label>
                  <textarea
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={updateField("message")}
                    rows={5}
                    style={{
                      ...INPUT_STYLE,
                      resize: "vertical",
                      minHeight: 110,
                    }}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>

                {status === "error" && (
                  <div
                    style={{
                      fontSize: 13,
                      color: "#dc2626",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Please fill in all required fields.
                  </div>
                )}
                {status === "sent" && (
                  <div
                    style={{
                      fontSize: 13,
                      color: "#16a34a",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Opening your email client — thanks for reaching out!
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: 10,
                    background: COLORS.accent,
                    color: "#fff",
                    border: "none",
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = COLORS.accentLight)}
                  onMouseLeave={(e) => (e.target.style.background = COLORS.accent)}
                >
                  Send Message →
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
