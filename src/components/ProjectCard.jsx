import React from "react";

const ProjectCard = ({ Image, title, description, link, live, code, liveTitle }) => {
  return (
    <div className="project-card">
      <img src={Image} className="project-card-img" alt={title} />
      <div className="project-card-body">
        <h5 className="project-card-title">{title}</h5>
        <p className="project-card-desc">{description}</p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-code">
              {code || "Code"}
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live"
            >
              {liveTitle}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
