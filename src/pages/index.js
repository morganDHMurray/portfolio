import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Heading from '../components/bear';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
