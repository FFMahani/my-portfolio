import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import useScrollToTop from "./hooks/useScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CV from "./pages/CV";

function App() {
  useScrollToTop();

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
