import React from 'react';
import SkillsCard from './skills-card';
import SectionTitle from './section-title';
import BrowserSVG from '../images/browser.svg';
import PostItSVG from '../images/post-it.svg';
import WebDesignSVG from '../images/web-design.svg';
import Research from '../images/research.svg';

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="skills-carousel-container" id="skills">
        <SkillsCard header="UX research" description="more words">
          <div>
            <img src={Research} alt="Icon of magnifying glass" />
            <p>UX Research</p>
          </div>
        </SkillsCard>

        <SkillsCard header="UI design" description="more words">
          <div>
            <img src={WebDesignSVG} alt="Icon of web design" />
            <p>UI UX</p>
          </div>
        </SkillsCard>

        <SkillsCard header="Skill here" description="more words">
          <div>
            <img src={PostItSVG} alt="Icon of web design" />
            <p>Skill here</p>
          </div>
        </SkillsCard>

        <SkillsCard header="Front end development" description="more words">
          <div>
            <img src={BrowserSVG} alt="Icon of internet browser" />
            <p>Front-end web</p>
          </div>
        </SkillsCard>
      </div>
    </div>
  );
};

export default Skills;
