import COLORS from "../colors";
import profilePhoto from "../assets/profile.jpg";
import FadeIn from "../components/FadeIn";
import GradientOrb from "../components/GradientOrb";
import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";
import ExperienceCard from "../components/ExperienceCard";
import OrgCard from "../components/OrgCard";

const SKILLS = [
  "Java", "Python", "JavaScript", "C", "C++",
  "HTML", "CSS", "Ruby", "MATLAB", "X86 Assembly",
  "React", "JSX", "PyTorch", "Pandas", "NumPy",
  "Scikit-learn", "Huggingface Transformers",
  "Matplotlib", "Seaborn", "Flask",
  "REST APIs", "Swagger", "Git",
];

const TOOLS = [
  "VS Code", "Eclipse", "Claude Code", "GitHub",
  "JUnit", "GDB Debugger", "Linux", "Ubuntu",
];

const AWARDS = [
  "Summa Cum Laude",
  "Dean's List SP23", "Dean's List AU23",
  "Dean's List SP24", "Dean's List AU24",
  "Dean's List SP25", "Dean's List AU25",
  "Dean's List SP26",
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

      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 clamp(20px, 5vw, 80px)", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(32px, 5vw, 72px)", flexWrap: "wrap", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ flex: "1 1 320px", maxWidth: 600 }}>
            <FadeIn delay={150}>
              <h1 style={{ fontSize: "clamp(36px, 7vw, 72px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", color: COLORS.dark, margin: 0, fontFamily: "'Syne', sans-serif" }}>
                Noah<br />Bennett
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p style={{ fontSize: "clamp(15px, 2vw, 19px)", lineHeight: 1.65, color: COLORS.textMuted, maxWidth: 520, marginTop: 22, fontFamily: "'DM Sans', sans-serif" }}>
                Recent <span style={{ color: COLORS.dark, fontWeight: 600 }}>Ohio State University</span> CSE graduate based in New York. Passionate about building impactful software — from AI/ML pipelines and API systems to full-stack web platforms.
              </p>
            </FadeIn>

            <FadeIn delay={450}>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button
                  onClick={() => setPage("Projects")}
                  style={{ padding: "13px 28px", borderRadius: 100, background: COLORS.accent, color: "#fff", border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.target.style.background = COLORS.accentLight; }}
                  onMouseLeave={(e) => { e.target.style.background = COLORS.accent; }}
                >
                  View Projects →
                </button>
                <button
                  onClick={() => setPage("Contact")}
                  style={{ padding: "13px 28px", borderRadius: 100, background: "transparent", color: COLORS.text, border: "1px solid " + COLORS.border, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.target.style.borderColor = COLORS.accent; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = COLORS.border; }}
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
                    style={{ fontSize: 13, color: COLORS.textMuted, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, borderBottom: "1px solid " + COLORS.textDim, paddingBottom: 2, transition: "color 0.2s" }}
                    onMouseEnter={(e) => { e.target.style.color = COLORS.accent; e.target.style.borderColor = COLORS.accent; }}
                    onMouseLeave={(e) => { e.target.style.color = COLORS.textMuted; e.target.style.borderColor = COLORS.textDim; }}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={350} style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: "clamp(180px, 22vw, 280px)", height: "clamp(180px, 22vw, 280px)", borderRadius: "50%", overflow: "hidden", border: "3px solid " + COLORS.accent + "30", boxShadow: "0 8px 40px " + COLORS.accent + "12" }}>
                <img src={profilePhoto} alt="Noah Bennett" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid " + COLORS.accent + "15", pointerEvents: "none" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "60px clamp(20px, 5vw, 80px) 80px", position: "relative", zIndex: 1 }}>
        <FadeIn delay={100}><SectionTitle label="About" title="Who I Am" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 36 }}>
          <FadeIn delay={200}>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: COLORS.textMuted, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                I recently graduated Summa Cum Laude from The Ohio State University with a B.S. in Computer Science and Engineering, specializing in Software Engineering. During my time at Ohio State, I built an AI classification pipeline that improved model accuracy to 95% and reduced manual processing time by 99%, contributed to peer-reviewed research on audio classification models, and developed full-stack web platforms.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: COLORS.textMuted, margin: 0, marginTop: 18, fontFamily: "'DM Sans', sans-serif" }}>
                Beyond tech, I co-founded the Hip Hop Club at Ohio State — growing it to 400+ members — and raised over $1,500 for Hip-Hop for Change, supporting youth in marginalized communities. I am now based in New York and looking for my next opportunity.
              </p>
            </div>
          </FadeIn>
          <div>
            <FadeIn delay={300}>
              <h3 style={{ margin: "0 0 14px 0", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.accent, fontFamily: "'DM Sans', sans-serif" }}>Languages and Frameworks</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{SKILLS.map((s) => <SkillBadge key={s} name={s} />)}</div>
            </FadeIn>
            <FadeIn delay={350}>
              <h3 style={{ margin: "24px 0 14px 0", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.accent, fontFamily: "'DM Sans', sans-serif" }}>Tools and Environments</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{TOOLS.map((t) => <SkillBadge key={t} name={t} />)}</div>
            </FadeIn>
            <FadeIn delay={400}>
              <h3 style={{ margin: "24px 0 14px 0", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.accent, fontFamily: "'DM Sans', sans-serif" }}>Recognition</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {AWARDS.map((a) => (
                  <span key={a} style={{ display: "inline-block", padding: "5px 12px", borderRadius: 100, fontSize: 12, fontWeight: 500, color: COLORS.textMuted, background: "#c5c8d0aa", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>{a}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px, 5vw, 80px) 100px", position: "relative", zIndex: 1 }}>
        <FadeIn delay={100}><SectionTitle label="Experience" title="Where I Have Worked" /></FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 800 }}>
          <ExperienceCard role="Innovation Intern" company="American Modern Insurance Group" date="May 2025 – Mar 2026" location="Amelia, OH"
            description="Built and owned an ETL AI classification pipeline using PyTorch, Transformers, Pandas, and NumPy to automate data labeling across ~80,000 conversations, achieving 95% accuracy and reducing manual processing time by 99%. Authored 4 Swagger specifications for a new enterprise API abstraction layer that simplified partner integration, enabling API developers to build new endpoints directly from the specs. Designed scalable AI architecture that reduced estimated deployment time for future use cases by ~30%."
            delay={200} />
          <ExperienceCard role="AI Research Assistant" company="The Ohio State University" date="Nov 2024 – Jun 2025" location="Columbus, OH"
            description="Collaborated with a research group to build databases for AI-driven systems supporting individuals in post-secondary education, applying machine learning and model integration techniques. Built and curated the labeled datasets behind a peer-reviewed publication on audio classification models, applying preprocessing, stratified splitting, and evaluation strategies to support model experimentation and analysis."
            delay={300} />
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px, 5vw, 80px) 100px", position: "relative", zIndex: 1 }}>
        <FadeIn delay={100}><SectionTitle label="Education" title="Academic Background" /></FadeIn>
        <FadeIn delay={200}>
          <div style={{ padding: "28px 28px", borderRadius: 14, background: COLORS.bgCard, border: "1px solid " + COLORS.border, maxWidth: 800, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: COLORS.dark, fontFamily: "'Syne', sans-serif" }}>The Ohio State University</h3>
                <div style={{ fontSize: 14, color: COLORS.accent, fontWeight: 500, marginTop: 5, fontFamily: "'DM Sans', sans-serif" }}>B.S. Computer Science and Engineering</div>
                <div style={{ fontSize: 13, color: COLORS.textMuted, marginTop: 3, fontFamily: "'DM Sans', sans-serif" }}>Specialization: Software Engineering</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>Aug 2022 – May 2026</div>
                <div style={{ fontSize: 13, color: COLORS.accent, fontWeight: 600, marginTop: 3, fontFamily: "'DM Sans', sans-serif" }}>GPA: 3.7</div>
              </div>
            </div>
            <p style={{ margin: "14px 0 0 0", fontSize: 14, lineHeight: 1.7, color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>
              Summa Cum Laude. 7x Dean's List recipient. Co-Founder of Hip Hop Club (400+ members). Coursework in Data Structures and Algorithms, Operating Systems, Software Development and Design, and Language Models.
            </p>
          </div>
        </FadeIn>
      </section>

      <section style={{ padding: "0 clamp(20px, 5vw, 80px) 100px", position: "relative", zIndex: 1 }}>
        <FadeIn delay={100}><SectionTitle label="Organizations" title="Community and Leadership" /></FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 800 }}>
          <OrgCard role="Technical Lead" org="Rise Health Initiative" date="Feb 2026 – Present"
            link={{ label: "risehealthinitiative.org", url: "https://risehealthinitiative.org" }}
            description="Independently built and deployed a full-stack website in React, JavaScript, HTML, and CSS as sole developer and Technical Lead, owning the project end-to-end from architecture through deployment to improve access to health resources. Designed and implemented the responsive UI and content architecture single-handedly, building accessible, scalable interfaces that work across devices."
            delay={200} />
          <OrgCard role="Co-Founder and Co-Leader" org="Hip Hop Club at The Ohio State University" date="Nov 2022 – Apr 2026"
            description="Co-founded a student-led organization that grew to 400+ active members. Led operations and fundraising initiatives, raising $1,500+ for a nonprofit partner. Demonstrated systems-level thinking, stakeholder coordination, and cross-functional leadership."
            delay={300} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
