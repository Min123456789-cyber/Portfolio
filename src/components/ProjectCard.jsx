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
          <a
            href={live || undefined}
            target={live ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="btn-live"
            style={!live ? { opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" } : {}}
          >
            {liveTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
