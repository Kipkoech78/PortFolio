// MyWork.jsx
import React from "react";
import "./MyWork.css";
import myProjects from "../../assets/myworkdata";

function MyWork() {
  return (
    <div id="projects" className="mywork">
      <div className="work-title">
        <h1>Projects</h1>
        <p>A selection of what I've built — from Android apps to backend systems.</p>
      </div>

      <div className="work-container">
        {myProjects.map((item) => (
          <div className="program" key={item.id}>
            <div className="program-media">
              {item.image ? (
                <img className="workImg" src={item.image} alt={item.title} />
              ) : (
                <div className="workImg workImg-placeholder">
                  <span>{item.title.charAt(0)}</span>
                </div>
              )}
            </div>

            <div className="program-body">
              <p className="program-category">{item.category}</p>
              <h3 className="program-title">{item.title}</h3>
              <p className="program-desc">{item.description}</p>

              <div className="program-tags">
                {item.tags.map((tag, i) => (
                  <span className="program-tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="program-actions">
                {item.links.live && (
                  <a href={item.links.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {item.links.apk && (
                  <a href={item.links.apk} target="_blank" rel="noopener noreferrer">
                    Download APK
                  </a>
                )}
                {item.links.video && (
                  <a href={item.links.video} target="_blank" rel="noopener noreferrer">
                    Watch Demo
                  </a>
                )}
                {item.links.github && (
                  <a href={item.links.github} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                )}
                {!item.links.live &&
                  !item.links.apk &&
                  !item.links.video &&
                  !item.links.github && (
                    <span className="program-soon">Links coming soon</span>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;