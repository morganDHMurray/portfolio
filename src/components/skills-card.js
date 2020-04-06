import React from 'react';
import SkillsHeader from './skill-header';
import SkillsDescription from './skills-description';

const SkillsCard = ({ children, header, description }) => {
  return (
    <div className="skills-card">
      <div className="skills-icon">{children}</div>
      <SkillsHeader>{header}</SkillsHeader>
      <SkillsDescription>{description}</SkillsDescription>
    </div>
  );
};

export default SkillsCard;
