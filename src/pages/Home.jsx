import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const techLinks = {
  React: "https://reactjs.org",
  Vite: "https://vitejs.dev",
  "Tailwind CSS": "https://tailwindcss.com",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  HTML5: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  CSS3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  Bootstrap: "https://getbootstrap.com",
  Git: "https://git-scm.com",
  GitHub: "https://github.com",
  Figma: "https://www.figma.com",
  "GitHub Pages": "https://pages.github.com/",
  "Framer Motion": "https://www.framer.com/motion/",
  "React Router": "https://reactrouter.com/",
  JSX: "https://reactjs.org/docs/introducing-jsx.html",
  Canva: "https://www.canva.com",
  "UI/UX Design": "https://uxdesign.cc/",
};

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const outerGradient =
    "bg-gradient-to-br from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c]";
  const innerGradient =
    "bg-gradient-to-br from-[#a5e2e2] via-[#4ca7d8] to-[#ccefff]";
  const circleClass =
    "p-[0.375rem] rounded-full shadow-2xl w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] flex items-center justify-center transition-transform duration-300 hover:scale-105";

  return (
    <section className="min-h-screen px-[1rem] pt-[2.5rem] pb-[5rem] bg-gradient-to-br from-[#e0f7ff] to-white dark:from-darkbg dark:to-black text-gray-900 dark:text-white relative overflow-x-hidden">
      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 z-[9998] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } bg-gradient-to-br from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] shadow-2xl p-[2rem]`}
      >
        <nav className="flex flex-col items-center justify-center space-y-[1.5rem] mt-[6rem] text-white text-[1.125rem] font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
        </nav>
      </div>

      <div className="max-w-[80rem] mx-auto flex flex-col items-center justify-center gap-[4rem]">
        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/90 dark:bg-darkbg/70 backdrop-blur-md rounded-[2rem] shadow-2xl ring-1 ring-black/5 px-[2rem] py-[2.5rem] grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-[2.5rem]"
        >
          <div className="flex items-center justify-center">
            <div className={`${circleClass} ${outerGradient}`}>
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Fatemeh Fouladi Mahani"
                className="w-full h-full object-cover rounded-full border-[0.25rem] border-white"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <TypeAnimation
              sequence={[
                "Welcome to My Portfolio...",
                2500,
                "I'm Fatemeh Fouladi Mahani",
                2500,
                "Eager Frontend Developer",
                2500,
              ]}
              wrapper="h1"
              speed={50}
              omitDeletionAnimation={true}
              repeat={Infinity}
              className="text-[1.125rem] sm:text-[1.25rem] md:text-[2.25rem] font-extrabold bg-gradient-to-r from-[#7ec4e3] via-[#0a6ab3] to-[#073b7c] bg-clip-text text-transparent"
            />

            <div className="flex justify-center lg:justify-start items-center flex-wrap text-[1rem] md:text-[1.125rem] font-medium text-gray-700 dark:text-gray-300 mt-[1rem] mb-[1rem] gap-x-2">
              <span>💻 Front-End Developer</span>
              <span>| 🎓 Ph.D. in Electrical Engineering</span>
              <span>| 🎨 UI/UX Aesthete</span>
            </div>

            <div className="w-[5rem] h-[0.25rem] bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] mb-[1rem] rounded mx-auto lg:mx-0" />
            <p className="text-[0.875rem] md:text-[1rem] leading-relaxed text-gray-800 dark:text-gray-200 space-y-[1rem]">
              I am a detail-oriented and passionate <strong>Front-End Developer</strong> with a <strong>Ph.D. in Electrical Engineering</strong> and <strong>8+ years</strong> of experience in research, programming, simulation, and design. Proficient in <strong>React (Router, Hooks, JSX)</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, and <strong>Bootstrap 5</strong>, as well as core technologies like <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript (ES6+)</strong>, I specialize in building <strong>fully responsive</strong>, accessible, and visually polished web interfaces.
            </p>
            <div className="mt-[1rem]">
              <Link to="/about" className="text-primary font-semibold underline hover:text-blue-900">
                Learn more about me in the About section →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full bg-white/90 dark:bg-darkbg/70 backdrop-blur-md rounded-[2rem] shadow-xl px-[2rem] py-[2.5rem] grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-[2.5rem]"
        >
          <div className="flex items-center justify-center">
            <div className={`${circleClass} ${outerGradient}`}>
              <div
                className={`w-full h-full ${innerGradient} border-[0.25rem] border-white rounded-full flex items-center justify-center text-center px-[1rem]`}
              >
                <div className="text-white text-[1.125rem] md:text-[1.25rem] font-bold leading-snug">
                  ⚙️ My Core Skills <br />& Tools:
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[1rem] justify-items-center"
          >
            {Object.entries(techLinks).map(([tech, link], i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="px-[1rem] py-[0.5rem] w-full max-w-[9.375rem] whitespace-nowrap text-ellipsis overflow-hidden text-center text-[0.875rem] md:text-[1rem] bg-gray-100 text-gray-800 rounded-full shadow hover:bg-gray-200 hover:scale-105 transition-all font-medium"
              >
                {tech}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row flex-wrap justify-center gap-[1rem] md:gap-[1.5rem] mt-[1.5rem] mb-[2rem]"
        >
          <Link
            to="/projects"
            className="px-[1.75rem] py-[1rem] text-[1rem] font-bold text-white rounded-full shadow-xl bg-gradient-to-br from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] hover:scale-105 hover:saturate-150 hover:shadow-2xl transition-all min-w-[10rem] text-center"
          >
            🚀 View Projects
          </Link>
          <a
            href="https://github.com/FFMahani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[1.75rem] py-[1rem] text-[1rem] font-bold text-white rounded-full shadow-xl bg-gradient-to-br from-[#1d4ed8] via-[#3b82f6] to-[#06b6d4] hover:scale-105 hover:saturate-150 hover:shadow-2xl transition-all min-w-[10rem] text-center"
          >
            💻 Visit GitHub
          </a>
          <Link
            to="/resume"
            className="px-[1.75rem] py-[1rem] text-[1rem] font-bold text-white rounded-full shadow-xl bg-gradient-to-br from-[#f43f5e] via-[#ec4899] to-[#a855f7] hover:scale-105 hover:saturate-150 hover:shadow-2xl transition-all min-w-[10rem] text-center"
          >
            📄 Explore Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
