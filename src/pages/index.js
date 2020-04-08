import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Heading from '../components/page-heading';

const IndexPage = () => {
  let AOS;
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: 'ease-in-out',
    });
  }, []);
  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <Layout>
      <SEO title="Home" />
      <Heading />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
