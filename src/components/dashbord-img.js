import React from 'react';

import { useStaticQuery, graphql } from 'gatsby'; // to query for image data
import Img from 'gatsby-image'; // to take image data and render it

const DashboardIMG = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dashboard.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Img
      className="dashboard-img"
      fluid={data.file.childImageSharp.fluid}
      alt="Image of a dashboard with red background"
    />
  );
};

export default DashboardIMG;
