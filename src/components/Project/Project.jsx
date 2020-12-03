//dependencies
import React from "react";
//component styles
import {
  StyledProject,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectButton,
} from "./Project.elements";

const Project = ({ key, name, description, address, photo }) => {
  return (
    <StyledProject key={key}>
      <img src={photo} alt={name} />
      <ProjectInfo>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectButton as="a" href={address}>
          Clic here and visit it
        </ProjectButton>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectInfo>
    </StyledProject>
  );
};

export default Project;
