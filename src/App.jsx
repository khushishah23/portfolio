import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", padding: "20px", color: "white" }}>
      <nav>
        <Link to="/" style={{ margin: "10px", color: "cyan" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px", color: "cyan" }}>About</Link>
        <Link to="/projects" style={{ margin: "10px", color: "cyan" }}>Projects</Link>
        <Link to="/contact" style={{ margin: "10px", color: "cyan" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
