import React from "react";
import "./Hero.css";
import profileImg from "../../assets/profile-image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume.pdf";

function Hero() {
  return (
    <div id="home" className="hero">
      <div className="hero-badge">
        <span className="hero-badge-dot"></span>
        Available for opportunities
      </div>

      <img src={profileImg} alt="Kipkoech Linus Ngetich" />

      <h1>
        <span>Kipkoech Linus Ngetich</span>
        Systems &amp; Android Developer
      </h1>

      <p>
        I build reliable Android apps, enterprise integrations, and database-driven
        systems — and I'm expanding into AI/ML to bring intelligence into the products
        I ship. Final-year Computer Science student at Kabarak University, currently
        an ICT Intern at Greenland Fedha PLC.
      </p>

      <div className="hero-stats">
        <div className="hero-stat">
          <h3>3+</h3>
          <p>Years hands-on experience</p>
        </div>
        <div className="hero-stat">
          <h3>2</h3>
          <p>Hackathons</p>
        </div>
        <div className="hero-stat">
          <h3>4+</h3>
          <p>Projects shipped</p>
        </div>
      </div>

      <div className="hero-action">
        <AnchorLink className="hero-con" href="#projects" offset={50}>
          View My Work
        </AnchorLink>
        <AnchorLink className="anchorlink hero-connect" href="#contact" offset={50}>
          Connect with me
        </AnchorLink>
        <a href={resume} download="Linus-Ngetich-Resume.pdf" className="hero-resume">
          Download CV
        </a>
      </div>

      <div className="hero-links">
        <a
          href="https://github.com/Kipkoech78"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Hero;