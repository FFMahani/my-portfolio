import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          setIsError(false);
          formRef.current.reset();
        },
        () => {
          setIsError(true);
          setIsSent(false);
        }
      );
  };

  return (
    <section className="min-h-screen px-4 py-20 bg-gradient-to-br from-[#f0f6fd] to-white dark:from-darkbg dark:to-black text-gray-900 dark:text-white flex items-center justify-center">
      <div className="w-full max-w-2xl rounded-3xl bg-white dark:bg-darkbg/80 shadow-xl p-8 md:p-12 text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
          🤝 Contact Me
        </h1>

        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300">
          Whether it’s a collaboration, opportunity, or just to say hello — I’d
          love to hear from you!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl text-primary">
          <a
            href="mailto:fouladi.dev@gmail.com"
            className="hover:text-blue-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/fatemeh-fouladi-mahani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/FFMahani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Email Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid gap-4 text-left"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] text-white font-bold px-6 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition-all"
          >
            📩 Send Message
          </button>

          {isSent && (
            <p className="text-green-600 text-sm mt-2">
              Message sent successfully!
            </p>
          )}
          {isError && (
            <p className="text-red-600 text-sm mt-2">
              Failed to send. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
