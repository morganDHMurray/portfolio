import React, { useEffect } from 'react';
import LayoutProjects from '../components/layout-projects';
import DashboardIMG from '../components/dashbord-img';
import ProjectPageContainer from '../components/project-page/project-page-container';
import ProjectPageTitle from '../components/project-page/project-page-title';
import SectionParagraph from '../components/section-paragraph';
import BottomNav from '../components/project-page/bottom-nav';
import ProjectTitle from '../components/project-title';

const ProjectsPage = () => {
  return (
    <LayoutProjects>
      <ProjectPageContainer>
        <DashboardIMG></DashboardIMG>
        <div className="project-content">
          <ProjectPageTitle>Dashboard</ProjectPageTitle>
          <ProjectTitle>Concept</ProjectTitle>
          <SectionParagraph>
            Concept Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </SectionParagraph>
          <ProjectTitle>Method</ProjectTitle>
          <SectionParagraph>
            Method Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </SectionParagraph>
        </div>
      </ProjectPageContainer>
    </LayoutProjects>
  );
};

export default ProjectsPage;
