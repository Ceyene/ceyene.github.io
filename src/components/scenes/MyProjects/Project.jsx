//dependencies
import React from "react";
//styled components
import {
  StyledProject,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectTechUsed,
  ProjectButton,
  ProjectImg,
} from "./Project.elements";
//styled icons
import { Github } from "@styled-icons/bootstrap/Github";
import { Globe } from "@styled-icons/bootstrap/Globe";

const Project = ({
  key,
  name,
  description,
  technologies,
  address,
  repo,
  photo,
}) => {
  return (
    <StyledProject key={key}>
      <ProjectImg src={photo} alt={name} />
      <ProjectInfo>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectTechUsed>{technologies}</ProjectTechUsed>
        <ProjectButton as="a" href={address} target="_blank">
          <Globe />
          Go to website
        </ProjectButton>
        <ProjectButton as="a" href={repo} target="_blank">
          <Github />
          View repository
        </ProjectButton>
      </ProjectInfo>
    </StyledProject>
  );
};

export default Project;
