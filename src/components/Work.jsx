// React Dependencies
import React from "react";

// Internal Dependencies
import Project from "./Project";
import { projects } from "../utils/utils";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="work-heading">Projects</h1>
      {projects.map((project) => (
        <>
          <Project
            key={project.id}
            image={project.image}
            title={project.title}
            alt={project.alt}
            description={project.description}
            cta={project.url}
          />
        </>
      ))}
    </div>
  );
};

export default Work;
