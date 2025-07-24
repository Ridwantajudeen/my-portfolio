import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-purple-500">About Me</h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          I'm Ridwan Tajudeen. a <span className="text-purple-400">Frontend Web Developer</span> and 
          <span className="text-purple-400"> Web3 Builder</span> passionate about solving real-world problems with code.
          I bring ideas to life on the web. whether it’s a custom smart contract, a sleek React frontend, or a powerful WordPress website.
        </p>

        <p className="text-lg text-gray-400 mt-4 leading-relaxed">
          On the web development side, I specialize in crafting clean, fast, and responsive websites using 
          <span className="text-purple-400"> React</span>, <span className="text-purple-400">Tailwind CSS</span>, and 
          <span className="text-purple-400"> WordPress</span>. I’ve built everything from business sites to custom blog pages.
        </p>

        <p className="text-lg text-gray-400 mt-4 leading-relaxed">
          In Web3, I write smart contracts with <span className="text-purple-400">Solidity</span>, handle secure
          blockchain interactions, and integrate DApps that people can actually use.
        </p>

        

        <p className="text-lg text-gray-400 mt-4 leading-relaxed">
          Outside of code, I enjoy reading thrillers and creating moments that matter.
        </p><br />
        <Link
                  to="/"
                  className="inline-block px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-black transition duration-300"
                >
                 Go Back
                </Link>
      </motion.div>
      
    </section>
  );
};

export default About;
