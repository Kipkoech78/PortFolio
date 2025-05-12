import React from "react";
import "./Hero.css";
import profileImg from "../../assets/profile-image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume.pdf";

function Hero() {
  return (
    <div about="home" className="hero">
      <img src={profileImg} alt="" />
      <h1>
        <span>I am Kipkoech Linus</span> a Android Developer and FullStack web
        Developer
      </h1>
      <p>
        {" "}
        I am From Kericho,Kenya with 3years experience in Web development and a
        1 year experience in Android development{" "}
      </p>
      <div className="hero-action">
        <div className="hero-con">
          <AnchorLink className="anchorlink" href="#contact" offset={50}>
            Connect with me
          </AnchorLink>
        </div>
        <div> <a
            href={resume}
            download="linus-Resume.pdf"
            className="hero-resume"
          >
            My Resume
          </a>
         
        </div>
      </div>
    </div>
  );
}

export default Hero;
