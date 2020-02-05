import React from 'react';

import SectionTitle from '../components/section-title';
import DashboardIMG from './dashbord-img';

const Projects = () => {
  return (
    <div className="project-container" id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="project-box" id="projects">
        <DashboardIMG />
        <div className="project-copy">
          <p className="project-heading">Dashboard Design</p>
          <p className="project-paragraph">
            A proof of concept made in Adobe XD that displays critical business
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
