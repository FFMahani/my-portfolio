const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A fully responsive, React-based portfolio website showcasing my skills, projects, and contact details using Tailwind CSS and React Router.",
    link: "https://yourportfolio.com",
  },
  {
    title: "Weather App",
    description:
      "A React app that fetches real-time weather data using the OpenWeatherMap API, styled with Tailwind CSS.",
    link: "https://yourweatherapp.com",
  },
  {
    title: "Task Manager",
    description:
      "A clean and minimal task tracking app with localStorage support and a focus on productivity and UX.",
    link: "https://yourtaskapp.com",
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
              className="bg-lightbg border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-6 text-left flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>
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
