const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A fully responsive React-based portfolio showcasing my profile, projects, and contact information. Styled with Tailwind CSS, animated with Framer Motion, and deployed on GitHub Pages.",
    link: "https://ffmahani.github.io/my-portfolio/",
    image: "/images/portfolio.png",
    tags: ["React", "Tailwind CSS", "Responsive", "GitHub Pages"],
  },
  {
    title: "To-Do List App",
    description:
      "A sleek and minimalistic task management app with priority levels, edit/save/delete, and full drag-and-drop functionality using dnd-kit. Built in React and styled with Tailwind CSS.",
    link: "https://ffmahani.github.io/todo-app/",
    image: "/todo.png",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Agency Website",
    description:
      "My first front-end website built from scratch using HTML, CSS, and JavaScript. Fully responsive layout mimicking a modern agency homepage design.",
    link: "https://ffmahani.github.io/agency-website/",
    image: "/agency.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    title: "TechStore E-commerce UI",
    description:
      "A modern React + Bootstrap-based e-commerce frontend demo with product carousel, login/signup simulation, client-side validation, and responsive design.",
    link: "https://ffmahani.github.io/techstore-frontend/#/",
    image: "public/techstore.png",
    tags: ["React", "Bootstrap", "E-commerce", "UI/UX"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          My Projects
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-lightbg border border-gray-200 rounded-lg shadow hover:shadow-xl transition p-4 text-left flex flex-col justify-between"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 h-40 object-cover w-full"
              />
              <div>
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-sm bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
