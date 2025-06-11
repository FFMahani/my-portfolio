const Resume = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          🎓 Resume
        </h1>

        {/* Download Buttons */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <a
            href={`${import.meta.env.BASE_URL}FFMahani-CV-Frontend.pdf`}
            download
            className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition duration-300 flex items-center gap-2 shadow-md"
          >
            🔗 Frontend CV
          </a>
          <a
            href={`${import.meta.env.BASE_URL}FFMahani-CV-Engineering.pdf`}
            download
            className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 hover:from-blue-500 hover:to-teal-400 transition duration-300 flex items-center gap-2 shadow-md"
          >
            🔗 Engineering CV
          </a>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Card */}
          <div className="bg-lightbg border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-transparent hover:border-primary bg-gradient-to-b from-white to-gray-50">
            <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              💻 Frontend Developer
            </h2>
            <ul className="text-sm space-y-3">
              <li>• Proficient in React, Vite, Tailwind CSS, Bootstrap</li>
              <li>
                • Skilled in responsive design, UI/UX fundamentals, Git & GitHub
              </li>
              <li>
                • Developed multiple live projects with elegant, mobile-first
                layouts
              </li>
              <li>
                • Scientific mindset with creative aesthetics (background in
                painting)
              </li>
            </ul>
          </div>

          {/* Engineering Card */}
          <div className="bg-lightbg border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-transparent hover:border-primary bg-gradient-to-b from-white to-gray-50">
            <h2 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
              ⚙️ Electrical Engineer
            </h2>
            <ul className="text-sm space-y-3">
              <li>• Ph.D. in Electrical Engineering (19.50/20 GPA)</li>
              <li>• 8+ years of research experience</li>
              <li>• 24+ peer-reviewed publications (318+ citations)</li>
              <li>
                • Expert in simulation tools and AI/ML for practical
                applications
              </li>
              <li>• Recipient of prestigious awards and honors</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
