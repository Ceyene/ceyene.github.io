//dependencies
import React from "react";
//projects data
import projectsData from "../../assets/projectsData";
//components
import Project from "../../components/Project/Project";
//styles
import {
  StyledProjectsContainer,
  ProjectsSectionTitle,
  ProjectsExamples,
} from "./ProjectsContainer.elements";

const Projects = () => {
  return (
    <StyledProjectsContainer>
      <ProjectsSectionTitle>Projects:</ProjectsSectionTitle>
      <ProjectsExamples>
        {projectsData.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            description={project.description}
            address={project.link}
            photo={project.photo}
          />
        ))}
      </ProjectsExamples>
    </StyledProjectsContainer>
  );
};

export default Projects;
