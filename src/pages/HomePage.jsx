import COLORS from "../colors";
import profilePhoto from "../assets/profile.jpg";
import FadeIn from "../components/FadeIn";
import GradientOrb from "../components/GradientOrb";
import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";
import ExperienceCard from "../components/ExperienceCard";
import OrgCard from "../components/OrgCard";

const SKILLS = [
  "Java", "Python", "JavaScript", "JSX",
  "HTML", "CSS", "Git", "Web Development",
  "API Development", "Machine Learning",
  "Data Visualization", "PayPal Integration",
];

const AWARDS = [
  "Dean's List SP23", "Dean's List AU23",
  "Dean's List SP24", "Dean's List AU24",
  "Dean's List SP25", "DECA 2nd Place State",
  "DECA Award of Excellence",
];

const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/noahtb03" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/noah-bennett-0067a2278" },
];


function HomePage({ setPage }) {
  return (
    <div style={{ position: "relative" }}>
      <GradientOrb style={{ top: -200, right: -200 }} />
      <GradientOrb style={{ bottom: 200, left: -300 }} />

      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(20px, 5vw, 80px)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(32px, 5vw, 72px)",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          {/* Text */}
          <div style={{ flex: "1 1 320px", maxWidth: 600 }}>
            <FadeIn delay={150}>
              <h1
                style={{
                  fontSize: "clamp(36px, 7vw, 72px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  color: COLORS.dark,
                  margin: 0,
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                Noah<br />Bennett
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p
                style={{
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.65,
                  color: COLORS.textMuted,
                  maxWidth: 520,
                  marginTop: 22,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Computer Science Engineering senior at{" "}
                <span style={{ color: COLORS.dark, fontWeight: 600 }}>
                  The Ohio State University
                </span>
                . Building software that matters — from API systems and ML
                models to community platforms.
              </p>
            </FadeIn>

            <FadeIn delay={450}>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button
                  onClick={() => setPage("Projects")}
                  style={{
                    padding: "13px 28px",
                    borderRadius: 100,
                    background: COLORS.accent,
                    color: "#fff",
                    border: "none",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = COLORS.accentLight)}
                  onMouseLeave={(e) => (e.target.style.background = COLORS.accent)}
                >
                  View Projects →
                </button>
                <button
                  onClick={() => setPage("Contact")}
                  style={{
                    padding: "13px 28px",
                    borderRadius: 100,
                    background: "transparent",
                    color: COLORS.text,
                    border: `1px solid ${COLORS.border}`,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.borderColor = COLORS.accent)}
                  onMouseLeave={(e) => (e.target.style.borderColor = COLORS.border)}
                >
                  Get in Touch
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div style={{ display: "flex", gap: 20, marginTop: 36 }}>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 13,
                      color: COLORS.textMuted,
                      textDecoration: "none",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      borderBottom: `1px solid ${COLORS.textDim}`,
                      paddingBottom: 2,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = COLORS.accent;
                      e.target.style.borderColor = COLORS.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = COLORS.textMuted;
                      e.target.style.borderColor = COLORS.textDim;
                    }}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Profile Photo */}
          <FadeIn
            delay={350}
            style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "clamp(180px, 22vw, 280px)",
                  height: "clamp(180px, 22vw, 280px)",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `3px solid ${COLORS.accent}30`,
                  boxShadow: `0 8px 40px ${COLORS.accent}12`,
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Noah Bennett"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  border: `1px solid ${COLORS.accent}15`,
                  pointerEvents: "none",
                }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── About ── */}
      <section style={{ padding: "60px clamp(20px, 5vw, 80px) 80px", position: "relative", zIndex: 1 }}>
        <FadeIn delay={100}>
          <SectionTitle label="About" title="Who I Am" />
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 36,
          }}
        >
          <FadeIn delay={200}>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: COLORS.textMuted, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                I'm a senior at The Ohio State University pursuing a Bachelor's
                degree in Computer Science and Engineering, graduating May 2026.
                I'm passionate about building software — whether it's developing
                APIs at American Modern Insurance Group, training ML models for
                data classification, or managing data for large language models.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: COLORS.textMuted, margin: 0, marginTop: 18, fontFamily: "'DM Sans', sans-serif" }}>
                Beyond tech, I co-founded the Hip Hop Club at Ohio State — now
                with 350+ members — raising over $1,800 for Hip-Hop for Change,
                supporting youth in marginalized communities.
              </p>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={300}>
              <h3 style={{ margin: "0 0 14px 0", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.accent, fontFamily: "'DM Sans', sans-serif" }}>
                Skills & Technologies
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SKILLS.map((s) => <SkillBadge key={s} name={s} />)}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <h3 style={{ margin: "24px 0 14px 0", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.accent, fontFamily: "'DM Sans', sans-serif" }}>
                Recognition
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {AWARDS.map((a) => (
                  <span
                    key={a}
                    style={{
                      display: "inline-block",
                      padding: "5px 12px",
                      borderRadius: 100,
                      fontSize: 12,
                      fontWeight: 500,
                      color: COLORS.textMuted,
                      background: "#c5c8d0aa",
                      fontFamily: "'DM Sans', sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section style={{ padding: "0 clamp(20px, 5vw, 80px) 100px", position: "relative", zIndex: 1 }}>
        <FadeIn delay={100}>
          <SectionTitle label="Experience" title="Where I've Worked" />
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 800 }}>
          <ExperienceCard
            role="API Development & Open Innovation"
            company="American Modern Insurance Group"
            date="Aug 2025 – Present"
            location="Remote"
            description="Working across functions including writing and verifying API specifications, exploring innovative solutions to streamline business processes, and training a production-ready BERT model for data classification."
            delay={200}
          />
          <ExperienceCard
            role="Open Innovation Intern"
            company="American Modern Insurance Group"
            date="May 2025 – Aug 2025"
            location="Amelia, OH"
            description="Summer internship focused on open innovation initiatives and exploring emerging technologies for insurance industry applications."
            delay={300}
          />
          <ExperienceCard
            role="AI Research Assistant"
            company="The Ohio State University"
            date="Dec 2024 – May 2025"
            location="Columbus, OH"
            description="Managed and curated data used to train large language models, contributing to AI research efforts at the university."
            delay={400}
          />
          <ExperienceCard
            role="Team Lead"
            company="ASA DataFest 2024"
            date="April 2024"
            location="Columbus, OH"
            description="Led a team analyzing and cleaning real-world data. Used Python to create data visualizations for exploratory data analysis, presented findings to a judging panel."
            delay={500}
          />
        </div>
      </section>

      {/* ── Education ── */}
      <section style={{ padding: "0 clamp(20px, 5vw, 80px) 100px", position: "relative", zIndex: 1 }}>
        <FadeIn delay={100}>
          <SectionTitle label="Education" title="Academic Background" />
        </FadeIn>
        <FadeIn delay={200}>
          <div
            style={{
              padding: "28px 28px",
              borderRadius: 14,
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              maxWidth: 800,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: COLORS.dark, fontFamily: "'Syne', sans-serif" }}>
                  The Ohio State University
                </h3>
                <div style={{ fontSize: 14, color: COLORS.accent, fontWeight: 500, marginTop: 5, fontFamily: "'DM Sans', sans-serif" }}>
                  B.S. Computer Science and Engineering
                </div>
              </div>
              <div style={{ fontSize: 13, color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>
                Aug 2022 – May 2026
              </div>
            </div>
            <p style={{ margin: "14px 0 0 0", fontSize: 14, lineHeight: 1.7, color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>
              5x Dean's List recipient. Co-Founder of Hip Hop Club (350+ members).
              Active in campus community and tech organizations.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── Organizations ── */}
      <section style={{ padding: "0 clamp(20px, 5vw, 80px) 100px", position: "relative", zIndex: 1 }}>
        <FadeIn delay={100}>
          <SectionTitle label="Organizations" title="Community & Leadership" />
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 800 }}>
          <OrgCard
            role="Tech Lead"
            org="Rise Health Initiative"
            date="Feb 2026 – Present"
            description="Lead developer for Rise Initiative. Develop and maintain the full-stack website including UI, backend logic, and database management."
            delay={200}
          />
          <OrgCard
            role="Co-Founder"
            org="Hip Hop Club at The Ohio State University"
            date="Nov 2022 – Present"
            description="Co-founded a student organization for students with shared interests, now with over 350 members. Connected with Hip-Hop for Change, raising over $1,800 through various fundraisers to support youth in marginalized communities."
            delay={300}
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
