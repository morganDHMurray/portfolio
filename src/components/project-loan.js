import React from 'react';

import ProjectTitle from './project-title';
import DashboardIMG from './dashbord-img';
import LoanIMG from './loan-img';
import ProjectParagraph from './project-paragraph';

const ProjectLoan = () => {
  return (
    <div className="project-box">
      <div className="project-copy">
        <ProjectTitle> Loan selection </ProjectTitle>
        <ProjectParagraph>
          A prototype of a loan selection tool made with Adobe XD.
        </ProjectParagraph>
      </div>
      <LoanIMG />
    </div>
  );
};

export default ProjectLoan;
