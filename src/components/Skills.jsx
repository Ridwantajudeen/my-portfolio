import React from "react";
import {
  SiSolidity,
  SiChainlink,
  SiEthers,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiVercel,
  SiGithub,
  SiJavascript,
  SiWordpress,
} from "react-icons/si";
import { FaWrench } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [

    {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: <SiJavascript size={30} /> },
      { name: "React", icon: <SiReact size={30} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
      { name: "Next.js", icon: <SiNextdotjs size={30} /> },
    ],
  },
  {
    category: "Web3",
    items: [
      { name: "Solidity", icon: <SiSolidity size={30} /> },
      { name: "Hardhat", icon: <FaWrench size={30} /> },
      { name: "Chainlink", icon: <SiChainlink size={30} /> },
      { name: "Ethers.js", icon: <SiEthers size={30} /> },
    ],
  },

  
  {
    category: "Tools",
    items: [
        { name: "WordPress", icon: <SiWordpress size={30} /> },
      { name: "Git", icon: <SiGithub size={30} /> },
      { name: "Firebase", icon: <SiFirebase size={30} /> },
      { name: "Vercel", icon: <SiVercel size={30} /> },
      
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-black text-white py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Skills</h2>

      <div className="grid gap-10 md:grid-cols-3">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-300">{group.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {group.items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-zinc-900 p-3 rounded-xl hover:bg-zinc-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-purple-400">{skill.icon}</div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
