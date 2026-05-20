import React from "react";
import {
  FaCode,
  FaGitAlt,
  FaMobileAlt,
  FaReact,
  FaWordpress,
  FaFire,
  FaAppStore,
  FaGooglePlay,
  FaLock,
  FaCreditCard,
} from "react-icons/fa";
import {
  SiSolidity,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiFirebase,
  SiVercel,
  SiChainlink,
  SiHardhat,
  SiEthers,
  SiJavascript,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiWordpress,
} from "react-icons/si";

const groupedSkills = [
  {
    category: "Mobile Product Skills",
    skills: [
      { name: "React Native", icon: <FaMobileAlt className="text-white text-3xl" /> },
      { name: "Expo", icon: <SiExpo className="text-white text-3xl" /> },
      { name: "Cross-platform Development", icon: <FaCode className="text-white text-3xl" /> },
      { name: "App Store Deployment", icon: <FaAppStore className="text-white text-3xl" /> },
      { name: "Google Play Console", icon: <FaGooglePlay className="text-white text-3xl" /> },
      { name: "Authentication Systems", icon: <FaLock className="text-white text-3xl" /> },
      { name: "Subscription Billing Integration", icon: <FaCreditCard className="text-white text-3xl" /> },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
    ],
  },
  {
    category: "WordPress",
    skills: [
      { name: "WordPress", icon: <SiWordpress className="text-blue-500 text-3xl" /> },
      { name: "Custom Themes", icon: <FaCode className="text-white text-3xl" /> },
      { name: "Elementor", icon: <FaCode className="text-white text-3xl" /> },
      { name: "WooCommerce", icon: <FaCode className="text-white text-3xl" /> },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-400 text-3xl" /> },
      { name: "Express", icon: <SiExpress className="text-white text-3xl" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-300 text-3xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-white text-3xl" /> },
    ],
  },
  {
    category: "Web3",
    skills: [
      { name: "Solidity", icon: <SiSolidity className="text-white text-3xl" /> },
      { name: "Hardhat", icon: <SiHardhat className="text-yellow-400 text-3xl" /> },
      { name: "Chainlink", icon: <SiChainlink className="text-blue-400 text-3xl" /> },
      { name: "Ethers.js", icon: <SiEthers className="text-purple-400 text-3xl" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-16 px-6 md:px-16 bg-black text-white" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">Skills</h2>
      <div className="space-y-10">
        {groupedSkills.map((group, i) => (
          <div key={i}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.skills.map((skill, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center bg-neutral-900 p-4 rounded-2xl shadow hover:scale-105 transition-transform duration-300"
                >
                  {skill.icon}
                  <p className="mt-2 text-sm md:text-base text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
