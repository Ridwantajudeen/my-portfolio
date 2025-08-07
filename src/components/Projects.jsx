import { motion } from "framer-motion";

const projects = [
  {
    title: "Bidly",
    description: "A freelance marketplace platform built for clients and freelancers. It allows users to post jobs, place bids, manage profiles, and securely collaborate on projects.",
    tech: [ "React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Ridwantajudeen/bidly",
    demo: "https://bidly-five.vercel.app/",
    image: "/bidly.png", 
  },
  {
    title: "Escrowd",
    description: "A decentralized freelance escrow platform that ensures trust between clients and freelancers using smart contracts.",
    tech: ["Solidity", "React", "Tailwind CSS"],
    github: "https://github.com/Ridwantajudeen/escrowd-frontend01",
    demo: "https://escrowd.vercel.app",
    image: "/escrowdpage.png", 
  },
  {
  title: "SneakUp",
  description: "A premium Nike-inspired e-commerce platform for sneaker lovers. It features high-resolution product displays, smooth scroll animations, a sleek cart experience, and secure PayStack checkout. Designed to mimic luxury brand aesthetics.",
  tech: ["React", "Tailwind CSS", "Framer Motion", "Context API", "PayStack"],
  github: "https://github.com/Ridwantajudeen/sneakup",
  demo: "https://sneakup.vercel.app/",
  image: "/sneakup.png",
},

  {
  title: "Little Bee Box",
  description: "A professional WordPress website for a gift subscription service. It allows users to explore and subscribe to curated gift boxes, showcasing beautiful product imagery and a seamless user journey.",
  tech: ["WordPress", "Elementor", "WooCommerce"],

  demo: "https://littlebeebox.com",
  image: "/beebox.png", 
},
{
  title: "Onions",
  description: "A job-matching platform built for the education sector. Onions helps teachers find new opportunities, assists schools in resolving staffing shortages, and connects parents with qualified educators to improve their children’s academic performance.",
  tech: ["React", "Tailwind CSS", "Framer Motion"],
  github: "https://github.com/Ridwantajudeen/onions",
  demo: "https://onions-ten.vercel.app/",
  image: "/onions.png", 
},
{
  title: "Flowers in Wunderland",
  description: "A luxury wedding/event florist site powered by WordPress, featuring elegant galleries, brand storytelling, and a seamless booking experience for premium clientele.",
  tech: ["WordPress", "Custom Theme", "Responsive Design"],
  
  demo: "https://flowersinwunderland.com/",
  image: "/flower.png", 
},

];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-16 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400 text-center">
        Projects
      </h2>

      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-purple-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-purple-900 text-purple-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-4 py-2 rounded-xl transition"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline underline-offset-4 hover:text-purple-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
