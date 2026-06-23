import { useState } from "react";
import COLORS from "./colors";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const globalStyles = `
  * { -webkit-tap-highlight-color: transparent; }
  html { scroll-behavior: smooth; }
`;

function App() {
  const [page, setPage] = useState("Home");
  const changePage = (newPage) => { setPage(newPage); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <style>{globalStyles}</style>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <div style={{ minHeight: "100vh", background: COLORS.bg, color: COLORS.text, position: "relative", overflow: "hidden" }}>
        <Nav page={page} setPage={changePage} />
        {page === "Home" && <HomePage setPage={changePage} />}
        {page === "Projects" && <ProjectsPage />}
        {page === "Contact" && <ContactPage />}
        <Footer />
      </div>
    </>
  );
}

export default App;
