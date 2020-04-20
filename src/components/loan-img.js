import React from 'react';

import { useStaticQuery, graphql } from 'gatsby'; // to query for image data
import Img from 'gatsby-image'; // to take image data and render it

const LoanIMG = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "loan-mockup.png" }) {
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
      className="loan-img"
      fluid={data.file.childImageSharp.fluid}
      alt="Image of a choose a loan screen with red background"
    />
  );
};

export default LoanIMG;
