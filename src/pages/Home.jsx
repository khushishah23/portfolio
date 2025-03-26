import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1 style={{ fontSize: "3rem", color: "var(--primary-color)" }}>
        Hey, I'm{" "}
        <span style={{ color: "#ff00ff" }}>
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
    </div>
  );
};

export default Home;
