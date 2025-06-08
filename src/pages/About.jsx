const About = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-white text-gray-800 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Me</h1>
        
        <p className="text-base md:text-lg leading-relaxed mb-8">
          I'm a front-end developer with a strong background in engineering and a deep interest in clean, modern web design.
          After transitioning into tech, I discovered a true passion for building responsive, user-friendly digital experiences.
          With a keen eye for UI/UX and a love for turning concepts into code, I strive to craft web interfaces that are as beautiful as they are functional.
        </p>

        <div className="flex justify-center gap-4 flex-wrap text-sm">
          <span className="bg-primary text-white px-4 py-1.5 rounded-full">React</span>
          <span className="bg-primary text-white px-4 py-1.5 rounded-full">Tailwind CSS</span>
          <span className="bg-primary text-white px-4 py-1.5 rounded-full">Responsive Design</span>
          <span className="bg-primary text-white px-4 py-1.5 rounded-full">Clean Code</span>
        </div>
      </div>
    </section>
  );
};

export default About;
