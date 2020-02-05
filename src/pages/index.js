import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bear from '../components/bear';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bear />
    <About />
    <Skills />
    <Projects />
  </Layout>
);

export default IndexPage;
