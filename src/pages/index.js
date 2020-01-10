import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bear from '../components/bear';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bear />
  </Layout>
);

export default IndexPage;
