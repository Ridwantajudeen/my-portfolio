import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Helmet>
        <title>Ridwan Tajudeen | Web Developer & WordPress Expert</title>
        <meta
          name="description"
          content="Ridwan Tajudeen is a Web Developer and WordPress expert who builds fast, responsive websites and powerful Web3 blockchain applications."
        />
        <meta
          name="keywords"
          content="Ridwan Tajudeen, web developer, WordPress developer, React, Web3 developer, blockchain, Nigeria, portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ridwan Tajudeen | Web Developer & WordPress Expert" />
        <meta
          property="og:description"
          content="I help clients build fast websites, custom WordPress solutions, and Web3 blockchain apps."
        />
        <meta property="og:url" content="https://ridwantajudeen.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ridwantajudeen.vercel.app/preview.png" /> 
      </Helmet>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>

        
        <Projects />
        <Skills />
        <Contact />
      </Router>
    </>
  );
}

export default App;
