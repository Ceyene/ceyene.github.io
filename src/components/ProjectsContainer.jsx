//dependencies
import React from "react";
//projects data
import projectsData from "../assets/projectsData";
//components
import Project from "./Project";

const Projects = () => {
  return (
    <section className="Projects">
      <h2 className="Project__title">Projects:</h2>
      <div className="Projects__examples">
        {projectsData.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            description={project.description}
            address={project.link}
            photo={project.photo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
