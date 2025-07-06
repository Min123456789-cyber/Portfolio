import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <img src={props.Image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="d-flex gap-3">
          <a
            href={props.link}
            target="_blank"
            className="btn btn-secondary"
          >
            {props.code}
          </a>
          
          <a
            href={props.live}
            target="_blank"
            className="btn btn-outline-secondary"
          >
            {props.liveTitle}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
