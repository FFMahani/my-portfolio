import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaTools,
  FaAward,
  FaLanguage,
  FaUserCheck,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const cardClass =
    "bg-gradient-to-br from-white via-blue-50 to-slate-100 rounded-2xl shadow-xl p-[2rem] text-left transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl";

  const titleClass =
    "text-[1.1rem] sm:text-[1.5rem] font-extrabold text-primary mb-[1rem] flex items-center gap-2";

  const itemClass =
    "list-disc list-inside text-[0.95rem] leading-relaxed text-gray-700";

  return (
    <section className="min-h-screen px-[1.5rem] pt-[5rem] pb-[6rem] bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto space-y-[3rem]">
        {/* About Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-[1.5rem] sm:text-[2.5rem] font-extrabold text-primary mb-[1rem]">
            About Me
          </h1>
          <p className="text-[1rem] md:text-[1.1rem] text-gray-700 max-w-3xl mx-auto leading-relaxed text-justify">
            With a foundation in academia and years of high-level research, I’ve
            transformed my engineering expertise into a passion for frontend
            development. My journey spans from solving complex system challenges
            to crafting intuitive digital experiences—merging analytical
            precision with a growing love for visual design and modern web
            technologies. I don’t just code interfaces; I create interactive
            journeys that feel seamless to users. Whether it’s bringing data to
            life with React or fine-tuning layout flow with Tailwind, I thrive
            at the intersection of logic and creativity.{" "}
            <Link
              to="/projects"
              className="underline font-medium text-primary hover:text-blue-900 transition-colors"
            >
              Explore my featured projects here.
            </Link>
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cardClass}
        >
          <h2 className={titleClass}>
            <FaTools className="text-blue-600" />
            Tech Stack and Design
          </h2>
          <ul className="space-y-2 pl-[1rem]">
            <li className={itemClass}>
              <strong>Languages and Technologies:</strong> HTML5, CSS3,
              JavaScript (ES6+)
            </li>
            <li className={itemClass}>
              <strong>Frameworks and Tools:</strong> React (Hooks, Router, JSX),
              Vite
            </li>
            <li className={itemClass}>
              <strong>Styling:</strong> Tailwind CSS, Bootstrap 5, Responsive
              Design
            </li>
            <li className={itemClass}>
              <strong>Deployment:</strong> Git, GitHub, GitHub Pages
            </li>
            <li className={itemClass}>
              <strong>UI/UX:</strong> Visual hierarchy, alignment, layout flow,
              Figma, and Canva
            </li>
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cardClass}
        >
          <h2 className={titleClass}>
            <FaGraduationCap className="text-purple-600" />
            Education
          </h2>
          <ul className="space-y-2 pl-[1rem]">
            <li className={itemClass}>
              Ph.D. in Electrical Engineering – GPA: 19.50/20.00
            </li>
            <li className={itemClass}>
              M.Sc. in Electrical Engineering – GPA: 19.43/20.00
            </li>
            <li className={itemClass}>
              B.Sc. in Electrical Engineering – GPA: 16.16/20.00
            </li>
          </ul>
        </motion.div>

        {/* Awards */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cardClass}
        >
          <h2 className={titleClass}>
            <FaAward className="text-yellow-500" />
            Selected Honors and Awards
          </h2>
          <ul className="space-y-2 pl-[1rem]">
            <li className={itemClass}>
              Scholarship Award for Talented Students – Iran’s National Elites
              Foundation (Dec. 2018 – Feb. 2022)
            </li>
            <li className={itemClass}>
              Excellence in Research Award – Kerman Province (Dec. 2018)
            </li>
            <li className={itemClass}>
              Foreign Research Opportunity Scholarship Award – Iran’s National
              Elites Foundation (Feb. 2023 – Aug. 2023)
            </li>
            <li className={itemClass}>
              Visiting Research Scholarship Award – Ministry of Science of Iran
              (Feb. 2023 – Aug. 2023)
            </li>
            <li className={itemClass}>
              Outstanding Researcher Award – Shahid Bahonar University of Kerman
              (Dec. 2018)
            </li>
            <li className={itemClass}>
              Direct Ph.D./M.Sc. Admission – Exceptional Talents, Shahid Bahonar
              University of Kerman
            </li>
            <li className={itemClass}>
              First-Ranked Ph.D. and M.Sc. Student – Shahid Bahonar University
              of Kerman
            </li>
            <li className={itemClass}>
              Visiting Student Scholarship – Academic Pioneers of Iran (2023)
            </li>
            <li className={itemClass}>
              Research Scholarship Offer – University of Ottawa (2023–2024)
            </li>
          </ul>
        </motion.div>

        {/* Engineering Background */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={cardClass}
        >
          <h2 className={titleClass}>
            <MdWork className="text-green-600" />
            Engineering Background
          </h2>
          <div className="space-y-3 text-justify">
            <p>
              Accomplished Ph.D. in Electrical Engineering with over 8 years of
              research experience and a proven record of academic and research
              excellence. Adept in numerical simulation tools and proficient in
              applying AI/ML techniques to practical, industry-focused projects.
              Experienced in MATLAB and Python, with hands-on use of libraries
              such as NumPy, SciPy, Pandas, and scikit-learn.
            </p>
            <ul className="space-y-2 pl-[1rem] text-left">
              <li>
                <a
                  href="https://scholar.google.com/citations?hl=en&user=e3t3zj4AAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                >
                  🎓 View my Google Scholar profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fatemeh-fouladi-mahani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                >
                  🌐 Connect with me on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={cardClass}
        >
          <h2 className={titleClass}>
            <FaUserCheck className="text-teal-600" />
            Soft Skills and Attributes
          </h2>
          <ul className="space-y-2 pl-[1rem]">
            <li className={itemClass}>
              Effective verbal and written communication skills
            </li>
            <li className={itemClass}>
              Excellent presentation and public speaking abilities
            </li>
            <li className={itemClass}>
              High sense of responsibility and accountability
            </li>
            <li className={itemClass}>
              Strong independent problem-solving and critical thinking
            </li>
            <li className={itemClass}>
              Productive and collaborative team member in cross-functional
              environments
            </li>
          </ul>
        </motion.div>

        {/* Languages */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={cardClass}
        >
          <h2 className={titleClass}>
            <FaLanguage className="text-pink-600" />
            Languages
          </h2>
          <ul className="space-y-2 pl-[1rem]">
            <li className={itemClass}>English (Fluent)</li>
            <li className={itemClass}>Persian (Native)</li>
            <li className={itemClass}>French (Elementary)</li>
          </ul>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center pt-[2rem]"
        >
          <Link
            to="/resume"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-[1.5rem] py-[0.75rem] rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            📄 Read My Full Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
