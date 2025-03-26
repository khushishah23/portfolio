import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css"; 
import profilePic from "../assets/khushi.jpg"; // Replace with your image path

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1 className="title">
          Hey, I'm{" "}
          <span className="highlight">
            <Typewriter
              words={["Khushi Shah", "a Developer", "a Future PM"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="subtitle">Bridging tech and business with innovation.</p>
        
        <div className="buttons">
          <a href="/projects" className="btn">View My Work</a>
          <a href="/contact" className="btn">Let's Connect</a>
          <a href="/resume.pdf" className="btn">Download Resume</a>
        </div>
      </div>

      <div className="image-section">
        <img src={profilePic} alt="Khushi Shah" className="profile-pic" />
      </div>
    </div>
  );
};

export default Home;
