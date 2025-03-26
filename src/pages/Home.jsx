import React from 'react';
import './Home.css';
import profilePic from '../assets/profile.jpg';

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <h1>Hi, I'm Khushi Shah</h1>
        <h2>Event Organizer | Tech Enthusiast</h2>
        <p>
          Passionate about bridging the gap between <strong>technology and business</strong>,
          ensuring seamless user experiences, and managing innovative products.
        </p>
      </div>
      <img src={profilePic} alt="Khushi Shah" className="profile-pic" />
    </section>
  );
};

export default Home;
