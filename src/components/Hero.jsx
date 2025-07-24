import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-white bg-black px-6">
      <div className="max-w-3xl text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ridwan Tajudeen
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-medium mb-4 text-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Typewriter
            words={[
               'Web developer',
            'Web3 Developer.',
            'React Frontend Developer.',
            'Smart Contract Engineer.',
            
            'I turn ideas into products.',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I bring ideas to life. Whether it’s a sleek Website with React app, a custom WordPress site, or a Web3 smart contract.  
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <Link
            to="/about"
            className="inline-block px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-black transition duration-300"
          >
            Learn More About Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
