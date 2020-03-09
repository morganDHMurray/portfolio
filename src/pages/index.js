import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bear from '../components/bear';
import About from '../components/about';
import SkillsAlt from '../components/skills-alt';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bear />
    <About />
    <SkillsAlt />
    <Projects />
  </Layout>
);

export default IndexPage;
