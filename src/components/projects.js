import React from 'react';

import ProjectDash from './project-dash';
import ProjectLoan from './project-loan';
import SectionTitle from './section-title';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

let transitionColour = {
  hex: 'var(--primary)',
};

const Projects = () => {
  return (
    <div className="projects" id="projects" data-aos="fade-down">
      <SectionTitle>Projects</SectionTitle>
      <ProjectDash />
      <ProjectLoan />
      <AniLink paintDrip to="projectspage" hex={transitionColour}>
        Read more
      </AniLink>
    </div>
  );
};

export default Projects;
