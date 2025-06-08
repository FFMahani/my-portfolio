const CV = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">CV & Resume</h1>

        {/* Download Links */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <a
            href="/FFMahani-CV-Frontend.pdf"
            download
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2"
          >
            <span>📄</span>
            Frontend CV
          </a>
          <a
            href="/FFMahani-CV-Engineering.pdf"
            download
            className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2"
          >
            <span>📄</span>
            Engineering CV
          </a>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Frontend Summary */}
          <div className="bg-lightbg border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-primary mb-4">Frontend Developer</h2>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>• Proficient in React, Vite, Tailwind CSS, Bootstrap</li>
              <li>• Skilled in responsive design, UI/UX fundamentals, Git & GitHub</li>
              <li>• Developed multiple live projects with elegant, mobile-first layouts</li>
              <li>• Scientific mindset with creative aesthetics (background in painting)</li>
            </ul>
          </div>

          {/* Engineering Summary */}
          <div className="bg-lightbg border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-secondary mb-4">Electrical Engineer</h2>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>• Ph.D. in Electrical Engineering (19.50/20 GPA)</li>
              <li>• 8+ years of research in nanophotonics, plasmonics, THz and optical communications</li>
              <li>• 24+ peer-reviewed publications (318+ citations)</li>
              <li>• Expert in COMSOL, Lumerical, MATLAB, and ML for device simulation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
