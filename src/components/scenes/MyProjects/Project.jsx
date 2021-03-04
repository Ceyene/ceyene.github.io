//dependencies
import React from "react";
//component styles
import {
  StyledProject,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectButton,
  ProjectImg,
} from "./Project.elements";

const Project = ({ key, name, description, address, repo, photo }) => {
  return (
    <StyledProject key={key}>
      <ProjectImg src={photo} alt={name} />
      <ProjectInfo>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectButton as="a" href={address} target="_blank">
          Clic here and visit it
        </ProjectButton>
        <ProjectButton as="a" href={repo} target="_blank">
          See the repository
        </ProjectButton>
      </ProjectInfo>
    </StyledProject>
  );
};

export default Project;
