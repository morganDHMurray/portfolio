import React from 'react';

import SectionTitle from '../components/section-title';
import BrowserSVG from '../images/browser.svg';
import PostItSVG from '../images/post-it.svg';
import WebDesignSVG from '../images/web-design.svg';

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <SectionTitle>Skills.</SectionTitle>
      <div className="skills-box">
        <div>
          <img src={BrowserSVG} alt="Icon of internet browser" />
          <p>Front-end web</p>
        </div>
        <div>
          <img src={PostItSVG} alt="Icon of post-it notes" />
          <p>Design thinking</p>
        </div>
        <div>
          <img src={WebDesignSVG} alt="Icon of web design" />
          <p>UI UX</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
