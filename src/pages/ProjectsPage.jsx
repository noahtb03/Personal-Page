import COLORS from "../colors";
import FadeIn from "../components/FadeIn";
import GradientOrb from "../components/GradientOrb";

const PROJECTS = [
  {
    name: "Resume Optimization Agent",
    desc: "Built a constrained LLM resume-tailoring system in Python using the Anthropic API, with a two-stage generation pipeline, provenance validation, and bounded repair that prevents fabricated skills or metrics. Engineered a deterministic Pydantic validation layer, FastAPI web app, PDF parser, ATS-friendly DOCX export, and a 27-test suite — open-sourced for other job seekers.",
    tech: ["Python", "Anthropic API", "FastAPI", "Pydantic", "LLM"],
    link: "https://github.com/noahtb03/Resume_Optimization_Agent",
  },
  {
    name: "AI Classification Pipeline",
    desc: "Built an end-to-end ETL AI classification pipeline using PyTorch, Transformers, Pandas, and NumPy to automate data labeling across ~80,000 customer service conversations. Achieved 95% model accuracy and reduced manual processing time by 99%.",
    tech: ["Python", "PyTorch", "Transformers", "Pandas", "NumPy"],
    link: null,
  },
  {
    name: "Rise Health Initiative Website",
    desc: "Independently built and deployed a full-stack website in React, JavaScript, HTML, and CSS as sole developer, owning the project end-to-end from architecture through deployment to improve access to health resources.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://risehealthinitiative.org",
  },
  {
    name: "Heuristic Search Engine",
    desc: "Implemented A* and Uniform Cost Search algorithms in Python to solve pathfinding and constraint-based puzzle problems, using priority queues for optimal, efficient state-space exploration. Benchmarked heuristic-driven search against uninformed search, with A* achieving up to 3x faster solution discovery.",
    tech: ["Python", "Algorithms", "A* Search"],
    link: "https://github.com/noahtb03/Python_Projects",
  },
  {
    name: "Tic Tac Toe Game",
    desc: "Built a playable Tic Tac Toe game in Python with clean game-state logic, win detection, and an interactive command-line interface.",
    tech: ["Python", "Game Logic"],
    link: "https://github.com/noahtb03/Python_Projects/blob/main/Tic_Tac_Toe.py",
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
    name: "Personal Portfolio Website",
    desc: "Developed a portfolio website from scratch using React, JSX, HTML, and CSS. Implemented clean, maintainable component architecture with responsive design across all devices.",
    tech: ["React", "JSX", "HTML", "CSS", "Vite"],
    link: "https://github.com/noahtb03/Personal-Page",
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
          border: "1px solid " + COLORS.border,
          transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          cursor: "default",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = COLORS.accent + "44";
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 8px 30px " + COLORS.accent + "0d";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = COLORS.border;
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: COLORS.accent + "0c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>
            ⚡
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: COLORS.textMuted, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={(e) => { e.target.style.color = COLORS.accent; }}
              onMouseLeave={(e) => { e.target.style.color = COLORS.textMuted; }}
            >
              View ↗
            </a>
          )}
        </div>
        <h3 style={{ margin: "0 0 8px 0", fontSize: 16, fontWeight: 600, color: COLORS.dark, fontFamily: "'Syne', sans-serif" }}>
          {project.name}
        </h3>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif", flex: 1 }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>
          {project.tech.map((t) => (
            <span key={t} style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, color: COLORS.accent, background: COLORS.accent + "0c", fontFamily: "'DM Sans', sans-serif" }}>
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
      <section style={{ padding: "120px clamp(20px, 5vw, 80px) 100px", position: "relative", zIndex: 1 }}>
        <FadeIn delay={100}>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, color: COLORS.dark, margin: "0 0 40px 0", letterSpacing: "-0.03em", fontFamily: "'Syne', sans-serif", lineHeight: 1.2 }}>
            Projects
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: COLORS.textMuted, maxWidth: 560, marginBottom: 40, marginTop: -24, fontFamily: "'DM Sans', sans-serif" }}>
            From AI/ML pipelines to search algorithms and full-stack platforms — here is a selection of my work. Check out more on my{" "}
            <a href="https://github.com/noahtb03" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, textDecoration: "none", borderBottom: "1px solid " + COLORS.accent, paddingBottom: 1 }}>
              GitHub
            </a>.
          </p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: 16 }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={250 + i * 80} />
          ))}
        </div>
        <FadeIn delay={800}>
          <div style={{ marginTop: 48, padding: "32px 28px", borderRadius: 16, background: "linear-gradient(135deg, " + COLORS.accent + "0a, " + COLORS.bgCard + ")", border: "1px solid " + COLORS.accent + "22", textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: COLORS.dark, fontFamily: "'Syne', sans-serif" }}>Want to see more?</h3>
            <p style={{ margin: "10px 0 20px 0", fontSize: 14, color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>Check out all of my repositories and contributions on GitHub.</p>
            <a
              href="https://github.com/noahtb03"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", padding: "12px 32px", borderRadius: 100, background: COLORS.accent, color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", transition: "background 0.3s" }}
              onMouseEnter={(e) => { e.target.style.background = COLORS.accentLight; }}
              onMouseLeave={(e) => { e.target.style.background = COLORS.accent; }}
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
