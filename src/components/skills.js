import React from 'react';
import SkillsCard from './skills-card';
import SectionTitle from './section-title';
import DiagramIcon from './icons/diagram';
import PostitIcon from './icons/post-it';
import ResearchIcon from './icons/research';
import DesignIcon from './icons/design';

const Skills = () => {
  return (
    <div className="skills-container" id="skills" data-aos="fade-down">
      <SectionTitle>Skills</SectionTitle>
      <div className="skills-carousel-container" id="skills">
        <SkillsCard
          header="UX research"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <ResearchIcon></ResearchIcon>
        </SkillsCard>

        <SkillsCard
          header="UI / UX design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <DesignIcon></DesignIcon>
        </SkillsCard>

        <SkillsCard
          header="Design thinking process"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <PostitIcon></PostitIcon>
        </SkillsCard>

        <SkillsCard
          header="Information architecture"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <DiagramIcon></DiagramIcon>
        </SkillsCard>
      </div>
    </div>
  );
};

export default Skills;
