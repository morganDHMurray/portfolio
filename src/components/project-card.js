import React from 'react';
import ProjectTitle from './project-title';
import ProjectParagraph from './project-paragraph';

const ProjectCard = ({ children, title, paragraph }) => {
  return (
    <div className="project- ">
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectParagraph>{paragraph}</ProjectParagraph>
    </div>
  );
};

export default ProjectCard;
