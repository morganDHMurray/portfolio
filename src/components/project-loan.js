import React from 'react';

import ProjectTitle from './project-title';
import LoanIMG from './loan-img';
import ProjectParagraph from './project-paragraph';

const ProjectLoan = () => {
  return (
    <div className="project-box project-loan">
      <div className="project-copy">
        <ProjectTitle> Loan selection </ProjectTitle>
        <ProjectParagraph>
          A prototype of a loan selection tool made with Adobe XD.
        </ProjectParagraph>
      </div>
      <div className="coloured-background-loan">
        <LoanIMG></LoanIMG>
      </div>
    </div>
  );
};

export default ProjectLoan;
