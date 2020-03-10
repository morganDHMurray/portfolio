import React from 'react';
import SkillsLabel from './skill-label';
import SkillsDescription from './skills-description';

const SkillsCard = ({ children, header, description }) => {
  return (
    <div className="skills-card">
      <SkillsLabel>{header}</SkillsLabel>
      <SkillsDescription>{description}</SkillsDescription>
    </div>
  );
};

export default SkillsCard;
