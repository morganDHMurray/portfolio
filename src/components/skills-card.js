import React from 'react';
import SkillsLabel from './skill-label';
import SkillsDescription from './skills-description';

const SkillsCard = () => {
  return (
    <div className="skills-card">
      <div>
        <SkillsLabel>UX research</SkillsLabel>
        <SkillsDescription>More words here</SkillsDescription>
      </div>
    </div>
  );
};

export default SkillsCard;
