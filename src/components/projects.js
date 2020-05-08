import React from 'react';

import ProjectDash from './project-dash';
import ProjectLoan from './project-loan';
import SectionTitle from './section-title';

const Projects = () => {
  return (
    <div className="projects" id="projects" data-aos="fade-down">
      <SectionTitle>Projects</SectionTitle>
      <ProjectDash />
      <ProjectLoan />
    </div>
  );
};

export default Projects;
