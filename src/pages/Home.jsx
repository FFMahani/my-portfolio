
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const techLinks = {
  "React": "https://reactjs.org",
  "Vite": "https://vitejs.dev",
  "Tailwind CSS": "https://tailwindcss.com",
  "JavaScript (ES6+)": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "HTML5": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  "CSS3": "https://developer.mozilla.org/en-US/docs/Web/CSS",
  "Bootstrap": "https://getbootstrap.com",
  "Git & GitHub": "https://docs.github.com/en",
  "Figma": "https://www.figma.com"
};

const Home = () => {
  return (
    <section className="min-h-screen px-4 pt-60 pb-20 bg-gradient-to-br from-[#e0f7ff] to-white dark:from-darkbg dark:to-black text-gray-900 dark:text-white flex flex-col items-center justify-start">
      <div className="relative w-full max-w-5xl flex flex-col items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute -top-36 z-30"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-[6px] bg-gradient-to-br from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] rounded-full shadow-2xl"
          >
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Fatemeh Fouladi Mahani"
              className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Intro Card */}
        <div className="w-full mt-44 bg-white/80 dark:bg-darkbg/70 backdrop-blur-md rounded-[32px] shadow-2xl ring-1 ring-black/5 px-6 py-14 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-[#7ec4e3] via-[#0a6ab3] to-[#073b7c] bg-clip-text text-transparent font-sans"
          >
            Hi, I’m Fatemeh Fouladi Mahani <span className="text-primary text-2xl">🤗</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            👩‍💻 Front-End Developer | 🎓 Ph.D. in Electrical Engineering | 🎨 UI/UX Aesthete
          </motion.h2>

          <div className="w-32 h-1 mx-auto my-4 bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] rounded" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-sm md:text-base leading-relaxed text-center text-gray-800 dark:text-gray-200"
          >
            I am a <strong>detail-oriented</strong> and <strong>passionate Front-End Developer</strong> building <strong>modern</strong>, <strong>elegant websites</strong> that are clean, fully responsive, and delightful to use.
            <br /><br />
            I love blending <strong>engineering precision</strong> with <strong>UI/UX creativity</strong> to solve real-world problems with thoughtful digital design.
            <br /><br />
            From academic research to full-stack projects — I bring ideas to life on the web. 💡
            <br /><br />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <Link
                to="/about"
                className="text-primary font-semibold underline hover:opacity-80"
              >
                Learn more about me in the About section →
              </Link>
            </motion.div>
          </motion.p>
        </div>

        {/* Skills Card */}
        <div className="w-full mt-12 max-w-4xl bg-white/80 dark:bg-darkbg/70 backdrop-blur-md rounded-[28px] shadow-xl px-6 py-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            ⚙️ My Core Skills & Tools:
          </motion.h2>

          <div className="w-28 h-1 mx-auto my-3 bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] rounded" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 1.3,
                  staggerChildren: 0.08
                }
              }
            }}
            className="flex flex-wrap justify-center gap-2 mt-4 text-sm"
          >
            {Object.entries(techLinks).map(([tech, link], i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full shadow hover:bg-gray-300 hover:scale-105 transition-all"
              >
                {tech}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >
          <Link
            to="/projects"
            className="bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] text-white px-6 py-3 rounded-full shadow-md hover:brightness-110 hover:scale-105 transition-all font-semibold"
          >
            🚀 View Projects
          </Link>

          <a
            href="https://github.com/FFMahani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold shadow-md text-white bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] hover:brightness-110 hover:scale-105 transition-all"
          >
            💻 Visit GitHub
          </a>

          <Link
            to="/cv"
            className="px-6 py-3 rounded-full font-semibold shadow-md text-white bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] hover:brightness-110 hover:scale-105 transition-all"
          >
            📄 Explore Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
