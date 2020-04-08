import React from 'react';
import SkillsCard from './skills-card';
import SectionTitle from './section-title';
import DiagramSVG from '../images/diagram.svg';
import PostItSVG from '../images/post-it.svg';
import WebDesignSVG from '../images/web-design.svg';
import Research from '../images/research.svg';

const Skills = () => {
  return (
    <div className="skills-container" id="skills" data-aos="fade-down">
      <SectionTitle>Skills</SectionTitle>
      <div className="skills-carousel-container" id="skills">
        <SkillsCard
          header="UX research"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <div>
            <img src={Research} alt="Icon of magnifying glass" />
          </div>
        </SkillsCard>

        <SkillsCard
          header="UI / UX design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <div>
            <img src={WebDesignSVG} alt="Icon of web design" />
          </div>
        </SkillsCard>

        <SkillsCard
          header="Design thinking process"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <div>
            <img src={PostItSVG} alt="Icon of web design" />
          </div>
        </SkillsCard>

        <SkillsCard
          header="Information architecture"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <div>
            <img src={DiagramSVG} alt="Icon of internet browser" />
          </div>
        </SkillsCard>
      </div>
    </div>
  );
};

export default Skills;
