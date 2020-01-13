import React from 'react';
import AboutIMG from './about-img';
import SectionTitle from './section-title';
import SectionParagraph from './section-paragraph';

const About = () => (
  <div className="about-container" id="about">
    <AboutIMG />
    <div className="about-content">
      <SectionTitle>About me.</SectionTitle>
      <SectionParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec
        feugiat nisl pretium fusce id velit. Eu sem integer vitae justo eget
        magna fermentum. Sed adipiscing diam donec adipiscing tristique risus
        nec feugiat in. Tempus quam pellentesque nec nam. Felis donec et odio
        pellentesque diam volutpat commodo. Purus in massa tempor nec feugiat
        nisl. Arcu dictum varius duis at consectetur lorem donec massa sapien.
        Augue ut lectus arcu bibendum at varius vel pharetra vel. Non blandit
        massa enim nec. Enim nec dui nunc mattis enim ut tellus elementum
        sagittis. Elementum facilisis leo vel fringilla est ullamcorper eget
        nulla. Arcu ac tortor dignissim convallis aenean. Elit scelerisque
        mauris pellentesque pulvinar pellentesque habitant morbi.
      </SectionParagraph>
    </div>
  </div>
);

export default About;
