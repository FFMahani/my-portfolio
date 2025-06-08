import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#e0f7ff] to-white text-text dark:text-text-light">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center text-center md:text-left gap-12">
        {/* Left Content */}
        <div className="flex-1 bg-white/80 dark:bg-darkbg/80 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7ec4e3] via-[#0a6ab3] to-[#073b7c] bg-clip-text text-transparent mb-4"
          >
            Fatemeh Fouladi Mahani
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl mb-3"
          >
            👩‍💻 Front-End Developer | 🎓 Ph.D. in Electrical Engineering | 🎨
            UI/UX Aesthete
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-base md:text-lg text-gray-700 dark:text-text-light mb-6"
          >
            I craft responsive, accessible, and intuitive interfaces with React
            and Tailwind, grounded in 8+ years of scientific research and a
            passion for clean design. With engineering precision and artistic
            flair, I build modern web experiences that work — and wow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary Button */}
            <a
              href="#projects"
              className="text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] hover:brightness-110"
            >
              View My Projects
            </a>

            {/* Secondary Button */}
            <Link
              to="/cv"
              className="text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] border-2hover:brightness-110"
            >
              Explore My CVs
            </Link>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <div className="p-[4px] bg-gradient-to-br from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] rounded-full">
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Fatemeh Fouladi Mahani"
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
