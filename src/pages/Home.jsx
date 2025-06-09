import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  Python: "https://www.python.org",
  MATLAB: "https://www.mathworks.com/products/matlab.html",
  Figma: "https://www.figma.com",
};

const Home = () => {
  const outerGradient =
    "bg-gradient-to-br from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c]";
  const innerGradient =
    "bg-gradient-to-br from-[#a5e2e2] via-[#4ca7d8] to-[#ccefff]";
  const circleClass =
    "p-[6px] rounded-full shadow-2xl w-48 h-48 md:w-60 md:h-60 flex items-center justify-center transition-transform duration-300 hover:scale-105";

  return (
    <section className="min-h-screen px-4 pt-10 pb-20 bg-gradient-to-br from-[#e0f7ff] to-white dark:from-darkbg dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-16">
        {/* 🔷 Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/90 dark:bg-darkbg/70 backdrop-blur-md rounded-[32px] shadow-2xl ring-1 ring-black/5 px-8 py-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-10"
        >
          <div className="flex items-center justify-center">
            <div className={`${circleClass} ${outerGradient}`}>
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Fatemeh Fouladi Mahani"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-[#7ec4e3] via-[#0a6ab3] to-[#073b7c] bg-clip-text text-transparent font-sans">
              Hi, I’m Fatemeh Fouladi Mahani{" "}
              <span className="text-2xl text-primary">🤗</span>
            </h1>
            <h2 className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
              👩‍💻 Front-End Developer | 🎓 Ph.D. in Electrical Engineering | 🎨
              UI/UX Aesthete
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] mb-4 rounded" />
            <p className="text-sm md:text-base leading-relaxed text-gray-800 dark:text-gray-200 space-y-4">
              I am a <strong>detail-oriented</strong> and{" "}
              <strong>passionate Front-End Developer</strong> building{" "}
              <strong>modern</strong>, <strong>elegant websites</strong> that
              are clean, fully responsive, and delightful to use. I love
              blending <strong>engineering precision</strong> with{" "}
              <strong>UI/UX creativity</strong> to solve real-world problems
              with thoughtful digital design. From academic research to
              full-stack projects — I bring ideas to life on the web. 💡
            </p>
            <div className="mt-4">
              <Link
                to="/about"
                className="text-primary font-semibold underline hover:opacity-80"
              >
                Learn more about me in the About section →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 🔷 Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full bg-white/90 dark:bg-darkbg/70 backdrop-blur-md rounded-[32px] shadow-xl px-8 py-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-10"
        >
          <div className="flex items-center justify-center">
            <div className={`${circleClass} ${outerGradient}`}>
              <div
                className={`w-full h-full ${innerGradient} border-4 border-white rounded-full flex items-center justify-center text-center px-4`}
              >
                <div className="text-white text-lg md:text-xl font-bold leading-snug">
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center"
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
                className="px-4 py-2 w-full max-w-[150px] whitespace-nowrap text-ellipsis overflow-hidden text-center text-sm md:text-base bg-gray-100 text-gray-800 rounded-full shadow hover:bg-gray-200 hover:scale-105 transition-all font-medium"
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
          className="flex flex-col sm:flex-row justify-center gap-6 mt-4"
        >
          <Link
            to="/projects"
            className="px-7 py-4 text-lg font-bold text-white rounded-full shadow-xl bg-gradient-to-br from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] hover:scale-110 hover:saturate-150 hover:shadow-2xl transition-all"
          >
            🚀 View Projects
          </Link>

          <a
            href="https://github.com/FFMahani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 text-lg font-bold text-white rounded-full shadow-xl bg-gradient-to-br from-[#1d4ed8] via-[#3b82f6] to-[#06b6d4] hover:scale-110 hover:saturate-150 hover:shadow-2xl transition-all"
          >
            📄 Explore Resume
          </a>

          <Link
            to="/cv"
            className="px-7 py-4 text-lg font-bold text-white rounded-full shadow-xl bg-gradient-to-br from-[#f43f5e] via-[#ec4899] to-[#a855f7] hover:scale-110 hover:saturate-150 hover:shadow-2xl transition-all"
          >
            💻 Visit GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
