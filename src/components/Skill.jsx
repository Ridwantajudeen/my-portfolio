import {
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaWordpress,
  FaFire, FaGitAlt
} from "react-icons/fa";
import {
  SiSolidity, SiTailwindcss, SiNextdotjs, SiTypescript,
  SiGit, SiFirebase, SiVercel, SiChainlink, SiHardhat, SiEthers
} from "react-icons/si";

const groupedSkills = [
  {
    category: "Web3",
    skills: [
      { name: "Solidity", icon: <SiSolidity className="text-white text-3xl" /> },
      { name: "Hardhat", icon: <SiHardhat className="text-yellow-400 text-3xl" /> },
      { name: "Chainlink", icon: <SiChainlink className="text-blue-400 text-3xl" /> },
      { name: "Ethers.js", icon: <SiEthers className="text-purple-400 text-3xl" /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-3xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-3xl" /> },
      { name: "WordPress", icon: <FaWordpress className="text-blue-500 text-3xl" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500 text-3xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-white text-3xl" /> },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", icon: <FaFire className="text-red-400 text-3xl" /> },
      { name: "Problem Solving", icon: <FaFire className="text-purple-400 text-3xl" /> },
      { name: "Teamwork", icon: <FaFire className="text-pink-400 text-3xl" /> },
      { name: "Adaptability", icon: <FaFire className="text-green-400 text-3xl" /> },
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
