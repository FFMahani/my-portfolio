import { motion } from "framer-motion";

const projects = [
  {
    title: "TechStore E-commerce UI",
    description:
      "A fully responsive e-commerce frontend designed from scratch to showcase smart gadgets and tech accessories for a fictional store. Built using React, React Router v6, Bootstrap 5, and custom CSS, it delivers a smooth, modern user experience with elegant UI, seamless navigation, horizontally scrollable product carousel, and simulated login/signup.",
    link: "https://ffmahani.github.io/techstore-frontend/#/",
    image: "public/techstore.png",
    tags: ["React", "Bootstrap", "React Router", "React Hook Form", "Custom CSS"],
  },
  {
    title: "Agency Landing Page",
    description:
      "A fully responsive landing page built with HTML, CSS, and JavaScript as a frontend implementation exercise. It recreates a static layout image from scratch using modern UI/UX and responsive design practices, featuring smooth burger menu transitions, an auto-sliding testimonial carousel with manual controls, anchor link scrolling, and a clean modular file structure.",
    link: "https://ffmahani.github.io/agency-website-project/",
    image: "public/agency.png",
    tags: ["HTML", "CSS", "Vanilla JavaScript", "Responsive Layout", "Static Image Conversion"],
  },
  {
    title: "Sleek Todo List App",
    description:
      "A modern task manager app built with React + Vite and styled using Tailwind CSS. Features include add/edit/delete, keyboard interaction, local storage, responsive layout, and a clean interface for both desktop and mobile.",
    link: "https://ffmahani.github.io/todo-app/",
    image: "public/todo.png",
    tags: ["React", "Vite", "Tailwind CSS", "Local Storage"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A showcase of my frontend journey and capabilities. Designed with attention to detail using React, Tailwind CSS, and Framer Motion. Includes responsive layout, animated interactions, themed UI, and organized project & resume sections.",
    link: "https://ffmahani.github.io/my-portfolio/",
    image: "public/portfolio.png",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-[1.5rem] pt-[3.5rem] pb-[5rem] bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-primary mb-[3rem]">
          Selected Projects
        </h1>

        <div className="grid gap-[2.5rem] sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-[900px]:gap-[2rem] max-[900px]:grid-cols-1">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-xl border border-gray-200 overflow-hidden flex flex-col text-left hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] max-w-[38rem] mx-auto"
            >
              <div className="px-[1rem] pt-[1.2rem] pb-0">
                <div className="w-full p-[1rem] pt-[1.5rem] flex justify-center items-center bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-[13rem] sm:max-h-[14rem] object-contain w-full transition-transform duration-300 hover:scale-105 rounded-xl"
                  />
                </div>
              </div>

              <div className="px-[1.5rem] pt-[1rem] pb-[2rem] flex flex-col h-full">
                <h2 className="text-[1.25rem] font-bold text-primary mb-[0.75rem]">
                  {project.title}
                </h2>
                <p className="text-[0.9rem] text-gray-700 mb-[1.5rem] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-[0.5rem] mb-[1.5rem]">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[0.75rem] px-[0.75rem] py-[0.4rem] bg-gradient-to-br from-[#e0f3fc] via-[#cbe7f9] to-[#f0f9ff] text-primary border border-blue-300 rounded-full font-semibold transition-transform duration-200 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center px-[1.25rem] py-[0.75rem] text-[0.9rem] font-bold text-white rounded-full bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] hover:scale-105 hover:shadow-lg transition-all"
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
