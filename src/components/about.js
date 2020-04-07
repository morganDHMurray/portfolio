import React from 'react';
import AboutIMG from './about-img';
import SectionTitle from './section-title';
import SectionParagraph from './section-paragraph';

const About = () => (
  <div className="about-container" id="about" data-aos="fade-down">
    <AboutIMG />
    <div className="about-content">
      <SectionTitle>About</SectionTitle>
      <SectionParagraph>
        Perth-based Designer specialising in User Interface & Experience Design
        and UX Research. I love using Design Thinking and Human Centred Design
        approaches to solve business problems and help build the right products.
        My design style is very minimalist and I enjoy turning complex processes
        into simple, usable solutions. Industries I have experience workings
        with include mining, health and financial services. When I&apos;m not
        doing Design work I&apos;m usually reading about Design, watching
        architecture shows or trying (and failing) to learn another language.
      </SectionParagraph>
    </div>
  </div>
);

export default About;
