import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="bg-zinc-950 text-white py-16 px-6 md:px-16 animate-fade-up"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
        Get in Touch
      </h2>

      <p className="text-center text-gray-300 mb-8 max-w-xl mx-auto">
        Have a project in mind or just want to connect? I’m open to
        collaborations and new opportunities.
      </p>

      <div className="flex justify-center items-center gap-4 mb-8">
        <Mail className="text-purple-400" />
        <a
          href="mailto:ridwantajudeen8@gmail.com"
          className="text-lg text-white hover:text-purple-400 transition"
        >
          ridwantajudeen8@gmail.com
        </a>
      </div>

      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/Ridwantajudeen/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ridwan-tajudeen/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/Ritajtimi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
