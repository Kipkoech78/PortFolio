import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Founder & Developer",
    company: "Service Marketplace Platform", // rename anytime once you land on a name
    duration: "2026 – Present",
    location: "Nairobi, Kenya",
    stageTag: "Testing with users",
    points: [
      "Building a platform connecting plumbers and skilled workers directly with clients who need their services.",
      "Handling end-to-end development — from matching logic to booking flow.",
      "Currently testing the built product with real users and iterating based on feedback.",
    ],
  },
  {
    role: "ICT Intern",
    company: "Greenland Fedha PLC (GFL)",
    duration: "January 2026 – 2nd may",
    location: "Nairobi, Kenya",
    points: [
      "Write and optimize T-SQL queries, stored procedures, and triggers in SQL Server Management Studio (SSMS), including database backup and recovery operations.",
      "Configure and troubleshoot TCP/IP networks — DHCP and subnetting — to maintain smooth connectivity across the organization.",
      "Support installation and configuration of enterprise software across company systems to improve operational efficiency.",
      "Troubleshoot and configure Point-of-Sale (POS) devices, including hardware integrity testing.",
      "Contribute to an internal asset registry system for tracking and managing ICT resources.",
      "Support ERP workflows and system integrations across departments.",
      "Assist with system maintenance, security hardening, and performance optimization.",
    ],
    recommend: {
      tag: "Recommended",
      quote:
        "\"Mr. Linus proved to be a hardworking person, obedient and reliable... his relationship with fellow staff was rated as harmonious.\" — Senior HR Officer, GFL",
    },
  },
];

function Experience() {
  return (
    <div id="experience" className="experience">
      <h2>
        Work <span>Experience</span>
      </h2>
      <p className="experience-sub">
        Hands-on ICT and systems experience — plus building my own products on the side.
      </p>

      <div className="experience-timeline">
        <div className="experience-line"></div>
        {experiences.map((exp, idx) => (
          <div className="experience-item" key={idx}>
            <div className="experience-dot"></div>
            <div className="experience-card">
              <div className="experience-card-header">
                <div>
                  <h3>
                    {exp.role}
                    {exp.stageTag && <span className="experience-live">{exp.stageTag}</span>}
                    </h3>
                  <h4>{exp.company}</h4>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              <p className="experience-location">{exp.location}</p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {exp.recommend && (
                <div className="experience-recommend">
                  <span className="experience-recommend-tag">{exp.recommend.tag}</span>
                  <p>{exp.recommend.quote}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;