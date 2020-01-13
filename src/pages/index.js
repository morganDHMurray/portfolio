import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bear from '../components/bear';
import About from '../components/about';
import Skills from '../components/skills';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bear />
    <About />
    <Skills />
  </Layout>
);

export default IndexPage;
