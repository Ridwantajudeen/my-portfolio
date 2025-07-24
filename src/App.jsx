import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
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

        
        <meta property="og:url" content="https://ridwantajudeen.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ridwan Tajudeen | Web Developer & WordPress Expert" />
        <meta
          property="og:description"
          content="I help clients build fast websites, custom WordPress solutions, and Web3 blockchain apps."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/e098907e-60d1-4715-bb76-5b592091ddfc.png?token=HDzKPdOQRjhz462yuLQK2ydmCu3Zw4wfvm2cDBad5us&height=611&width=1200&expires=33289320383"
        />

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ridwantajudeen.vercel.app" />
        <meta property="twitter:url" content="https://ridwantajudeen.vercel.app/" />
        <meta name="twitter:title" content="Ridwan Tajudeen | Web Developer & WordPress Expert" />
        <meta
          name="twitter:description"
          content="I help clients build fast websites, custom WordPress solutions, and Web3 blockchain apps."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/e098907e-60d1-4715-bb76-5b592091ddfc.png?token=HDzKPdOQRjhz462yuLQK2ydmCu3Zw4wfvm2cDBad5us&height=611&width=1200&expires=33289320383"
        />
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
