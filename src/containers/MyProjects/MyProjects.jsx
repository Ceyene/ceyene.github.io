//dependencies
import React from "react";
//projects data
import projectsData from "../../util/projectsData";
//components
import Project from "../../components/scenes/MyProjects/Project";
import HomeLink from "../../components/layout/HomeLink/HomeLink";
//styled components
import {
  ProjectsExamples,
  StyledProjectsContainer,
} from "./MyProjects.elements";
import { StyledMainTitle } from "../../components/styles/globalStyles";

const MyProjects = () => {
  return (
    <StyledProjectsContainer>
      <StyledMainTitle>Projects:</StyledMainTitle>
      <ProjectsExamples>
        {projectsData.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            description={project.description}
            address={project.link}
            repo={project.repo}
            photo={project.photo}
          />
        ))}
      </ProjectsExamples>
      <HomeLink />
    </StyledProjectsContainer>
  );
};

export default MyProjects;
