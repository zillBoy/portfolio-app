// React Dependencies
import React from "react";

// Internal Dependencies
import ProjectImage from '../components/project/ProjectImage'

const Project = ({ image, title, description, cta, alt }) => {
  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        <ProjectImage 
          src={require(`../assets/images/${image}.png`)}
          url={cta}
          alt={alt}
        />
        {/* <img
          className="project-image"
          src={require(`../assets/images/${image}.png`)}
          alt={title}
        /> */}
      </div>
      <div className="project-content">
        <h2 className="project-heading">{title}</h2>
        <p className="project-description">{description}</p>
        <a className="project-cta" href={cta} target="_blank">
          Visit
        </a>
      </div>
    </div>
  );
};

export default Project;
