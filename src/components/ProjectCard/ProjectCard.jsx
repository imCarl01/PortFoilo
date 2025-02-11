import React from "react";
import "./PorjectCard.scss";

const ProjectCard = ({ image, title, description, demoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-btn">
          View Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
