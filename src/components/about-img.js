import React from 'react';

import { useStaticQuery, graphql } from 'gatsby'; // to query for image data
import Img from 'gatsby-image'; // to take image data and render it

const AboutIMG = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-img.jpg" }) {
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
      className="about-img"
      fluid={data.file.childImageSharp.fluid}
      alt="Me looking at camera black and white"
    />
  );
};

export default AboutIMG;
