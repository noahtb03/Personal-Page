import COLORS from "../colors";
import FadeIn from "../components/FadeIn";
import GradientOrb from "../components/GradientOrb";

const PROJECTS = [
  {
    name: "BERT Classification Model",
    desc: "Trained and deployed a production-ready BERT model for data classification at American Modern Insurance Group, streamlining business processes through ML-driven automation.",
    tech: ["Python", "Machine Learning", "BERT", "NLP"],
    link: null,
  },
  {
    name: "Tag Cloud Generator",
    desc: "Given an input file of any text type, generates a tag cloud with a user-requested number of words, sized based on frequency. Built two versions using different Java component libraries.",
    tech: ["Java", "HTML", "OSU CSE API"],
    link: "https://github.com/noahtb03",
  },
  {
    name: "Natural Number Calculator",
    desc: "A calculator with no integer limit using natural number representation. Built with the OSU CSE API to create GUI interfaces for arithmetic on arbitrarily large numbers.",
    tech: ["Java", "GUI", "OSU CSE API"],
    link: "https://github.com/noahtb03",
  },
  {
    name: "Personal Portfolio Page",
    desc: "Personal page with resume information and bio, hand-coded using HTML and CSS with custom styling and responsive design.",
    tech: ["HTML", "CSS"],
    link: "https://github.com/noahtb03",
  },
  {
    name: "DataFest 2024 Analysis",
    desc: "Led team in analyzing and cleaning real-world datasets. Created Python data visualizations for exploratory analysis, presented insights to a judging panel.",
    tech: ["Python", "Data Visualization", "Analytics"],
    link: null,
  },
];


function ProjectCard({ project, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          padding: 24,
          borderRadius: 14,
          background: COLORS.bgCard,
          border: `1px solid ${COLORS.border}`,
          transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          cursor: "default",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${COLORS.accent}44`;
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = `0 8px 30px ${COLORS.accent}0d`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = COLORS.border;
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
        }}
      >
        {/* Card header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: `${COLORS.accent}0c`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 17,
            }}
          >
            ⚡
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: COLORS.textMuted,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
            >
              View ↗
            </a>
          )}
        </div>

        {/* Title & description */}
        <h3
          style={{
            margin: "0 0 8px 0",
            fontSize: 16,
            fontWeight: 600,
            color: COLORS.dark,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.7,
            color: COLORS.textMuted,
            fontFamily: "'DM Sans', sans-serif",
            flex: 1,
          }}
        >
          {project.desc}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 10px",
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 600,
                color: COLORS.accent,
                background: `${COLORS.accent}0c`,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}


function ProjectsPage() {
  return (
    <div style={{ position: "relative" }}>
      <GradientOrb style={{ top: 100, left: -250 }} />

      <section
        style={{
          padding: "120px clamp(20px, 5vw, 80px) 100px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <FadeIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 700,
              color: COLORS.dark,
              margin: "0 0 40px 0",
              letterSpacing: "-0.03em",
              fontFamily: "'Syne', sans-serif",
              lineHeight: 1.2,
            }}
          >
            Projects
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: COLORS.textMuted,
              maxWidth: 560,
              marginBottom: 40,
              marginTop: -24,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            From ML models in production to full-stack platforms — here's a
            selection of my work. Check out more on my{" "}
            <a
              href="https://github.com/noahtb03"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: COLORS.accent,
                textDecoration: "none",
                borderBottom: `1px solid ${COLORS.accent}`,
                paddingBottom: 1,
              }}
            >
              GitHub
            </a>
            .
          </p>
        </FadeIn>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: 16,
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              delay={250 + i * 80}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <FadeIn delay={800}>
          <div
            style={{
              marginTop: 48,
              padding: "32px 28px",
              borderRadius: 16,
              background: `linear-gradient(135deg, ${COLORS.accent}0a, ${COLORS.bgCard})`,
              border: `1px solid ${COLORS.accent}22`,
              textAlign: "center",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: 700,
                color: COLORS.dark,
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Want to see more?
            </h3>
            <p
              style={{
                margin: "10px 0 20px 0",
                fontSize: 14,
                color: COLORS.textMuted,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Check out all of my repositories and contributions on GitHub.
            </p>
            <a
              href="https://github.com/noahtb03"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                borderRadius: 100,
                background: COLORS.accent,
                color: "#fff",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = COLORS.accentLight)}
              onMouseLeave={(e) => (e.target.style.background = COLORS.accent)}
            >
              Visit GitHub Profile →
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

export default ProjectsPage;
