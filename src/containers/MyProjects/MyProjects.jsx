//dependencies
import React from "react";
//projects data
import projectsData from "../../util/projectsData";
//components
import Project from "../../components/scenes/MyProjects/Project";
//styles
import {
  StyledProjectsContainer,
  ProjectsSectionTitle,
  ProjectsExamples,
} from "./MyProjects.elements";

const MyProjects = () => {
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

export default MyProjects;
