import { motion } from "framer-motion";

const projects = [
  {
    title: "TechStore E-commerce UI",
    description:
      "A modern e-commerce frontend built with React and Bootstrap. Includes product UI, login/signup simulation, and responsive layout.",
    link: "https://ffmahani.github.io/techstore-frontend/#/",
    image: "public/techstore.png",
    tags: ["React", "Bootstrap", "UI/UX", "E-commerce"],
  },
  {
    title: "Agency Website",
    description:
      "My first front-end project, coded from scratch using HTML, CSS, and JavaScript. A clean responsive homepage based on a reference image.",
    link: "https://ffmahani.github.io/agency-website-project/",
    image: "public/agency.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A fully responsive React-based portfolio showcasing my profile, projects, and contact information. Styled with Tailwind CSS, animated with Framer Motion, and deployed on GitHub Pages.",
    link: "https://ffmahani.github.io/my-portfolio/",
    image: "public/portfolio.png",
    tags: ["React", "Tailwind CSS", "Responsive", "GitHub Pages"],
  },
  {
    title: "To-Do List App",
    description:
      "A minimalistic task manager app with priority, drag-and-drop (dnd-kit), edit/delete, and local storage. Built in React + Tailwind CSS.",
    link: "https://ffmahani.github.io/todo-app/",
    image: "public/todo.png",
    tags: ["React", "Tailwind CSS", "Productivity"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 pt-14 pb-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">
          Selected Projects
        </h1>

        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col text-left hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image with padding and better height */}
              <div className="p-4 pb-0">
                <div className="w-full p-4 pt-6 flex justify-center items-center bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-48 sm:max-h-56 object-contain w-full transition-transform duration-300 hover:scale-105 rounded-xl"
                  />
                </div>
              </div>

              <div className="px-6 pt-4 pb-6 flex flex-col h-full">
                <h2 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gradient-to-br from-[#e0f3fc] via-[#cbe7f9] to-[#f0f9ff] text-primary border border-blue-300 rounded-full font-semibold transition-transform duration-200 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center px-6 py-3 text-sm font-bold text-white rounded-full bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] hover:scale-105 hover:shadow-lg transition-all"
                >
                  🔗 View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
