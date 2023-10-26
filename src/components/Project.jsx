// React Dependencies
import React from "react";

// Internal Dependencies
import ProjectImage from "../components/project/ProjectImage";

const Project = ({ image, title, description, cta, codeLink, alt }) => {
  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        <ProjectImage
          src={require(`../assets/images/${image}.png`)}
          url={cta}
          alt={alt}
        />
      </div>
      <div className="project-content">
        <h2 className="project-heading">{title}</h2>
        <p className="project-description">{description}</p>
        <a className="project-cta" href={cta} target="_blank" rel="noreferrer">
          Visit
        </a>

        {codeLink && (
          <a
            className="code-cta"
            href={codeLink}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
