import React, { useEffect } from 'react';
import LayoutProjects from '../components/layout-projects';
import DashboardIMG from '../components/dashbord-img';
import ProjectPageContainer from '../components/project-page/project-page-container';
import ProjectPageTitle from '../components/project-page/project-page-title';
import SectionParagraph from '../components/section-paragraph';
import BottomNav from '../components/project-page/bottom-nav';
import ProjectTitle from '../components/project-title';
import PullParagraph from '../components/project-page/pull-paragraph';

const ProjectsPage = () => {
  return (
    <LayoutProjects>
      <ProjectPageContainer>
        <DashboardIMG></DashboardIMG>
        <div className="project-content">
          <ProjectPageTitle>Dashboard</ProjectPageTitle>
          <PullParagraph>
            A proof of concept made in Adobe XD that displays financial business
            information. It was designed in a modular grid, with each card
            featuring a type of data visualization.
          </PullParagraph>
          <SectionParagraph>
            Method Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum.
          </SectionParagraph>
        </div>
      </ProjectPageContainer>
    </LayoutProjects>
  );
};

export default ProjectsPage;
