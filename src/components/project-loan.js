import React from 'react';

import ProjectTitle from './project-title';
import LoanIMG from './loan-img';
import ProjectParagraph from './project-paragraph';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

let transitionColour = {
  hex: 'var(--primary)',
};

const ProjectLoan = () => {
  return (
    <div className="project-box project-loan">
      <div className="project-copy">
        <ProjectTitle> Loan selection </ProjectTitle>
        <ProjectParagraph>
          A prototype of a loan selection tool made with Adobe XD.
        </ProjectParagraph>
        <AniLink paintDrip to="projectspage" hex={transitionColour}>
          Read more
        </AniLink>
      </div>
      <div className="coloured-background-loan">
        <LoanIMG></LoanIMG>
      </div>
    </div>
  );
};

export default ProjectLoan;
