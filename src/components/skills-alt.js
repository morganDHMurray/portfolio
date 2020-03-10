import React from 'react';
import SkillsCard from './skills-card';
import SkillsLabel from './skill-label';
import SkillsDescription from './skills-description';
import SectionTitle from './section-title';

const SkillsAlt = () => {
  return (
    <div className="skills-container" id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="skills-carousel-container" id="skills">
        <SkillsCard header="UX research" description="more words"></SkillsCard>

        <SkillsCard header="UI design" description="more words"></SkillsCard>
        <SkillsCard header="Skill here" description="more words"></SkillsCard>
        <SkillsCard
          header="Front end development"
          description="more words"
        ></SkillsCard>
      </div>
    </div>
  );
};

export default SkillsAlt;
