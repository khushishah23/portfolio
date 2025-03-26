import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import profilePic from "../assets/khushi.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="greeting">
          Hi, I'm <span className="name-highlight">Khushi Shah</span>
        </h1>
        <h2 className="typewriter">
          <Typewriter
            words={["Aspiring Product Manager", "Tech Enthusiast", "Event Organizer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="description">
          Passionate about bridging the gap between **technology and business**, ensuring seamless user experiences, and managing innovative products. Currently diving into AI, web development, and product strategy.
        </p>
      </div>
      <div className="home-image">
        <img src={profilePic} alt="Khushi Shah" className="profile-pic" />
      </div>
    </div>
  );
};

export default Home;
