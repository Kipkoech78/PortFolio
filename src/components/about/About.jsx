import React from "react";
import "./About.css";
import profileImg from "../../assets/profile-image.jpg";

const skills = [
  { name: "Kotlin / Jetpack Compose", level: 85 },
   { name: "JavaScript", level: 82 },
  { name: "T-SQL / SQL Server", level: 80 },
  { name: "PostgreSQL & Firebase", level: 75 },
  { name: "C / C++", level: 70 },
  { name: "Python", level: 65 },
  { name: "ERP (Dynamics NAV/BC)", level: 60 },
  { name: "TensorFlow / Keras", level: 50 },
];

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profileImg} alt="Kipkoech Linus Ngetich" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I'm a systems developer with a strong foundation in Android
              development, databases, and enterprise integrations. On mobile,
              I build with Kotlin and Jetpack Compose — implementing secure
              authentication, REST/WebSocket integrations, and payment
              gateways like M-Pesa and PayPal into real applications. On the
              backend, I work extensively with SQL Server (T-SQL), PostgreSQL,
              and Firebase, and have hands-on experience with ERP systems
              through Microsoft Dynamics NAV / Business Central.
            </p>
            <p>
              I'm currently an ICT Intern at Greenland Fedha PLC, applying
              these skills daily in a live enterprise environment, while
              building my own product on the side and expanding into AI/ML
              with TensorFlow and Keras. Final-year Computer Science student
              at Kabarak University, with a track record of shipping projects
              through hackathons and self-directed builds — not just
              coursework.
            </p>
          </div>
          <div className="about-skills">
            {skills.map((skill, i) => (
              <div className="about-skill" key={i}>
                <p>{skill.name}</p>
                <div className="about-skill-track">
                  <div
                    className="about-skill-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>5+</h1>
          <p>CERTIFICATIONS EARNED</p>
        </div>
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECTS SHIPPED</p>
        </div>
      </div>
    </div>
  );
}

export default About;