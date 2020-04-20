import React from 'react';

import ProjectTitle from './project-title';
import DashboardIMG from './dashbord-img';
import ProjectParagraph from './project-paragraph';

const ProjectDash = () => {
  return (
    <div className="project-box">
      <div className="coloured-background-dash">
        <DashboardIMG />
      </div>
      <div className="project-copy">
        <ProjectTitle> Dashboard Design </ProjectTitle>
        <ProjectParagraph>
          A proof of concept made in Adobe XD that displays critical business
          information.
        </ProjectParagraph>
      </div>
    </div>
  );
};

export default ProjectDash;
