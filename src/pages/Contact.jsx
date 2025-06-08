const Contact = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-lightbg text-gray-800 flex items-center justify-center">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Contact Me</h1>

        <p className="text-base md:text-lg mb-8">
          I’d love to hear from you — whether it’s a collaboration, a job opportunity, or just to say hi!
        </p>

        {/* Contact Info */}
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <a
            href="mailto:your.email@example.com"
            className="text-primary hover:underline"
          >
            your.email@example.com
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
        </div>

        {/* Contact Form (optional submission setup later) */}
        <form className="text-left space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
