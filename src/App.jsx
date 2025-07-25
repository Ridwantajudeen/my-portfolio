import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
       

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
