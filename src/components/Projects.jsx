import { motion } from "framer-motion";

const projectGroups = [
  {
    title: "Mobile Apps",
    projects: [
      {
        type: "Mobile App",
        title: "The Quiet Space",
        description:
          "A calm, offline-friendly mental wellness app that helps users slow down, reflect, and stay organized with mood check-ins, journaling, reminders, shared support spaces, and premium access.",
        role: "Main developer for a client",
        highlights: [
          "Mood check-ins",
          "Journaling + voice notes",
          "Offline-first sync",
          "iOS and Android IAP",
        ],
        tech: [
          "Expo",
          "React Native",
          "Supabase",
          "Node.js",
          "Express",
          "TanStack Query",
        ],
        appLink: "https://apps.apple.com/ng/app/the-quiet-space/id6764890341",
        websiteLink: "https://thequietspace.app",
        github: null,
        demo: null,
        image: "/quiet-space-home.JPG",
      },
    ],
  },
  {
    title: "Websites",
    projects: [
      {
        type: "Website",
        title: "Doabli",
        description:
          "Doabli is a marketplace that connects clients with trusted people for errands, home services, tech and digital work, creative gigs, and more. Post a job, hire a runner, and get tasks done with secure payments.",
        tech: ["React", "Express (Node.js)", "Tailwind CSS", "Supabase"],
        github: "https://doabli.com/",
        demo: "https://doabli.com/",
        image: "/doabli-homepage.png",
      },
      {
        type: "Website",
        title: "Community Listing",
        description:
          "Browse and share apartment and house listings. Connect directly with landlords. No agents or middlemen.",
        tech: ["React", "Tailwind CSS", "Supabase"],
        github: "https://github.com/Ridwantajudeen/community-listing",
        demo: "https://www.communitylisting.com.ng/",
        image: "/community.png",
      },
      {
        type: "Website",
        title: "Bidly",
        description:
          "A freelance marketplace platform built for clients and freelancers. It allows users to post jobs, place bids, manage profiles, and securely collaborate on projects.",
        tech: ["React", "Tailwind CSS", "Firebase"],
        github: "https://github.com/Ridwantajudeen/bidly",
        demo: "https://bidly-five.vercel.app/",
        image: "/bidly.png",
      },
      {
        type: "Website",
        title: "Escrowd",
        description:
          "A decentralized freelance escrow platform that ensures trust between clients and freelancers using smart contracts.",
        tech: ["Solidity", "React", "Tailwind CSS"],
        github: "https://github.com/Ridwantajudeen/escrowd-frontend01",
        demo: "https://escrowd.vercel.app",
        image: "/escrowdpage.png",
      },
      {
        type: "Website",
        title: "SneakUp",
        description:
          "A premium Nike-inspired e-commerce platform for sneaker lovers. It features high-resolution product displays, smooth scroll animations, a sleek cart experience, and secure PayStack checkout.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Context API", "PayStack"],
        github: "https://github.com/Ridwantajudeen/sneakup",
        demo: "https://sneakup.vercel.app/",
        image: "/sneakup.png",
      },
      {
        type: "Website",
        title: "Little Bee Box",
        description:
          "A professional WordPress website for a gift subscription service. It allows users to explore and subscribe to curated gift boxes, showcasing beautiful product imagery and a seamless user journey.",
        tech: ["WordPress", "Elementor", "WooCommerce"],
        demo: "https://littlebeebox.com",
        image: "/beebox.png",
      },
      {
        type: "Website",
        title: "Onions",
        description:
          "A job-matching platform built for the education sector. Onions helps teachers find new opportunities, assists schools in resolving staffing shortages, and connects parents with qualified educators to improve learning outcomes.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/Ridwantajudeen/onions",
        demo: "https://onions-ten.vercel.app/",
        image: "/onions.png",
      },
      {
        type: "Website",
        title: "Flowers in Wunderland",
        description:
          "A luxury wedding and event florist site powered by WordPress, featuring elegant galleries, brand storytelling, and a seamless booking experience for premium clientele.",
        tech: ["WordPress", "Custom Theme", "Responsive Design"],
        demo: "https://flowersinwunderland.com/",
        image: "/flower.png",
      },
    ],
  },
];

function ProjectPreview({ project }) {
  const isMobileApp = project.type === "Mobile App";

  if (!project.image && isMobileApp) {
    return (
      <div className="bg-[#0f0f0f] p-6 flex justify-center">
        <div className="w-full max-w-[320px] aspect-[9/16] rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-5 shadow-2xl">
          <div className="h-full rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.25),_transparent_45%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.01))] p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center text-xs text-gray-300">
              <span>{project.type}</span>
              <span className="px-2 py-1 rounded-full bg-white/10">Preview</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-purple-300 mb-3">
                The Quiet Space
              </p>
              <h4 className="text-3xl font-bold leading-tight">
                Breathe. Pause. Reset.
              </h4>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-3/4 rounded-full bg-white/10" />
              <div className="h-2 w-1/2 rounded-full bg-white/10" />
              <div className="h-12 rounded-2xl bg-purple-500/20 border border-purple-400/20" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.image) {
    return (
      <div className={isMobileApp ? "bg-[#0f0f0f] p-6 flex justify-center" : ""}>
        <img
          src={project.image}
          alt={project.title}
          className={
            isMobileApp
              ? "w-full max-w-[320px] aspect-[9/16] object-cover rounded-[2rem] border border-white/10 shadow-2xl"
              : "w-full h-64 object-cover"
          }
        />
      </div>
    );
  }

  return null;
}

function ProjectCard({ project }) {
  const primaryLink = project.appLink || project.demo || project.websiteLink;
  const secondaryLink = project.websiteLink && project.websiteLink !== primaryLink ? project.websiteLink : null;

  return (
    <motion.div
      className="bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <ProjectPreview project={project} />

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs uppercase tracking-[0.2em] text-purple-300 bg-purple-900/40 px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-purple-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {project.role ? (
          <p className="text-sm text-gray-400 mb-4">
            Role: <span className="text-purple-300">{project.role}</span>
          </p>
        ) : null}

        {project.highlights ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="text-sm bg-white/5 text-gray-200 px-3 py-1 rounded-full border border-white/10"
              >
                {highlight}
              </span>
            ))}
          </div>
        ) : null}

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

        <div className="flex flex-wrap gap-4">
          {primaryLink ? (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-4 py-2 rounded-xl transition"
            >
              {project.type === "Mobile App" ? "App Store" : "View Project"}
            </a>
          ) : (
            <span className="bg-white/5 text-gray-300 font-medium px-4 py-2 rounded-xl border border-white/10">
              Preview coming soon
            </span>
          )}

          {secondaryLink ? (
            <a
              href={secondaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 text-gray-200 font-medium px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              Website
            </a>
          ) : null}

          {project.type === "Mobile App" ? (
            <span className="bg-white/5 text-gray-300 font-medium px-4 py-2 rounded-xl border border-white/10">
              Play Store under review
            </span>
          ) : null}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline underline-offset-4 hover:text-purple-300"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-16 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400 text-center">
        Projects
      </h2>

      <div className="space-y-16">
        {projectGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
              {group.title}
            </h3>

            <div className="grid gap-12 md:grid-cols-2">
              {group.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
